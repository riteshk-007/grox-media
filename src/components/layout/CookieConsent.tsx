"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Script from "next/script";
import {
  CONSENT_CHANGED_EVENT,
  OPEN_SETTINGS_EVENT,
  clearTrackingCookies,
  readConsent,
  writeConsent,
  type ConsentStatus,
} from "@/lib/consent";

/**
 * Cookie banner + the ONLY place analytics / advertising scripts are loaded.
 *
 * Nothing from Google Tag Manager, Google Ads or the OpenAI pixel is requested
 * until the visitor presses Accept. Reject (or ignoring the banner) loads none
 * of them. The footer's "Cookie settings" link re-opens the banner so consent
 * can be withdrawn as easily as it was given.
 */
export default function CookieConsent() {
  const [ready, setReady] = useState(false);
  const [status, setStatus] = useState<ConsentStatus | null>(null);
  const [open, setOpen] = useState(false);
  // Was tracking running in this page view? If so, withdrawing needs a reload.
  const trackingWasLoaded = useRef(false);

  useEffect(() => {
    const saved = readConsent();
    setStatus(saved);
    setOpen(saved === null);
    trackingWasLoaded.current = saved === "granted";
    setReady(true);

    const openSettings = () => setOpen(true);
    // Keep several open tabs in step with each other.
    const onStorage = () => setStatus(readConsent());
    window.addEventListener(OPEN_SETTINGS_EVENT, openSettings);
    window.addEventListener("storage", onStorage);
    return () => {
      window.removeEventListener(OPEN_SETTINGS_EVENT, openSettings);
      window.removeEventListener("storage", onStorage);
    };
  }, []);

  const choose = useCallback((next: ConsentStatus) => {
    writeConsent(next);
    setStatus(next);
    setOpen(false);

    if (next === "granted") {
      trackingWasLoaded.current = true;
    } else if (trackingWasLoaded.current) {
      // Scripts already ran in this page view and cannot be unloaded: remove
      // their cookies and reload so the page continues without them.
      clearTrackingCookies();
      window.location.reload();
    }
  }, []);

  if (!ready) return null;

  return (
    <>
      {status === "granted" && <TrackingScripts />}

      {open && (
        <div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-consent-title"
          aria-describedby="cookie-consent-text"
          className="fixed inset-x-3 bottom-3 z-[70] mx-auto max-w-3xl rounded-2xl border border-gray-200 bg-white p-5 shadow-2xl sm:bottom-5 sm:p-6"
        >
          <h2
            id="cookie-consent-title"
            className="text-base font-semibold text-[#111827]"
          >
            Your privacy choices
          </h2>
          <p
            id="cookie-consent-text"
            className="mt-2 text-sm leading-relaxed text-gray-600"
          >
            We would like to use Google Analytics, Google Ads and the OpenAI
            pixel to measure how visitors use this site and how our ads
            perform. These tools are switched off unless you accept. Declining
            does not affect how the site works. You can change your choice at
            any time from &ldquo;Cookie settings&rdquo; in the footer. Read the{" "}
            <Link
              href="/privacy#cookies"
              className="font-medium text-[#1e40af] underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:max-w-md">
            <button
              type="button"
              onClick={() => choose("granted")}
              className="rounded-xl bg-[#002D91] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#001f66] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#002D91] focus-visible:ring-offset-2"
            >
              Accept
            </button>
            <button
              type="button"
              onClick={() => choose("denied")}
              className="rounded-xl bg-[#111827] px-4 py-3 text-sm font-semibold text-white transition hover:bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#111827] focus-visible:ring-offset-2"
            >
              Reject
            </button>
          </div>
        </div>
      )}
    </>
  );
}

/** Moved here from the root layout: rendered only after consent is granted. */
function TrackingScripts() {
  return (
    <>
      {/* Google tag (gtag.js) — Google Ads */}
      <Script
        id="gtag-src"
        async
        src="https://www.googletagmanager.com/gtag/js?id=AW-18372249208"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'AW-18372249208');
        `}
      </Script>

      {/* Google Tag Manager */}
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N9RXMV37');`}
      </Script>

      {/* OpenAI Pixel */}
      <Script id="openai-pixel" strategy="afterInteractive">
        {`!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"S5zogTL9MvAiWfuPh1Wz1b"});`}
      </Script>
    </>
  );
}

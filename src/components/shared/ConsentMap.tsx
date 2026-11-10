"use client";

import { useEffect, useState } from "react";
import { MapPin } from "lucide-react";
import { CONSENT_CHANGED_EVENT, readConsent } from "@/lib/consent";
import { PRIVACY_CONFIG } from "@/lib/privacy";

type ConsentMapProps = {
  title: string;
  /** Google Maps embed URL. Not requested until the visitor agrees. */
  src: string;
  className?: string;
};

/**
 * Google Maps embed that does not contact Google on page load.
 *
 * A Google embed sends the visitor's IP address and browser details to Google
 * as soon as the iframe loads. So we show a placeholder instead, and load the
 * map only if the visitor accepted cookies in the banner or presses "Load map".
 * "Open in Google Maps" is a plain link that does nothing until it is clicked.
 */
export default function ConsentMap({ title, src, className }: ConsentMapProps) {
  const [accepted, setAccepted] = useState(false);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    const sync = () => setAccepted(readConsent() === "granted");
    sync();
    window.addEventListener(CONSENT_CHANGED_EVENT, sync);
    return () => window.removeEventListener(CONSENT_CHANGED_EVENT, sync);
  }, []);

  if (accepted || clicked) {
    return (
      <iframe
        title={title}
        className={className}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src={src}
      />
    );
  }

  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    PRIVACY_CONFIG.registeredAddress
  )}`;

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 bg-gray-50 px-6 py-8 text-center ${className ?? ""}`}
    >
      <MapPin className="h-8 w-8 text-[#002D91]" aria-hidden />
      <p className="max-w-md text-sm leading-relaxed text-gray-600">
        {PRIVACY_CONFIG.registeredAddress}
      </p>
      <p className="max-w-md text-xs leading-relaxed text-gray-500">
        The map is provided by Google. Loading it shares your IP address and
        browser details with Google.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setClicked(true)}
          className="rounded-xl bg-[#002D91] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#001f66]"
        >
          Load map
        </button>
        <a
          href={mapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-xl border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#111827] transition hover:bg-gray-100"
        >
          Open in Google Maps
        </a>
      </div>
    </div>
  );
}

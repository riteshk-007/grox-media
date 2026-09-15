declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    oaiq?: {
      (...args: unknown[]): void;
      q: unknown[];
    };
  }
}

/**
 * Google Tag Manager (GTM) / Google Ads conversion tracking helper.
 * Pushes a custom event to window.dataLayer whenever a lead form is successfully submitted.
 * Also fires the OpenAI Pixel "lead_created" conversion event.
 */
export function trackLeadSubmission(formName: string = "lead_form") {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "lead_form_submitted",
      form_name: formName,
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
    });

    // OpenAI Pixel conversion event
    if (typeof window.oaiq === "function") {
      window.oaiq("measure", "lead_created", { type: "customer_action" });
    }
  }
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

/**
 * Google Tag Manager (GTM) / Google Ads conversion tracking helper.
 * Pushes a custom event to window.dataLayer whenever a lead form is successfully submitted.
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
  }
}

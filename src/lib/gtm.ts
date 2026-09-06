/**
 * Google Tag Manager (GTM) / Google Ads conversion tracking helper.
 * Pushes a custom event to window.dataLayer whenever a lead form is successfully submitted.
 */
export function trackLeadSubmission(formName: string = "lead_form") {
  if (typeof window !== "undefined") {
    const w = window as any;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push({
      event: "lead_form_submitted",
      form_name: formName,
      page_url: window.location.href,
      timestamp: new Date().toISOString(),
    });
  }
}

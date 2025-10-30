export default function trackGAEvent(eventName, eventParams = {}) {
  // Check if gtag function is available before trying to call it
  if (typeof window.gtag !== "undefined") {
    window.gtag("event", eventName, eventParams);

    // Optional: Log the event to the console for easier debugging
    console.log(`GA4 Event Sent: ${eventName}`, eventParams);
  } else {
    // Optional: Log a warning if gtag is not available
    console.warn(
      `GA4 Error: gtag function is undefined. Event '${eventName}' not sent.`
    );
  }
}

// /lib/ga4.js
export const trackEvent = (name, params = {}) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("event", name, { ...params, debug_mode: true });
  console.log("######trackEvent", name, params);
};

export const setUserProperties = (props = {}) => {
  if (typeof window.gtag !== "function") return;
  window.gtag("set", "user_properties", props);
};

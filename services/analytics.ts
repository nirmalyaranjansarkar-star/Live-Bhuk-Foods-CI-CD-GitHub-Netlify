declare global {
  interface Window {
    dataLayer: any[];
  }
}

// GTM Event Helper
export const trackEvent = (eventName: string, params: Record<string, any> = {}) => {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
      timestamp: new Date().toISOString()
    });
    console.log(`[GTM] Event: ${eventName}`, params);
  }
};

export const GTM_EVENTS = {
  SUBSCRIBE_CLICK: 'subscribe_click',
  PLAN_VIEW: 'plan_view',
  CALCULATOR_USE: 'calculator_use',
  CONTACT_SUBMIT: 'contact_submit',
  ADD_TO_CART: 'add_to_cart'
};

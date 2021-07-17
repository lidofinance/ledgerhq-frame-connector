export const isIframe = (): boolean => {
  try {
    return window.self !== window.top;
  } catch (error) {
    return false;
  }
};

export const isLedgerDappBrowserProvider = (): boolean => {
  try {
    const params = new URLSearchParams(window.self.location.search);
    const isEmbed = !!params.get('embed');

    return isIframe() && isEmbed;
  } catch (error) {
    return false;
  }
};

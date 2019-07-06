export default (url, options) => {
  if ("AbortController" in window) {
    const controller = new AbortController();
    const signal = controller.signal;
    return {
      promise: fetch(url, { ...options, signal }),
      cancel: () => controller.abort()
    };
  } else {
    return { promise: fetch(url, options), cancel: () => {} };
  }
};

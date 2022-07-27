export const checkWindowSize = () => {
  let windowSizeLimit = "";

  if (window.innerWidth >= 375 && window.innerWidth < 768) {
    windowSizeLimit = "Phone";
  }
  if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    windowSizeLimit = "Tablet";
  }
  if (window.innerHeight >= 1024) {
    windowSizeLimit = "Desktop";
  }
  return windowSizeLimit;
};

export const checkWindowSize = () => {
  let windowSizeLimit = "";

  if (window.innerWidth >= 375 && window.innerWidth < 768) {
    windowSizeLimit = "Phone";
  } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
    windowSizeLimit = "Tablet";
  } else {
    windowSizeLimit = "Desktop";
  }
  return windowSizeLimit;
};
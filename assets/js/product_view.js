import { setProduct } from "./set_product.js";
import { setLoader, removeLoader } from "./set_remove_loader.js";

document.addEventListener("DOMContentLoaded", () => {
  setLoader(".loading", ".loader")
  setProduct();
});

window.addEventListener("load", (e) => {
  if (e.isTrusted) {
    setInterval(() => {
      removeLoader(".loader");
    }, 2000);
  }
});
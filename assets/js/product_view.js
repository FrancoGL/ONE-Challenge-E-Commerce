import { setProduct } from "./set_product.js";
import { setLoader, removeLoader } from "./set_remove_loader.js";
import menuProductsAdmin from "./menu_products_admin.js";

document.addEventListener("DOMContentLoaded", () => {
  setLoader(".loading", ".loader");
  setProduct();
  menuProductsAdmin("#item__btn", "#item__link");
});

window.addEventListener("load", (e) => {
  if (e.isTrusted) {
    setInterval(() => {
      removeLoader(".loader");
    }, 2000);
  }
});

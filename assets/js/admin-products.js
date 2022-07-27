import { setProductsAdmin, deleteProductAction } from "./set_products_admin.js";
import { setLoader, removeLoader } from "./set_remove_loader.js";

document.addEventListener("DOMContentLoaded", () => {
  setLoader(".loading", ".loader");
  setProductsAdmin();
});

document.addEventListener("click", (e) => {
  if (e.target.matches(".btn__delete")) {
    deleteProductAction(e.target.dataset.id);
    location.reload();
  }
  if (e.target.matches(".btn__update")) {
    sessionStorage.setItem("update", e.target.dataset.id);
  }
  if (e.target.matches(".header__btn")) {
    sessionStorage.removeItem("update");
  }
});

window.addEventListener("load", (e) => {
  if (e.isTrusted) {
    setInterval(() => {
      removeLoader(".loader");
    }, 2000);
  }
});

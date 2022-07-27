import {
  setProductsElectronics,
  setProductsFurniture,
  setProductsVarious,
} from "./set_products.js";
import { setLoader, removeLoader } from "./set_remove_loader.js";
import { validateInputName } from "./validate_form.js";
import menuProductsAdmin from "./menu_products_admin.js";

document.addEventListener("DOMContentLoaded", () => {
  localStorage.removeItem("offset");
  setLoader(".loading", ".loader");
  setProductsElectronics();
  setProductsFurniture();
  setProductsVarious();
  menuProductsAdmin("#item__btn", "#item__link");
});

const showAllProductsFromCategory = (e) => {
  localStorage.setItem("offset", 0);
  if (e.target.matches(".banner__btn")) {
    localStorage.setItem("category", "3");
  }
  if (e.target.matches(".link--one")) {
    localStorage.setItem("category", "2");
  }
  if (e.target.matches(".link--two")) {
    localStorage.setItem("category", "3");
  }
  if (e.target.matches(".link--three")) {
    localStorage.setItem("category", "5");
  }
};

const showProduct = (e) => {
  if (e.target.matches(".body__link")) {
    localStorage.setItem("productId", `${e.target.dataset.id}`);
  }
};

document.addEventListener("click", (e) => {
  showAllProductsFromCategory(e);
  showProduct(e);
});

document.addEventListener("input", (e) => {
  if (e.target.matches("input") && e.inputType === "insertText") {
    validateInputName();
  }
});

window.addEventListener("load", (e) => {
  if (e.isTrusted) {
    setInterval(() => {
      removeLoader(".loader");
    }, 2000);
  }
});

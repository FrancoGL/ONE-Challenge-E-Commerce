import {
  setProductsElectronics,
  setProductsFurniture,
  setProductsVarious,
} from "./set_products.js";

document.addEventListener("DOMContentLoaded", () => {
  setProductsElectronics();
  setProductsFurniture();
  setProductsVarious();
});

const showAllProductsFromCategory = (e) => {
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

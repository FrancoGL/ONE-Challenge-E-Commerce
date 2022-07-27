import {
  updateProductAction,
  setProduct,
  createProductAction,
} from "./add_update_product.js";

document.addEventListener("DOMContentLoaded", () => {
  const getUpdate = sessionStorage.getItem("update");

  if (getUpdate !== null) {
    const $title = document.querySelector(".fieldset__legend");
    const $btn = document.querySelector(".fieldset__btn");
    $title.textContent = "Update Product";
    $btn.textContent = "Update";
    setProduct(parseInt(getUpdate));
  }
});

document.addEventListener("click", (e) => {
  const getUpdate = parseInt(sessionStorage.getItem("update"));
  if (e.target.matches(".fieldset__btn" && getUpdate !== null)) {
    e.preventDefault();
    updateProductAction(getUpdate);
    location.replace("./admin-products.html");
  }
  if (e.target.matches(".fieldset__btn")) {
    e.preventDefault();
    createProductAction();
    location.replace("./admin-products.html");
  }
});

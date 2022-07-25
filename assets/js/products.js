import { setAllProductsByCategory } from "./set_products_by_category.js";
import { setLoader, removeLoader } from "./set_remove_loader.js";

const setBtnPreviousConfig = () => {
  let offset = parseInt(localStorage.getItem("offset"));

  const $previousBtn = document.getElementById("btn-previous");

  if (offset === 0) {
    $previousBtn.classList.add("disabled");
    $previousBtn.disabled = true;
  }

  if (offset !== 0) {
    $previousBtn.classList.remove("disabled");
    $previousBtn.disabled = false;
  }
};

const setBtnNextConfig = () => {
  let offset = parseInt(localStorage.getItem("offset"));
  let totalProducts = parseInt(localStorage.getItem("totalProducts"));
  let limit = parseInt(localStorage.getItem("limit"));

  const $nextBtn = document.getElementById("btn-next");
  offset = offset + limit;
  if (offset >= totalProducts) {
    $nextBtn.classList.add("disabled");
    $nextBtn.disabled = true;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let getCategory = parseInt(localStorage.getItem("category"));
  setLoader(".loading", ".loader");
  setAllProductsByCategory(getCategory);
  setBtnPreviousConfig();
  setBtnNextConfig();
});

document.addEventListener("click", (e) => {
  let offset = parseInt(localStorage.getItem("offset"));
  let limit = parseInt(localStorage.getItem("limit"));

  if (e.target.matches("#btn-next")) {
    offset = offset + limit;
    localStorage.setItem("offset", offset);
  }

  if (e.target.matches("#btn-previous")) {
    offset = offset - limit;
    localStorage.setItem("offset", offset);
  }
});

window.addEventListener("load", (e) => {
  if (e.isTrusted) {
    setInterval(() => {
      removeLoader(".loader");
    }, 2000);
  }
});

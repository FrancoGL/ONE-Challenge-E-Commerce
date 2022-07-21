import { getAllProducts } from "./crud/get_products.js";
import { generateCardElements } from "./utils/generate_card_elements.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

const setAllProductsByCategory = async (category) => {
  try {
    const products = await getAllProducts(
      `https://api.escuelajs.co/api/v1/categories/${category}/products`
    );

    generateCardElements(products, ".products__list");
  } catch (error) {
    generateErrorElement(".products__list", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  let getCategory = parseInt(localStorage.getItem("category"));
  setAllProductsByCategory(getCategory);
});

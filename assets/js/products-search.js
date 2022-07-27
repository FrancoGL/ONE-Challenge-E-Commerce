import { getAll } from "./crud/get_products.js";
import { generateCardElements } from "./utils/generate_card_elements.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

const search = async (text) => {
  try {
    const products = await getAll();

    const filtered = products.filter((product) =>
      product.title.toLowerCase().includes(text.toLowerCase())
    );

    generateCardElements(filtered, ".products__list");
  } catch (error) {
    generateErrorElement(".products__list", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  if (sessionStorage.getItem("search") !== null) {
    const text = sessionStorage.getItem("search");
    search(text);
  }
});

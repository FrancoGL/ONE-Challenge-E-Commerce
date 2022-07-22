import { getAllProducts, setTotalProductsFromCategory } from "./crud/get_products.js";
import { generateCardElements } from "./utils/generate_card_elements.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

export const setAllProductsByCategory = async (category) => {
  try {
    let offset = parseInt(localStorage.getItem("offset"));
    setTotalProductsFromCategory(
      `https://api.escuelajs.co/api/v1/categories/${category}/products`
    );
    const products = await getAllProducts(
      `https://api.escuelajs.co/api/v1/categories/${category}/products`,
      offset
    );

    generateCardElements(products, ".products__list");
  } catch (error) {
    generateErrorElement(".products__list", error);
  }
};

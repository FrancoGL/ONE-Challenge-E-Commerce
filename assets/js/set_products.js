import { getProducts } from "./crud/get_products.js";
import { generateCardElements } from "./utils/generate_card_elements.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

export const setProductsElectronics = async () => {
  try {
    const products = await getProducts(
      "https://api.escuelajs.co/api/v1/categories/2/products"
    );

    generateCardElements(products, ".list--one");
  } catch (error) {
    generateErrorElement(".list--one", error);
  }
};

export const setProductsFurniture = async () => {
  try {
    const products = await getProducts(
      "https://api.escuelajs.co/api/v1/categories/3/products"
    );

    generateCardElements(products, ".list--two");
  } catch (error) {
    generateErrorElement(".list--two", error);
  }
};

export const setProductsVarious = async () => {
  try {
    const products = await getProducts(
      "https://api.escuelajs.co/api/v1/categories/5/products"
    );

    generateCardElements(products, ".list--three");
  } catch (error) {
    generateErrorElement(".list--three", error);
  }
};

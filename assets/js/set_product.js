import { getProduct, getProducts } from "./crud/get_products.js";
import {
  generateCardElement,
  generateCardElements,
} from "./utils/generate_card_elements.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

const setProductsRelationed = async (categoryId) => {
  try {
    const products = await getProducts(
      `https://api.escuelajs.co/api/v1/categories/${categoryId}/products`
    );

    generateCardElements(products, ".product__list", "template--two");
  } catch (error) {
    console.log(error);
    generateErrorElement(".product__list", error);
  }
};

const setProduct = async () => {
  try {
    let $fragment = document.createDocumentFragment();

    let getId = parseInt(localStorage.getItem("productId"));

    const product = await getProduct(
      `https://api.escuelajs.co/api/v1/products`,
      getId
    );

    let categoryId = await product.category.id;

    const $parentContainer = document.querySelector(".main__product-view");

    const $templateOneProduct = generateCardElement(
      product,
      true,
      "card__template"
    );

    $fragment.appendChild(document.importNode($templateOneProduct, true));

    $parentContainer.prepend($templateOneProduct);

    setProductsRelationed(categoryId);
  } catch (error) {
    generateErrorElement(".main__product-view", error);
  }
};

document.addEventListener("DOMContentLoaded", () => {
  setProduct();
});

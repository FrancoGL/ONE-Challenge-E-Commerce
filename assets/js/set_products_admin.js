import { getAllProducts, setTotalProducts } from "./crud/get_products.js";
import { generateErrorElement } from "./utils/generate_error_element.js";
import { deleteProduct } from "./crud/delete_product.js";

let deleteIconPath = "./assets/icons/delete.svg";
let updateIconPath = "./assets/icons/update.svg";

const generateCardElement = (product, templateName) => {
  const $template = document.getElementById(templateName).content;

  $template.querySelector(".header__img").src = product.images[0];
  $template.querySelector(".header__img").alt = product.title;
  $template.querySelector(".update__link").href = "./add-product.html";
  $template.querySelector(".delete__link").href = "#";
  $template.querySelector(".btn__update").dataset.id = product.id;
  $template.querySelector(".btn__delete").dataset.id = product.id;
  $template.querySelector(".btn__update").src = updateIconPath;
  $template.querySelector(".btn__delete").src = deleteIconPath;
  $template.querySelector(".btn__update").alt = "Update Button";
  $template.querySelector(".btn__delete").alt = "Delete Button";
  $template.querySelector(".body__title").textContent = product.title;
  $template.querySelector(".body__price").textContent = `$ ${product.price}`;

  return $template;
};

const generateCardElements = (productsArray, parentClass, templateName) => {
  let $fragment = document.createDocumentFragment();
  const $productContainer = document.querySelector(`${parentClass}`);

  productsArray.forEach((product) => {
    let $clone = document.importNode(
      generateCardElement(product, templateName),
      true
    );
    $fragment.appendChild($clone);
  });

  $productContainer.appendChild($fragment);
};

export const setProductsAdmin = async () => {
  try {
    let offset = parseInt(localStorage.getItem("offset"));
    setTotalProducts("https://api.escuelajs.co/api/v1/products/");

    const products = await getAllProducts(
      `https://api.escuelajs.co/api/v1/products/`,
      offset
    );

    generateCardElements(products, ".products__list", "card__template");
  } catch (error) {
    generateErrorElement(".products__list", error);
  }
};

export const deleteProductAction = async (id) => {
  try {
    return deleteProduct(`https://api.escuelajs.co/api/v1/products/${id}`);
  } catch (error) {
    generateErrorElement(".products__list", error);
  }
};

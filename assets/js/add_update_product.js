import { updateProduct } from "./crud/update_products.js";
import { createProduct } from "./crud/create_product.js";
import { getProduct } from "./crud/get_products.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

export const createProductAction = async () => {
  try {
    const $imageUrl = document.getElementById("url");
    const $category = document.getElementById("category");
    const $productName = document.getElementById("product-name");
    const $productPrice = document.getElementById("price");
    const $productDescription = document.getElementById("description");
    const body = JSON.stringify({
      title: $productName.value,
      price: $productPrice.value,
      description: $productDescription.value,
      categoryId: 1,
      images: [$imageUrl.value],
    });

    const response = await createProduct(
      "https://api.escuelajs.co/api/v1/products/",
      body
    );

    return response;
  } catch (error) {
    generateErrorElement(".form", error);
  }
};

export const updateProductAction = async (id) => {
  try {
    const $imageUrl = document.getElementById("url");
    const $category = document.getElementById("category");
    const $productName = document.getElementById("product-name");
    const $productPrice = document.getElementById("price");
    const $productDescription = document.getElementById("description");
    const body = JSON.stringify({
      id: id,
      title: $productName.value,
      price: $productPrice.value,
      description: $productDescription.value,
    });

    const response = await updateProduct(
      `https://api.escuelajs.co/api/v1/products/${id}`,
      body
    );
    return response;
  } catch (error) {
    generateErrorElement(".form", error);
  }
};

export const setProduct = async (id) => {
  const $imageUrl = document.getElementById("url");
  const $category = document.getElementById("category");
  const $productName = document.getElementById("product-name");
  const $productPrice = document.getElementById("price");
  const $productDescription = document.getElementById("description");

  try {
    const $product = await getProduct(
      `https://api.escuelajs.co/api/v1/products`,
      id
    );

    $imageUrl.value = $product.images[0];
    $category.value = $product.category.name;
    $productName.value = $product.title;
    $productPrice.value = $product.price;
    $productDescription.value = $product.description;
  } catch (error) {
    generateErrorElement(".form", error);
  }
};

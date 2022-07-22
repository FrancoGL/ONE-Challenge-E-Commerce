export const generateCardElement = (
  product,
  templateName = "card__template"
) => {
  const $template = document.getElementById(templateName).content;

  $template.querySelector(".card__img").src = product.images[0];
  $template.querySelector(".card__img").alt = product.title;
  $template.querySelector(".body__title").textContent = product.title;
  $template.querySelector(".body__price").textContent = `$ ${product.price}`;
  $template.querySelector(".body__link").href = "./product-view.html";
  $template.querySelector(".body__link").textContent = "See Product";
  $template.querySelector(".body__link").dataset.id = product.id;

  return $template;
};

export const generateCardElements = (
  productsArray,
  parentClass,
  templateName
) => {
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

export const generateCardViewElement = (product, templateName) => {
  const $template = document.getElementById(templateName).content;

  $template.querySelector(".card-view__img").src = product.images[0];
  $template.querySelector(".card-view__img").alt = product.title;
  $template.querySelector(".body-view__title").textContent = product.title;
  $template.querySelector(
    ".body-view__price"
  ).textContent = `$ ${product.price}`;
  $template.querySelector(".body-view__description").textContent =
    product.description;

  return $template;
};

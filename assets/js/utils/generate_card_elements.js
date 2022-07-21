export const generateCardElement = (
  product,
  descriptionOrNot,
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
  if (descriptionOrNot) {
    $template.querySelector(".body__description").textContent =
      product.description;
  }

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
      generateCardElement(product, false, templateName),
      true
    );
    $fragment.appendChild($clone);
  });

  $productContainer.appendChild($fragment);
};

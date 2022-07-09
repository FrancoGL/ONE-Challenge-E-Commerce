import {
  starWarsProductList,
  consolesProductList,
  variousProductList,
} from "./products.js";

let allProducts = starWarsProductList.concat(
  consolesProductList.concat(variousProductList)
);
let mainContainer = document.querySelector(".main__product-view");
let productId = JSON.parse(localStorage.getItem("productId"));
let productList = document.querySelector("#product-relationed");

const createProductViewElement = (image, description) => {
  // Card
  let card = document.createElement("div");
  card.classList.add("product-view__card");
  // Card img
  let img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("alt", "Example product");
  img.classList.add("card__img");

  card.appendChild(img);
  // Card body
  let cardBody = document.createElement("div");
  cardBody.classList.add("card__body");
  // Body title
  let bodyTitle = document.createElement("h3");
  bodyTitle.classList.add("body__title");
  bodyTitle.textContent = "Product XYZ";

  cardBody.appendChild(bodyTitle);
  // Body price
  let bodyPrice = document.createElement("p");
  bodyPrice.classList.add("body__price");
  bodyPrice.textContent = "R$ 60,00";

  cardBody.appendChild(bodyPrice);
  // Body description
  let bodyDescription = document.createElement("p");

  bodyDescription.classList.add("body__description");
  bodyDescription.textContent = description;

  cardBody.appendChild(bodyDescription);

  card.appendChild(cardBody);
  return card;
};

const searchProduct = (array) => {
  return array.find((element) => element.id === parseInt(productId));
};

const createProductView = () => {
  let getProduct = searchProduct(allProducts);
  mainContainer.insertBefore(
    createProductViewElement(getProduct.path, getProduct.description),
    mainContainer.firstChild
  );
};

const generateElement = (image, id) => {
  // Card
  let card = document.createElement("div");
  card.classList.add("card");
  // Card img
  let img = document.createElement("img");
  img.setAttribute("src", image);
  img.setAttribute("alt", "Example product");
  img.classList.add("card__img");

  card.appendChild(img);
  // Card body
  let cardBody = document.createElement("div");
  cardBody.classList.add("card__body");
  // Body title
  let bodyTitle = document.createElement("h3");
  bodyTitle.classList.add("body__title");
  bodyTitle.textContent = "Product XYZ";

  cardBody.appendChild(bodyTitle);
  // Body price
  let bodyPrice = document.createElement("p");
  bodyPrice.classList.add("body__price");
  bodyPrice.textContent = "R$ 60,00";

  cardBody.appendChild(bodyPrice);
  // Body link
  let bodyLink = document.createElement("a");
  bodyLink.href = "./product-view.html";
  bodyLink.classList.add("body__link");
  bodyLink.textContent = "See product";
  bodyLink.setAttribute("itemid", id);
  bodyLink.id = "product-view";

  cardBody.appendChild(bodyLink);
  // Add body to card
  card.appendChild(cardBody);
  return card;
};

const generateImgPhoneAndTablet = (imgs) => {
  let elementCount = 0;

  while (elementCount < 4) {
    if (imgs[elementCount].id === productId) {
      elementCount++;
      let pathImage = imgs[elementCount].path;
      let idProduct = imgs[elementCount].id;
      productList[elementNumber].appendChild(
        generateElement(pathImage, idProduct)
      );
    } else {
      let pathImage = imgs[elementCount].path;
      let idProduct = imgs[elementCount].id;
      productList.appendChild(generateElement(pathImage, idProduct));
      elementCount++;
    }
  }
};

const setImagesOnPhone = () => {
  let windowSize = window.innerWidth;

  if (windowSize >= 375 && windowSize <= 1024) {
    if (searchProduct(starWarsProductList) !== undefined) {
      generateImgPhoneAndTablet(starWarsProductList);
    } else if (searchProduct(consolesProductList) !== undefined) {
      generateImgPhoneAndTablet(consolesProductList);
    } else if (searchProduct(variousProductList) !== undefined) {
      generateImgPhoneAndTablet(variousProductList);
    }
  }
};

const generateImgDesktop = (imgs) => {
  for (let element of imgs) {
    let pathImage = element.path;
    let idProduct = element.id;
    productList.appendChild(generateElement(pathImage, idProduct));
  }
};

const setImagesOnDesktop = () => {
  let windowSize = window.innerWidth;

  if (windowSize >= 1024) {
    if (searchProduct(starWarsProductList) !== undefined) {
      generateImgDesktop(starWarsProductList);
    } else if (searchProduct(consolesProductList) !== undefined) {
      generateImgDesktop(consolesProductList);
    } else if (searchProduct(variousProductList) !== undefined) {
      generateImgDesktop(variousProductList);
    }
  }
};

createProductView();
window.onload = () => {
  setImagesOnPhone();
  setImagesOnDesktop();
};

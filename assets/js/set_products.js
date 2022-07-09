import {
  starWarsProductList,
  consolesProductList,
  variousProductList,
} from "./products.js";

let productList = document.querySelectorAll(".products__list");

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

const generateImgPhoneAndTablet = (elementNumber, imgs) => {
  for (let i = 0; i < 4; i++) {
    let pathImage = imgs[i].path;
    let idProduct = imgs[i].id;
    productList[elementNumber].appendChild(
      generateElement(pathImage, idProduct)
    );
  }
};

const setImagesOnPhone = () => {
  let windowSize = window.innerWidth;

  if (windowSize >= 375 && windowSize <= 1024) {
    generateImgPhoneAndTablet(0, starWarsProductList);
    generateImgPhoneAndTablet(1, consolesProductList);
    generateImgPhoneAndTablet(2, variousProductList);
  }
};

const generateImgDesktop = (elementNumber, imgs) => {
  for (let element of imgs) {
    let pathImage = element.path;
    let idProduct = element.id;
    productList[elementNumber].appendChild(
      generateElement(pathImage, idProduct)
    );
  }
};

const setImagesOnDesktop = () => {
  let windowSize = window.innerWidth;

  if (windowSize >= 1024) {
    generateImgDesktop(0, starWarsProductList);
    generateImgDesktop(1, consolesProductList);
    generateImgDesktop(2, variousProductList);
  }
};

window.onload = () => {
  setImagesOnPhone();
  setImagesOnDesktop();

  let productLinkView = document.querySelectorAll("#product-view");

  productLinkView.forEach((element) => {
    element.addEventListener("click", (e) => {
      localStorage.setItem(
        "productId",
        JSON.stringify(element.getAttribute("itemid"))
      );
    });
  });
};

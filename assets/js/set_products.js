let productList = document.querySelectorAll(".products__list");
let productCards = document.querySelectorAll(".card");

console.log(productList);

const starWars = [
  "./assets/img/star-wars/baby-joda.webp",
  "./assets/img/star-wars/dark.webp",
];
const consoles = [
  "./assets/img/consoles/console2.webp",
  "./assets/img/consoles/console3.webp",
];
const various = [
  "./assets/img/various/vr.webp",
  "./assets/img/various/pikachu.webp",
];

const generateElement = (image) => {
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
  // Body subtitle
  let bodySubtitle = document.createElement("p");
  bodySubtitle.classList.add("body__subtitle");
  bodySubtitle.textContent = "R$ 60,00";

  cardBody.appendChild(bodySubtitle);
  // Body link
  let bodyLink = document.createElement("a");
  bodyLink.href = "#";
  bodyLink.classList.add("body__link");
  bodyLink.textContent = "See product";

  cardBody.appendChild(bodyLink);
  // Add body to card
  card.appendChild(cardBody);
  return card;
};

const setImg = (elementNumber, imgs) => {
  for (let img of imgs) {
    productList[elementNumber].appendChild(generateElement(img));
  }
};

const setImagesOnDesktop = () => {
  let windowSize = window.innerWidth;

  if (windowSize >= 1024) {
    setImg(0, starWars);
    setImg(1, consoles);
    setImg(2, various);
  }
};

window.onload = () => {
  setImagesOnDesktop();
};

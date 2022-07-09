let productList = document.querySelector(".products__list");

let deleteIconPath = "./assets/icons/delete.svg";
let updateIconPath = "./assets/icons/update.svg";

const starWars = [
  "./assets/img/star-wars/cup.svg",
  "./assets/img/star-wars/darthvader.svg",
  "./assets/img/star-wars/joda.svg",
  "./assets/img/star-wars/startropper.svg",
  "./assets/img/star-wars/baby-joda.svg",
  "./assets/img/star-wars/dark.svg",
];
const consoles = [
  "./assets/img/consoles/xbox.svg",
  "./assets/img/consoles/play.svg",
  "./assets/img/consoles/nintend.svg",
  "./assets/img/consoles/console.svg",
  "./assets/img/consoles/console2.svg",
  "./assets/img/consoles/console3.svg",
];
const various = [
  "./assets/img/various/shirt.svg",
  "./assets/img/various/jostick.svg",
  "./assets/img/various/sonic.svg",
  "./assets/img/various/clock.svg",
  "./assets/img/various/vr.svg",
  "./assets/img/various/pikachu.svg",
];

// Create element

const createElement = (imagePath) => {
  // Card
  let card = document.createElement("div");
  card.classList.add("card");
  // Card header
  let cardHeader = document.createElement("div");
  cardHeader.classList.add("card__header");
  // Card header img
  let imgHeader = document.createElement("img");
  imgHeader.setAttribute("src", imagePath);
  imgHeader.setAttribute("alt", "Example product");
  imgHeader.classList.add("header__img");
  // Card header btn group
  let btnGroup = document.createElement("div");
  btnGroup.classList.add("btn__group");
  // btn group link
  let linkOne = document.createElement("a");
  let linkTwo = document.createElement("a");
  linkOne.href = "#";
  linkTwo.href = "#";
  let linkImgOne = document.createElement("img");
  let linkImgTwo = document.createElement("img");
  linkImgOne.src = deleteIconPath;
  linkImgTwo.src = updateIconPath;
  linkImgOne.alt = "Delete icon";
  linkImgTwo.alt = "Update icon";
  linkImgOne.classList.add("btn__item");

  linkOne.appendChild(linkImgOne);
  linkTwo.appendChild(linkImgTwo);

  btnGroup.appendChild(linkOne);
  btnGroup.appendChild(linkTwo);

  cardHeader.appendChild(imgHeader);
  cardHeader.appendChild(btnGroup);

  card.appendChild(cardHeader);

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

  // Body number
  let bodyNumber = document.createElement("p");
  bodyNumber.classList.add("body__number");
  bodyNumber.textContent = "#1111111";

  cardBody.appendChild(bodyNumber);

  card.appendChild(cardBody);

  return card;
};

const setImg = (imgs) => {
  for (let img of imgs) {
    productList.appendChild(createElement(img));
  }
};

window.onload = () => {
  setImg(starWars);
  setImg(consoles);
  setImg(various);
};

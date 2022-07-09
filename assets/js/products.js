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

let id = 1;
let productName = "Product XYZ";
let productPrice = "$ 60,00";

let lorem =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

const generateObject = (pathImage) => {
  const product = {
    id: id,
    path: pathImage,
    productName: productName,
    price: productPrice,
    description: lorem,
  };
  id++;
  return product;
};

export const starWarsProductList = [];
export const consolesProductList = [];
export const variousProductList = [];

const addProducts = (array, arrayDestination) => {
  for (let path of array) {
    arrayDestination.push(generateObject(path));
  }
};

addProducts(starWars, starWarsProductList);
addProducts(consoles, consolesProductList);
addProducts(various, variousProductList);

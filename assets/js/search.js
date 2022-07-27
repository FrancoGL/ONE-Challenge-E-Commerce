import { checkWindowSize } from "./utils/check_window_size.js";

const setSearchElement = () => {
  const $btn = document.querySelector(".item__btn");
  const $search = document.querySelector(".item--search");
  const $input = document.querySelector(".item__text");
  $search.classList.toggle("active");
  $input.classList.toggle("active");
  $btn.classList.toggle("hidden");
};

document.addEventListener("click", (e) => {
  let limit =
    checkWindowSize().includes("Phone") || checkWindowSize().includes("Tablet")
      ? "Mobile"
      : "Desktop";
  const $input = document.querySelector(".item__text");

  if (
    e.target.matches(".item__loupe") &&
    limit.includes("Mobile") &&
    !$input.matches(".active")
  ) {
    setSearchElement();
  }

  if (
    e.target.matches(".item__loupe") &&
    $input.matches(".active") &&
    $input.value !== ""
  ) {
    sessionStorage.setItem("search", $input.value);
    location.replace("./products-search.html");
  }

  if (e.target.matches(".item__loupe") && limit.includes("Desktop")) {
    sessionStorage.setItem("search", $input.value);
    location.replace("./products-search.html");
  }
});

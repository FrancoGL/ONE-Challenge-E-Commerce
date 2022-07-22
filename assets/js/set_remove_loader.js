import generateLoaderElement from "./utils/generate_loader_element.js"

export const setLoader = (parentElement, loader) => {

  generateLoaderElement(parentElement)
  document.body.style.overflow =  "hidden";

  const $loader = document.querySelector(loader);
  $loader.classList.add("active")
}

export const removeLoader = (loader) => {
  const $loader = document.querySelector(loader);
  $loader.classList.remove("active")
  document.body.style.overflow = "scroll";
}
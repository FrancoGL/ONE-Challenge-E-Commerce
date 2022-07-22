export default function generateLoaderElement(parentElement) {
  const $parentElement = document.querySelector(parentElement);
  const $loader = document.createElement("section");
  const $loaderSvg = document.createElement("img");
  $loader.classList.add("loader");
  $loaderSvg.src = "./assets/loaders/ball-triangle.svg"
  $loaderSvg.alt = "Loader SVG Image"
  $loader.appendChild($loaderSvg);
  $parentElement.appendChild($loader);
}
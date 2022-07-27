export const generateErrorElement = (parentElementClass, errorObject) => {

  const $spanError = document.createElement("span");
  const $parentElement = document.querySelector(parentElementClass);

  $spanError.classList.add("inline__error");

  $spanError.textContent = errorObject.hasOwnProperty("status") ? `${errorObject.status} ${errorObject.statusText}` : "An error occurred";

  $parentElement.appendChild($spanError);
};

export const validateInputName = () => {
  const regexName = new RegExp(/[A-Z]|\d|\W/);
  const $inputElement = document.querySelector(".input__element");

  if ($inputElement.value.match(regexName)) {
    const $spanError = document.createElement("span");
    $spanError.textContent = "Only letters without special characters";
    $spanError.classList.add("error");
    $inputElement.insertAdjacentElement("afterend", $spanError);
    setInterval(() => {
      $spanError.style.display = "none";
    }, 3000);
    $inputElement.parentElement.style.border = "1px solid red";
  } else {
    $inputElement.parentElement.style.border = "1px solid green";
  }
};

export const validateInputEmail = (input) => {
  const regexEmail = new RegExp(/\S+@\S+\.\S+/);

  const $inputEmail = document.querySelector(input);

  if (!$inputEmail.value.match(regexEmail)) {
    const $spanError = document.createElement("span");
    $spanError.textContent = "Invalid email address";
    $spanError.classList.add("error");
    $inputEmail.insertAdjacentElement("afterend", $spanError);
    setInterval(() => {
      $spanError.style.display = "none";
    }, 3000);
    $inputEmail.style.border = "1px solid red";
    return false;
  } else {
    $inputEmail.style.border = "1px solid green";
    return true;
  }
};

export const validatePasswordLength = (input) => {
  const $inputPassword = document.querySelector(input);

  if ($inputPassword.value.length < 8) {
    const $spanError = document.createElement("span");
    $spanError.textContent = "The password must be at least 8 characters";
    $spanError.classList.add("error");
    $inputPassword.insertAdjacentElement("afterend", $spanError);
    setInterval(() => {
      $spanError.style.display = "none";
    }, 3000);
    $inputPassword.style.border = "1px solid red";
    return false;
  } else {
    $inputPassword.style.border = "1px solid green";
    return true;
  }
};

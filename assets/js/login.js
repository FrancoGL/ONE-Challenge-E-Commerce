import { validateInputEmail, validatePasswordLength } from "./validate_form.js";
import { checkAuth } from "./check_auth.js";

document.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputEmail = validateInputEmail("#email");
  const inputPassword = validatePasswordLength("#password");

  if (inputEmail && inputPassword) {
    const email = document.querySelector("#email").value.toString();
    const password = document.querySelector("#password").value.toString();

    checkAuth(email, password, "#form");
  }
});

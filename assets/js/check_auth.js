import { auth } from "./crud/auth.js";
import { generateErrorElement } from "./utils/generate_error_element.js";

export const checkAuth = async (email, password, form) => {
  try {
    const token = await auth(email, password);

    if (token) {
      location.replace("./admin-products.html");
    }
  } catch (error) {
    generateErrorElement(form, {
      status: "Error:",
      statusText: "Account not found",
    });
    setTimeout(() => {
      document.querySelector(".inline__error").remove();
    }, 2000);
  }
};

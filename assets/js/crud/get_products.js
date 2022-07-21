import { checkWindowSize } from "../utils/check_window_size.js";

export const getProducts = async (url) => {
  let limit = checkWindowSize() === "Phone" ? 4 : 7;

  const response = await fetch(`${url}?offset=0&limit=${limit}`);
  const json = await response.json();

  if (!response.ok) {
    throw { status: response.status, statusText: response.statusText };
  }

  return json;
};

export const getAllProducts = async (url) => {
  let limit = 8;
  const response = await fetch(`${url}?offset=0&limit=${limit}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(
      `{status: ${response.status}, statusText: ${response.statusText}}`
    );
  }
  return json;
};

export const getProduct = async (url, id) => {
  const response = await fetch(`${url}/${id}`);
  const json = await response.json();

  if (!response.ok) {
    throw new Error(
      `{status: ${response.status}, statusText: ${response.statusText}}`
    );
  }

  return json;
};

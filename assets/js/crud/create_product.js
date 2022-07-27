export const options = (body) => {
  return {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: body,
  };
};

export const createProduct = async (url, body) => {
  const response = await fetch(url, options(body));

  const json = await response.json();

  if (!response.ok) {
    throw { status: response.status, statusText: response.statusText };
  }

  return json;
};

export const deleteProduct = async (url) => {
  const response = await fetch(url, {
    method: "DELETE",
  });
  const json = await response.json();

  if (!response.ok) {
    throw { status: response.status, statusText: response.statusText };
  }

  return json;
};

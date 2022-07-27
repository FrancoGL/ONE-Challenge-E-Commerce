export default function menuProductsAdmin(btn, link) {
  const $btn = document.querySelector(btn);
  const $link = document.querySelector(link);
  const getToken = localStorage.getItem("token");

  if (getToken !== null) {
    $btn.textContent = "Products";
    $link.href = "./admin-products.html";
  }
}

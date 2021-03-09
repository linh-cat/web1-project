let listProductsEl = document.querySelector("#list-products");
let cartEl = document.querySelector("#cart");
let cartSession = sessionStorage.getItem("cart");
if (cartSession != null) {
  cart = JSON.parse(cartSession);
  cartEl.innerHTML = '<i class="fa fa-shopping-bag"></i>';
}

LoadProductsHTML(listProductsEl, () => {
  let addToCartEls = document.querySelectorAll(".add-to-cart");
  for (let productEl of addToCartEls) {
    productEl.onclick = event => {
      event.preventDefault();
      AddToCart(productEl.getAttribute("data-id"), () => {
        cartEl.innerHTML = cart.length;
        sessionStorage.setItem("cart", JSON.stringify(cart));
      });
    };
  }
});

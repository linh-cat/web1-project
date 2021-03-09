let listProductsmenEl = document.querySelector("#list-products-men");
let cartMenEl = document.querySelector("#cart");
let cartSessionMen = sessionStorage.getItem("cart");

if (cartSessionMen != null) {
  cart = JSON.parse(cartSessionMen);
  cartMenEl.innerHTML = '<i class="fa fa-shopping-bag"></i>';
}

LoadProductsmenHTML(listProductsmenEl, () => {
  let addToCartEls = document.querySelectorAll(".add-to-cart");
  for (let productEl of addToCartEls) {
    productEl.onclick = event => {
      event.preventDefault();
      AddToCart(productEl.getAttribute("data-id"), () => {
        cartMenEl.innerHTML = cart.length;
        sessionStorage.setItem("cart", JSON.stringify(cart));
      });
    };
  }
});

let listProductswomenEl = document.querySelector("#list-products-women");
let cartWomenEl = document.querySelector("#cart");
let cartSessionWomen = sessionStorage.getItem("cart");

if (cartSessionWomen != null) {
  cart = JSON.parse(cartSessionWomen);
  cartWomenEl.innerHTML = '<i class="fa fa-shopping-bag"></i>';
}

LoadProductsmenHTML(listProductswomenEl, () => {
  let addToCartEls = document.querySelectorAll(".add-to-cart");
  for (let productEl of addToCartEls) {
    productEl.onclick = event => {
      event.preventDefault();
      AddToCart(productEl.getAttribute("data-id"), () => {
        cartWomenEl.innerHTML = cart.length;
        sessionStorage.setItem("cart", JSON.stringify(cart));
      });
    };
  }
});

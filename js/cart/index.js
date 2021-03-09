let cartEl = document.querySelector("#cart");
let cartProductsEl = document.querySelector("#cart-products");
let cartItemsEl = document.querySelector("#cart-items");
let totalEl = document.querySelector("#total");
let cartSession = sessionStorage.getItem("cart");
let total_bag = document.querySelector("#total_bag");
let order = document.querySelector("#order");

if (cartSession != null) {
  cart = JSON.parse(cartSession);
  cartEl.innerHTML = cart.length;
  cartItemsEl.innerHTML = `(${cart.length} items)`;
  totalEl.innerHTML = "$" + Total();
  total_bag.innerHTML = "$" + Total();
}

LoadCartProductsHTML(cartProductsEl, () => {
  let cartProductsEls = document.querySelectorAll(".remove");
  for (productEl of cartProductsEls) {
    productEl.onclick = event => {
      event.preventDefault();
      let id = productEl.getAttribute("data-id");
      Remove(id, () => {
        sessionStorage.setItem("cart", JSON.stringify(cart));
        location.reload();
      });
    };
  }
});

order.addEventListener("click", function() {
  let userName = window.localStorage.getItem("username");
  if (cart.length > 0 && userName) {
    alert("Bạn Đã Đặt Hàng Thành Công");
  } else {
    alert(
      "Bạn Chưa Chọn Đơn Hàng, Vui Lòng Chọn Đơn Hàng! Hoặc Bạn Chưa Đăng Nhập Tài Khoản!"
    );
  }
});

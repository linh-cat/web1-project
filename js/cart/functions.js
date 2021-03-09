function cartProductHTML(product) {
  return `
    <div class="col-md-3 pl-0">
    <a href="#"><img src="${product.image}" alt="img-cart-1" class="card-img-1" width="300px" height="200px"></a>
    </div>
    <div class="col-md-9 pl-0 pt-3">
    <div class="cart-product-price">
        <span class="shopper">15 shoppers have bought this</span>
        <p>${product.name}</p>
        <h6 class="discount-off">
            <a href="#"><i class="fa fa-inr" aria-hidden="true"></i>$${product.discount}</a>
            <span>
                <i class="fa fa-inr" aria-hidden="true"></i>$${product.price}</span>
            40% OFF  
        </h6>
        <small>Size-L <i class="fa fa-sort-down"></i></small>
        <small>Qty: 1 <i class="fa fa-sort-down"></i></small>
        <div class="product-remove">
            <p class="pull-left"><a href="#" data-id="${product.id}" class="remove">Remove</a></p>
            <p class="pull-right"><a href="#">Move to Wishlist</a></p>
        </div>
    </div>
    </div>
    `;
}

function LoadCartProductsHTML(cartProductsEl, callback) {
  let productsHTML = "";
  for (let i = 0; i < cart.length; i++) {
    productsHTML += cartProductHTML(cart[i]);
  }
  cartProductsEl.innerHTML = productsHTML;
  callback();
}

function Total() {
  let total = 0;
  for (let product of cart) {
    total += product.discount;
  }
  return total;
}

function Remove(id, callback) {
  let index = getProductIndexBy(id);
  cart.splice(index, 1);
  callback();
}

function getProductIndexBy(id) {
  for (let i = 0; i < cart.length; i++) {
    if ((cart[i].id = id)) {
      return i;
    }
  }
  return -1;
}

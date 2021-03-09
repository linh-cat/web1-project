function cartProductHTML(product) {
  return `
  <div class="col-md-4 col-sm-6 space-bottom">
  <div class="product-grid box">
      <div class="product-img">
      <a href="#"><img src="${product.image}" class="pic-1" alt="img-1" width="250px" height="300px"></a>
      </div>
      <div class="social-list">
      <ul>
          <li> <a href="#" data-tip="Quick view" ><i class="fa fa-search"></i></a></li>
          <li><a href="#" data-tip="Add to Wishlist"><i class="fa fa-shopping-bag"></i></a></li>
          <li><a href="#" data-tip="Add to cart"><i class="fa fa-shopping-cart"></i></a></li>
      </ul>
      </div>
      <div class="product-content">
          <ul class="rating">
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
              <li class="fa fa-star"></li>
          </ul>
      <h3 class="title"><a href="#">${product.name}</a></h3>
      <div class="price">
          $${product.discount}
          <span>$${product.price}</span>
      </div>
      <a href="#" class="add-to-cart" data-id="${product.id}"> +Add To Cart</a>
      </div>
  </div>
</div>`;
}

function LoadProductsmenHTML(listProductsmenEl, callback) {
  let productsmenHTML = "";
  for (let i = 0; i < productsmen.length; i++) {
    productsmenHTML += cartProductHTML(productsmen[i]);
  }
  listProductsmenEl.innerHTML = productsmenHTML;
  callback();
}

function AddToCart(productId, callback) {
  cart.push(getProductBy(productId));
  callback();
}

function getProductBy(id) {
  for (product of productsmen) {
    if (id == product.id) {
      return product;
    }
  }
  return null;
}

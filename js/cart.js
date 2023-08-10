const cartRow = document.querySelector('.cart-container')

function getCartCard({id, images, name, price, description, quantity}){
  return `
    <div class="cart-card">
      <div class="cart-card-img">
        <img src="${images[0]}" alt="">
      </div>
      <div class="cart-card-content">
        <h3>${name}</h3>
        <p>${price}$</p>
        <p>${description}</p>
        <button onClick="decreaseQuantity(${id})">-</button>
        <span>${quantity}</span>
        <button onClick="increaseQuantity(${id})">+</button>
      </div>
    </div>
  `
}

function getcartProducts(){
  cartRow.innerHTML = ''
  cart.map((pr) => {
    cartRow.innerHTML += getCartCard(pr)
  })
}

getcartProducts()

function increaseQuantity(id){
  cart = cart.map(pr => {
    if(pr.id === id){
      pr.quantity++
    }
    return pr
  })
  localStorage.setItem('cart', JSON.stringify(cart))
  getcartProducts()
}

function decreaseQuantity(id){
  let product = cart.find((pr) => pr.id === id)

  if(product.quantity === 1){
    let isDelete = confirm('Do you want to delete this product ?')
    if(isDelete){
      cart = cart.filter((pr) => pr.id !== id)
      getCartTotal()
    }
  }else{
    cart = cart.map(pr => {
      if(pr.id === id){
        pr.quantity--
      }
      return pr
    })
  }

  localStorage.setItem('cart', JSON.stringify(cart))
  getcartProducts()
}




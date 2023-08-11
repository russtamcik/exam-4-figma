const cardProductS = document.querySelector('.card-product')

const category = new URLSearchParams(location.search).get('category');

let categoryProducts = products.filter((pr) => pr.category == category)

console.log(categoryProducts); 

function cardProduct(products){
  const productCard = document.createElement('div')
  productCard.className = 'product-card'

  const productCardBody = document.createElement('div')
  productCardBody.className = 'product-card-body'
  
  const productImg = document.createElement('img')
  productImg.src = products.images[0]
  productImg.alt = products.name
  
  productCardBody.appendChild(productImg)
  
  const productCardFooter = document.createElement('div')
  productCardFooter.className = 'product-card-footer'
  

  const productTitle = document.createElement('h3')
  const productTitleText = document.createTextNode(products.name)
  
  productTitle.appendChild(productTitleText)

  // productTitle.innerHTML = `<a href = 'product.html'>${products.name}</a>`

  const productDesc = document.createElement('h4')
  productDesc.innerHTML = products.description
  productDesc.innerHTML = `<a href = 'product.html'>${products.description}</a>`

  
  const productPrice = document.createElement('p')
  productPrice.innerHTML = `${products.price} $`
  
  const productBtn = document.createElement('button')
  productBtn.innerHTML = 'Add to the cart'
  
  productCardFooter.prepend(productBtn)
  productCardFooter.prepend(productPrice)
  productCardFooter.prepend(productDesc)
  productCardFooter.prepend(productTitle)
  
  productCard.append(productCardBody, productCardFooter)
  
  return productCard
}

categoryProducts.map((product) => {
  let card = cardProduct(product)
  cardProductS.append(card)
})
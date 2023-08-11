const productsRow = document.querySelector(".products-row")
const searchInput = document.querySelector(".search-input")
const pagination = document.querySelector(".pagination")

let search = ''

let pages;

let activePage = 1

// function getProductCard(pr){
//   const productCard = document.createElement('div')
//   productCard.className = 'product-card'
  
//   const productCardBody = document.createElement('div')
//   productCardBody = 'product-card-body'
  
//   const productImg = document.createElement('img')
//   productImg.src = pr.images[0]
//   productImg.alt = pr.name
  
//   const productCardFooter = document.createElement('div')
//   productCardFooter.className = 'product-card-footer'
  
//   const productTitle = document.createElement('h3')
//   productTitle.innerHTML = `<a href="product.html">${pr.name}</a>`
  
//   const productText = document.createElement('p')
//   productText.className = pr.price
//   productText.className = pr.description
  
//   const productBtn = document.createElement('button')
//   productBtn.innerHTML = 'Add to the cart'
  
//   productCardFooter.prepend(productBtn)
//   productCardFooter.prepend(productPrice)
//   productCardFooter.prepend(productTitle)

//   productCard.append(productCardBody, productCardFooter)
  
//   return productCard
// }

function getProductCard({id, images, name, description, price, category}){
  let check = cart.find((pr) => pr.id === id)
  
  return `
  <div class="product-card">
    <div class="product-card-body">
      <img src="${images[0]}" alt="${name}">
    </div>
    <div class="product-card-footer">
      <h3><a href="categories.html?category=${category}"> ${name} </a></h3>
      <h4><a href="product.html?product=${id}"> ${description} </a></h4>
      <p> ${price} $</p>
      <button class="${check ? 'active-cart' : ''}" onClick='addToCard(${id})'><b> Add to the cart </b></button>
    </div>
  </div>
  `
}


function getProducts(){
  let result = products.filter((pr) => pr.name.toLowerCase().includes(search) || pr.description.toLowerCase().includes(search))

  pages = Math.ceil(result.length / 10)

  pagination.innerHTML = ''

  for(let i = 1; i <= pages; i++){
    pagination.innerHTML += `<button onClick='getPage(${i})' class="page-item ${i === activePage ? 'page-active' : ''}">${i}</button>`
  }
  
  productsRow.innerHTML = ''

  if(result.length !== 0){
    let first = (activePage - 1) * 10
    let last = activePage * 10
    let lastResult = result.slice(first, last)
    lastResult.map((pr) => {
      productsRow.innerHTML += getProductCard(pr)
    })
  }else{
    productsRow.innerHTML = "<div class='danger'>No products</div>"
  }
}
getProducts()


searchInput.addEventListener('keyup', function() {
  search = this.value.trim().toLowerCase();
  activePage = 1
  getProducts()
})

function addToCard(id){
  let product = products.find((pr) => pr.id === id)
  let check = cart.find((pr) => pr.id === id)

  if(check){
    cart = cart.map((pr) =>{
      if(pr.id === id){
        pr.quantity++
      }
      return pr
    })
  }else{
    product.quantity = 1
    cart.push(product)
  }
  localStorage.setItem('cart', JSON.stringify(cart))
  getProducts()
  getCartTotal()
}

function getPage(page){
  activePage = page
  getProducts()
}
const discountProductRow = document.querySelector('.discount-products-row')
const newProductRow = document.querySelector('.new-products-row')
const popularProductRow = document.querySelector('.popular-products-row')
const tabButtons = document.querySelectorAll('.tab-buttons button')
const tabContents = document.querySelectorAll('.tab-content') 



function getProductCard(products){
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
  // const productTitleText = document.createTextNode(products.name)
  
  // productTitle.appendChild(productTitleText)

  productTitle.innerHTML = `<a href = 'product.html'>${products.name}</a>`
  
  const productPrice = document.createElement('p')
  productPrice.innerHTML = products.price
  
  const productBtn = document.createElement('button')
  productBtn.innerHTML = 'Add to the cart'
  
  productCardFooter.prepend(productBtn)
  productCardFooter.prepend(productPrice)
  productCardFooter.prepend(productTitle)
  
  productCard.append(productCardBody, productCardFooter)
  
  return productCard
}

// products.map((products) => {
//   let card = getProductCard(products)
//   getProductCard.append(card)
// })   

let discountProducts = products.filter((pr) => pr.discount).slice(-4)

discountProducts.map((product) => {
  let card = getProductCard(product)
  discountProductRow.append(card)
})

let newProducts = products.slice(-4)

newProducts.map((product) => {
  let card = getProductCard(product)
  newProductRow.append(card)
})

let popularProducts = products.toSorted((a, b) => a.rating - b.rating).slice(-4)

popularProducts.map((product) => {
  let card = getProductCard(product)
  popularProductRow.append(card)
})

let active = 0

function getTabContents(){
  tabContents.forEach((el, i) => {
    if(i !== active){
      el.style.display = "none"
      tabButtons[i].classList.remove('active-tab')

    }else{
      el.style.display = "block"
      tabButtons[i].classList.add('active-tab')
    }
  })
}

getTabContents()

tabButtons.forEach((el, i) => {
  el.addEventListener("click", function(){
    active = i
    getTabContents()
  })
})

let articles = [
  {
    title: '',
    description: '',
    image: '../assets/images/articles/1.png'
  },  
  {
    title: '',
    description: '',
    image: '../assets/images/articles/2.png'
  },
  {
    title: '',
    description: '',
    image: '../assets/images/articles/3.png'
  }
]
  
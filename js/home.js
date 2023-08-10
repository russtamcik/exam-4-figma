const discountProductRow = document.querySelector('.discount-products-row')
const newProductRow = document.querySelector('.new-products-row')
const popularProductRow = document.querySelector('.popular-products-row')
const tabButtons = document.querySelectorAll('.tab-buttons button')
const tabContents = document.querySelectorAll('.tab-content') 



function getProductCard({id, images, name, category, description, price}){

  let check = cart.find((pr) => pr.id === id)

  const productCard = document.createElement('div')
  productCard.className = 'product-card'

  const productCardBody = document.createElement('div')
  productCardBody.className = 'product-card-body'
  
  const productImg = document.createElement('img')
  productImg.src = images[0]
  productImg.alt = name
  
  productCardBody.appendChild(productImg)


  
  const productCardFooter = document.createElement('div')
  productCardFooter.className = 'product-card-footer'
  
  const productTitle = document.createElement('h3')
  // const productTitleText = document.createTextNode(products.name)
  
  // productTitle.appendChild(productTitleText)

  productTitle.innerHTML = `<a href = "categories.html?category=${category}">${name}</a>`

  const productDesc = document.createElement('h4')
  productDesc.innerHTML = description
  
  const productPrice = document.createElement('p')
  productPrice.innerHTML = `${price} $`
  
  const productBtn = document.createElement('button')
  productBtn.className = check ? 'active-cart' : ''
  productBtn.innerHTML = 'Add to the cart'

  productBtn.addEventListener('click', () => addToCard(id))

  productCardFooter.prepend(productBtn)
  productCardFooter.prepend(productPrice)
  productCardFooter.prepend(productDesc)
  productCardFooter.prepend(productTitle)
  
  productCard.append(productCardBody, productCardFooter)
  
  return productCard
}


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


// products.map((products) => {
//   let card = getProductCard(products)
//   getProductCard.append(card)
// })   

function getProducts(){
  let discountProducts = products.filter((pr) => pr.discount).slice(-4)

  discountProductRow.innerHTML = ''

  discountProducts.map((product) => {
    let card = getProductCard(product)
    discountProductRow.append(card)
  })

  let newProducts = products.slice(-4)

  newProductRow.innerHTML = ''

  newProducts.map((product) => {
    let card = getProductCard(product)
    newProductRow.append(card)
  })

  let popularProducts = products.toSorted((a, b) => a.rating - b.rating).slice(-4)

  popularProductRow.innerHTML = ''

  popularProducts.map((product) => {
    let card = getProductCard(product)
    popularProductRow.append(card)
  })
}

getProducts()



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

  
const headerBtn = document.querySelector('.dropbtn')
const headerMenuBtn = document.querySelector('.categori-menu')
const cartTotal = document.querySelector('.cart')

headerBtn.addEventListener('click', function() {
  headerMenuBtn.style.display = headerMenuBtn.style.display === 'block' ? 'none' : 'block';
});

categories.map((category) => {
  categoriesMenu.innerHTML += `<a href="category.html?category=${category.name}">${category.name}</a>`  
})

function categoriesMenu(data){
  const itemMenu = document.createElement('div')
  itemMenu.className = 'item'

  const allItem = document.createElement('div')
  allItem.className = 'item1'

  const dataItem = document.createElement('a')
  dataItem.innerHTML = data.name

  dataItem.href = `categories.html?category=${data.name}`

  itemMenu.append(allItem)
  allItem.append(dataItem)

  return itemMenu
}

categories.map((category) =>{
  let card = categoriesMenu(category)
  headerMenuBtn.append(card)
})

let cartJson = localStorage.getItem('cart')

let cart = JSON.parse(cartJson) || []

function getCartTotal(){
  cartTotal.textContent = cart.length
}

getCartTotal()
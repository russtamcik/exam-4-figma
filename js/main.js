const headerBtn = document.querySelector('.dropbtn')
const headerMenuBtn = document.querySelector('.categori-menu')
const cartTotal = document.querySelector('.cart')
let loginBtn = document.querySelector('.login')
let closeBtn = document.querySelector('.modal-close')
let modal = document.querySelector('.modal')
let modalContent = document.querySelector('.modal-content')

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



loginBtn.addEventListener("click", () => {
  modal.classList.add('modal-show')
  modalContent.classList.add('modal-content-show')
})

closeBtn.addEventListener('click', () => {
  closeModal()
})

window.addEventListener('click', (e) => {
  if(e.target === modal ){
    closeModal()
  }
})

function closeModal(){
  modal.classList.remove('modal-show')
  modalContent.classList.remove('modal-content-show')
}
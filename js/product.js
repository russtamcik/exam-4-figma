const wrapper = document.querySelector('.wrapper')

function getWrap(products){
  return `
  <div class="wrapper">
    <div class="left">
      <div class="slider">
        <img src="${products.images[0]}" alt="${products.name}">
        <img src="${products.images[0]}" alt="${products.name}">
        <img src="${products.images[0]}" alt="${products.name}">
        <img src="${products.images[0]}" alt="${products.name}">
        <img src="${products.images[0]}" alt="${products.name}">
      </div>
      <img src="${products.images[0]}" alt="${products.name}">
    </div>
    <div class="right">
      <div class="price">
        <div class="price-1">
          <p>${products.price}</p>
          <span>Обычная цена</span>
        </div>
        <div class="price-2">
          <p>${products.price}</p>
          <div class="info">
            <span>С картой Северяночки</span>
            <img src="${products.images[0]}" alt="${products.vname}">
          </div>
        </div>
      </div>
      <div class="btn">
        <button><img src="/icons/shopping-cart.svg" alt="">В корзину</button>
      </div>
      <div class="brend">
        <p>Бренд</p>
        <span>ПРОСТОКВАШИНО</span>
      </div>
      <div class="made">
        <p>Страна производителя</p>
        <span>Россия</span>
      </div>
      <div class="massa">
        <p>Упаковка</p>
        <span>180 г</span>
      </div>
    </div>
  </div>
`
}
products.map((products) => {
  let card = getWrap(products)
  getWrap.append(card)
})   

const productId = new URLSearchParams(location.search).get('product');

let product = products.find((pr) => pr.id == +productId)



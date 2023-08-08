const headerBtn = document.querySelector('.dropbtn')
const headerMenuBtn = document.querySelector('.categori-menu')

headerBtn.addEventListener('click', function() {
  headerMenuBtn.style.display = headerMenuBtn.style.display === 'block' ? 'none' : 'block';
});

categories.map((category) => {
  categoriesMenu.innerHTML += `<a href="category.html?category=${category.name}">${category.name}</a>`  
})

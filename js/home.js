const headerBtn = document.querySelector('.dropbtn')
const headerMenuBtn = document.querySelector('.categori-menu')

headerBtn.addEventListener('click', function() {
  headerMenuBtn.style.display = headerMenuBtn.style.display === 'block' ? 'none' : 'block';
});
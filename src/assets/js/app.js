

var btn = document.querySelector('.button__menu')
var menu = document.querySelector('.header__menu')
var body = document.querySelector('body')
btn.addEventListener('click',function(){
  if (menu.classList.contains('show')){
    menu.classList.remove('show')
    btn.classList.remove('active')
    body.classList.remove('no-scroll')
  } else {
    menu.classList.add('show')
    btn.classList.add('active')
    body.classList.add('no-scroll')
  }
})
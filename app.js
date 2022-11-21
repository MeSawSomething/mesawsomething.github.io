const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger'); //햄버거 버튼
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul'); // 햄버거 리스트 home, service..
const header = document.querySelector('.header.container');

/* 햄버거 상태일때 메뉴 클릭하면 해당란으로 이동시키기 */
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li'); // 햄버거 리스트 home, service..


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if(scroll_position > 250){
    header.style.backgroundColor = '#1F2937';
  }
  else{
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});
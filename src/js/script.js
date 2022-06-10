const humburger = document.querySelector('.humburger'),
   menu = document.querySelector('.menu'),
   closeBtn = document.querySelector('.menu__close');

humburger.addEventListener('click', () => {
   menu.classList.add('active');
});
closeBtn.addEventListener('click', () => {
   menu.classList.remove('active');
});

const percent = document.querySelectorAll('.percentage__sup-percent'),
   coloredLine = document.querySelectorAll('.percentage__sub-color');

   percent.forEach((item, i) => {
      coloredLine[i].style.width = item.innerHTML;
});
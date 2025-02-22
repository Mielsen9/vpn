//Open burger-menu
document.addEventListener('DOMContentLoaded', function() {
  document.addEventListener('click', function (e) {
    documentClick(e); // Викликає першу функцію
  });

  let isMoved = false; // Стежимо за станом елемента (переміщений чи ні)
  const originalContainer = document.querySelector('.header__conteiner'); // Початковий контейнер

  function documentClick(e) {
    const targetItem = e.target;
    
    if (targetItem.closest('.burger-menu__icon')) {
      document.documentElement.classList.toggle('open');
      document.body.classList.toggle('_lock');  // Заберає прокрутку сторінки
    }
  }
  // Прокрутка при кліку nav

  const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
  console.log("e", menuLinks)
  if(menuLinks.length > 0) {
    console.log("1")
    menuLinks.forEach(menuLinks => {
      menuLinks.addEventListener('click', onMenuLinckClick);
      console.log("2")
    })

    function onMenuLinckClick(e) {
      const menuLink = e.target;
      console.log("3")
      if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        console.log("f")
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;
        
        // Закриваємо меню після скролінгу
        document.documentElement.classList.remove('open');
        document.body.classList.remove('_lock');  // Відновлює прокрутку

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth'
        });


        e.preventDefault();
      }
    }
  }
});

//Open burger-menu

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
    moveElement();  // Викликаємо функцію переміщення елемента
  }
}

function moveElement() {
  const container = document.querySelector('.nav__body');
  const item1 = document.querySelector('.comunication');

  if (container && item1 && originalContainer) {
    if (!isMoved) {
      container.appendChild(item1); // Переміщуємо елемент у кінець нового контейнера
    } else {
      originalContainer.appendChild(item1); // Повертаємо елемент у початковий контейнер
    }
    isMoved = !isMoved; // Змінюємо стан
  }
}

// Прокрутка при кліку nav

const menuLinks = document.querySelectorAll('.nav_link[data-goto]');
if(menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', onMenuLinckClick);
  })

  function onMenuLinckClick(e) {
    const menuLink = e.target;
    if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYoffset - document.querySelector('header').offsetHeight;

      window.scrollTo({
        top: gotoBlockValue,
        behavior: 'smooth'
      });
      e.prefentDefault();
    }
  }
}

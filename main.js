//Open burger-menu

document.addEventListener('click', function (e) {
  documentClick(e); // Викликає першу функцію
});

let isMoved = false; // Стежимо за станом елемента (переміщений чи ні)
const originalContainer = document.querySelector('.header__conteiner'); // Початковий контейнер

const header = document.querySelector('.header')

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.burger-menu__icon')) {
    header.classList.toggle('open')
    document.body.classList.toggle('lock');  // Заберає прокрутку сторінки
    moveElement();  // Викликаємо функцію переміщення елемента
  }
}

function moveElement() {
  const container = document.querySelector('.nav__body');
  const item1 = document.querySelector('.header__comunication');

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

const menuLinks = document.querySelectorAll('.nav__link[data-goto]');
if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener('click', onMenuLinkClick);
  });

  function onMenuLinkClick(e) {
    const menuLink = e.target;
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto);
      // if with header
      //  const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
      // if without header
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset;

      if(header.classList.contains('open')) {
        header.classList.remove('open');
        document.body.classList.remove('lock');
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      });
      e.preventDefault();
    }
  }
}

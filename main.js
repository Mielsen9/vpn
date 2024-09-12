//Open burger-menu
document.addEventListener('click', documentClick);

function documentClick(e) {
  const targetItem = e.target;

  if (targetItem.closest('.burger-menu__icon')) {
    document.documentElement.classList.toggle('burger-menu__open');
  }
}
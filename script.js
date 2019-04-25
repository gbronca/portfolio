
const menuToggler = document.querySelector('input.toggler');
const menuItems = document.querySelectorAll('.menu-option');

menuItems.forEach((elem) => {
  elem.addEventListener('click', () => {
    if (menuToggler.checked) {
      menuToggler.checked = false;
    }
  });
});

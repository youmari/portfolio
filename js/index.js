const hambIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-links-container');
const close = document.querySelector('.exit-icon');
const links = document.querySelectorAll('.nav-link');

hambIcon.addEventListener('click', () => {
  menu.style.display = 'flex';
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    menu.style.display = 'none';
  });
});
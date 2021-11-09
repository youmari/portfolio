const hambIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-links-container');
const close = document.querySelector('.exit-icon');
const links = document.querySelectorAll('.nav-link');
const mobileScreen = window.matchMedia('(max-width: 1029px)');
const projectsData = [project1 = {
  name : 'Covid19 web app',
  img: 'img',
  description: 'a web app that gives you information about the covid 19 around the world',
  liveLink : 'https://youmari.github.io/Covid-19/',
  projectRepo : 'https://github.com/youmari/Covid-19',
  technologies : {
    html: 'html',
    css : 'css',
    javascript : 'javascript'
  }
}, project2 = {
    name : 'Face Detection web app',
  img: 'img',
  description: 'web app that will recognize any face in the given image',
  liveLink : 'https://youmari.github.io/Face-Detection/',
  projectRepo : 'https://github.com/youmari/Face-Detection',
  technologies : {
    html: 'html',
    css : 'css',
    javascript : 'javascript',
    react:'react'
  }
}]

hambIcon.addEventListener('click', () => {
  menu.style.display = 'flex';
});

close.addEventListener('click', () => {
  menu.style.display = 'none';
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileScreen.matches) {
      menu.style.display = 'none';
    }
  });
});
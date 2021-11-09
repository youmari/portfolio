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
  technologies : ['html', 'css','javascript']
}, project2 = {
    name : 'Face Detection web app',
  img: 'img',
  description: 'web app that will recognize any face in the given image',
  liveLink : 'https://youmari.github.io/Face-Detection/',
  projectRepo : 'https://github.com/youmari/Face-Detection',
  technologies : ['html', 'css','javascript', 'react']
}]

const createCards = () => {
  for (let i = 0; i< projectsData.length; i++){

    const projectsContainer = document.querySelector('.projects-container');
    const projectCard = document.createElement('div');
    const projectTitleContainer = document.createElement('div');
    const projectImg = document.createElement('img');
    const projectTitle = document.createElement('h4');
    const tagsContainer = document.createElement('ul');
    const tags = document.createElement('li');
    const projectBtn = document.createElement('button');
    
    projectsContainer.append(projectCard);
    projectCard.classList.add('projects-cards');
    projectCard.append(projectImg, projectTitleContainer, tagsContainer, projectBtn);
    projectImg.classList.add('project-img');
    projectTitleContainer.classList.add('projects-titel-container');
    tagsContainer.classList.add('tags-container');
    projectBtn.classList.add('project-btn');
    projectTitleContainer.append(projectTitle);
    projectTitle.classList.add('project-titel');
    tagsContainer.append(tags);
    tags.classList.add('tags');

    projectTitle.textContent = projectsData[i].name;
  }
}
createCards();



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
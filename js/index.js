const hambIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-links-container');
const close = document.querySelector('.exit-icon');
const links = document.querySelectorAll('.nav-link');
const mobileScreen = window.matchMedia('(max-width: 1029px)');
const projectsData = [project1 = {
  name : 'Covid19 web app',
  img: '../images/covid-img.jpeg',
  description: 'a web app that gives you information about the covid 19 around the world',
  liveLink : 'https://youmari.github.io/Covid-19/',
  projectRepo : 'https://github.com/youmari/Covid-19',
  technologies : ['html', 'css','javascript']
}, project2 = {
    name : 'Face Detection web app',
  img: '../images/face-img.jpeg',
  description: 'web app that will recognize any face in the given image',
  liveLink : 'https://youmari.github.io/Face-Detection/',
  projectRepo : 'https://github.com/youmari/Face-Detection',
  technologies : ['html', 'css','javascript', 'react']
}]

const createCards = () => {
  for (let i = 0; i < projectsData.length; i++){

    const projectsContainer = document.querySelector('.projects-container');
    const projectCard = document.createElement('div');
    const projectTitleContainer = document.createElement('div');
    const projectImg = document.createElement('img');
    const projectTitle = document.createElement('h4');
    const tagsContainer = document.createElement('ul');
    const projectBtn = document.createElement('button');
    for (let j = 0; j < projectsData[i].technologies.length; j++) {
        const tags = document.createElement('li');
        tagsContainer.append(tags);
        tags.classList.add('tags');
        tags.textContent = projectsData[i].technologies[j];
      }
    
    projectsContainer.append(projectCard);
    projectCard.classList.add('projects-cards');
    projectCard.append(projectImg, projectTitleContainer, tagsContainer, projectBtn);
    projectImg.classList.add('project-img');
    projectTitleContainer.classList.add('projects-titel-container');
    tagsContainer.classList.add('tags-container');
    projectBtn.classList.add('project-btn');
    projectTitleContainer.append(projectTitle);
    projectTitle.classList.add('project-titel');
    
    projectTitle.textContent = projectsData[i].name;
    projectImg.src = projectsData[i].img;
    projectBtn.textContent = 'See project';
  }

}


const popUpWindow = () => {
  const workSection = document.querySelector('.my-recent-works');
  const WindowContainer = document.createElement('div');
  const overlay = document.createElement('div');
  const windowImg = document.createElement('img');
  const windowText = document.createElement('p');
  const windowTitle = document.createElement('h3');
  const winTagscontainer = document.createElement('ul');
  const wintags = document.createElement('li');
  const winRepoBtn = document.createElement('button');
  const winLiveBtn = document.createElement('button');
  
  workSection.append(WindowContainer, overlay);
  WindowContainer.classList.add('window-container');
  overlay.classList.add('overlay');
  WindowContainer.append(windowImg, windowTitle, winTagscontainer, windowText, winLiveBtn, winRepoBtn);
  winTagscontainer.append(wintags);
  windowImg.classList.add('win-img');
  windowTitle.classList.add('win-title');
  winTagscontainer.classList.add('win-tags-container');
  wintags.classList.add('win-tags');
  windowText.classList.add('win-description');
  winLiveBtn.classList.add('win-live-btn');
  winRepoBtn.classList.add('win-repo-btn');
  windowTitle.textContent = "Keeping track of hundreds of components"

  
  
}

createCards();
popUpWindow();


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
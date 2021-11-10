const hambIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-links-container');
 close = document.querySelector('.exit-icon');
const links = document.querySelectorAll('.nav-link');
const mobileScreen = window.matchMedia('(max-width: 1029px)');
const projectsData = [{
  name: 'Covid19 web app',
  img: '../images/covid-img.jpeg',
  description: 'a web app that gives you information about the covid 19 around the world',
  liveLink: 'https://youmari.github.io/Covid-19/',
  projectRepo: 'https://github.com/youmari/Covid-19',
  technologies: ['html', 'css', 'javascript'],
}, {
  name: 'Face Detection web app',
  img: '../images/face-img.png',
  description: 'web app that will recognize any face in the given image',
  liveLink: 'https://youmari.github.io/Face-Detection/',
  projectRepo: 'https://github.com/youmari/Face-Detection',
  technologies: ['html', 'css', 'javascript', 'react'],
}];

projectsData.forEach((element, i) => {
  const projectsContainer = document.querySelector('.projects-container');
  const projectCard = document.createElement('div');
  const projectTitleContainer = document.createElement('div');
  const projectImg = document.createElement('img');
  const projectTitle = document.createElement('h4');
  const tagsContainer = document.createElement('ul');
  const projectBtn = document.createElement('button');

  projectsData[i].technologies.forEach((tech, j) => {
    const tags = document.createElement('li');
    tagsContainer.append(tags);
    tags.classList.add('tags');
    tags.textContent = projectsData[i].technologies[j];
  });

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

  const workSection = document.querySelector('.my-recent-works');
  const WindowContainer = document.createElement('div');
  const overlay = document.createElement('div');
  const winExitImg = document.createElement('img');
  const windowImg = document.createElement('img');
  const windowText = document.createElement('p');
  const windowTitle = document.createElement('h3');
  const winTagscontainer = document.createElement('ul');
  const winBtnContainer = document.createElement('div');
  const winRepoBtn = document.createElement('button');
  const winLiveBtn = document.createElement('button');
  const winRepoIcon = document.createElement('img');
  const winLiveIcon = document.createElement('img');
  const winLiveForm = document.createElement('form');
  const winRepoForm = document.createElement('form');
  const exitBtnContainer = document.createElement('div');

  projectsData[i].technologies.forEach((tech, j) => {
    const wintags = document.createElement('li');
    winTagscontainer.append(wintags);
    wintags.classList.add('win-tags');
    wintags.textContent = projectsData[i].technologies[j];
  });

  workSection.append(WindowContainer, overlay);
  WindowContainer.classList.add('window-container');
  overlay.classList.add('overlay');
  WindowContainer.append(exitBtnContainer, windowImg, windowTitle,
    winTagscontainer, windowText, winBtnContainer);
  exitBtnContainer.append(winExitImg);
  winBtnContainer.append(winLiveForm, winRepoForm);
  winLiveForm.append(winLiveBtn);
  winRepoForm.append(winRepoBtn);
  winLiveForm.setAttribute('action', projectsData[i].liveLink, 'method', 'get');
  winRepoForm.setAttribute('action', projectsData[i].projectRepo, 'method', 'get');

  winLiveBtn.textContent = 'See live';
  winRepoBtn.textContent = 'See source';
  winLiveIcon.src = '../images/see-live-icon.png';
  winRepoIcon.src = '../images/win-icon-github.png';
  winExitImg.src = '../images/gray-exit.png';
  winRepoBtn.append(winRepoIcon);
  winLiveBtn.append(winLiveIcon);

  exitBtnContainer.classList.add('exit-container');
  winExitImg.classList.add('win-exit');
  windowImg.classList.add('win-img');
  windowTitle.classList.add('win-title');
  winTagscontainer.classList.add('win-tags-container');
  windowText.classList.add('win-description');
  winBtnContainer.classList.add('win-btn-container');
  winLiveBtn.classList.add('win-live-btn');
  winRepoBtn.classList.add('win-repo-btn');

  windowTitle.textContent = projectsData[i].name;
  windowImg.src = projectsData[i].img;
  windowText.textContent = projectsData[i].description;
});

const seeProjectBtn = document.querySelectorAll('.project-btn');
const popUpw = document.querySelectorAll('.window-container');
const winExit = document.querySelectorAll('.win-exit');
const overLay = document.querySelector('.overlay');

seeProjectBtn.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    popUpw[index].classList.toggle('active');
  });
});

winExit.forEach((exitBtn, index) => {
  exitBtn.addEventListener('click', () => {
    popUpw[index].classList.toggle('active');
  });
});

seeProjectBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    overLay.classList.toggle('active');
  });
});

winExit.forEach((exitBtn) => {
  exitBtn.addEventListener('click', () => {
    overLay.classList.toggle('active');
  });
});

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

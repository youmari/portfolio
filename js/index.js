const hamb = document.querySelector('.menu-icon');
const menu = document.querySelector('.nav-links-container');
const close = document.querySelector('.exit-icon');
const links = document.querySelectorAll('.nav-link');

hamb.addEventListener('click',function(){
   menu.style.display='flex';
});
close.addEventListener('click',function(){
    menu.style.display='none';
 });
links.addEventListener('click',function(){
    menu.style.display='none';
 });
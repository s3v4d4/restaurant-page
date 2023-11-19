import './style.css';
import r_logo from "../images/logom.png";
import g_logo from "../images/github.svg";

import createPage from "./init-page";
import createMenu from "./menu";
import createContact from "./contact";


const page = document.getElementById("content");

const restaurant_logo = document.getElementById("logo");
console.log(restaurant_logo);
restaurant_logo.src = r_logo;

const github_logo = document.getElementById('github_logo');
github_logo.src = g_logo;

createPage('Ararat','Sevada Sahakian');

const tabs = document.querySelector('.tabs').children;

console.log(tabs);

tabs[0].addEventListener('click',(e) => {
    page.innerHTML = '';
    createPage('Ararat','Sevada Sahakian');
});

tabs[1].addEventListener('click',(e) => {
    page.innerHTML = '';
    createMenu();
});

tabs[2].addEventListener('click',(e) => {
    page.innerHTML = '';
    createContact();
});

tabs[2].addEventListener('click',(e) => {
    page.innerHTML = '';
    createContact();
});
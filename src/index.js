import createPage from "./init-page";
import createMenu from "./menu";
import createContact from "./contact";

const page = document.getElementById("content");

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
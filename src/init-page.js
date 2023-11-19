import './style.css';

import logo from '../images/logom.png';
import github_logo from '../images/github.svg';

const createPage = function (name,author){
    const page = document.getElementById("content");
    const mid = createContent();
    page.appendChild(mid);
} 



function createHeader(name){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h1');

    img.src = logo;
    img.alt = "restaurant logo";
    title.innerHTML = name;
    div.appendChild(img);
    div.appendChild(title);
    div.classList.add('header');
    return div;
}

function createContent(){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2_1 = document.createElement('h2');
    const h2_2 = document.createElement('h2');
    const h2_3 = document.createElement('h2');

    h1.innerHTML = "The best food in the city";
    h2_1.innerHTML = "Hurry come taste it !";
    h2_2.innerHTML = "Open from Monday till Sunday";
    h2_3.innerHTML = "From 10h to 22h";

    const elements = [h1,h2_1,h2_2,h2_3];
    for (let el of elements){
        div.appendChild(el);
    }
    div.classList.add('home');
    return div;
}


function createFooter(name){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('h2');

    img.src = github;
    img.alt = "github logo";
    author.innerHTML = name;

    div.appendChild(img);
    div.appendChild(author);

    div.classList.add('footer');
    return div;
}



export default createPage;
import './style.css';

import bbq from '../images/bbq.png';
import pizza from '../images/pizza.png';
import ramen from '../images/ramen.png';
import water from '../images/water.png';
import wine from '../images/wine.png';

const images = {
    bbq,
    pizza,
    ramen,
    water,
    wine
};

const createMenu = function (){
    const page = document.getElementById("content");
    const content = createContent();
    page.appendChild(content);
} 

function createContent(){
    const div = document.createElement('div');
    const dishes = ['bbq','pizza','ramen','water','wine']
    const descriptions = [
        "Traditional Armenian BBQ",
        "Italian pizza made in wood over",
        "Japanese Ramen with eggs",
        "Water coming from the Ararat mountain",
        "Armenian wine made from a 2000 year old recipe"
    ]
    for (let i = 0; i < dishes.length ; i++){
        div.append(createDish(dishes[i],descriptions[i]));
    }
    div.classList.add('menu');
    return div; 
}

function createDish(dish,description) {
    const div = document.createElement('div');
    const dishname = document.createElement('h2');
    const dishdescription = document.createElement('h3');
    const img = document.createElement('img');

    console.log(window[dish]);
    img.src = images[dish];
    img.alt = description;

    dishname.innerHTML = dish;
    dishdescription.innerHTML = description;

    div.append(img,dishname,dishdescription);
    div.classList.add('dish');
    return div;
}

export default createMenu;
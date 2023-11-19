import './style.css';

const createContact = function (){
    const page = document.getElementById("content");
    const content = createContent();
    page.appendChild(content);
} 

function createContent(){
    const div = document.createElement('div');
    const address = document.createElement('h2');
    const phone = document.createElement('h2');
    const joke = document.createElement('h2');

    
    address.innerHTML = "Address: 39.7024 °N, 44.2991 °E";
    phone.innerHTML = "Phone: +0123456789";
    joke.innerHTML = "Don't forget your oxygen bottle!";
    
    div.append(address,phone,joke);

    div.classList.add('contact');
    return div; 
}


export default createContact;
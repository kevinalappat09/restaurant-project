import { pageLoad } from "./init_page_load.js";
import { menuPageLoad } from "./menu_page_load.js";
import { aboutPageLoad } from "./about_page_load.js";
import './styles.css'

const contentDiv = document.querySelector('.content');

function clearContent() {
    contentDiv.innerHTML = "";
}

function resetButtons() {
    const homeButton = document.querySelector('#home-link');
    const menuButton = document.querySelector('#menu-link');
    const aboutButton = document.querySelector('#about-link');

    homeButton.addEventListener('click', () => {
        clearContent();
        pageLoad();
        resetButtons();
    })
    
    menuButton.addEventListener('click', () => {
        clearContent();
        menuPageLoad();
        resetButtons();
    })
    
    aboutButton.addEventListener('click', () => {
        clearContent();
        aboutPageLoad();
        resetButtons();
    })
}

pageLoad();
resetButtons();

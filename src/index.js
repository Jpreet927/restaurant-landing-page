import { createHeader } from './header';
import { createMain, createTestimonial } from './home';
import { createMenu } from './menu';
import { createAbout } from './about';
import { createContact } from './contact';
import { createFooter } from './footer';

let content_div = document.getElementById("content");
let header = createHeader();
let footer = createFooter();
let page = '';

function createPage() {
    let mainPage = createMain();
    content_div.append(header, mainPage, footer);
}

createPage()

// EVENT LISTENERS

let navHome = document.getElementById("nav-home");
navHome.addEventListener('click', () => {
    content_div.innerHTML = "";
    page = createMain();
    content_div.append(header, createMain(), footer);
})

let navMenu = document.getElementById("nav-menu");
navMenu.addEventListener('click', () => {
    content_div.innerHTML = "";
    page = createMenu();
    content_div.append(header, createMenu(), footer);
})

let navContact = document.getElementById("nav-contact");
navContact.addEventListener('click', () => {
    content_div.innerHTML = "";
    content_div.append(header, createContact(), footer);
})

let navAbout = document.getElementById("nav-about");
navAbout.addEventListener('click', () => {
    content_div.innerHTML = "";
    content_div.append(header, createAbout(), footer);
})
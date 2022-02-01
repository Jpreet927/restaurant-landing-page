import { createHeader } from './header';
import { createMain, createTestimonial } from './home';
import { createMenu } from './menu';
import { createAbout } from './about';
import { createContact } from './contact';
import { createFooter } from './footer';

let content_div = document.getElementById("content");

// function createMain() {
//     let main = document.createElement("div");
//     main.classList.add("main-section");
//     let header = document.createElement("header");
//     let smallLogo = document.createElement("img");
//     smallLogo.src = "./images/logo.png";
//     smallLogo.id = "logo-small";
//     let navList = document.createElement("ul");

//     let navItems = ["Home", "Menu", "About Us", "Contact"];
//     for (var i = 0; i < navItems.length; i++) {
//         let li = document.createElement("li");
//         li.innerText = navItems[i];
//         navList.appendChild(li);
//     }

//     let reserveBtn = document.createElement("button");
//     reserveBtn.classList.add("reservation-btn")
//     reserveBtn.innerText = "Book a Reservation!";

//     header.append(smallLogo, navList, reserveBtn);

//     let mainLogoContainer = document.createElement("div");
//     let mainLogo = document.createElement("img");
//     mainLogoContainer.classList.add("logo-container");
//     mainLogo.src = "./images/logo.png";
//     mainLogo.id = "logo-main"
//     mainLogoContainer.appendChild(mainLogo);

//     main.append(header, mainLogoContainer);


//     let infoSection = document.createElement("div");
//     infoSection.classList.add("section-title", "info-section");
//     let textContainer = document.createElement("div");
//     textContainer.classList.add("text-container");
//     let infoHeaderContainer = document.createElement("div");
//     infoHeaderContainer.classList.add("info-header-container");
//     let heading = document.createElement("h1");
//     heading.classList.add("heading");
//     let horizontalLine = document.createElement("div"); // EXPORT
//     horizontalLine.classList.add("horizontal-line");
//     infoHeaderContainer.append(heading, horizontalLine);

//     let p1 = document.createElement("p");
//     let p2 = document.createElement("p");
//     let p3 = document.createElement("p");
//     p1.textContent = "We are all watching closely as the global situation with COVID-19 continues to evolve. We wanted to reach out and let you know what we’re doing to manage and combat this or any other virus."
//     p2.textContent = "In addition to the best practices that we have always utilized for food safety and sanitation, we have recently implemented additional procedures and policies designed to keep the health of our guests and employees as a top priority. We continue to follow the suggestions and provided by Ontario Health and the Public Health Agency of Canada."
//     p3.textContent = "Our highest priority is the health and safety of our Guests and Colleagues and those in our network including our suppliers and delivery partners. We have been in regular communication with all our teams across our network around the following protocols that support everyone’s health and wellbeing:"

//     let infoList = document.createElement("ul");
//     let li1 = document.createElement("li");
//     let li2 = document.createElement("li");
//     let li3 = document.createElement("li");
//     let li4 = document.createElement("li");
//     let li5 = document.createElement("li");

//     li1.textContent = "Reinforcing our standards and operating procedures for food safety and personal hygiene.";
//     li2.textContent = "Working closely with our delivery partners and our own network of drivers to ensure frequent hand washing, using hand sanitizer for every delivery and sanitizing their vehicles and delivery bags.";
//     li3.textContent = "Continual sanitation of all high touch surfaces in our restaurants including seats, tables, menus, pay pads, etc.";
//     li4.textContent = "We are also monitoring our teams’ health very closely and have put support systems in place to help anyone who may become affected by the virus, so their number one focus is getting better.";
//     li5.textContent = "We will continue to do everything we can to provide the best experience possible with our take-away and delivery.";

//     infoList.append(li1, li2, li3, li4, li5);

//     textContainer.append(infoHeaderContainer, p1, p2, p3, infoList);
//     infoSection.appendChild(textContainer);

//     let testimonials = document.createElement("div");
//     testimonials.classList.add("testimonials");
//     let testimonialHeader = document.createElement("div");
//     testimonialHeader.classList.add("testimonial-header");
//     let testimonialTitle = document.createElement.add("h2");
//     testimonialTitle.classList.add("section-title");
//     testimonialHeader.appendChild(testimonialTitle);

//     let testimonialContainer = document.createElement("div");
//     testimonialContainer.classList.add("testimonial-container");

//     let testimonial1 = createTestimonial();
//     let testimonial2 = createTestimonial();
//     let testimonial3 = createTestimonial();

//     testimonialContainer.append(testimonial1, testimonial2, testimonial3);
//     testimonials.append(testimonialHeader, testimonialContainer);

//     let footer = createFooter();

//     content_div.append(main, infoSection, testimonials, footer);

// }
// function createTestimonial() {
//     let testimonialExample = document.createElement("div");
//     let h3 = document.createElement("h3");
//     let p = document.createElement("p");
    
//     testimonialContainer.classList.add("testimonial-example");
//     h3.classList.add("testimonial-title");

//     h3.textContent = "Jaipreet Singh - 10/10";
//     p.textContent = "Voluptate deserunt est mollit nulla commodo sunt commodo ea fugiat consectetur incididunt velit enim. Nisi veniam et magna cupidatat id.";

//     testimonialExample.append(h3, p);

//     return testimonialExample;
// }

let header = createHeader();
let footer = createFooter();
let page = '';

function createPage() {
    let mainPage = createMain();
    content_div.append(header, mainPage, footer);
}

createPage()

// let navItems = document.querySelectorAll(".nav-item");
// navItems.forEach((item) => {
//     item.addEventListener('click', () => {
//         console.log(navItems);
//         console.log("yo");
//         let header = createHeader();
//         let footer = createFooter();
        
//         let page = ''
//         if (item.innerText == "Home") {
//             content_div.innerHTML = "";
//             page = createMain();
//             content_div.append(header, page, footer);
//         } else if (item.innerText == "Menu") {
//             content_div.innerHTML = "";
//             page = createMenu();
//             content_div.append(header, page, footer);
//         } else if (item.innerText == "About Us") {
//             content_div.innerHTML = "";
//             page = createAbout();
//             content_div.append(header, page, footer);
//         } else if (item.innerText == "Contact") {
//             content_div.innerHTML = "";
//             page = createContact();
//             content_div.append(header, page, footer);
//         }
        
        
//     })
// })

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
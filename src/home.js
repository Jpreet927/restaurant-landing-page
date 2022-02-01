function createMain() {
    // main section
    let container = document.createElement("div");
    let main = document.createElement("div");
    let mainLogoContainer = document.createElement("div");
    let mainLogo = document.createElement("img");

    main.classList.add("main-section");
    mainLogoContainer.classList.add("logo-container");
    mainLogo.src = "./images/logo.png";
    mainLogo.id = "logo-main";

    mainLogoContainer.appendChild(mainLogo);
    main.append(mainLogoContainer);

    // info section
    let infoSection = document.createElement("div");
    let textContainer = document.createElement("div");
    let infoHeaderContainer = document.createElement("div");
    let heading = document.createElement("h1");
    let horizontalLine = document.createElement("div");

    infoSection.classList.add("section-title", "info-section");
    textContainer.classList.add("text-container");
    infoHeaderContainer.classList.add("info-header-container");
    heading.classList.add("heading");
    horizontalLine.classList.add("horizontal-line");
    heading.textContent = "COVID-19 Safety"
    infoHeaderContainer.append(heading, horizontalLine);

    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.textContent = "We are all watching closely as the global situation with COVID-19 continues to evolve. We wanted to reach out and let you know what we’re doing to manage and combat this or any other virus."
    p2.textContent = "In addition to the best practices that we have always utilized for food safety and sanitation, we have recently implemented additional procedures and policies designed to keep the health of our guests and employees as a top priority. We continue to follow the suggestions and provided by Ontario Health and the Public Health Agency of Canada."
    p3.textContent = "Our highest priority is the health and safety of our Guests and Colleagues and those in our network including our suppliers and delivery partners. We have been in regular communication with all our teams across our network around the following protocols that support everyone’s health and wellbeing:"

    let infoList = document.createElement("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let li3 = document.createElement("li");
    let li4 = document.createElement("li");
    let li5 = document.createElement("li");

    li1.textContent = "Reinforcing our standards and operating procedures for food safety and personal hygiene.";
    li2.textContent = "Working closely with our delivery partners and our own network of drivers to ensure frequent hand washing, using hand sanitizer for every delivery and sanitizing their vehicles and delivery bags.";
    li3.textContent = "Continual sanitation of all high touch surfaces in our restaurants including seats, tables, menus, pay pads, etc.";
    li4.textContent = "We are also monitoring our teams’ health very closely and have put support systems in place to help anyone who may become affected by the virus, so their number one focus is getting better.";
    li5.textContent = "We will continue to do everything we can to provide the best experience possible with our take-away and delivery.";

    infoList.append(li1, li2, li3, li4, li5);
    textContainer.append(infoHeaderContainer, p1, p2, p3, infoList);
    infoSection.appendChild(textContainer);

    // testimonials section
    let testimonials = document.createElement("div");
    let testimonialHeader = document.createElement("div");
    let testimonialTitle = document.createElement("h2");
    let testimonialContainer = document.createElement("div");
    let testimonial1 = createTestimonial();
    let testimonial2 = createTestimonial();
    let testimonial3 = createTestimonial();

    testimonials.classList.add("testimonials");
    testimonialHeader.classList.add("testimonial-header");
    testimonialTitle.classList.add("section-title");
    testimonialContainer.classList.add("testimonial-container");
    testimonialTitle.textContent = "Testimonials";

    testimonialHeader.appendChild(testimonialTitle);
    testimonialContainer.append(testimonial1, testimonial2, testimonial3);
    testimonials.append(testimonialHeader, testimonialContainer);

    container.append(main, infoSection, testimonials);
    return container;
}

function createTestimonial() {
    let testimonialExample = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");
    
    testimonialExample.classList.add("testimonial-example");
    h3.classList.add("testimonial-title");
    h3.textContent = "Jaipreet Singh - 10/10";
    p.textContent = "Voluptate deserunt est mollit nulla commodo sunt commodo ea fugiat consectetur incididunt velit enim. Nisi veniam et magna cupidatat id.";

    testimonialExample.append(h3, p);
    return testimonialExample;
}

export { createMain, createTestimonial };
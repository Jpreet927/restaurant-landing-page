function createFooter() {
    let footer = document.createElement("footer");
    let footerInfo = document.createElement("div");
    let leftList = document.createElement("ul");
    let rightList = document.createElement("ul");
    let li1 = document.createElement("li")
    let li2 = document.createElement("li")
    let li3 = document.createElement("li")
    let li4 = document.createElement("li")
    let li5 = document.createElement("li")
    let li6 = document.createElement("li")
    let li7 = document.createElement("li")
    let li8 = document.createElement("li")
    let copyright = document.createElement("div");

    footerInfo.classList.add("footer-info");
    leftList.classList.add("footer-left");
    rightList.classList.add("footer-right");
    copyright.classList.add("footer-copyright");
    li1.textContent = "Stoney's Bread Company Oakville";
    li2.textContent = "123 Sesame Street";
    li3.textContent = "Oakville, ON";
    li4.textContent = "A1B 2C3";
    li5.textContent = "(647) - 123 - 4567";
    li6.textContent = "Monday - Saturday: 11:00 am - 8:00pm";
    li7.textContent = "Sunday: 9:00 am - 3:00 pm";
    li8.textContent = "We Do Not Accept Online Orders";
    copyright.textContent = "Copyright © 2022 Stoney's Bread Company  •  All rights reserved";

    leftList.append(li1, li2, li3, li4, li5);
    rightList.append(li6, li7, li8);
    footerInfo.append(leftList, rightList);

    footer.append(footerInfo, copyright);

    return footer;
}
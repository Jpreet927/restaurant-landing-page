function createContact() {
    let container = document.createElement("div");
    container.classList.add("contact-container");

    container.innerHTML = `
        <div class="contact-title-section">
            Contact Us
        </div>
        <div class="contact-info">
            <div class="address">
                <h3>Address</h3>
                <p>123 Sesame Street</p>
                <p>Oakville, ON</p>
                <p>A2C 4E9</p>
            </div>
            <div class="contact">
                <h3>Contact</h3>
                <p>(905) - 123 - 4567</p>
                <p>info@stoneysemail.com</p>
            </div>
            <div class="hours">
                <h3>Hours</h3>
                <p>Monday - Saturday: 11:00 am - 8:00 pm</p>
                <p>Sunday: 9:00 am - 3:00 pm</p>
            </div>
        </div>
    `

    return container;
}
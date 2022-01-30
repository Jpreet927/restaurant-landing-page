function createAbout() {
    let container = document.createElement("div");
    container.classList.add("aboutus-container");

    container.innerHTML = `
        <div class="title-section">
            About Us
        </div>
        <div class="our-company">
            <div class="info-header">
                <h3>Our Company</h3>
                <div class="horizontal-line"></div>
            </div>
            <p>We want to be the first place you picture in your mind when you think: “I’d love a great restaurant with amazing food and charm”. Stoney’s is that place brought to life – a casual eatery with market fresh food in a distinct atmosphere. A place where you can rediscover the familiar classics that you love served with a modern twist.</p>
            <p>With Stoney’s Bread Company, we aim to change the face of casual dining and provide our guests with an uplifting atmosphere for any occasion, and of course delicious and innovative market fresh food! Everything at Stoney’s, from the daily soups to the artisan pizzas, is prepared with only the finest ingredients coupled with an unmatched passion for the art of cooking.</p>
            <p>Stoney’s Bread Company was featured on You Gotta Eat Here</p>
        </div>
        <div class="our-story">
            <div class="info-header">
                <h3>Our Story</h3>
                <div class="horizontal-line"></div>
            </div>
            <p>Friends and co-owners Steve Chabot and Blake Stoneburgh first opened the doors to Stoney’s Bread Company in 2004. The name of the restaurant was inspired by the football career of Blake’s Dad, Norm Stoneburgh. During his 13 seasons with the Toronto Argonauts he was famously known as ‘Stoney’.</p>
            <p>A football legend and seasoned philanthropist, Stoney has always been passionate about giving back to the community and was happy to lend his name to the restaurant. In return, we wanted to make sure that his namesake embodied every positive quality that he represented – something we are continually working toward.</p>
        </div>
    `
    return container;
}
function createMenu() {
    let container = document.createElement("div");
    container.classList.add("menu-container");

    container.innerHTML = `
        <div class="main-dishes">
        <div class="main-dishes-left">
        <h1>Main Dishes</h1>
        <h3>Pizza</h3>
        <div class="menu-items">
            <div class="food">
                <p>Coastal Mushroom</p>
                <p>Margherita</p>
                <p>Quattro Formaggi</p>
                <p>Pesto Pollo</p>
                <p>Americana</p>
                <p>Giuseppe's</p>
            </div>
            <div class="prices">
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
            </div>
        </div>
        <h3>Pasta</h3>
        <div class="menu-items">
            <div class="food">
                <p>Four Cheese Penne</p>
                <p>Fettuccine Chicken</p>
                <p>Jambalaya Linguine</p>
                <p>Shrimp & Scallop Fettuccine</p>
                <p>Fettuccine a la Chevre</p>
            </div>
            <div class="prices">
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
                <p>$10.99</p>
            </div>
        </div>
        </div>
        <div class="main-dishes-right">
            
        </div>
        </div>
        <div class="desserts">
            <div class="desserts-left">

            </div>
            <div class="desserts-right">
            <h1>Desserts</h1>
            <h3>Sundaes</h3>
            <div class="menu-items">
                <div class="food">
                    <p>Choc This Way</p>
                    <p>Daddy-O</p>
                    <p>Katy Berry</p>
                    <p>Bitcone</p>
                    <p>Disorbet the Order</p>
                    <p>Summertime Fatness</p>
                </div>
                <div class="prices">
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                </div>
            </div>
            <h3>Pasta</h3>
            <div class="menu-items">
                <div class="food">
                    <p>Stormy Weather</p>
                    <p>Berry Potter</p>
                    <p>Iced Cappuccino</p>
                    <p>Dark Haze</p>
                    <p>Pink Sip</p>
                </div>
                <div class="prices">
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                    <p>$10.99</p>
                </div>
            </div>
            </div>
        </div>
    `

    return container;
}
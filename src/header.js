function createHeader() {
    let navContainer = document.createElement("div");
    navContainer.innerHTML = `
        <nav class="nav-fixed">
            <img src="./images/logo.png" alt="" id="logo-small">
            <ul class="secondary-nav-list">
                <li class="nav-item" id="nav-home">Home</li>
                <li class="nav-item" id="nav-menu">Menu</li>
                <li class="nav-item" id="nav-contact">Contact</li>
                <li class="nav-item" id="nav-about">About Us</li>
            </ul>
        </nav>`
    
    return navContainer;
}

export { createHeader };
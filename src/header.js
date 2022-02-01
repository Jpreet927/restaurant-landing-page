function createHeader() {
    let navContainer = document.createElement("div");
    navContainer.innerHTML = `
        <nav class="nav-fixed">
            <img src="./images/logo.png" alt="" id="logo-small">
            <ul class="secondary-nav-list">
                <li class="nav-item">Home</li>
                <li class="nav-item">Menu</li>
                <li class="nav-item">Contact</li>
                <li class="nav-item">About Us</li>
            </ul>
        </nav>`
    
    return navContainer;
}

export { createHeader };
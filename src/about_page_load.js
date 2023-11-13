function aboutPageLoad() {
    const contentDiv = document.querySelector('.content');

    let navDiv = document.createElement('div');
    navDiv.classList.add('nav');

    let navBrand = document.createElement('div');
    navBrand.innerHTML = "Macaron";
    navBrand.classList.add("nav-brand");
    let navButtonGroup = document.createElement('div');
    navButtonGroup.classList.add('nav-button-group');

    let navButton1 = document.createElement('a');
    navButton1.href="#";
    navButton1.id = "home-link";
    navButton1.classList.add('nav-link');
    navButton1.innerHTML = "Home"
    navButtonGroup.appendChild(navButton1);
    let navButton2 = document.createElement('a');
    navButton2.href="#";
    navButton2.id = "menu-link";
    navButton2.classList.add('nav-link');
    navButton2.innerHTML = "Menu"
    navButtonGroup.appendChild(navButton2);
    let navButton3 = document.createElement('a');
    navButton3.href="#";
    navButton3.id = "about-link";
    navButton3.classList.add('nav-link');
    navButton3.innerHTML = "About"
    navButtonGroup.appendChild(navButton3);

    navDiv.appendChild(navBrand);
    navDiv.appendChild(navButtonGroup);
    contentDiv.appendChild(navDiv);

    let aboutContent = document.createElement('div');
    aboutContent.innerHTML = "About Content Here";

    contentDiv.appendChild(aboutContent);
}

export{aboutPageLoad};
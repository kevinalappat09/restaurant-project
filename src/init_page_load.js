function pageLoad() {
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
     
    let heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');

    let heroHeading = document.createElement('div');
    let heroSubheading = document.createElement('div');
    heroHeading.innerHTML = "Macaron";
    heroSubheading.innerHTML = "Experience the taste of un macaron";
    heroHeading.classList.add('heading');
    heroSubheading.classList.add('subheading');

    heroDiv.appendChild(heroHeading);
    heroDiv.appendChild(heroSubheading);

    contentDiv.appendChild(heroDiv);


    let contactDiv = document.createElement('div');
    contactDiv.classList.add('contact');
    let contactHeading = document.createElement('div');
    contactHeading.classList.add('contact-heading');
    contactHeading.innerHTML = "Contact Us";

    let contactInfo = document.createElement('div');
    contactInfo.classList.add('contact-info');
    contactInfo.innerHTML = "Here is our contact information. We would like it if you didn't call";
    let contactButtons = document.createElement('div');
    contactButtons.classList.add('contact-button-container');
    
    for(let i=0;i<3;i++) {
        let contactButton = document.createElement('a');
        contactButton.href = "#";
        contactButton.classList.add('contact-button');
        contactButton.innerHTML = "Contact Us Here";
        contactButtons.appendChild(contactButton);
    }

    contactDiv.appendChild(contactHeading);
    contactDiv.appendChild(contactInfo);
    contactDiv.appendChild(contactButtons);

    contentDiv.append(contactDiv);
}

export {pageLoad};
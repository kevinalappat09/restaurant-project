import Macaron from './images/macaron.jpg';

function menuPageLoad() {
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

    let menuContent = document.createElement('div');
    menuContent.classList.add("menu-content");

    let menuHeading = document.createElement('div');
    menuHeading.innerHTML = "Menu";
    menuHeading.classList.add('heading');
    menuContent.appendChild(menuHeading);

    let menuItemContainer = document.createElement('div');
    menuItemContainer.classList.add('menu-item-container');

    const menuItemsList = ['Macaron','Pain-Au-Chocolate','Souffle','Brownie','Waffle', 'Cat', 'Cake','Doughnut','Pani Puri','Intersting'];
        
    let menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    let menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    let menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Macaron";
    menuItemHeading.classList.add('menu-item-heading');
    let menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItemImage = document.createElement('img');
    menuItemImage.src = Macaron;
    menuItemImage.style.width = "200px";
    menuItemImage.style.height = "200px";
    menuItemHeading = document.createElement('div');
    menuItemHeading.innerHTML = "Pain-Au-Chocolate";
    menuItemHeading.classList.add('menu-item-heading');
    menuItemPrice = document.createElement('div');
    menuItemPrice.innerHTML = "$200";
    menuItemPrice.classList.add('menu-item-price');
    menuItem.appendChild(menuItemImage);
    menuItem.appendChild(menuItemHeading);   
    menuItem.appendChild(menuItemPrice);
    menuItemContainer.appendChild(menuItem);

    menuContent.appendChild(menuItemContainer);

    contentDiv.appendChild(menuContent);
}

export {menuPageLoad};
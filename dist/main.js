/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about_page_load.js":
/*!********************************!*\
  !*** ./src/about_page_load.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   aboutPageLoad: () => (/* binding */ aboutPageLoad)\n/* harmony export */ });\nfunction aboutPageLoad() {\n    const contentDiv = document.querySelector('.content');\n\n    let navDiv = document.createElement('div');\n    navDiv.classList.add('nav');\n\n    let navBrand = document.createElement('div');\n    navBrand.innerHTML = \"Macaron\";\n    navBrand.classList.add(\"nav-brand\");\n    let navButtonGroup = document.createElement('div');\n    navButtonGroup.classList.add('nav-button-group');\n\n    let navButton1 = document.createElement('a');\n    navButton1.href=\"#\";\n    navButton1.id = \"home-link\";\n    navButton1.classList.add('nav-link');\n    navButton1.innerHTML = \"Home\"\n    navButtonGroup.appendChild(navButton1);\n    let navButton2 = document.createElement('a');\n    navButton2.href=\"#\";\n    navButton2.id = \"menu-link\";\n    navButton2.classList.add('nav-link');\n    navButton2.innerHTML = \"Menu\"\n    navButtonGroup.appendChild(navButton2);\n    let navButton3 = document.createElement('a');\n    navButton3.href=\"#\";\n    navButton3.id = \"about-link\";\n    navButton3.classList.add('nav-link');\n    navButton3.innerHTML = \"About\"\n    navButtonGroup.appendChild(navButton3);\n\n    navDiv.appendChild(navBrand);\n    navDiv.appendChild(navButtonGroup);\n    contentDiv.appendChild(navDiv);\n\n    let aboutContent = document.createElement('div');\n    aboutContent.innerHTML = \"About Content Here\";\n\n    contentDiv.appendChild(aboutContent);\n}\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/about_page_load.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _init_page_load_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init_page_load.js */ \"./src/init_page_load.js\");\n/* harmony import */ var _menu_page_load_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu_page_load.js */ \"./src/menu_page_load.js\");\n/* harmony import */ var _about_page_load_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about_page_load.js */ \"./src/about_page_load.js\");\n\n\n\n\nconst contentDiv = document.querySelector('.content');\n\nfunction clearContent() {\n    contentDiv.innerHTML = \"\";\n}\n\nfunction resetButtons() {\n    const homeButton = document.querySelector('#home-link');\n    const menuButton = document.querySelector('#menu-link');\n    const aboutButton = document.querySelector('#about-link');\n\n    homeButton.addEventListener('click', () => {\n        clearContent();\n        (0,_init_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\n        resetButtons();\n    })\n    \n    menuButton.addEventListener('click', () => {\n        clearContent();\n        (0,_menu_page_load_js__WEBPACK_IMPORTED_MODULE_1__.menuPageLoad)();\n        resetButtons();\n    })\n    \n    aboutButton.addEventListener('click', () => {\n        clearContent();\n        (0,_about_page_load_js__WEBPACK_IMPORTED_MODULE_2__.aboutPageLoad)();\n        resetButtons();\n    })\n}\n\n(0,_init_page_load_js__WEBPACK_IMPORTED_MODULE_0__.pageLoad)();\nresetButtons();\n\n\n//# sourceURL=webpack://restaurant-project/./src/index.js?");

/***/ }),

/***/ "./src/init_page_load.js":
/*!*******************************!*\
  !*** ./src/init_page_load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   pageLoad: () => (/* binding */ pageLoad)\n/* harmony export */ });\nfunction pageLoad() {\n    const contentDiv = document.querySelector('.content');\n\n    let navDiv = document.createElement('div');\n    navDiv.classList.add('nav');\n\n    let navBrand = document.createElement('div');\n    navBrand.innerHTML = \"Macaron\";\n    navBrand.classList.add(\"nav-brand\");\n    let navButtonGroup = document.createElement('div');\n    navButtonGroup.classList.add('nav-button-group');\n\n    let navButton1 = document.createElement('a');\n    navButton1.href=\"#\";\n    navButton1.id = \"home-link\";\n    navButton1.classList.add('nav-link');\n    navButton1.innerHTML = \"Home\"\n    navButtonGroup.appendChild(navButton1);\n    let navButton2 = document.createElement('a');\n    navButton2.href=\"#\";\n    navButton2.id = \"menu-link\";\n    navButton2.classList.add('nav-link');\n    navButton2.innerHTML = \"Menu\"\n    navButtonGroup.appendChild(navButton2);\n    let navButton3 = document.createElement('a');\n    navButton3.href=\"#\";\n    navButton3.id = \"about-link\";\n    navButton3.classList.add('nav-link');\n    navButton3.innerHTML = \"About\"\n    navButtonGroup.appendChild(navButton3);\n\n    navDiv.appendChild(navBrand);\n    navDiv.appendChild(navButtonGroup);\n    contentDiv.appendChild(navDiv);\n     \n    let heroDiv = document.createElement('div');\n    heroDiv.classList.add('hero');\n\n    let heroHeading = document.createElement('div');\n    let heroSubheading = document.createElement('div');\n    heroHeading.innerHTML = \"Macaron\";\n    heroSubheading.innerHTML = \"Experience the taste of un macaron\";\n    heroHeading.classList.add('heading');\n    heroSubheading.classList.add('subheading');\n\n    heroDiv.appendChild(heroHeading);\n    heroDiv.appendChild(heroSubheading);\n\n    contentDiv.appendChild(heroDiv);\n\n    let menuDiv = document.createElement('div');\n    menuDiv.classList.add('menu');\n\n    let menuHeading = document.createElement('div');\n    menuHeading.classList.add('heading');\n    menuHeading.innerHTML = \"Menu\";\n    let menuItemsDiv = document.createElement('div');\n    menuItemsDiv.classList.add('menu-items-container');\n    \n    let menuItem1 = document.createElement('div');\n    menuItem1.classList.add('menu-item');\n    menuItem1.innerHTML = \"Macaron\";\n    menuItemsDiv.appendChild(menuItem1);\n    let menuItem2 = document.createElement('div');\n    menuItem2.classList.add('menu-item');\n    menuItem2.innerHTML = \"Brownie\";\n    menuItemsDiv.appendChild(menuItem2);\n    let menuItem3 = document.createElement('div');\n    menuItem3.classList.add('menu-item');\n    menuItem3.innerHTML = \"Pain Au Chocolate\";\n    menuItemsDiv.appendChild(menuItem3);\n    let menuItem4 = document.createElement('div');\n    menuItem4.classList.add('menu-item');\n    menuItem4.innerHTML = \"Soufle\";\n    menuItemsDiv.appendChild(menuItem4);\n\n    menuDiv.appendChild(menuHeading);\n    menuDiv.appendChild(menuItemsDiv);\n    contentDiv.appendChild(menuDiv);\n\n    let contactDiv = document.createElement('div');\n    contactDiv.classList.add('contact');\n    let contactHeading = document.createElement('div');\n    contactHeading.classList.add('heading');\n    contactHeading.innerHTML = \"Contact Us\";\n\n    let contactInfo = document.createElement('div');\n    contactInfo.classList.add('contact-info');\n    contactInfo.innerHTML = \"Here is our contact information. we would like it if you didn't call\";\n    let contactButtons = document.createElement('div');\n    contactButtons.classList.add('contact-button-container');\n    \n    for(let i=0;i<3;i++) {\n        let contactButton = document.createElement('a');\n        contactButton.href = \"#\";\n        contactButton.classList.add('contact-button');\n        contactButton.innerHTML = \"Contact Us Here\";\n        contactButtons.appendChild(contactButton);\n    }\n\n    contactDiv.appendChild(contactHeading);\n    contactDiv.appendChild(contactInfo);\n    contactDiv.appendChild(contactButtons);\n\n    contentDiv.append(contactDiv);\n}\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/init_page_load.js?");

/***/ }),

/***/ "./src/menu_page_load.js":
/*!*******************************!*\
  !*** ./src/menu_page_load.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuPageLoad: () => (/* binding */ menuPageLoad)\n/* harmony export */ });\nfunction menuPageLoad() {\n    const contentDiv = document.querySelector('.content');\n\n    let navDiv = document.createElement('div');\n    navDiv.classList.add('nav');\n\n    let navBrand = document.createElement('div');\n    navBrand.innerHTML = \"Macaron\";\n    navBrand.classList.add(\"nav-brand\");\n    let navButtonGroup = document.createElement('div');\n    navButtonGroup.classList.add('nav-button-group');\n\n    let navButton1 = document.createElement('a');\n    navButton1.href=\"#\";\n    navButton1.id = \"home-link\";\n    navButton1.classList.add('nav-link');\n    navButton1.innerHTML = \"Home\"\n    navButtonGroup.appendChild(navButton1);\n    let navButton2 = document.createElement('a');\n    navButton2.href=\"#\";\n    navButton2.id = \"menu-link\";\n    navButton2.classList.add('nav-link');\n    navButton2.innerHTML = \"Menu\"\n    navButtonGroup.appendChild(navButton2);\n    let navButton3 = document.createElement('a');\n    navButton3.href=\"#\";\n    navButton3.id = \"about-link\";\n    navButton3.classList.add('nav-link');\n    navButton3.innerHTML = \"About\"\n    navButtonGroup.appendChild(navButton3);\n\n    navDiv.appendChild(navBrand);\n    navDiv.appendChild(navButtonGroup);\n    contentDiv.appendChild(navDiv);\n\n    let menuContent = document.createElement('div');\n    menuContent.innerHTML = \"Menu Content Here\";\n\n    contentDiv.appendChild(menuContent);\n}\n\n\n\n//# sourceURL=webpack://restaurant-project/./src/menu_page_load.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
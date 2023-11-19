/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createContact = function (){
    const page = document.getElementById("content");
    const content = createContent();
    page.appendChild(content);
} 

function createContent(){
    const div = document.createElement('div');
    const address = document.createElement('h2');
    const phone = document.createElement('h2');
    const joke = document.createElement('h2');

    
    address.innerHTML = "Address: 39.7024 °N, 44.2991 °E";
    phone.innerHTML = "Phone: +0123456789";
    joke.innerHTML = "Don't forget your oxygen bottle!";
    
    div.append(address,phone,joke);

    div.classList.add('contact');
    return div; 
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContact);

/***/ }),

/***/ "./src/init-page.js":
/*!**************************!*\
  !*** ./src/init-page.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createPage = function (name,author){
    const page = document.getElementById("content");
    const mid = createContent();
    page.appendChild(mid);
} 



function createHeader(name){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const title = document.createElement('h1');

    img.src = "../images/logom.png";
    img.alt = "restaurant logo";
    title.innerHTML = name;
    div.appendChild(img);
    div.appendChild(title);
    div.classList.add('header');
    return div;
}

function createContent(){
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h2_1 = document.createElement('h2');
    const h2_2 = document.createElement('h2');
    const h2_3 = document.createElement('h2');

    h1.innerHTML = "The best food in the city";
    h2_1.innerHTML = "Hurry come taste it !";
    h2_2.innerHTML = "Open from Monday till Sunday";
    h2_3.innerHTML = "From 10h to 22h";

    const elements = [h1,h2_1,h2_2,h2_3];
    for (let el of elements){
        div.appendChild(el);
    }
    div.classList.add('home');
    return div;
}


function createFooter(name){
    const div = document.createElement('div');
    const img = document.createElement('img');
    const author = document.createElement('h2');

    img.src = "../images/github.svg";
    img.alt = "github logo";
    author.innerHTML = name;

    div.appendChild(img);
    div.appendChild(author);

    div.classList.add('footer');
    return div;
}



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const createMenu = function (){
    const page = document.getElementById("content");
    const content = createContent();
    page.appendChild(content);
} 

function createContent(){
    const div = document.createElement('div');
    const dishes = ['bbq','pizza','ramen','water','wine']
    const descriptions = [
        "Traditional Armenian BBQ",
        "Italian pizza made in wood over",
        "Japanese Ramen with eggs",
        "Water coming from the Ararat mountain",
        "Armenian wine made from a 2000 year old recipe"
    ]
    for (let i = 0; i < dishes.length ; i++){
        div.append(createDish(dishes[i],descriptions[i]));
    }
    div.classList.add('menu');
    return div; 
}

function createDish(dish,description) {
    const div = document.createElement('div');
    const dishname = document.createElement('h2');
    const dishdescription = document.createElement('h3');
    const img = document.createElement('img');

    img.src = "../images/" + dish + ".png";
    img.alt = description;

    dishname.innerHTML = dish;
    dishdescription.innerHTML = description;

    div.append(img,dishname,dishdescription);
    div.classList.add('dish');
    return div;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenu);

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init-page */ "./src/init-page.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




const page = document.getElementById("content");

(0,_init_page__WEBPACK_IMPORTED_MODULE_0__["default"])('Ararat','Sevada Sahakian');

const tabs = document.querySelector('.tabs').children;

console.log(tabs);

tabs[0].addEventListener('click',(e) => {
    page.innerHTML = '';
    (0,_init_page__WEBPACK_IMPORTED_MODULE_0__["default"])('Ararat','Sevada Sahakian');
});

tabs[1].addEventListener('click',(e) => {
    page.innerHTML = '';
    (0,_menu__WEBPACK_IMPORTED_MODULE_1__["default"])();
});

tabs[2].addEventListener('click',(e) => {
    page.innerHTML = '';
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

tabs[2].addEventListener('click',(e) => {
    page.innerHTML = '';
    (0,_contact__WEBPACK_IMPORTED_MODULE_2__["default"])();
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ3hCNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQzdEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7VUN4Q3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNMO0FBQ007O0FBRXRDOztBQUVBLHNEQUFVOztBQUVWOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakIsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxvREFBYTtBQUNqQixDQUFDLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdC1wYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVDb250YWN0ID0gZnVuY3Rpb24gKCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlQ29udGVudCgpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59IFxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgcGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGpva2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuXG4gICAgXG4gICAgYWRkcmVzcy5pbm5lckhUTUwgPSBcIkFkZHJlc3M6IDM5LjcwMjQgwrBOLCA0NC4yOTkxIMKwRVwiO1xuICAgIHBob25lLmlubmVySFRNTCA9IFwiUGhvbmU6ICswMTIzNDU2Nzg5XCI7XG4gICAgam9rZS5pbm5lckhUTUwgPSBcIkRvbid0IGZvcmdldCB5b3VyIG94eWdlbiBib3R0bGUhXCI7XG4gICAgXG4gICAgZGl2LmFwcGVuZChhZGRyZXNzLHBob25lLGpva2UpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3QnKTtcbiAgICByZXR1cm4gZGl2OyBcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0OyIsImNvbnN0IGNyZWF0ZVBhZ2UgPSBmdW5jdGlvbiAobmFtZSxhdXRob3Ipe1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgbWlkID0gY3JlYXRlQ29udGVudCgpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQobWlkKTtcbn0gXG5cblxuXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIobmFtZSl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuXG4gICAgaW1nLnNyYyA9IFwiLi4vaW1hZ2VzL2xvZ29tLnBuZ1wiO1xuICAgIGltZy5hbHQgPSBcInJlc3RhdXJhbnQgbG9nb1wiO1xuICAgIHRpdGxlLmlubmVySFRNTCA9IG5hbWU7XG4gICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XG4gICAgZGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb25zdCBoMl8xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBoMl8yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBoMl8zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIGgxLmlubmVySFRNTCA9IFwiVGhlIGJlc3QgZm9vZCBpbiB0aGUgY2l0eVwiO1xuICAgIGgyXzEuaW5uZXJIVE1MID0gXCJIdXJyeSBjb21lIHRhc3RlIGl0ICFcIjtcbiAgICBoMl8yLmlubmVySFRNTCA9IFwiT3BlbiBmcm9tIE1vbmRheSB0aWxsIFN1bmRheVwiO1xuICAgIGgyXzMuaW5uZXJIVE1MID0gXCJGcm9tIDEwaCB0byAyMmhcIjtcblxuICAgIGNvbnN0IGVsZW1lbnRzID0gW2gxLGgyXzEsaDJfMixoMl8zXTtcbiAgICBmb3IgKGxldCBlbCBvZiBlbGVtZW50cyl7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChlbCk7XG4gICAgfVxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdob21lJyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuXG5mdW5jdGlvbiBjcmVhdGVGb290ZXIobmFtZSl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIGltZy5zcmMgPSBcIi4uL2ltYWdlcy9naXRodWIuc3ZnXCI7XG4gICAgaW1nLmFsdCA9IFwiZ2l0aHViIGxvZ29cIjtcbiAgICBhdXRob3IuaW5uZXJIVE1MID0gbmFtZTtcblxuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZChhdXRob3IpO1xuXG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIHJldHVybiBkaXY7XG59XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVQYWdlOyIsImNvbnN0IGNyZWF0ZU1lbnUgPSBmdW5jdGlvbiAoKXtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBjcmVhdGVDb250ZW50KCk7XG4gICAgcGFnZS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn0gXG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXNoZXMgPSBbJ2JicScsJ3BpenphJywncmFtZW4nLCd3YXRlcicsJ3dpbmUnXVxuICAgIGNvbnN0IGRlc2NyaXB0aW9ucyA9IFtcbiAgICAgICAgXCJUcmFkaXRpb25hbCBBcm1lbmlhbiBCQlFcIixcbiAgICAgICAgXCJJdGFsaWFuIHBpenphIG1hZGUgaW4gd29vZCBvdmVyXCIsXG4gICAgICAgIFwiSmFwYW5lc2UgUmFtZW4gd2l0aCBlZ2dzXCIsXG4gICAgICAgIFwiV2F0ZXIgY29taW5nIGZyb20gdGhlIEFyYXJhdCBtb3VudGFpblwiLFxuICAgICAgICBcIkFybWVuaWFuIHdpbmUgbWFkZSBmcm9tIGEgMjAwMCB5ZWFyIG9sZCByZWNpcGVcIlxuICAgIF1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc2hlcy5sZW5ndGggOyBpKyspe1xuICAgICAgICBkaXYuYXBwZW5kKGNyZWF0ZURpc2goZGlzaGVzW2ldLGRlc2NyaXB0aW9uc1tpXSkpO1xuICAgIH1cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuICAgIHJldHVybiBkaXY7IFxufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXNoKGRpc2gsZGVzY3JpcHRpb24pIHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBkaXNobmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgZGlzaGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcblxuICAgIGltZy5zcmMgPSBcIi4uL2ltYWdlcy9cIiArIGRpc2ggKyBcIi5wbmdcIjtcbiAgICBpbWcuYWx0ID0gZGVzY3JpcHRpb247XG5cbiAgICBkaXNobmFtZS5pbm5lckhUTUwgPSBkaXNoO1xuICAgIGRpc2hkZXNjcmlwdGlvbi5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbjtcblxuICAgIGRpdi5hcHBlbmQoaW1nLGRpc2huYW1lLGRpc2hkZXNjcmlwdGlvbik7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2Rpc2gnKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVNZW51OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZVBhZ2UgZnJvbSBcIi4vaW5pdC1wYWdlXCI7XG5pbXBvcnQgY3JlYXRlTWVudSBmcm9tIFwiLi9tZW51XCI7XG5pbXBvcnQgY3JlYXRlQ29udGFjdCBmcm9tIFwiLi9jb250YWN0XCI7XG5cbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbmNyZWF0ZVBhZ2UoJ0FyYXJhdCcsJ1NldmFkYSBTYWhha2lhbicpO1xuXG5jb25zdCB0YWJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhYnMnKS5jaGlsZHJlbjtcblxuY29uc29sZS5sb2codGFicyk7XG5cbnRhYnNbMF0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgcGFnZS5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVQYWdlKCdBcmFyYXQnLCdTZXZhZGEgU2FoYWtpYW4nKTtcbn0pO1xuXG50YWJzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgY3JlYXRlTWVudSgpO1xufSk7XG5cbnRhYnNbMl0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChlKSA9PiB7XG4gICAgcGFnZS5pbm5lckhUTUwgPSAnJztcbiAgICBjcmVhdGVDb250YWN0KCk7XG59KTtcblxudGFic1syXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBwYWdlLmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZUNvbnRhY3QoKTtcbn0pOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
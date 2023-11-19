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
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQSxpRUFBZSxhQUFhOzs7Ozs7Ozs7Ozs7OztBQ3hCNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7OztBQzdEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7VUN4Q3pCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05xQztBQUNMO0FBQ007O0FBRXRDOztBQUVBLHNEQUFVOztBQUVWOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2QsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsSUFBSSxpREFBVTtBQUNkLENBQUM7O0FBRUQ7QUFDQTtBQUNBLElBQUksb0RBQWE7QUFDakIsQ0FBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luaXQtcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlQ29udGFjdCA9IGZ1bmN0aW9uICgpe1xuICAgIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG4gICAgY29uc3QgY29udGVudCA9IGNyZWF0ZUNvbnRlbnQoKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xufSBcblxuZnVuY3Rpb24gY3JlYXRlQ29udGVudCgpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IHBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjb25zdCBqb2tlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcblxuICAgIFxuICAgIGFkZHJlc3MuaW5uZXJIVE1MID0gXCJBZGRyZXNzOiAzOS43MDI0IMKwTiwgNDQuMjk5MSDCsEVcIjtcbiAgICBwaG9uZS5pbm5lckhUTUwgPSBcIlBob25lOiArMDEyMzQ1Njc4OVwiO1xuICAgIGpva2UuaW5uZXJIVE1MID0gXCJEb24ndCBmb3JnZXQgeW91ciBveHlnZW4gYm90dGxlIVwiO1xuICAgIFxuICAgIGRpdi5hcHBlbmQoYWRkcmVzcyxwaG9uZSxqb2tlKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjb250YWN0Jyk7XG4gICAgcmV0dXJuIGRpdjsgXG59XG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQ29udGFjdDsiLCJjb25zdCBjcmVhdGVQYWdlID0gZnVuY3Rpb24gKG5hbWUsYXV0aG9yKXtcbiAgICBjb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuICAgIGNvbnN0IG1pZCA9IGNyZWF0ZUNvbnRlbnQoKTtcbiAgICBwYWdlLmFwcGVuZENoaWxkKG1pZCk7XG59IFxuXG5cblxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKG5hbWUpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcblxuICAgIGltZy5zcmMgPSBcIi4uL2ltYWdlcy9sb2dvbS5wbmdcIjtcbiAgICBpbWcuYWx0ID0gXCJyZXN0YXVyYW50IGxvZ29cIjtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBuYW1lO1xuICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xuICAgIGRpdi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIHJldHVybiBkaXY7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUNvbnRlbnQoKXtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgaDJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaDJfMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY29uc3QgaDJfMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICBoMS5pbm5lckhUTUwgPSBcIlRoZSBiZXN0IGZvb2QgaW4gdGhlIGNpdHlcIjtcbiAgICBoMl8xLmlubmVySFRNTCA9IFwiSHVycnkgY29tZSB0YXN0ZSBpdCAhXCI7XG4gICAgaDJfMi5pbm5lckhUTUwgPSBcIk9wZW4gZnJvbSBNb25kYXkgdGlsbCBTdW5kYXlcIjtcbiAgICBoMl8zLmlubmVySFRNTCA9IFwiRnJvbSAxMGggdG8gMjJoXCI7XG5cbiAgICBjb25zdCBlbGVtZW50cyA9IFtoMSxoMl8xLGgyXzIsaDJfM107XG4gICAgZm9yIChsZXQgZWwgb2YgZWxlbWVudHMpe1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoZWwpO1xuICAgIH1cbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnaG9tZScpO1xuICAgIHJldHVybiBkaXY7XG59XG5cblxuZnVuY3Rpb24gY3JlYXRlRm9vdGVyKG5hbWUpe1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG5cbiAgICBpbWcuc3JjID0gXCIuLi9pbWFnZXMvZ2l0aHViLnN2Z1wiO1xuICAgIGltZy5hbHQgPSBcImdpdGh1YiBsb2dvXCI7XG4gICAgYXV0aG9yLmlubmVySFRNTCA9IG5hbWU7XG5cbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoYXV0aG9yKTtcblxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICByZXR1cm4gZGl2O1xufVxuXG5cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlUGFnZTsiLCJjb25zdCBjcmVhdGVNZW51ID0gZnVuY3Rpb24gKCl7XG4gICAgY29uc3QgcGFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb25zdCBjb250ZW50ID0gY3JlYXRlQ29udGVudCgpO1xuICAgIHBhZ2UuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59IFxuXG5mdW5jdGlvbiBjcmVhdGVDb250ZW50KCl7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGlzaGVzID0gWydiYnEnLCdwaXp6YScsJ3JhbWVuJywnd2F0ZXInLCd3aW5lJ11cbiAgICBjb25zdCBkZXNjcmlwdGlvbnMgPSBbXG4gICAgICAgIFwiVHJhZGl0aW9uYWwgQXJtZW5pYW4gQkJRXCIsXG4gICAgICAgIFwiSXRhbGlhbiBwaXp6YSBtYWRlIGluIHdvb2Qgb3ZlclwiLFxuICAgICAgICBcIkphcGFuZXNlIFJhbWVuIHdpdGggZWdnc1wiLFxuICAgICAgICBcIldhdGVyIGNvbWluZyBmcm9tIHRoZSBBcmFyYXQgbW91bnRhaW5cIixcbiAgICAgICAgXCJBcm1lbmlhbiB3aW5lIG1hZGUgZnJvbSBhIDIwMDAgeWVhciBvbGQgcmVjaXBlXCJcbiAgICBdXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNoZXMubGVuZ3RoIDsgaSsrKXtcbiAgICAgICAgZGl2LmFwcGVuZChjcmVhdGVEaXNoKGRpc2hlc1tpXSxkZXNjcmlwdGlvbnNbaV0pKTtcbiAgICB9XG4gICAgZGl2LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcbiAgICByZXR1cm4gZGl2OyBcbn1cblxuZnVuY3Rpb24gY3JlYXRlRGlzaChkaXNoLGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgZGlzaG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGNvbnN0IGRpc2hkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgY29uc3QgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5cbiAgICBpbWcuc3JjID0gXCIuLi9pbWFnZXMvXCIgKyBkaXNoICsgXCIucG5nXCI7XG4gICAgaW1nLmFsdCA9IGRlc2NyaXB0aW9uO1xuXG4gICAgZGlzaG5hbWUuaW5uZXJIVE1MID0gZGlzaDtcbiAgICBkaXNoZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gZGVzY3JpcHRpb247XG5cbiAgICBkaXYuYXBwZW5kKGltZyxkaXNobmFtZSxkaXNoZGVzY3JpcHRpb24pO1xuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdkaXNoJyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVQYWdlIGZyb20gXCIuL2luaXQtcGFnZVwiO1xuaW1wb3J0IGNyZWF0ZU1lbnUgZnJvbSBcIi4vbWVudVwiO1xuaW1wb3J0IGNyZWF0ZUNvbnRhY3QgZnJvbSBcIi4vY29udGFjdFwiO1xuXG5jb25zdCBwYWdlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG5jcmVhdGVQYWdlKCdBcmFyYXQnLCdTZXZhZGEgU2FoYWtpYW4nKTtcblxuY29uc3QgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzJykuY2hpbGRyZW47XG5cbmNvbnNvbGUubG9nKHRhYnMpO1xuXG50YWJzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgY3JlYXRlUGFnZSgnQXJhcmF0JywnU2V2YWRhIFNhaGFraWFuJyk7XG59KTtcblxudGFic1sxXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGUpID0+IHtcbiAgICBwYWdlLmlubmVySFRNTCA9ICcnO1xuICAgIGNyZWF0ZU1lbnUoKTtcbn0pO1xuXG50YWJzWzJdLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZSkgPT4ge1xuICAgIHBhZ2UuaW5uZXJIVE1MID0gJyc7XG4gICAgY3JlYXRlQ29udGFjdCgpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
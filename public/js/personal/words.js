/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

var things = ['coding', 'knitting', 'drawing', 'drawing', 'drawing', 'drawing', 'drawing', 'designing', 'planning', 'writing', 'writing', 'writing', 'writing', 'writing', 'writing', 'writing', 'programming', 'programming', 'programming', 'programming', 'programming', 'concluding', 'programming', 'thinking', 'painting', 'painting', 'painting', 'painting', 'painting', 'sewing', 'sketching', 'ruminating', 'deliberating', 'pondering', 'contemplating', 'abstracting', 'abstracting', 'abstracting', 'abstracting', 'abstracting', 'abstracting', 'optimising', 'optimising', 'optimising', 'optimising', 'optimising', 'optimising', 'refactoring', 'refactoring', 'refactoring', 'objectifying', 'simplifying', 'decoupling', 'debugging', 'debugging', 'debugging', 'debugging', 'debugging', 'debugging', 'configuring', 'streamlining', 'searching', 'tweaking', 'editing'];

var junk = ['#', '@', '%', '*', '&amp;', '&lt;', '&gt;', '_', '=', '+', '[', ']', '|', '-', '!', '?', 'X'];

function randomInt(min, max) {
    return Math.round(min + Math.random() * (max - min));
}

(function tick() {
    var txt = things[randomInt(0, things.length - 1)];
    var chars = txt.split('');
    var glitch = randomInt(0, 3);
    for (var i = 0; i < glitch; i++) {
        chars[randomInt(0, chars.length - 1)] = junk[randomInt(0, junk.length - 1)];
    }
    txt = chars.join('');
    var x = document.getElementById('ing');
    x.innerHTML = txt;
    window.setTimeout(tick, randomInt(16, 400));
})();

/***/ })

/******/ });
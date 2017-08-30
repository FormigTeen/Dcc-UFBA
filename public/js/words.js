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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var things = ['coding', 'ufba', 'grupro', 'graco', 'dcc', 'indigente', 'maratona', 'google', 'ieeeXtreme', 'math', 'complexity', 'perfomance', 'first', 'sti', 'networking', 'web', 'programming', 'infojr', 'semcomp', 'computer', 'circuits', 'robot', 'robocode', 'thinking', 'create', 'inovation', 'future', 'feeling', 'database', 'data', 'search', 'crawler', 'manchine', 'learn', 'powerful', 'opensource', 'abstracting', 'beta', 'binary', 'number', 'theory', 'optimising', 'language', 'pipeline', 'sort', 'graph', 'tree', 'refactoring', 'struct', 'help', 'objectifying', 'simplifying', 'decoupling', 'debugging', 'intelligence', 'artifical', 'error', 'found', 'shell', 'configuring', 'streamlining', 'searching', 'tweaking', 'editing', 'root'];
var junk = ['#', '@', '%', '*', '&amp;', '&lt;', '&gt;', '_', '=', '+', '[', ']', '|', '-', '!', '?', 'X'];

function randomInt(min, max) {
  return Math.round(min + Math.random() * (max - min));
}

(function tick() {

  var txt = things[randomInt(0, things.length - 1)];
  var chars = txt.split('');
  var glitch = randomInt(0, txt.length / 3);
  for (var i = 0; i < glitch; i++) {
    chars[randomInt(0, chars.length - 1)] = junk[randomInt(0, junk.length - 1)];
  }
  txt = chars.join('');
  var x = document.getElementById('ing');
  var ini = "<h1 class=\"ui inverted header\">";
  var end = "</h1>";
  txt = ini.concat(txt, end);
  x.innerHTML = txt;
  window.setTimeout(tick, randomInt(16, 1000));
})();

/***/ })
/******/ ]);
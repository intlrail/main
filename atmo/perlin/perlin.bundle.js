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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tif(!module.children) module.children = [];\r\n\t\tObject.defineProperty(module, \"loaded\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.l;\r\n\t\t\t}\r\n\t\t});\r\n\t\tObject.defineProperty(module, \"id\", {\r\n\t\t\tenumerable: true,\r\n\t\t\tget: function() {\r\n\t\t\t\treturn module.i;\r\n\t\t\t}\r\n\t\t});\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n};\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRpZighbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShtb2R1bGUsIFwibG9hZGVkXCIsIHtcclxuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcclxuXHRcdFx0Z2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmw7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJpZFwiLCB7XHJcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXHJcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIG1vZHVsZS5pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59O1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAzIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 1 */
/* no static exports found */
/* all exports used */
/*!************************!*\
  !*** ./~/p5/lib/p5.js ***!
  \************************/
/***/ (function(module, exports, __webpack_require__) {


/***/ }),
/* 2 */,
/* 3 */
/* no static exports found */
/* all exports used */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanM/MzY5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZztcclxuXHJcbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXHJcbmcgPSAoZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHRoaXM7XHJcbn0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 4 */,
/* 5 */
/* no static exports found */
/* all exports used */
/*!**********************!*\
  !*** ./perlin/ui.js ***!
  \**********************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {const p5 = __webpack_require__(/*! p5 */ 1);\n\nmodule.exports.update = update;\nmodule.exports.display = display;\n\nfunction display (p, pos, vel) {\n  //p.line(pos.x, pos.y, (pos.x + vel.x), (pos.y + vel.y));\n  //p.fill(0);\n  //p.ellipse(pos.x, pos.y, 50);\n  p.point(pos.x, pos.y);\n}\n\nfunction update (p, t, pos, vel, seed) {\n  const w = p.windowWidth;\n  const h = p.windowHeight;\n\n  pos.x = mod((pos.x + vel.x), w);\n  pos.y = mod((pos.y + vel.y), h);\n\n  var r = p5.Vector.fromAngle(p.noise(seed, t) * p.TWO_PI);\n  vel.x = r.x;\n  vel.y = r.y;\n\n  vel.add(flow(p, pos)).mult(3);\n}\n\nfunction flow (p, pos) {\n  let r = p.noise(pos.x / 100, pos.y / 100) * p.TWO_PI;\n  return p5.Vector.fromAngle(r).mult(2);\n}\n\nfunction mod (x, n) {\n  return ((x % n) + n ) % n;\n}\n;\nvar hot = module.hot;\nif (hot) {\n  hot.accept(err => console.log('error', err));\n\n  var keep = (bindings, evalstr) =>\n    hot.dispose(function (data) {\n      data.bindings = bindings;\n      data.evalstr = evalstr;\n    });\n\n  if (!hot.data) {\n    var bindings = {}, exports = module.exports;\n    [\"display\",\"update\",\"flow\",\"mod\"].forEach(function (name) {\n      var f = eval(name);\n      var proxied = new Proxy(f, {\n        apply: function (f, self, args) {\n          return (bindings[name] || f).apply(self, args);\n        }\n      });\n      eval(name + \" = proxied;\");\n      if (exports[name]) exports[name] = proxied;\n    });\n    keep(bindings, str => eval(str));\n  }\n  else {\n    var data = hot.data, bindings = data.bindings;\n    [\"display\",\"update\",\"flow\",\"mod\"].forEach(function (name) {\n      bindings[name] = data.evalstr(\n        '(' +\n        eval(name).toString()\n                  .replace(/^function \\w+\\(/,\n                           'function (') +\n        ')');\n    });\n    keep(bindings, data.evalstr);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 0)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Blcmxpbi91aS5qcz83YzZkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHA1ID0gcmVxdWlyZSgncDUnKTtcblxubW9kdWxlLmV4cG9ydHMudXBkYXRlID0gdXBkYXRlO1xubW9kdWxlLmV4cG9ydHMuZGlzcGxheSA9IGRpc3BsYXk7XG5cbmZ1bmN0aW9uIGRpc3BsYXkgKHAsIHBvcywgdmVsKSB7XG4gIC8vcC5saW5lKHBvcy54LCBwb3MueSwgKHBvcy54ICsgdmVsLngpLCAocG9zLnkgKyB2ZWwueSkpO1xuICAvL3AuZmlsbCgwKTtcbiAgLy9wLmVsbGlwc2UocG9zLngsIHBvcy55LCA1MCk7XG4gIHAucG9pbnQocG9zLngsIHBvcy55KTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlIChwLCB0LCBwb3MsIHZlbCwgc2VlZCkge1xuICBjb25zdCB3ID0gcC53aW5kb3dXaWR0aDtcbiAgY29uc3QgaCA9IHAud2luZG93SGVpZ2h0O1xuXG4gIHBvcy54ID0gbW9kKChwb3MueCArIHZlbC54KSwgdyk7XG4gIHBvcy55ID0gbW9kKChwb3MueSArIHZlbC55KSwgaCk7XG5cbiAgdmFyIHIgPSBwNS5WZWN0b3IuZnJvbUFuZ2xlKHAubm9pc2Uoc2VlZCwgdCkgKiBwLlRXT19QSSk7XG4gIHZlbC54ID0gci54O1xuICB2ZWwueSA9IHIueTtcblxuICB2ZWwuYWRkKGZsb3cocCwgcG9zKSkubXVsdCgzKTtcbn1cblxuZnVuY3Rpb24gZmxvdyAocCwgcG9zKSB7XG4gIGxldCByID0gcC5ub2lzZShwb3MueCAvIDEwMCwgcG9zLnkgLyAxMDApICogcC5UV09fUEk7XG4gIHJldHVybiBwNS5WZWN0b3IuZnJvbUFuZ2xlKHIpLm11bHQoMik7XG59XG5cbmZ1bmN0aW9uIG1vZCAoeCwgbikge1xuICByZXR1cm4gKCh4ICUgbikgKyBuICkgJSBuO1xufVxuO1xudmFyIGhvdCA9IG1vZHVsZS5ob3Q7XG5pZiAoaG90KSB7XG4gIGhvdC5hY2NlcHQoZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycikpO1xuXG4gIHZhciBrZWVwID0gKGJpbmRpbmdzLCBldmFsc3RyKSA9PlxuICAgIGhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkYXRhLmJpbmRpbmdzID0gYmluZGluZ3M7XG4gICAgICBkYXRhLmV2YWxzdHIgPSBldmFsc3RyO1xuICAgIH0pO1xuXG4gIGlmICghaG90LmRhdGEpIHtcbiAgICB2YXIgYmluZGluZ3MgPSB7fSwgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuICAgIFtcImRpc3BsYXlcIixcInVwZGF0ZVwiLFwiZmxvd1wiLFwibW9kXCJdLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBmID0gZXZhbChuYW1lKTtcbiAgICAgIHZhciBwcm94aWVkID0gbmV3IFByb3h5KGYsIHtcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uIChmLCBzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIChiaW5kaW5nc1tuYW1lXSB8fCBmKS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmFsKG5hbWUgKyBcIiA9IHByb3hpZWQ7XCIpO1xuICAgICAgaWYgKGV4cG9ydHNbbmFtZV0pIGV4cG9ydHNbbmFtZV0gPSBwcm94aWVkO1xuICAgIH0pO1xuICAgIGtlZXAoYmluZGluZ3MsIHN0ciA9PiBldmFsKHN0cikpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBkYXRhID0gaG90LmRhdGEsIGJpbmRpbmdzID0gZGF0YS5iaW5kaW5ncztcbiAgICBbXCJkaXNwbGF5XCIsXCJ1cGRhdGVcIixcImZsb3dcIixcIm1vZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBiaW5kaW5nc1tuYW1lXSA9IGRhdGEuZXZhbHN0cihcbiAgICAgICAgJygnICtcbiAgICAgICAgZXZhbChuYW1lKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmZ1bmN0aW9uIFxcdytcXCgvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bmN0aW9uICgnKSArXG4gICAgICAgICcpJyk7XG4gICAgfSk7XG4gICAga2VlcChiaW5kaW5ncywgZGF0YS5ldmFsc3RyKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGVybGluL3VpLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0EiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }),
/* 6 */,
/* 7 */
/* no static exports found */
/* all exports used */
/*!**************************!*\
  !*** ./perlin/sketch.js ***!
  \**************************/
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {const p5 = __webpack_require__(/*! p5 */ 1);\n\nconst ui = __webpack_require__(/*! ./ui */ 5);\n\nvar sketch = function (p) {\n  const w = p.windowWidth;\n  const h = p.windowHeight;\n  let t = 0;\n  let n = 800;\n  let particles = [];\n\n  p.setup = function() {\n    p.createCanvas(w, h);\n    p.stroke(0, 10);\n\n    for (var i = 0; i < n; i++) {\n      particles.push({\n          pos: p.createVector(p.random(w), p.random(h)),\n          vel: p.createVector(0,0),\n          seed: i\n        });\n    }\n  };\n\n  p.draw = function() {\n    particles.forEach( function(prtcl) {\n      ui.display(p, prtcl.pos, prtcl.vel);\n      ui.update(p, t, prtcl.pos, prtcl.vel, prtcl.seed);\n    });\n    t += 0.002;\n  };\n};\n\nnew p5(sketch);\n;\nvar hot = module.hot;\nif (hot) {\n  hot.accept(err => console.log('error', err));\n\n  var keep = (bindings, evalstr) =>\n    hot.dispose(function (data) {\n      data.bindings = bindings;\n      data.evalstr = evalstr;\n    });\n\n  if (!hot.data) {\n    var bindings = {}, exports = module.exports;\n    [].forEach(function (name) {\n      var f = eval(name);\n      var proxied = new Proxy(f, {\n        apply: function (f, self, args) {\n          return (bindings[name] || f).apply(self, args);\n        }\n      });\n      eval(name + \" = proxied;\");\n      if (exports[name]) exports[name] = proxied;\n    });\n    keep(bindings, str => eval(str));\n  }\n  else {\n    var data = hot.data, bindings = data.bindings;\n    [].forEach(function (name) {\n      bindings[name] = data.evalstr(\n        '(' +\n        eval(name).toString()\n                  .replace(/^function \\w+\\(/,\n                           'function (') +\n        ')');\n    });\n    keep(bindings, data.evalstr);\n  }\n}\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 0)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3Blcmxpbi9za2V0Y2guanM/YTZlMiJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwNSA9IHJlcXVpcmUoJ3A1Jyk7XG5cbmNvbnN0IHVpID0gcmVxdWlyZSgnLi91aScpO1xuXG52YXIgc2tldGNoID0gZnVuY3Rpb24gKHApIHtcbiAgY29uc3QgdyA9IHAud2luZG93V2lkdGg7XG4gIGNvbnN0IGggPSBwLndpbmRvd0hlaWdodDtcbiAgbGV0IHQgPSAwO1xuICBsZXQgbiA9IDgwMDtcbiAgbGV0IHBhcnRpY2xlcyA9IFtdO1xuXG4gIHAuc2V0dXAgPSBmdW5jdGlvbigpIHtcbiAgICBwLmNyZWF0ZUNhbnZhcyh3LCBoKTtcbiAgICBwLnN0cm9rZSgwLCAxMCk7XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcGFydGljbGVzLnB1c2goe1xuICAgICAgICAgIHBvczogcC5jcmVhdGVWZWN0b3IocC5yYW5kb20odyksIHAucmFuZG9tKGgpKSxcbiAgICAgICAgICB2ZWw6IHAuY3JlYXRlVmVjdG9yKDAsMCksXG4gICAgICAgICAgc2VlZDogaVxuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcC5kcmF3ID0gZnVuY3Rpb24oKSB7XG4gICAgcGFydGljbGVzLmZvckVhY2goIGZ1bmN0aW9uKHBydGNsKSB7XG4gICAgICB1aS5kaXNwbGF5KHAsIHBydGNsLnBvcywgcHJ0Y2wudmVsKTtcbiAgICAgIHVpLnVwZGF0ZShwLCB0LCBwcnRjbC5wb3MsIHBydGNsLnZlbCwgcHJ0Y2wuc2VlZCk7XG4gICAgfSk7XG4gICAgdCArPSAwLjAwMjtcbiAgfTtcbn07XG5cbm5ldyBwNShza2V0Y2gpO1xuO1xudmFyIGhvdCA9IG1vZHVsZS5ob3Q7XG5pZiAoaG90KSB7XG4gIGhvdC5hY2NlcHQoZXJyID0+IGNvbnNvbGUubG9nKCdlcnJvcicsIGVycikpO1xuXG4gIHZhciBrZWVwID0gKGJpbmRpbmdzLCBldmFsc3RyKSA9PlxuICAgIGhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBkYXRhLmJpbmRpbmdzID0gYmluZGluZ3M7XG4gICAgICBkYXRhLmV2YWxzdHIgPSBldmFsc3RyO1xuICAgIH0pO1xuXG4gIGlmICghaG90LmRhdGEpIHtcbiAgICB2YXIgYmluZGluZ3MgPSB7fSwgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzO1xuICAgIFtdLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgIHZhciBmID0gZXZhbChuYW1lKTtcbiAgICAgIHZhciBwcm94aWVkID0gbmV3IFByb3h5KGYsIHtcbiAgICAgICAgYXBwbHk6IGZ1bmN0aW9uIChmLCBzZWxmLCBhcmdzKSB7XG4gICAgICAgICAgcmV0dXJuIChiaW5kaW5nc1tuYW1lXSB8fCBmKS5hcHBseShzZWxmLCBhcmdzKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBldmFsKG5hbWUgKyBcIiA9IHByb3hpZWQ7XCIpO1xuICAgICAgaWYgKGV4cG9ydHNbbmFtZV0pIGV4cG9ydHNbbmFtZV0gPSBwcm94aWVkO1xuICAgIH0pO1xuICAgIGtlZXAoYmluZGluZ3MsIHN0ciA9PiBldmFsKHN0cikpO1xuICB9XG4gIGVsc2Uge1xuICAgIHZhciBkYXRhID0gaG90LmRhdGEsIGJpbmRpbmdzID0gZGF0YS5iaW5kaW5ncztcbiAgICBbXS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICBiaW5kaW5nc1tuYW1lXSA9IGRhdGEuZXZhbHN0cihcbiAgICAgICAgJygnICtcbiAgICAgICAgZXZhbChuYW1lKS50b1N0cmluZygpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXmZ1bmN0aW9uIFxcdytcXCgvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2Z1bmN0aW9uICgnKSArXG4gICAgICAgICcpJyk7XG4gICAgfSk7XG4gICAga2VlcChiaW5kaW5ncywgZGF0YS5ldmFsc3RyKTtcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcGVybGluL3NrZXRjaC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBIiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
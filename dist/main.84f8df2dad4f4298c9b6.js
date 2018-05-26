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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/data/coupons.js":
/*!*****************************!*\
  !*** ./src/data/coupons.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar coupons = [{\n  title: \"Schnapp des Tages!\",\n  content: \"Schau' täglich auf der Startseite vorbei und verpasse nie wieder den Schnapp des Tages! Lorem ipsum dolor ist lorem. Fusce tincidunt tempus tortor non commodo.\",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 week\",\n  dataExpiring: 7,\n  dataVerified: true,\n  dataCode: true\n}, {\n  title: \"Bis zu 500€ Rabatt auf Ambilight TVs\",\n  content: \"Beim Kauf eines teilnehmenden Philips Ambilight TV kannst du bis zu 500 € Direktabzug im Warenkorb erhalten. Fusce tincidunt tempus tortor non commodo. Praesent pretium massa at nisl. maximus bibendum.\",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 day\",\n  dataExpiring: 1,\n  dataVerified: false,\n  dataCode: true\n}, {\n  title: \"1 Disney-Tasse Gratis\",\n  content: \"Kaufe dir jetzt 2 Disney Filme und erhalte eine Disney Tasse Gratis dazu. Fusce tincidunt tempus tortor non commodo. \",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 week\",\n  dataExpiring: 7,\n  dataVerified: true,\n  dataCode: true\n}, {\n  title: \"Tolle Rabatte bei den Dienstags-Deals\",\n  content: \"Hol Dir jeden Dienstag, ab 20 Uhr bis Mittwoch, 9 Uhr die interessantesten Angebote versandkostenfrei zu Dir nach Hause.\",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 day\",\n  dataExpiring: 1,\n  dataVerified: false,\n  dataCode: true\n}, {\n  title: \"Günstige Filme mit Charlize Theron\",\n  content: \"Sicher dir jetzt zum Start von Atomic Blonde alle Filme mit Charlize Theron zu einem Hammer-Preis. Gültig bis. Fusce tincidunt tempus.\",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 week\",\n  dataExpiring: 7,\n  dataVerified: true,\n  dataCode: false\n}, {\n  title: \"Günstige Filme mit Charlize Theron\",\n  content: \"Sicher dir jetzt zum Start von Atomic Blonde alle Filme mit Charlize Theron zu einem Hammer-Preis. Gültig bis. Fusce tincidunt tempus. tortor non commodo. Praesent pretium massa at nisl maximus bibendum.\",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 day\",\n  dataExpiring: 1,\n  dataVerified: true,\n  dataCode: false\n}, {\n  title: \"Günstige Filme mit Charlize Theron\",\n  content: \"Sicher dir jetzt zum Start von Atomic Blonde alle Filme mit Charlize Theron zu einem Hammer-Preis. Gültig bis. Fusce tincidunt.\",\n  uses: \"44 uses in 30 days\",\n  terms: \"terms & conditions\",\n  expiringText: \"expires: 1 week\",\n  dataExpiring: 7,\n  dataVerified: true,\n  dataCode: false\n}];\nexports.default = { coupons: coupons };\n\n//# sourceURL=webpack:///./src/data/coupons.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./styles/main.scss */ \"./src/styles/main.scss\");\n\nvar _coupons = __webpack_require__(/*! ./data/coupons.js */ \"./src/data/coupons.js\");\n\nvar _coupons2 = _interopRequireDefault(_coupons);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// get parent element for coupon listing\nvar all = document.getElementById('coupons-list');\n\n// set dummy coupon data\nvar couponsData = _coupons2.default.coupons;\n\n// get filter buttons\nvar allButton = document.getElementById('all');\nvar expiringButton = document.getElementById('expiring');\nvar verifiedButton = document.getElementById('verified');\nvar codeButton = document.getElementById('code');\n\n// adding event listeners on filtering buttons\nallButton.addEventListener('click', function (e) {\n  removeFilterActiveClasses(e);\n  couponFiltering(couponsData, 'all');\n});\n\nexpiringButton.addEventListener('click', function (e) {\n  removeFilterActiveClasses(e);\n  couponFiltering(couponsData, 'expiring');\n});\n\nverifiedButton.addEventListener('click', function (e) {\n  removeFilterActiveClasses(e);\n  couponFiltering(couponsData, 'verified');\n});\n\ncodeButton.addEventListener('click', function (e) {\n  removeFilterActiveClasses(e);\n  couponFiltering(couponsData, 'code');\n});\n\nfunction couponFiltering(couponsData, filterType) {\n  var filteredList = [];\n  couponsData.forEach(function (el) {\n    switch (filterType) {\n      case 'all':\n        filteredList = _coupons2.default.coupons;\n        break;\n      case 'expiring':\n        if (el.dataExpiring < 7) {\n          filteredList.push(el);\n        }\n        break;\n      case 'verified':\n        if (el.dataVerified === true) {\n          filteredList.push(el);\n        }\n        break;\n      case 'code':\n        if (el.dataCode === true) {\n          filteredList.push(el);\n        }\n        break;\n    }\n  });\n  couponsData = filteredList;\n  listingCoupons(couponsData);\n}\n\n//  <svg src=\"${ /*require(\"./images/coupon-image.svg\")*/ }\"></svg> \nfunction listingCoupons(data) {\n  all.innerHTML = \"\";\n  data.forEach(function (el) {\n    var article = \"\\n    <article class=\\\"coupon-item\\\" data-expiring=\\\"\" + el.dataExpiring + \"\\\" data-verified=\\\"\" + el.dataVerified + \"\\\" data-code=\\\"\" + el.dataCode + \"\\\">\\n      <section class=\\\"image\\\">\\n        <figure>\\n          <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" width=\\\"170\\\" height=\\\"153\\\" viewBox=\\\"0 0 170 153\\\"><defs><path id=\\\"b73ta\\\" d=\\\"M119 471V318h170v153z\\\"/><clipPath id=\\\"b73tb\\\"><use fill=\\\"#fff\\\" xlink:href=\\\"#b73ta\\\"/></clipPath></defs><g><g transform=\\\"translate(-119 -318)\\\"><use fill=\\\"#fff\\\" xlink:href=\\\"#b73ta\\\"/><use fill=\\\"#fff\\\" fill-opacity=\\\"0\\\" stroke=\\\"#d7d7d7\\\" stroke-miterlimit=\\\"50\\\" stroke-width=\\\"2\\\" clip-path=\\\"url(&quot;#b73tb&quot;)\\\" xlink:href=\\\"#b73ta\\\"/></g><g transform=\\\"translate(-119 -318)\\\"><g font-family=\\\"'Raleway-ExtraBold','Raleway-ExtraBold'\\\" font-size=\\\"14\\\" font-style=\\\"none\\\" font-weight=\\\"400\\\" style=\\\"line-height:18px\\\"><text dominant-baseline=\\\"text-before-edge\\\" font-family=\\\"Helvetica, Arial, sans-serif\\\" transform=\\\"translate(161 410)\\\"><tspan letter-spacing=\\\".7\\\" style=\\\"font-kerning:normal\\\">B</tspan><tspan letter-spacing=\\\".7\\\" style=\\\"font-kerning:normal\\\">EST PRICE</tspan></text></g></g><g transform=\\\"translate(-119 -318)\\\"><g  font-family=\\\"'Raleway','Raleway-Medium'\\\" font-size=\\\"60\\\" style=\\\"line-height:18px\\\"><text dominant-baseline=\\\"text-before-edge\\\" font-family=\\\"Helvetica, Arial, sans-serif\\\" transform=\\\"translate(187 336)\\\"><tspan letter-spacing=\\\"3\\\" style=\\\"font-kerning:normal\\\">$</tspan></text></g></g></g></svg>\\n          <figurecaption>see coupon</figurecaption>\\n        </figure>\\n      </section>\\n      <section class=\\\"info\\\">\\n        <header>\\n          <h1>\" + el.title + \"</h1>\\n          <span class=\\\"verified\\\">\\n            <svg xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" width=\\\"84\\\" height=\\\"16\\\" viewBox=\\\"0 0 84 16\\\"><g><g transform=\\\"translate(-789 -329)\\\"><image width=\\\"84\\\" height=\\\"16\\\" transform=\\\"translate(789 329)\\\" xlink:href=\\\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAQCAYAAACIoli7AAAEV0lEQVRYR+2XX2hbVRzHv7+bpMromrWw1cWKslasKPvXMvBhxUmTm/6Z6xwtc+KTkCIUH0S2vrkHBfsiiqC02IkgYxpd77LV3LTZYOIfHKtua0GHNj7opFWxy2wVcpP7k5PkLjc3N3dNNwaF3pfknvM75/zO5/x+v++5hNt4DsQCzRmS3gOjDcAiAaPu5PrBcF84dRvTruqhtFLvn1blJonwJUD1ljneUWT1pZXOu9rHrQjoM593NOgu/gZAgw2AJUVWq1c7mJX6XzHQ/bHAJob0NYDGMoumFFm9Z6UOrfZxN4EyQ/wnIujlNtWrynUaSecBfrz8xvljRY4dtPbvUzuOEPEbzDR4KhgdMvp7Yh0hgIeJeGgsEBvsiQX/BlBrHa9prjqPR9sCSBctfQlA71PkiSnR3hMLfgKgV9iPd48vGO+l/uqtuTbporF2fnyl68eJMDIWUMNiPPHvvnUZaeltBp4DUAXCJc4gVOVLfmd2oney3avp7gkAu8rBJOCKW0q3hf3xpJ1NDhYlFDma30wWwCSAdpfL1fhZ+3giD3SBiLMOGk8OdqAlDzROxFmAzBQSv5rmajQDtAIV0MzzpVLuIeOAbIBWun4tQP2KHB2h9Jx3mIEXLAD+FYftuS95TrTvPb13nbtKO8PAHoeUvOrJ0O5wZ/TPcjY9seAwgBCgt4qI6jrTVevxZGYBTCmy6i9ESDH0QjTngJoBGJFvbKhchBqAzb4ZB1QKdPnrH4h3bclkMiJrFhRZbSRtzrsI4F4bCBoRHXr2vH9c8/4zBqDTAeYvUobaTnZGf3OwwT5VbieiSSPtjXQ3YJhSrihCmDksDsAOwHKBmiPUaT67DHGyz/ucDRSRZQLoEgBbEcmwpHec7T/h3Xjp+XKgGLjGzE9GgrGfnWAWoiwoIhLiNPPp3qLIap2pv6SGFQ7ANuV7Rc29VcqbfbPOd6sa6mQv5t0/IQttOMLMfkrN13xATCXAhEZ1nRyavjD36PYH7v/2ctNDZ7eVAGP8RaTvGZMnZpYDU9gUxIn9RCQEJKzIan8xUOeUs6y1QIR+QxTudsqXRCj/sbE6raciQPZr5+Zz8PTRy/FfW3YaDZvrZ75vborsMJncAPSnDHVdLtB8zZkFaArgFnGqp4KxeCVAjYgyIsNSMmxV/q7VULERofRpafE4QN3i/dhM54+Hv3jxMSuk5ocjVzdvmnkEwH86kT8SiH61XJDFYpBTdgAJkfqWPpHyjiprAM2LWvYaZcxzZyLUeX0A1ltGLRH6RJaY76FubW7DMSI+tOuj4enEDd92K6z11fNTrdtGtzJzpzmqKoVqiJH1TmoSJcd7qL3KY0SUjjsEtJJ7cPE9tLhYg9LzG9564vi7u3+63mBO76xZTc21Czu2fvh6JKCKErH22BCw/fR8OXz41dHp7qNF9gz21V8J/TAw8P4ayfIEyn7L73zzxEDiuu8VBh4EMAsdg8nX2j5dg+lM4H/YSwzIpax2EQAAAABJRU5ErkJggg==\\\"/></g></g></svg>\\n          </span>\\n        </header>\\n        <section class=\\\"info-content\\\">\\n          <p>\" + el.content + \"</p>\\n        </section>\\n        <footer>\\n          <span class=\\\"uses\\\">\" + el.uses + \"</span>\\n          <span class=\\\"terms\\\">\" + el.terms + \"</span>\\n          <span class=\\\"expiration\\\">\" + el.expiringText + \"</span>\\n        </footer>\\n      </section>\\n    </article>\";\n    all.innerHTML += article;\n  });\n}\n// remove active classes from coupons filter\nfunction removeFilterActiveClasses(e) {\n  expiringButton.classList.remove('active');\n  verifiedButton.classList.remove('active');\n  codeButton.classList.remove('active');\n  allButton.classList.remove('active');\n  if (e.target.classList.contains('filter')) {\n    e.target.classList.add('active');\n  } else if (e.target.parentNode.classList.contains('filter')) {\n    e.target.parentNode.classList.add('active');\n  }\n}\n// console.log(all)\n// all.innerHTML = article\nlistingCoupons(couponsData);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/styles/main.scss?");

/***/ })

/******/ });
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(4);

var _server2 = __webpack_require__(5);

var _AppRoutes = __webpack_require__(6);

var _AppRoutes2 = _interopRequireDefault(_AppRoutes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function (req) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _server2.StaticRouter,
        { location: req.path, context: {} },
        _react2.default.createElement(_AppRoutes2.default, null)
    ));

    return '\n        <html>\n        <head>\n        <link rel="stylesheet" href="css/app.css">\n        </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src="js/bundle.js"></script>\n        </body>\n        </html>\n    ';
};

/***/ }),
/* 3 */
/***/ ((module) => {

module.exports = require("react");

/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("react-dom/server");

/***/ }),
/* 5 */
/***/ ((module) => {

module.exports = require("react-router-dom/server");

/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(7);

var _Home = __webpack_require__(8);

var _Home2 = _interopRequireDefault(_Home);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports["default"] = function () {
    return _react2.default.createElement(
        _reactRouterDom.Routes,
        null,
        _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: '/', element: _react2.default.createElement(_Home2.default, null) })
    );
};

/***/ }),
/* 7 */
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
    value: true
}));

var _react = __webpack_require__(3);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Home = function Home() {
    return _react2.default.createElement(
        "div",
        { className: "h-screen container mx-auto" },
        _react2.default.createElement(
            "div",
            { className: "flex justify-center items-center" },
            _react2.default.createElement(
                "h1",
                { className: "text-2xl text-red-500" },
                "Working"
            )
        )
    );
};

exports["default"] = Home;

/***/ })
/******/ 	]);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {


var _express = __webpack_require__(1);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(2);

var _renderer2 = _interopRequireDefault(_renderer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
    res.send((0, _renderer2.default)(req));
});

app.listen(3000, function () {
    console.log('Listeing on port 3000');
});
})();

/******/ })()
;
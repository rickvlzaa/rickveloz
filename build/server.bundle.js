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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _loadJsonFile = __webpack_require__(/*! load-json-file */ \"load-json-file\");\n\nvar _loadJsonFile2 = _interopRequireDefault(_loadJsonFile);\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _dev = __webpack_require__(/*! ../../webpack/client/dev */ \"./webpack/client/dev.js\");\n\nvar _dev2 = _interopRequireDefault(_dev);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\nif (true) {\n    var compiler = (0, _webpack2.default)(_dev2.default);\n    app.use((0, _webpackDevMiddleware2.default)(compiler, {\n        noInfo: true,\n        publicPath: _dev2.default.output.publicPath,\n        stats: \"errors-only\"\n    }));\n    app.use((0, _webpackHotMiddleware2.default)(compiler));\n}\n\n// loadJsonFile('./build/manifest.json')\n// .then(json => {console.log(json)})\n// .catch(err => { console.log(err)});\n\n\napp.use(_express2.default.static(_path2.default.resolve(__dirname, '../../build/public')));\n\napp.use((0, _morgan2.default)('dev'));\napp.use((0, _cookieParser2.default)());\napp.use(_bodyParser2.default.json());\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\n\napp.get(\"/\", function (req, res) {\n    res.send('<html>\\n    <head>\\n      <title>Hello World</title>\\n    </head>\\n    <body>\\n      <div id=\"root\"></div>\\n      <script src=\"app.bundle.js\"></script>\\n    </body>\\n    </html>');\n});\n\napp.listen(\"5000\", function (err) {\n    if (!err) {\n        console.log('website running on port ' + \"5000\");\n    }\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"src/server\"))\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./webpack/client/base.js":
/*!********************************!*\
  !*** ./webpack/client/base.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\n\nvar path = __webpack_require__(/*! path */ \"path\");\nmodule.exports = {\n    context: path.resolve(__dirname, '../..'),\n    entry: {\n        app: ['./src/client/index.js']\n    },\n    output: {\n        path: path.resolve(__dirname, '../../build', 'public')\n    },\n    resolve: {\n        mainFiles: ['index'],\n        extensions: ['.js']\n    },\n    target: 'web',\n    module: {\n        rules: [{\n            test: /\\.js$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }]\n    },\n    plugins: []\n};\n/* WEBPACK VAR INJECTION */}.call(this, \"webpack/client\"))\n\n//# sourceURL=webpack:///./webpack/client/base.js?");

/***/ }),

/***/ "./webpack/client/dev.js":
/*!*******************************!*\
  !*** ./webpack/client/dev.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar merge = __webpack_require__(/*! webpack-merge */ \"webpack-merge\");\nvar base = __webpack_require__(/*! ./base.js */ \"./webpack/client/base.js\");\nvar path = __webpack_require__(/*! path */ \"path\");\n\nmodule.exports = merge.strategy({ 'entry.app': 'prepend' })(base, {\n    entry: {\n        app: ['webpack-hot-middleware/client']\n    },\n    output: {\n        filename: '[name].bundle.js',\n        publicPath: '/'\n    },\n    mode: 'development',\n    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n});\n\n//# sourceURL=webpack:///./webpack/client/dev.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "load-json-file":
/*!*********************************!*\
  !*** external "load-json-file" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"load-json-file\");\n\n//# sourceURL=webpack:///external_%22load-json-file%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-merge":
/*!********************************!*\
  !*** external "webpack-merge" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-merge\");\n\n//# sourceURL=webpack:///external_%22webpack-merge%22?");

/***/ })

/******/ });
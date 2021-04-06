module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-redux-saga */ \"next-redux-saga\");\n/* harmony import */ var next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_redux_saga__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _store_configureStore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../store/configureStore */ \"./store/configureStore.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\nvar _jsxFileName = \"/home/useong/\\uAE43 \\uB808\\uD37C\\uC9C0\\uD1A0\\uB9AC/Mini-Project/twitter_sns/front/pages/_app.js\";\n// 모든 파일이 공통인 부분 => _app.js\n\n // 헤드 태그 추가\n\n\n //Redux\n\n\n // index, profile, signup 파일의 부모 역할\n// index.js 의 return부분이 Component로 들어간다.\n\n\n\n\nconst NodeBird = ({\n  Component\n}) => {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"meta\", {\n        charset: \"utf-8\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 13\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(\"title\", {\n        children: \"NodeBird\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 13\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 9\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__[\"jsxDEV\"])(Component, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 9\n    }, undefined)]\n  }, void 0, true);\n}; // propTypes는 안정성을 높힌다\n\n\nNodeBird.propTypes = {\n  Component: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.elementType.isRequired\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_store_configureStore__WEBPACK_IMPORTED_MODULE_5__[\"default\"].withRedux(next_redux_saga__WEBPACK_IMPORTED_MODULE_4___default()(NodeBird)));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2Q1MzAiXSwibmFtZXMiOlsiTm9kZUJpcmQiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJ3cmFwcGVyIiwid2l0aFJlZHV4Iiwid2l0aFJlZHV4U2FnYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtDQUVBOztBQUNBO0NBRUE7O0FBQ0E7Q0FHQTtBQUNBOzs7OztBQUNBLE1BQU1BLFFBQVEsR0FBRyxDQUFDO0FBQUVDO0FBQUYsQ0FBRCxLQUFtQjtBQUNoQyxzQkFDSTtBQUFBLDRCQUNBLHFFQUFDLGdEQUFEO0FBQUEsOEJBQ0k7QUFBTSxlQUFPLEVBQUM7QUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURBLGVBS0EscUVBQUMsU0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUxBO0FBQUEsa0JBREo7QUFTSCxDQVZELEMsQ0FZQTs7O0FBQ0FELFFBQVEsQ0FBQ0UsU0FBVCxHQUFxQjtBQUNqQkQsV0FBUyxFQUFFRSxpREFBUyxDQUFDQyxXQUFWLENBQXNCQztBQURoQixDQUFyQjtBQUllQyw0SEFBTyxDQUFDQyxTQUFSLENBQWtCQyxzREFBYSxDQUFDUixRQUFELENBQS9CLENBQWYiLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8g66qo65OgIO2MjOydvOydtCDqs7XthrXsnbgg67aA67aEID0+IF9hcHAuanNcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuLy8g7Zek65OcIO2DnOq3uCDstpTqsIBcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCAnYW50ZC9kaXN0L2FudGQuY3NzJ1xuLy9SZWR1eFxuaW1wb3J0IHdpdGhSZWR1eFNhZ2EgZnJvbSAnbmV4dC1yZWR1eC1zYWdhJztcbmltcG9ydCB3cmFwcGVyIGZyb20gJy4uL3N0b3JlL2NvbmZpZ3VyZVN0b3JlJztcblxuLy8gaW5kZXgsIHByb2ZpbGUsIHNpZ251cCDtjIzsnbzsnZgg67aA66qoIOyXre2VoFxuLy8gaW5kZXguanMg7J2YIHJldHVybuu2gOu2hOydtCBDb21wb25lbnTroZwg65Ok7Ja06rCE64ukLlxuY29uc3QgTm9kZUJpcmQgPSAoeyBDb21wb25lbnQgfSkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgPG1ldGEgY2hhcnNldD0ndXRmLTgnIC8+XG4gICAgICAgICAgICA8dGl0bGU+Tm9kZUJpcmQ8L3RpdGxlPlxuICAgICAgICA8L0hlYWQ+XG4gICAgICAgIDxDb21wb25lbnQgLz5cbiAgICAgICAgPC8+XG4gICAgKTtcbn07XG5cbi8vIHByb3BUeXBlc+uKlCDslYjsoJXshLHsnYQg64aS7Z6M64ukXG5Ob2RlQmlyZC5wcm9wVHlwZXMgPSB7XG4gICAgQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUuaXNSZXF1aXJlZCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlci53aXRoUmVkdXgod2l0aFJlZHV4U2FnYShOb2RlQmlyZCkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./reducers/index.js":
/*!***************************!*\
  !*** ./reducers/index.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user */ \"./reducers/user.js\");\n/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./post */ \"./reducers/post.js\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n// action\n\n // user는 user.js 파일의 reducer가 된다.\n\n\n // 중앙 저장소(redux)\n// 초기 앱에 대한 구조를 미리 잡아 놔야 한다.\n// reducer는 (이전 상태, 액션을 통해서) => 다음 상태를 만든다.\n// 함수들을 합쳐주는 combine함수를 사용한다.\n\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  // 서버사이드 렌더링을 위해 index 추가\n  // user리듀서와 post 리듀서를 합쳐준다. (하이드레이트를 위해서 index 리듀서 추가)\n  index: (state = {}, action) => {\n    switch (action.type) {\n      case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"HYDRATE\"]:\n        console.log('HYDRATE', action);\n        return _objectSpread(_objectSpread({}, state), action.payload);\n      // 아래 코드를 쓰지 않으면 user가 정의되지 않았다고 에러가 뜬다.\n\n      default:\n        return state;\n    }\n  },\n  user: _user__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n  post: _post__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9pbmRleC5qcz9jZThlIl0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwiY29tYmluZVJlZHVjZXJzIiwiaW5kZXgiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJIWURSQVRFIiwiY29uc29sZSIsImxvZyIsInBheWxvYWQiLCJ1c2VyIiwicG9zdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQTtDQUdBO0FBQ0E7QUFFQTtBQUNBOztBQUNBLE1BQU1BLFdBQVcsR0FBR0MsNkRBQWUsQ0FBRTtBQUNqQztBQUNBO0FBQ0FDLE9BQUssRUFBRSxDQUFDQyxLQUFLLEdBQUcsRUFBVCxFQUFhQyxNQUFiLEtBQXdCO0FBQzNCLFlBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNJLFdBQUtDLDBEQUFMO0FBQ0lDLGVBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJKLE1BQXZCO0FBQ0EsK0NBQVdELEtBQVgsR0FBcUJDLE1BQU0sQ0FBQ0ssT0FBNUI7QUFFUjs7QUFDSTtBQUNJLGVBQU9OLEtBQVA7QUFQUjtBQVNILEdBYmdDO0FBY2pDTyxxREFkaUM7QUFlakNDLHFEQUFJQTtBQWY2QixDQUFGLENBQW5DO0FBa0JlWCwwRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYWN0aW9uXG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuLy8gdXNlcuuKlCB1c2VyLmpzIO2MjOydvOydmCByZWR1Y2Vy6rCAIOuQnOuLpC5cbmltcG9ydCB1c2VyIGZyb20gJy4vdXNlcic7XG5pbXBvcnQgcG9zdCBmcm9tICcuL3Bvc3QnO1xuXG4vLyDspJHslZkg7KCA7J6l7IaMKHJlZHV4KVxuLy8g7LSI6riwIOyVseyXkCDrjIDtlZwg6rWs7KGw66W8IOuvuOumrCDsnqHslYQg64aU7JW8IO2VnOuLpC5cblxuLy8gcmVkdWNlcuuKlCAo7J207KCEIOyDge2DnCwg7JWh7IWY7J2EIO2Gte2VtOyEnCkgPT4g64uk7J2MIOyDge2DnOulvCDrp4zrk6Dri6QuXG4vLyDtlajsiJjrk6TsnYQg7ZWp7LOQ7KO864qUIGNvbWJpbmXtlajsiJjrpbwg7IKs7Jqp7ZWc64ukLlxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMgKHtcbiAgICAvLyDshJzrsoTsgqzsnbTrk5wg66CM642U66eB7J2EIOychO2VtCBpbmRleCDstpTqsIBcbiAgICAvLyB1c2Vy66as65OA7ISc7JmAIHBvc3Qg66as65OA7ISc66W8IO2VqeyzkOykgOuLpC4gKO2VmOydtOuTnOugiOydtO2KuOulvCDsnITtlbTshJwgaW5kZXgg66as65OA7IScIOy2lOqwgClcbiAgICBpbmRleDogKHN0YXRlID0ge30sIGFjdGlvbikgPT4ge1xuICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgICAgICBjYXNlIEhZRFJBVEU6XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0hZRFJBVEUnLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiB7Li4uc3RhdGUsIC4uLmFjdGlvbi5wYXlsb2FkfTtcblxuICAgICAgICAvLyDslYTrnpgg7L2U65Oc66W8IOyTsOyngCDslYrsnLzrqbQgdXNlcuqwgCDsoJXsnZjrkJjsp4Ag7JWK7JWY64uk6rOgIOyXkOufrOqwgCDrnKzri6QuXG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiBzdGF0ZTsgIFxuICAgICAgICB9XG4gICAgfSxcbiAgICB1c2VyLFxuICAgIHBvc3QsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm9vdFJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/index.js\n");

/***/ }),

/***/ "./reducers/post.js":
/*!**************************!*\
  !*** ./reducers/post.js ***!
  \**************************/
/*! exports provided: initialState, addPost, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addPost\", function() { return addPost; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  mainPosts: [{\n    id: 1,\n    // 다른 정보들과 합쳐주는 것은 대문자로 시작한다.\n    User: {\n      id: 1,\n      nickname: '날아라 우성'\n    },\n    content: \"첫 번째 게시글 #해시태그 #익스프레스\",\n    Images: [{\n      src: 'https://user-images.githubusercontent.com/75570915/106154982-869ec080-61c3-11eb-9a3a-c387778c327f.jpg'\n    }, {\n      src: 'https://avatars.githubusercontent.com/u/75570915?v=4'\n    }, {\n      src: 'https://www.codestates.com/assets/codestates-ci.png'\n    }],\n    Comments: [{\n      User: {\n        nickname: 'nero'\n      },\n      content: '우성님 프사 잘나왔어요~~!!'\n    }, {\n      User: {\n        nickname: 'hero'\n      },\n      content: '오오오오~~~'\n    }]\n  }],\n  // 이미지 업로드할 때 여기에 저장\n  imagePaths: [],\n  // 게시글 추가 완료 되었을 때, true로 변환\n  postAdded: false\n}; // 액션 이름을 상수로 빼준다 => const 값 재활용 가능\n\nconst ADD_POST = 'ADD_POST';\nconst addPost = {\n  type: ADD_POST\n}; // 더미데이터\n\nconst dummyPost = {\n  id: 2,\n  content: '더미데이터입니다.',\n  User: {\n    id: 1,\n    nickname: '하이우성'\n  },\n  Image: [],\n  Comments: []\n}; // 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case ADD_POST:\n      return _objectSpread(_objectSpread({}, state), {}, {\n        // 게시글 쓰자마자 바로 위에 올라가게 해준다.\n        mainPosts: [dummyPost, ...state.mainPosts],\n        postAdded: true\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy9wb3N0LmpzP2E3ZTMiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwibWFpblBvc3RzIiwiaWQiLCJVc2VyIiwibmlja25hbWUiLCJjb250ZW50IiwiSW1hZ2VzIiwic3JjIiwiQ29tbWVudHMiLCJpbWFnZVBhdGhzIiwicG9zdEFkZGVkIiwiQUREX1BPU1QiLCJhZGRQb3N0IiwidHlwZSIsImR1bW15UG9zdCIsIkltYWdlIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBTyxNQUFNQSxZQUFZLEdBQUc7QUFDeEJDLFdBQVMsRUFBRSxDQUFDO0FBQ1JDLE1BQUUsRUFBRSxDQURJO0FBRVI7QUFDQUMsUUFBSSxFQUFFO0FBQ0ZELFFBQUUsRUFBRSxDQURGO0FBRUZFLGNBQVEsRUFBRTtBQUZSLEtBSEU7QUFPUkMsV0FBTyxFQUFFLHVCQVBEO0FBUVJDLFVBQU0sRUFBRSxDQUFDO0FBQ0xDLFNBQUcsRUFBRTtBQURBLEtBQUQsRUFFTDtBQUNDQSxTQUFHLEVBQUU7QUFETixLQUZLLEVBSU47QUFDRUEsU0FBRyxFQUFFO0FBRFAsS0FKTSxDQVJBO0FBZVJDLFlBQVEsRUFBRSxDQUFDO0FBQ1BMLFVBQUksRUFBRTtBQUNGQyxnQkFBUSxFQUFFO0FBRFIsT0FEQztBQUlQQyxhQUFPLEVBQUU7QUFKRixLQUFELEVBS1A7QUFDQ0YsVUFBSSxFQUFFO0FBQ0ZDLGdCQUFRLEVBQUU7QUFEUixPQURQO0FBSUNDLGFBQU8sRUFBRTtBQUpWLEtBTE87QUFmRixHQUFELENBRGE7QUE0QnhCO0FBQ0FJLFlBQVUsRUFBRSxFQTdCWTtBQThCeEI7QUFDQUMsV0FBUyxFQUFFO0FBL0JhLENBQXJCLEMsQ0FrQ1A7O0FBQ0EsTUFBTUMsUUFBUSxHQUFFLFVBQWhCO0FBQ08sTUFBTUMsT0FBTyxHQUFHO0FBQ25CQyxNQUFJLEVBQUVGO0FBRGEsQ0FBaEIsQyxDQUdQOztBQUNBLE1BQU1HLFNBQVMsR0FBRztBQUNkWixJQUFFLEVBQUUsQ0FEVTtBQUVkRyxTQUFPLEVBQUUsV0FGSztBQUdkRixNQUFJLEVBQUU7QUFDRkQsTUFBRSxFQUFFLENBREY7QUFFRkUsWUFBUSxFQUFFO0FBRlIsR0FIUTtBQU9kVyxPQUFLLEVBQUUsRUFQTztBQVFkUCxVQUFRLEVBQUU7QUFSSSxDQUFsQixDLENBV0E7O0FBQ0EsTUFBTVEsT0FBTyxHQUFHLENBQUNDLEtBQUssR0FBR2pCLFlBQVQsRUFBdUJrQixNQUF2QixLQUFrQztBQUM5QyxVQUFRQSxNQUFNLENBQUNMLElBQWY7QUFDSSxTQUFLRixRQUFMO0FBQ0ksNkNBQ09NLEtBRFA7QUFFSTtBQUNBaEIsaUJBQVMsRUFBRSxDQUFDYSxTQUFELEVBQVksR0FBR0csS0FBSyxDQUFDaEIsU0FBckIsQ0FIZjtBQUlJUyxpQkFBUyxFQUFFO0FBSmY7O0FBTUo7QUFDSSxhQUFPTyxLQUFQO0FBVFI7QUFXSCxDQVpEOztBQWNlRCxzRUFBZiIsImZpbGUiOiIuL3JlZHVjZXJzL3Bvc3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICAgIG1haW5Qb3N0czogW3tcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIC8vIOuLpOuluCDsoJXrs7Trk6Tqs7wg7ZWp7LOQ7KO864qUIOqyg+ydgCDrjIDrrLjsnpDroZwg7Iuc7J6R7ZWc64ukLlxuICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5pY2tuYW1lOiAn64Kg7JWE6528IOyasOyEsScsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnQ6IFwi7LKrIOuyiOynuCDqsozsi5zquIAgI+2VtOyLnO2DnOq3uCAj7J217Iqk7ZSE66CI7IqkXCIsXG4gICAgICAgIEltYWdlczogW3tcbiAgICAgICAgICAgIHNyYzogJ2h0dHBzOi8vdXNlci1pbWFnZXMuZ2l0aHVidXNlcmNvbnRlbnQuY29tLzc1NTcwOTE1LzEwNjE1NDk4Mi04NjllYzA4MC02MWMzLTExZWItOWEzYS1jMzg3Nzc4YzMyN2YuanBnJyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly9hdmF0YXJzLmdpdGh1YnVzZXJjb250ZW50LmNvbS91Lzc1NTcwOTE1P3Y9NCcsXG4gICAgICAgIH0se1xuICAgICAgICAgICAgc3JjOiAnaHR0cHM6Ly93d3cuY29kZXN0YXRlcy5jb20vYXNzZXRzL2NvZGVzdGF0ZXMtY2kucG5nJyxcbiAgICAgICAgfV0sIFxuICAgICAgICBDb21tZW50czogW3tcbiAgICAgICAgICAgIFVzZXI6IHtcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ25lcm8nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbnRlbnQ6ICfsmrDshLHri5gg7ZSE7IKsIOyemOuCmOyZlOyWtOyalH5+ISEnLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBVc2VyOiB7XG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICdoZXJvJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjb250ZW50OiAn7Jik7Jik7Jik7Jikfn5+J1xuICAgICAgICB9XVxuICAgIH1dLFxuICAgIC8vIOydtOuvuOyngCDsl4XroZzrk5ztlaAg65WMIOyXrOq4sOyXkCDsoIDsnqVcbiAgICBpbWFnZVBhdGhzOiBbXSxcbiAgICAvLyDqsozsi5zquIAg7LaU6rCAIOyZhOujjCDrkJjsl4jsnYQg65WMLCB0cnVl66GcIOuzgO2ZmFxuICAgIHBvc3RBZGRlZDogZmFsc2UsXG59XG5cbi8vIOyVoeyFmCDsnbTrpoTsnYQg7IOB7IiY66GcIOu5vOykgOuLpCA9PiBjb25zdCDqsJIg7J6s7Zmc7JqpIOqwgOuKpVxuY29uc3QgQUREX1BPU1QgPSdBRERfUE9TVCc7XG5leHBvcnQgY29uc3QgYWRkUG9zdCA9IHtcbiAgICB0eXBlOiBBRERfUE9TVCxcbn1cbi8vIOuNlOuvuOuNsOydtO2EsFxuY29uc3QgZHVtbXlQb3N0ID0ge1xuICAgIGlkOiAyLFxuICAgIGNvbnRlbnQ6ICfrjZTrr7jrjbDsnbTthLDsnoXri4jri6QuJywgXG4gICAgVXNlcjoge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbmlja25hbWU6ICftlZjsnbTsmrDshLEnLFxuICAgIH0sXG4gICAgSW1hZ2U6IFtdLFxuICAgIENvbW1lbnRzOiBbXSxcbn07XG5cbi8vIOydtOyghCDsiqTthYzsnbTtirjsmYAg7JWh7IWY7J2EIOuwm+yVhOyEnCDri6TsnYwg7Iqk7YWM7J207Yq466W8IOuPjOugpOyjvOuKlCDtlajsiJhcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBBRERfUE9TVDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgLy8g6rKM7Iuc6riAIOyTsOyekOuniOyekCDrsJTroZwg7JyE7JeQIOyYrOudvOqwgOqyjCDtlbTspIDri6QuXG4gICAgICAgICAgICAgICAgbWFpblBvc3RzOiBbZHVtbXlQb3N0LCAuLi5zdGF0ZS5tYWluUG9zdHNdLFxuICAgICAgICAgICAgICAgIHBvc3RBZGRlZDogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/post.js\n");

/***/ }),

/***/ "./reducers/user.js":
/*!**************************!*\
  !*** ./reducers/user.js ***!
  \**************************/
/*! exports provided: initialState, loginAction, loginRequestAction, loginSuccessAction, loginRequestFailureAction, logoutAction, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialState\", function() { return initialState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginAction\", function() { return loginAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestAction\", function() { return loginRequestAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginSuccessAction\", function() { return loginSuccessAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"loginRequestFailureAction\", function() { return loginRequestFailureAction; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"logoutAction\", function() { return logoutAction; });\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nconst initialState = {\n  // 사용자가 로그인 했는지 안했는지의 여부\n  isLoggedIn: false,\n  me: null,\n  signUpData: {},\n  loginData: {}\n};\nconst loginAction = data => {\n  return (dispatch, getState) => {\n    const state = getState();\n    dispatch(loginRequestAction());\n    axios.post('/api/login').then(res => {\n      dispatch(loginSuccessAction(res.data));\n    }).catch(err => {\n      dispatch(loginFailureAction(err));\n    });\n  };\n};\nconst loginRequestAction = data => {\n  return {\n    type: 'LOG_IN_REQUEST',\n    data\n  };\n};\nconst loginSuccessAction = data => {\n  return {\n    type: 'LOG_IN_SUCCESS',\n    data\n  };\n};\nconst loginRequestFailureAction = data => {\n  return {\n    type: 'LOG_IN_FAILURE',\n    data\n  };\n}; // 로그아웃 할 때는 data가 필요없다.\n\nconst logoutAction = () => {\n  return {\n    type: 'LOG_OUT'\n  };\n}; // 이전 스테이트와 액션을 받아서 다음 스테이트를 돌려주는 함수\n\nconst reducer = (state = initialState, action) => {\n  switch (action.type) {\n    case \"LOG_IN\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: true,\n        me: action.data\n      });\n\n    case \"LOG_OUT\":\n      return _objectSpread(_objectSpread({}, state), {}, {\n        isLoggedIn: false,\n        me: null\n      });\n\n    default:\n      return state;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1Y2Vycy91c2VyLmpzPzJjMDUiXSwibmFtZXMiOlsiaW5pdGlhbFN0YXRlIiwiaXNMb2dnZWRJbiIsIm1lIiwic2lnblVwRGF0YSIsImxvZ2luRGF0YSIsImxvZ2luQWN0aW9uIiwiZGF0YSIsImRpc3BhdGNoIiwiZ2V0U3RhdGUiLCJzdGF0ZSIsImxvZ2luUmVxdWVzdEFjdGlvbiIsImF4aW9zIiwicG9zdCIsInRoZW4iLCJyZXMiLCJsb2dpblN1Y2Nlc3NBY3Rpb24iLCJjYXRjaCIsImVyciIsImxvZ2luRmFpbHVyZUFjdGlvbiIsInR5cGUiLCJsb2dpblJlcXVlc3RGYWlsdXJlQWN0aW9uIiwibG9nb3V0QWN0aW9uIiwicmVkdWNlciIsImFjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFPLE1BQU1BLFlBQVksR0FBRztBQUN4QjtBQUNBQyxZQUFVLEVBQUUsS0FGWTtBQUd4QkMsSUFBRSxFQUFFLElBSG9CO0FBSXhCQyxZQUFVLEVBQUUsRUFKWTtBQUt4QkMsV0FBUyxFQUFFO0FBTGEsQ0FBckI7QUFRQSxNQUFNQyxXQUFXLEdBQUlDLElBQUQsSUFBVTtBQUNqQyxTQUFPLENBQUNDLFFBQUQsRUFBV0MsUUFBWCxLQUF3QjtBQUMzQixVQUFNQyxLQUFLLEdBQUdELFFBQVEsRUFBdEI7QUFDQUQsWUFBUSxDQUFDRyxrQkFBa0IsRUFBbkIsQ0FBUjtBQUNBQyxTQUFLLENBQUNDLElBQU4sQ0FBVyxZQUFYLEVBQ0tDLElBREwsQ0FDV0MsR0FBRCxJQUFTO0FBQ1hQLGNBQVEsQ0FBQ1Esa0JBQWtCLENBQUNELEdBQUcsQ0FBQ1IsSUFBTCxDQUFuQixDQUFSO0FBQ0gsS0FITCxFQUlLVSxLQUpMLENBSVlDLEdBQUQsSUFBUztBQUNaVixjQUFRLENBQUNXLGtCQUFrQixDQUFDRCxHQUFELENBQW5CLENBQVI7QUFDSCxLQU5MO0FBT0gsR0FWRDtBQVdILENBWk07QUFjQSxNQUFNUCxrQkFBa0IsR0FBSUosSUFBRCxJQUFVO0FBQ3hDLFNBQU87QUFDSGEsUUFBSSxFQUFFLGdCQURIO0FBRUhiO0FBRkcsR0FBUDtBQUlILENBTE07QUFPQSxNQUFNUyxrQkFBa0IsR0FBSVQsSUFBRCxJQUFVO0FBQ3hDLFNBQU87QUFDSGEsUUFBSSxFQUFFLGdCQURIO0FBRUhiO0FBRkcsR0FBUDtBQUlILENBTE07QUFPQSxNQUFNYyx5QkFBeUIsR0FBSWQsSUFBRCxJQUFVO0FBQy9DLFNBQU87QUFDSGEsUUFBSSxFQUFFLGdCQURIO0FBRUhiO0FBRkcsR0FBUDtBQUlILENBTE0sQyxDQU1QOztBQUNPLE1BQU1lLFlBQVksR0FBRyxNQUFNO0FBQzlCLFNBQU87QUFDSEYsUUFBSSxFQUFFO0FBREgsR0FBUDtBQUdILENBSk0sQyxDQU1QOztBQUNBLE1BQU1HLE9BQU8sR0FBRyxDQUFDYixLQUFLLEdBQUdULFlBQVQsRUFBdUJ1QixNQUF2QixLQUFrQztBQUM5QyxVQUFRQSxNQUFNLENBQUNKLElBQWY7QUFDSSxTQUFLLFFBQUw7QUFDSSw2Q0FDT1YsS0FEUDtBQUVJUixrQkFBVSxFQUFFLElBRmhCO0FBR0lDLFVBQUUsRUFBRXFCLE1BQU0sQ0FBQ2pCO0FBSGY7O0FBS0osU0FBSyxTQUFMO0FBQ0ksNkNBQ09HLEtBRFA7QUFFSVIsa0JBQVUsRUFBRSxLQUZoQjtBQUdJQyxVQUFFLEVBQUU7QUFIUjs7QUFLSjtBQUNBLGFBQU9PLEtBQVA7QUFkSjtBQWdCSCxDQWpCRDs7QUFtQmVhLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdWNlcnMvdXNlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gICAgLy8g7IKs7Jqp7J6Q6rCAIOuhnOq3uOyduCDtlojripTsp4Ag7JWI7ZaI64qU7KeA7J2YIOyXrOu2gFxuICAgIGlzTG9nZ2VkSW46IGZhbHNlLFxuICAgIG1lOiBudWxsLFxuICAgIHNpZ25VcERhdGE6IHt9LFxuICAgIGxvZ2luRGF0YToge30sXG59XG5cbmV4cG9ydCBjb25zdCBsb2dpbkFjdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIChkaXNwYXRjaCwgZ2V0U3RhdGUpID0+IHtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRTdGF0ZSgpO1xuICAgICAgICBkaXNwYXRjaChsb2dpblJlcXVlc3RBY3Rpb24oKSk7XG4gICAgICAgIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzc0FjdGlvbihyZXMuZGF0YSkpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmVBY3Rpb24oZXJyKSk7XG4gICAgICAgICAgICB9KVxuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVxdWVzdEFjdGlvbiA9IChkYXRhKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHR5cGU6ICdMT0dfSU5fUkVRVUVTVCcsXG4gICAgICAgIGRhdGEsXG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgbG9naW5TdWNjZXNzQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4geyBcbiAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcbiAgICAgICAgZGF0YSxcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlcXVlc3RGYWlsdXJlQWN0aW9uID0gKGRhdGEpID0+IHtcbiAgICByZXR1cm4geyBcbiAgICAgICAgdHlwZTogJ0xPR19JTl9GQUlMVVJFJyxcbiAgICAgICAgZGF0YSxcbiAgICB9XG59XG4vLyDroZzqt7jslYTsm4Mg7ZWgIOuVjOuKlCBkYXRh6rCAIO2VhOyalOyXhuuLpC5cbmV4cG9ydCBjb25zdCBsb2dvdXRBY3Rpb24gPSAoKSA9PiB7XG4gICAgcmV0dXJuIHsgXG4gICAgICAgIHR5cGU6ICdMT0dfT1VUJyxcbiAgICB9XG59XG5cbi8vIOydtOyghCDsiqTthYzsnbTtirjsmYAg7JWh7IWY7J2EIOuwm+yVhOyEnCDri6TsnYwg7Iqk7YWM7J207Yq466W8IOuPjOugpOyjvOuKlCDtlajsiJhcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikgPT4ge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBcIkxPR19JTlwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtZTogYWN0aW9uLmRhdGEsXG4gICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiTE9HX09VVFwiOlxuICAgICAgICAgICAgcmV0dXJuIHsgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgaXNMb2dnZWRJbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbWU6IG51bGwsXG4gICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OiBcbiAgICAgICAgcmV0dXJuIHN0YXRlO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlZHVjZXI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./reducers/user.js\n");

/***/ }),

/***/ "./sagas/index.js":
/*!************************!*\
  !*** ./sagas/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rootSaga; });\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\n/* harmony import */ var redux_saga_effects__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);\n\n // 요청을 보내고\n\nfunction logInAPI(data) {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/login', data);\n} // 요청의 결과를 받는다\n\n\nfunction* logIn(action) {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logInAPI, action.data);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_IN_SUCCESS',\n      data: result.data\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      tpye: 'LOG_IN_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction logOutAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/logout');\n}\n\nfunction* logOut() {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(logOutAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'LOG_OUT_SUCCESS',\n      data: result.data\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      tpye: 'LOG_OUT_FAILURE',\n      data: err.response.data\n    });\n  }\n}\n\nfunction addPostAPI() {\n  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.post('/api/post');\n}\n\nfunction* addPost() {\n  try {\n    const result = yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"call\"])(addPostAPI);\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      type: 'ADD_POST_SUCCESS',\n      data: result.data\n    });\n  } catch (err) {\n    yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"put\"])({\n      tpye: 'ADD_POST_FAILURE',\n      data: err.response.data\n    });\n  }\n} // take는 괄호안의 액션이 실행될 때 까지 기다리겠다는 뜻\n\n\nfunction* watchLogin() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"take\"])('LOG_IN_REQUEST', logIn);\n}\n\nfunction* watchLogOut() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"take\"])('LOG_OUT_REQUEST', logOut);\n}\n\nfunction* watchAddPost() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"take\"])('ADD_POST_REQUEST', addPost);\n}\n\nfunction* rootSaga() {\n  yield Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"all\"])([Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogin), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchLogOut), Object(redux_saga_effects__WEBPACK_IMPORTED_MODULE_0__[\"fork\"])(watchAddPost)]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zYWdhcy9pbmRleC5qcz83N2UzIl0sIm5hbWVzIjpbImxvZ0luQVBJIiwiZGF0YSIsImF4aW9zIiwicG9zdCIsImxvZ0luIiwiYWN0aW9uIiwicmVzdWx0IiwiY2FsbCIsInB1dCIsInR5cGUiLCJlcnIiLCJ0cHllIiwicmVzcG9uc2UiLCJsb2dPdXRBUEkiLCJsb2dPdXQiLCJhZGRQb3N0QVBJIiwiYWRkUG9zdCIsIndhdGNoTG9naW4iLCJ0YWtlIiwid2F0Y2hMb2dPdXQiLCJ3YXRjaEFkZFBvc3QiLCJyb290U2FnYSIsImFsbCIsImZvcmsiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0EsU0FBU0EsUUFBVCxDQUFrQkMsSUFBbEIsRUFBd0I7QUFDcEIsU0FBT0MsNENBQUssQ0FBQ0MsSUFBTixDQUFXLFlBQVgsRUFBeUJGLElBQXpCLENBQVA7QUFDSCxDLENBRUQ7OztBQUNBLFVBQVVHLEtBQVYsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQ3BCLE1BQUk7QUFDQSxVQUFNQyxNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1AsUUFBRCxFQUFXSyxNQUFNLENBQUNKLElBQWxCLENBQXpCO0FBQ0EsVUFBTU8sOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUsZ0JBREE7QUFFTlIsVUFBSSxFQUFFSyxNQUFNLENBQUNMO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU9TLEdBQVAsRUFBWTtBQUNWLFVBQU1GLDhEQUFHLENBQUM7QUFDTkcsVUFBSSxFQUFFLGdCQURBO0FBRU5WLFVBQUksRUFBRVMsR0FBRyxDQUFDRSxRQUFKLENBQWFYO0FBRmIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTWSxTQUFULEdBQXFCO0FBQ2pCLFNBQU9YLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxhQUFYLENBQVA7QUFDSDs7QUFFRCxVQUFVVyxNQUFWLEdBQW1CO0FBQ2YsTUFBSTtBQUNBLFVBQU1SLE1BQU0sR0FBRyxNQUFNQywrREFBSSxDQUFDTSxTQUFELENBQXpCO0FBQ0EsVUFBTUwsOERBQUcsQ0FBQztBQUNOQyxVQUFJLEVBQUUsaUJBREE7QUFFTlIsVUFBSSxFQUFFSyxNQUFNLENBQUNMO0FBRlAsS0FBRCxDQUFUO0FBSUgsR0FORCxDQU1FLE9BQU9TLEdBQVAsRUFBWTtBQUNWLFVBQU1GLDhEQUFHLENBQUM7QUFDTkcsVUFBSSxFQUFFLGlCQURBO0FBRU5WLFVBQUksRUFBRVMsR0FBRyxDQUFDRSxRQUFKLENBQWFYO0FBRmIsS0FBRCxDQUFUO0FBSUg7QUFDSjs7QUFFRCxTQUFTYyxVQUFULEdBQXNCO0FBQ2xCLFNBQU9iLDRDQUFLLENBQUNDLElBQU4sQ0FBVyxXQUFYLENBQVA7QUFDSDs7QUFFRCxVQUFVYSxPQUFWLEdBQW9CO0FBQ2hCLE1BQUk7QUFDQSxVQUFNVixNQUFNLEdBQUcsTUFBTUMsK0RBQUksQ0FBQ1EsVUFBRCxDQUF6QjtBQUNBLFVBQU1QLDhEQUFHLENBQUM7QUFDTkMsVUFBSSxFQUFFLGtCQURBO0FBRU5SLFVBQUksRUFBRUssTUFBTSxDQUFDTDtBQUZQLEtBQUQsQ0FBVDtBQUlILEdBTkQsQ0FNRSxPQUFPUyxHQUFQLEVBQVk7QUFDVixVQUFNRiw4REFBRyxDQUFDO0FBQ05HLFVBQUksRUFBRSxrQkFEQTtBQUVOVixVQUFJLEVBQUVTLEdBQUcsQ0FBQ0UsUUFBSixDQUFhWDtBQUZiLEtBQUQsQ0FBVDtBQUlIO0FBQ0osQyxDQUdEOzs7QUFDQSxVQUFVZ0IsVUFBVixHQUF1QjtBQUNuQixRQUFNQywrREFBSSxDQUFDLGdCQUFELEVBQW1CZCxLQUFuQixDQUFWO0FBQ0g7O0FBRUQsVUFBVWUsV0FBVixHQUF3QjtBQUNwQixRQUFNRCwrREFBSSxDQUFDLGlCQUFELEVBQW9CSixNQUFwQixDQUFWO0FBQ0g7O0FBRUQsVUFBVU0sWUFBVixHQUF5QjtBQUNyQixRQUFNRiwrREFBSSxDQUFDLGtCQUFELEVBQXFCRixPQUFyQixDQUFWO0FBQ0g7O0FBRWMsVUFBVUssUUFBVixHQUFxQjtBQUNoQyxRQUFNQyw4REFBRyxDQUFDLENBQ05DLCtEQUFJLENBQUNOLFVBQUQsQ0FERSxFQUVOTSwrREFBSSxDQUFDSixXQUFELENBRkUsRUFHTkksK0RBQUksQ0FBQ0gsWUFBRCxDQUhFLENBQUQsQ0FBVDtBQU1IIiwiZmlsZSI6Ii4vc2FnYXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhbGwsIGZvcmssIGNhbGwsIHRha2UsIHB1dCB9IGZyb20gJ3JlZHV4LXNhZ2EvZWZmZWN0cyc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG4vLyDsmpTssq3snYQg67O064K06rOgXG5mdW5jdGlvbiBsb2dJbkFQSShkYXRhKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvbG9naW4nLCBkYXRhKVxufVxuXG4vLyDsmpTssq3snZgg6rKw6rO866W8IOuwm+uKlOuLpFxuZnVuY3Rpb24qIGxvZ0luKGFjdGlvbikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwobG9nSW5BUEksIGFjdGlvbi5kYXRhKVxuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHlwZTogJ0xPR19JTl9TVUNDRVNTJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHB5ZTogJ0xPR19JTl9GQUlMVVJFJyxcbiAgICAgICAgICAgIGRhdGE6IGVyci5yZXNwb25zZS5kYXRhLFxuICAgICAgICB9KVxuICAgIH1cbn1cblxuZnVuY3Rpb24gbG9nT3V0QVBJKCkge1xuICAgIHJldHVybiBheGlvcy5wb3N0KCcvYXBpL2xvZ291dCcpXG59XG5cbmZ1bmN0aW9uKiBsb2dPdXQoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0geWllbGQgY2FsbChsb2dPdXRBUEkpXG4gICAgICAgIHlpZWxkIHB1dCh7XG4gICAgICAgICAgICB0eXBlOiAnTE9HX09VVF9TVUNDRVNTJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHB5ZTogJ0xPR19PVVRfRkFJTFVSRScsXG4gICAgICAgICAgICBkYXRhOiBlcnIucmVzcG9uc2UuZGF0YSxcbiAgICAgICAgfSlcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFBvc3RBUEkoKSB7XG4gICAgcmV0dXJuIGF4aW9zLnBvc3QoJy9hcGkvcG9zdCcpXG59XG5cbmZ1bmN0aW9uKiBhZGRQb3N0KCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHlpZWxkIGNhbGwoYWRkUG9zdEFQSSlcbiAgICAgICAgeWllbGQgcHV0KHtcbiAgICAgICAgICAgIHR5cGU6ICdBRERfUE9TVF9TVUNDRVNTJyxcbiAgICAgICAgICAgIGRhdGE6IHJlc3VsdC5kYXRhXG4gICAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB5aWVsZCBwdXQoe1xuICAgICAgICAgICAgdHB5ZTogJ0FERF9QT1NUX0ZBSUxVUkUnLFxuICAgICAgICAgICAgZGF0YTogZXJyLnJlc3BvbnNlLmRhdGEsXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5cbi8vIHRha2XripQg6rSE7Zi47JWI7J2YIOyVoeyFmOydtCDsi6TtlonrkKAg65WMIOq5jOyngCDquLDri6TrpqzqsqDri6TripQg65y7XG5mdW5jdGlvbiogd2F0Y2hMb2dpbigpIHtcbiAgICB5aWVsZCB0YWtlKCdMT0dfSU5fUkVRVUVTVCcsIGxvZ0luKTtcbn1cblxuZnVuY3Rpb24qIHdhdGNoTG9nT3V0KCkge1xuICAgIHlpZWxkIHRha2UoJ0xPR19PVVRfUkVRVUVTVCcsIGxvZ091dCk7XG59XG5cbmZ1bmN0aW9uKiB3YXRjaEFkZFBvc3QoKSB7XG4gICAgeWllbGQgdGFrZSgnQUREX1BPU1RfUkVRVUVTVCcsIGFkZFBvc3QpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiogcm9vdFNhZ2EoKSB7XG4gICAgeWllbGQgYWxsKFtcbiAgICAgICAgZm9yayh3YXRjaExvZ2luKSxcbiAgICAgICAgZm9yayh3YXRjaExvZ091dCksXG4gICAgICAgIGZvcmsod2F0Y2hBZGRQb3N0KSxcbiAgICBdKVxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./sagas/index.js\n");

/***/ }),

/***/ "./store/configureStore.js":
/*!*********************************!*\
  !*** ./store/configureStore.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! redux-saga */ \"redux-saga\");\n/* harmony import */ var redux_saga__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(redux_saga__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _sagas__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sagas */ \"./sagas/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ \"./reducers/index.js\");\n\n\n\n\n // rootReducer 불러오기\n\n\n\nconst loggerMiddleware = ({\n  dispatch,\n  getSate\n}) => next => action => {\n  console.log(action);\n  return next(action);\n};\n\nconst configureStore = () => {\n  // 빈 배열에는 싸가나 썽크가 들어간다.\n  const sagaMiddleware = redux_saga__WEBPACK_IMPORTED_MODULE_3___default()();\n  const middlewares = [sagaMiddleware, loggerMiddleware];\n  const enhancer = false ? undefined : Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_2__[\"composeWithDevTools\"])(Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"applyMiddleware\"])(...middlewares)); // store는 state랑 reducer를 포함한 것\n\n  const store = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_5__[\"default\"], enhancer); // store.dispatch({\n  //     type: 'CHANGE_NICKNAME',\n  //     data: 'boogieLee',\n  // })\n\n  store.sagaTask = sagaMiddleware.run(_sagas__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__[\"createWrapper\"])(configureStore, {\n  debug: true\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz8wMTA5Il0sIm5hbWVzIjpbImxvZ2dlck1pZGRsZXdhcmUiLCJkaXNwYXRjaCIsImdldFNhdGUiLCJuZXh0IiwiYWN0aW9uIiwiY29uc29sZSIsImxvZyIsImNvbmZpZ3VyZVN0b3JlIiwic2FnYU1pZGRsZXdhcmUiLCJjcmVhdGVTYWdhTWlkZGxld2FyZSIsIm1pZGRsZXdhcmVzIiwiZW5oYW5jZXIiLCJjb21wb3NlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImFwcGx5TWlkZGxld2FyZSIsInN0b3JlIiwiY3JlYXRlU3RvcmUiLCJyZWR1Y2VyIiwic2FnYVRhc2siLCJydW4iLCJyb290U2FnYSIsIndyYXBwZXIiLCJjcmVhdGVXcmFwcGVyIiwiZGVidWciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtDQUdBOztBQUNBOztBQUVBLE1BQU1BLGdCQUFnQixHQUFHLENBQUM7QUFBRUMsVUFBRjtBQUFZQztBQUFaLENBQUQsS0FBNEJDLElBQUQsSUFBV0MsTUFBRCxJQUFZO0FBQ3RFQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsTUFBWjtBQUNBLFNBQU9ELElBQUksQ0FBQ0MsTUFBRCxDQUFYO0FBQ0gsQ0FIRDs7QUFLQSxNQUFNRyxjQUFjLEdBQUcsTUFBTTtBQUN6QjtBQUNBLFFBQU1DLGNBQWMsR0FBR0MsaURBQW9CLEVBQTNDO0FBQ0EsUUFBTUMsV0FBVyxHQUFHLENBQUNGLGNBQUQsRUFBaUJSLGdCQUFqQixDQUFwQjtBQUNBLFFBQU1XLFFBQVEsR0FBRyxRQUNYQyxTQURXLEdBRVhDLG9GQUFtQixDQUFDQyw2REFBZSxDQUFDLEdBQUdKLFdBQUosQ0FBaEIsQ0FGekIsQ0FKeUIsQ0FPekI7O0FBRUEsUUFBTUssS0FBSyxHQUFHQyx5REFBVyxDQUFDQyxpREFBRCxFQUFVTixRQUFWLENBQXpCLENBVHlCLENBVXpCO0FBQ0E7QUFDQTtBQUNBOztBQUNBSSxPQUFLLENBQUNHLFFBQU4sR0FBaUJWLGNBQWMsQ0FBQ1csR0FBZixDQUFtQkMsOENBQW5CLENBQWpCO0FBQ0EsU0FBT0wsS0FBUDtBQUNILENBaEJEOztBQWtCQSxNQUFNTSxPQUFPLEdBQUdDLHdFQUFhLENBQUNmLGNBQUQsRUFBaUI7QUFDMUNnQixPQUFLO0FBRHFDLENBQWpCLENBQTdCO0FBSWVGLHNFQUFmIiwiZmlsZSI6Ii4vc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVXcmFwcGVyIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcbmltcG9ydCB7IGFwcGx5TWlkZGxld2FyZSwgY3JlYXRlU3RvcmUsIGNvbXBvc2UgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgeyBjb21wb3NlV2l0aERldlRvb2xzIH0gZnJvbSAncmVkdXgtZGV2dG9vbHMtZXh0ZW5zaW9uJztcbmltcG9ydCBjcmVhdGVTYWdhTWlkZGxld2FyZSBmcm9tICdyZWR1eC1zYWdhJztcblxuaW1wb3J0IHJvb3RTYWdhIGZyb20gJy4uL3NhZ2FzJztcbi8vIHJvb3RSZWR1Y2VyIOu2iOufrOyYpOq4sFxuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnXG5cbmNvbnN0IGxvZ2dlck1pZGRsZXdhcmUgPSAoeyBkaXNwYXRjaCwgZ2V0U2F0ZSB9KSA9PiAobmV4dCkgPT4gKGFjdGlvbikgPT4ge1xuICAgIGNvbnNvbGUubG9nKGFjdGlvbik7XG4gICAgcmV0dXJuIG5leHQoYWN0aW9uKTtcbn1cblxuY29uc3QgY29uZmlndXJlU3RvcmUgPSAoKSA9PiB7XG4gICAgLy8g67mIIOuwsOyXtOyXkOuKlCDsi7jqsIDrgpgg7I297YGs6rCAIOuTpOyWtOqwhOuLpC5cbiAgICBjb25zdCBzYWdhTWlkZGxld2FyZSA9IGNyZWF0ZVNhZ2FNaWRkbGV3YXJlKCk7XG4gICAgY29uc3QgbWlkZGxld2FyZXMgPSBbc2FnYU1pZGRsZXdhcmUsIGxvZ2dlck1pZGRsZXdhcmVdO1xuICAgIGNvbnN0IGVuaGFuY2VyID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJ1xuICAgICAgICA/IGNvbXBvc2UoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmVzKSlcbiAgICAgICAgOiBjb21wb3NlV2l0aERldlRvb2xzKGFwcGx5TWlkZGxld2FyZSguLi5taWRkbGV3YXJlcykpXG4gICAgLy8gc3RvcmXripQgc3RhdGXrnpEgcmVkdWNlcuulvCDtj6ztlajtlZwg6rKDXG4gICAgXG4gICAgY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShyZWR1Y2VyLCBlbmhhbmNlcik7XG4gICAgLy8gc3RvcmUuZGlzcGF0Y2goe1xuICAgIC8vICAgICB0eXBlOiAnQ0hBTkdFX05JQ0tOQU1FJyxcbiAgICAvLyAgICAgZGF0YTogJ2Jvb2dpZUxlZScsXG4gICAgLy8gfSlcbiAgICBzdG9yZS5zYWdhVGFzayA9IHNhZ2FNaWRkbGV3YXJlLnJ1bihyb290U2FnYSk7XG4gICAgcmV0dXJuIHN0b3JlO1xufTtcblxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZVdyYXBwZXIoY29uZmlndXJlU3RvcmUsIHtcbiAgICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiPzcwYzYiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiYXhpb3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///axios\n");

/***/ }),

/***/ "next-redux-saga":
/*!**********************************!*\
  !*** external "next-redux-saga" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXNhZ2FcIj81MGI1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtc2FnYS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-saga\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"prop-types\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwcm9wLXR5cGVzXCI/MzgzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJwcm9wLXR5cGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///prop-types\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1kZXZ0b29scy1leHRlbnNpb25cIj81YWE5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWRldnRvb2xzLWV4dGVuc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWRldnRvb2xzLWV4dGVuc2lvblwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-devtools-extension\n");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhXCI/Mzg3YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJyZWR1eC1zYWdhLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXgtc2FnYVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga\n");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1zYWdhL2VmZmVjdHNcIj80MGI3Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LXNhZ2EvZWZmZWN0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LXNhZ2EvZWZmZWN0c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-saga/effects\n");

/***/ })

/******/ });
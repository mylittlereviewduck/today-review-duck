"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/main/page.tsx":
/*!*******************************!*\
  !*** ./src/app/main/page.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Main; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* harmony import */ var _components_Banner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components/Banner */ \"(app-pages-browser)/./src/app/main/_components/Banner.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Main() {\n    _s();\n    const [theme] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_recoil__WEBPACK_IMPORTED_MODULE_2__.themeState);\n    const [onSearchPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_recoil__WEBPACK_IMPORTED_MODULE_2__.onSearchPageState);\n    // console.log(\"theme -----\", theme);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Banner__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/page.tsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            \"Main Page - Theme: \",\n            theme,\n            onSearchPage ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"-----search list\"\n            }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: \"-----main list\"\n            }, void 0, false)\n        ]\n    }, void 0, true);\n}\n_s(Main, \"pkpMydeX/yNWhxwn2BV/Ljluh98=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState\n    ];\n});\n_c = Main;\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbi9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRXdDO0FBQ21CO0FBQ2pCO0FBRTNCLFNBQVNJOztJQUN0QixNQUFNLENBQUNDLE1BQU0sR0FBR0wsc0RBQWNBLENBQUNFLCtDQUFVQTtJQUN6QyxNQUFNLENBQUNJLGFBQWEsR0FBR04sc0RBQWNBLENBQUNDLHNEQUFpQkE7SUFDdkQscUNBQXFDO0lBRXJDLHFCQUNFOzswQkFDRSw4REFBQ0UsMERBQU1BOzs7OztZQUFHO1lBQ1VFO1lBQ25CQyw2QkFBZTswQkFBRTs4Q0FBc0I7MEJBQUU7Ozs7QUFHaEQ7R0Fad0JGOztRQUNOSixrREFBY0E7UUFDUEEsa0RBQWNBOzs7S0FGZkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYWluL3BhZ2UudHN4Pzg5Y2IiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIOKchSDtgbTrnbzsnbTslrjtirgg7Lu07Y+s64SM7Yq466GcIOuzgO2ZmFxuXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IG9uU2VhcmNoUGFnZVN0YXRlLCB0aGVtZVN0YXRlIH0gZnJvbSBcIi4uL19yZWNvaWxcIjtcbmltcG9ydCBCYW5uZXIgZnJvbSBcIi4vX2NvbXBvbmVudHMvQmFubmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1haW4oKSB7XG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VSZWNvaWxTdGF0ZSh0aGVtZVN0YXRlKTtcbiAgY29uc3QgW29uU2VhcmNoUGFnZV0gPSB1c2VSZWNvaWxTdGF0ZShvblNlYXJjaFBhZ2VTdGF0ZSk7XG4gIC8vIGNvbnNvbGUubG9nKFwidGhlbWUgLS0tLS1cIiwgdGhlbWUpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxCYW5uZXIgLz5cbiAgICAgIE1haW4gUGFnZSAtIFRoZW1lOiB7dGhlbWV9XG4gICAgICB7b25TZWFyY2hQYWdlID8gPD4tLS0tLXNlYXJjaCBsaXN0PC8+IDogPD4tLS0tLW1haW4gbGlzdDwvPn1cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWNvaWxTdGF0ZSIsIm9uU2VhcmNoUGFnZVN0YXRlIiwidGhlbWVTdGF0ZSIsIkJhbm5lciIsIk1haW4iLCJ0aGVtZSIsIm9uU2VhcmNoUGFnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/main/page.tsx\n"));

/***/ })

});
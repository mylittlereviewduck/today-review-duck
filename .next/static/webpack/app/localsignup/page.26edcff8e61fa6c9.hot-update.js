"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/localsignup/page",{

/***/ "(app-pages-browser)/./src/app/localsignup/_components/StepProgressBar.tsx":
/*!*************************************************************!*\
  !*** ./src/app/localsignup/_components/StepProgressBar.tsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ StepProgressBar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/progressbar.module.css */ \"(app-pages-browser)/./src/app/localsignup/_css/progressbar.module.css\");\n/* harmony import */ var _css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction StepProgressBar(param) {\n    let { totalSteps, currentStep } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().progress_bar),\n        children: Array.from({\n            length: totalSteps\n        }).map((_, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().step), \" \").concat(index == currentStep - 1 ? (_css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().active) : (_css_progressbar_module_css__WEBPACK_IMPORTED_MODULE_1___default().inactive))\n            }, index, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/StepProgressBar.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/StepProgressBar.tsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n_c = StepProgressBar;\nvar _c;\n$RefreshReg$(_c, \"StepProgressBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU3RlcFByb2dyZXNzQmFyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFvRDtBQU9yQyxTQUFTQyxnQkFBZ0IsS0FHakI7UUFIaUIsRUFDdENDLFVBQVUsRUFDVkMsV0FBVyxFQUNVLEdBSGlCO0lBSXRDLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXTCxpRkFBbUI7a0JBQ2hDTyxNQUFNQyxJQUFJLENBQUM7WUFBRUMsUUFBUVA7UUFBVyxHQUFHUSxHQUFHLENBQUMsQ0FBQ0MsR0FBR0Msc0JBQzFDLDhEQUFDUjtnQkFFQ0MsV0FBVyxHQUNUTyxPQURZWix5RUFBVyxFQUFDLEtBRXpCLE9BRENZLFNBQVNULGNBQWMsSUFBSUgsMkVBQWEsR0FBR0EsNkVBQWU7ZUFGdkRZOzs7Ozs7Ozs7O0FBUWY7S0FoQndCWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvY2Fsc2lnbnVwL19jb21wb25lbnRzL1N0ZXBQcm9ncmVzc0Jhci50c3g/MmJlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9fY3NzL3Byb2dyZXNzYmFyLm1vZHVsZS5jc3NcIjtcblxuaW50ZXJmYWNlIFN0ZXBQcm9ncmVzc0JhclByb3BzIHtcbiAgdG90YWxTdGVwczogbnVtYmVyO1xuICBjdXJyZW50U3RlcDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwUHJvZ3Jlc3NCYXIoe1xuICB0b3RhbFN0ZXBzLFxuICBjdXJyZW50U3RlcCxcbn06IFN0ZXBQcm9ncmVzc0JhclByb3BzKSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9ncmVzc19iYXJ9PlxuICAgICAge0FycmF5LmZyb20oeyBsZW5ndGg6IHRvdGFsU3RlcHMgfSkubWFwKChfLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5zdGVwfSAke1xuICAgICAgICAgICAgaW5kZXggPT0gY3VycmVudFN0ZXAgLSAxID8gc3R5bGVzLmFjdGl2ZSA6IHN0eWxlcy5pbmFjdGl2ZVxuICAgICAgICAgIH1gfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiU3RlcFByb2dyZXNzQmFyIiwidG90YWxTdGVwcyIsImN1cnJlbnRTdGVwIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZ3Jlc3NfYmFyIiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwibWFwIiwiXyIsImluZGV4Iiwic3RlcCIsImFjdGl2ZSIsImluYWN0aXZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/localsignup/_components/StepProgressBar.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/app/localsignup/_components/SignUp.tsx":
/*!****************************************************!*\
  !*** ./src/app/localsignup/_components/SignUp.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/signup.module.css */ \"(app-pages-browser)/./src/app/localsignup/_css/signup.module.css\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/images/logo.svg */ \"(app-pages-browser)/./public/images/logo.svg\");\n/* harmony import */ var _Step1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Step1 */ \"(app-pages-browser)/./src/app/localsignup/_components/Step1.tsx\");\n/* harmony import */ var _app_components_progressbar_StepProgressBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_components/progressbar/StepProgressBar */ \"(app-pages-browser)/./src/app/_components/progressbar/StepProgressBar.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Completed__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Completed */ \"(app-pages-browser)/./src/app/localsignup/_components/Completed.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n// import Link from \"next/link\";\nfunction SignUp() {\n    _s();\n    const [step, setStep] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().page),\n        children: [\n            step !== 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().signup_wrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo_wrap),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                            alt: \"logo image\",\n                            loading: \"lazy\",\n                            property: \"public/images/logo.svg\",\n                            width: 69,\n                            height: 51\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_progressbar_StepProgressBar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        totalSteps: 3,\n                        currentStep: step\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    step == 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Step1__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        setStep: setStep\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                lineNumber: 16,\n                columnNumber: 9\n            }, this),\n            step == 4 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Completed__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                lineNumber: 33,\n                columnNumber: 21\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"M88kfgrd7Unvr/hfMAIVxST1ckg=\");\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU2lnblVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ2hCO0FBQ3NCO0FBQ3pCO0FBQ2dEO0FBQzNDO0FBQ0c7QUFDcEMsZ0NBQWdDO0FBRWpCLFNBQVNPOztJQUN0QixNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR0osK0NBQVFBLENBQUM7SUFDakMscUJBQ0UsOERBQUNLO1FBQVFDLFdBQVdYLG9FQUFXOztZQUM1QlEsU0FBUyxtQkFDUiw4REFBQ0s7Z0JBQUlGLFdBQVdYLDJFQUFrQjs7a0NBQ2hDLDhEQUFDZTt3QkFBR0osV0FBV1gseUVBQWdCO2tDQUU3Qiw0RUFBQ0Msa0RBQUtBOzRCQUNKZ0IsS0FBS2YsK0RBQU9BOzRCQUNaZ0IsS0FBSTs0QkFDSkMsU0FBUTs0QkFDUkMsVUFBVTs0QkFDVkMsT0FBTzs0QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7a0NBSVosOERBQUNsQixtRkFBZUE7d0JBQUNtQixZQUFZO3dCQUFHQyxhQUFhaEI7Ozs7OztvQkFDNUNBLFFBQVEsbUJBQUssOERBQUNMLDhDQUFLQTt3QkFBQ00sU0FBU0E7Ozs7Ozs7Ozs7OztZQUdqQ0QsUUFBUSxtQkFBSyw4REFBQ0Ysa0RBQVNBOzs7Ozs7Ozs7OztBQUc5QjtHQXpCd0JDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU2lnblVwLnRzeD9kNGY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9zaWdudXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgSW1nTG9nbyBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgU3RlcDEgZnJvbSBcIi4vU3RlcDFcIjtcbmltcG9ydCBTdGVwUHJvZ3Jlc3NCYXIgZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL3Byb2dyZXNzYmFyL1N0ZXBQcm9ncmVzc0JhclwiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb21wbGV0ZWQgZnJvbSBcIi4vQ29tcGxldGVkXCI7XG4vLyBpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNpZ25VcCgpIHtcbiAgY29uc3QgW3N0ZXAsIHNldFN0ZXBdID0gdXNlU3RhdGUoMSk7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICB7c3RlcCAhPT0gNCAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2lnbnVwX3dyYXB9PlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX3dyYXB9PlxuICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiLi9cIn0+ICovfVxuICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgIHNyYz17SW1nTG9nb31cbiAgICAgICAgICAgICAgYWx0PVwibG9nbyBpbWFnZVwiXG4gICAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICAgICAgcHJvcGVydHk9e1wicHVibGljL2ltYWdlcy9sb2dvLnN2Z1wifVxuICAgICAgICAgICAgICB3aWR0aD17Njl9XG4gICAgICAgICAgICAgIGhlaWdodD17NTF9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8U3RlcFByb2dyZXNzQmFyIHRvdGFsU3RlcHM9ezN9IGN1cnJlbnRTdGVwPXtzdGVwfSAvPlxuICAgICAgICAgIHtzdGVwID09IDEgJiYgPFN0ZXAxIHNldFN0ZXA9e3NldFN0ZXB9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgICB7c3RlcCA9PSA0ICYmIDxDb21wbGV0ZWQgLz59XG4gICAgPC9zZWN0aW9uPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkltYWdlIiwiSW1nTG9nbyIsIlN0ZXAxIiwiU3RlcFByb2dyZXNzQmFyIiwidXNlU3RhdGUiLCJDb21wbGV0ZWQiLCJTaWduVXAiLCJzdGVwIiwic2V0U3RlcCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWdlIiwiZGl2Iiwic2lnbnVwX3dyYXAiLCJoMSIsImxvZ29fd3JhcCIsInNyYyIsImFsdCIsImxvYWRpbmciLCJwcm9wZXJ0eSIsIndpZHRoIiwiaGVpZ2h0IiwidG90YWxTdGVwcyIsImN1cnJlbnRTdGVwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/localsignup/_components/SignUp.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/signup.module.css */ \"(app-pages-browser)/./src/app/localsignup/_css/signup.module.css\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/images/logo.svg */ \"(app-pages-browser)/./public/images/logo.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n// import Link from \"next/link\";\nfunction SignUp() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().signup_wrap),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo_wrap),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"logo image\",\n                        loading: \"lazy\",\n                        property: \"public/images/logo.svg\",\n                        width: 69,\n                        height: 51\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                        lineNumber: 13,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().form_wrap),\n                    onSubmit: handleSubmit,\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                            className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().sub_title),\n                            children: [\n                                \"다시 만나서 반가워요!\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 13\n                                }, this),\n                                \" 로그인 후 모든 활동이 가능해요\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Input, {\n                            type: \"email\",\n                            name: \"email\",\n                            label: \"이메일\",\n                            placeholder: \"이메일을 입력해주세요\",\n                            error: emailError,\n                            value: formData.email,\n                            onChange: (e)=>handleChange(e),\n                            padding: \"30px 0 0 0\"\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n            lineNumber: 10,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU2lnblVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQytDO0FBQ2hCO0FBQ3NCO0FBQ3JELGdDQUFnQztBQUVqQixTQUFTRztJQUN0QixxQkFDRSw4REFBQ0M7UUFBUUMsV0FBV0wsb0VBQVc7a0JBQzdCLDRFQUFDTztZQUFJRixXQUFXTCwyRUFBa0I7OzhCQUNoQyw4REFBQ1M7b0JBQUdKLFdBQVdMLHlFQUFnQjs4QkFFN0IsNEVBQUNDLGtEQUFLQTt3QkFDSlUsS0FBS1QsK0RBQU9BO3dCQUNaVSxLQUFJO3dCQUNKQyxTQUFRO3dCQUNSQyxVQUFVO3dCQUNWQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7Ozs7Ozs4QkFJaEIsOERBQUNDO29CQUFLWixXQUFXTCx5RUFBZ0I7b0JBQUVtQixVQUFVQzs7c0NBQ3ZDLDhEQUFDQzs0QkFBT2hCLFdBQVdMLHlFQUFnQjs7Z0NBQUU7OENBRW5DLDhEQUFDdUI7Ozs7O2dDQUFLOzs7Ozs7O3NDQUdSLDhEQUFDQzs0QkFDQ0MsTUFBTTs0QkFDTkMsTUFBTTs0QkFDTkMsT0FBTTs0QkFDTkMsYUFBWTs0QkFDWkMsT0FBT0M7NEJBQ1BDLE9BQU9DLFNBQVNDLEtBQUs7NEJBQ3JCQyxVQUFVLENBQUNDLElBQU1DLGFBQWFEOzRCQUM5QkUsU0FBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPcEI7S0FyQ3dCbEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9sb2NhbHNpZ251cC9fY29tcG9uZW50cy9TaWduVXAudHN4P2Q0ZjQiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9fY3NzL3NpZ251cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBJbWdMb2dvIGZyb20gXCJALy4uLy4uL3B1YmxpYy9pbWFnZXMvbG9nby5zdmdcIjtcbi8vIGltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU2lnblVwKCkge1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zaWdudXBfd3JhcH0+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5sb2dvX3dyYXB9PlxuICAgICAgICAgIHsvKiA8TGluayBocmVmPXtcIi4vXCJ9PiAqL31cbiAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgIHNyYz17SW1nTG9nb31cbiAgICAgICAgICAgIGFsdD1cImxvZ28gaW1hZ2VcIlxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxuICAgICAgICAgICAgcHJvcGVydHk9e1wicHVibGljL2ltYWdlcy9sb2dvLnN2Z1wifVxuICAgICAgICAgICAgd2lkdGg9ezY5fVxuICAgICAgICAgICAgaGVpZ2h0PXs1MX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIHsvKiA8L0xpbms+ICovfVxuICAgICAgICA8L2gxPlxuXHRcdFx0XHQ8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX3dyYXB9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3ViX3RpdGxlfT5cbiAgICAgICAgICAgIOuLpOyLnCDrp4zrgpjshJwg67CY6rCA7JuM7JqUIVxuICAgICAgICAgICAgPGJyIC8+IOuhnOq3uOyduCDtm4Qg66qo65OgIO2ZnOuPmeydtCDqsIDriqXtlbTsmpRcbiAgICAgICAgICA8L3N0cm9uZz5cblxuICAgICAgICAgIDxJbnB1dFxuICAgICAgICAgICAgdHlwZT17XCJlbWFpbFwifVxuICAgICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxuICAgICAgICAgICAgbGFiZWw9XCLsnbTrqZTsnbxcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcbiAgICAgICAgICAgIGVycm9yPXtlbWFpbEVycm9yfVxuICAgICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgICBwYWRkaW5nPVwiMzBweCAwIDAgMFwiXG4gICAgICAgICAgLz5cblx0XHRcdFx0XHQ8L2Zvcm0+XG5cdFx0XHRcdFx0XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJJbWdMb2dvIiwiU2lnblVwIiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZ2UiLCJkaXYiLCJzaWdudXBfd3JhcCIsImgxIiwibG9nb193cmFwIiwic3JjIiwiYWx0IiwibG9hZGluZyIsInByb3BlcnR5Iiwid2lkdGgiLCJoZWlnaHQiLCJmb3JtIiwiZm9ybV93cmFwIiwib25TdWJtaXQiLCJoYW5kbGVTdWJtaXQiLCJzdHJvbmciLCJzdWJfdGl0bGUiLCJiciIsIklucHV0IiwidHlwZSIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZXJyb3IiLCJlbWFpbEVycm9yIiwidmFsdWUiLCJmb3JtRGF0YSIsImVtYWlsIiwib25DaGFuZ2UiLCJlIiwiaGFuZGxlQ2hhbmdlIiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/localsignup/_components/SignUp.tsx\n"));

/***/ })

});
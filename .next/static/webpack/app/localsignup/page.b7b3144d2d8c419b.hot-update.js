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

/***/ "(app-pages-browser)/./src/app/localsignup/_components/Step1.tsx":
/*!***************************************************!*\
  !*** ./src/app/localsignup/_components/Step1.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Step1; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/signup.module.css */ \"(app-pages-browser)/./src/app/localsignup/_css/signup.module.css\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_signup_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _app_utils_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_utils/validation */ \"(app-pages-browser)/./src/app/_utils/validation.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Step1() {\n    _s();\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    const isButtonDisabled = !formData.trim() || isPending || emailError !== \"\";\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        // 이메일 검증\n        if (name === \"email\") {\n            setEmailError((0,_app_utils_validation__WEBPACK_IMPORTED_MODULE_4__.validateEmail)(e.value));\n        }\n        setFormData(value);\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (isButtonDisabled) return;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_2___default().form_wrap),\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_2___default().sub_title),\n                        children: [\n                            \"다시 만나서 반가워요!\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/Step1.tsx\",\n                                lineNumber: 31,\n                                columnNumber: 11\n                            }, this),\n                            \" 로그인 후 모든 활동이 가능해요\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/Step1.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_1__.Input, {\n                        type: \"email\",\n                        name: \"email\",\n                        label: \"이메일\",\n                        placeholder: \"이메일을 입력해주세요\",\n                        error: emailError,\n                        value: formData,\n                        onChange: (e)=>handleChange(e),\n                        padding: \"30px 0 0 0\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/Step1.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/Step1.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_2___default().form_button_wrap),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                    buttonType: \"submit\",\n                    filled: true,\n                    className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_2___default().form_button),\n                    children: \"로그인\"\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/Step1.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/Step1.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Step1, \"ar2ZZsOgbY6KC7PN2FqE+PO9KKQ=\");\n_c = Step1;\nvar _c;\n$RefreshReg$(_c, \"Step1\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU3RlcDEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBd0Q7QUFDVDtBQUNIO0FBQ1k7QUFFekMsU0FBU0s7O0lBQ3RCLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNLLFVBQVVDLFlBQVksR0FBR04sK0NBQVFBLENBQUM7SUFDekMsTUFBTU8sbUJBQW1CLENBQUNGLFNBQVNHLElBQUksTUFBTUMsYUFBYU4sZUFBZTtJQUV6RSxNQUFNTyxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUVoQyxTQUFTO1FBQ1QsSUFBSUYsU0FBUyxTQUFTO1lBQ3BCUixjQUFjSCxvRUFBYUEsQ0FBQ1UsRUFBRUUsS0FBSztRQUNyQztRQUNBUCxZQUFZTztJQUNkO0lBRUEsTUFBTUUsZUFBZSxPQUFPSjtRQUMxQkEsRUFBRUssY0FBYztRQUNoQixJQUFJVCxrQkFBa0I7SUFDeEI7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNVO2dCQUFLQyxXQUFXbkIseUVBQWdCO2dCQUFFcUIsVUFBVUw7O2tDQUMzQyw4REFBQ007d0JBQU9ILFdBQVduQix5RUFBZ0I7OzRCQUFFOzBDQUVuQyw4REFBQ3dCOzs7Ozs0QkFBSzs7Ozs7OztrQ0FHUiw4REFBQ3pCLHdEQUFLQTt3QkFDSjBCLE1BQU07d0JBQ05aLE1BQU07d0JBQ05hLE9BQU07d0JBQ05DLGFBQVk7d0JBQ1pDLE9BQU94Qjt3QkFDUFUsT0FBT1I7d0JBQ1B1QixVQUFVLENBQUNqQixJQUFNRCxhQUFhQzt3QkFDOUJrQixTQUFROzs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNDO2dCQUFJWixXQUFXbkIsZ0ZBQXVCOzBCQUNyQyw0RUFBQ0YseURBQU1BO29CQUNMbUMsWUFBVztvQkFDWEMsTUFBTTtvQkFDTmYsV0FBV25CLDJFQUFrQjs4QkFFOUI7Ozs7Ozs7Ozs7Ozs7QUFNVDtHQXBEd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU3RlcDEudHN4PzVhZTUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9zaWdudXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gXCJAL2FwcC9fdXRpbHMvdmFsaWRhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGVwMSgpIHtcbiAgY29uc3QgW2VtYWlsRXJyb3IsIHNldEVtYWlsRXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IGlzQnV0dG9uRGlzYWJsZWQgPSAhZm9ybURhdGEudHJpbSgpIHx8IGlzUGVuZGluZyB8fCBlbWFpbEVycm9yICE9PSBcIlwiO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlOiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xuXG4gICAgLy8g7J2066mU7J28IOqygOymnVxuICAgIGlmIChuYW1lID09PSBcImVtYWlsXCIpIHtcbiAgICAgIHNldEVtYWlsRXJyb3IodmFsaWRhdGVFbWFpbChlLnZhbHVlKSk7XG4gICAgfVxuICAgIHNldEZvcm1EYXRhKHZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZTogRm9ybUV2ZW50PEhUTUxGb3JtRWxlbWVudD4pID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGlzQnV0dG9uRGlzYWJsZWQpIHJldHVybjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9e3N0eWxlcy5mb3JtX3dyYXB9IG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT17c3R5bGVzLnN1Yl90aXRsZX0+XG4gICAgICAgICAg64uk7IucIOunjOuCmOyEnCDrsJjqsIDsm4zsmpQhXG4gICAgICAgICAgPGJyIC8+IOuhnOq3uOyduCDtm4Qg66qo65OgIO2ZnOuPmeydtCDqsIDriqXtlbTsmpRcbiAgICAgICAgPC9zdHJvbmc+XG5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT17XCJlbWFpbFwifVxuICAgICAgICAgIG5hbWU9e1wiZW1haWxcIn1cbiAgICAgICAgICBsYWJlbD1cIuydtOuplOydvFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLsnbTrqZTsnbzsnYQg7J6F66Cl7ZW07KO87IS47JqUXCJcbiAgICAgICAgICBlcnJvcj17ZW1haWxFcnJvcn1cbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGF9XG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVDaGFuZ2UoZSl9XG4gICAgICAgICAgcGFkZGluZz1cIjMwcHggMCAwIDBcIlxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmZvcm1fYnV0dG9uX3dyYXB9PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnV0dG9uVHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgZmlsbGVkXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZm9ybV9idXR0b259XG4gICAgICAgICAgLy8gZGlzYWJsZWQ9e2lzQnV0dG9uRGlzYWJsZWR9XG4gICAgICAgID5cbiAgICAgICAgICDroZzqt7jsnbhcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b24iLCJJbnB1dCIsInN0eWxlcyIsInVzZVN0YXRlIiwidmFsaWRhdGVFbWFpbCIsIlN0ZXAxIiwiZW1haWxFcnJvciIsInNldEVtYWlsRXJyb3IiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiaXNCdXR0b25EaXNhYmxlZCIsInRyaW0iLCJpc1BlbmRpbmciLCJoYW5kbGVDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJmb3JtIiwiY2xhc3NOYW1lIiwiZm9ybV93cmFwIiwib25TdWJtaXQiLCJzdHJvbmciLCJzdWJfdGl0bGUiLCJiciIsInR5cGUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwiZXJyb3IiLCJvbkNoYW5nZSIsInBhZGRpbmciLCJkaXYiLCJmb3JtX2J1dHRvbl93cmFwIiwiYnV0dG9uVHlwZSIsImZpbGxlZCIsImZvcm1fYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/localsignup/_components/Step1.tsx\n"));

/***/ })

});
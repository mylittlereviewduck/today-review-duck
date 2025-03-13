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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SignUp; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/signup.module.css */ \"(app-pages-browser)/./src/app/localsignup/_css/signup.module.css\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/images/logo.svg */ \"(app-pages-browser)/./public/images/logo.svg\");\n/* harmony import */ var _app_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_hooks/useAuth */ \"(app-pages-browser)/./src/app/_hooks/useAuth.ts\");\n/* harmony import */ var _app_hooks_useToast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_hooks/useToast */ \"(app-pages-browser)/./src/app/_hooks/useToast.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_utils_validation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_utils/validation */ \"(app-pages-browser)/./src/app/_utils/validation.ts\");\n/* harmony import */ var _app_components_toast_ToastContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/app/_components/toast/ToastContainer */ \"(app-pages-browser)/./src/app/_components/toast/ToastContainer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import Link from \"next/link\";\nfunction SignUp() {\n    _s();\n    const { login, isPending } = (0,_app_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n    const { addToast } = (0,_app_hooks_useToast__WEBPACK_IMPORTED_MODULE_5__.useToast)();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const [emailError, setEmailError] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(\"\");\n    const isButtonDisabled = !formData.email.trim() || isPending || emailError !== \"\";\n    const handleChange = (e)=>{\n        const { name, value } = e.target;\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n        // 이메일 검증\n        if (name === \"email\") {\n            setEmailError((0,_app_utils_validation__WEBPACK_IMPORTED_MODULE_7__.validateEmail)(value));\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (isButtonDisabled) return;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().page),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().signup_wrap),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().logo_wrap),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        src: _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                        alt: \"logo image\",\n                        loading: \"lazy\",\n                        property: \"public/images/logo.svg\",\n                        width: 69,\n                        height: 51\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_toast_ToastContainer__WEBPACK_IMPORTED_MODULE_8__[\"default\"], {\n                width: \"335px\",\n                top: \"70%\",\n                right: \"50%\",\n                transform: \"translateX(50%)\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/localsignup/_components/SignUp.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(SignUp, \"gGHaXMAW2dP1GW8cfCN4rC9gIJw=\", false, function() {\n    return [\n        _app_hooks_useAuth__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n        _app_hooks_useToast__WEBPACK_IMPORTED_MODULE_5__.useToast\n    ];\n});\n_c = SignUp;\nvar _c;\n$RefreshReg$(_c, \"SignUp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU2lnblVwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNoQjtBQUNzQjtBQUNWO0FBQ007QUFDTDtBQUNZO0FBQ1k7QUFFcEUsZ0NBQWdDO0FBRWpCLFNBQVNROztJQUN0QixNQUFNLEVBQUVDLEtBQUssRUFBRUMsU0FBUyxFQUFFLEdBQUdQLDhEQUFPQTtJQUNwQyxNQUFNLEVBQUVRLFFBQVEsRUFBRSxHQUFHUCw2REFBUUE7SUFDN0IsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBQUVTLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ25FLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNYSxtQkFDSixDQUFDTixTQUFTRSxLQUFLLENBQUNLLElBQUksTUFBTVQsYUFBYU0sZUFBZTtJQUV4RCxNQUFNSSxlQUFlLENBQUNDO1FBQ3BCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ1gsWUFBWSxDQUFDWSxPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0gsS0FBSyxFQUFFQztZQUFNO1FBRWhELFNBQVM7UUFDVCxJQUFJRCxTQUFTLFNBQVM7WUFDcEJMLGNBQWNYLG9FQUFhQSxDQUFDaUI7UUFDOUI7SUFDRjtJQUVBLE1BQU1HLGVBQWUsT0FBT0w7UUFDMUJBLEVBQUVNLGNBQWM7UUFDaEIsSUFBSVQsa0JBQWtCO0lBQ3hCO0lBRUEscUJBQ0UsOERBQUNVO1FBQVFDLFdBQVc3QixvRUFBVzs7MEJBQzdCLDhEQUFDK0I7Z0JBQUlGLFdBQVc3QiwyRUFBa0I7MEJBQ2hDLDRFQUFDaUM7b0JBQUdKLFdBQVc3Qix5RUFBZ0I7OEJBRTdCLDRFQUFDQyxrREFBS0E7d0JBQ0prQyxLQUFLakMsK0RBQU9BO3dCQUNaa0MsS0FBSTt3QkFDSkMsU0FBUTt3QkFDUkMsVUFBVTt3QkFDVkMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7OzswQkFRZCw4REFBQ2pDLDRFQUFjQTtnQkFDYmdDLE9BQU07Z0JBQ05FLEtBQUk7Z0JBQ0pDLE9BQU07Z0JBQ05DLFdBQVU7Ozs7Ozs7Ozs7OztBQUlsQjtHQWxEd0JuQzs7UUFDT0wsMERBQU9BO1FBQ2ZDLHlEQUFRQTs7O0tBRlBJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9jYWxzaWdudXAvX2NvbXBvbmVudHMvU2lnblVwLnRzeD9kNGY0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9zaWdudXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgSW1nTG9nbyBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgdXNlQXV0aCBmcm9tIFwiQC9hcHAvX2hvb2tzL3VzZUF1dGhcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvYXBwL19ob29rcy91c2VUb2FzdFwiO1xuaW1wb3J0IHsgRm9ybUV2ZW50LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdmFsaWRhdGVFbWFpbCB9IGZyb20gXCJAL2FwcC9fdXRpbHMvdmFsaWRhdGlvblwiO1xuaW1wb3J0IFRvYXN0Q29udGFpbmVyIGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy90b2FzdC9Ub2FzdENvbnRhaW5lclwiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuLy8gaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTaWduVXAoKSB7XG4gIGNvbnN0IHsgbG9naW4sIGlzUGVuZGluZyB9ID0gdXNlQXV0aCgpO1xuICBjb25zdCB7IGFkZFRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xuICBjb25zdCBbZW1haWxFcnJvciwgc2V0RW1haWxFcnJvcl0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgaXNCdXR0b25EaXNhYmxlZCA9XG4gICAgIWZvcm1EYXRhLmVtYWlsLnRyaW0oKSB8fCBpc1BlbmRpbmcgfHwgZW1haWxFcnJvciAhPT0gXCJcIjtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB7IG5hbWUsIHZhbHVlIH0gPSBlLnRhcmdldDtcbiAgICBzZXRGb3JtRGF0YSgocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiB2YWx1ZSB9KSk7XG5cbiAgICAvLyDsnbTrqZTsnbwg6rKA7KadXG4gICAgaWYgKG5hbWUgPT09IFwiZW1haWxcIikge1xuICAgICAgc2V0RW1haWxFcnJvcih2YWxpZGF0ZUVtYWlsKHZhbHVlKSk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChlOiBGb3JtRXZlbnQ8SFRNTEZvcm1FbGVtZW50PikgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBpZiAoaXNCdXR0b25EaXNhYmxlZCkgcmV0dXJuO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cF93cmFwfT5cbiAgICAgICAgPGgxIGNsYXNzTmFtZT17c3R5bGVzLmxvZ29fd3JhcH0+XG4gICAgICAgICAgey8qIDxMaW5rIGhyZWY9e1wiLi9cIn0+ICovfVxuICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgc3JjPXtJbWdMb2dvfVxuICAgICAgICAgICAgYWx0PVwibG9nbyBpbWFnZVwiXG4gICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiXG4gICAgICAgICAgICBwcm9wZXJ0eT17XCJwdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCJ9XG4gICAgICAgICAgICB3aWR0aD17Njl9XG4gICAgICAgICAgICBoZWlnaHQ9ezUxfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgey8qIDwvTGluaz4gKi99XG4gICAgICAgIDwvaDE+XG4gICAgICBcblx0XHRcdFxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICB3aWR0aD1cIjMzNXB4XCJcbiAgICAgICAgdG9wPVwiNzAlXCJcbiAgICAgICAgcmlnaHQ9XCI1MCVcIlxuICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGVYKDUwJSlcIlxuICAgICAgLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSW1hZ2UiLCJJbWdMb2dvIiwidXNlQXV0aCIsInVzZVRvYXN0IiwidXNlU3RhdGUiLCJ2YWxpZGF0ZUVtYWlsIiwiVG9hc3RDb250YWluZXIiLCJTaWduVXAiLCJsb2dpbiIsImlzUGVuZGluZyIsImFkZFRvYXN0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwicGFzc3dvcmQiLCJlbWFpbEVycm9yIiwic2V0RW1haWxFcnJvciIsImlzQnV0dG9uRGlzYWJsZWQiLCJ0cmltIiwiaGFuZGxlQ2hhbmdlIiwiZSIsIm5hbWUiLCJ2YWx1ZSIsInRhcmdldCIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWdlIiwiZGl2Iiwic2lnbnVwX3dyYXAiLCJoMSIsImxvZ29fd3JhcCIsInNyYyIsImFsdCIsImxvYWRpbmciLCJwcm9wZXJ0eSIsIndpZHRoIiwiaGVpZ2h0IiwidG9wIiwicmlnaHQiLCJ0cmFuc2Zvcm0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/localsignup/_components/SignUp.tsx\n"));

/***/ })

});
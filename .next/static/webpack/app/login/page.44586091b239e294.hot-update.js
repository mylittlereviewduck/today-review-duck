"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/login/_components/SocialLogin.tsx":
/*!***************************************************!*\
  !*** ./src/app/login/_components/SocialLogin.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SocialLogin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/signup.module.css */ \"(app-pages-browser)/./src/app/login/_css/signup.module.css\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_icon_icon_sns_naver_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../../public/icon/icon-sns-naver.svg */ \"(app-pages-browser)/./public/icon/icon-sns-naver.svg\");\n/* harmony import */ var _public_icon_icon_sns_kakao_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/icon/icon-sns-kakao.svg */ \"(app-pages-browser)/./public/icon/icon-sns-kakao.svg\");\n/* harmony import */ var _public_icon_icon_sns_google_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/icon/icon-sns-google.svg */ \"(app-pages-browser)/./public/icon/icon-sns-google.svg\");\n/* harmony import */ var _public_icon_icon_sns_aple_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../../public/icon/icon-sns-aple.svg */ \"(app-pages-browser)/./public/icon/icon-sns-aple.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction SocialLogin() {\n    _s();\n    const [lastLogin, setLastLogin] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null); // 마지막 로그인한 소셜\n    // 로그인 버튼 클릭 핸들러\n    const handleLogin = (provider)=>{\n        setLastLogin(provider); // 마지막 로그인한 소셜 업데이트\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().sns_list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"naver\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        padding: \"0\",\n                        onClick: ()=>handleLogin(\"naver\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"네이버 소셜 로그인 버튼\",\n                            width: 60,\n                            height: 60,\n                            src: _public_icon_icon_sns_naver_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"kakao\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        padding: \"0\",\n                        onClick: ()=>handleLogin(\"kakao\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"카카오 소셜 로그인 버튼\",\n                            width: 60,\n                            height: 60,\n                            src: _public_icon_icon_sns_kakao_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"google\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        height: \"60px\",\n                        border: true,\n                        borderRadius: \"60px\",\n                        onClick: ()=>handleLogin(\"google\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"구글 소셜 로그인 버튼\",\n                            height: 24,\n                            width: 24,\n                            src: _public_icon_icon_sns_google_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 75,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_7__.Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"apple\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        height: \"60px\",\n                        border: true,\n                        borderRadius: \"60px\",\n                        onClick: ()=>handleLogin(\"apple\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"애플 소셜 로그인 버튼\",\n                            height: 22,\n                            width: 18,\n                            src: _public_icon_icon_sns_aple_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 98,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(SocialLogin, \"gYd/sLPn8BCX5yeQCuPFnDNQD2A=\");\n_c = SocialLogin;\nvar _c;\n$RefreshReg$(_c, \"SocialLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vX2NvbXBvbmVudHMvU29jaWFsTG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDK0M7QUFDZTtBQUNBO0FBQ0U7QUFDSDtBQUM1QjtBQUNpQjtBQUVuQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUdKLCtDQUFRQSxDQUFnQixPQUFPLGNBQWM7SUFFL0UsZ0JBQWdCO0lBQ2hCLE1BQU1LLGNBQWMsQ0FBQ0M7UUFDbkJGLGFBQWFFLFdBQVcsbUJBQW1CO0lBQzdDO0lBRUEscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVdiLHdFQUFlOzswQkFDNUIsOERBQUNlOzBCQUNDLDRFQUFDVCwwREFBT0E7b0JBQ05VLE1BQUs7b0JBQ0xDLFVBQVM7b0JBQ1RDLFdBQVdWLGNBQWM7OEJBRXpCLDRFQUFDVzt3QkFDQ0MsWUFBVzt3QkFDWEMsU0FBUTt3QkFDUkMsU0FBUyxJQUFNWixZQUFZO2tDQUUzQiw0RUFBQ2E7NEJBQ0NDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUsxQix1RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNckIsOERBQUNjOzBCQUNDLDRFQUFDVCwwREFBT0E7b0JBQ05VLE1BQUs7b0JBQ0xDLFVBQVM7b0JBQ1RDLFdBQVdWLGNBQWM7OEJBRXpCLDRFQUFDVzt3QkFDQ0MsWUFBVzt3QkFDWEMsU0FBUTt3QkFDUkMsU0FBUyxJQUFNWixZQUFZO2tDQUUzQiw0RUFBQ2E7NEJBQ0NDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUt6Qix1RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNckIsOERBQUNhOzBCQUNDLDRFQUFDVCwwREFBT0E7b0JBQ05VLE1BQUs7b0JBQ0xDLFVBQVM7b0JBQ1RDLFdBQVdWLGNBQWM7OEJBRXpCLDRFQUFDVzt3QkFDQ0MsWUFBVzt3QkFDWE0sUUFBTzt3QkFDUEUsTUFBTTt3QkFDTkMsY0FBYTt3QkFDYlAsU0FBUyxJQUFNWixZQUFZO2tDQUUzQiw0RUFBQ2E7NEJBQ0NDLEtBQUk7NEJBQ0pFLFFBQVE7NEJBQ1JELE9BQU87NEJBQ1BFLEtBQUt4Qix3RUFBU0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNdEIsOERBQUNZOzBCQUNDLDRFQUFDVCwwREFBT0E7b0JBQ05VLE1BQUs7b0JBQ0xDLFVBQVM7b0JBQ1RDLFdBQVdWLGNBQWM7OEJBRXpCLDRFQUFDVzt3QkFDQ0MsWUFBVzt3QkFDWE0sUUFBTzt3QkFDUEUsTUFBTTt3QkFDTkMsY0FBYTt3QkFDYlAsU0FBUyxJQUFNWixZQUFZO2tDQUUzQiw0RUFBQ2E7NEJBQ0NDLEtBQUk7NEJBQ0pFLFFBQVE7NEJBQ1JELE9BQU87NEJBQ1BFLEtBQUt2QixzRUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU8zQjtHQW5Hd0JHO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbG9naW4vX2NvbXBvbmVudHMvU29jaWFsTG9naW4udHN4PzllMGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9fY3NzL3NpZ251cC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSWNvTmF2ZXIgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ljb24vaWNvbi1zbnMtbmF2ZXIuc3ZnXCI7XG5pbXBvcnQgSWNvS2FrYW8gZnJvbSBcIkAvLi4vLi4vcHVibGljL2ljb24vaWNvbi1zbnMta2FrYW8uc3ZnXCI7XG5pbXBvcnQgSWNvR29vZ2xlIGZyb20gXCJALy4uLy4uL3B1YmxpYy9pY29uL2ljb24tc25zLWdvb2dsZS5zdmdcIjtcbmltcG9ydCBJY29BcHBsZSBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaWNvbi9pY29uLXNucy1hcGxlLnN2Z1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFRvb2x0aXAgfSBmcm9tIFwiQC9hcHAvX2NvbXBvbmVudHMvYXRvbXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU29jaWFsTG9naW4oKSB7XG4gIGNvbnN0IFtsYXN0TG9naW4sIHNldExhc3RMb2dpbl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTsgLy8g66eI7KeA66eJIOuhnOq3uOyduO2VnCDshozshZxcblxuICAvLyDroZzqt7jsnbgg67KE7Yq8IO2BtOumrSDtlbjrk6Trn6xcbiAgY29uc3QgaGFuZGxlTG9naW4gPSAocHJvdmlkZXI6IHN0cmluZykgPT4ge1xuICAgIHNldExhc3RMb2dpbihwcm92aWRlcik7IC8vIOuniOyngOuniSDroZzqt7jsnbjtlZwg7IaM7IWcIOyXheuNsOydtO2KuFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnNuc19saXN0fT5cbiAgICAgIDxsaT5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICB0ZXh0PVwi66eI7KeA66eJ7Jy866GcIOuhnOq3uOyduO2VnCDrsKnrspXsnbTsl5DsmpRcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICBpc1Zpc2libGU9e2xhc3RMb2dpbiA9PT0gXCJuYXZlclwifVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBwYWRkaW5nPVwiMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dpbihcIm5hdmVyXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFsdD1cIuuEpOydtOuyhCDshozshZwg66Gc6re47J24IOuyhO2KvFwiXG4gICAgICAgICAgICAgIHdpZHRoPXs2MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgc3JjPXtJY29OYXZlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvbGk+XG5cbiAgICAgIDxsaT5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICB0ZXh0PVwi66eI7KeA66eJ7Jy866GcIOuhnOq3uOyduO2VnCDrsKnrspXsnbTsl5DsmpRcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICBpc1Zpc2libGU9e2xhc3RMb2dpbiA9PT0gXCJrYWthb1wifVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBwYWRkaW5nPVwiMFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dpbihcImtha2FvXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFsdD1cIuy5tOy5tOyYpCDshozshZwg66Gc6re47J24IOuyhO2KvFwiXG4gICAgICAgICAgICAgIHdpZHRoPXs2MH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXs2MH1cbiAgICAgICAgICAgICAgc3JjPXtJY29LYWthb31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvbGk+XG5cbiAgICAgIDxsaT5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICB0ZXh0PVwi66eI7KeA66eJ7Jy866GcIOuhnOq3uOyduO2VnCDrsKnrspXsnbTsl5DsmpRcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICBpc1Zpc2libGU9e2xhc3RMb2dpbiA9PT0gXCJnb29nbGVcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXG4gICAgICAgICAgICBib3JkZXJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjYwcHhcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9naW4oXCJnb29nbGVcIil9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb25cbiAgICAgICAgICAgICAgYWx0PVwi6rWs6riAIOyGjOyFnCDroZzqt7jsnbgg67KE7Yq8XCJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsyNH1cbiAgICAgICAgICAgICAgd2lkdGg9ezI0fVxuICAgICAgICAgICAgICBzcmM9e0ljb0dvb2dsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvbGk+XG5cbiAgICAgIDxsaT5cbiAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICB0ZXh0PVwi66eI7KeA66eJ7Jy866GcIOuhnOq3uOyduO2VnCDrsKnrspXsnbTsl5DsmpRcIlxuICAgICAgICAgIHBvc2l0aW9uPVwiY2VudGVyXCJcbiAgICAgICAgICBpc1Zpc2libGU9e2xhc3RMb2dpbiA9PT0gXCJhcHBsZVwifVxuICAgICAgICA+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI2MHB4XCJcbiAgICAgICAgICAgIGJvcmRlclxuICAgICAgICAgICAgYm9yZGVyUmFkaXVzPVwiNjBweFwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVMb2dpbihcImFwcGxlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFsdD1cIuyVoO2UjCDshozshZwg66Gc6re47J24IOuyhO2KvFwiXG4gICAgICAgICAgICAgIGhlaWdodD17MjJ9XG4gICAgICAgICAgICAgIHdpZHRoPXsxOH1cbiAgICAgICAgICAgICAgc3JjPXtJY29BcHBsZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvVG9vbHRpcD5cbiAgICAgIDwvbGk+XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJJY29OYXZlciIsIkljb0tha2FvIiwiSWNvR29vZ2xlIiwiSWNvQXBwbGUiLCJ1c2VTdGF0ZSIsIlRvb2x0aXAiLCJTb2NpYWxMb2dpbiIsImxhc3RMb2dpbiIsInNldExhc3RMb2dpbiIsImhhbmRsZUxvZ2luIiwicHJvdmlkZXIiLCJ1bCIsImNsYXNzTmFtZSIsInNuc19saXN0IiwibGkiLCJ0ZXh0IiwicG9zaXRpb24iLCJpc1Zpc2libGUiLCJCdXR0b24iLCJidXR0b25UeXBlIiwicGFkZGluZyIsIm9uQ2xpY2siLCJJY29uIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcmMiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/_components/SocialLogin.tsx\n"));

/***/ })

});
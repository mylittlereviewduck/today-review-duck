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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SocialLogin; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/signup.module.css */ \"(app-pages-browser)/./src/app/login/_css/signup.module.css\");\n/* harmony import */ var _css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_icon_icon_sns_naver_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../../public/icon/icon-sns-naver.svg */ \"(app-pages-browser)/./public/icon/icon-sns-naver.svg\");\n/* harmony import */ var _public_icon_icon_sns_kakao_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/icon/icon-sns-kakao.svg */ \"(app-pages-browser)/./public/icon/icon-sns-kakao.svg\");\n/* harmony import */ var _public_icon_icon_sns_google_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/icon/icon-sns-google.svg */ \"(app-pages-browser)/./public/icon/icon-sns-google.svg\");\n/* harmony import */ var _public_icon_icon_sns_aple_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../../public/icon/icon-sns-aple.svg */ \"(app-pages-browser)/./public/icon/icon-sns-aple.svg\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction SocialLogin() {\n    _s();\n    const [lastLogin, setLastLogin] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null); // 마지막 로그인한 소셜\n    // 로그인 버튼 클릭 핸들러\n    const handleLogin = (provider)=>{\n        setLastLogin(provider); // 마지막 로그인한 소셜 업데이트\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default().sns_list),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"naver\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        padding: \"0\",\n                        onClick: ()=>handleLogin(\"naver\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"네이버 소셜 로그인 버튼\",\n                            width: 60,\n                            height: 60,\n                            src: _public_icon_icon_sns_naver_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 25,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"kakao\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        padding: \"0\",\n                        onClick: ()=>handleLogin(\"kakao\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"카카오 소셜 로그인 버튼\",\n                            width: 60,\n                            height: 60,\n                            src: _public_icon_icon_sns_kakao_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 51,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"google\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        height: \"60px\",\n                        border: true,\n                        borderRadius: \"60px\",\n                        onClick: ()=>handleLogin(\"google\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"구글 소셜 로그인 버튼\",\n                            height: 24,\n                            width: 24,\n                            src: _public_icon_icon_sns_google_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 61,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                    text: \"마지막으로 로그인한 방법이에요\",\n                    position: \"center\",\n                    isVisible: lastLogin === \"apple\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        buttonType: \"button\",\n                        height: \"60px\",\n                        border: true,\n                        borderRadius: \"60px\",\n                        onClick: ()=>handleLogin(\"apple\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Icon, {\n                            alt: \"애플 소셜 로그인 버튼\",\n                            height: 22,\n                            width: 18,\n                            src: _public_icon_icon_sns_aple_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                            lineNumber: 97,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                    lineNumber: 85,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/login/_components/SocialLogin.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(SocialLogin, \"gYd/sLPn8BCX5yeQCuPFnDNQD2A=\");\n_c = SocialLogin;\nvar _c;\n$RefreshReg$(_c, \"SocialLogin\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbG9naW4vX2NvbXBvbmVudHMvU29jaWFsTG9naW4udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNlO0FBQ0E7QUFDRTtBQUNIO0FBQzVCO0FBRWxCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLFdBQVdDLGFBQWEsR0FBR0gsK0NBQVFBLENBQWdCLE9BQU8sY0FBYztJQUUvRSxnQkFBZ0I7SUFDaEIsTUFBTUksY0FBYyxDQUFDQztRQUNuQkYsYUFBYUUsV0FBVyxtQkFBbUI7SUFDN0M7SUFFQSxxQkFDRSw4REFBQ0M7UUFBR0MsV0FBV1osd0VBQWU7OzBCQUM1Qiw4REFBQ2M7MEJBQ0MsNEVBQUNDO29CQUNDQyxNQUFLO29CQUNMQyxVQUFTO29CQUNUQyxXQUFXWCxjQUFjOzhCQUV6Qiw0RUFBQ1k7d0JBQ0NDLFlBQVc7d0JBQ1hDLFNBQVE7d0JBQ1JDLFNBQVMsSUFBTWIsWUFBWTtrQ0FFM0IsNEVBQUNjOzRCQUNDQyxLQUFJOzRCQUNKQyxPQUFPOzRCQUNQQyxRQUFROzRCQUNSQyxLQUFLMUIsdUVBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXJCLDhEQUFDYTswQkFDQyw0RUFBQ0M7b0JBQ0NDLE1BQUs7b0JBQ0xDLFVBQVM7b0JBQ1RDLFdBQVdYLGNBQWM7OEJBRXpCLDRFQUFDWTt3QkFDQ0MsWUFBVzt3QkFDWEMsU0FBUTt3QkFDUkMsU0FBUyxJQUFNYixZQUFZO2tDQUUzQiw0RUFBQ2M7NEJBQ0NDLEtBQUk7NEJBQ0pDLE9BQU87NEJBQ1BDLFFBQVE7NEJBQ1JDLEtBQUt6Qix1RUFBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFNckIsOERBQUNZOzBCQUNDLDRFQUFDQztvQkFDQ0MsTUFBSztvQkFDTEMsVUFBUztvQkFDVEMsV0FBV1gsY0FBYzs4QkFFekIsNEVBQUNZO3dCQUNDQyxZQUFXO3dCQUNYTSxRQUFPO3dCQUNQRSxNQUFNO3dCQUNOQyxjQUFhO3dCQUNiUCxTQUFTLElBQU1iLFlBQVk7a0NBRTNCLDRFQUFDYzs0QkFDQ0MsS0FBSTs0QkFDSkUsUUFBUTs0QkFDUkQsT0FBTzs0QkFDUEUsS0FBS3hCLHdFQUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQU10Qiw4REFBQ1c7MEJBQ0MsNEVBQUNDO29CQUNDQyxNQUFLO29CQUNMQyxVQUFTO29CQUNUQyxXQUFXWCxjQUFjOzhCQUV6Qiw0RUFBQ1k7d0JBQ0NDLFlBQVc7d0JBQ1hNLFFBQU87d0JBQ1BFLE1BQU07d0JBQ05DLGNBQWE7d0JBQ2JQLFNBQVMsSUFBTWIsWUFBWTtrQ0FFM0IsNEVBQUNjOzRCQUNDQyxLQUFJOzRCQUNKRSxRQUFROzRCQUNSRCxPQUFPOzRCQUNQRSxLQUFLdkIsc0VBQVFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0I7R0FuR3dCRTtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xvZ2luL19jb21wb25lbnRzL1NvY2lhbExvZ2luLnRzeD85ZTBlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9zaWdudXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IEljb05hdmVyIGZyb20gXCJALy4uLy4uL3B1YmxpYy9pY29uL2ljb24tc25zLW5hdmVyLnN2Z1wiO1xuaW1wb3J0IEljb0tha2FvIGZyb20gXCJALy4uLy4uL3B1YmxpYy9pY29uL2ljb24tc25zLWtha2FvLnN2Z1wiO1xuaW1wb3J0IEljb0dvb2dsZSBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaWNvbi9pY29uLXNucy1nb29nbGUuc3ZnXCI7XG5pbXBvcnQgSWNvQXBwbGUgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ljb24vaWNvbi1zbnMtYXBsZS5zdmdcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNvY2lhbExvZ2luKCkge1xuICBjb25zdCBbbGFzdExvZ2luLCBzZXRMYXN0TG9naW5dID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7IC8vIOuniOyngOuniSDroZzqt7jsnbjtlZwg7IaM7IWcXG5cbiAgLy8g66Gc6re47J24IOuyhO2KvCDtgbTrpq0g7ZW465Ok65+sXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gKHByb3ZpZGVyOiBzdHJpbmcpID0+IHtcbiAgICBzZXRMYXN0TG9naW4ocHJvdmlkZXIpOyAvLyDrp4jsp4Drp4kg66Gc6re47J247ZWcIOyGjOyFnCDsl4XrjbDsnbTtirhcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5zbnNfbGlzdH0+XG4gICAgICA8bGk+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgdGV4dD1cIuuniOyngOunieycvOuhnCDroZzqt7jsnbjtlZwg67Cp67KV7J207JeQ7JqUXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgaXNWaXNpYmxlPXtsYXN0TG9naW4gPT09IFwibmF2ZXJcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgcGFkZGluZz1cIjBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9naW4oXCJuYXZlclwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBhbHQ9XCLrhKTsnbTrsoQg7IaM7IWcIOuhnOq3uOyduCDrsoTtirxcIlxuICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgIHNyYz17SWNvTmF2ZXJ9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGk+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgdGV4dD1cIuuniOyngOunieycvOuhnCDroZzqt7jsnbjtlZwg67Cp67KV7J207JeQ7JqUXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgaXNWaXNpYmxlPXtsYXN0TG9naW4gPT09IFwia2FrYW9cIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgcGFkZGluZz1cIjBcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9naW4oXCJrYWthb1wiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBhbHQ9XCLsubTsubTsmKQg7IaM7IWcIOuhnOq3uOyduCDrsoTtirxcIlxuICAgICAgICAgICAgICB3aWR0aD17NjB9XG4gICAgICAgICAgICAgIGhlaWdodD17NjB9XG4gICAgICAgICAgICAgIHNyYz17SWNvS2FrYW99XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGk+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgdGV4dD1cIuuniOyngOunieycvOuhnCDroZzqt7jsnbjtlZwg67Cp67KV7J207JeQ7JqUXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgaXNWaXNpYmxlPXtsYXN0TG9naW4gPT09IFwiZ29vZ2xlXCJ9XG4gICAgICAgID5cbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25UeXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjYwcHhcIlxuICAgICAgICAgICAgYm9yZGVyXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM9XCI2MHB4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUxvZ2luKFwiZ29vZ2xlXCIpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICAgIGFsdD1cIuq1rOq4gCDshozshZwg66Gc6re47J24IOuyhO2KvFwiXG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XG4gICAgICAgICAgICAgIHdpZHRoPXsyNH1cbiAgICAgICAgICAgICAgc3JjPXtJY29Hb29nbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2xpPlxuXG4gICAgICA8bGk+XG4gICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgdGV4dD1cIuuniOyngOunieycvOuhnCDroZzqt7jsnbjtlZwg67Cp67KV7J207JeQ7JqUXCJcbiAgICAgICAgICBwb3NpdGlvbj1cImNlbnRlclwiXG4gICAgICAgICAgaXNWaXNpYmxlPXtsYXN0TG9naW4gPT09IFwiYXBwbGVcIn1cbiAgICAgICAgPlxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgaGVpZ2h0PVwiNjBweFwiXG4gICAgICAgICAgICBib3JkZXJcbiAgICAgICAgICAgIGJvcmRlclJhZGl1cz1cIjYwcHhcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTG9naW4oXCJhcHBsZVwiKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBhbHQ9XCLslaDtlIwg7IaM7IWcIOuhnOq3uOyduCDrsoTtirxcIlxuICAgICAgICAgICAgICBoZWlnaHQ9ezIyfVxuICAgICAgICAgICAgICB3aWR0aD17MTh9XG4gICAgICAgICAgICAgIHNyYz17SWNvQXBwbGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICA8L2xpPlxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiSWNvTmF2ZXIiLCJJY29LYWthbyIsIkljb0dvb2dsZSIsIkljb0FwcGxlIiwidXNlU3RhdGUiLCJTb2NpYWxMb2dpbiIsImxhc3RMb2dpbiIsInNldExhc3RMb2dpbiIsImhhbmRsZUxvZ2luIiwicHJvdmlkZXIiLCJ1bCIsImNsYXNzTmFtZSIsInNuc19saXN0IiwibGkiLCJUb29sdGlwIiwidGV4dCIsInBvc2l0aW9uIiwiaXNWaXNpYmxlIiwiQnV0dG9uIiwiYnV0dG9uVHlwZSIsInBhZGRpbmciLCJvbkNsaWNrIiwiSWNvbiIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3JjIiwiYm9yZGVyIiwiYm9yZGVyUmFkaXVzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/login/_components/SocialLogin.tsx\n"));

/***/ })

});
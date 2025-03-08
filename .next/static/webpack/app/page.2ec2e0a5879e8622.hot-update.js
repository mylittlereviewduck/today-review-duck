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

/***/ "(app-pages-browser)/./src/app/main/_components/BannerSearch.tsx":
/*!***************************************************!*\
  !*** ./src/app/main/_components/BannerSearch.tsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/bannersearch.module.css */ \"(app-pages-browser)/./src/app/main/_css/bannersearch.module.css\");\n/* harmony import */ var _css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BannerSearch() {\n    _s();\n    const [, setOnSearchPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.onSearchPageState);\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const searchHandler = (e)=>{\n        if (e.key === \"Enter\" && searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n        }\n        if (e.key === \"Backspace\" || searchValue === \"\") {\n            console.log(\"검색 값 초기화\");\n            setOnSearchPage(false);\n        }\n    };\n    const searchButtonHandler = ()=>{\n        if (searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().search_input_wrap),\n        onClick: ()=>setIsOpen((prev)=>!prev),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Search, {\n                value: searchValue,\n                onChange: (e)=>setSearchValue(e.target.value),\n                onKeyDown: (e)=>searchHandler(e),\n                onClick: ()=>searchButtonHandler(),\n                placeholder: \"어떤 리뷰가 궁금하신가요?\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                margin: \"70px 0 0 0\",\n                isOpen: isOpen,\n                onClose: ()=>setIsOpen(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().list_wrap),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().list_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"최근 검색어\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"최근 검색 기록이 없어요\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"최근 검색 기록이 없어요\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 54,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 53,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"최근 검색 기록이 없어요\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 57,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 8\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().list_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"인기 검색어\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 62,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"현재 인기 있는 검색어에요\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 63,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"1 dnlr rjatordj \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 66,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 65,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"2 dnlr rjatordj 검색어가 긴경우 두줄이상 이클립스 \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 69,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 68,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                children: \"3 dnlr rjatordj \"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 72,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 71,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                            lineNumber: 61,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(BannerSearch, \"yKIhusHeL2J5goZ4LjSrWNHy0Ug=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = BannerSearch;\nvar _c;\n$RefreshReg$(_c, \"BannerSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbi9fY29tcG9uZW50cy9CYW5uZXJTZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ2I7QUFDbUI7QUFDMUI7QUFDaUI7QUFFbkMsU0FBU007O0lBQ3RCLE1BQU0sR0FBR0MsZ0JBQWdCLEdBQUdOLHNEQUFjQSxDQUFDSSwwREFBaUJBO0lBQzVELE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFckMsTUFBTVEsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxXQUFXTixnQkFBZ0IsSUFBSTtZQUMzQ08sUUFBUUMsR0FBRyxDQUFDLFVBQVVSO1lBQ3RCRCxnQkFBZ0I7UUFDbEI7UUFFQSxJQUFJTSxFQUFFQyxHQUFHLEtBQUssZUFBZU4sZ0JBQWdCLElBQUk7WUFDL0NPLFFBQVFDLEdBQUcsQ0FBQztZQUNaVCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUNBLE1BQU1VLHNCQUFzQjtRQUMxQixJQUFJVCxnQkFBZ0IsSUFBSTtZQUN0Qk8sUUFBUUMsR0FBRyxDQUFDLFVBQVVSO1lBQ3RCRCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDVztRQUNDQyxXQUFXbkIsdUZBQXdCO1FBQ25DcUIsU0FBUyxJQUFNVixVQUFVLENBQUNXLE9BQVMsQ0FBQ0E7OzBCQUVwQyw4REFBQ25CLHlEQUFNQTtnQkFDTG9CLE9BQU9mO2dCQUNQZ0IsVUFBVSxDQUFDWCxJQUFNSixlQUFlSSxFQUFFWSxNQUFNLENBQUNGLEtBQUs7Z0JBQzlDRyxXQUFXLENBQUNiLElBQU1ELGNBQWNDO2dCQUNoQ1EsU0FBUyxJQUFNSjtnQkFDZlUsYUFBWTs7Ozs7OzBCQUVkLDhEQUFDekIsMkRBQVFBO2dCQUNQMEIsUUFBTztnQkFDUGxCLFFBQVFBO2dCQUNSbUIsU0FBUyxJQUFNbEIsVUFBVTswQkFFekIsNEVBQUNPO29CQUFJQyxXQUFXbkIsK0VBQWdCOztzQ0FDOUIsOERBQUNrQjs0QkFBSUMsV0FBV25CLDhFQUFlOzs4Q0FDN0IsOERBQUNnQzs4Q0FBTzs7Ozs7OzhDQUNSLDhEQUFDQzs4Q0FBSzs7Ozs7OzhDQUNOLDhEQUFDQzs7c0RBQ0MsOERBQUNDO3NEQUNDLDRFQUFDRjswREFBSzs7Ozs7Ozs7Ozs7c0RBRWYsOERBQUNFO3NEQUNRLDRFQUFDRjswREFBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSVosOERBQUNmOzRCQUFJQyxXQUFXbkIsOEVBQWU7OzhDQUM3Qiw4REFBQ2dDOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNDOzhDQUFLOzs7Ozs7OENBQ04sOERBQUNHOztzREFDQyw4REFBQ0Q7c0RBQ0MsNEVBQUNGOzBEQUFLOzs7Ozs7Ozs7OztzREFFUiw4REFBQ0U7c0RBQ0MsNEVBQUNGOzBEQUFLOzs7Ozs7Ozs7OztzREFFUiw4REFBQ0U7c0RBQ0MsNEVBQUNGOzBEQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUXRCO0dBeEV3QjNCOztRQUNNTCxrREFBY0E7OztLQURwQksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYWluL19jb21wb25lbnRzL0Jhbm5lclNlYXJjaC50c3g/OTI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL19jc3MvYmFubmVyc2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgRHJvcERvd24sIFNlYXJjaCB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG9uU2VhcmNoUGFnZVN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyU2VhcmNoKCkge1xuICBjb25zdCBbLCBzZXRPblNlYXJjaFBhZ2VdID0gdXNlUmVjb2lsU3RhdGUob25TZWFyY2hQYWdlU3RhdGUpO1xuICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IHVzZVN0YXRlPHN0cmluZz4oXCJcIik7XG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgc2VhcmNoSGFuZGxlciA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgc2VhcmNoVmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi6rKA7IOJIOyLpO2WiTpcIiwgc2VhcmNoVmFsdWUpO1xuICAgICAgc2V0T25TZWFyY2hQYWdlKHRydWUpO1xuICAgIH1cblxuICAgIGlmIChlLmtleSA9PT0gXCJCYWNrc3BhY2VcIiB8fCBzZWFyY2hWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCLqsoDsg4kg6rCSIOy0iOq4sO2ZlFwiKTtcbiAgICAgIHNldE9uU2VhcmNoUGFnZShmYWxzZSk7XG4gICAgfVxuICB9O1xuICBjb25zdCBzZWFyY2hCdXR0b25IYW5kbGVyID0gKCkgPT4ge1xuICAgIGlmIChzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCLqsoDsg4kg7Iuk7ZaJOlwiLCBzZWFyY2hWYWx1ZSk7XG4gICAgICBzZXRPblNlYXJjaFBhZ2UodHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoX2lucHV0X3dyYXB9XG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc09wZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICA+XG4gICAgICA8U2VhcmNoXG4gICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRTZWFyY2hWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgIG9uS2V5RG93bj17KGUpID0+IHNlYXJjaEhhbmRsZXIoZSl9XG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNlYXJjaEJ1dHRvbkhhbmRsZXIoKX1cbiAgICAgICAgcGxhY2Vob2xkZXI9XCLslrTrlqQg66as67ew6rCAIOq2geq4iO2VmOyLoOqwgOyalD9cIlxuICAgICAgLz5cbiAgICAgIDxEcm9wRG93blxuICAgICAgICBtYXJnaW49XCI3MHB4IDAgMCAwXCJcbiAgICAgICAgaXNPcGVuPXtpc09wZW59XG4gICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF93cmFwfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfYm94fT5cbiAgICAgICAgICAgIDxzdHJvbmc+7LWc6re8IOqygOyDieyWtDwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4+7LWc6re8IOqygOyDiSDquLDroZ3snbQg7JeG7Ja07JqUPC9zcGFuPlxuICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4+7LWc6re8IOqygOyDiSDquLDroZ3snbQg7JeG7Ja07JqUPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuXHRcdFx0XHRcdFx0XHQ8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4+7LWc6re8IOqygOyDiSDquLDroZ3snbQg7JeG7Ja07JqUPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfYm94fT5cbiAgICAgICAgICAgIDxzdHJvbmc+7J246riwIOqygOyDieyWtDwvc3Ryb25nPlxuICAgICAgICAgICAgPHNwYW4+7ZiE7J6sIOyduOq4sCDsnojripQg6rKA7IOJ7Ja07JeQ7JqUPC9zcGFuPlxuICAgICAgICAgICAgPG9sPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4+MSBkbmxyIHJqYXRvcmRqIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxzcGFuPjIgZG5sciByamF0b3JkaiDqsoDsg4nslrTqsIAg6ri06rK97JqwIOuRkOykhOydtOyDgSDsnbTtgbTrpr3siqQgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPHNwYW4+MyBkbmxyIHJqYXRvcmRqIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvb2w+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Ecm9wRG93bj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSZWNvaWxTdGF0ZSIsIkRyb3BEb3duIiwiU2VhcmNoIiwidXNlU3RhdGUiLCJvblNlYXJjaFBhZ2VTdGF0ZSIsIkJhbm5lclNlYXJjaCIsInNldE9uU2VhcmNoUGFnZSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWFyY2hIYW5kbGVyIiwiZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hCdXR0b25IYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VhcmNoX2lucHV0X3dyYXAiLCJvbkNsaWNrIiwicHJldiIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJwbGFjZWhvbGRlciIsIm1hcmdpbiIsIm9uQ2xvc2UiLCJsaXN0X3dyYXAiLCJsaXN0X2JveCIsInN0cm9uZyIsInNwYW4iLCJ1bCIsImxpIiwib2wiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/main/_components/BannerSearch.tsx\n"));

/***/ })

});
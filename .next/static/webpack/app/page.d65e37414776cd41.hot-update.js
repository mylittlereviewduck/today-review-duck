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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/bannersearch.module.css */ \"(app-pages-browser)/./src/app/main/_css/bannersearch.module.css\");\n/* harmony import */ var _css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { useRouter } from \"next/navigation\";\nfunction BannerSearch() {\n    _s();\n    const [, setOnSearchPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.onSearchPageState);\n    const router = useRouter();\n    const [searchHistory, setSearchHistory] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)([]);\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const searchHandler = (e)=>{\n        if (e.key === \"Enter\" && searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n            resetSearch();\n        }\n        if (e.key === \"Backspace\" || searchValue === \"\") {\n            console.log(\"검색 값 초기화\");\n            setOnSearchPage(false);\n        }\n    };\n    const searchButtonHandler = ()=>{\n        if (!searchValue.trim()) return;\n        console.log(\"검색 실행:\", searchValue);\n        resetSearch();\n    };\n    const handleReSearch = (term)=>{\n        setSearchValue(term);\n        searchButtonHandler();\n    };\n    //초기화 함수\n    const resetSearch = ()=>{\n        setOnSearchPage(true);\n        // 검색어 기록 추가 (중복 방지)\n        setSearchHistory((prev)=>prev.includes(searchValue) ? prev : [\n                searchValue,\n                ...prev\n            ]);\n        //초기화\n        setIsOpen(false);\n        setSearchValue(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().search_input_wrap),\n        onClick: ()=>setIsOpen((prev)=>!prev),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Search, {\n                value: searchValue,\n                onChange: (e)=>setSearchValue(e.target.value),\n                onKeyDown: (e)=>searchHandler(e),\n                onClick: ()=>searchButtonHandler(),\n                placeholder: \"어떤 리뷰가 궁금하신가요?\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                margin: \"70px 0 0 0\",\n                isOpen: isOpen,\n                onClose: ()=>setIsOpen(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().list_wrap),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().list_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"최근 검색어\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"최근 검색 기록이 없어요\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 74,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                    children: searchHistory.map((term, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            onClick: ()=>handleReSearch(term),\n                                            children: term\n                                        }, index, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 77,\n                                            columnNumber: 17\n                                        }, this))\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_css_bannersearch_module_css__WEBPACK_IMPORTED_MODULE_1___default().list_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                                    children: \"인기 검색어\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    children: \"현재 인기 있는 검색어에요\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ol\", {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                onClick: ()=>{},\n                                                children: [\n                                                    \"1 dnlr rjatordj\",\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 88,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 87,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                onClick: ()=>{},\n                                                children: [\n                                                    \"2 dnlr rjatordj 검색어가 긴경우 두줄이상 이클립스\",\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 93,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 92,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                                type: \"button\",\n                                                onClick: ()=>{},\n                                                children: [\n                                                    \"3 dnlr rjatordj\",\n                                                    \" \"\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                                lineNumber: 98,\n                                                columnNumber: 17\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                            lineNumber: 97,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                                    lineNumber: 86,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                            lineNumber: 83,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n        lineNumber: 55,\n        columnNumber: 5\n    }, this);\n}\n_s(BannerSearch, \"wzqrGTDbkVqVJYrmH5aeEysXAbo=\", true, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = BannerSearch;\nvar _c;\n$RefreshReg$(_c, \"BannerSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbi9fY29tcG9uZW50cy9CYW5uZXJTZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ3FEO0FBQ2I7QUFDbUI7QUFDMUI7QUFDaUI7QUFDbEQsK0NBQStDO0FBRWhDLFNBQVNNOztJQUN0QixNQUFNLEdBQUdDLGdCQUFnQixHQUFHTixzREFBY0EsQ0FBQ0ksMERBQWlCQTtJQUM1RCxNQUFNRyxTQUFTQztJQUNmLE1BQU0sQ0FBQ0MsZUFBZUMsaUJBQWlCLEdBQUdQLCtDQUFRQSxDQUFXLEVBQUU7SUFDL0QsTUFBTSxDQUFDUSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFTO0lBQ3ZELE1BQU0sQ0FBQ1UsUUFBUUMsVUFBVSxHQUFHWCwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNWSxnQkFBZ0IsQ0FBQ0M7UUFDckIsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFdBQVdOLGdCQUFnQixJQUFJO1lBQzNDTyxRQUFRQyxHQUFHLENBQUMsVUFBVVI7WUFDdEJMLGdCQUFnQjtZQUVoQmM7UUFDRjtRQUVBLElBQUlKLEVBQUVDLEdBQUcsS0FBSyxlQUFlTixnQkFBZ0IsSUFBSTtZQUMvQ08sUUFBUUMsR0FBRyxDQUFDO1lBQ1piLGdCQUFnQjtRQUNsQjtJQUNGO0lBQ0EsTUFBTWUsc0JBQXNCO1FBQzFCLElBQUksQ0FBQ1YsWUFBWVcsSUFBSSxJQUFJO1FBRXpCSixRQUFRQyxHQUFHLENBQUMsVUFBVVI7UUFDdEJTO0lBQ0Y7SUFFQSxNQUFNRyxpQkFBaUIsQ0FBQ0M7UUFDdEJaLGVBQWVZO1FBQ2ZIO0lBQ0Y7SUFFQSxRQUFRO0lBQ1IsTUFBTUQsY0FBYztRQUNsQmQsZ0JBQWdCO1FBQ2hCLG9CQUFvQjtRQUNwQkksaUJBQWlCLENBQUNlLE9BQ2hCQSxLQUFLQyxRQUFRLENBQUNmLGVBQWVjLE9BQU87Z0JBQUNkO21CQUFnQmM7YUFBSztRQUc1RCxLQUFLO1FBQ0xYLFVBQVU7UUFDVkYsZUFBZTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDZTtRQUNDQyxXQUFXN0IsdUZBQXdCO1FBQ25DK0IsU0FBUyxJQUFNaEIsVUFBVSxDQUFDVyxPQUFTLENBQUNBOzswQkFFcEMsOERBQUN2Qix5REFBTUE7Z0JBQ0w2QixPQUFPcEI7Z0JBQ1BxQixVQUFVLENBQUNoQixJQUFNSixlQUFlSSxFQUFFaUIsTUFBTSxDQUFDRixLQUFLO2dCQUM5Q0csV0FBVyxDQUFDbEIsSUFBTUQsY0FBY0M7Z0JBQ2hDYyxTQUFTLElBQU1UO2dCQUNmYyxhQUFZOzs7Ozs7MEJBRWQsOERBQUNsQywyREFBUUE7Z0JBQ1BtQyxRQUFPO2dCQUNQdkIsUUFBUUE7Z0JBQ1J3QixTQUFTLElBQU12QixVQUFVOzBCQUV6Qiw0RUFBQ2E7b0JBQUlDLFdBQVc3QiwrRUFBZ0I7O3NDQUM5Qiw4REFBQzRCOzRCQUFJQyxXQUFXN0IsOEVBQWU7OzhDQUM3Qiw4REFBQ3lDOzhDQUFPOzs7Ozs7OENBQ1IsOERBQUNDOzhDQUFLOzs7Ozs7OENBQ04sOERBQUNDOzhDQUNFakMsY0FBY2tDLEdBQUcsQ0FBQyxDQUFDbkIsTUFBTW9CLHNCQUN4Qiw4REFBQ0M7NENBQWVmLFNBQVMsSUFBTVAsZUFBZUM7c0RBQzNDQTsyQ0FETW9COzs7Ozs7Ozs7Ozs7Ozs7O3NDQU1mLDhEQUFDakI7NEJBQUlDLFdBQVc3Qiw4RUFBZTs7OENBQzdCLDhEQUFDeUM7OENBQU87Ozs7Ozs4Q0FDUiw4REFBQ0M7OENBQUs7Ozs7Ozs4Q0FDTiw4REFBQ0s7O3NEQUNDLDhEQUFDRDtzREFDQyw0RUFBQ0U7Z0RBQU9DLE1BQUs7Z0RBQVNsQixTQUFTLEtBQU87O29EQUFHO29EQUN2Qjs7Ozs7Ozs7Ozs7O3NEQUdwQiw4REFBQ2U7c0RBQ0MsNEVBQUNFO2dEQUFPQyxNQUFLO2dEQUFTbEIsU0FBUyxLQUFPOztvREFBRztvREFDSjs7Ozs7Ozs7Ozs7O3NEQUd2Qyw4REFBQ2U7c0RBQ0MsNEVBQUNFO2dEQUFPQyxNQUFLO2dEQUFTbEIsU0FBUyxLQUFPOztvREFBRztvREFDdkI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBU2xDO0dBbkd3QnpCOztRQUNNTCxrREFBY0E7OztLQURwQksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9tYWluL19jb21wb25lbnRzL0Jhbm5lclNlYXJjaC50c3g/OTI0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL19jc3MvYmFubmVyc2VhcmNoLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgRHJvcERvd24sIFNlYXJjaCB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IG9uU2VhcmNoUGFnZVN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQmFubmVyU2VhcmNoKCkge1xuICBjb25zdCBbLCBzZXRPblNlYXJjaFBhZ2VdID0gdXNlUmVjb2lsU3RhdGUob25TZWFyY2hQYWdlU3RhdGUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3NlYXJjaEhpc3RvcnksIHNldFNlYXJjaEhpc3RvcnldID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIHNlYXJjaFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuqygOyDiSDsi6Ttlok6XCIsIHNlYXJjaFZhbHVlKTtcbiAgICAgIHNldE9uU2VhcmNoUGFnZSh0cnVlKTtcblxuICAgICAgcmVzZXRTZWFyY2goKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIgfHwgc2VhcmNoVmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi6rKA7IOJIOqwkiDstIjquLDtmZRcIik7XG4gICAgICBzZXRPblNlYXJjaFBhZ2UoZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2VhcmNoQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICBpZiAoIXNlYXJjaFZhbHVlLnRyaW0oKSkgcmV0dXJuO1xuXG4gICAgY29uc29sZS5sb2coXCLqsoDsg4kg7Iuk7ZaJOlwiLCBzZWFyY2hWYWx1ZSk7XG4gICAgcmVzZXRTZWFyY2goKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVSZVNlYXJjaCA9ICh0ZXJtOiBzdHJpbmcpID0+IHtcbiAgICBzZXRTZWFyY2hWYWx1ZSh0ZXJtKTtcbiAgICBzZWFyY2hCdXR0b25IYW5kbGVyKCk7XG4gIH07XG5cbiAgLy/stIjquLDtmZQg7ZWo7IiYXG4gIGNvbnN0IHJlc2V0U2VhcmNoID0gKCkgPT4ge1xuICAgIHNldE9uU2VhcmNoUGFnZSh0cnVlKTtcbiAgICAvLyDqsoDsg4nslrQg6riw66GdIOy2lOqwgCAo7KSR67O1IOuwqeyngClcbiAgICBzZXRTZWFyY2hIaXN0b3J5KChwcmV2KSA9PlxuICAgICAgcHJldi5pbmNsdWRlcyhzZWFyY2hWYWx1ZSkgPyBwcmV2IDogW3NlYXJjaFZhbHVlLCAuLi5wcmV2XVxuICAgICk7XG5cbiAgICAvL+y0iOq4sO2ZlFxuICAgIHNldElzT3BlbihmYWxzZSk7XG4gICAgc2V0U2VhcmNoVmFsdWUoXCJcIik7XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy5zZWFyY2hfaW5wdXRfd3JhcH1cbiAgICAgIG9uQ2xpY2s9eygpID0+IHNldElzT3BlbigocHJldikgPT4gIXByZXYpfVxuICAgID5cbiAgICAgIDxTZWFyY2hcbiAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gc2VhcmNoSGFuZGxlcihlKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2VhcmNoQnV0dG9uSGFuZGxlcigpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuyWtOuWpCDrpqzrt7DqsIAg6raB6riI7ZWY7Iug6rCA7JqUP1wiXG4gICAgICAvPlxuICAgICAgPERyb3BEb3duXG4gICAgICAgIG1hcmdpbj1cIjcwcHggMCAwIDBcIlxuICAgICAgICBpc09wZW49e2lzT3Blbn1cbiAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNPcGVuKGZhbHNlKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0X3dyYXB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9ib3h9PlxuICAgICAgICAgICAgPHN0cm9uZz7stZzqt7wg6rKA7IOJ7Ja0PC9zdHJvbmc+XG4gICAgICAgICAgICA8c3Bhbj7stZzqt7wg6rKA7IOJIOq4sOuhneydtCDsl4bslrTsmpQ8L3NwYW4+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtzZWFyY2hIaXN0b3J5Lm1hcCgodGVybSwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgICA8bGkga2V5PXtpbmRleH0gb25DbGljaz17KCkgPT4gaGFuZGxlUmVTZWFyY2godGVybSl9PlxuICAgICAgICAgICAgICAgICAge3Rlcm19XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubGlzdF9ib3h9PlxuICAgICAgICAgICAgPHN0cm9uZz7snbjquLAg6rKA7IOJ7Ja0PC9zdHJvbmc+XG4gICAgICAgICAgICA8c3Bhbj7tmITsnqwg7J246riwIOyeiOuKlCDqsoDsg4nslrTsl5DsmpQ8L3NwYW4+XG4gICAgICAgICAgICA8b2w+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7fX0+XG4gICAgICAgICAgICAgICAgICAxIGRubHIgcmphdG9yZGp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB7fX0+XG4gICAgICAgICAgICAgICAgICAyIGRubHIgcmphdG9yZGog6rKA7IOJ7Ja06rCAIOq4tOqyveyasCDrkZDspITsnbTsg4Eg7J207YG066a97Iqke1wiIFwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4ge319PlxuICAgICAgICAgICAgICAgICAgMyBkbmxyIHJqYXRvcmRqe1wiIFwifVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9vbD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlY29pbFN0YXRlIiwiRHJvcERvd24iLCJTZWFyY2giLCJ1c2VTdGF0ZSIsIm9uU2VhcmNoUGFnZVN0YXRlIiwiQmFubmVyU2VhcmNoIiwic2V0T25TZWFyY2hQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwic2VhcmNoSGlzdG9yeSIsInNldFNlYXJjaEhpc3RvcnkiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwiaXNPcGVuIiwic2V0SXNPcGVuIiwic2VhcmNoSGFuZGxlciIsImUiLCJrZXkiLCJjb25zb2xlIiwibG9nIiwicmVzZXRTZWFyY2giLCJzZWFyY2hCdXR0b25IYW5kbGVyIiwidHJpbSIsImhhbmRsZVJlU2VhcmNoIiwidGVybSIsInByZXYiLCJpbmNsdWRlcyIsImRpdiIsImNsYXNzTmFtZSIsInNlYXJjaF9pbnB1dF93cmFwIiwib25DbGljayIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJwbGFjZWhvbGRlciIsIm1hcmdpbiIsIm9uQ2xvc2UiLCJsaXN0X3dyYXAiLCJsaXN0X2JveCIsInN0cm9uZyIsInNwYW4iLCJ1bCIsIm1hcCIsImluZGV4IiwibGkiLCJvbCIsImJ1dHRvbiIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/main/_components/BannerSearch.tsx\n"));

/***/ })

});
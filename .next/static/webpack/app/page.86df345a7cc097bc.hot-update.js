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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_banner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/banner.module.css */ \"(app-pages-browser)/./src/app/main/_css/banner.module.css\");\n/* harmony import */ var _css_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_banner_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BannerSearch() {\n    _s();\n    const [, setOnSearchPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.onSearchPageState);\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const searchHandler = (e)=>{\n        if (e.key === \"Enter\" && searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n        }\n        if (e.key === \"Backspace\" || searchValue === \"\") {\n            console.log(\"검색 값 초기화\");\n            setOnSearchPage(false);\n        }\n    };\n    const searchButtonHandler = ()=>{\n        setIsOpen(true);\n        if (searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default().search_input_wrap),\n        on: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Search, {\n                value: searchValue,\n                onChange: (e)=>setSearchValue(e.target.value),\n                onKeyDown: (e)=>searchHandler(e),\n                onClick: ()=>searchButtonHandler(),\n                placeholder: \"어떤 리뷰가 궁금하신가요?\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                isOpen: isOpen,\n                onClose: ()=>setIsOpen(false),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: \"dsds\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_s(BannerSearch, \"yKIhusHeL2J5goZ4LjSrWNHy0Ug=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = BannerSearch;\nvar _c;\n$RefreshReg$(_c, \"BannerSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbi9fY29tcG9uZW50cy9CYW5uZXJTZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ1A7QUFDbUI7QUFDMUI7QUFDaUI7QUFFbkMsU0FBU007O0lBQ3RCLE1BQU0sR0FBR0MsZ0JBQWdCLEdBQUdOLHNEQUFjQSxDQUFDSSwwREFBaUJBO0lBQzVELE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUN2RCxNQUFNLENBQUNNLFFBQVFDLFVBQVUsR0FBR1AsK0NBQVFBLENBQUM7SUFFckMsTUFBTVEsZ0JBQWdCLENBQUNDO1FBQ3JCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxXQUFXTixnQkFBZ0IsSUFBSTtZQUMzQ08sUUFBUUMsR0FBRyxDQUFDLFVBQVVSO1lBQ3RCRCxnQkFBZ0I7UUFDbEI7UUFFQSxJQUFJTSxFQUFFQyxHQUFHLEtBQUssZUFBZU4sZ0JBQWdCLElBQUk7WUFDL0NPLFFBQVFDLEdBQUcsQ0FBQztZQUNaVCxnQkFBZ0I7UUFDbEI7SUFDRjtJQUNBLE1BQU1VLHNCQUFzQjtRQUMxQk4sVUFBVTtRQUVWLElBQUlILGdCQUFnQixJQUFJO1lBQ3RCTyxRQUFRQyxHQUFHLENBQUMsVUFBVVI7WUFDdEJELGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNXO1FBQUlDLFdBQVduQixpRkFBd0I7UUFBRXFCLEVBQUU7OzBCQUMxQyw4REFBQ2xCLHlEQUFNQTtnQkFDTG1CLE9BQU9kO2dCQUNQZSxVQUFVLENBQUNWLElBQU1KLGVBQWVJLEVBQUVXLE1BQU0sQ0FBQ0YsS0FBSztnQkFDOUNHLFdBQVcsQ0FBQ1osSUFBTUQsY0FBY0M7Z0JBQ2hDYSxTQUFTLElBQU1UO2dCQUNmVSxhQUFZOzs7Ozs7MEJBRWQsOERBQUN6QiwyREFBUUE7Z0JBQUNRLFFBQVFBO2dCQUFRa0IsU0FBUyxJQUFNakIsVUFBVTswQkFDakQsNEVBQUNrQjs4QkFDQyw0RUFBQ0M7a0NBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLZDtHQXpDd0J4Qjs7UUFDTUwsa0RBQWNBOzs7S0FEcEJLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvbWFpbi9fY29tcG9uZW50cy9CYW5uZXJTZWFyY2gudHN4PzkyNGUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9fY3NzL2Jhbm5lci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IERyb3BEb3duLCBTZWFyY2ggfSBmcm9tIFwiQC9hcHAvX2NvbXBvbmVudHMvYXRvbXNcIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBvblNlYXJjaFBhZ2VTdGF0ZSB9IGZyb20gXCJAL2FwcC9fcmVjb2lsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJhbm5lclNlYXJjaCgpIHtcbiAgY29uc3QgWywgc2V0T25TZWFyY2hQYWdlXSA9IHVzZVJlY29pbFN0YXRlKG9uU2VhcmNoUGFnZVN0YXRlKTtcbiAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwiXCIpO1xuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGNvbnN0IHNlYXJjaEhhbmRsZXIgPSAoZTogUmVhY3QuS2V5Ym9hcmRFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiICYmIHNlYXJjaFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuqygOyDiSDsi6Ttlok6XCIsIHNlYXJjaFZhbHVlKTtcbiAgICAgIHNldE9uU2VhcmNoUGFnZSh0cnVlKTtcbiAgICB9XG5cbiAgICBpZiAoZS5rZXkgPT09IFwiQmFja3NwYWNlXCIgfHwgc2VhcmNoVmFsdWUgPT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi6rKA7IOJIOqwkiDstIjquLDtmZRcIik7XG4gICAgICBzZXRPblNlYXJjaFBhZ2UoZmFsc2UpO1xuICAgIH1cbiAgfTtcbiAgY29uc3Qgc2VhcmNoQnV0dG9uSGFuZGxlciA9ICgpID0+IHtcbiAgICBzZXRJc09wZW4odHJ1ZSk7XG5cbiAgICBpZiAoc2VhcmNoVmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwi6rKA7IOJIOyLpO2WiTpcIiwgc2VhcmNoVmFsdWUpO1xuICAgICAgc2V0T25TZWFyY2hQYWdlKHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2VhcmNoX2lucHV0X3dyYXB9IG9uPlxuICAgICAgPFNlYXJjaFxuICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VhcmNoVmFsdWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICBvbktleURvd249eyhlKSA9PiBzZWFyY2hIYW5kbGVyKGUpfVxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZWFyY2hCdXR0b25IYW5kbGVyKCl9XG4gICAgICAgIHBsYWNlaG9sZGVyPVwi7Ja065akIOumrOu3sOqwgCDqtoHquIjtlZjsi6DqsIDsmpQ/XCJcbiAgICAgIC8+XG4gICAgICA8RHJvcERvd24gaXNPcGVuPXtpc09wZW59IG9uQ2xvc2U9eygpID0+IHNldElzT3BlbihmYWxzZSl9PlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPmRzZHM8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9Ecm9wRG93bj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VSZWNvaWxTdGF0ZSIsIkRyb3BEb3duIiwiU2VhcmNoIiwidXNlU3RhdGUiLCJvblNlYXJjaFBhZ2VTdGF0ZSIsIkJhbm5lclNlYXJjaCIsInNldE9uU2VhcmNoUGFnZSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJpc09wZW4iLCJzZXRJc09wZW4iLCJzZWFyY2hIYW5kbGVyIiwiZSIsImtleSIsImNvbnNvbGUiLCJsb2ciLCJzZWFyY2hCdXR0b25IYW5kbGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VhcmNoX2lucHV0X3dyYXAiLCJvbiIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJvbkNsb3NlIiwidWwiLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/main/_components/BannerSearch.tsx\n"));

/***/ })

});
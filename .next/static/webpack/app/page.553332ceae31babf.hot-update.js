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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BannerSearch; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_banner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/banner.module.css */ \"(app-pages-browser)/./src/app/main/_css/banner.module.css\");\n/* harmony import */ var _css_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_banner_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction BannerSearch() {\n    _s();\n    const [, setOnSearchPage] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.onSearchPageState);\n    const [searchValue, setSearchValue] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(\"\");\n    const searchHandler = (e)=>{\n        if (e.key === \"Enter\" && searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n        }\n        if (e.key === \"Backspace\" || searchValue === \"\") {\n            console.log(\"검색 값 초기화\");\n            setOnSearchPage(false);\n        }\n    };\n    const searchButtonHandler = ()=>{\n        if (searchValue !== \"\") {\n            console.log(\"검색 실행:\", searchValue);\n            setOnSearchPage(true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default().search_input_wrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Search, {\n                value: searchValue,\n                onChange: (e)=>setSearchValue(e.target.value),\n                onKeyDown: (e)=>searchHandler(e),\n                onClick: ()=>searchButtonHandler(),\n                placeholder: \"어떤 리뷰가 궁금하신가요?\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.DropDown, {\n                isOpen: false,\n                onClose: ()=>{},\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/main/_components/BannerSearch.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(BannerSearch, \"rRETek8/5Lw7itqbrWZxTC/PmAY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = BannerSearch;\nvar _c;\n$RefreshReg$(_c, \"BannerSearch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbWFpbi9fY29tcG9uZW50cy9CYW5uZXJTZWFyY2gudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQytDO0FBQ1A7QUFDbUI7QUFDMUI7QUFDaUI7QUFFbkMsU0FBU007O0lBQ3RCLE1BQU0sR0FBR0MsZ0JBQWdCLEdBQUdOLHNEQUFjQSxDQUFDSSwwREFBaUJBO0lBQzVELE1BQU0sQ0FBQ0csYUFBYUMsZUFBZSxHQUFHTCwrQ0FBUUEsQ0FBUztJQUV2RCxNQUFNTSxnQkFBZ0IsQ0FBQ0M7UUFDckIsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFdBQVdKLGdCQUFnQixJQUFJO1lBQzNDSyxRQUFRQyxHQUFHLENBQUMsVUFBVU47WUFDdEJELGdCQUFnQjtRQUNsQjtRQUVBLElBQUlJLEVBQUVDLEdBQUcsS0FBSyxlQUFlSixnQkFBZ0IsSUFBSTtZQUMvQ0ssUUFBUUMsR0FBRyxDQUFDO1lBQ1pQLGdCQUFnQjtRQUNsQjtJQUNGO0lBQ0EsTUFBTVEsc0JBQXNCO1FBQzFCLElBQUlQLGdCQUFnQixJQUFJO1lBQ3RCSyxRQUFRQyxHQUFHLENBQUMsVUFBVU47WUFDdEJELGdCQUFnQjtRQUNsQjtJQUNGO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdqQixpRkFBd0I7OzBCQUN0Qyw4REFBQ0cseURBQU1BO2dCQUNMZ0IsT0FBT1g7Z0JBQ1BZLFVBQVUsQ0FBQ1QsSUFBTUYsZUFBZUUsRUFBRVUsTUFBTSxDQUFDRixLQUFLO2dCQUM5Q0csV0FBVyxDQUFDWCxJQUFNRCxjQUFjQztnQkFDaENZLFNBQVMsSUFBTVI7Z0JBQ2ZTLGFBQVk7Ozs7OzswQkFFZCw4REFBQ3RCLDJEQUFRQTtnQkFBQ3VCLFFBQVE7Z0JBQU9DLFNBQVMsS0FBTzswQkFDdkMsNEVBQUNDOzs7Ozs7Ozs7Ozs7Ozs7O0FBSVQ7R0FwQ3dCckI7O1FBQ01MLGtEQUFjQTs7O0tBRHBCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21haW4vX2NvbXBvbmVudHMvQmFubmVyU2VhcmNoLnRzeD85MjRlIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9iYW5uZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBEcm9wRG93biwgU2VhcmNoIH0gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgb25TZWFyY2hQYWdlU3RhdGUgfSBmcm9tIFwiQC9hcHAvX3JlY29pbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCYW5uZXJTZWFyY2goKSB7XG4gIGNvbnN0IFssIHNldE9uU2VhcmNoUGFnZV0gPSB1c2VSZWNvaWxTdGF0ZShvblNlYXJjaFBhZ2VTdGF0ZSk7XG4gIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gdXNlU3RhdGU8c3RyaW5nPihcIlwiKTtcblxuICBjb25zdCBzZWFyY2hIYW5kbGVyID0gKGU6IFJlYWN0LktleWJvYXJkRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBzZWFyY2hWYWx1ZSAhPT0gXCJcIikge1xuICAgICAgY29uc29sZS5sb2coXCLqsoDsg4kg7Iuk7ZaJOlwiLCBzZWFyY2hWYWx1ZSk7XG4gICAgICBzZXRPblNlYXJjaFBhZ2UodHJ1ZSk7XG4gICAgfVxuXG4gICAgaWYgKGUua2V5ID09PSBcIkJhY2tzcGFjZVwiIHx8IHNlYXJjaFZhbHVlID09PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuqygOyDiSDqsJIg7LSI6riw7ZmUXCIpO1xuICAgICAgc2V0T25TZWFyY2hQYWdlKGZhbHNlKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IHNlYXJjaEJ1dHRvbkhhbmRsZXIgPSAoKSA9PiB7XG4gICAgaWYgKHNlYXJjaFZhbHVlICE9PSBcIlwiKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIuqygOyDiSDsi6Ttlok6XCIsIHNlYXJjaFZhbHVlKTtcbiAgICAgIHNldE9uU2VhcmNoUGFnZSh0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlYXJjaF9pbnB1dF93cmFwfT5cbiAgICAgIDxTZWFyY2hcbiAgICAgICAgdmFsdWU9e3NlYXJjaFZhbHVlfVxuICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldFNlYXJjaFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgb25LZXlEb3duPXsoZSkgPT4gc2VhcmNoSGFuZGxlcihlKX1cbiAgICAgICAgb25DbGljaz17KCkgPT4gc2VhcmNoQnV0dG9uSGFuZGxlcigpfVxuICAgICAgICBwbGFjZWhvbGRlcj1cIuyWtOuWpCDrpqzrt7DqsIAg6raB6riI7ZWY7Iug6rCA7JqUP1wiXG4gICAgICAvPlxuICAgICAgPERyb3BEb3duIGlzT3Blbj17ZmFsc2V9IG9uQ2xvc2U9eygpID0+IHt9fT5cbiAgICAgICAgPHVsPjwvdWw+XG4gICAgICA8L0Ryb3BEb3duPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVJlY29pbFN0YXRlIiwiRHJvcERvd24iLCJTZWFyY2giLCJ1c2VTdGF0ZSIsIm9uU2VhcmNoUGFnZVN0YXRlIiwiQmFubmVyU2VhcmNoIiwic2V0T25TZWFyY2hQYWdlIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInNlYXJjaEhhbmRsZXIiLCJlIiwia2V5IiwiY29uc29sZSIsImxvZyIsInNlYXJjaEJ1dHRvbkhhbmRsZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWFyY2hfaW5wdXRfd3JhcCIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJvbktleURvd24iLCJvbkNsaWNrIiwicGxhY2Vob2xkZXIiLCJpc09wZW4iLCJvbkNsb3NlIiwidWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/main/_components/BannerSearch.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/[userId]/mypage/page",{

/***/ "(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx":
/*!****************************************************************************!*\
  !*** ./src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx ***!
  \****************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ BookmarkedReviews; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_css/mypage.module.css */ \"(app-pages-browser)/./src/app/[userId]/mypage/_css/mypage.module.css\");\n/* harmony import */ var _css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_list_postList_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/list/postList/List */ \"(app-pages-browser)/./src/app/_components/list/postList/List.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction BookmarkedReviews() {\n    _s();\n    const [reviewList, setReviewList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_contents),\n        children: reviewList.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_wrap),\n            children: reviewList.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_list_postList_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    isManager: review.isManager,\n                    alt: review.alt,\n                    src: review.src,\n                    title: review.title,\n                    user: review.user,\n                    value: review.value,\n                    contents: review.contents\n                }, index, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx\",\n            lineNumber: 13,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            className: (_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default().empty_text),\n            children: \"아직 데이터가 없어요\"\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx\",\n            lineNumber: 28,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(BookmarkedReviews, \"NIhV0eQB/hW8A6OqVnEBFMD6ttQ=\");\n_c = BookmarkedReviews;\nvar _c;\n$RefreshReg$(_c, \"BookmarkedReviews\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW3VzZXJJZF0vbXlwYWdlL19jb21wb25lbnRzL3N1YnBhZ2VzL0Jvb2ttYXJrZWRSZXZpZXdzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUM7QUFDaUI7QUFDTTtBQUl6QyxTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFjLEVBQUU7SUFFNUQscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVdOLDZFQUFvQjtrQkFDakNHLFdBQVdLLE1BQU0sR0FBRyxrQkFDbkIsOERBQUNDO1lBQUdILFdBQVdOLHlFQUFnQjtzQkFDNUJHLFdBQVdRLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDdkIsOERBQUNaLDBFQUFJQTtvQkFFSGEsV0FBV0YsT0FBT0UsU0FBUztvQkFDM0JDLEtBQUtILE9BQU9HLEdBQUc7b0JBQ2ZDLEtBQUtKLE9BQU9JLEdBQUc7b0JBQ2ZDLE9BQU9MLE9BQU9LLEtBQUs7b0JBQ25CQyxNQUFNTixPQUFPTSxJQUFJO29CQUNqQkMsT0FBT1AsT0FBT08sS0FBSztvQkFDbkJDLFVBQVVSLE9BQU9RLFFBQVE7bUJBUHBCUDs7Ozs7Ozs7O2lDQVlYLDhEQUFDUTtZQUFFZixXQUFXTiwwRUFBaUI7c0JBQUU7Ozs7Ozs7Ozs7O0FBSXpDO0dBekJ3QkU7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9bdXNlcklkXS9teXBhZ2UvX2NvbXBvbmVudHMvc3VicGFnZXMvQm9va21hcmtlZFJldmlld3MudHN4PzZlMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uLy4uL19jc3MvbXlwYWdlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaXN0IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9saXN0L3Bvc3RMaXN0L0xpc3RcIjtcblxuaW1wb3J0IHsgTGlzdFR5cGVzIH0gZnJvbSBcIi4vV3JpdHRlblJldmlld3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQm9va21hcmtlZFJldmlld3MoKSB7XG4gIGNvbnN0IFtyZXZpZXdMaXN0LCBzZXRSZXZpZXdMaXN0XSA9IHVzZVN0YXRlPExpc3RUeXBlc1tdPihbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfY29udGVudHN9PlxuICAgICAge3Jldmlld0xpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3Rfd3JhcH0+XG4gICAgICAgICAge3Jldmlld0xpc3QubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpc01hbmFnZXI9e3Jldmlldy5pc01hbmFnZXJ9XG4gICAgICAgICAgICAgIGFsdD17cmV2aWV3LmFsdH1cbiAgICAgICAgICAgICAgc3JjPXtyZXZpZXcuc3JjfVxuICAgICAgICAgICAgICB0aXRsZT17cmV2aWV3LnRpdGxlfVxuICAgICAgICAgICAgICB1c2VyPXtyZXZpZXcudXNlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3Jldmlldy52YWx1ZX1cbiAgICAgICAgICAgICAgY29udGVudHM9e3Jldmlldy5jb250ZW50c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApIDogKFxuICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5lbXB0eV90ZXh0fT7slYTsp4Eg642w7J207YSw6rCAIOyXhuyWtOyalDwvcD5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJzdHlsZXMiLCJMaXN0IiwiQm9va21hcmtlZFJldmlld3MiLCJyZXZpZXdMaXN0Iiwic2V0UmV2aWV3TGlzdCIsImRpdiIsImNsYXNzTmFtZSIsImxpc3RfY29udGVudHMiLCJsZW5ndGgiLCJ1bCIsImxpc3Rfd3JhcCIsIm1hcCIsInJldmlldyIsImluZGV4IiwiaXNNYW5hZ2VyIiwiYWx0Iiwic3JjIiwidGl0bGUiLCJ1c2VyIiwidmFsdWUiLCJjb250ZW50cyIsInAiLCJlbXB0eV90ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/BookmarkedReviews.tsx\n"));

/***/ })

});
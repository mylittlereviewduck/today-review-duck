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

/***/ "(app-pages-browser)/./src/app/[userId]/mypage/_components/Contents.tsx":
/*!**********************************************************!*\
  !*** ./src/app/[userId]/mypage/_components/Contents.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contents; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_mypage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_css/mypage.module.css */ \"(app-pages-browser)/./src/app/[userId]/mypage/_css/mypage.module.css\");\n/* harmony import */ var _css_mypage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction Contents(param) {\n    let { selectedMenu } = param;\n    const renderComponent = ()=>{\n        switch(selectedMenu){\n            case \"기본 프로필 설정\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSettings, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 7,\n                    columnNumber: 16\n                }, this);\n            case \"차단한 계정\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BlockedAccounts, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 16\n                }, this);\n            case \"작성한 리뷰\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(WrittenReviews, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 11,\n                    columnNumber: 16\n                }, this);\n            case \"댓글단 리뷰\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CommentedReviews, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 16\n                }, this);\n            case \"좋아요 누른 리뷰\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(LikedReviews, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 15,\n                    columnNumber: 16\n                }, this);\n            case \"북마크한 리뷰\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(BookmarkedReviews, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 16\n                }, this);\n            case \"공지사항\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Notices, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 16\n                }, this);\n            case \"Terms\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Terms, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 21,\n                    columnNumber: 16\n                }, this);\n            case \"Policies\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Policies, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 16\n                }, this);\n            case \"Logout\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"모달열기\"\n                }, void 0, false);\n            case \"DeleteAccount\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"모달열기\"\n                }, void 0, false);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProfileSettings, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 16\n                }, this);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_1___default().contents),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                className: selectedMenu == \"기본 프로필 설정\" ? \"sr_only \".concat((_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_1___default().contents_title)) : \"\".concat((_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_1___default().contents_title)),\n                children: \"\".concat(selectedMenu)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: renderComponent()\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/Contents.tsx\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n_c = Contents;\nvar _c;\n$RefreshReg$(_c, \"Contents\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW3VzZXJJZF0vbXlwYWdlL19jb21wb25lbnRzL0NvbnRlbnRzLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUErQztBQUVoQyxTQUFTQyxTQUFTLEtBQTBDO1FBQTFDLEVBQUVDLFlBQVksRUFBNEIsR0FBMUM7SUFDL0IsTUFBTUMsa0JBQWtCO1FBQ3RCLE9BQVFEO1lBQ04sS0FBSztnQkFDSCxxQkFBTyw4REFBQ0U7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTyw4REFBQ0M7Ozs7O1lBQ1YsS0FBSztnQkFDSCxxQkFBTzs4QkFBRTs7WUFDWCxLQUFLO2dCQUNILHFCQUFPOzhCQUFFOztZQUNYO2dCQUNFLHFCQUFPLDhEQUFDUjs7Ozs7UUFDWjtJQUNGO0lBRUEscUJBQ0UsOERBQUNTO1FBQUlDLFdBQVdkLHdFQUFlOzswQkFDN0IsOERBQUNnQjtnQkFDQ0YsV0FDRVosZ0JBQWdCLGNBQ1osV0FBaUMsT0FBdEJGLDhFQUFxQixJQUNoQyxHQUF5QixPQUF0QkEsOEVBQXFCOzBCQUU5QixHQUFnQixPQUFiRTs7Ozs7OzBCQUNMLDhEQUFDVzswQkFBS1Y7Ozs7Ozs7Ozs7OztBQUdaO0tBMUN3QkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9bdXNlcklkXS9teXBhZ2UvX2NvbXBvbmVudHMvQ29udGVudHMudHN4P2JhNjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9teXBhZ2UubW9kdWxlLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50cyh7IHNlbGVjdGVkTWVudSB9OiB7IHNlbGVjdGVkTWVudTogc3RyaW5nIH0pIHtcbiAgY29uc3QgcmVuZGVyQ29tcG9uZW50ID0gKCkgPT4ge1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRNZW51KSB7XG4gICAgICBjYXNlIFwi6riw67O4IO2UhOuhnO2VhCDshKTsoJVcIjpcbiAgICAgICAgcmV0dXJuIDxQcm9maWxlU2V0dGluZ3MgLz47XG4gICAgICBjYXNlIFwi7LCo64uo7ZWcIOqzhOyglVwiOlxuICAgICAgICByZXR1cm4gPEJsb2NrZWRBY2NvdW50cyAvPjtcbiAgICAgIGNhc2UgXCLsnpHshLHtlZwg66as67ewXCI6XG4gICAgICAgIHJldHVybiA8V3JpdHRlblJldmlld3MgLz47XG4gICAgICBjYXNlIFwi64yT6riA64uoIOumrOu3sFwiOlxuICAgICAgICByZXR1cm4gPENvbW1lbnRlZFJldmlld3MgLz47XG4gICAgICBjYXNlIFwi7KKL7JWE7JqUIOuIhOuluCDrpqzrt7BcIjpcbiAgICAgICAgcmV0dXJuIDxMaWtlZFJldmlld3MgLz47XG4gICAgICBjYXNlIFwi67aB66eI7YGs7ZWcIOumrOu3sFwiOlxuICAgICAgICByZXR1cm4gPEJvb2ttYXJrZWRSZXZpZXdzIC8+O1xuICAgICAgY2FzZSBcIuqzteyngOyCrO2VrVwiOlxuICAgICAgICByZXR1cm4gPE5vdGljZXMgLz47XG4gICAgICBjYXNlIFwiVGVybXNcIjpcbiAgICAgICAgcmV0dXJuIDxUZXJtcyAvPjtcbiAgICAgIGNhc2UgXCJQb2xpY2llc1wiOlxuICAgICAgICByZXR1cm4gPFBvbGljaWVzIC8+O1xuICAgICAgY2FzZSBcIkxvZ291dFwiOlxuICAgICAgICByZXR1cm4gPD7rqqjri6zsl7TquLA8Lz47XG4gICAgICBjYXNlIFwiRGVsZXRlQWNjb3VudFwiOlxuICAgICAgICByZXR1cm4gPD7rqqjri6zsl7TquLA8Lz47XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gPFByb2ZpbGVTZXR0aW5ncyAvPjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRzfT5cbiAgICAgIDxoNFxuICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgIHNlbGVjdGVkTWVudSA9PSBcIuq4sOuzuCDtlITroZztlYQg7ISk7KCVXCJcbiAgICAgICAgICAgID8gYHNyX29ubHkgJHtzdHlsZXMuY29udGVudHNfdGl0bGV9YFxuICAgICAgICAgICAgOiBgJHtzdHlsZXMuY29udGVudHNfdGl0bGV9YFxuICAgICAgICB9XG4gICAgICA+e2Ake3NlbGVjdGVkTWVudX1gfTwvaDQ+XG4gICAgICA8ZGl2PntyZW5kZXJDb21wb25lbnQoKX08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJDb250ZW50cyIsInNlbGVjdGVkTWVudSIsInJlbmRlckNvbXBvbmVudCIsIlByb2ZpbGVTZXR0aW5ncyIsIkJsb2NrZWRBY2NvdW50cyIsIldyaXR0ZW5SZXZpZXdzIiwiQ29tbWVudGVkUmV2aWV3cyIsIkxpa2VkUmV2aWV3cyIsIkJvb2ttYXJrZWRSZXZpZXdzIiwiTm90aWNlcyIsIlRlcm1zIiwiUG9saWNpZXMiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50cyIsImg0IiwiY29udGVudHNfdGl0bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[userId]/mypage/_components/Contents.tsx\n"));

/***/ })

});
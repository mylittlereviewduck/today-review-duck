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

/***/ "(app-pages-browser)/./src/app/[userId]/mypage/_components/YourPage.tsx":
/*!**********************************************************!*\
  !*** ./src/app/[userId]/mypage/_components/YourPage.tsx ***!
  \**********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ YourPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_components/pagination/Pagination */ \"(app-pages-browser)/./src/app/_components/pagination/Pagination.tsx\");\n/* harmony import */ var _css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/yourpage.module.css */ \"(app-pages-browser)/./src/app/[userId]/mypage/_css/yourpage.module.css\");\n/* harmony import */ var _css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_atoms_DataNone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms/DataNone */ \"(app-pages-browser)/./src/app/_components/atoms/DataNone.tsx\");\n/* harmony import */ var _app_components_list_postList_List__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_components/list/postList/List */ \"(app-pages-browser)/./src/app/_components/list/postList/List.tsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _subpages_WrittenReviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subpages/WrittenReviews */ \"(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/WrittenReviews.tsx\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction YourPage() {\n    _s();\n    const [reviewList, setReviewList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(_subpages_WrittenReviews__WEBPACK_IMPORTED_MODULE_6__.dummyListData);\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({\n        image: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().page),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().profile_wrap),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: (_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().profile_img_box),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_7__.Icon, {\n                        className: (_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().profile_img),\n                        src: user.image || \"\",\n                        width: 120,\n                        height: 120,\n                        alt: \"프로필 이미지\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                lineNumber: 15,\n                columnNumber: 4\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_contents),\n                children: reviewList.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: (_css_yourpage_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_wrap),\n                    children: reviewList.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_list_postList_List__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            isManager: review.isManager,\n                            alt: review.alt,\n                            src: review.src,\n                            title: review.title,\n                            user: review.user,\n                            value: review.value,\n                            contents: review.contents\n                        }, index, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                            lineNumber: 30,\n                            columnNumber: 15\n                        }, this))\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms_DataNone__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    target: \"작성된 리뷰\"\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_pagination_Pagination__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                currentPage: 1,\n                totalPages: 10,\n                onPageChange: ()=>{}\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/YourPage.tsx\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n_s(YourPage, \"kNfwvWadB+G96kOokLGRKjuwDKk=\");\n_c = YourPage;\nvar _c;\n$RefreshReg$(_c, \"YourPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW3VzZXJJZF0vbXlwYWdlL19jb21wb25lbnRzL1lvdXJQYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQWlFO0FBQ2hCO0FBQ087QUFDQTtBQUN2QjtBQUVvQztBQUN0QjtBQUVoQyxTQUFTTzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdMLCtDQUFRQSxDQUFjQyxtRUFBYUE7SUFDdkUsTUFBTSxDQUFDSyxNQUFNQyxRQUFRLEdBQUdQLCtDQUFRQSxDQUFDO1FBQUVRLE9BQU87SUFBRztJQUM3QyxxQkFDRSw4REFBQ0M7UUFBUUMsV0FBV2Isc0VBQVc7OzBCQUNoQyw4REFBQ2U7Z0JBQUlGLFdBQVdiLDhFQUFtQjswQkFDaEMsNEVBQUNpQjtvQkFBS0osV0FBV2IsaUZBQXNCOzhCQUNyQyw0RUFBQ0ssdURBQUlBO3dCQUNIUSxXQUFXYiw2RUFBa0I7d0JBQzdCb0IsS0FBS1gsS0FBS0UsS0FBSyxJQUFJO3dCQUNuQlUsT0FBTzt3QkFDUEMsUUFBUTt3QkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7Ozs7OzswQkFJUiw4REFBQ1I7Z0JBQUlGLFdBQVdiLCtFQUFvQjswQkFDakNPLFdBQVdrQixNQUFNLEdBQUcsa0JBQ25CLDhEQUFDQztvQkFBR2IsV0FBV2IsMkVBQWdCOzhCQUM1Qk8sV0FBV3FCLEdBQUcsQ0FBQyxDQUFDQyxRQUFRQyxzQkFDdkIsOERBQUM1QiwwRUFBSUE7NEJBRUg2QixXQUFXRixPQUFPRSxTQUFTOzRCQUMzQlIsS0FBS00sT0FBT04sR0FBRzs0QkFDZkgsS0FBS1MsT0FBT1QsR0FBRzs0QkFDZlksT0FBT0gsT0FBT0csS0FBSzs0QkFDbkJ2QixNQUFNb0IsT0FBT3BCLElBQUk7NEJBQ2pCd0IsT0FBT0osT0FBT0ksS0FBSzs0QkFDbkJDLFVBQVVMLE9BQU9LLFFBQVE7MkJBUHBCSjs7Ozs7Ozs7O3lDQVlYLDhEQUFDN0Isc0VBQVFBO29CQUFDa0MsUUFBUTs7Ozs7Ozs7Ozs7MEJBR3RCLDhEQUFDcEMsNkVBQVVBO2dCQUFDcUMsYUFBYTtnQkFBR0MsWUFBWTtnQkFBSUMsY0FBYyxLQUFPOzs7Ozs7Ozs7Ozs7QUFHdkU7R0F2Q3dCaEM7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9bdXNlcklkXS9teXBhZ2UvX2NvbXBvbmVudHMvWW91clBhZ2UudHN4Pzk3ZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2luYXRpb24gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL3BhZ2luYXRpb24vUGFnaW5hdGlvblwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy95b3VycGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgRGF0YU5vbmUgZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zL0RhdGFOb25lXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQC9hcHAvX2NvbXBvbmVudHMvbGlzdC9wb3N0TGlzdC9MaXN0XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBkdW1teUxpc3REYXRhLCBMaXN0VHlwZXMgfSBmcm9tIFwiLi9zdWJwYWdlcy9Xcml0dGVuUmV2aWV3c1wiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZb3VyUGFnZSgpIHtcbiAgY29uc3QgW3Jldmlld0xpc3QsIHNldFJldmlld0xpc3RdID0gdXNlU3RhdGU8TGlzdFR5cGVzW10+KGR1bW15TGlzdERhdGEpO1xuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZSh7IGltYWdlOiBcIlwiIH0pO1xuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnBhZ2V9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX3dyYXB9PlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9pbWdfYm94fT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX2ltZ31cbiAgICAgICAgICBzcmM9e3VzZXIuaW1hZ2UgfHwgXCJcIn1cbiAgICAgICAgICB3aWR0aD17MTIwfVxuICAgICAgICAgIGhlaWdodD17MTIwfVxuICAgICAgICAgIGFsdD1cIu2UhOuhnO2VhCDsnbTrr7jsp4BcIlxuICAgICAgICAvPlxuICAgICAgPC9zcGFuPlxuXHRcdFx0PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfY29udGVudHN9PlxuICAgICAgICB7cmV2aWV3TGlzdC5sZW5ndGggPiAwID8gKFxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5saXN0X3dyYXB9PlxuICAgICAgICAgICAge3Jldmlld0xpc3QubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBpc01hbmFnZXI9e3Jldmlldy5pc01hbmFnZXJ9XG4gICAgICAgICAgICAgICAgYWx0PXtyZXZpZXcuYWx0fVxuICAgICAgICAgICAgICAgIHNyYz17cmV2aWV3LnNyY31cbiAgICAgICAgICAgICAgICB0aXRsZT17cmV2aWV3LnRpdGxlfVxuICAgICAgICAgICAgICAgIHVzZXI9e3Jldmlldy51c2VyfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtyZXZpZXcudmFsdWV9XG4gICAgICAgICAgICAgICAgY29udGVudHM9e3Jldmlldy5jb250ZW50c31cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPERhdGFOb25lIHRhcmdldD17XCLsnpHshLHrkJwg66as67ewXCJ9IC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxQYWdpbmF0aW9uIGN1cnJlbnRQYWdlPXsxfSB0b3RhbFBhZ2VzPXsxMH0gb25QYWdlQ2hhbmdlPXsoKSA9PiB7fX0gLz5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUGFnaW5hdGlvbiIsInN0eWxlcyIsIkRhdGFOb25lIiwiTGlzdCIsInVzZVN0YXRlIiwiZHVtbXlMaXN0RGF0YSIsIkljb24iLCJZb3VyUGFnZSIsInJldmlld0xpc3QiLCJzZXRSZXZpZXdMaXN0IiwidXNlciIsInNldFVzZXIiLCJpbWFnZSIsInNlY3Rpb24iLCJjbGFzc05hbWUiLCJwYWdlIiwiZGl2IiwicHJvZmlsZV93cmFwIiwic3BhbiIsInByb2ZpbGVfaW1nX2JveCIsInByb2ZpbGVfaW1nIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJsaXN0X2NvbnRlbnRzIiwibGVuZ3RoIiwidWwiLCJsaXN0X3dyYXAiLCJtYXAiLCJyZXZpZXciLCJpbmRleCIsImlzTWFuYWdlciIsInRpdGxlIiwidmFsdWUiLCJjb250ZW50cyIsInRhcmdldCIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlcyIsIm9uUGFnZUNoYW5nZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[userId]/mypage/_components/YourPage.tsx\n"));

/***/ })

});
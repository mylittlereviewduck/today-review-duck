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

/***/ "(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx":
/*!************************************************!*\
  !*** ./src/app/_components/navigation/Gnb.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_css/gnb.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/gnb.module.css\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Gnb() {\n    _s();\n    const user = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"트랜드\");\n    const [, setUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    setUser(\"123\"); //임시\n    const navItems = [\n        {\n            label: \"트랜드\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"최신\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"덕질 중\",\n            href: \"./\",\n            show: user.id\n        },\n        {\n            label: \"마이페이지\",\n            href: \"./\",\n            show: !user.id\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_list),\n        children: navItems.filter((item)=>item.show).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: item.href,\n                    onClick: ()=>setActiveItem(item.label),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"\".concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_item), \" \").concat(activeItem === item.label ? (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_item_on) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 13\n                }, this)\n            }, item.label, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Gnb, \"SNG4LG/Tps9/QFPV9pQMMGpakfw=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1U7QUFDZDtBQUMyQjtBQUNkO0FBRTNCLFNBQVNNOztJQUN0QixNQUFNQyxPQUFPSCxzREFBY0EsQ0FBQ0Msa0RBQVNBO0lBQ3JDLE1BQU0sQ0FBQ0csWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUVyRCxNQUFNLEdBQUdVLFFBQVEsR0FBR1Asc0RBQWNBLENBQUNFLGtEQUFTQTtJQUM1Q0ssUUFBUSxRQUFRLElBQUk7SUFDcEIsTUFBTUMsV0FBVztRQUNmO1lBQUVDLE9BQU87WUFBT0MsTUFBTTtZQUFNQyxNQUFNO1FBQUs7UUFDdkM7WUFBRUYsT0FBTztZQUFNQyxNQUFNO1lBQU1DLE1BQU07UUFBSztRQUN0QztZQUFFRixPQUFPO1lBQVFDLE1BQU07WUFBTUMsTUFBTVAsS0FBS1EsRUFBRTtRQUFDO1FBQzNDO1lBQUVILE9BQU87WUFBU0MsTUFBTTtZQUFNQyxNQUFNLENBQUNQLEtBQUtRLEVBQUU7UUFBQztLQUM5QztJQUVELHFCQUNFLDhEQUFDQztRQUFHQyxXQUFXaEIscUVBQWU7a0JBQzNCVSxTQUNFUSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS04sSUFBSSxFQUMxQk8sR0FBRyxDQUFDLENBQUNELHFCQUNKLDhEQUFDRTswQkFDQyw0RUFBQ3BCLGlEQUFJQTtvQkFBQ1csTUFBTU8sS0FBS1AsSUFBSTtvQkFBRVUsU0FBUyxJQUFNZCxjQUFjVyxLQUFLUixLQUFLOzhCQUM1RCw0RUFBQ1k7d0JBQ0NQLFdBQVcsR0FDVFQsT0FEWVAscUVBQWUsRUFBQyxLQUU3QixPQURDTyxlQUFlWSxLQUFLUixLQUFLLEdBQUdYLHdFQUFrQixHQUFHO2tDQUduRCw0RUFBQzBCO3NDQUFNUCxLQUFLUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2VBUGRRLEtBQUtSLEtBQUs7Ozs7Ozs7Ozs7QUFjN0I7R0FoQ3dCTjs7UUFDVEYsa0RBQWNBO1FBR1BELGtEQUFjQTs7O0tBSlpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4PzA4ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvZ25iLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHVzZXJTdGF0ZSB9IGZyb20gXCJAL2FwcC9fcmVjb2lsXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEduYigpIHtcbiAgY29uc3QgdXNlciA9IHVzZVJlY29pbFZhbHVlKHVzZXJTdGF0ZSk7XG4gIGNvbnN0IFthY3RpdmVJdGVtLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVN0YXRlPHN0cmluZz4oXCLtirjrnpzrk5xcIik7XG5cbiAgY29uc3QgWywgc2V0VXNlcl0gPSB1c2VSZWNvaWxTdGF0ZSh1c2VyU3RhdGUpO1xuICBzZXRVc2VyKFwiMTIzXCIpOyAvL+yehOyLnFxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7IGxhYmVsOiBcIu2KuOuenOuTnFwiLCBocmVmOiBcIi4vXCIsIHNob3c6IHRydWUgfSxcbiAgICB7IGxhYmVsOiBcIuy1nOyLoFwiLCBocmVmOiBcIi4vXCIsIHNob3c6IHRydWUgfSxcbiAgICB7IGxhYmVsOiBcIuuNleyniCDspJFcIiwgaHJlZjogXCIuL1wiLCBzaG93OiB1c2VyLmlkIH0sIC8vIOuhnOq3uOyduCDsi5wg7ZGc7IucXG4gICAgeyBsYWJlbDogXCLrp4jsnbTtjpjsnbTsp4BcIiwgaHJlZjogXCIuL1wiLCBzaG93OiAhdXNlci5pZCB9LCAvLyDroZzqt7jsnbgg7IucIO2RnOyLnFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmduYl9saXN0fT5cbiAgICAgIHtuYXZJdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNob3cpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmxhYmVsfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShpdGVtLmxhYmVsKX0+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmduYl9pdGVtfSAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbSA9PT0gaXRlbS5sYWJlbCA/IHN0eWxlcy5nbmJfaXRlbV9vbiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTGluayIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VyU3RhdGUiLCJHbmIiLCJ1c2VyIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJzZXRVc2VyIiwibmF2SXRlbXMiLCJsYWJlbCIsImhyZWYiLCJzaG93IiwiaWQiLCJ1bCIsImNsYXNzTmFtZSIsImduYl9saXN0IiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImxpIiwib25DbGljayIsImgyIiwiZ25iX2l0ZW0iLCJnbmJfaXRlbV9vbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx\n"));

/***/ })

});
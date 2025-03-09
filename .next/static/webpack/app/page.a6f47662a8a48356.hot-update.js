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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/gnb.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/gnb.module.css\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Gnb() {\n    _s();\n    const user = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue)(_app_recoil__WEBPACK_IMPORTED_MODULE_4__.userState);\n    const [activeItem, setActiveItem] = (0,recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_4__.activeItemState);\n    const navItems = [\n        {\n            label: \"트랜드\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"최신\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"덕질 중\",\n            href: \"./\",\n            show: user.id\n        },\n        {\n            label: \"마이페이지\",\n            href: user.id ? \"\".concat(user.id, \"/mypage\") : \"/login\",\n            show: user.id\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_list),\n        children: navItems.filter((item)=>item.show).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: activeItem === item.label ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                    className: \"\".concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_item), \" \").concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_item_on), \" \").concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().disabled)),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                            lineNumber: 36,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    href: item.href,\n                    onClick: ()=>setActiveItem(item.label),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"\".concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_item)),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 19\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 15\n                }, this)\n            }, item.label, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, this);\n}\n_s(Gnb, \"m3u/4fcO3XGdqs3qFxQa4guGp2Y=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_3__.useRecoilState\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUcyQztBQUNkO0FBQzJCO0FBQ0c7QUFFNUMsU0FBU007O0lBQ3RCLE1BQU1DLE9BQU9KLHNEQUFjQSxDQUFDRSxrREFBU0E7SUFDckMsTUFBTSxDQUFDRyxZQUFZQyxjQUFjLEdBQUdQLHNEQUFjQSxDQUFDRSx3REFBZUE7SUFFbEUsTUFBTU0sV0FBVztRQUNmO1lBQUVDLE9BQU87WUFBT0MsTUFBTTtZQUFNQyxNQUFNO1FBQUs7UUFDdkM7WUFBRUYsT0FBTztZQUFNQyxNQUFNO1lBQU1DLE1BQU07UUFBSztRQUN0QztZQUFFRixPQUFPO1lBQVFDLE1BQU07WUFBTUMsTUFBTU4sS0FBS08sRUFBRTtRQUFDO1FBQzNDO1lBQ0VILE9BQU87WUFDUEMsTUFBTUwsS0FBS08sRUFBRSxHQUFHLEdBQVcsT0FBUlAsS0FBS08sRUFBRSxFQUFDLGFBQVc7WUFDdENELE1BQU1OLEtBQUtPLEVBQUU7UUFDZjtLQUNEO0lBRUQscUJBQ0UsOERBQUNDO1FBQUdDLFdBQVdoQixxRUFBZTtrQkFDM0JVLFNBQ0VRLE1BQU0sQ0FBQyxDQUFDQyxPQUFTQSxLQUFLTixJQUFJLEVBQzFCTyxHQUFHLENBQUMsQ0FBQ0QscUJBQ0osOERBQUNFOzBCQUVFYixlQUFlVyxLQUFLUixLQUFLLGlCQUN4Qiw4REFBQ1c7b0JBQ0NOLFdBQVcsR0FBc0JoQixPQUFuQkEscUVBQWUsRUFBQyxLQUF5QkEsT0FBdEJBLHdFQUFrQixFQUFDLEtBQW1CLE9BQWhCQSxxRUFBZTs4QkFFdEUsNEVBQUMwQjtrQ0FDQyw0RUFBQ0o7c0NBQU1ILEtBQUtSLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozt5Q0FJckIsOERBQUNWLGlEQUFJQTtvQkFBQ1csTUFBTU8sS0FBS1AsSUFBSTtvQkFBRWUsU0FBUyxJQUFNbEIsY0FBY1UsS0FBS1IsS0FBSzs4QkFDNUQsNEVBQUNlO3dCQUFHVixXQUFXLEdBQW1CLE9BQWhCaEIscUVBQWU7a0NBQy9CLDRFQUFDc0I7c0NBQU1ILEtBQUtSLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFiaEJRLEtBQUtSLEtBQUs7Ozs7Ozs7Ozs7QUFxQjdCO0dBekN3Qkw7O1FBQ1RILGtEQUFjQTtRQUNTRCxrREFBY0E7OztLQUY1QkkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9uYXZpZ2F0aW9uL0duYi50c3g/MDhkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvZ25iLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IGFjdGl2ZUl0ZW1TdGF0ZSwgdXNlclN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR25iKCkge1xuICBjb25zdCB1c2VyID0gdXNlUmVjb2lsVmFsdWUodXNlclN0YXRlKTtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlUmVjb2lsU3RhdGUoYWN0aXZlSXRlbVN0YXRlKTtcblxuICBjb25zdCBuYXZJdGVtcyA9IFtcbiAgICB7IGxhYmVsOiBcIu2KuOuenOuTnFwiLCBocmVmOiBcIi4vXCIsIHNob3c6IHRydWUgfSxcbiAgICB7IGxhYmVsOiBcIuy1nOyLoFwiLCBocmVmOiBcIi4vXCIsIHNob3c6IHRydWUgfSxcbiAgICB7IGxhYmVsOiBcIuuNleyniCDspJFcIiwgaHJlZjogXCIuL1wiLCBzaG93OiB1c2VyLmlkIH0sIC8vIOuhnOq3uOyduCDsi5wg7ZGc7IucXG4gICAge1xuICAgICAgbGFiZWw6IFwi66eI7J207Y6Y7J207KeAXCIsXG4gICAgICBocmVmOiB1c2VyLmlkID8gYCR7dXNlci5pZH0vbXlwYWdlYCA6IFwiL2xvZ2luXCIsXG4gICAgICBzaG93OiB1c2VyLmlkLFxuICAgIH0sIC8vIOuhnOq3uOyduCDsi5wg7ZGc7IucXG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMuZ25iX2xpc3R9PlxuICAgICAge25hdkl0ZW1zXG4gICAgICAgIC5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uc2hvdylcbiAgICAgICAgLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgIDxsaSBrZXk9e2l0ZW0ubGFiZWx9PlxuICAgICAgICAgICAgey8qIOyEoO2DneuQnCDtla3rqqnsnYAg7YG066atIOydtOuypO2KuCDrsKnsp4AgKi99XG4gICAgICAgICAgICB7YWN0aXZlSXRlbSA9PT0gaXRlbS5sYWJlbCA/IChcbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5nbmJfaXRlbX0gJHtzdHlsZXMuZ25iX2l0ZW1fb259ICR7c3R5bGVzLmRpc2FibGVkfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aDI+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17aXRlbS5ocmVmfSBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVJdGVtKGl0ZW0ubGFiZWwpfT5cbiAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPXtgJHtzdHlsZXMuZ25iX2l0ZW19YH0+XG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkxpbmsiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZVJlY29pbFZhbHVlIiwiYWN0aXZlSXRlbVN0YXRlIiwidXNlclN0YXRlIiwiR25iIiwidXNlciIsImFjdGl2ZUl0ZW0iLCJzZXRBY3RpdmVJdGVtIiwibmF2SXRlbXMiLCJsYWJlbCIsImhyZWYiLCJzaG93IiwiaWQiLCJ1bCIsImNsYXNzTmFtZSIsImduYl9saXN0IiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImxpIiwic3BhbiIsImduYl9pdGVtIiwiZ25iX2l0ZW1fb24iLCJkaXNhYmxlZCIsImgyIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx\n"));

/***/ })

});
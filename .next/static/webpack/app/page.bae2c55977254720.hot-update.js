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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_css/gnb.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/gnb.module.css\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Gnb() {\n    _s();\n    const user = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"트랜드\");\n    //임시강제로그인\n    const [, setUser] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setUser({\n            id: \"123\"\n        });\n    }, []);\n    const navItems = [\n        {\n            label: \"트랜드\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"최신\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"덕질 중\",\n            href: \"./\",\n            show: user.id\n        },\n        {\n            label: \"마이페이지\",\n            href: user.id ? \"\".concat(user.id, \"/mypage\") : \"/login\",\n            show: user.id\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_list),\n        children: navItems.filter((item)=>item.show).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: item.href,\n                    onClick: ()=>setActiveItem(item.label),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"\".concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_item), \" \").concat(activeItem === item.label ? (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_item_on) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this)\n            }, item.label, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                lineNumber: 35,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Gnb, \"7xiNV/Qo9WTRSYCuXalmJxKTNAY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue,\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRTRDO0FBQ0Q7QUFDZDtBQUMyQjtBQUNkO0FBRTNCLFNBQVNPOztJQUN0QixNQUFNQyxPQUFPSCxzREFBY0EsQ0FBQ0Msa0RBQVNBO0lBQ3JDLE1BQU0sQ0FBQ0csWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBUztJQUVyRCxTQUFTO0lBQ1QsTUFBTSxHQUFHVSxRQUFRLEdBQUdQLHNEQUFjQSxDQUFDRSxrREFBU0E7SUFDNUNOLGdEQUFTQSxDQUFDO1FBQ1JXLFFBQVE7WUFBRUMsSUFBSTtRQUFNO0lBQ3RCLEdBQUcsRUFBRTtJQUVMLE1BQU1DLFdBQVc7UUFDZjtZQUFFQyxPQUFPO1lBQU9DLE1BQU07WUFBTUMsTUFBTTtRQUFLO1FBQ3ZDO1lBQUVGLE9BQU87WUFBTUMsTUFBTTtZQUFNQyxNQUFNO1FBQUs7UUFDdEM7WUFBRUYsT0FBTztZQUFRQyxNQUFNO1lBQU1DLE1BQU1SLEtBQUtJLEVBQUU7UUFBQztRQUMzQztZQUNFRSxPQUFPO1lBQ1BDLE1BQU1QLEtBQUtJLEVBQUUsR0FBRyxHQUFXLE9BQVJKLEtBQUtJLEVBQUUsRUFBQyxhQUFXO1lBQ3RDSSxNQUFNUixLQUFLSSxFQUFFO1FBQ2Y7S0FDRDtJQUVELHFCQUNFLDhEQUFDSztRQUFHQyxXQUFXaEIscUVBQWU7a0JBQzNCVyxTQUNFTyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0wsSUFBSSxFQUMxQk0sR0FBRyxDQUFDLENBQUNELHFCQUNKLDhEQUFDRTswQkFDQyw0RUFBQ3BCLGlEQUFJQTtvQkFBQ1ksTUFBTU0sS0FBS04sSUFBSTtvQkFBRVMsU0FBUyxJQUFNZCxjQUFjVyxLQUFLUCxLQUFLOzhCQUM1RCw0RUFBQ1c7d0JBQ0NQLFdBQVcsR0FDVFQsT0FEWVAscUVBQWUsRUFBQyxLQUU3QixPQURDTyxlQUFlWSxLQUFLUCxLQUFLLEdBQUdaLHdFQUFrQixHQUFHO2tDQUduRCw0RUFBQzBCO3NDQUFNUCxLQUFLUCxLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2VBUGRPLEtBQUtQLEtBQUs7Ozs7Ozs7Ozs7QUFjN0I7R0F4Q3dCUDs7UUFDVEYsa0RBQWNBO1FBSVBELGtEQUFjQTs7O0tBTFpHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4PzA4ZGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vX2Nzcy9nbmIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUsIHVzZVJlY29pbFZhbHVlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgdXNlclN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR25iKCkge1xuICBjb25zdCB1c2VyID0gdXNlUmVjb2lsVmFsdWUodXNlclN0YXRlKTtcbiAgY29uc3QgW2FjdGl2ZUl0ZW0sIHNldEFjdGl2ZUl0ZW1dID0gdXNlU3RhdGU8c3RyaW5nPihcIu2KuOuenOuTnFwiKTtcblxuICAvL+yehOyLnOqwleygnOuhnOq3uOyduFxuICBjb25zdCBbLCBzZXRVc2VyXSA9IHVzZVJlY29pbFN0YXRlKHVzZXJTdGF0ZSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VXNlcih7IGlkOiBcIjEyM1wiIH0pO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgeyBsYWJlbDogXCLtirjrnpzrk5xcIiwgaHJlZjogXCIuL1wiLCBzaG93OiB0cnVlIH0sXG4gICAgeyBsYWJlbDogXCLstZzsi6BcIiwgaHJlZjogXCIuL1wiLCBzaG93OiB0cnVlIH0sXG4gICAgeyBsYWJlbDogXCLrjZXsp4gg7KSRXCIsIGhyZWY6IFwiLi9cIiwgc2hvdzogdXNlci5pZCB9LCAvLyDroZzqt7jsnbgg7IucIO2RnOyLnFxuICAgIHtcbiAgICAgIGxhYmVsOiBcIuuniOydtO2OmOydtOyngFwiLFxuICAgICAgaHJlZjogdXNlci5pZCA/IGAke3VzZXIuaWR9L215cGFnZWAgOiBcIi9sb2dpblwiLFxuICAgICAgc2hvdzogdXNlci5pZCxcbiAgICB9LCAvLyDroZzqt7jsnbgg7IucIO2RnOyLnFxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmduYl9saXN0fT5cbiAgICAgIHtuYXZJdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNob3cpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmxhYmVsfT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2l0ZW0uaHJlZn0gb25DbGljaz17KCkgPT4gc2V0QWN0aXZlSXRlbShpdGVtLmxhYmVsKX0+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmduYl9pdGVtfSAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbSA9PT0gaXRlbS5sYWJlbCA/IHN0eWxlcy5nbmJfaXRlbV9vbiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICA8L3VsPlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiTGluayIsInVzZVJlY29pbFN0YXRlIiwidXNlUmVjb2lsVmFsdWUiLCJ1c2VyU3RhdGUiLCJHbmIiLCJ1c2VyIiwiYWN0aXZlSXRlbSIsInNldEFjdGl2ZUl0ZW0iLCJzZXRVc2VyIiwiaWQiLCJuYXZJdGVtcyIsImxhYmVsIiwiaHJlZiIsInNob3ciLCJ1bCIsImNsYXNzTmFtZSIsImduYl9saXN0IiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImxpIiwib25DbGljayIsImgyIiwiZ25iX2l0ZW0iLCJnbmJfaXRlbV9vbiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx\n"));

/***/ })

});
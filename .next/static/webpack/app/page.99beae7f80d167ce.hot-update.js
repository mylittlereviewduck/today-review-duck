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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_css/gnb.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/gnb.module.css\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/link.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Gnb() {\n    _s();\n    const user = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    const [activeItem, setActiveItem] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"트랜드\");\n    const [, setUser] = useRecoilState(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    const navItems = [\n        {\n            label: \"트랜드\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"최신\",\n            href: \"./\",\n            show: true\n        },\n        {\n            label: \"덕질 중\",\n            href: \"./\",\n            show: user.id\n        },\n        {\n            label: \"마이페이지\",\n            href: \"./\",\n            show: !user.id\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_list),\n        children: navItems.filter((item)=>item.show).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    href: item.href,\n                    onClick: ()=>setActiveItem(item.label),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"\".concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_item), \" \").concat(activeItem === item.label ? (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_2___default().gnb_item_on) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                    lineNumber: 29,\n                    columnNumber: 13\n                }, this)\n            }, item.label, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                lineNumber: 28,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Gnb, \"SNG4LG/Tps9/QFPV9pQMMGpakfw=\", true, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilValue\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRWlDO0FBQ1U7QUFDZDtBQUNXO0FBQ0U7QUFFM0IsU0FBU0s7O0lBQ3RCLE1BQU1DLE9BQU9ILHNEQUFjQSxDQUFDQyxrREFBU0E7SUFDckMsTUFBTSxDQUFDRyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFTO0lBR3RELE1BQU0sR0FBR1MsUUFBUSxHQUFHQyxlQUFlTixrREFBU0E7SUFFM0MsTUFBTU8sV0FBVztRQUNmO1lBQUVDLE9BQU87WUFBT0MsTUFBTTtZQUFNQyxNQUFNO1FBQUs7UUFDdkM7WUFBRUYsT0FBTztZQUFNQyxNQUFNO1lBQU1DLE1BQU07UUFBSztRQUN0QztZQUFFRixPQUFPO1lBQVFDLE1BQU07WUFBTUMsTUFBTVIsS0FBS1MsRUFBRTtRQUFDO1FBQzNDO1lBQUVILE9BQU87WUFBU0MsTUFBTTtZQUFNQyxNQUFNLENBQUNSLEtBQUtTLEVBQUU7UUFBQztLQUM5QztJQUVELHFCQUNFLDhEQUFDQztRQUFHQyxXQUFXaEIscUVBQWU7a0JBQzNCVSxTQUNFUSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS04sSUFBSSxFQUMxQk8sR0FBRyxDQUFDLENBQUNELHFCQUNKLDhEQUFDRTswQkFDQyw0RUFBQ3BCLGlEQUFJQTtvQkFBQ1csTUFBTU8sS0FBS1AsSUFBSTtvQkFBRVUsU0FBUyxJQUFNZixjQUFjWSxLQUFLUixLQUFLOzhCQUM1RCw0RUFBQ1k7d0JBQ0NQLFdBQVcsR0FDVFYsT0FEWU4scUVBQWUsRUFBQyxLQUU3QixPQURDTSxlQUFlYSxLQUFLUixLQUFLLEdBQUdYLHdFQUFrQixHQUFHO2tDQUduRCw0RUFBQzBCO3NDQUFNUCxLQUFLUixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7O2VBUGRRLEtBQUtSLEtBQUs7Ozs7Ozs7Ozs7QUFjN0I7R0FqQ3dCUDs7UUFDVEYsa0RBQWNBOzs7S0FETEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9uYXZpZ2F0aW9uL0duYi50c3g/MDhkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vX2Nzcy9nbmIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyB1c2VyU3RhdGUgfSBmcm9tIFwiQC9hcHAvX3JlY29pbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBHbmIoKSB7XG4gIGNvbnN0IHVzZXIgPSB1c2VSZWNvaWxWYWx1ZSh1c2VyU3RhdGUpO1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VTdGF0ZTxzdHJpbmc+KFwi7Yq4656c65OcXCIpO1xuXG5cblx0Y29uc3QgWywgc2V0VXNlcl0gPSB1c2VSZWNvaWxTdGF0ZSh1c2VyU3RhdGUpO1xuXHRcbiAgY29uc3QgbmF2SXRlbXMgPSBbXG4gICAgeyBsYWJlbDogXCLtirjrnpzrk5xcIiwgaHJlZjogXCIuL1wiLCBzaG93OiB0cnVlIH0sXG4gICAgeyBsYWJlbDogXCLstZzsi6BcIiwgaHJlZjogXCIuL1wiLCBzaG93OiB0cnVlIH0sXG4gICAgeyBsYWJlbDogXCLrjZXsp4gg7KSRXCIsIGhyZWY6IFwiLi9cIiwgc2hvdzogdXNlci5pZCB9LCAvLyDroZzqt7jsnbgg7IucIO2RnOyLnFxuICAgIHsgbGFiZWw6IFwi66eI7J207Y6Y7J207KeAXCIsIGhyZWY6IFwiLi9cIiwgc2hvdzogIXVzZXIuaWQgfSwgLy8g66Gc6re47J24IOyLnCDtkZzsi5xcbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9e3N0eWxlcy5nbmJfbGlzdH0+XG4gICAgICB7bmF2SXRlbXNcbiAgICAgICAgLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5zaG93KVxuICAgICAgICAubWFwKChpdGVtKSA9PiAoXG4gICAgICAgICAgPGxpIGtleT17aXRlbS5sYWJlbH0+XG4gICAgICAgICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9IG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZUl0ZW0oaXRlbS5sYWJlbCl9PlxuICAgICAgICAgICAgICA8aDJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5nbmJfaXRlbX0gJHtcbiAgICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0gPT09IGl0ZW0ubGFiZWwgPyBzdHlsZXMuZ25iX2l0ZW1fb24gOiBcIlwiXG4gICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5sYWJlbH08L3NwYW4+XG4gICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgPC91bD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInN0eWxlcyIsIkxpbmsiLCJ1c2VSZWNvaWxWYWx1ZSIsInVzZXJTdGF0ZSIsIkduYiIsInVzZXIiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsInNldFVzZXIiLCJ1c2VSZWNvaWxTdGF0ZSIsIm5hdkl0ZW1zIiwibGFiZWwiLCJocmVmIiwic2hvdyIsImlkIiwidWwiLCJjbGFzc05hbWUiLCJnbmJfbGlzdCIsImZpbHRlciIsIml0ZW0iLCJtYXAiLCJsaSIsIm9uQ2xpY2siLCJoMiIsImduYl9pdGVtIiwiZ25iX2l0ZW1fb24iLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/app/_components/navigation/Logo.tsx":
/*!*************************************************!*\
  !*** ./src/app/_components/navigation/Logo.tsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Logo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/images/logo.svg */ \"(app-pages-browser)/./public/images/logo.svg\");\n/* harmony import */ var _public_images_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../../public/images/logo-dark.svg */ \"(app-pages-browser)/./public/images/logo-dark.svg\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// import { useState } from \"react\";\nfunction Logo() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [theme] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_1__.themeState);\n    const [, setActiveItem] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_1__.activeItemState);\n    const handleNavigation = ()=>{\n        setActiveItem(\"트랜드\");\n        router.push(\"/\"); // Next.js 페이지 이동\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: handleNavigation,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                src: theme == \"light\" ? _public_images_logo_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"] : _public_images_logo_dark_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                alt: \"logo image\",\n                loading: \"lazy\",\n                property: \"public/images/logo.svg\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Logo.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Logo.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(Logo, \"IHrSEsSSlCU68a00SP56g2Z0PT8=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_6__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Logo;\nvar _c;\n$RefreshReg$(_c, \"Logo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Mb2dvLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRTREO0FBQ3BCO0FBQ1Q7QUFFc0I7QUFDUztBQUNsQjtBQUM1QyxvQ0FBb0M7QUFFckIsU0FBU087O0lBQ3RCLE1BQU1DLFNBQVNGLDBEQUFTQTtJQUN4QixNQUFNLENBQUNHLE1BQU0sR0FBR1Asc0RBQWNBLENBQUNELG1EQUFVQTtJQUN6QyxNQUFNLEdBQUdTLGNBQWMsR0FBR1Isc0RBQWNBLENBQUNGLHdEQUFlQTtJQUV4RCxNQUFNVyxtQkFBbUI7UUFDdkJELGNBQWM7UUFDZEYsT0FBT0ksSUFBSSxDQUFDLE1BQU0saUJBQWlCO0lBQ3JDO0lBRUEscUJBQ0U7a0JBQ0UsNEVBQUNDO1lBQU9DLE1BQUs7WUFBU0MsU0FBU0o7c0JBQzdCLDRFQUFDUixrREFBS0E7Z0JBQ0phLEtBQUtQLFNBQVMsVUFBVUwsK0RBQU9BLEdBQUdDLG9FQUFXQTtnQkFDN0NZLEtBQUk7Z0JBQ0pDLFNBQVE7Z0JBQ1JDLFVBQVU7Ozs7Ozs7Ozs7OztBQUtwQjtHQXRCd0JaOztRQUNQRCxzREFBU0E7UUFDUkosa0RBQWNBO1FBQ0pBLGtEQUFjQTs7O0tBSGxCSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL25hdmlnYXRpb24vTG9nby50c3g/MTZkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgYWN0aXZlSXRlbVN0YXRlLCB0aGVtZVN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgSW1nTG9nbyBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCI7XG5pbXBvcnQgSW1nTG9nb0RhcmsgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ltYWdlcy9sb2dvLWRhcmsuc3ZnXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lU3RhdGUpO1xuICBjb25zdCBbLCBzZXRBY3RpdmVJdGVtXSA9IHVzZVJlY29pbFN0YXRlKGFjdGl2ZUl0ZW1TdGF0ZSk7XG5cbiAgY29uc3QgaGFuZGxlTmF2aWdhdGlvbiA9ICgpID0+IHtcbiAgICBzZXRBY3RpdmVJdGVtKFwi7Yq4656c65OcXCIpO1xuICAgIHJvdXRlci5wdXNoKFwiL1wiKTsgLy8gTmV4dC5qcyDtjpjsnbTsp4Ag7J2064+ZXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17aGFuZGxlTmF2aWdhdGlvbn0+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17dGhlbWUgPT0gXCJsaWdodFwiID8gSW1nTG9nbyA6IEltZ0xvZ29EYXJrfVxuICAgICAgICAgIGFsdD1cImxvZ28gaW1hZ2VcIlxuICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcbiAgICAgICAgICBwcm9wZXJ0eT17XCJwdWJsaWMvaW1hZ2VzL2xvZ28uc3ZnXCJ9XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJhY3RpdmVJdGVtU3RhdGUiLCJ0aGVtZVN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJJbWFnZSIsIkltZ0xvZ28iLCJJbWdMb2dvRGFyayIsInVzZVJvdXRlciIsIkxvZ28iLCJyb3V0ZXIiLCJ0aGVtZSIsInNldEFjdGl2ZUl0ZW0iLCJoYW5kbGVOYXZpZ2F0aW9uIiwicHVzaCIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwic3JjIiwiYWx0IiwibG9hZGluZyIsInByb3BlcnR5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Logo.tsx\n"));

/***/ })

});
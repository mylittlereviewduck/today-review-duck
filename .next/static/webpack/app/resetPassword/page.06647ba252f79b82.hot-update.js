"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/resetPassword/page",{

/***/ "(app-pages-browser)/./src/app/_components/atoms/Icon.tsx":
/*!********************************************!*\
  !*** ./src/app/_components/atoms/Icon.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_img_default_profile_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../../public/images/img-default-profile.svg */ \"(app-pages-browser)/./public/images/img-default-profile.svg\");\n/* harmony import */ var _public_images_img_default_profile_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/images/img-default-profile-dark.svg */ \"(app-pages-browser)/./public/images/img-default-profile-dark.svg\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Icon(param) {\n    let { src, alt, width, height, className, margin } = param;\n    _s();\n    const [theme] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.themeState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: className,\n        style: {\n            display: \"inline-block\",\n            width: width ? width : \"100%\",\n            height: height ? height : \"100%\",\n            margin: margin ? margin : \"0\",\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: src ? src : theme == \"light\" ? _public_images_img_default_profile_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"] : _public_images_img_default_profile_dark_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            alt: alt,\n            loading: \"lazy\",\n            fill: true,\n            style: {\n                objectFit: \"cover\"\n            },\n            sizes: \"100vh\"\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Icon.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Icon.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Icon, \"kb6LVbTNFvNCu/NrfmHSKXBpYd0=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = Icon;\nvar _c;\n$RefreshReg$(_c, \"Icon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvSWNvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ3dDO0FBQ1M7QUFDeEM7QUFDRztBQVU1QixTQUFTSyxLQUFLLEtBT3JCO1FBUHFCLEVBQzNCQyxHQUFHLEVBQ0hDLEdBQUcsRUFDSEMsS0FBSyxFQUNMQyxNQUFNLEVBQ05DLFNBQVMsRUFDVEMsTUFBTSxFQUNBLEdBUHFCOztJQVEzQixNQUFNLENBQUNDLE1BQU0sR0FBR1Qsc0RBQWNBLENBQUNDLG1EQUFVQTtJQUV6QyxxQkFDRSw4REFBQ1M7UUFDQ0gsV0FBV0E7UUFDWEksT0FBTztZQUNMQyxTQUFTO1lBQ1RQLE9BQU9BLFFBQVFBLFFBQVE7WUFDdkJDLFFBQVFBLFNBQVNBLFNBQVM7WUFDMUJFLFFBQVFBLFNBQVNBLFNBQVM7WUFDMUJLLFVBQVU7UUFDWjtrQkFFQSw0RUFBQ2hCLGtEQUFLQTtZQUNKTSxLQUFLQSxNQUFNQSxNQUFNTSxTQUFTLFVBQVVYLDhFQUFVQSxHQUFHQyxtRkFBY0E7WUFDL0RLLEtBQUtBO1lBQ0xVLFNBQVM7WUFDVEMsSUFBSTtZQUNKSixPQUFPO2dCQUFFSyxXQUFXO1lBQVE7WUFDNUJDLE9BQU07Ozs7Ozs7Ozs7O0FBSWQ7R0EvQndCZjs7UUFRTkYsa0RBQWNBOzs7S0FSUkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9hdG9tcy9JY29uLnRzeD80ZjgyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IGltZURlZmF1bHQgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ltYWdlcy9pbWctZGVmYXVsdC1wcm9maWxlLnN2Z1wiO1xuaW1wb3J0IGltZURlZmF1bHREYXJrIGZyb20gXCJALy4uLy4uL3B1YmxpYy9pbWFnZXMvaW1nLWRlZmF1bHQtcHJvZmlsZS1kYXJrLnN2Z1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyB0aGVtZVN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcblxudHlwZSBQcm9wcyA9IHtcbiAgc3JjOiBzdHJpbmc7XG4gIGFsdDogc3RyaW5nO1xuICB3aWR0aD86IG51bWJlciB8IHN0cmluZztcbiAgaGVpZ2h0PzogbnVtYmVyIHwgc3RyaW5nO1xuICBjbGFzc05hbWU/OiBzdHJpbmc7XG4gIG1hcmdpbj86IG51bWJlciB8IHN0cmluZztcbn07XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJY29uKHtcbiAgc3JjLFxuICBhbHQsXG4gIHdpZHRoLFxuICBoZWlnaHQsXG4gIGNsYXNzTmFtZSxcbiAgbWFyZ2luLFxufTogUHJvcHMpIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lU3RhdGUpO1xuXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgd2lkdGg6IHdpZHRoID8gd2lkdGggOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgPyBoZWlnaHQgOiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBtYXJnaW4gPyBtYXJnaW4gOiBcIjBcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17c3JjID8gc3JjIDogdGhlbWUgPT0gXCJsaWdodFwiID8gaW1lRGVmYXVsdCA6IGltZURlZmF1bHREYXJrfVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgbG9hZGluZz17XCJsYXp5XCJ9XG4gICAgICAgIGZpbGxcbiAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAgICAgc2l6ZXM9XCIxMDB2aFwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImltZURlZmF1bHQiLCJpbWVEZWZhdWx0RGFyayIsInVzZVJlY29pbFN0YXRlIiwidGhlbWVTdGF0ZSIsIkljb24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsIm1hcmdpbiIsInRoZW1lIiwic3BhbiIsInN0eWxlIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibG9hZGluZyIsImZpbGwiLCJvYmplY3RGaXQiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/Icon.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/locallogin/page",{

/***/ "(app-pages-browser)/./src/app/_components/atoms/Icon.tsx":
/*!********************************************!*\
  !*** ./src/app/_components/atoms/Icon.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var _public_images_img_default_profile_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../../public/images/img-default-profile.svg */ \"(app-pages-browser)/./public/images/img-default-profile.svg\");\n\n\n\nfunction Icon(param) {\n    let { src, alt, width, height, className, margin } = param;\n    is;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: className,\n        style: {\n            display: \"inline-block\",\n            width: width ? width : \"100%\",\n            height: height ? height : \"100%\",\n            margin: margin ? margin : \"0\",\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: src ? src : _public_images_img_default_profile_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n            alt: alt,\n            loading: \"lazy\",\n            fill: true,\n            style: {\n                objectFit: \"cover\"\n            },\n            sizes: \"100vh\"\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Icon.tsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Icon.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_c = Icon;\nvar _c;\n$RefreshReg$(_c, \"Icon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvSWNvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0I7QUFDMEM7QUFXMUQsU0FBU0UsS0FBSyxLQU9yQjtRQVBxQixFQUMzQkMsR0FBRyxFQUNIQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLE1BQU0sRUFDQSxHQVBxQjtJQVE1QkM7SUFDQyxxQkFDRSw4REFBQ0M7UUFDQ0gsV0FBV0E7UUFDWEksT0FBTztZQUNMQyxTQUFTO1lBQ1RQLE9BQU9BLFFBQVFBLFFBQVE7WUFDdkJDLFFBQVFBLFNBQVNBLFNBQVM7WUFDMUJFLFFBQVFBLFNBQVNBLFNBQVM7WUFDMUJLLFVBQVU7UUFDWjtrQkFFQSw0RUFBQ2Isa0RBQUtBO1lBQ0pHLEtBQUtBLE1BQU1BLE1BQU1GLDhFQUFZQTtZQUM3QkcsS0FBS0E7WUFDTFUsU0FBUztZQUNUQyxJQUFJO1lBQ0pKLE9BQU87Z0JBQUVLLFdBQVc7WUFBUTtZQUM1QkMsT0FBTTs7Ozs7Ozs7Ozs7QUFJZDtLQTlCd0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvSWNvbi50c3g/NGY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBpbWFnZURlZmF1bHQgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ltYWdlcy9pbWctZGVmYXVsdC1wcm9maWxlLnN2Z1wiO1xuaW1wb3J0IGltYWdlRGVmYXVsdERhcmsgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ltYWdlcy9pbWctZGVmYXVsdC1wcm9maWxlLWRhcmsuc3ZnXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNyYzogc3RyaW5nO1xuICBhbHQ6IHN0cmluZztcbiAgd2lkdGg/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGhlaWdodD86IG51bWJlciB8IHN0cmluZztcbiAgY2xhc3NOYW1lPzogc3RyaW5nO1xuICBtYXJnaW4/OiBudW1iZXIgfCBzdHJpbmc7XG59O1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSWNvbih7XG4gIHNyYyxcbiAgYWx0LFxuICB3aWR0aCxcbiAgaGVpZ2h0LFxuICBjbGFzc05hbWUsXG4gIG1hcmdpbixcbn06IFByb3BzKSB7XG5cdGlzXG4gIHJldHVybiAoXG4gICAgPHNwYW5cbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgICAgd2lkdGg6IHdpZHRoID8gd2lkdGggOiBcIjEwMCVcIixcbiAgICAgICAgaGVpZ2h0OiBoZWlnaHQgPyBoZWlnaHQgOiBcIjEwMCVcIixcbiAgICAgICAgbWFyZ2luOiBtYXJnaW4gPyBtYXJnaW4gOiBcIjBcIixcbiAgICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIH19XG4gICAgPlxuICAgICAgPEltYWdlXG4gICAgICAgIHNyYz17c3JjID8gc3JjIDogaW1hZ2VEZWZhdWx0fVxuICAgICAgICBhbHQ9e2FsdH1cbiAgICAgICAgbG9hZGluZz17XCJsYXp5XCJ9XG4gICAgICAgIGZpbGxcbiAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cbiAgICAgICAgc2l6ZXM9XCIxMDB2aFwiXG4gICAgICAvPlxuICAgIDwvc3Bhbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsImltYWdlRGVmYXVsdCIsIkljb24iLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImNsYXNzTmFtZSIsIm1hcmdpbiIsImlzIiwic3BhbiIsInN0eWxlIiwiZGlzcGxheSIsInBvc2l0aW9uIiwibG9hZGluZyIsImZpbGwiLCJvYmplY3RGaXQiLCJzaXplcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/Icon.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/app/_components/atoms/Icon.tsx":
/*!********************************************!*\
  !*** ./src/app/_components/atoms/Icon.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Icon; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/image.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction Icon(param) {\n    let { src, alt, width, height, className, margin } = param;\n    _s();\n    const [theme] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_3__.themeState);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: className,\n        style: {\n            display: \"inline-block\",\n            width: width ? width : \"100%\",\n            height: height ? height : \"100%\",\n            margin: margin ? margin : \"0\",\n            position: \"relative\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            src: src ? src : \"imageDefault\",\n            alt: alt,\n            loading: \"lazy\",\n            fill: true,\n            style: {\n                objectFit: \"cover\"\n            },\n            sizes: \"100vh\"\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Icon.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Icon.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Icon, \"kb6LVbTNFvNCu/NrfmHSKXBpYd0=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Icon;\nvar _c;\n$RefreshReg$(_c, \"Icon\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvSWNvbi50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQjtBQUdTO0FBQ0c7QUFVNUIsU0FBU0csS0FBSyxLQU9yQjtRQVBxQixFQUMzQkMsR0FBRyxFQUNIQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLE1BQU0sRUFDQSxHQVBxQjs7SUFRM0IsTUFBTSxDQUFDQyxNQUFNLEdBQUdULHNEQUFjQSxDQUFDQyxtREFBVUE7SUFFekMscUJBQ0UsOERBQUNTO1FBQ0NILFdBQVdBO1FBQ1hJLE9BQU87WUFDTEMsU0FBUztZQUNUUCxPQUFPQSxRQUFRQSxRQUFRO1lBQ3ZCQyxRQUFRQSxTQUFTQSxTQUFTO1lBQzFCRSxRQUFRQSxTQUFTQSxTQUFTO1lBQzFCSyxVQUFVO1FBQ1o7a0JBRUEsNEVBQUNkLGtEQUFLQTtZQUNKSSxLQUFLQSxNQUFNQSxNQUFPO1lBQ2xCQyxLQUFLQTtZQUNMVSxTQUFTO1lBQ1RDLElBQUk7WUFDSkosT0FBTztnQkFBRUssV0FBVztZQUFRO1lBQzVCQyxPQUFNOzs7Ozs7Ozs7OztBQUlkO0dBL0J3QmY7O1FBUU5GLGtEQUFjQTs7O0tBUlJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvSWNvbi50c3g/NGY4MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBpbWFnZURlZmF1bHQgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ltYWdlcy9pbWctZGVmYXVsdC1wcm9maWxlLnN2Z1wiO1xuaW1wb3J0IGltYWdlRGVmYXVsdERhcmsgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ltYWdlcy9pbWctZGVmYXVsdC1wcm9maWxlLWRhcmsuc3ZnXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHRoZW1lU3RhdGUgfSBmcm9tIFwiQC9hcHAvX3JlY29pbFwiO1xuXG50eXBlIFByb3BzID0ge1xuICBzcmM6IHN0cmluZztcbiAgYWx0OiBzdHJpbmc7XG4gIHdpZHRoPzogbnVtYmVyIHwgc3RyaW5nO1xuICBoZWlnaHQ/OiBudW1iZXIgfCBzdHJpbmc7XG4gIGNsYXNzTmFtZT86IHN0cmluZztcbiAgbWFyZ2luPzogbnVtYmVyIHwgc3RyaW5nO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEljb24oe1xuICBzcmMsXG4gIGFsdCxcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgY2xhc3NOYW1lLFxuICBtYXJnaW4sXG59OiBQcm9wcykge1xuICBjb25zdCBbdGhlbWVdID0gdXNlUmVjb2lsU3RhdGUodGhlbWVTdGF0ZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c3BhblxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLFxuICAgICAgICB3aWR0aDogd2lkdGggPyB3aWR0aCA6IFwiMTAwJVwiLFxuICAgICAgICBoZWlnaHQ6IGhlaWdodCA/IGhlaWdodCA6IFwiMTAwJVwiLFxuICAgICAgICBtYXJnaW46IG1hcmdpbiA/IG1hcmdpbiA6IFwiMFwiLFxuICAgICAgICBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiLFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8SW1hZ2VcbiAgICAgICAgc3JjPXtzcmMgPyBzcmMgOiBgaW1hZ2VEZWZhdWx0YH1cbiAgICAgICAgYWx0PXthbHR9XG4gICAgICAgIGxvYWRpbmc9e1wibGF6eVwifVxuICAgICAgICBmaWxsXG4gICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgICAgIHNpemVzPVwiMTAwdmhcIlxuICAgICAgLz5cbiAgICA8L3NwYW4+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VSZWNvaWxTdGF0ZSIsInRoZW1lU3RhdGUiLCJJY29uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJjbGFzc05hbWUiLCJtYXJnaW4iLCJ0aGVtZSIsInNwYW4iLCJzdHlsZSIsImRpc3BsYXkiLCJwb3NpdGlvbiIsImxvYWRpbmciLCJmaWxsIiwib2JqZWN0Rml0Iiwic2l6ZXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/Icon.tsx\n"));

/***/ })

});
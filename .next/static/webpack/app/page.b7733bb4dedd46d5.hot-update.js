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

/***/ "(app-pages-browser)/./src/app/_components/atoms/Tooltip.tsx":
/*!***********************************************!*\
  !*** ./src/app/_components/atoms/Tooltip.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tooltip; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/tooltip.module.css */ \"(app-pages-browser)/./src/app/_components/atoms/_css/tooltip.module.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Tooltip(param) {\n    let { text, position = \"center\", children } = param;\n    _s();\n    const [isVisible, setIsVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__.tooltip_container,\n        onMouseEnter: ()=>setIsVisible(true),\n        onMouseLeave: ()=>setIsVisible(false),\n        children: [\n            children,\n            isVisible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat(_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__.tooltip, \" \").concat(_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__[\"tooltip_\".concat(position)]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__.tooltip_text,\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"\".concat(_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__.tooltip_arrow, \" \").concat(_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__[\"tooltip_arrow_\".concat(position)])\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n_s(Tooltip, \"QjDZesRvLCmcrZLxgN677nXnVLA=\");\n_c = Tooltip;\nvar _c;\n$RefreshReg$(_c, \"Tooltip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvVG9vbHRpcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUNkO0FBUWxCLFNBQVNFLFFBQVEsS0FJakI7UUFKaUIsRUFDOUJDLElBQUksRUFDSkMsV0FBVyxRQUFRLEVBQ25CQyxRQUFRLEVBQ0ssR0FKaUI7O0lBSzlCLE1BQU0sQ0FBQ0MsV0FBV0MsYUFBYSxHQUFHTiwrQ0FBUUEsQ0FBQztJQUUzQyxxQkFDRSw4REFBQ087UUFDQ0MsV0FBV1Qsb0RBQU1BLENBQUNVLGlCQUFpQjtRQUNuQ0MsY0FBYyxJQUFNSixhQUFhO1FBQ2pDSyxjQUFjLElBQU1MLGFBQWE7O1lBRWhDRjtZQUNBQywyQkFDQyw4REFBQ0U7Z0JBQUlDLFdBQVcsR0FBcUJULE9BQWxCQSxvREFBTUEsQ0FBQ2EsT0FBTyxFQUFDLEtBQWlDLE9BQTlCYixvREFBTSxDQUFDLFdBQW9CLE9BQVRJLFVBQVc7O2tDQUNoRSw4REFBQ1U7d0JBQUVMLFdBQVdULG9EQUFNQSxDQUFDZSxZQUFZO2tDQUFHWjs7Ozs7O2tDQUNwQyw4REFBQ2E7d0JBQ0NQLFdBQVcsR0FDVFQsT0FEWUEsb0RBQU1BLENBQUNpQixhQUFhLEVBQUMsS0FFbEMsT0FEQ2pCLG9EQUFNLENBQUMsaUJBQTBCLE9BQVRJLFVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRDtHQTFCd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvVG9vbHRpcC50c3g/ZjU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvdG9vbHRpcC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgVG9vbHRpcFByb3BzIHtcbiAgdGV4dDogc3RyaW5nO1xuICBwb3NpdGlvbj86IFwibGVmdFwiIHwgXCJyaWdodFwiIHwgXCJjZW50ZXJcIjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG9vbHRpcCh7XG4gIHRleHQsXG4gIHBvc2l0aW9uID0gXCJjZW50ZXJcIixcbiAgY2hpbGRyZW4sXG59OiBUb29sdGlwUHJvcHMpIHtcbiAgY29uc3QgW2lzVmlzaWJsZSwgc2V0SXNWaXNpYmxlXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnRvb2x0aXBfY29udGFpbmVyfVxuICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiBzZXRJc1Zpc2libGUodHJ1ZSl9XG4gICAgICBvbk1vdXNlTGVhdmU9eygpID0+IHNldElzVmlzaWJsZShmYWxzZSl9XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgICAge2lzVmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9vbHRpcH0gJHtzdHlsZXNbYHRvb2x0aXBfJHtwb3NpdGlvbn1gXX1gfT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwX3RleHR9Pnt0ZXh0fTwvcD5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9vbHRpcF9hcnJvd30gJHtcbiAgICAgICAgICAgICAgc3R5bGVzW2B0b29sdGlwX2Fycm93XyR7cG9zaXRpb259YF1cbiAgICAgICAgICAgIH1gfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ1c2VTdGF0ZSIsIlRvb2x0aXAiLCJ0ZXh0IiwicG9zaXRpb24iLCJjaGlsZHJlbiIsImlzVmlzaWJsZSIsInNldElzVmlzaWJsZSIsImRpdiIsImNsYXNzTmFtZSIsInRvb2x0aXBfY29udGFpbmVyIiwib25Nb3VzZUVudGVyIiwib25Nb3VzZUxlYXZlIiwidG9vbHRpcCIsInAiLCJ0b29sdGlwX3RleHQiLCJzcGFuIiwidG9vbHRpcF9hcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/Tooltip.tsx\n"));

/***/ })

});
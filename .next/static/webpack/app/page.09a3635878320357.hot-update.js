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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tooltip; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/tooltip.module.css */ \"(app-pages-browser)/./src/app/_components/atoms/_css/tooltip.module.css\");\n/* harmony import */ var _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Tooltip(param) {\n    let { text, position = \"center\", isVisible = false, children } = param;\n    _s();\n    const [visible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isVisible);\n    // `isVisible` 값이 변경될 때 툴팁 표시\n    // useEffect(() => {\n    //   if (isVisible) {\n    //     setVisible(true);\n    //     setTimeout(() => setVisible(false), 2000); // 2초 후 자동 숨김\n    //   }\n    // }, [isVisible]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip_container),\n        children: [\n            children,\n            visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip), \" \").concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default())[\"tooltip_\".concat(position)]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip_text),\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip_arrow), \" \").concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default())[\"tooltip_arrow_\".concat(position)])\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Tooltip, \"ag0jLQnqjSFEmHPR+DZR7XoyrbA=\");\n_c = Tooltip;\nvar _c;\n$RefreshReg$(_c, \"Tooltip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvVG9vbHRpcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDSDtBQVc3QixTQUFTRSxRQUFRLEtBS2pCO1FBTGlCLEVBQzlCQyxJQUFJLEVBQ0pDLFdBQVcsUUFBUSxFQUNuQkMsWUFBWSxLQUFLLEVBQ2pCQyxRQUFRLEVBQ0ssR0FMaUI7O0lBTTlCLE1BQU0sQ0FBQ0MsUUFBUSxHQUFHTiwrQ0FBUUEsQ0FBQ0k7SUFFM0IsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsd0JBQXdCO0lBQ3hCLCtEQUErRDtJQUMvRCxNQUFNO0lBQ04sbUJBQW1CO0lBRW5CLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXVCxrRkFBd0I7O1lBQ3JDTTtZQUNBQyx5QkFDQyw4REFBQ0M7Z0JBQUlDLFdBQVcsR0FBcUJULE9BQWxCQSx3RUFBYyxFQUFDLEtBQWlDLE9BQTlCQSxnRUFBTSxDQUFDLFdBQW9CLE9BQVRJLFVBQVc7O2tDQUNoRSw4REFBQ0k7d0JBQUlDLFdBQVdULDZFQUFtQjtrQ0FBR0c7Ozs7OztrQ0FDdEMsOERBQUNLO3dCQUNDQyxXQUFXLEdBQ1RULE9BRFlBLDhFQUFvQixFQUFDLEtBRWxDLE9BRENBLGdFQUFNLENBQUMsaUJBQTBCLE9BQVRJLFVBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU9qRDtHQS9Cd0JGO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvVG9vbHRpcC50c3g/ZjU5OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvdG9vbHRpcC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBUb29sdGlwUHJvcHMge1xuICB0ZXh0OiBzdHJpbmc7XG4gIHBvc2l0aW9uPzogXCJsZWZ0XCIgfCBcInJpZ2h0XCIgfCBcImNlbnRlclwiOyAvLyDtiLTtjIEg7JyE7LmYXG4gIGlzVmlzaWJsZT86IGJvb2xlYW47IC8vIOuztOydtOq4sCDsl6zrtoBcblx0d2lkdGg/OiBzdHJpbmc7IC8vIO2ItO2MgSDrhIjruYQgKOq4sOuzuOqwkiDsnpDrj5kpXG4gIG1hcmdpbj86IHN0cmluZzsgXG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRvb2x0aXAoe1xuICB0ZXh0LFxuICBwb3NpdGlvbiA9IFwiY2VudGVyXCIsXG4gIGlzVmlzaWJsZSA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IFRvb2x0aXBQcm9wcykge1xuICBjb25zdCBbdmlzaWJsZV0gPSB1c2VTdGF0ZShpc1Zpc2libGUpO1xuXG4gIC8vIGBpc1Zpc2libGVgIOqwkuydtCDrs4Dqsr3rkKAg65WMIO2ItO2MgSDtkZzsi5xcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAoaXNWaXNpYmxlKSB7XG4gIC8vICAgICBzZXRWaXNpYmxlKHRydWUpO1xuICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiBzZXRWaXNpYmxlKGZhbHNlKSwgMjAwMCk7IC8vIDLstIgg7ZuEIOyekOuPmSDsiKjquYBcbiAgLy8gICB9XG4gIC8vIH0sIFtpc1Zpc2libGVdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudG9vbHRpcF9jb250YWluZXJ9PlxuICAgICAge2NoaWxkcmVufVxuICAgICAge3Zpc2libGUgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvb2x0aXB9ICR7c3R5bGVzW2B0b29sdGlwXyR7cG9zaXRpb259YF19YH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwX3RleHR9Pnt0ZXh0fTwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvb2x0aXBfYXJyb3d9ICR7XG4gICAgICAgICAgICAgIHN0eWxlc1tgdG9vbHRpcF9hcnJvd18ke3Bvc2l0aW9ufWBdXG4gICAgICAgICAgICB9YH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJUb29sdGlwIiwidGV4dCIsInBvc2l0aW9uIiwiaXNWaXNpYmxlIiwiY2hpbGRyZW4iLCJ2aXNpYmxlIiwiZGl2IiwiY2xhc3NOYW1lIiwidG9vbHRpcF9jb250YWluZXIiLCJ0b29sdGlwIiwidG9vbHRpcF90ZXh0IiwidG9vbHRpcF9hcnJvdyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/Tooltip.tsx\n"));

/***/ })

});
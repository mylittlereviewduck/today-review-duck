"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/_components/atoms/Tooltip.tsx":
/*!***********************************************!*\
  !*** ./src/app/_components/atoms/Tooltip.tsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tooltip; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/tooltip.module.css */ \"(app-pages-browser)/./src/app/_components/atoms/_css/tooltip.module.css\");\n/* harmony import */ var _css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Tooltip(param) {\n    let { text, position = \"center\", isVisible = false, children } = param;\n    _s();\n    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(isVisible);\n    // `isVisible` 값이 변경될 때 툴팁 표시\n    useEffect(()=>{\n        if (isVisible) {\n            setVisible(true);\n            setTimeout(()=>setVisible(false), 2000); // 2초 후 자동 숨김\n        }\n    }, [\n        isVisible\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip_container),\n        children: [\n            children,\n            visible && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip), \" \").concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default())[\"tooltip_\".concat(position)]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip_text),\n                        children: text\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default().tooltip_arrow), \" \").concat((_css_tooltip_module_css__WEBPACK_IMPORTED_MODULE_1___default())[\"tooltip_arrow_\".concat(position)])\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n                lineNumber: 26,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/Tooltip.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n_s(Tooltip, \"MD/hMbxQqM+/z7YSLZqGrXpn8AQ=\");\n_c = Tooltip;\nvar _c;\n$RefreshReg$(_c, \"Tooltip\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvVG9vbHRpcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0M7QUFDZDtBQVNsQixTQUFTRSxRQUFRLEtBQXdFO1FBQXhFLEVBQUVDLElBQUksRUFBRUMsV0FBVyxRQUFRLEVBQUVDLFlBQVksS0FBSyxFQUFFQyxRQUFRLEVBQWdCLEdBQXhFOztJQUM5QixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUNJO0lBRXZDLDZCQUE2QjtJQUM3QkksVUFBVTtRQUNSLElBQUlKLFdBQVc7WUFDYkcsV0FBVztZQUNYRSxXQUFXLElBQU1GLFdBQVcsUUFBUSxPQUFPLGFBQWE7UUFDMUQ7SUFDRixHQUFHO1FBQUNIO0tBQVU7SUFFZCxxQkFDRSw4REFBQ007UUFBSUMsV0FBV1osa0ZBQXdCOztZQUNyQ007WUFDQUMseUJBQ0MsOERBQUNJO2dCQUFJQyxXQUFXLEdBQXFCWixPQUFsQkEsd0VBQWMsRUFBQyxLQUFpQyxPQUE5QkEsZ0VBQU0sQ0FBQyxXQUFvQixPQUFUSSxVQUFXOztrQ0FDaEUsOERBQUNPO3dCQUFJQyxXQUFXWiw2RUFBbUI7a0NBQUdHOzs7Ozs7a0NBQ3RDLDhEQUFDUTt3QkFBSUMsV0FBVyxHQUEyQlosT0FBeEJBLDhFQUFvQixFQUFDLEtBQXVDLE9BQXBDQSxnRUFBTSxDQUFDLGlCQUEwQixPQUFUSSxVQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLeEY7R0F0QndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2F0b21zL1Rvb2x0aXAudHN4P2Y1OTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9fY3NzL3Rvb2x0aXAubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIFRvb2x0aXBQcm9wcyB7XG4gIHRleHQ6IHN0cmluZztcbiAgcG9zaXRpb24/OiBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7IC8vIO2ItO2MgSDsnITsuZhcbiAgaXNWaXNpYmxlPzogYm9vbGVhbjsgLy8g67O07J206riwIOyXrOu2gFxuICBjaGlsZHJlbjogUmVhY3QuUmVhY3ROb2RlO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUb29sdGlwKHsgdGV4dCwgcG9zaXRpb24gPSBcImNlbnRlclwiLCBpc1Zpc2libGUgPSBmYWxzZSwgY2hpbGRyZW4gfTogVG9vbHRpcFByb3BzKSB7XG4gIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9IHVzZVN0YXRlKGlzVmlzaWJsZSk7XG5cbiAgLy8gYGlzVmlzaWJsZWAg6rCS7J20IOuzgOqyveuQoCDrlYwg7Yi07YyBIO2RnOyLnFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChpc1Zpc2libGUpIHtcbiAgICAgIHNldFZpc2libGUodHJ1ZSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHNldFZpc2libGUoZmFsc2UpLCAyMDAwKTsgLy8gMuy0iCDtm4Qg7J6Q64+ZIOyIqOq5gFxuICAgIH1cbiAgfSwgW2lzVmlzaWJsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy50b29sdGlwX2NvbnRhaW5lcn0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7dmlzaWJsZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMudG9vbHRpcH0gJHtzdHlsZXNbYHRvb2x0aXBfJHtwb3NpdGlvbn1gXX1gfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRvb2x0aXBfdGV4dH0+e3RleHR9PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy50b29sdGlwX2Fycm93fSAke3N0eWxlc1tgdG9vbHRpcF9hcnJvd18ke3Bvc2l0aW9ufWBdfWB9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJUb29sdGlwIiwidGV4dCIsInBvc2l0aW9uIiwiaXNWaXNpYmxlIiwiY2hpbGRyZW4iLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZUVmZmVjdCIsInNldFRpbWVvdXQiLCJkaXYiLCJjbGFzc05hbWUiLCJ0b29sdGlwX2NvbnRhaW5lciIsInRvb2x0aXAiLCJ0b29sdGlwX3RleHQiLCJ0b29sdGlwX2Fycm93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/Tooltip.tsx\n"));

/***/ })

});
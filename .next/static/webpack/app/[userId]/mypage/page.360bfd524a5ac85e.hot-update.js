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

/***/ "(app-pages-browser)/./src/app/_components/atoms/TextArea.tsx":
/*!************************************************!*\
  !*** ./src/app/_components/atoms/TextArea.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TextArea; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/textarea.module.css */ \"(app-pages-browser)/./src/app/_components/atoms/_css/textarea.module.css\");\n/* harmony import */ var _css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction TextArea(param) {\n    let { name, label, placeholder, value, onChange, subInfo, height = \"100px\", maxLength = 100 } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default().textarea_wrapper),\n        children: [\n            label && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: name,\n                children: label\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/TextArea.tsx\",\n                lineNumber: 27,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default().textarea_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        id: name,\n                        name: name,\n                        placeholder: placeholder,\n                        value: value,\n                        onChange: onChange,\n                        maxLength: maxLength,\n                        style: {\n                            height\n                        },\n                        className: (_css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default().textarea)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/TextArea.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_css_textarea_module_css__WEBPACK_IMPORTED_MODULE_1___default().sub_info),\n                        children: \"\".concat(value.length, \"/\").concat(maxLength)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/TextArea.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/TextArea.tsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/TextArea.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_c = TextArea;\nvar _c;\n$RefreshReg$(_c, \"TextArea\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvVGV4dEFyZWEudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ2dEO0FBYWpDLFNBQVNDLFNBQVMsS0FTekI7UUFUeUIsRUFDL0JDLElBQUksRUFDSkMsS0FBSyxFQUNMQyxXQUFXLEVBQ1hDLEtBQUssRUFDTEMsUUFBUSxFQUNSQyxPQUFPLEVBQ1BDLFNBQVMsT0FBTyxFQUNoQkMsWUFBWSxHQUFHLEVBQ1QsR0FUeUI7SUFVL0IscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdYLGtGQUF1Qjs7WUFDcENHLHVCQUFTLDhEQUFDQTtnQkFBTVUsU0FBU1g7MEJBQU9DOzs7Ozs7MEJBQ2pDLDhEQUFDTztnQkFBSUMsV0FBV1gsOEVBQW1COztrQ0FDakMsOERBQUNlO3dCQUNDQyxJQUFJZDt3QkFDSkEsTUFBTUE7d0JBQ05FLGFBQWFBO3dCQUNiQyxPQUFPQTt3QkFDUEMsVUFBVUE7d0JBQ1ZHLFdBQVdBO3dCQUNYUSxPQUFPOzRCQUFFVDt3QkFBTzt3QkFDaEJHLFdBQVdYLDBFQUFlOzs7Ozs7a0NBRzVCLDhEQUFDa0I7d0JBQ0NQLFdBQVdYLDBFQUFlO2tDQUMxQixHQUFtQlMsT0FBaEJKLE1BQU1lLE1BQU0sRUFBQyxLQUFhLE9BQVZYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJN0I7S0EvQndCUiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2F0b21zL1RleHRBcmVhLnRzeD9kZjE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvdGV4dGFyZWEubW9kdWxlLmNzc1wiO1xuXG50eXBlIFByb3BzID0ge1xuICBuYW1lOiBzdHJpbmc7XG4gIGxhYmVsPzogc3RyaW5nO1xuICBwbGFjZWhvbGRlcj86IHN0cmluZztcbiAgdmFsdWU6IHN0cmluZztcbiAgb25DaGFuZ2U6IChldmVudDogQ2hhbmdlRXZlbnQ8SFRNTFRleHRBcmVhRWxlbWVudD4pID0+IHZvaWQ7XG4gIHN1YkluZm8/OiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZztcbiAgbWF4TGVuZ3RoPzogbnVtYmVyO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVGV4dEFyZWEoe1xuICBuYW1lLFxuICBsYWJlbCxcbiAgcGxhY2Vob2xkZXIsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgc3ViSW5mbyxcbiAgaGVpZ2h0ID0gXCIxMDBweFwiLFxuICBtYXhMZW5ndGggPSAxMDAsXG59OiBQcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWFfd3JhcHBlcn0+XG4gICAgICB7bGFiZWwgJiYgPGxhYmVsIGh0bWxGb3I9e25hbWV9PntsYWJlbH08L2xhYmVsPn1cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGV4dGFyZWFfYm94fT5cbiAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgaWQ9e25hbWV9XG4gICAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZX1cbiAgICAgICAgICBtYXhMZW5ndGg9e21heExlbmd0aH1cbiAgICAgICAgICBzdHlsZT17eyBoZWlnaHQgfX1cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50ZXh0YXJlYX1cbiAgICAgICAgLz5cblxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnN1Yl9pbmZvfVxuICAgICAgICA+e2Ake3ZhbHVlLmxlbmd0aH0vJHttYXhMZW5ndGh9YH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJUZXh0QXJlYSIsIm5hbWUiLCJsYWJlbCIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJvbkNoYW5nZSIsInN1YkluZm8iLCJoZWlnaHQiLCJtYXhMZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJ0ZXh0YXJlYV93cmFwcGVyIiwiaHRtbEZvciIsInRleHRhcmVhX2JveCIsInRleHRhcmVhIiwiaWQiLCJzdHlsZSIsInNwYW4iLCJzdWJfaW5mbyIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/TextArea.tsx\n"));

/***/ })

});
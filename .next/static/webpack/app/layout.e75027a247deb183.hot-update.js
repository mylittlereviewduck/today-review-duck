"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/_components/toast/ToastContainer.tsx":
/*!******************************************************!*\
  !*** ./src/app/_components/toast/ToastContainer.tsx ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useToast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_hooks/useToast */ \"(app-pages-browser)/./src/app/_hooks/useToast.ts\");\n/* harmony import */ var _toast_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./toast.module.css */ \"(app-pages-browser)/./src/app/_components/toast/toast.module.css\");\n/* harmony import */ var _toast_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_toast_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst ToastContainer = (param)=>{\n    let { width, top, right, transform } = param;\n    _s();\n    const { toasts, removeToast } = (0,_app_hooks_useToast__WEBPACK_IMPORTED_MODULE_1__.useToast)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().toast_container),\n        style: {\n            width,\n            top,\n            right,\n            transform\n        },\n        children: toasts.map((toast)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_toast_module_css__WEBPACK_IMPORTED_MODULE_2___default().toast), \" \").concat((_toast_module_css__WEBPACK_IMPORTED_MODULE_2___default())[toast.type]),\n                onClick: ()=>removeToast(toast.id),\n                children: toast.message\n            }, toast.id, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/toast/ToastContainer.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/toast/ToastContainer.tsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ToastContainer, \"hDKWezg0iwBHWd7k0YqUAkfEZE4=\", false, function() {\n    return [\n        _app_hooks_useToast__WEBPACK_IMPORTED_MODULE_1__.useToast\n    ];\n});\n_c = ToastContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ToastContainer);\nvar _c;\n$RefreshReg$(_c, \"ToastContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvdG9hc3QvVG9hc3RDb250YWluZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBaUQ7QUFDVDtBQU94QyxNQUFNRSxpQkFBaUI7UUFBQyxFQUN0QkMsS0FBSyxFQUNMQyxHQUFHLEVBQ0hDLEtBQUssRUFDTEMsU0FBUyxFQUNXOztJQUNwQixNQUFNLEVBQUVDLE1BQU0sRUFBRUMsV0FBVyxFQUFFLEdBQUdSLDZEQUFRQTtJQUV4QyxxQkFDRSw4REFBQ1M7UUFDQ0MsV0FBV1QsMEVBQXNCO1FBQ2pDVyxPQUFPO1lBQUVUO1lBQU9DO1lBQUtDO1lBQU9DO1FBQVU7a0JBRXJDQyxPQUFPTSxHQUFHLENBQUMsQ0FBQ0Msc0JBQ1gsOERBQUNMO2dCQUVDQyxXQUFXLEdBQW1CVCxPQUFoQkEsZ0VBQVksRUFBQyxLQUFzQixPQUFuQkEsMERBQU0sQ0FBQ2EsTUFBTUMsSUFBSSxDQUFDO2dCQUNoREMsU0FBUyxJQUFNUixZQUFZTSxNQUFNRyxFQUFFOzBCQUVsQ0gsTUFBTUksT0FBTztlQUpUSixNQUFNRyxFQUFFOzs7Ozs7Ozs7O0FBU3ZCO0dBeEJNZjs7UUFNNEJGLHlEQUFRQTs7O0tBTnBDRTtBQTBCTiwrREFBZUEsY0FBY0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL3RvYXN0L1RvYXN0Q29udGFpbmVyLnRzeD8zZDFiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSBcIkAvYXBwL19ob29rcy91c2VUb2FzdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi90b2FzdC5tb2R1bGUuY3NzXCI7XG5cbnR5cGUgVG9hc3RDb250YWluZXJQcm9wcyA9IHtcbiAgd2lkdGg/OiBzdHJpbmc7XG5cdHRvcCwgcmlnaHQsIHRyYW5zZm9ybVxufTtcblxuY29uc3QgVG9hc3RDb250YWluZXIgPSAoe1xuICB3aWR0aCxcbiAgdG9wLFxuICByaWdodCxcbiAgdHJhbnNmb3JtLFxufTogVG9hc3RDb250YWluZXJQcm9wcykgPT4ge1xuICBjb25zdCB7IHRvYXN0cywgcmVtb3ZlVG9hc3QgfSA9IHVzZVRvYXN0KCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9e3N0eWxlcy50b2FzdF9jb250YWluZXJ9XG4gICAgICBzdHlsZT17eyB3aWR0aCwgdG9wLCByaWdodCwgdHJhbnNmb3JtIH19XG4gICAgPlxuICAgICAge3RvYXN0cy5tYXAoKHRvYXN0KSA9PiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBrZXk9e3RvYXN0LmlkfVxuICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLnRvYXN0fSAke3N0eWxlc1t0b2FzdC50eXBlXX1gfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJlbW92ZVRvYXN0KHRvYXN0LmlkKX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0b2FzdC5tZXNzYWdlfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVG9hc3RDb250YWluZXI7XG4iXSwibmFtZXMiOlsidXNlVG9hc3QiLCJzdHlsZXMiLCJUb2FzdENvbnRhaW5lciIsIndpZHRoIiwidG9wIiwicmlnaHQiLCJ0cmFuc2Zvcm0iLCJ0b2FzdHMiLCJyZW1vdmVUb2FzdCIsImRpdiIsImNsYXNzTmFtZSIsInRvYXN0X2NvbnRhaW5lciIsInN0eWxlIiwibWFwIiwidG9hc3QiLCJ0eXBlIiwib25DbGljayIsImlkIiwibWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/toast/ToastContainer.tsx\n"));

/***/ })

});
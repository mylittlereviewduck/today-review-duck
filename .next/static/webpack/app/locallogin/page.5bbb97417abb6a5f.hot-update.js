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

/***/ "(app-pages-browser)/./src/app/_components/modal/Modal.tsx":
/*!*********************************************!*\
  !*** ./src/app/_components/modal/Modal.tsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Modal; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_hooks/useModal */ \"(app-pages-browser)/./src/app/_hooks/useModal.ts\");\n/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal.module.css */ \"(app-pages-browser)/./src/app/_components/modal/modal.module.css\");\n/* harmony import */ var _modal_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Modal(param) {\n    let { width, height, borderRadius = \"12px\" } = param;\n    _s();\n    const { modal, closeModal } = (0,_app_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__.useModal)();\n    if (!modal.isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().overlay),\n        onClick: closeModal,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_modal_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),\n            style: {\n                width,\n                height,\n                borderRadius\n            },\n            onClick: (e)=>e.stopPropagation(),\n            children: modal.content\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/modal/Modal.tsx\",\n            lineNumber: 20,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/modal/Modal.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(Modal, \"irF5plfUZrVF+ptcovs9LsFnz/o=\", false, function() {\n    return [\n        _app_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__.useModal\n    ];\n});\n_c = Modal;\nvar _c;\n$RefreshReg$(_c, \"Modal\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbW9kYWwvTW9kYWwudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVDtBQVF6QixTQUFTRSxNQUFNLEtBSWpCO1FBSmlCLEVBQzVCQyxLQUFLLEVBQ0xDLE1BQU0sRUFDTkMsZUFBZSxNQUFNLEVBQ1YsR0FKaUI7O0lBSzVCLE1BQU0sRUFBRUMsS0FBSyxFQUFFQyxVQUFVLEVBQUUsR0FBR1AsNkRBQVFBO0lBQ3RDLElBQUksQ0FBQ00sTUFBTUUsTUFBTSxFQUFFLE9BQU87SUFFMUIscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdULGtFQUFjO1FBQUVXLFNBQVNMO2tCQUN2Qyw0RUFBQ0U7WUFDQ0MsV0FBV1QsZ0VBQVk7WUFDdkJZLE9BQU87Z0JBQUVWO2dCQUFPQztnQkFBUUM7WUFBYTtZQUNyQ08sU0FBUyxDQUFDRSxJQUFNQSxFQUFFQyxlQUFlO3NCQUVoQ1QsTUFBTVUsT0FBTzs7Ozs7Ozs7Ozs7QUFJdEI7R0FuQndCZDs7UUFLUUYseURBQVFBOzs7S0FMaEJFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbW9kYWwvTW9kYWwudHN4PzE0YTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTW9kYWwgfSBmcm9tIFwiQC9hcHAvX2hvb2tzL3VzZU1vZGFsXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL21vZGFsLm1vZHVsZS5jc3NcIjtcblxuaW50ZXJmYWNlIE1vZGFsUHJvcHMge1xuICB3aWR0aD86IHN0cmluZztcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBib3JkZXJSYWRpdXM/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vZGFsKHtcbiAgd2lkdGgsXG4gIGhlaWdodCxcbiAgYm9yZGVyUmFkaXVzID0gXCIxMnB4XCIsXG59OiBNb2RhbFByb3BzKSB7XG4gIGNvbnN0IHsgbW9kYWwsIGNsb3NlTW9kYWwgfSA9IHVzZU1vZGFsKCk7XG4gIGlmICghbW9kYWwuaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0gb25DbGljaz17Y2xvc2VNb2RhbH0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLm1vZGFsfVxuICAgICAgICBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0LCBib3JkZXJSYWRpdXMgfX1cbiAgICAgICAgb25DbGljaz17KGUpID0+IGUuc3RvcFByb3BhZ2F0aW9uKCl9XG4gICAgICA+XG4gICAgICAgIHttb2RhbC5jb250ZW50fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlTW9kYWwiLCJzdHlsZXMiLCJNb2RhbCIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyUmFkaXVzIiwibW9kYWwiLCJjbG9zZU1vZGFsIiwiaXNPcGVuIiwiZGl2IiwiY2xhc3NOYW1lIiwib3ZlcmxheSIsIm9uQ2xpY2siLCJzdHlsZSIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJjb250ZW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/modal/Modal.tsx\n"));

/***/ })

});
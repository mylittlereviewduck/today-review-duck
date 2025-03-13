"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/localsignup/page",{

/***/ "(app-pages-browser)/./src/app/_hooks/useInspectEmail.ts":
/*!*******************************************!*\
  !*** ./src/app/_hooks/useInspectEmail.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useInspectEmail: function() { return /* binding */ useInspectEmail; }\n/* harmony export */ });\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query@5.32.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useMutation.js\");\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/axios */ \"(app-pages-browser)/./src/app/api/axios.ts\");\n\n\n/*\n  가입 이메일 검사 API 요청 Hook\n */ const useInspectEmail = ()=>{\n    return (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useMutation)({\n        mutationFn: async (email)=>{\n            const response = await _api_axios__WEBPACK_IMPORTED_MODULE_0__.authInstance.post(\"/email//auth/email/inspect-duplicate\", {\n                email\n            });\n            return response.data;\n        }\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2hvb2tzL3VzZUluc3BlY3RFbWFpbC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBb0Q7QUFDUjtBQUU1Qzs7Q0FFQyxHQUNNLE1BQU1FLGtCQUFrQjtJQUM3QixPQUFPRixrRUFBV0EsQ0FBQztRQUNqQkcsWUFBWSxPQUFPQztZQUNqQixNQUFNQyxXQUFXLE1BQU1KLG9EQUFZQSxDQUFDSyxJQUFJLENBQUMsd0NBQXdDO2dCQUFFRjtZQUFNO1lBQ3pGLE9BQU9DLFNBQVNFLElBQUk7UUFDdEI7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9faG9va3MvdXNlSW5zcGVjdEVtYWlsLnRzP2E0MDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlTXV0YXRpb24gfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBhdXRoSW5zdGFuY2UgfSBmcm9tIFwiLi4vYXBpL2F4aW9zXCI7XG5cbi8qXG4gIOqwgOyehSDsnbTrqZTsnbwg6rKA7IKsIEFQSSDsmpTssq0gSG9va1xuICovXG5leHBvcnQgY29uc3QgdXNlSW5zcGVjdEVtYWlsID0gKCkgPT4ge1xuICByZXR1cm4gdXNlTXV0YXRpb24oe1xuICAgIG11dGF0aW9uRm46IGFzeW5jIChlbWFpbDogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhJbnN0YW5jZS5wb3N0KFwiL2VtYWlsLy9hdXRoL2VtYWlsL2luc3BlY3QtZHVwbGljYXRlXCIsIHsgZW1haWwgfSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgICB9LFxuICB9KTtcbn07XG4iXSwibmFtZXMiOlsidXNlTXV0YXRpb24iLCJhdXRoSW5zdGFuY2UiLCJ1c2VJbnNwZWN0RW1haWwiLCJtdXRhdGlvbkZuIiwiZW1haWwiLCJyZXNwb25zZSIsInBvc3QiLCJkYXRhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_hooks/useInspectEmail.ts\n"));

/***/ })

});
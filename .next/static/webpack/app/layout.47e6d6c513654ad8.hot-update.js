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

/***/ "(app-pages-browser)/./src/app/_providers/providers.tsx":
/*!******************************************!*\
  !*** ./src/app/_providers/providers.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Providers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+query-core@5.32.1/node_modules/@tanstack/query-core/build/modern/queryClient.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query@5.32.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query-devtools@5.67.1_@tanstack+react-query@5.32.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-query-devtools/build/modern/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Providers(param) {\n    let { children } = param;\n    _s();\n    const [client] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.QueryClient({\n        defaultOptions: {\n            // react-query 전역 설정\n            queries: {\n                refetchOnWindowFocus: false,\n                retryOnMount: true,\n                refetchOnReconnect: false,\n                retry: false\n            }\n        }\n    }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_1__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n            client: client,\n            children: [\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_5__.ReactQueryDevtools, {\n                    initialIsOpen: \"local\" === \"local\"\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n            lineNumber: 25,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Providers, \"oDNtB5FnzCFxPJ8UZIM9H1ZaSxE=\");\n_c = Providers;\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX3Byb3ZpZGVycy9wcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFFb0M7QUFDUTtBQUM2QjtBQUNMO0FBRXJELFNBQVNLLFVBQVUsS0FBcUM7UUFBckMsRUFBRUMsUUFBUSxFQUEyQixHQUFyQzs7SUFDaEMsTUFBTSxDQUFDQyxPQUFPLEdBQUdOLCtDQUFRQSxDQUN2QixJQUFJRSw4REFBV0EsQ0FBQztRQUNkSyxnQkFBZ0I7WUFDZCxvQkFBb0I7WUFDcEJDLFNBQVM7Z0JBQ1BDLHNCQUFzQjtnQkFDdEJDLGNBQWM7Z0JBQ2RDLG9CQUFvQjtnQkFDcEJDLE9BQU87WUFDVDtRQUNGO0lBQ0Y7SUFHRixxQkFDRSw4REFBQ2IsOENBQVVBO2tCQUNULDRFQUFDRSxzRUFBbUJBO1lBQUNLLFFBQVFBOztnQkFDMUJEOzhCQUNELDhEQUFDRiw4RUFBa0JBO29CQUNqQlUsZUFBZUMsT0FBNEIsS0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLMUQ7R0F6QndCVjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19wcm92aWRlcnMvcHJvdmlkZXJzLnRzeD85NDgzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyBSZWNvaWxSb290IH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgUmVhY3ROb2RlLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgUXVlcnlDbGllbnRQcm92aWRlciwgUXVlcnlDbGllbnQgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgeyBSZWFjdFF1ZXJ5RGV2dG9vbHMgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5LWRldnRvb2xzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb3ZpZGVycyh7IGNoaWxkcmVuIH06IHsgY2hpbGRyZW46IFJlYWN0Tm9kZSB9KSB7XG4gIGNvbnN0IFtjbGllbnRdID0gdXNlU3RhdGUoXG4gICAgbmV3IFF1ZXJ5Q2xpZW50KHtcbiAgICAgIGRlZmF1bHRPcHRpb25zOiB7XG4gICAgICAgIC8vIHJlYWN0LXF1ZXJ5IOyghOyXrSDshKTsoJVcbiAgICAgICAgcXVlcmllczoge1xuICAgICAgICAgIHJlZmV0Y2hPbldpbmRvd0ZvY3VzOiBmYWxzZSxcbiAgICAgICAgICByZXRyeU9uTW91bnQ6IHRydWUsXG4gICAgICAgICAgcmVmZXRjaE9uUmVjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICByZXRyeTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVjb2lsUm9vdD5cbiAgICAgIDxRdWVyeUNsaWVudFByb3ZpZGVyIGNsaWVudD17Y2xpZW50fT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8UmVhY3RRdWVyeURldnRvb2xzXG4gICAgICAgICAgaW5pdGlhbElzT3Blbj17cHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfTU9ERSA9PT0gXCJsb2NhbFwifVxuICAgICAgICAvPlxuICAgICAgPC9RdWVyeUNsaWVudFByb3ZpZGVyPlxuICAgIDwvUmVjb2lsUm9vdD5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJSZWNvaWxSb290IiwidXNlU3RhdGUiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJSZWFjdFF1ZXJ5RGV2dG9vbHMiLCJQcm92aWRlcnMiLCJjaGlsZHJlbiIsImNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicmV0cnlPbk1vdW50IiwicmVmZXRjaE9uUmVjb25uZWN0IiwicmV0cnkiLCJpbml0aWFsSXNPcGVuIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX01PREUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_providers/providers.tsx\n"));

/***/ })

});
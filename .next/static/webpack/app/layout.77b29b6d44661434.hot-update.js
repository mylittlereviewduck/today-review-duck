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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Providers; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+query-core@5.32.1/node_modules/@tanstack/query-core/build/modern/queryClient.js\");\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tanstack/react-query */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query@5.32.1_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js\");\n/* harmony import */ var _tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tanstack/react-query-devtools */ \"(app-pages-browser)/./node_modules/.pnpm/@tanstack+react-query-devtools@5.67.1_@tanstack+react-query@5.32.1_react@18.3.1__react@18.3.1/node_modules/@tanstack/react-query-devtools/build/modern/index.js\");\n/* harmony import */ var _api_axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/axios */ \"(app-pages-browser)/./src/app/api/axios.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Providers(param) {\n    let { children } = param;\n    _s();\n    const [client] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient({\n        defaultOptions: {\n            // react-query 전역 설정\n            queries: {\n                refetchOnWindowFocus: false,\n                refetchOnReconnect: false,\n                retry: false\n            },\n            mutations: {\n                onError: (error)=>(0,_api_axios__WEBPACK_IMPORTED_MODULE_3__.handleApiError)(error)\n            }\n        }\n    }));\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(recoil__WEBPACK_IMPORTED_MODULE_1__.RecoilRoot, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_5__.QueryClientProvider, {\n            client: client,\n            children: [\n                children,\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ToastContainer, {}, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n                    lineNumber: 32,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query_devtools__WEBPACK_IMPORTED_MODULE_6__.ReactQueryDevtools, {\n                    initialIsOpen: \"local\" === \"local\"\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n            lineNumber: 29,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_providers/providers.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Providers, \"l+hOM4QS5yoNZyse9sFWtfWOaZA=\");\n_c = Providers;\nvar _c;\n$RefreshReg$(_c, \"Providers\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX3Byb3ZpZGVycy9wcm92aWRlcnMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBRW9DO0FBQ1E7QUFDNkI7QUFDTDtBQUV0QjtBQUUvQixTQUFTTSxVQUFVLEtBQXFDO1FBQXJDLEVBQUVDLFFBQVEsRUFBMkIsR0FBckM7O0lBQ2hDLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHUCwrQ0FBUUEsQ0FDdkIsSUFBSUUsOERBQVdBLENBQUM7UUFDZE0sZ0JBQWdCO1lBQ2Qsb0JBQW9CO1lBQ3BCQyxTQUFTO2dCQUNQQyxzQkFBc0I7Z0JBQ3RCQyxvQkFBb0I7Z0JBQ3BCQyxPQUFPO1lBQ1Q7WUFDQUMsV0FBVztnQkFDVEMsU0FBUyxDQUFDQyxRQUFtQlgsMERBQWNBLENBQUNXO1lBQzlDO1FBQ0Y7SUFDRjtJQUdGLHFCQUNFLDhEQUFDaEIsOENBQVVBO2tCQUNULDRFQUFDRSxzRUFBbUJBO1lBQUNNLFFBQVFBOztnQkFDMUJEOzhCQUVMLDhEQUFDVTs7Ozs7OEJBQ0csOERBQUNiLDhFQUFrQkE7b0JBQ2pCYyxlQUFlQyxPQUE0QixLQUFLOzs7Ozs7Ozs7Ozs7Ozs7OztBQUsxRDtHQTdCd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX3Byb3ZpZGVycy9wcm92aWRlcnMudHN4Pzk0ODMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCB7IFJlY29pbFJvb3QgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBSZWFjdE5vZGUsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBRdWVyeUNsaWVudFByb3ZpZGVyLCBRdWVyeUNsaWVudCB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCB7IFJlYWN0UXVlcnlEZXZ0b29scyB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnktZGV2dG9vbHNcIjtcbmltcG9ydCB7IHBvc3RSZWZyZXNoVG9rZW4gfSBmcm9tIFwiLi4vYXBpL2F1dGhcIjtcbmltcG9ydCB7IGhhbmRsZUFwaUVycm9yIH0gZnJvbSBcIi4uL2FwaS9heGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm92aWRlcnMoeyBjaGlsZHJlbiB9OiB7IGNoaWxkcmVuOiBSZWFjdE5vZGUgfSkge1xuICBjb25zdCBbY2xpZW50XSA9IHVzZVN0YXRlKFxuICAgIG5ldyBRdWVyeUNsaWVudCh7XG4gICAgICBkZWZhdWx0T3B0aW9uczoge1xuICAgICAgICAvLyByZWFjdC1xdWVyeSDsoITsl60g7ISk7KCVXG4gICAgICAgIHF1ZXJpZXM6IHtcbiAgICAgICAgICByZWZldGNoT25XaW5kb3dGb2N1czogZmFsc2UsXG4gICAgICAgICAgcmVmZXRjaE9uUmVjb25uZWN0OiBmYWxzZSxcbiAgICAgICAgICByZXRyeTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG11dGF0aW9uczoge1xuICAgICAgICAgIG9uRXJyb3I6IChlcnJvcjogdW5rbm93bikgPT4gaGFuZGxlQXBpRXJyb3IoZXJyb3IpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KVxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPFJlY29pbFJvb3Q+XG4gICAgICA8UXVlcnlDbGllbnRQcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgIHtjaGlsZHJlbn1cblxuXHRcdFx0XHQ8VG9hc3RDb250YWluZXIgLz5cbiAgICAgICAgPFJlYWN0UXVlcnlEZXZ0b29sc1xuICAgICAgICAgIGluaXRpYWxJc09wZW49e3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01PREUgPT09IFwibG9jYWxcIn1cbiAgICAgICAgLz5cbiAgICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgICA8L1JlY29pbFJvb3Q+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVjb2lsUm9vdCIsInVzZVN0YXRlIiwiUXVlcnlDbGllbnRQcm92aWRlciIsIlF1ZXJ5Q2xpZW50IiwiUmVhY3RRdWVyeURldnRvb2xzIiwiaGFuZGxlQXBpRXJyb3IiLCJQcm92aWRlcnMiLCJjaGlsZHJlbiIsImNsaWVudCIsImRlZmF1bHRPcHRpb25zIiwicXVlcmllcyIsInJlZmV0Y2hPbldpbmRvd0ZvY3VzIiwicmVmZXRjaE9uUmVjb25uZWN0IiwicmV0cnkiLCJtdXRhdGlvbnMiLCJvbkVycm9yIiwiZXJyb3IiLCJUb2FzdENvbnRhaW5lciIsImluaXRpYWxJc09wZW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfTU9ERSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_providers/providers.tsx\n"));

/***/ })

});
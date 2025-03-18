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

/***/ "(app-pages-browser)/./src/app/api/axios.ts":
/*!******************************!*\
  !*** ./src/app/api/axios.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authInstance: function() { return /* binding */ authInstance; },\n/* harmony export */   axiosInstance: function() { return /* binding */ axiosInstance; },\n/* harmony export */   handleApiError: function() { return /* binding */ handleApiError; },\n/* harmony export */   userInstance: function() { return /* binding */ userInstance; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.8.2/node_modules/axios/lib/axios.js\");\n/* harmony import */ var _utils_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_utils/cookies */ \"(app-pages-browser)/./src/app/_utils/cookies.ts\");\n\n\nconst locationURL =  true ? \"\".concat(window.location.origin, \"/api\") : 0;\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n    baseURL: locationURL,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n// axios.defaults.withCredentials = true; // 쿠키 자동 포함\nconsole.log(\"getAuthorityCookie : \", \"Bearer \".concat((0,_utils_cookies__WEBPACK_IMPORTED_MODULE_0__.getAuthorityCookie)(\"accessToken\")));\n// ✅ 공통 API Instance 생성 함수 (프록시 적용)\nfunction createAPIInstance(basePath) {\n    const instance = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        baseURL: \"/api/proxy/\".concat(basePath),\n        headers: {\n            \"Content-Type\": \"application/json\",\n            Authorization: \"Bearer \".concat((0,_utils_cookies__WEBPACK_IMPORTED_MODULE_0__.getAuthorityCookie)(\"accessToken\")),\n            \"X-CSRF-Token\": (0,_utils_cookies__WEBPACK_IMPORTED_MODULE_0__.getAuthorityCookie)(\"csrfToken\") || \"\"\n        }\n    });\n    return instance;\n}\n/* ✅ 서비스별 API Instance */ const authInstance = createAPIInstance(\"auth\");\nconst userInstance = createAPIInstance(\"user\");\n// ✅ 에러 처리 함수\nconst handleApiError = (error)=>{\n    if (axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].isAxiosError(error)) {\n        if (error.response) {\n            console.error(\"API 에러:\", error.response.data);\n        } else if (error.request) {\n            console.error(\"서버 응답 없음\");\n        }\n    } else if (error instanceof Error) {\n        console.error(\"JavaScript Error\", error.message);\n    } else {\n        console.error(\"알 수 없는 에러 발생\");\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL2F4aW9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEwQjtBQUM2QjtBQUV2RCxNQUFNRSxjQUNKLEtBQTZCLEdBQ3pCLEdBQTBCLE9BQXZCQyxPQUFPQyxRQUFRLENBQUNDLE1BQU0sRUFBQyxVQUMxQixDQUE4QztBQUU3QyxNQUFNSSxnQkFBZ0JULDZDQUFLQSxDQUFDVSxNQUFNLENBQUM7SUFDeENDLFNBQVNUO0lBQ1RVLFNBQVM7UUFBRSxnQkFBZ0I7SUFBbUI7QUFDaEQsR0FBRztBQUVILHFEQUFxRDtBQUVyREMsUUFBUUMsR0FBRyxDQUNULHlCQUNBLFVBQTRDLE9BQWxDYixrRUFBa0JBLENBQUM7QUFHL0IsbUNBQW1DO0FBQ25DLFNBQVNjLGtCQUFrQkMsUUFBZ0I7SUFDekMsTUFBTUMsV0FBV2pCLDZDQUFLQSxDQUFDVSxNQUFNLENBQUM7UUFDNUJDLFNBQVMsY0FBdUIsT0FBVEs7UUFDdkJKLFNBQVM7WUFDUCxnQkFBZ0I7WUFDaEJNLGVBQWUsVUFBNEMsT0FBbENqQixrRUFBa0JBLENBQUM7WUFDNUMsZ0JBQWdCQSxrRUFBa0JBLENBQUMsZ0JBQWdCO1FBQ3JEO0lBQ0Y7SUFFQSxPQUFPZ0I7QUFDVDtBQUVBLHVCQUF1QixHQUNoQixNQUFNRSxlQUFlSixrQkFBa0IsUUFBUTtBQUMvQyxNQUFNSyxlQUFlTCxrQkFBa0IsUUFBUTtBQUV0RCxhQUFhO0FBQ04sTUFBTU0saUJBQWlCLENBQUNDO0lBQzdCLElBQUl0Qiw2Q0FBS0EsQ0FBQ3VCLFlBQVksQ0FBQ0QsUUFBUTtRQUM3QixJQUFJQSxNQUFNRSxRQUFRLEVBQUU7WUFDbEJYLFFBQVFTLEtBQUssQ0FBQyxXQUFXQSxNQUFNRSxRQUFRLENBQUNDLElBQUk7UUFDOUMsT0FBTyxJQUFJSCxNQUFNSSxPQUFPLEVBQUU7WUFDeEJiLFFBQVFTLEtBQUssQ0FBQztRQUNoQjtJQUNGLE9BQU8sSUFBSUEsaUJBQWlCSyxPQUFPO1FBQ2pDZCxRQUFRUyxLQUFLLENBQUMsb0JBQW9CQSxNQUFNTSxPQUFPO0lBQ2pELE9BQU87UUFDTGYsUUFBUVMsS0FBSyxDQUFDO0lBQ2hCO0FBQ0YsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FwaS9heGlvcy50cz8wOWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IGdldEF1dGhvcml0eUNvb2tpZSB9IGZyb20gXCIuLi9fdXRpbHMvY29va2llc1wiO1xuXG5jb25zdCBsb2NhdGlvblVSTCA9XG4gIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcbiAgICA/IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L2FwaWBcbiAgICA6IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0FQSV9ST1VURV9CQVNFX1VSTH0vYXBpYDtcblxuZXhwb3J0IGNvbnN0IGF4aW9zSW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICBiYXNlVVJMOiBsb2NhdGlvblVSTCxcbiAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxufSk7XG5cbi8vIGF4aW9zLmRlZmF1bHRzLndpdGhDcmVkZW50aWFscyA9IHRydWU7IC8vIOy/oO2CpCDsnpDrj5kg7Y+s7ZWoXG5cbmNvbnNvbGUubG9nKFxuICBcImdldEF1dGhvcml0eUNvb2tpZSA6IFwiLFxuICBgQmVhcmVyICR7Z2V0QXV0aG9yaXR5Q29va2llKFwiYWNjZXNzVG9rZW5cIil9YFxuKTtcblxuLy8g4pyFIOqzte2GtSBBUEkgSW5zdGFuY2Ug7IOd7ISxIO2VqOyImCAo7ZSE66Gd7IucIOyggeyaqSlcbmZ1bmN0aW9uIGNyZWF0ZUFQSUluc3RhbmNlKGJhc2VQYXRoOiBzdHJpbmcpIHtcbiAgY29uc3QgaW5zdGFuY2UgPSBheGlvcy5jcmVhdGUoe1xuICAgIGJhc2VVUkw6IGAvYXBpL3Byb3h5LyR7YmFzZVBhdGh9YCwgLy8g4pyFIO2UhOuhneyLnCBBUEkg7KCB7JqpXG4gICAgaGVhZGVyczoge1xuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7Z2V0QXV0aG9yaXR5Q29va2llKFwiYWNjZXNzVG9rZW5cIil9YCxcbiAgICAgIFwiWC1DU1JGLVRva2VuXCI6IGdldEF1dGhvcml0eUNvb2tpZShcImNzcmZUb2tlblwiKSB8fCBcIlwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLyog4pyFIOyEnOu5hOyKpOuzhCBBUEkgSW5zdGFuY2UgKi9cbmV4cG9ydCBjb25zdCBhdXRoSW5zdGFuY2UgPSBjcmVhdGVBUElJbnN0YW5jZShcImF1dGhcIik7XG5leHBvcnQgY29uc3QgdXNlckluc3RhbmNlID0gY3JlYXRlQVBJSW5zdGFuY2UoXCJ1c2VyXCIpO1xuXG4vLyDinIUg7JeQ65+sIOyymOumrCDtlajsiJhcbmV4cG9ydCBjb25zdCBoYW5kbGVBcGlFcnJvciA9IChlcnJvcjogdW5rbm93bikgPT4ge1xuICBpZiAoYXhpb3MuaXNBeGlvc0Vycm9yKGVycm9yKSkge1xuICAgIGlmIChlcnJvci5yZXNwb25zZSkge1xuICAgICAgY29uc29sZS5lcnJvcihcIkFQSSDsl5Drn6w6XCIsIGVycm9yLnJlc3BvbnNlLmRhdGEpO1xuICAgIH0gZWxzZSBpZiAoZXJyb3IucmVxdWVzdCkge1xuICAgICAgY29uc29sZS5lcnJvcihcIuyEnOuyhCDsnZHri7Ug7JeG7J2MXCIpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkphdmFTY3JpcHQgRXJyb3JcIiwgZXJyb3IubWVzc2FnZSk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcihcIuyVjCDsiJgg7JeG64qUIOyXkOufrCDrsJzsg51cIik7XG4gIH1cbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRBdXRob3JpdHlDb29raWUiLCJsb2NhdGlvblVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwicHJvY2VzcyIsImVudiIsIk5FWFRfUFVCTElDX0FQSV9ST1VURV9CQVNFX1VSTCIsImF4aW9zSW5zdGFuY2UiLCJjcmVhdGUiLCJiYXNlVVJMIiwiaGVhZGVycyIsImNvbnNvbGUiLCJsb2ciLCJjcmVhdGVBUElJbnN0YW5jZSIsImJhc2VQYXRoIiwiaW5zdGFuY2UiLCJBdXRob3JpemF0aW9uIiwiYXV0aEluc3RhbmNlIiwidXNlckluc3RhbmNlIiwiaGFuZGxlQXBpRXJyb3IiLCJlcnJvciIsImlzQXhpb3NFcnJvciIsInJlc3BvbnNlIiwiZGF0YSIsInJlcXVlc3QiLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/axios.ts\n"));

/***/ })

});
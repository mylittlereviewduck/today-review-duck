"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/socialsignin/page",{

/***/ "(app-pages-browser)/./src/app/api/axios.ts":
/*!******************************!*\
  !*** ./src/app/api/axios.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   axiosInstance: function() { return /* binding */ axiosInstance; }\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/.pnpm/axios@1.8.2/node_modules/axios/lib/axios.js\");\n\nconst locationURL =  true ? \"\".concat(window.location.origin, \"/api\") : 0;\nconst axiosInstance = axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].create({\n    baseURL: locationURL,\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n}); // axios.defaults.withCredentials = true; // 쿠키 자동 포함\n // console.log(\n //   \"getAuthorityCookie : \",\n //   `Bearer ${getAuthorityCookie(\"accessToken\")}`\n // );\n // // ✅ 공통 API Instance 생성 함수 (프록시 적용)\n // function createAPIInstance(basePath: string) {\n //   const instance = axios.create({\n //     baseURL: `/api/proxy/${basePath}`, // ✅ 프록시 API 적용\n //     headers: {\n //       \"Content-Type\": \"application/json\",\n //       Authorization: `Bearer ${getAuthorityCookie(\"accessToken\")}`,\n //       \"X-CSRF-Token\": getAuthorityCookie(\"csrfToken\") || \"\",\n //     },\n //   });\n //   return instance;\n // }\n // /* ✅ 서비스별 API Instance */\n // export const authInstance = createAPIInstance(\"auth\");\n // export const userInstance = createAPIInstance(\"user\");\n // // ✅ 에러 처리 함수\n // export const handleApiError = (error: unknown) => {\n //   if (axios.isAxiosError(error)) {\n //     if (error.response) {\n //       console.error(\"API 에러:\", error.response.data);\n //     } else if (error.request) {\n //       console.error(\"서버 응답 없음\");\n //     }\n //   } else if (error instanceof Error) {\n //     console.error(\"JavaScript Error\", error.message);\n //   } else {\n //     console.error(\"알 수 없는 에러 발생\");\n //   }\n // };\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvYXBpL2F4aW9zLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLGNBQ0osS0FBNkIsR0FDekIsR0FBMEIsT0FBdkJDLE9BQU9DLFFBQVEsQ0FBQ0MsTUFBTSxFQUFDLFVBQzFCLENBQThDO0FBRTdDLE1BQU1JLGdCQUFnQlIsNkNBQUtBLENBQUNTLE1BQU0sQ0FBQztJQUN4Q0MsU0FBU1Q7SUFDVFUsU0FBUztRQUFFLGdCQUFnQjtJQUFtQjtBQUNoRCxHQUFHLENBSUgscURBQXFEO0NBRXJELGVBQWU7Q0FDZiw2QkFBNkI7Q0FDN0Isa0RBQWtEO0NBQ2xELEtBQUs7Q0FFTCxzQ0FBc0M7Q0FDdEMsaURBQWlEO0NBQ2pELG9DQUFvQztDQUNwQyx5REFBeUQ7Q0FDekQsaUJBQWlCO0NBQ2pCLDRDQUE0QztDQUM1QyxzRUFBc0U7Q0FDdEUsK0RBQStEO0NBQy9ELFNBQVM7Q0FDVCxRQUFRO0NBRVIscUJBQXFCO0NBQ3JCLElBQUk7Q0FFSiw0QkFBNEI7Q0FDNUIseURBQXlEO0NBQ3pELHlEQUF5RDtDQUV6RCxnQkFBZ0I7Q0FDaEIsc0RBQXNEO0NBQ3RELHFDQUFxQztDQUNyQyw0QkFBNEI7Q0FDNUIsdURBQXVEO0NBQ3ZELGtDQUFrQztDQUNsQyxtQ0FBbUM7Q0FDbkMsUUFBUTtDQUNSLHlDQUF5QztDQUN6Qyx3REFBd0Q7Q0FDeEQsYUFBYTtDQUNiLHFDQUFxQztDQUNyQyxNQUFNO0NBQ04sS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2FwaS9heGlvcy50cz8wOWY2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgbG9jYXRpb25VUkwgPVxuICB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiXG4gICAgPyBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS9hcGlgXG4gICAgOiBgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19BUElfUk9VVEVfQkFTRV9VUkx9L2FwaWA7XG5cbmV4cG9ydCBjb25zdCBheGlvc0luc3RhbmNlID0gYXhpb3MuY3JlYXRlKHtcbiAgYmFzZVVSTDogbG9jYXRpb25VUkwsXG4gIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbn0pO1xuXG5cblxuLy8gYXhpb3MuZGVmYXVsdHMud2l0aENyZWRlbnRpYWxzID0gdHJ1ZTsgLy8g7L+g7YKkIOyekOuPmSDtj6ztlahcblxuLy8gY29uc29sZS5sb2coXG4vLyAgIFwiZ2V0QXV0aG9yaXR5Q29va2llIDogXCIsXG4vLyAgIGBCZWFyZXIgJHtnZXRBdXRob3JpdHlDb29raWUoXCJhY2Nlc3NUb2tlblwiKX1gXG4vLyApO1xuXG4vLyAvLyDinIUg6rO17Ya1IEFQSSBJbnN0YW5jZSDsg53shLEg7ZWo7IiYICjtlITroZ3si5wg7KCB7JqpKVxuLy8gZnVuY3Rpb24gY3JlYXRlQVBJSW5zdGFuY2UoYmFzZVBhdGg6IHN0cmluZykge1xuLy8gICBjb25zdCBpbnN0YW5jZSA9IGF4aW9zLmNyZWF0ZSh7XG4vLyAgICAgYmFzZVVSTDogYC9hcGkvcHJveHkvJHtiYXNlUGF0aH1gLCAvLyDinIUg7ZSE66Gd7IucIEFQSSDsoIHsmqlcbi8vICAgICBoZWFkZXJzOiB7XG4vLyAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbi8vICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtnZXRBdXRob3JpdHlDb29raWUoXCJhY2Nlc3NUb2tlblwiKX1gLFxuLy8gICAgICAgXCJYLUNTUkYtVG9rZW5cIjogZ2V0QXV0aG9yaXR5Q29va2llKFwiY3NyZlRva2VuXCIpIHx8IFwiXCIsXG4vLyAgICAgfSxcbi8vICAgfSk7XG5cbi8vICAgcmV0dXJuIGluc3RhbmNlO1xuLy8gfVxuXG4vLyAvKiDinIUg7ISc67mE7Iqk67OEIEFQSSBJbnN0YW5jZSAqL1xuLy8gZXhwb3J0IGNvbnN0IGF1dGhJbnN0YW5jZSA9IGNyZWF0ZUFQSUluc3RhbmNlKFwiYXV0aFwiKTtcbi8vIGV4cG9ydCBjb25zdCB1c2VySW5zdGFuY2UgPSBjcmVhdGVBUElJbnN0YW5jZShcInVzZXJcIik7XG5cbi8vIC8vIOKchSDsl5Drn6wg7LKY66asIO2VqOyImFxuLy8gZXhwb3J0IGNvbnN0IGhhbmRsZUFwaUVycm9yID0gKGVycm9yOiB1bmtub3duKSA9PiB7XG4vLyAgIGlmIChheGlvcy5pc0F4aW9zRXJyb3IoZXJyb3IpKSB7XG4vLyAgICAgaWYgKGVycm9yLnJlc3BvbnNlKSB7XG4vLyAgICAgICBjb25zb2xlLmVycm9yKFwiQVBJIOyXkOufrDpcIiwgZXJyb3IucmVzcG9uc2UuZGF0YSk7XG4vLyAgICAgfSBlbHNlIGlmIChlcnJvci5yZXF1ZXN0KSB7XG4vLyAgICAgICBjb25zb2xlLmVycm9yKFwi7ISc67KEIOydkeuLtSDsl4bsnYxcIik7XG4vLyAgICAgfVxuLy8gICB9IGVsc2UgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpIHtcbi8vICAgICBjb25zb2xlLmVycm9yKFwiSmF2YVNjcmlwdCBFcnJvclwiLCBlcnJvci5tZXNzYWdlKTtcbi8vICAgfSBlbHNlIHtcbi8vICAgICBjb25zb2xlLmVycm9yKFwi7JWMIOyImCDsl4bripQg7JeQ65+sIOuwnOyDnVwiKTtcbi8vICAgfVxuLy8gfTtcbiJdLCJuYW1lcyI6WyJheGlvcyIsImxvY2F0aW9uVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJwcm9jZXNzIiwiZW52IiwiTkVYVF9QVUJMSUNfQVBJX1JPVVRFX0JBU0VfVVJMIiwiYXhpb3NJbnN0YW5jZSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/api/axios.ts\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/app/socialsignin/_components/Completed.tsx":
/*!********************************************************!*\
  !*** ./src/app/socialsignin/_components/Completed.tsx ***!
  \********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Completed; },\n/* harmony export */   dynamic: function() { return /* binding */ dynamic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _css_completed_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/completed.module.css */ \"(app-pages-browser)/./src/app/socialsignin/_css/completed.module.css\");\n/* harmony import */ var _css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _public_icon_icon_check_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/icon/icon-check.svg */ \"(app-pages-browser)/./public/icon/icon-check.svg\");\n/* harmony import */ var _app_hooks_useSocialAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_hooks/useSocialAuth */ \"(app-pages-browser)/./src/app/_hooks/useSocialAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ dynamic,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// ✅ Next.js에서 서버 프리렌더링 방지 설정 추가\nconst dynamic = \"force-dynamic\";\nfunction CompletedContent() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const { mutate: loginWithGoogle, isSuccess, isPending } = (0,_app_hooks_useSocialAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const codeParam = searchParams.get(\"code\");\n        if (codeParam) {\n            setCode(codeParam);\n            loginWithGoogle(codeParam);\n        }\n    }, [\n        searchParams,\n        loginWithGoogle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().box_wrap),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon_wrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                        src: _public_icon_icon_check_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"완료 페이지 아이콘\",\n                        width: 90,\n                        height: 90\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().sub_title),\n                        children: isPending ? \"로그인 처리 중...\" : isSuccess ? \"로그인이 완료되었어요!\" : \"로그인을 진행 중입니다.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(CompletedContent, \"k1Hjj+YrQYFjfAdAwraqbH5n+GQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        _app_hooks_useSocialAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = CompletedContent;\nfunction Completed() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_6__.Suspense, {\n        fallback: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"로딩 중...\"\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n            lineNumber: 50,\n            columnNumber: 25\n        }, void 0),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CompletedContent, {}, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n            lineNumber: 51,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Completed;\nvar _c, _c1;\n$RefreshReg$(_c, \"CompletedContent\");\n$RefreshReg$(_c1, \"Completed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc29jaWFsc2lnbmluL19jb21wb25lbnRzL0NvbXBsZXRlZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNHO0FBQ0E7QUFDUztBQUNKO0FBQ0Q7QUFFdEQsZ0NBQWdDO0FBQ3pCLE1BQU1RLFVBQVUsZ0JBQWdCO0FBRXZDLFNBQVNDOztJQUNQLE1BQU1DLGVBQWVSLGdFQUFlQTtJQUNwQyxNQUFNLEVBQUVTLFFBQVFDLGVBQWUsRUFBRUMsU0FBUyxFQUFFQyxTQUFTLEVBQUUsR0FBR1Ysb0VBQWFBO0lBQ3ZFLE1BQU0sQ0FBQ1csTUFBTUMsUUFBUSxHQUFHVCwrQ0FBUUEsQ0FBZ0I7SUFFaERELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWVAsYUFBYVEsR0FBRyxDQUFDO1FBQ25DLElBQUlELFdBQVc7WUFDYkQsUUFBUUM7WUFDUkwsZ0JBQWdCSztRQUNsQjtJQUNGLEdBQUc7UUFBQ1A7UUFBY0U7S0FBZ0I7SUFFbEMscUJBQ0UsOERBQUNPO1FBQVFDLFdBQVduQix1RUFBVztrQkFDN0IsNEVBQUNxQjtZQUFJRixXQUFXbkIsMkVBQWU7c0JBQzdCLDRFQUFDcUI7Z0JBQUlGLFdBQVduQiw0RUFBZ0I7O2tDQUM5Qiw4REFBQ0QsdURBQUlBO3dCQUNIeUIsS0FBS3RCLG1FQUFTQTt3QkFDZHVCLEtBQUs7d0JBQ0xDLE9BQU87d0JBQ1BDLFFBQVE7Ozs7OztrQ0FFViw4REFBQ0M7d0JBQU9ULFdBQVduQiw0RUFBZ0I7a0NBQ2hDYSxZQUNHLGdCQUNBRCxZQUNBLGlCQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO0dBbENTSjs7UUFDY1AsNERBQWVBO1FBQ3NCRSxnRUFBYUE7OztLQUZoRUs7QUFvQ00sU0FBU3NCO0lBQ3RCLHFCQUNFLDhEQUFDMUIsMkNBQVFBO1FBQUMyQix3QkFBVSw4REFBQ0M7c0JBQUU7Ozs7OztrQkFDckIsNEVBQUN4Qjs7Ozs7Ozs7OztBQUdQO01BTndCc0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9zb2NpYWxzaWduaW4vX2NvbXBvbmVudHMvQ29tcGxldGVkLnRzeD9kOTE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgSWNvbiB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vX2Nzcy9jb21wbGV0ZWQubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU2VhcmNoUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuaW1wb3J0IEljb25DaGVjayBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaWNvbi9pY29uLWNoZWNrLnN2Z1wiO1xuaW1wb3J0IHVzZVNvY2lhbEF1dGggZnJvbSBcIkAvYXBwL19ob29rcy91c2VTb2NpYWxBdXRoXCI7XG5pbXBvcnQgeyBTdXNwZW5zZSwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG4vLyDinIUgTmV4dC5qc+yXkOyEnCDshJzrsoQg7ZSE66as66CM642U66eBIOuwqeyngCDshKTsoJUg7LaU6rCAXG5leHBvcnQgY29uc3QgZHluYW1pYyA9IFwiZm9yY2UtZHluYW1pY1wiO1xuXG5mdW5jdGlvbiBDb21wbGV0ZWRDb250ZW50KCkge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyBtdXRhdGU6IGxvZ2luV2l0aEdvb2dsZSwgaXNTdWNjZXNzLCBpc1BlbmRpbmcgfSA9IHVzZVNvY2lhbEF1dGgoKTtcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb2RlUGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKTtcbiAgICBpZiAoY29kZVBhcmFtKSB7XG4gICAgICBzZXRDb2RlKGNvZGVQYXJhbSk7XG4gICAgICBsb2dpbldpdGhHb29nbGUoY29kZVBhcmFtKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hQYXJhbXMsIGxvZ2luV2l0aEdvb2dsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF93cmFwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX3dyYXB9PlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBzcmM9e0ljb25DaGVja31cbiAgICAgICAgICAgIGFsdD17XCLsmYTro4wg7Y6Y7J207KeAIOyVhOydtOy9mFwifVxuICAgICAgICAgICAgd2lkdGg9ezkwfVxuICAgICAgICAgICAgaGVpZ2h0PXs5MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3ViX3RpdGxlfT5cbiAgICAgICAgICAgIHtpc1BlbmRpbmdcbiAgICAgICAgICAgICAgPyBcIuuhnOq3uOyduCDsspjrpqwg7KSRLi4uXCJcbiAgICAgICAgICAgICAgOiBpc1N1Y2Nlc3NcbiAgICAgICAgICAgICAgPyBcIuuhnOq3uOyduOydtCDsmYTro4zrkJjsl4jslrTsmpQhXCJcbiAgICAgICAgICAgICAgOiBcIuuhnOq3uOyduOydhCDsp4Ttlokg7KSR7J6F64uI64ukLlwifVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGxldGVkKCkge1xuICByZXR1cm4gKFxuICAgIDxTdXNwZW5zZSBmYWxsYmFjaz17PHA+66Gc65SpIOykkS4uLjwvcD59PlxuICAgICAgPENvbXBsZXRlZENvbnRlbnQgLz5cbiAgICA8L1N1c3BlbnNlPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkljb24iLCJzdHlsZXMiLCJ1c2VTZWFyY2hQYXJhbXMiLCJJY29uQ2hlY2siLCJ1c2VTb2NpYWxBdXRoIiwiU3VzcGVuc2UiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImR5bmFtaWMiLCJDb21wbGV0ZWRDb250ZW50Iiwic2VhcmNoUGFyYW1zIiwibXV0YXRlIiwibG9naW5XaXRoR29vZ2xlIiwiaXNTdWNjZXNzIiwiaXNQZW5kaW5nIiwiY29kZSIsInNldENvZGUiLCJjb2RlUGFyYW0iLCJnZXQiLCJzZWN0aW9uIiwiY2xhc3NOYW1lIiwicGFnZSIsImRpdiIsImJveF93cmFwIiwiaWNvbl93cmFwIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzdHJvbmciLCJzdWJfdGl0bGUiLCJDb21wbGV0ZWQiLCJmYWxsYmFjayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/socialsignin/_components/Completed.tsx\n"));

/***/ })

});
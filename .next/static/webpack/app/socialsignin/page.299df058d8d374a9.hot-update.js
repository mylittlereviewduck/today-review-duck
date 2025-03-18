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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Completed; },\n/* harmony export */   dynamic: function() { return /* binding */ dynamic; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _css_completed_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/completed.module.css */ \"(app-pages-browser)/./src/app/socialsignin/_css/completed.module.css\");\n/* harmony import */ var _css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _public_icon_icon_check_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../../public/icon/icon-check.svg */ \"(app-pages-browser)/./public/icon/icon-check.svg\");\n/* harmony import */ var _app_hooks_useSocialAuth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_hooks/useSocialAuth */ \"(app-pages-browser)/./src/app/_hooks/useSocialAuth.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* __next_internal_client_entry_do_not_use__ dynamic,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n// ✅ Next.js에서 서버 프리렌더링 방지 설정 추가\nconst dynamic = \"force-dynamic\";\nfunction Completed() {\n    _s();\n    const searchParams = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams)();\n    const { mutate: loginWithGoogle, isSuccess, isPending } = (0,_app_hooks_useSocialAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_6__.useEffect)(()=>{\n        const codeParam = searchParams.get(\"code\");\n        if (codeParam) {\n            setCode(codeParam);\n            loginWithGoogle(codeParam);\n        }\n    }, [\n        searchParams,\n        loginWithGoogle\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n        className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().page),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().box_wrap),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().icon_wrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_1__.Icon, {\n                        src: _public_icon_icon_check_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        alt: \"완료 페이지 아이콘\",\n                        width: 90,\n                        height: 90\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n                        lineNumber: 29,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                        className: (_css_completed_module_css__WEBPACK_IMPORTED_MODULE_2___default().sub_title),\n                        children: isPending ? \"로그인 처리 중...\" : isSuccess ? \"로그인이 완료되었어요!\" : \"로그인을 진행 중입니다.\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n                lineNumber: 28,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n            lineNumber: 27,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/socialsignin/_components/Completed.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Completed, \"k1Hjj+YrQYFjfAdAwraqbH5n+GQ=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useSearchParams,\n        _app_hooks_useSocialAuth__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n    ];\n});\n_c = Completed;\nvar _c;\n$RefreshReg$(_c, \"Completed\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvc29jaWFsc2lnbmluL19jb21wb25lbnRzL0NvbXBsZXRlZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUMrQztBQUNHO0FBQ0E7QUFDUztBQUNKO0FBQ1g7QUFFNUMsZ0NBQWdDO0FBQ3pCLE1BQU1PLFVBQVUsZ0JBQWdCO0FBRXhCLFNBQVNDOztJQUN0QixNQUFNQyxlQUFlUCxnRUFBZUE7SUFDcEMsTUFBTSxFQUFFUSxRQUFRQyxlQUFlLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFFLEdBQUdULG9FQUFhQTtJQUN2RSxNQUFNLENBQUNVLE1BQU1DLFFBQVEsR0FBR1QsK0NBQVFBLENBQWdCO0lBRWhERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLFlBQVlQLGFBQWFRLEdBQUcsQ0FBQztRQUNuQyxJQUFJRCxXQUFXO1lBQ2JELFFBQVFDO1lBQ1JMLGdCQUFnQks7UUFDbEI7SUFDRixHQUFHO1FBQUNQO1FBQWNFO0tBQWdCO0lBRWxDLHFCQUNFLDhEQUFDTztRQUFRQyxXQUFXbEIsdUVBQVc7a0JBQzdCLDRFQUFDb0I7WUFBSUYsV0FBV2xCLDJFQUFlO3NCQUM3Qiw0RUFBQ29CO2dCQUFJRixXQUFXbEIsNEVBQWdCOztrQ0FDOUIsOERBQUNELHVEQUFJQTt3QkFDSHdCLEtBQUtyQixtRUFBU0E7d0JBQ2RzQixLQUFLO3dCQUNMQyxPQUFPO3dCQUNQQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNDO3dCQUFPVCxXQUFXbEIsNEVBQWdCO2tDQUNoQ1ksWUFDRyxnQkFDQUQsWUFDQSxpQkFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQWxDd0JKOztRQUNETiw0REFBZUE7UUFDc0JFLGdFQUFhQTs7O0tBRmpESSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3NvY2lhbHNpZ25pbi9fY29tcG9uZW50cy9Db21wbGV0ZWQudHN4P2Q5MTciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9fY3NzL2NvbXBsZXRlZC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VTZWFyY2hQYXJhbXMgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgSWNvbkNoZWNrIGZyb20gXCJALy4uLy4uL3B1YmxpYy9pY29uL2ljb24tY2hlY2suc3ZnXCI7XG5pbXBvcnQgdXNlU29jaWFsQXV0aCBmcm9tIFwiQC9hcHAvX2hvb2tzL3VzZVNvY2lhbEF1dGhcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuLy8g4pyFIE5leHQuanPsl5DshJwg7ISc67KEIO2UhOumrOugjOuNlOungSDrsKnsp4Ag7ISk7KCVIOy2lOqwgFxuZXhwb3J0IGNvbnN0IGR5bmFtaWMgPSBcImZvcmNlLWR5bmFtaWNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29tcGxldGVkKCkge1xuICBjb25zdCBzZWFyY2hQYXJhbXMgPSB1c2VTZWFyY2hQYXJhbXMoKTtcbiAgY29uc3QgeyBtdXRhdGU6IGxvZ2luV2l0aEdvb2dsZSwgaXNTdWNjZXNzLCBpc1BlbmRpbmcgfSA9IHVzZVNvY2lhbEF1dGgoKTtcbiAgY29uc3QgW2NvZGUsIHNldENvZGVdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjb2RlUGFyYW0gPSBzZWFyY2hQYXJhbXMuZ2V0KFwiY29kZVwiKTtcbiAgICBpZiAoY29kZVBhcmFtKSB7XG4gICAgICBzZXRDb2RlKGNvZGVQYXJhbSk7XG4gICAgICBsb2dpbldpdGhHb29nbGUoY29kZVBhcmFtKTtcbiAgICB9XG4gIH0sIFtzZWFyY2hQYXJhbXMsIGxvZ2luV2l0aEdvb2dsZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtzdHlsZXMucGFnZX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF93cmFwfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pY29uX3dyYXB9PlxuICAgICAgICAgIDxJY29uXG4gICAgICAgICAgICBzcmM9e0ljb25DaGVja31cbiAgICAgICAgICAgIGFsdD17XCLsmYTro4wg7Y6Y7J207KeAIOyVhOydtOy9mFwifVxuICAgICAgICAgICAgd2lkdGg9ezkwfVxuICAgICAgICAgICAgaGVpZ2h0PXs5MH1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzdHJvbmcgY2xhc3NOYW1lPXtzdHlsZXMuc3ViX3RpdGxlfT5cbiAgICAgICAgICAgIHtpc1BlbmRpbmdcbiAgICAgICAgICAgICAgPyBcIuuhnOq3uOyduCDsspjrpqwg7KSRLi4uXCJcbiAgICAgICAgICAgICAgOiBpc1N1Y2Nlc3NcbiAgICAgICAgICAgICAgPyBcIuuhnOq3uOyduOydtCDsmYTro4zrkJjsl4jslrTsmpQhXCJcbiAgICAgICAgICAgICAgOiBcIuuhnOq3uOyduOydhCDsp4Ttlokg7KSR7J6F64uI64ukLlwifVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJJY29uIiwic3R5bGVzIiwidXNlU2VhcmNoUGFyYW1zIiwiSWNvbkNoZWNrIiwidXNlU29jaWFsQXV0aCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZHluYW1pYyIsIkNvbXBsZXRlZCIsInNlYXJjaFBhcmFtcyIsIm11dGF0ZSIsImxvZ2luV2l0aEdvb2dsZSIsImlzU3VjY2VzcyIsImlzUGVuZGluZyIsImNvZGUiLCJzZXRDb2RlIiwiY29kZVBhcmFtIiwiZ2V0Iiwic2VjdGlvbiIsImNsYXNzTmFtZSIsInBhZ2UiLCJkaXYiLCJib3hfd3JhcCIsImljb25fd3JhcCIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Iiwic3Ryb25nIiwic3ViX3RpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/socialsignin/_components/Completed.tsx\n"));

/***/ })

});
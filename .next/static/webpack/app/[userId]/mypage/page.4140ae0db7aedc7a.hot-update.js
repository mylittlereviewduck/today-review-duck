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

/***/ "(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx":
/*!**************************************************************************************!*\
  !*** ./src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx ***!
  \**************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfileForm; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_profilesettings_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_css/profilesettings.module.css */ \"(app-pages-browser)/./src/app/[userId]/mypage/_css/profilesettings.module.css\");\n/* harmony import */ var _css_profilesettings_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_profilesettings_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ProfileForm() {\n    _s();\n    const [user] = (0,recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_5__.userState);\n    const [nicknameData, setNicknameData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(user.id || \"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_profilesettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().profile_form),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_profilesettings_module_css__WEBPACK_IMPORTED_MODULE_2___default().listrow),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"text\",\n                        name: \"nickname\",\n                        label: \"닉네임\",\n                        important: true,\n                        placeholder: \"닉네임을 입력해주세요\",\n                        subInfo: \"닉네임은 2 ~ 10글자 사이로 입력해주세요.\",\n                        value: nicknameData,\n                        onChange: (e)=>setNicknameData(e.target.value),\n                        padding: \"30px 0 0 0\",\n                        lineStyle: true,\n                        height: \"46px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Input, {\n                        type: \"text\",\n                        name: \"email\",\n                        label: \"이메일\",\n                        disabled: true,\n                        subInfo: \"\".concat(user.id, \"로 가입한 계정이에요.\"),\n                        value: nicknameData,\n                        onChange: (e)=>setNicknameData(e.target.value),\n                        padding: \"30px 0 0 0\",\n                        height: \"46px\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                buttonType: \"button\",\n                onClick: ()=>{},\n                inlineText: true,\n                color: \"#FFB271\",\n                padding: \"10px 0\",\n                children: \"프로필 수정하기\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, this);\n}\n_s(ProfileForm, \"PqYBpICVHm7wI7jA0JI3MYsJoy4=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_4__.useRecoilState\n    ];\n});\n_c = ProfileForm;\nvar _c;\n$RefreshReg$(_c, \"ProfileForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW3VzZXJJZF0vbXlwYWdlL19jb21wb25lbnRzL3N1YnBhZ2VzL3Byb2ZpbGVTZXR0aW5ncy9Qcm9maWxlRm9ybS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFDaUM7QUFDNkI7QUFDTjtBQUNoQjtBQUNFO0FBRTNCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLEtBQUssR0FBR0gsc0RBQWNBLENBQUNDLGtEQUFTQTtJQUN2QyxNQUFNLENBQUNHLGNBQWNDLGdCQUFnQixHQUFHVCwrQ0FBUUEsQ0FBQ08sS0FBS0csRUFBRSxJQUFJO0lBQzVELHFCQUNFLDhEQUFDQztRQUFJQyxXQUFXWCxxRkFBbUI7OzBCQUNqQyw4REFBQ1U7Z0JBQUlDLFdBQVdYLGdGQUFjOztrQ0FDNUIsOERBQUNFLHdEQUFLQTt3QkFDSlksTUFBTTt3QkFDTkMsTUFBTTt3QkFDTkMsT0FBTTt3QkFDTkMsU0FBUzt3QkFDVEMsYUFBWTt3QkFDWkMsU0FBUTt3QkFDUkMsT0FBT2I7d0JBQ1BjLFVBQVUsQ0FBQ0MsSUFBTWQsZ0JBQWdCYyxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQy9DSSxTQUFRO3dCQUNSQyxTQUFTO3dCQUNUQyxRQUFPOzs7Ozs7a0NBR1QsOERBQUN4Qix3REFBS0E7d0JBQ0pZLE1BQU07d0JBQ05DLE1BQU07d0JBQ05DLE9BQU07d0JBQ05XLFFBQVE7d0JBQ1JSLFNBQVMsR0FBVyxPQUFSYixLQUFLRyxFQUFFLEVBQUM7d0JBQ3BCVyxPQUFPYjt3QkFDUGMsVUFBVSxDQUFDQyxJQUFNZCxnQkFBZ0JjLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDL0NJLFNBQVE7d0JBQ1JFLFFBQU87Ozs7Ozs7Ozs7OzswQkFJWCw4REFBQ3pCLHlEQUFNQTtnQkFDTDJCLFlBQVc7Z0JBQ1hDLFNBQVMsS0FBTztnQkFDaEJDLFVBQVU7Z0JBQ1ZDLE9BQU07Z0JBQ05QLFNBQVE7MEJBQ1Q7Ozs7Ozs7Ozs7OztBQUtQO0dBNUN3Qm5COztRQUNQRixrREFBY0E7OztLQURQRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1t1c2VySWRdL215cGFnZS9fY29tcG9uZW50cy9zdWJwYWdlcy9wcm9maWxlU2V0dGluZ3MvUHJvZmlsZUZvcm0udHN4PzJjOGYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vX2Nzcy9wcm9maWxlc2V0dGluZ3MubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBJbnB1dCB9IGZyb20gXCJAL2FwcC9fY29tcG9uZW50cy9hdG9tc1wiO1xuaW1wb3J0IHsgdXNlUmVjb2lsU3RhdGUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyB1c2VyU3RhdGUgfSBmcm9tIFwiQC9hcHAvX3JlY29pbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlRm9ybSgpIHtcbiAgY29uc3QgW3VzZXJdID0gdXNlUmVjb2lsU3RhdGUodXNlclN0YXRlKTtcbiAgY29uc3QgW25pY2tuYW1lRGF0YSwgc2V0Tmlja25hbWVEYXRhXSA9IHVzZVN0YXRlKHVzZXIuaWQgfHwgXCJcIik7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5wcm9maWxlX2Zvcm19PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5saXN0cm93fT5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgbmFtZT17XCJuaWNrbmFtZVwifVxuICAgICAgICAgIGxhYmVsPVwi64uJ64Sk7J6EXCJcbiAgICAgICAgICBpbXBvcnRhbnRcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuuLieuEpOyehOydhCDsnoXroKXtlbTso7zshLjsmpRcIlxuICAgICAgICAgIHN1YkluZm89XCLri4nrhKTsnoTsnYAgMiB+IDEw6riA7J6QIOyCrOydtOuhnCDsnoXroKXtlbTso7zshLjsmpQuXCJcbiAgICAgICAgICB2YWx1ZT17bmlja25hbWVEYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tmlja25hbWVEYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwYWRkaW5nPVwiMzBweCAwIDAgMFwiXG4gICAgICAgICAgbGluZVN0eWxlXG4gICAgICAgICAgaGVpZ2h0PVwiNDZweFwiXG4gICAgICAgIC8+XG5cbiAgICAgICAgPElucHV0XG4gICAgICAgICAgdHlwZT17XCJ0ZXh0XCJ9XG4gICAgICAgICAgbmFtZT17XCJlbWFpbFwifVxuICAgICAgICAgIGxhYmVsPVwi7J2066mU7J28XCJcbiAgICAgICAgICBkaXNhYmxlZFxuICAgICAgICAgIHN1YkluZm89e2Ake3VzZXIuaWR966GcIOqwgOyehe2VnCDqs4TsoJXsnbTsl5DsmpQuYH1cbiAgICAgICAgICB2YWx1ZT17bmlja25hbWVEYXRhfVxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0Tmlja25hbWVEYXRhKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICBwYWRkaW5nPVwiMzBweCAwIDAgMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiNDZweFwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPEJ1dHRvblxuICAgICAgICBidXR0b25UeXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgIGlubGluZVRleHRcbiAgICAgICAgY29sb3I9XCIjRkZCMjcxXCJcbiAgICAgICAgcGFkZGluZz1cIjEwcHggMFwiXG4gICAgICA+XG4gICAgICAgIO2UhOuhnO2VhCDsiJjsoJXtlZjquLBcbiAgICAgIDwvQnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiQnV0dG9uIiwiSW5wdXQiLCJ1c2VSZWNvaWxTdGF0ZSIsInVzZXJTdGF0ZSIsIlByb2ZpbGVGb3JtIiwidXNlciIsIm5pY2tuYW1lRGF0YSIsInNldE5pY2tuYW1lRGF0YSIsImlkIiwiZGl2IiwiY2xhc3NOYW1lIiwicHJvZmlsZV9mb3JtIiwibGlzdHJvdyIsInR5cGUiLCJuYW1lIiwibGFiZWwiLCJpbXBvcnRhbnQiLCJwbGFjZWhvbGRlciIsInN1YkluZm8iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBhZGRpbmciLCJsaW5lU3R5bGUiLCJoZWlnaHQiLCJkaXNhYmxlZCIsImJ1dHRvblR5cGUiLCJvbkNsaWNrIiwiaW5saW5lVGV4dCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/profileSettings/ProfileForm.tsx\n"));

/***/ })

});
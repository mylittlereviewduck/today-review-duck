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

/***/ "(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/Notices.tsx":
/*!******************************************************************!*\
  !*** ./src/app/[userId]/mypage/_components/subpages/Notices.tsx ***!
  \******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Notices; },\n/* harmony export */   dummyListData: function() { return /* binding */ dummyListData; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_css/mypage.module.css */ \"(app-pages-browser)/./src/app/[userId]/mypage/_css/mypage.module.css\");\n/* harmony import */ var _css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_list_postList_List__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/list/postList/List */ \"(app-pages-browser)/./src/app/_components/list/postList/List.tsx\");\n/* harmony import */ var _app_components_atoms_DataNone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_components/atoms/DataNone */ \"(app-pages-browser)/./src/app/_components/atoms/DataNone.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n//TODO: api\nconst dummyListData = [\n    {\n        isManager: true,\n        alt: \"\",\n        src: \"\",\n        title: \"제목입니다 1\",\n        user: \"user1 | 2024.05.01\",\n        value: \"평가: 좋음\",\n        contents: \"내용입니다 1. 아주 긴 설명이 여기에 들어갑니다.\"\n    },\n    {\n        isManager: true,\n        alt: \"\",\n        src: \"\",\n        title: \"제목입니다 2 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 \",\n        user: \"user2 | 2024.05.02\",\n        value: \"평가: 보통\",\n        contents: \"내용입니다 2. 두 번째 더미 텍스트입니다.1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 1wnf wnfdltkd 1줄 이상 \"\n    },\n    {\n        isManager: true,\n        alt: \"\",\n        src: \"\",\n        title: \"제목입니다 3\",\n        user: \"user3 | 2024.05.03\",\n        value: \"평가: 나쁨\",\n        contents: \"내용입니다 3. 테스트용 텍스트입니다.\"\n    }\n];\nfunction Notices() {\n    _s();\n    const [noticeList, setNoticeList] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(dummyListData);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_contents),\n        children: noticeList.length > 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (_css_mypage_module_css__WEBPACK_IMPORTED_MODULE_2___default().list_wrap),\n            children: noticeList.map((review, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_list_postList_List__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    isManager: review.isManager,\n                    alt: review.alt,\n                    src: review.src,\n                    title: review.title,\n                    user: review.user,\n                    value: review.value,\n                    contents: review.contents\n                }, index, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/Notices.tsx\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/Notices.tsx\",\n            lineNumber: 46,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms_DataNone__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            target: \"올라온 공지\"\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/Notices.tsx\",\n            lineNumber: 61,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/[userId]/mypage/_components/subpages/Notices.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(Notices, \"NDumVqGRPZ4t/qTXoBq/WK3FBrw=\");\n_c = Notices;\nvar _c;\n$RefreshReg$(_c, \"Notices\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvW3VzZXJJZF0vbXlwYWdlL19jb21wb25lbnRzL3N1YnBhZ2VzL05vdGljZXMudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWlDO0FBQ2lCO0FBQ007QUFHQTtBQUN4RCxXQUFXO0FBQ0osTUFBTUksZ0JBQWdCO0lBQzNCO1FBQ0VDLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtJQUNBO1FBQ0VOLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxLQUFLO1FBQ0xDLE9BQ0U7UUFDRkMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQ0U7SUFDSjtJQUNBO1FBQ0VOLFdBQVc7UUFDWEMsS0FBSztRQUNMQyxLQUFLO1FBQ0xDLE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1FBQ1BDLFVBQVU7SUFDWjtDQUNELENBQUM7QUFFYSxTQUFTQzs7SUFDdEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdkLCtDQUFRQSxDQUFjSTtJQUUxRCxxQkFDRSw4REFBQ1c7UUFBSUMsV0FBV2YsNkVBQW9CO2tCQUNqQ1ksV0FBV0ssTUFBTSxHQUFHLGtCQUNuQiw4REFBQ0M7WUFBR0gsV0FBV2YseUVBQWdCO3NCQUM1QlksV0FBV1EsR0FBRyxDQUFDLENBQUNDLFFBQVFDLHNCQUN2Qiw4REFBQ3JCLDBFQUFJQTtvQkFFSEcsV0FBV2lCLE9BQU9qQixTQUFTO29CQUMzQkMsS0FBS2dCLE9BQU9oQixHQUFHO29CQUNmQyxLQUFLZSxPQUFPZixHQUFHO29CQUNmQyxPQUFPYyxPQUFPZCxLQUFLO29CQUNuQkMsTUFBTWEsT0FBT2IsSUFBSTtvQkFDakJDLE9BQU9ZLE9BQU9aLEtBQUs7b0JBQ25CQyxVQUFVVyxPQUFPWCxRQUFRO21CQVBwQlk7Ozs7Ozs7OztpQ0FZWCw4REFBQ3BCLHNFQUFRQTtZQUFDcUIsUUFBUTs7Ozs7Ozs7Ozs7QUFJMUI7R0F6QndCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL1t1c2VySWRdL215cGFnZS9fY29tcG9uZW50cy9zdWJwYWdlcy9Ob3RpY2VzLnRzeD9jMzk4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi8uLi9fY3NzL215cGFnZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgTGlzdCBmcm9tIFwiQC9hcHAvX2NvbXBvbmVudHMvbGlzdC9wb3N0TGlzdC9MaXN0XCI7XG5cbmltcG9ydCB7IExpc3RUeXBlcyB9IGZyb20gXCIuL1dyaXR0ZW5SZXZpZXdzXCI7XG5pbXBvcnQgRGF0YU5vbmUgZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zL0RhdGFOb25lXCI7XG4vL1RPRE86IGFwaVxuZXhwb3J0IGNvbnN0IGR1bW15TGlzdERhdGEgPSBbXG4gIHtcbiAgICBpc01hbmFnZXI6IHRydWUsXG4gICAgYWx0OiBcIlwiLFxuICAgIHNyYzogXCJcIixcbiAgICB0aXRsZTogXCLsoJzrqqnsnoXri4jri6QgMVwiLFxuICAgIHVzZXI6IFwidXNlcjEgfCAyMDI0LjA1LjAxXCIsXG4gICAgdmFsdWU6IFwi7Y+J6rCAOiDsoovsnYxcIixcbiAgICBjb250ZW50czogXCLrgrTsmqnsnoXri4jri6QgMS4g7JWE7KO8IOq4tCDshKTrqoXsnbQg7Jes6riw7JeQIOuTpOyWtOqwkeuLiOuLpC5cIixcbiAgfSxcbiAge1xuICAgIGlzTWFuYWdlcjogdHJ1ZSxcbiAgICBhbHQ6IFwiXCIsXG4gICAgc3JjOiBcIlwiLFxuICAgIHRpdGxlOlxuICAgICAgXCLsoJzrqqnsnoXri4jri6QgMiAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSBcIixcbiAgICB1c2VyOiBcInVzZXIyIHwgMjAyNC4wNS4wMlwiLFxuICAgIHZhbHVlOiBcIu2PieqwgDog67O07Ya1XCIsXG4gICAgY29udGVudHM6XG4gICAgICBcIuuCtOyaqeyeheuLiOuLpCAyLiDrkZAg67KI7Ke4IOuNlOuvuCDthY3siqTtirjsnoXri4jri6QuMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIDF3bmYgd25mZGx0a2QgMeykhCDsnbTsg4EgMXduZiB3bmZkbHRrZCAx7KSEIOydtOyDgSAxd25mIHduZmRsdGtkIDHspIQg7J207IOBIFwiLFxuICB9LFxuICB7XG4gICAgaXNNYW5hZ2VyOiB0cnVlLFxuICAgIGFsdDogXCJcIixcbiAgICBzcmM6IFwiXCIsXG4gICAgdGl0bGU6IFwi7KCc66qp7J6F64uI64ukIDNcIixcbiAgICB1c2VyOiBcInVzZXIzIHwgMjAyNC4wNS4wM1wiLFxuICAgIHZhbHVlOiBcIu2PieqwgDog64KY7IGoXCIsXG4gICAgY29udGVudHM6IFwi64K07Jqp7J6F64uI64ukIDMuIO2FjOyKpO2KuOyaqSDthY3siqTtirjsnoXri4jri6QuXCIsXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOb3RpY2VzKCkge1xuICBjb25zdCBbbm90aWNlTGlzdCwgc2V0Tm90aWNlTGlzdF0gPSB1c2VTdGF0ZTxMaXN0VHlwZXNbXT4oZHVtbXlMaXN0RGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmxpc3RfY29udGVudHN9PlxuICAgICAge25vdGljZUxpc3QubGVuZ3RoID4gMCA/IChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmxpc3Rfd3JhcH0+XG4gICAgICAgICAge25vdGljZUxpc3QubWFwKChyZXZpZXcsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8TGlzdFxuICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICBpc01hbmFnZXI9e3Jldmlldy5pc01hbmFnZXJ9XG4gICAgICAgICAgICAgIGFsdD17cmV2aWV3LmFsdH1cbiAgICAgICAgICAgICAgc3JjPXtyZXZpZXcuc3JjfVxuICAgICAgICAgICAgICB0aXRsZT17cmV2aWV3LnRpdGxlfVxuICAgICAgICAgICAgICB1c2VyPXtyZXZpZXcudXNlcn1cbiAgICAgICAgICAgICAgdmFsdWU9e3Jldmlldy52YWx1ZX1cbiAgICAgICAgICAgICAgY29udGVudHM9e3Jldmlldy5jb250ZW50c31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdWw+XG4gICAgICApIDogKFxuICAgICAgICA8RGF0YU5vbmUgdGFyZ2V0PXsn7Jis65287JioIOqzteyngCd9IC8+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic3R5bGVzIiwiTGlzdCIsIkRhdGFOb25lIiwiZHVtbXlMaXN0RGF0YSIsImlzTWFuYWdlciIsImFsdCIsInNyYyIsInRpdGxlIiwidXNlciIsInZhbHVlIiwiY29udGVudHMiLCJOb3RpY2VzIiwibm90aWNlTGlzdCIsInNldE5vdGljZUxpc3QiLCJkaXYiLCJjbGFzc05hbWUiLCJsaXN0X2NvbnRlbnRzIiwibGVuZ3RoIiwidWwiLCJsaXN0X3dyYXAiLCJtYXAiLCJyZXZpZXciLCJpbmRleCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/[userId]/mypage/_components/subpages/Notices.tsx\n"));

/***/ })

});
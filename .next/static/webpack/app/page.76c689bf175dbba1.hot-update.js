"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/_components/navigation/Aside.tsx":
/*!**************************************************!*\
  !*** ./src/app/_components/navigation/Aside.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Aside; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_aside_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/aside.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/aside.module.css\");\n/* harmony import */ var _css_aside_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_aside_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_icon_alarm_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../public/icon/alarm-icon.svg */ \"(app-pages-browser)/./public/icon/alarm-icon.svg\");\n/* harmony import */ var _public_icon_alarm_icon_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../public/icon/alarm-icon-dark.svg */ \"(app-pages-browser)/./public/icon/alarm-icon-dark.svg\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import { useState } from \"react\";\nfunction Aside() {\n    _s();\n    const [theme] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_4__.themeState);\n    const user = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue)(_app_recoil__WEBPACK_IMPORTED_MODULE_4__.userState);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [isDropDownOpen, setIsDropDownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const goToSignPage = ()=>{\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_css_aside_module_css__WEBPACK_IMPORTED_MODULE_1___default().aside),\n        children: !!user.id ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: ()=>goToSignPage(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"로그인 및 회원가입\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: (_css_aside_module_css__WEBPACK_IMPORTED_MODULE_1___default().alaram_button),\n            onClick: ()=>setIsDropDownOpen((prev)=>!prev),\n            children: [\n                theme == \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                    src: _public_icon_alarm_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    alt: \"alarm image\",\n                    width: 24,\n                    height: 24\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                    src: _public_icon_alarm_icon_dark_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"alarm image\",\n                    width: 24,\n                    height: 24\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_6__.DropDown, {\n                    margin: \"30px 0 0 0\",\n                    isOpen: isDropDownOpen,\n                    onClose: ()=>setIsDropDownOpen(false),\n                    position: \"right\",\n                    height: \"500px\",\n                    width: \"428px\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"alaram\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Aside, \"4Go4vRboC6FQ0DuRmNkmIxkNu5U=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilValue,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Aside;\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Bc2lkZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTztBQUNTO0FBQ1A7QUFDRTtBQUNkO0FBQ0U7QUFDWDtBQUNqQyxvQ0FBb0M7QUFFckIsU0FBU1c7O0lBQ3RCLE1BQU0sQ0FBQ0MsTUFBTSxHQUFHUCxzREFBY0EsQ0FBQ0YsbURBQVVBO0lBQ3pDLE1BQU1VLE9BQU9QLHNEQUFjQSxDQUFDRixrREFBU0E7SUFDckMsTUFBTVUsU0FBU0wsMERBQVNBO0lBQ3hCLE1BQU0sQ0FBQ00sZ0JBQWdCQyxrQkFBa0IsR0FBR04sK0NBQVFBLENBQUM7SUFFckQsTUFBTU8sZUFBZTtRQUNuQkgsT0FBT0ksSUFBSSxDQUFFO0lBQ2Y7SUFFQSxxQkFDRSw4REFBQ0M7UUFBTUMsV0FBV3BCLG9FQUFZO2tCQUMzQixDQUFDLENBQUNhLEtBQUtRLEVBQUUsaUJBQ1IsOERBQUNDO1lBQU9DLE1BQUs7WUFBU0MsU0FBUyxJQUFNUDtzQkFDbkMsNEVBQUNROzBCQUFLOzs7Ozs7Ozs7O2lDQUdSLDhEQUFDSDtZQUNDQyxNQUFLO1lBQ0xILFdBQVdwQiw0RUFBb0I7WUFDL0J3QixTQUFTLElBQU1SLGtCQUFrQixDQUFDVyxPQUFTLENBQUNBOztnQkFFM0NmLFNBQVMsd0JBQ1IsOERBQUNKLHdDQUFJQTtvQkFBQ29CLEtBQUszQixtRUFBS0E7b0JBQUU0QixLQUFJO29CQUFjQyxPQUFPO29CQUFJQyxRQUFROzs7Ozt5Q0FFdkQsOERBQUN2Qix3Q0FBSUE7b0JBQUNvQixLQUFLMUIsd0VBQVNBO29CQUFFMkIsS0FBSTtvQkFBY0MsT0FBTztvQkFBSUMsUUFBUTs7Ozs7OzhCQUc3RCw4REFBQ3hCLDRDQUFRQTtvQkFDUHlCLFFBQU87b0JBQ1BDLFFBQVFsQjtvQkFDUm1CLFNBQVMsSUFBTWxCLGtCQUFrQjtvQkFDakNtQixVQUFTO29CQUNUSixRQUFPO29CQUNQRCxPQUFNOzhCQUVOLDRFQUFDTTtrQ0FBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1mO0dBMUN3QnpCOztRQUNOTixrREFBY0E7UUFDakJDLGtEQUFjQTtRQUNaRyxzREFBU0E7OztLQUhGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL25hdmlnYXRpb24vQXNpZGUudHN4PzNiMWEiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vX2Nzcy9hc2lkZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgQWxhcm0gZnJvbSBcIkAvLi4vcHVibGljL2ljb24vYWxhcm0taWNvbi5zdmdcIjtcbmltcG9ydCBBbGFybURhcmsgZnJvbSBcIkAvLi4vcHVibGljL2ljb24vYWxhcm0taWNvbi1kYXJrLnN2Z1wiO1xuaW1wb3J0IHsgdGhlbWVTdGF0ZSwgdXNlclN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlLCB1c2VSZWNvaWxWYWx1ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IERyb3BEb3duLCBJY29uIH0gZnJvbSBcIi4uL2F0b21zXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuLy8gaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXNpZGUoKSB7XG4gIGNvbnN0IFt0aGVtZV0gPSB1c2VSZWNvaWxTdGF0ZSh0aGVtZVN0YXRlKTtcbiAgY29uc3QgdXNlciA9IHVzZVJlY29pbFZhbHVlKHVzZXJTdGF0ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNEcm9wRG93bk9wZW4sIHNldElzRHJvcERvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnb1RvU2lnblBhZ2UgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9sb2dpbmApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLmFzaWRlfT5cbiAgICAgIHshIXVzZXIuaWQgPyAoXG4gICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9eygpID0+IGdvVG9TaWduUGFnZSgpfT5cbiAgICAgICAgICA8c3Bhbj7roZzqt7jsnbgg67CPIO2ajOybkOqwgOyehTwvc3Bhbj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApIDogKFxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWxhcmFtX2J1dHRvbn1cbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRJc0Ryb3BEb3duT3BlbigocHJldikgPT4gIXByZXYpfVxuICAgICAgICA+XG4gICAgICAgICAge3RoZW1lID09IFwibGlnaHRcIiA/IChcbiAgICAgICAgICAgIDxJY29uIHNyYz17QWxhcm19IGFsdD1cImFsYXJtIGltYWdlXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8SWNvbiBzcmM9e0FsYXJtRGFya30gYWx0PVwiYWxhcm0gaW1hZ2VcIiB3aWR0aD17MjR9IGhlaWdodD17MjR9IC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxEcm9wRG93blxuICAgICAgICAgICAgbWFyZ2luPVwiMzBweCAwIDAgMFwiXG4gICAgICAgICAgICBpc09wZW49e2lzRHJvcERvd25PcGVufVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SXNEcm9wRG93bk9wZW4oZmFsc2UpfVxuICAgICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI1MDBweFwiXG4gICAgICAgICAgICB3aWR0aD1cIjQyOHB4XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cD5hbGFyYW08L3A+XG4gICAgICAgICAgPC9Ecm9wRG93bj5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICApfVxuICAgIDwvYXNpZGU+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwiQWxhcm0iLCJBbGFybURhcmsiLCJ0aGVtZVN0YXRlIiwidXNlclN0YXRlIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZWNvaWxWYWx1ZSIsIkRyb3BEb3duIiwiSWNvbiIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiQXNpZGUiLCJ0aGVtZSIsInVzZXIiLCJyb3V0ZXIiLCJpc0Ryb3BEb3duT3BlbiIsInNldElzRHJvcERvd25PcGVuIiwiZ29Ub1NpZ25QYWdlIiwicHVzaCIsImFzaWRlIiwiY2xhc3NOYW1lIiwiaWQiLCJidXR0b24iLCJ0eXBlIiwib25DbGljayIsInNwYW4iLCJhbGFyYW1fYnV0dG9uIiwicHJldiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwiaXNPcGVuIiwib25DbG9zZSIsInBvc2l0aW9uIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Aside.tsx\n"));

/***/ })

});
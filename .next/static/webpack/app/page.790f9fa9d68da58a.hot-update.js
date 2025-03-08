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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Aside; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_aside_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/aside.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/aside.module.css\");\n/* harmony import */ var _css_aside_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_aside_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _public_icon_alarm_icon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/../public/icon/alarm-icon.svg */ \"(app-pages-browser)/./public/icon/alarm-icon.svg\");\n/* harmony import */ var _public_icon_alarm_icon_dark_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../public/icon/alarm-icon-dark.svg */ \"(app-pages-browser)/./public/icon/alarm-icon-dark.svg\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// import { useState } from \"react\";\nfunction Aside() {\n    _s();\n    const [theme] = (0,recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_4__.themeState);\n    const session = false;\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter)();\n    const [isDropDownOpen, setIsDropDownOpen] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);\n    const goToSignPage = ()=>{\n        router.push(\"/login\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"aside\", {\n        className: (_css_aside_module_css__WEBPACK_IMPORTED_MODULE_1___default().aside),\n        children: session ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            onClick: ()=>goToSignPage(),\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                children: \"로그인 및 회원가입\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                lineNumber: 27,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n            lineNumber: 26,\n            columnNumber: 9\n        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            type: \"button\",\n            className: (_css_aside_module_css__WEBPACK_IMPORTED_MODULE_1___default().alaram_button),\n            onClick: ()=>setIsDropDownOpen((prev)=>!prev),\n            children: [\n                theme == \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                    src: _public_icon_alarm_icon_svg__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n                    alt: \"alarm image\",\n                    width: 24,\n                    height: 24\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 13\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_6__.Icon, {\n                    src: _public_icon_alarm_icon_dark_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    alt: \"alarm image\",\n                    width: 24,\n                    height: 24\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_6__.DropDown, {\n                    margin: \"30px 0 0 0\",\n                    isOpen: isDropDownOpen,\n                    onClose: ()=>setIsDropDownOpen(false),\n                    position: \"right\",\n                    scrollable: true,\n                    width: \"\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"alaram\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 13\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n            lineNumber: 30,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Aside.tsx\",\n        lineNumber: 24,\n        columnNumber: 5\n    }, this);\n}\n_s(Aside, \"mNUgqa3V3rLkekxKWRs+8G06TFY=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_5__.useRecoilState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_7__.useRouter\n    ];\n});\n_c = Aside;\nvar _c;\n$RefreshReg$(_c, \"Aside\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Bc2lkZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNkM7QUFDTztBQUNTO0FBQ2xCO0FBQ0g7QUFDRTtBQUNFO0FBQ1g7QUFDakMsb0NBQW9DO0FBRXJCLFNBQVNTOztJQUN0QixNQUFNLENBQUNDLE1BQU0sR0FBR04sc0RBQWNBLENBQUNELG1EQUFVQTtJQUN6QyxNQUFNUSxVQUFVO0lBQ2hCLE1BQU1DLFNBQVNMLDBEQUFTQTtJQUN4QixNQUFNLENBQUNNLGdCQUFnQkMsa0JBQWtCLEdBQUdOLCtDQUFRQSxDQUFDO0lBRXJELE1BQU1PLGVBQWU7UUFDbkJILE9BQU9JLElBQUksQ0FBRTtJQUNmO0lBRUEscUJBQ0UsOERBQUNDO1FBQU1DLFdBQVdsQixvRUFBWTtrQkFDM0JXLHdCQUNDLDhEQUFDUTtZQUFPQyxNQUFLO1lBQVNDLFNBQVMsSUFBTU47c0JBQ25DLDRFQUFDTzswQkFBSzs7Ozs7Ozs7OztpQ0FHUiw4REFBQ0g7WUFDQ0MsTUFBSztZQUNMRixXQUFXbEIsNEVBQW9CO1lBQy9CcUIsU0FBUyxJQUFNUCxrQkFBa0IsQ0FBQ1UsT0FBUyxDQUFDQTs7Z0JBRTNDZCxTQUFTLHdCQUNSLDhEQUFDSix3Q0FBSUE7b0JBQUNtQixLQUFLeEIsbUVBQUtBO29CQUFFeUIsS0FBSTtvQkFBY0MsT0FBTztvQkFBSUMsUUFBUTs7Ozs7eUNBRXZELDhEQUFDdEIsd0NBQUlBO29CQUFDbUIsS0FBS3ZCLHdFQUFTQTtvQkFBRXdCLEtBQUk7b0JBQWNDLE9BQU87b0JBQUlDLFFBQVE7Ozs7Ozs4QkFHN0QsOERBQUN2Qiw0Q0FBUUE7b0JBQ1B3QixRQUFPO29CQUNQQyxRQUFRakI7b0JBQ1JrQixTQUFTLElBQU1qQixrQkFBa0I7b0JBQ2pDa0IsVUFBUztvQkFDVEMsVUFBVTtvQkFDVk4sT0FBTTs4QkFFTiw0RUFBQ087a0NBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNZjtHQTFDd0J6Qjs7UUFDTkwsa0RBQWNBO1FBRWZHLHNEQUFTQTs7O0tBSEZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9Bc2lkZS50c3g/M2IxYSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9fY3NzL2FzaWRlLm1vZHVsZS5jc3NcIjtcbmltcG9ydCBBbGFybSBmcm9tIFwiQC8uLi9wdWJsaWMvaWNvbi9hbGFybS1pY29uLnN2Z1wiO1xuaW1wb3J0IEFsYXJtRGFyayBmcm9tIFwiQC8uLi9wdWJsaWMvaWNvbi9hbGFybS1pY29uLWRhcmsuc3ZnXCI7XG5pbXBvcnQgeyB0aGVtZVN0YXRlIH0gZnJvbSBcIkAvYXBwL19yZWNvaWxcIjtcbmltcG9ydCB7IHVzZVJlY29pbFN0YXRlIH0gZnJvbSBcInJlY29pbFwiO1xuaW1wb3J0IHsgRHJvcERvd24sIEljb24gfSBmcm9tIFwiLi4vYXRvbXNcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBc2lkZSgpIHtcbiAgY29uc3QgW3RoZW1lXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lU3RhdGUpO1xuICBjb25zdCBzZXNzaW9uID0gZmFsc2U7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbaXNEcm9wRG93bk9wZW4sIHNldElzRHJvcERvd25PcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCBnb1RvU2lnblBhZ2UgPSAoKSA9PiB7XG4gICAgcm91dGVyLnB1c2goYC9sb2dpbmApO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGFzaWRlIGNsYXNzTmFtZT17c3R5bGVzLmFzaWRlfT5cbiAgICAgIHtzZXNzaW9uID8gKFxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiBnb1RvU2lnblBhZ2UoKX0+XG4gICAgICAgICAgPHNwYW4+66Gc6re47J24IOuwjyDtmozsm5DqsIDsnoU8L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgKSA6IChcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFsYXJhbV9idXR0b259XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0SXNEcm9wRG93bk9wZW4oKHByZXYpID0+ICFwcmV2KX1cbiAgICAgICAgPlxuICAgICAgICAgIHt0aGVtZSA9PSBcImxpZ2h0XCIgPyAoXG4gICAgICAgICAgICA8SWNvbiBzcmM9e0FsYXJtfSBhbHQ9XCJhbGFybSBpbWFnZVwiIHdpZHRoPXsyNH0gaGVpZ2h0PXsyNH0gLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPEljb24gc3JjPXtBbGFybURhcmt9IGFsdD1cImFsYXJtIGltYWdlXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICAgICl9XG5cbiAgICAgICAgICA8RHJvcERvd25cbiAgICAgICAgICAgIG1hcmdpbj1cIjMwcHggMCAwIDBcIlxuICAgICAgICAgICAgaXNPcGVuPXtpc0Ryb3BEb3duT3Blbn1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldElzRHJvcERvd25PcGVuKGZhbHNlKX1cbiAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgc2Nyb2xsYWJsZVxuICAgICAgICAgICAgd2lkdGg9XCJcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwPmFsYXJhbTwvcD5cbiAgICAgICAgICA8L0Ryb3BEb3duPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICl9XG4gICAgPC9hc2lkZT5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJzdHlsZXMiLCJBbGFybSIsIkFsYXJtRGFyayIsInRoZW1lU3RhdGUiLCJ1c2VSZWNvaWxTdGF0ZSIsIkRyb3BEb3duIiwiSWNvbiIsInVzZVJvdXRlciIsInVzZVN0YXRlIiwiQXNpZGUiLCJ0aGVtZSIsInNlc3Npb24iLCJyb3V0ZXIiLCJpc0Ryb3BEb3duT3BlbiIsInNldElzRHJvcERvd25PcGVuIiwiZ29Ub1NpZ25QYWdlIiwicHVzaCIsImFzaWRlIiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwidHlwZSIsIm9uQ2xpY2siLCJzcGFuIiwiYWxhcmFtX2J1dHRvbiIsInByZXYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsImlzT3BlbiIsIm9uQ2xvc2UiLCJwb3NpdGlvbiIsInNjcm9sbGFibGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Aside.tsx\n"));

/***/ })

});
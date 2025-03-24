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

/***/ "(app-pages-browser)/./src/app/_components/fixedButton/FixedButton.tsx":
/*!*********************************************************!*\
  !*** ./src/app/_components/fixedButton/FixedButton.tsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FixedButton; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _fixedbutton_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fixedbutton.module.css */ \"(app-pages-browser)/./src/app/_components/fixedButton/fixedbutton.module.css\");\n/* harmony import */ var _fixedbutton_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_fixedbutton_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _app_recoil_themeAtom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/app/_recoil/themeAtom */ \"(app-pages-browser)/./src/app/_recoil/themeAtom.ts\");\n/* harmony import */ var _public_icon_icon_mode_dark_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/../../public/icon/icon-mode-dark.svg */ \"(app-pages-browser)/./public/icon/icon-mode-dark.svg\");\n/* harmony import */ var _public_icon_icon_writing_dark_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/../../public/icon/icon-writing-dark.svg */ \"(app-pages-browser)/./public/icon/icon-writing-dark.svg\");\n/* harmony import */ var _public_icon_icon_mode_light_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/../../public/icon/icon-mode-light.svg */ \"(app-pages-browser)/./public/icon/icon-mode-light.svg\");\n/* harmony import */ var _public_icon_icon_writing_light_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/../../public/icon/icon-writing-light.svg */ \"(app-pages-browser)/./public/icon/icon-writing-light.svg\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\nfunction FixedButton() {\n    _s();\n    const [, setActiveItem] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_11__.activeItemState);\n    const [theme, setTheme] = (0,recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState)(_app_recoil_themeAtom__WEBPACK_IMPORTED_MODULE_5__.themeState);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    // 클라이언트에서 `localStorage`에서 초기 테마 설정\n    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{\n        if (true) {\n            const storedTheme = localStorage.getItem(\"theme\");\n            if (storedTheme === \"light\" || storedTheme === \"dark\") {\n                setTheme(storedTheme);\n            }\n        }\n    }, []);\n    // 테마 변경 함수\n    const toggleTheme = ()=>{\n        const newTheme = theme === \"light\" ? \"dark\" : \"light\";\n        setTheme(newTheme);\n        localStorage.setItem(\"theme\", newTheme);\n    };\n    const goToWriting = ()=>{\n        router.push(\"/writing\");\n        setActiveItem();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_fixedbutton_module_css__WEBPACK_IMPORTED_MODULE_3___default().button_wrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_fixedbutton_module_css__WEBPACK_IMPORTED_MODULE_3___default().toggle_button),\n                onClick: toggleTheme,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_10__.Icon, {\n                    src: theme !== \"light\" ? _public_icon_icon_mode_light_svg__WEBPACK_IMPORTED_MODULE_8__[\"default\"] : _public_icon_icon_mode_dark_svg__WEBPACK_IMPORTED_MODULE_6__[\"default\"],\n                    alt: \"라이트모드 버튼 아이콘\",\n                    width: 80,\n                    height: 80\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/fixedButton/FixedButton.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/fixedButton/FixedButton.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_fixedbutton_module_css__WEBPACK_IMPORTED_MODULE_3___default().toggle_button),\n                onClick: goToWriting,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_10__.Icon, {\n                    src: theme == \"light\" ? _public_icon_icon_writing_light_svg__WEBPACK_IMPORTED_MODULE_9__[\"default\"] : _public_icon_icon_writing_dark_svg__WEBPACK_IMPORTED_MODULE_7__[\"default\"],\n                    alt: \"글쓰기 버튼 아이콘\",\n                    width: 80,\n                    height: 80\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/fixedButton/FixedButton.tsx\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/fixedButton/FixedButton.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/fixedButton/FixedButton.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(FixedButton, \"ydjxn8IJGDZXpwlf5TMLhPPc68g=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        recoil__WEBPACK_IMPORTED_MODULE_1__.useRecoilState,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = FixedButton;\nvar _c;\n$RefreshReg$(_c, \"FixedButton\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvZml4ZWRCdXR0b24vRml4ZWRCdXR0b24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXdDO0FBQ0k7QUFDRTtBQUNaO0FBQzhCO0FBQ0M7QUFDTTtBQUNKO0FBQ007QUFDekM7QUFDZ0I7QUFFakMsU0FBU1c7O0lBQ3RCLE1BQU0sR0FBR0MsY0FBYyxHQUFHWixzREFBY0EsQ0FBQ1UseURBQWVBO0lBQ3hELE1BQU0sQ0FBQ0csT0FBT0MsU0FBUyxHQUFHZCxzREFBY0EsQ0FBQ0ksNkRBQVVBO0lBQ25ELE1BQU1XLFNBQVNkLDBEQUFTQTtJQUV4QixvQ0FBb0M7SUFDcENFLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxJQUE2QixFQUFFO1lBQ2pDLE1BQU1hLGNBQWNDLGFBQWFDLE9BQU8sQ0FBQztZQUN6QyxJQUFJRixnQkFBZ0IsV0FBV0EsZ0JBQWdCLFFBQVE7Z0JBQ3JERixTQUFTRTtZQUNYO1FBQ0Y7SUFDRixHQUFHLEVBQUU7SUFFTCxXQUFXO0lBQ1gsTUFBTUcsY0FBYztRQUNsQixNQUFNQyxXQUFXUCxVQUFVLFVBQVUsU0FBUztRQUM5Q0MsU0FBU007UUFDVEgsYUFBYUksT0FBTyxDQUFDLFNBQVNEO0lBQ2hDO0lBRUEsTUFBTUUsY0FBYztRQUNsQlAsT0FBT1EsSUFBSSxDQUFFO1FBQ2ZYO0lBQ0E7SUFFQSxxQkFDRSw4REFBQ1k7UUFBSUMsV0FBV3ZCLDRFQUFrQjs7MEJBQ2hDLDhEQUFDeUI7Z0JBQU9GLFdBQVd2Qiw4RUFBb0I7Z0JBQUUyQixTQUFTVjswQkFDaEQsNEVBQUNWLHlDQUFJQTtvQkFDSHFCLEtBQUtqQixVQUFVLFVBQVVOLHdFQUFZQSxHQUFHRix1RUFBV0E7b0JBQ25EMEIsS0FBSTtvQkFDSkMsT0FBTztvQkFDUEMsUUFBUTs7Ozs7Ozs7Ozs7MEJBR1osOERBQUNOO2dCQUFPRixXQUFXdkIsOEVBQW9CO2dCQUFFMkIsU0FBU1A7MEJBQ2hELDRFQUFDYix5Q0FBSUE7b0JBQ0hxQixLQUFLakIsU0FBUyxVQUFVTCwyRUFBZUEsR0FBR0YsMEVBQWNBO29CQUN4RHlCLEtBQUk7b0JBQ0pDLE9BQU87b0JBQ1BDLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2xCO0dBL0N3QnRCOztRQUNJWCxrREFBY0E7UUFDZEEsa0RBQWNBO1FBQ3pCQyxzREFBU0E7OztLQUhGVSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2ZpeGVkQnV0dG9uL0ZpeGVkQnV0dG9uLnRzeD9lMzljIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSB9IGZyb20gXCJyZWNvaWxcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vZml4ZWRidXR0b24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyB0aGVtZVN0YXRlLCBUaGVtZVR5cGUgfSBmcm9tIFwiQC9hcHAvX3JlY29pbC90aGVtZUF0b21cIjtcbmltcG9ydCBJb2NNb2RlRGFyayBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaWNvbi9pY29uLW1vZGUtZGFyay5zdmdcIjtcbmltcG9ydCBJb2NXcml0aW5nRGFyayBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaWNvbi9pY29uLXdyaXRpbmctZGFyay5zdmdcIjtcbmltcG9ydCBJb2NNb2RlTGlnaHQgZnJvbSBcIkAvLi4vLi4vcHVibGljL2ljb24vaWNvbi1tb2RlLWxpZ2h0LnN2Z1wiO1xuaW1wb3J0IElvY1dyaXRpbmdMaWdodCBmcm9tIFwiQC8uLi8uLi9wdWJsaWMvaWNvbi9pY29uLXdyaXRpbmctbGlnaHQuc3ZnXCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIi4uL2F0b21zXCI7XG5pbXBvcnQgeyBhY3RpdmVJdGVtU3RhdGUgfSBmcm9tIFwiQC9hcHAvX3JlY29pbFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXhlZEJ1dHRvbigpIHtcbiAgY29uc3QgWywgc2V0QWN0aXZlSXRlbV0gPSB1c2VSZWNvaWxTdGF0ZShhY3RpdmVJdGVtU3RhdGUpO1xuICBjb25zdCBbdGhlbWUsIHNldFRoZW1lXSA9IHVzZVJlY29pbFN0YXRlKHRoZW1lU3RhdGUpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICAvLyDtgbTrnbzsnbTslrjtirjsl5DshJwgYGxvY2FsU3RvcmFnZWDsl5DshJwg7LSI6riwIO2FjOuniCDshKTsoJVcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgY29uc3Qgc3RvcmVkVGhlbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRoZW1lXCIpIGFzIFRoZW1lVHlwZSB8IG51bGw7XG4gICAgICBpZiAoc3RvcmVkVGhlbWUgPT09IFwibGlnaHRcIiB8fCBzdG9yZWRUaGVtZSA9PT0gXCJkYXJrXCIpIHtcbiAgICAgICAgc2V0VGhlbWUoc3RvcmVkVGhlbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vIO2FjOuniCDrs4Dqsr0g7ZWo7IiYXG4gIGNvbnN0IHRvZ2dsZVRoZW1lID0gKCkgPT4ge1xuICAgIGNvbnN0IG5ld1RoZW1lID0gdGhlbWUgPT09IFwibGlnaHRcIiA/IFwiZGFya1wiIDogXCJsaWdodFwiO1xuICAgIHNldFRoZW1lKG5ld1RoZW1lKTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRoZW1lXCIsIG5ld1RoZW1lKTtcbiAgfTtcblxuICBjb25zdCBnb1RvV3JpdGluZyA9ICgpID0+IHtcbiAgICByb3V0ZXIucHVzaChgL3dyaXRpbmdgKTtcblx0XHRzZXRBY3RpdmVJdGVtKClcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX3dyYXB9PlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e3N0eWxlcy50b2dnbGVfYnV0dG9ufSBvbkNsaWNrPXt0b2dnbGVUaGVtZX0+XG4gICAgICAgIDxJY29uXG4gICAgICAgICAgc3JjPXt0aGVtZSAhPT0gXCJsaWdodFwiID8gSW9jTW9kZUxpZ2h0IDogSW9jTW9kZURhcmt9XG4gICAgICAgICAgYWx0PVwi65287J207Yq466qo65OcIOuyhO2KvCDslYTsnbTsvZhcIlxuICAgICAgICAgIHdpZHRoPXs4MH1cbiAgICAgICAgICBoZWlnaHQ9ezgwfVxuICAgICAgICAvPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnRvZ2dsZV9idXR0b259IG9uQ2xpY2s9e2dvVG9Xcml0aW5nfT5cbiAgICAgICAgPEljb25cbiAgICAgICAgICBzcmM9e3RoZW1lID09IFwibGlnaHRcIiA/IElvY1dyaXRpbmdMaWdodCA6IElvY1dyaXRpbmdEYXJrfVxuICAgICAgICAgIGFsdD1cIuq4gOyTsOq4sCDrsoTtirwg7JWE7J207L2YXCJcbiAgICAgICAgICB3aWR0aD17ODB9XG4gICAgICAgICAgaGVpZ2h0PXs4MH1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlY29pbFN0YXRlIiwidXNlUm91dGVyIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidGhlbWVTdGF0ZSIsIklvY01vZGVEYXJrIiwiSW9jV3JpdGluZ0RhcmsiLCJJb2NNb2RlTGlnaHQiLCJJb2NXcml0aW5nTGlnaHQiLCJJY29uIiwiYWN0aXZlSXRlbVN0YXRlIiwiRml4ZWRCdXR0b24iLCJzZXRBY3RpdmVJdGVtIiwidGhlbWUiLCJzZXRUaGVtZSIsInJvdXRlciIsInN0b3JlZFRoZW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInRvZ2dsZVRoZW1lIiwibmV3VGhlbWUiLCJzZXRJdGVtIiwiZ29Ub1dyaXRpbmciLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uX3dyYXAiLCJidXR0b24iLCJ0b2dnbGVfYnV0dG9uIiwib25DbGljayIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/fixedButton/FixedButton.tsx\n"));

/***/ })

});
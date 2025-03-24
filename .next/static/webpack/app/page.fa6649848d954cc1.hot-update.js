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

/***/ "(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx":
/*!************************************************!*\
  !*** ./src/app/_components/navigation/Gnb.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Gnb; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_css/gnb.module.css */ \"(app-pages-browser)/./src/app/_components/navigation/_css/gnb.module.css\");\n/* harmony import */ var _css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n/* harmony import */ var _app_recoil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_recoil */ \"(app-pages-browser)/./src/app/_recoil/index.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Gnb() {\n    _s();\n    const user = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue)(_app_recoil__WEBPACK_IMPORTED_MODULE_3__.userState);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [activeItem, setActiveItem] = (0,recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState)(_app_recoil__WEBPACK_IMPORTED_MODULE_3__.activeItemState);\n    const navItems = [\n        {\n            label: \"트랜드\",\n            href: \"/\",\n            show: true\n        },\n        {\n            label: \"최신\",\n            href: \"/\",\n            show: true\n        },\n        {\n            label: \"덕질 중\",\n            href: \"/\",\n            show: user.id\n        },\n        {\n            label: \"덕질 중\",\n            href: \"/\",\n            show: user.id\n        },\n        {\n            label: \"마이페이지\",\n            href: user.id ? \"/writing\" : \"/login\",\n            show: user.id\n        }\n    ];\n    const handleNavigation = (label, href)=>{\n        if (activeItem === label) return; // 현재 선택된 항목이면 함수 중단\n        setActiveItem(label);\n        router.push(href); // Next.js 페이지 이동\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n        className: (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_list),\n        children: navItems.filter((item)=>item.show).map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: ()=>handleNavigation(item.label, item.href),\n                    disabled: activeItem === item.label,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"\".concat((_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_item), \" \").concat(activeItem === item.label ? (_css_gnb_module_css__WEBPACK_IMPORTED_MODULE_1___default().gnb_item_on) : \"\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            children: item.label\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                    lineNumber: 37,\n                    columnNumber: 13\n                }, this)\n            }, item.label, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, this))\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/navigation/Gnb.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Gnb, \"igkfa90rszg2GfDnNfor6l2uGyE=\", false, function() {\n    return [\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilValue,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        recoil__WEBPACK_IMPORTED_MODULE_2__.useRecoilState\n    ];\n});\n_c = Gnb;\nvar _c;\n$RefreshReg$(_c, \"Gnb\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvbmF2aWdhdGlvbi9HbmIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUyQztBQUNhO0FBQ0c7QUFDZjtBQUU3QixTQUFTTTs7SUFDdEIsTUFBTUMsT0FBT0wsc0RBQWNBLENBQUNFLGtEQUFTQTtJQUNyQyxNQUFNSSxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxDQUFDSSxZQUFZQyxjQUFjLEdBQUdULHNEQUFjQSxDQUFDRSx3REFBZUE7SUFFbEUsTUFBTVEsV0FBVztRQUNmO1lBQUVDLE9BQU87WUFBT0MsTUFBTTtZQUFLQyxNQUFNO1FBQUs7UUFDdEM7WUFBRUYsT0FBTztZQUFNQyxNQUFNO1lBQUtDLE1BQU07UUFBSztRQUNyQztZQUFFRixPQUFPO1lBQVFDLE1BQU07WUFBS0MsTUFBTVAsS0FBS1EsRUFBRTtRQUFDO1FBQzFDO1lBQUVILE9BQU87WUFBUUMsTUFBTTtZQUFLQyxNQUFNUCxLQUFLUSxFQUFFO1FBQUM7UUFDMUM7WUFDRUgsT0FBTztZQUNQQyxNQUFNTixLQUFLUSxFQUFFLEdBQUksYUFBWTtZQUM3QkQsTUFBTVAsS0FBS1EsRUFBRTtRQUNmO0tBQ0Q7SUFFRCxNQUFNQyxtQkFBbUIsQ0FBQ0osT0FBZUM7UUFDdkMsSUFBSUosZUFBZUcsT0FBTyxRQUFRLG9CQUFvQjtRQUN0REYsY0FBY0U7UUFDZEosT0FBT1MsSUFBSSxDQUFDSixPQUFPLGlCQUFpQjtJQUN0QztJQUVBLHFCQUNFLDhEQUFDSztRQUFHQyxXQUFXbkIscUVBQWU7a0JBQzNCVyxTQUNFVSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS1IsSUFBSSxFQUMxQlMsR0FBRyxDQUFDLENBQUNELHFCQUNKLDhEQUFDRTswQkFDQyw0RUFBQ0M7b0JBQ0NDLFNBQVMsSUFBTVYsaUJBQWlCTSxLQUFLVixLQUFLLEVBQUVVLEtBQUtULElBQUk7b0JBQ3JEYyxVQUFVbEIsZUFBZWEsS0FBS1YsS0FBSzs4QkFFbkMsNEVBQUNnQjt3QkFDQ1QsV0FBVyxHQUNUVixPQURZVCxxRUFBZSxFQUFDLEtBRTdCLE9BRENTLGVBQWVhLEtBQUtWLEtBQUssR0FBR1osd0VBQWtCLEdBQUc7a0NBR25ELDRFQUFDK0I7c0NBQU1ULEtBQUtWLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFWZFUsS0FBS1YsS0FBSzs7Ozs7Ozs7OztBQWlCN0I7R0E3Q3dCTjs7UUFDVEosa0RBQWNBO1FBQ1pHLHNEQUFTQTtRQUNZSixrREFBY0E7OztLQUg1QksiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9uYXZpZ2F0aW9uL0duYi50c3g/MDhkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi9fY3NzL2duYi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyB1c2VSZWNvaWxTdGF0ZSwgdXNlUmVjb2lsVmFsdWUgfSBmcm9tIFwicmVjb2lsXCI7XG5pbXBvcnQgeyBhY3RpdmVJdGVtU3RhdGUsIHVzZXJTdGF0ZSB9IGZyb20gXCJAL2FwcC9fcmVjb2lsXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9uYXZpZ2F0aW9uXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEduYigpIHtcbiAgY29uc3QgdXNlciA9IHVzZVJlY29pbFZhbHVlKHVzZXJTdGF0ZSk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBbYWN0aXZlSXRlbSwgc2V0QWN0aXZlSXRlbV0gPSB1c2VSZWNvaWxTdGF0ZShhY3RpdmVJdGVtU3RhdGUpO1xuXG4gIGNvbnN0IG5hdkl0ZW1zID0gW1xuICAgIHsgbGFiZWw6IFwi7Yq4656c65OcXCIsIGhyZWY6IFwiL1wiLCBzaG93OiB0cnVlIH0sXG4gICAgeyBsYWJlbDogXCLstZzsi6BcIiwgaHJlZjogXCIvXCIsIHNob3c6IHRydWUgfSxcbiAgICB7IGxhYmVsOiBcIuuNleyniCDspJFcIiwgaHJlZjogXCIvXCIsIHNob3c6IHVzZXIuaWQgfSwgLy8g66Gc6re47J24IOyLnCDtkZzsi5xcbiAgICB7IGxhYmVsOiBcIuuNleyniCDspJFcIiwgaHJlZjogXCIvXCIsIHNob3c6IHVzZXIuaWQgfSwgLy8g66Gc6re47J24IOyLnCDtkZzsi5xcbiAgICB7XG4gICAgICBsYWJlbDogXCLrp4jsnbTtjpjsnbTsp4BcIixcbiAgICAgIGhyZWY6IHVzZXIuaWQgPyBgL3dyaXRpbmdgIDogXCIvbG9naW5cIixcbiAgICAgIHNob3c6IHVzZXIuaWQsXG4gICAgfSwgLy8g66Gc6re47J24IOyLnCDtkZzsi5xcbiAgXTtcblxuICBjb25zdCBoYW5kbGVOYXZpZ2F0aW9uID0gKGxhYmVsOiBzdHJpbmcsIGhyZWY6IHN0cmluZykgPT4ge1xuICAgIGlmIChhY3RpdmVJdGVtID09PSBsYWJlbCkgcmV0dXJuOyAvLyDtmITsnqwg7ISg7YOd65CcIO2VreuqqeydtOuptCDtlajsiJgg7KSR64uoXG4gICAgc2V0QWN0aXZlSXRlbShsYWJlbCk7XG4gICAgcm91dGVyLnB1c2goaHJlZik7IC8vIE5leHQuanMg7Y6Y7J207KeAIOydtOuPmVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLmduYl9saXN0fT5cbiAgICAgIHtuYXZJdGVtc1xuICAgICAgICAuZmlsdGVyKChpdGVtKSA9PiBpdGVtLnNob3cpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICA8bGkga2V5PXtpdGVtLmxhYmVsfT5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGlvbihpdGVtLmxhYmVsLCBpdGVtLmhyZWYpfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlSXRlbSA9PT0gaXRlbS5sYWJlbH0gLy8g7ZiE7J6sIOyEoO2DneuQnCDtla3rqqnsnbTrqbQg67mE7Zmc7ISx7ZmUXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxoMlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmduYl9pdGVtfSAke1xuICAgICAgICAgICAgICAgICAgYWN0aXZlSXRlbSA9PT0gaXRlbS5sYWJlbCA/IHN0eWxlcy5nbmJfaXRlbV9vbiA6IFwiXCJcbiAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLmxhYmVsfTwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgIDwvdWw+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlUmVjb2lsU3RhdGUiLCJ1c2VSZWNvaWxWYWx1ZSIsImFjdGl2ZUl0ZW1TdGF0ZSIsInVzZXJTdGF0ZSIsInVzZVJvdXRlciIsIkduYiIsInVzZXIiLCJyb3V0ZXIiLCJhY3RpdmVJdGVtIiwic2V0QWN0aXZlSXRlbSIsIm5hdkl0ZW1zIiwibGFiZWwiLCJocmVmIiwic2hvdyIsImlkIiwiaGFuZGxlTmF2aWdhdGlvbiIsInB1c2giLCJ1bCIsImNsYXNzTmFtZSIsImduYl9saXN0IiwiZmlsdGVyIiwiaXRlbSIsIm1hcCIsImxpIiwiYnV0dG9uIiwib25DbGljayIsImRpc2FibGVkIiwiaDIiLCJnbmJfaXRlbSIsImduYl9pdGVtX29uIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/navigation/Gnb.tsx\n"));

/***/ })

});
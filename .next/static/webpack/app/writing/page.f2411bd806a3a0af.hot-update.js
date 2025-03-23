"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/writing/page",{

/***/ "(app-pages-browser)/./src/app/writing/_components/IsBackModalContent.tsx":
/*!************************************************************!*\
  !*** ./src/app/writing/_components/IsBackModalContent.tsx ***!
  \************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IsBackModalContent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_hooks/useModal */ \"(app-pages-browser)/./src/app/_hooks/useModal.ts\");\n/* harmony import */ var _css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/writingform.module.css */ \"(app-pages-browser)/./src/app/writing/_css/writingform.module.css\");\n/* harmony import */ var _css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _public_icon_icon_logout_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../public/icon/icon-logout.svg */ \"(app-pages-browser)/./public/icon/icon-logout.svg\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/api/navigation.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction IsBackModalContent() {\n    _s();\n    const { closeModal } = (0,_app_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__.useModal)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter)();\n    const handleBack = ()=>{\n        closeModal();\n        router.back();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                src: _public_icon_icon_logout_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                width: 50,\n                height: 50,\n                alt: \"로그아웃 모달 아이콘\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                className: (_css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal_title),\n                children: \"리뷰 작성을 중단하시겠어요?\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                className: (_css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2___default().modal_info),\n                children: \"리뷰 작성 중단시 내용이 저장되지 않습니다.\"\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_writingform_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_wrap),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        buttonType: \"button\",\n                        height: \"42px\",\n                        fontSize: \"12px\",\n                        onClick: ()=>closeModal(),\n                        children: \"아니요, 계속할래요\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                        buttonType: \"button\",\n                        height: \"42px\",\n                        fontSize: \"12px\",\n                        filled: true,\n                        onClick: handleBack,\n                        children: \"네, 중단할래요\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/IsBackModalContent.tsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, this);\n}\n_s(IsBackModalContent, \"kHaVnIuJhOmTHcXSBYgGkfMnGnY=\", false, function() {\n    return [\n        _app_hooks_useModal__WEBPACK_IMPORTED_MODULE_1__.useModal,\n        next_navigation__WEBPACK_IMPORTED_MODULE_5__.useRouter\n    ];\n});\n_c = IsBackModalContent;\nvar _c;\n$RefreshReg$(_c, \"IsBackModalContent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGluZy9fY29tcG9uZW50cy9Jc0JhY2tNb2RhbENvbnRlbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDRztBQUNHO0FBQ0U7QUFDYjtBQUU3QixTQUFTTTs7SUFDdEIsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR1AsNkRBQVFBO0lBQy9CLE1BQU1RLFNBQVNILDBEQUFTQTtJQUV4QixNQUFNSSxhQUFhO1FBQ2pCRjtRQUNBQyxPQUFPRSxJQUFJO0lBQ2I7SUFFQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBV1gsMEVBQVk7OzBCQUMxQiw4REFBQ0UsdURBQUlBO2dCQUFDVyxLQUFLVixvRUFBU0E7Z0JBQUVXLE9BQU87Z0JBQUlDLFFBQVE7Z0JBQUlDLEtBQUk7Ozs7OzswQkFDakQsOERBQUNDO2dCQUFPTixXQUFXWCxnRkFBa0I7MEJBQUU7Ozs7OzswQkFHdkMsOERBQUNtQjtnQkFBRVIsV0FBV1gsK0VBQWlCOzBCQUFFOzs7Ozs7MEJBR2pDLDhEQUFDVTtnQkFBSUMsV0FBV1gsZ0ZBQWtCOztrQ0FDaEMsOERBQUNDLHlEQUFNQTt3QkFDTHFCLFlBQVc7d0JBQ1hQLFFBQU87d0JBQ1BRLFVBQVM7d0JBQ1RDLFNBQVMsSUFBTWxCO2tDQUNoQjs7Ozs7O2tDQUdELDhEQUFDTCx5REFBTUE7d0JBQ0xxQixZQUFXO3dCQUNYUCxRQUFPO3dCQUNQUSxVQUFTO3dCQUNURSxNQUFNO3dCQUNORCxTQUFTaEI7a0NBQ1Y7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1UO0dBdkN3Qkg7O1FBQ0NOLHlEQUFRQTtRQUNoQkssc0RBQVNBOzs7S0FGRkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC93cml0aW5nL19jb21wb25lbnRzL0lzQmFja01vZGFsQ29udGVudC50c3g/ODNhNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNb2RhbCB9IGZyb20gXCJAL2FwcC9faG9va3MvdXNlTW9kYWxcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL19jc3Mvd3JpdGluZ2Zvcm0ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zXCI7XG5pbXBvcnQgSWNvTG9nb3V0IGZyb20gXCJALy4uL3B1YmxpYy9pY29uL2ljb24tbG9nb3V0LnN2Z1wiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJc0JhY2tNb2RhbENvbnRlbnQoKSB7XG4gIGNvbnN0IHsgY2xvc2VNb2RhbCB9ID0gdXNlTW9kYWwoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcbiAgICBjbG9zZU1vZGFsKCk7XG4gICAgcm91dGVyLmJhY2soKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubW9kYWx9PlxuICAgICAgPEljb24gc3JjPXtJY29Mb2dvdXR9IHdpZHRoPXs1MH0gaGVpZ2h0PXs1MH0gYWx0PVwi66Gc6re47JWE7JuDIOuqqOuLrCDslYTsnbTsvZhcIiAvPlxuICAgICAgPHN0cm9uZyBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF90aXRsZX0+XG4gICAgICAgIOumrOu3sCDsnpHshLHsnYQg7KSR64uo7ZWY7Iuc6rKg7Ja07JqUP1xuICAgICAgPC9zdHJvbmc+XG4gICAgICA8cCBjbGFzc05hbWU9e3N0eWxlcy5tb2RhbF9pbmZvfT5cbiAgICAgICAg66as67ewIOyekeyEsSDspJHri6jsi5wg64K07Jqp7J20IOyggOyepeuQmOyngCDslYrsirXri4jri6QuXG4gICAgICA8L3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbl93cmFwfT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIGJ1dHRvblR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGhlaWdodD1cIjQycHhcIlxuICAgICAgICAgIGZvbnRTaXplPVwiMTJweFwiXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gY2xvc2VNb2RhbCgpfVxuICAgICAgICA+XG4gICAgICAgICAg7JWE64uI7JqULCDqs4Tsho3tlaDrnpjsmpRcbiAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBidXR0b25UeXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBoZWlnaHQ9XCI0MnB4XCJcbiAgICAgICAgICBmb250U2l6ZT1cIjEycHhcIlxuICAgICAgICAgIGZpbGxlZFxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XG4gICAgICAgID5cbiAgICAgICAgICDrhKQsIOykkeuLqO2VoOuemOyalFxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZU1vZGFsIiwic3R5bGVzIiwiQnV0dG9uIiwiSWNvbiIsIkljb0xvZ291dCIsInVzZVJvdXRlciIsIklzQmFja01vZGFsQ29udGVudCIsImNsb3NlTW9kYWwiLCJyb3V0ZXIiLCJoYW5kbGVCYWNrIiwiYmFjayIsImRpdiIsImNsYXNzTmFtZSIsIm1vZGFsIiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJzdHJvbmciLCJtb2RhbF90aXRsZSIsInAiLCJtb2RhbF9pbmZvIiwiYnV0dG9uX3dyYXAiLCJidXR0b25UeXBlIiwiZm9udFNpemUiLCJvbkNsaWNrIiwiZmlsbGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/writing/_components/IsBackModalContent.tsx\n"));

/***/ })

});
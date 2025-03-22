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

/***/ "(app-pages-browser)/./src/app/_components/profile/ProfileBox.tsx":
/*!****************************************************!*\
  !*** ./src/app/_components/profile/ProfileBox.tsx ***!
  \****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ProfileBox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _profilebox_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profilebox.module.css */ \"(app-pages-browser)/./src/app/_components/profile/profilebox.module.css\");\n/* harmony import */ var _profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/Icon */ \"(app-pages-browser)/./src/app/_components/atoms/Icon.tsx\");\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n\n\n\n\nfunction ProfileBox(param) {\n    let { src, width = \"100%\", height, iconWidth, iconHeight, onClickBox, onClickButton, name, interest, textWidth, isOn, isOnText, isOffText } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default().box_wrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: (_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default().profile_box),\n                style: {\n                    width: width,\n                    height: height\n                },\n                onClick: onClickBox,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default().avatar),\n                        style: {\n                            width: iconWidth,\n                            height: iconHeight\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms_Icon__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            width: iconWidth ? iconWidth : 50,\n                            height: iconHeight ? iconHeight : 50,\n                            src: src ? src : \"\",\n                            alt: \"프로필 이미지\"\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: (_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default().profile_info),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"\".concat((_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default().name), \" elipsis_1_lines\"),\n                                style: {\n                                    width: textWidth\n                                },\n                                children: name\n                            }, void 0, false, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            interest && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"styles.interest\",\n                                style: {\n                                    width: textWidth\n                                },\n                                children: interest\n                            }, void 0, false, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                                lineNumber: 58,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: (_profilebox_module_css__WEBPACK_IMPORTED_MODULE_1___default().button_wrap),\n                children: isOn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    buttonType: \"button\",\n                    width: \"74px\",\n                    height: \"34px\",\n                    onClick: onClickButton,\n                    fontSize: \"12px\",\n                    brightFilled: true,\n                    children: isOnText\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                    lineNumber: 66,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_atoms__WEBPACK_IMPORTED_MODULE_3__.Button, {\n                    buttonType: \"button\",\n                    width: \"74px\",\n                    height: \"34px\",\n                    onClick: onClickButton,\n                    fontSize: \"12px\",\n                    filled: true,\n                    children: isOffText\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                    lineNumber: 77,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/profile/ProfileBox.tsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_c = ProfileBox;\nvar _c;\n$RefreshReg$(_c, \"ProfileBox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQm94LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTZDO0FBQ1o7QUFDQztBQWlCbkIsU0FBU0csV0FBVyxLQWMzQjtRQWQyQixFQUNqQ0MsR0FBRyxFQUNIQyxRQUFRLE1BQU0sRUFDZEMsTUFBTSxFQUNOQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVkMsVUFBVSxFQUNWQyxhQUFhLEVBQ2JDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxTQUFTLEVBQ1RDLElBQUksRUFDSkMsUUFBUSxFQUNSQyxTQUFTLEVBQ0gsR0FkMkI7SUFlakMscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVdsQix3RUFBZTs7MEJBQzdCLDhEQUFDb0I7Z0JBQ0NGLFdBQVdsQiwyRUFBa0I7Z0JBQzdCc0IsT0FBTztvQkFBRWpCLE9BQU9BO29CQUFPQyxRQUFRQTtnQkFBTztnQkFDdENpQixTQUFTZDs7a0NBRVQsOERBQUNlO3dCQUNDTixXQUFXbEIsc0VBQWE7d0JBQ3hCc0IsT0FBTzs0QkFBRWpCLE9BQU9FOzRCQUFXRCxRQUFRRTt3QkFBVztrQ0FFOUMsNEVBQUNQLG1EQUFJQTs0QkFDSEksT0FBT0UsWUFBWUEsWUFBWTs0QkFDL0JELFFBQVFFLGFBQWFBLGFBQWE7NEJBQ2xDSixLQUFLQSxNQUFNQSxNQUFNOzRCQUNqQnNCLEtBQUs7Ozs7Ozs7Ozs7O2tDQUdULDhEQUFDRjt3QkFBS04sV0FBV2xCLDRFQUFtQjs7MENBQ2xDLDhEQUFDd0I7Z0NBQUtOLFdBQVcsR0FBZSxPQUFabEIsb0VBQVcsRUFBQztnQ0FBbUJzQixPQUFPO29DQUFFakIsT0FBT1E7Z0NBQVU7MENBQzFFRjs7Ozs7OzRCQUVGQywwQkFDQyw4REFBQ1k7Z0NBQUtOLFdBQVk7Z0NBQWtCSSxPQUFPO29DQUFFakIsT0FBT1E7Z0NBQVU7MENBQzNERDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtULDhEQUFDWTtnQkFBS04sV0FBV2xCLDJFQUFrQjswQkFDaENjLHFCQUNDLDhEQUFDWiwwQ0FBTUE7b0JBQ0wyQixZQUFXO29CQUNYeEIsT0FBTTtvQkFDTkMsUUFBTztvQkFDUGlCLFNBQVNiO29CQUNUb0IsVUFBUztvQkFDVEMsWUFBWTs4QkFFWGhCOzs7Ozt5Q0FHSCw4REFBQ2IsMENBQU1BO29CQUNMMkIsWUFBVztvQkFDWHhCLE9BQU07b0JBQ05DLFFBQU87b0JBQ1BpQixTQUFTYjtvQkFDVG9CLFVBQVM7b0JBQ1RFLE1BQU07OEJBRUxoQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNYjtLQXZFd0JiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvcHJvZmlsZS9Qcm9maWxlQm94LnRzeD8zMDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIi4vcHJvZmlsZWJveC5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgSWNvbiBmcm9tIFwiLi4vYXRvbXMvSWNvblwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uL2F0b21zXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIHNyYz86IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQ7XG4gIHdpZHRoPzogc3RyaW5nIHwgbnVtYmVyO1xuICBoZWlnaHQ/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGljb25XaWR0aD86IHN0cmluZyB8IG51bWJlcjtcbiAgaWNvbkhlaWdodD86IHN0cmluZyB8IG51bWJlcjtcbiAgb25DbGlja0JveD86IChldmVudDogUmVhY3QuTW91c2VFdmVudDxIVE1MQnV0dG9uRWxlbWVudD4pID0+IHZvaWQ7XG4gIG9uQ2xpY2tCdXR0b24/OiAoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQ8SFRNTEJ1dHRvbkVsZW1lbnQ+KSA9PiB2b2lkO1xuICBuYW1lOiBzdHJpbmc7XG4gIGludGVyZXN0Pzogc3RyaW5nO1xuICB0ZXh0V2lkdGg/OiBzdHJpbmcgfCBudW1iZXI7XG4gIGlzT24/OiBib29sZWFuO1xuICBpc09uVGV4dD86IHN0cmluZztcbiAgaXNPZmZUZXh0Pzogc3RyaW5nO1xufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVCb3goe1xuICBzcmMsXG4gIHdpZHRoID0gXCIxMDAlXCIsXG4gIGhlaWdodCxcbiAgaWNvbldpZHRoLFxuICBpY29uSGVpZ2h0LFxuICBvbkNsaWNrQm94LFxuICBvbkNsaWNrQnV0dG9uLFxuICBuYW1lLFxuICBpbnRlcmVzdCxcbiAgdGV4dFdpZHRoLFxuICBpc09uLFxuICBpc09uVGV4dCxcbiAgaXNPZmZUZXh0LFxufTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJveF93cmFwfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMucHJvZmlsZV9ib3h9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiB3aWR0aCwgaGVpZ2h0OiBoZWlnaHQgfX1cbiAgICAgICAgb25DbGljaz17b25DbGlja0JveH1cbiAgICAgID5cbiAgICAgICAgPHNwYW5cbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hdmF0YXJ9XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IGljb25XaWR0aCwgaGVpZ2h0OiBpY29uSGVpZ2h0IH19XG4gICAgICAgID5cbiAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgd2lkdGg9e2ljb25XaWR0aCA/IGljb25XaWR0aCA6IDUwfVxuICAgICAgICAgICAgaGVpZ2h0PXtpY29uSGVpZ2h0ID8gaWNvbkhlaWdodCA6IDUwfVxuICAgICAgICAgICAgc3JjPXtzcmMgPyBzcmMgOiBcIlwifVxuICAgICAgICAgICAgYWx0PXtcIu2UhOuhnO2VhCDsnbTrr7jsp4BcIn1cbiAgICAgICAgICAvPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnByb2ZpbGVfaW5mb30+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgJHtzdHlsZXMubmFtZX0gZWxpcHNpc18xX2xpbmVzYH0gc3R5bGU9e3sgd2lkdGg6IHRleHRXaWR0aCB9fT5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICB7aW50ZXJlc3QgJiYgKFxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtgc3R5bGVzLmludGVyZXN0YH0gc3R5bGU9e3sgd2lkdGg6IHRleHRXaWR0aCB9fT5cbiAgICAgICAgICAgICAge2ludGVyZXN0fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX3dyYXB9PlxuICAgICAgICB7aXNPbiA/IChcbiAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICBidXR0b25UeXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIHdpZHRoPVwiNzRweFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIzNHB4XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tCdXR0b259XG4gICAgICAgICAgICBmb250U2l6ZT1cIjEycHhcIlxuICAgICAgICAgICAgYnJpZ2h0RmlsbGVkXG4gICAgICAgICAgPlxuICAgICAgICAgICAge2lzT25UZXh0fVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgIGJ1dHRvblR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgd2lkdGg9XCI3NHB4XCJcbiAgICAgICAgICAgIGhlaWdodD1cIjM0cHhcIlxuICAgICAgICAgICAgb25DbGljaz17b25DbGlja0J1dHRvbn1cbiAgICAgICAgICAgIGZvbnRTaXplPVwiMTJweFwiXG4gICAgICAgICAgICBmaWxsZWRcbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aXNPZmZUZXh0fVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApfVxuICAgICAgPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsIkljb24iLCJCdXR0b24iLCJQcm9maWxlQm94Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJpY29uV2lkdGgiLCJpY29uSGVpZ2h0Iiwib25DbGlja0JveCIsIm9uQ2xpY2tCdXR0b24iLCJuYW1lIiwiaW50ZXJlc3QiLCJ0ZXh0V2lkdGgiLCJpc09uIiwiaXNPblRleHQiLCJpc09mZlRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJib3hfd3JhcCIsImJ1dHRvbiIsInByb2ZpbGVfYm94Iiwic3R5bGUiLCJvbkNsaWNrIiwic3BhbiIsImF2YXRhciIsImFsdCIsInByb2ZpbGVfaW5mbyIsImJ1dHRvbl93cmFwIiwiYnV0dG9uVHlwZSIsImZvbnRTaXplIiwiYnJpZ2h0RmlsbGVkIiwiZmlsbGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/profile/ProfileBox.tsx\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/app/writing/_components/TagInput.tsx":
/*!**************************************************!*\
  !*** ./src/app/writing/_components/TagInput.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TagInput; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/taginput.module.css */ \"(app-pages-browser)/./src/app/writing/_css/taginput.module.css\");\n/* harmony import */ var _css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _public_icon_icon_tag_add_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/../../public/icon/icon-tag-add.svg */ \"(app-pages-browser)/./public/icon/icon-tag-add.svg\");\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n // 원하는 CSS로 경로 조정\n\n\nfunction TagInput(param) {\n    let { tags, onAddTag, onChangeTag, onDeleteTag } = param;\n    _s();\n    const inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    const spanRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 마지막 태그 input에 포커스\n        if (tags.length > 0) {\n            const lastInput = inputRefs.current[tags.length - 1];\n            if (lastInput) lastInput.focus();\n        }\n    }, [\n        tags\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // 각 input 너비 동기화\n        tags.forEach((_, index)=>{\n            const span = spanRefs.current[index];\n            const input = inputRefs.current[index];\n            if (span && input) {\n                input.style.width = \"\".concat(span.offsetWidth + 10, \"px\");\n            }\n        });\n    }, [\n        tags\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default().tags_input_wrap),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                buttonType: \"button\",\n                onClick: onAddTag,\n                transparent: true,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                    src: _public_icon_icon_tag_add_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                    width: 28,\n                    height: 28,\n                    alt: \"태그 추가 아이콘\"\n                }, void 0, false, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, this),\n            tags.map((tag, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default().tag_input_container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            ref: (el)=>{\n                                spanRefs.current[index] = el;\n                            },\n                            className: (_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default().hidden_span),\n                            children: tag || \" \"\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            ref: (el)=>{\n                                inputRefs.current[index] = el;\n                            },\n                            value: tag,\n                            onChange: (e)=>onChangeTag(index, e.target.value),\n                            className: (_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default().tag_input),\n                            style: {\n                                width: \"auto\"\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"button\",\n                            onClick: ()=>onDeleteTag(index),\n                            className: (_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default().delete_button),\n                            children: \"x\"\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                            buttonType: \"button\",\n                            onClick: ()=>onDeleteTag(index),\n                            transparent: true,\n                            className: (_css_taginput_module_css__WEBPACK_IMPORTED_MODULE_2___default().delete_button),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_4__.Icon, {\n                                src: _public_icon_icon_tag_add_svg__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n                                width: 16,\n                                height: 16,\n                                alt: \"태그 삭제 아이콘\"\n                            }, void 0, false, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/TagInput.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, this);\n}\n_s(TagInput, \"VRSH22crCUVVPXMhiK8eKN/IL0w=\");\n_c = TagInput;\nvar _c;\n$RefreshReg$(_c, \"TagInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGluZy9fY29tcG9uZW50cy9UYWdJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUUwQztBQUNPLENBQUMsaUJBQWlCO0FBQ047QUFDTjtBQVN4QyxTQUFTTSxTQUFTLEtBS2pCO1FBTGlCLEVBQy9CQyxJQUFJLEVBQ0pDLFFBQVEsRUFDUkMsV0FBVyxFQUNYQyxXQUFXLEVBQ0csR0FMaUI7O0lBTS9CLE1BQU1DLFlBQVlWLDZDQUFNQSxDQUE4QixFQUFFO0lBQ3hELE1BQU1XLFdBQVdYLDZDQUFNQSxDQUE2QixFQUFFO0lBRXRERCxnREFBU0EsQ0FBQztRQUNSLG9CQUFvQjtRQUNwQixJQUFJTyxLQUFLTSxNQUFNLEdBQUcsR0FBRztZQUNuQixNQUFNQyxZQUFZSCxVQUFVSSxPQUFPLENBQUNSLEtBQUtNLE1BQU0sR0FBRyxFQUFFO1lBQ3BELElBQUlDLFdBQVdBLFVBQVVFLEtBQUs7UUFDaEM7SUFDRixHQUFHO1FBQUNUO0tBQUs7SUFFVFAsZ0RBQVNBLENBQUM7UUFDUixpQkFBaUI7UUFDakJPLEtBQUtVLE9BQU8sQ0FBQyxDQUFDQyxHQUFHQztZQUNmLE1BQU1DLE9BQU9SLFNBQVNHLE9BQU8sQ0FBQ0ksTUFBTTtZQUNwQyxNQUFNRSxRQUFRVixVQUFVSSxPQUFPLENBQUNJLE1BQU07WUFDdEMsSUFBSUMsUUFBUUMsT0FBTztnQkFDakJBLE1BQU1DLEtBQUssQ0FBQ0MsS0FBSyxHQUFHLEdBQXlCLE9BQXRCSCxLQUFLSSxXQUFXLEdBQUcsSUFBRztZQUMvQztRQUNGO0lBQ0YsR0FBRztRQUFDakI7S0FBSztJQUVULHFCQUNFLDhEQUFDa0I7UUFBSUMsV0FBV3hCLGlGQUFzQjs7MEJBQ3BDLDhEQUFDRSx5REFBTUE7Z0JBQUN3QixZQUFXO2dCQUFTQyxTQUFTckI7Z0JBQVVzQixXQUFXOzBCQUN4RCw0RUFBQ3pCLHVEQUFJQTtvQkFBQzBCLEtBQUs1QixxRUFBU0E7b0JBQUVvQixPQUFPO29CQUFJUyxRQUFRO29CQUFJQyxLQUFJOzs7Ozs7Ozs7OztZQUVsRDFCLEtBQUsyQixHQUFHLENBQUMsQ0FBQ0MsS0FBS2hCLHNCQUNkLDhEQUFDTTtvQkFBZ0JDLFdBQVd4QixxRkFBMEI7O3NDQUNwRCw4REFBQ2tCOzRCQUNDaUIsS0FBSyxDQUFDQztnQ0FDSjFCLFNBQVNHLE9BQU8sQ0FBQ0ksTUFBTSxHQUFHbUI7NEJBQzVCOzRCQUNBWixXQUFXeEIsNkVBQWtCO3NDQUU1QmlDLE9BQU87Ozs7OztzQ0FFViw4REFBQ2Q7NEJBQ0NnQixLQUFLLENBQUNDO2dDQUNKM0IsVUFBVUksT0FBTyxDQUFDSSxNQUFNLEdBQUdtQjs0QkFDN0I7NEJBQ0FFLE9BQU9MOzRCQUNQTSxVQUFVLENBQUNDLElBQU1qQyxZQUFZVSxPQUFPdUIsRUFBRUMsTUFBTSxDQUFDSCxLQUFLOzRCQUNsRGQsV0FBV3hCLDJFQUFnQjs0QkFDM0JvQixPQUFPO2dDQUFFQyxPQUFPOzRCQUFPOzs7Ozs7c0NBRXpCLDhEQUFDc0I7NEJBQ0NDLE1BQUs7NEJBQ0xqQixTQUFTLElBQU1uQixZQUFZUzs0QkFDakNPLFdBQVd4QiwrRUFBb0I7c0NBQzFCOzs7Ozs7c0NBR0QsOERBQUNFLHlEQUFNQTs0QkFDTHdCLFlBQVc7NEJBQ1hDLFNBQVMsSUFBTW5CLFlBQVlTOzRCQUMzQlcsV0FBVzs0QkFDakJKLFdBQVd4QiwrRUFBb0I7c0NBRXpCLDRFQUFDRyx1REFBSUE7Z0NBQ0gwQixLQUFLNUIscUVBQVNBO2dDQUNkb0IsT0FBTztnQ0FDUFMsUUFBUTtnQ0FDUkMsS0FBSTs7Ozs7Ozs7Ozs7O21CQW5DQWQ7Ozs7Ozs7Ozs7O0FBMENsQjtHQTVFd0JiO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvd3JpdGluZy9fY29tcG9uZW50cy9UYWdJbnB1dC50c3g/MzdhYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL19jc3MvdGFnaW5wdXQubW9kdWxlLmNzc1wiOyAvLyDsm5DtlZjripQgQ1NT66GcIOqyveuhnCDsobDsoJVcbmltcG9ydCBJb2NUYWdCdG4gZnJvbSBcIkAvLi4vLi4vcHVibGljL2ljb24vaWNvbi10YWctYWRkLnN2Z1wiO1xuaW1wb3J0IHsgQnV0dG9uLCBJY29uIH0gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zXCI7XG5cbnR5cGUgVGFnSW5wdXRQcm9wcyA9IHtcbiAgdGFnczogc3RyaW5nW107XG4gIG9uQWRkVGFnOiAoKSA9PiB2b2lkO1xuICBvbkNoYW5nZVRhZzogKGluZGV4OiBudW1iZXIsIHZhbHVlOiBzdHJpbmcpID0+IHZvaWQ7XG4gIG9uRGVsZXRlVGFnOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRhZ0lucHV0KHtcbiAgdGFncyxcbiAgb25BZGRUYWcsXG4gIG9uQ2hhbmdlVGFnLFxuICBvbkRlbGV0ZVRhZyxcbn06IFRhZ0lucHV0UHJvcHMpIHtcbiAgY29uc3QgaW5wdXRSZWZzID0gdXNlUmVmPChIVE1MSW5wdXRFbGVtZW50IHwgbnVsbClbXT4oW10pO1xuICBjb25zdCBzcGFuUmVmcyA9IHVzZVJlZjwoSFRNTFNwYW5FbGVtZW50IHwgbnVsbClbXT4oW10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g66eI7KeA66eJIO2DnOq3uCBpbnB1dOyXkCDtj6zsu6TsiqRcbiAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBsYXN0SW5wdXQgPSBpbnB1dFJlZnMuY3VycmVudFt0YWdzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKGxhc3RJbnB1dCkgbGFzdElucHV0LmZvY3VzKCk7XG4gICAgfVxuICB9LCBbdGFnc10pO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8g6rCBIGlucHV0IOuEiOu5hCDrj5nquLDtmZRcbiAgICB0YWdzLmZvckVhY2goKF8sIGluZGV4KSA9PiB7XG4gICAgICBjb25zdCBzcGFuID0gc3BhblJlZnMuY3VycmVudFtpbmRleF07XG4gICAgICBjb25zdCBpbnB1dCA9IGlucHV0UmVmcy5jdXJyZW50W2luZGV4XTtcbiAgICAgIGlmIChzcGFuICYmIGlucHV0KSB7XG4gICAgICAgIGlucHV0LnN0eWxlLndpZHRoID0gYCR7c3Bhbi5vZmZzZXRXaWR0aCArIDEwfXB4YDtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgW3RhZ3NdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGFnc19pbnB1dF93cmFwfT5cbiAgICAgIDxCdXR0b24gYnV0dG9uVHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e29uQWRkVGFnfSB0cmFuc3BhcmVudD5cbiAgICAgICAgPEljb24gc3JjPXtJb2NUYWdCdG59IHdpZHRoPXsyOH0gaGVpZ2h0PXsyOH0gYWx0PVwi7YOc6re4IOy2lOqwgCDslYTsnbTsvZhcIiAvPlxuICAgICAgPC9CdXR0b24+XG4gICAgICB7dGFncy5tYXAoKHRhZywgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy50YWdfaW5wdXRfY29udGFpbmVyfT5cbiAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgcmVmPXsoZWwpID0+IHtcbiAgICAgICAgICAgICAgc3BhblJlZnMuY3VycmVudFtpbmRleF0gPSBlbDtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oaWRkZW5fc3Bhbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGFnIHx8IFwiIFwifVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHJlZj17KGVsKSA9PiB7XG4gICAgICAgICAgICAgIGlucHV0UmVmcy5jdXJyZW50W2luZGV4XSA9IGVsO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIHZhbHVlPXt0YWd9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IG9uQ2hhbmdlVGFnKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy50YWdfaW5wdXR9XG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCJhdXRvXCIgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25EZWxldGVUYWcoaW5kZXgpfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlX2J1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB4XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgYnV0dG9uVHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvbkRlbGV0ZVRhZyhpbmRleCl9XG4gICAgICAgICAgICB0cmFuc3BhcmVudFxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtzdHlsZXMuZGVsZXRlX2J1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvblxuICAgICAgICAgICAgICBzcmM9e0lvY1RhZ0J0bn1cbiAgICAgICAgICAgICAgd2lkdGg9ezE2fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezE2fVxuICAgICAgICAgICAgICBhbHQ9XCLtg5zqt7gg7IKt7KCcIOyVhOydtOy9mFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIklvY1RhZ0J0biIsIkJ1dHRvbiIsIkljb24iLCJUYWdJbnB1dCIsInRhZ3MiLCJvbkFkZFRhZyIsIm9uQ2hhbmdlVGFnIiwib25EZWxldGVUYWciLCJpbnB1dFJlZnMiLCJzcGFuUmVmcyIsImxlbmd0aCIsImxhc3RJbnB1dCIsImN1cnJlbnQiLCJmb2N1cyIsImZvckVhY2giLCJfIiwiaW5kZXgiLCJzcGFuIiwiaW5wdXQiLCJzdHlsZSIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJ0YWdzX2lucHV0X3dyYXAiLCJidXR0b25UeXBlIiwib25DbGljayIsInRyYW5zcGFyZW50Iiwic3JjIiwiaGVpZ2h0IiwiYWx0IiwibWFwIiwidGFnIiwidGFnX2lucHV0X2NvbnRhaW5lciIsInJlZiIsImVsIiwiaGlkZGVuX3NwYW4iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInRhZ19pbnB1dCIsImJ1dHRvbiIsInR5cGUiLCJkZWxldGVfYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/writing/_components/TagInput.tsx\n"));

/***/ })

});
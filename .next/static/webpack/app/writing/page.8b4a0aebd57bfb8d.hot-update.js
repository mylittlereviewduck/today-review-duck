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

/***/ "(app-pages-browser)/./src/app/writing/_components/ImageUploader.tsx":
/*!*******************************************************!*\
  !*** ./src/app/writing/_components/ImageUploader.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageUploader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/imageuploader.module.css */ \"(app-pages-browser)/./src/app/writing/_css/imageuploader.module.css\");\n/* harmony import */ var _css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _public_icon_icon_add_image_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../public/icon/icon-add-image.svg */ \"(app-pages-browser)/./public/icon/icon-add-image.svg\");\n/* harmony import */ var _public_icon_icon_delete_imges_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../public/icon/icon-delete-imges.svg */ \"(app-pages-browser)/./public/icon/icon-delete-imges.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ImageUploader(param) {\n    let { images, onAddImage, onRemoveImage, onChangeDescription } = param;\n    _s();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        const isFirstImage = images.length === 0;\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            onAddImage({\n                file,\n                previewUrl,\n                description: \"\",\n                isRepresentative: isFirstImage\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_container),\n        children: [\n            images.length < 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().add_button_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().add_button),\n                        onClick: ()=>{\n                            var _fileInputRef_current;\n                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                src: _public_icon_icon_add_image_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"이미지 추가\",\n                                width: 28,\n                                height: 28\n                            }, void 0, false, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().count),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().count_color),\n                                        children: images.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"/6\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: fileInputRef,\n                        type: \"file\",\n                        accept: \"image/*\",\n                        onChange: handleFileChange,\n                        className: \"sr_only\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            images.map((img, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().delete_button_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().delete_button),\n                                    onClick: ()=>onRemoveImage(index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                        src: _public_icon_icon_delete_imges_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"이미지 삭제\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().preview_img),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                        src: img.previewUrl,\n                                        alt: \"업로드 이미지 \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                index == 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().representative_badge),\n                                    children: \"대표 사진\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"사진 설명 (선택)\",\n                            value: img.description,\n                            onChange: (e)=>onChangeDescription(index, e.target.value),\n                            maxLength: 32,\n                            className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().desc_textarea)\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageUploader, \"YQqvMxdmg33cmOXmQcOjJm+FLVI=\");\n_c = ImageUploader;\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGluZy9fY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUN1QjtBQUVQO0FBQ2U7QUFDQTtBQVMvQyxTQUFTSyxjQUFjLEtBS2pCO1FBTGlCLEVBQ3BDQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxtQkFBbUIsRUFDQSxHQUxpQjs7SUFNcEMsTUFBTUMsZUFBZVYsNkNBQU1BLENBQW1CO0lBRTlDLE1BQU1XLG1CQUFtQixDQUFDQztZQUNYQTtRQUFiLE1BQU1DLFFBQU9ELGtCQUFBQSxFQUFFRSxNQUFNLENBQUNDLEtBQUssY0FBZEgsc0NBQUFBLGVBQWdCLENBQUMsRUFBRTtRQUNoQyxNQUFNSSxlQUFlVixPQUFPVyxNQUFNLEtBQUs7UUFFdkMsSUFBSUosTUFBTTtZQUNSLE1BQU1LLGFBQWFDLElBQUlDLGVBQWUsQ0FBQ1A7WUFDdkNOLFdBQVc7Z0JBQ1RNO2dCQUNBSztnQkFDQUcsYUFBYTtnQkFDYkMsa0JBQWtCTjtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBV3ZCLHNGQUFzQjs7WUFDbkNLLE9BQU9XLE1BQU0sR0FBRyxtQkFDZiw4REFBQ007Z0JBQUlDLFdBQVd2QixxRkFBcUI7O2tDQUNuQyw4REFBQzBCO3dCQUNDSCxXQUFXdkIsaUZBQWlCO3dCQUM1QjRCLFNBQVM7Z0NBQU1uQjtvQ0FBQUEsd0JBQUFBLGFBQWFvQixPQUFPLGNBQXBCcEIsNENBQUFBLHNCQUFzQnFCLEtBQUs7OzswQ0FFMUMsOERBQUM3Qix1REFBSUE7Z0NBQUM4QixLQUFLN0IsdUVBQVdBO2dDQUFFOEIsS0FBSTtnQ0FBU0MsT0FBTztnQ0FBSUMsUUFBUTs7Ozs7OzBDQUN4RCw4REFBQ0M7Z0NBQUtaLFdBQVd2Qiw0RUFBWTs7a0RBQzNCLDhEQUFDbUM7d0NBQUtaLFdBQVd2QixrRkFBa0I7a0RBQUdLLE9BQU9XLE1BQU07Ozs7OztvQ0FBUTs7Ozs7Ozs7Ozs7OztrQ0FHL0QsOERBQUNzQjt3QkFDQ0MsS0FBSzlCO3dCQUNMK0IsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsVUFBVWhDO3dCQUNWYSxXQUFVOzs7Ozs7Ozs7Ozs7WUFLZmxCLE9BQU9zQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2hCLDhEQUFDdkI7b0JBQWdCQyxXQUFXdkIsZ0ZBQWdCOztzQ0FDMUMsOERBQUNtQzs0QkFBS1osV0FBV3ZCLHdGQUF3Qjs7OENBQ3ZDLDhEQUFDMEI7b0NBQ0NILFdBQVd2QixvRkFBb0I7b0NBQy9CNEIsU0FBUyxJQUFNckIsY0FBY3NDOzhDQUU3Qiw0RUFBQzVDLHVEQUFJQTt3Q0FBQzhCLEtBQUs1QiwwRUFBUUE7d0NBQUU2QixLQUFJO3dDQUFTQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs4Q0FFdkQsOERBQUNDO29DQUFLWixXQUFXdkIsa0ZBQWtCOzhDQUNqQyw0RUFBQ0MsdURBQUlBO3dDQUFDOEIsS0FBS2EsSUFBSTNCLFVBQVU7d0NBQUVlLEtBQUssV0FBcUIsT0FBVmEsUUFBUTs7Ozs7Ozs7Ozs7Z0NBRXBEQSxTQUFTLG1CQUNSLDhEQUFDVjtvQ0FBS1osV0FBV3ZCLDJGQUEyQjs4Q0FBRTs7Ozs7Ozs7Ozs7O3NDQUdsRCw4REFBQ21EOzRCQUNDQyxhQUFZOzRCQUNaQyxPQUFPVCxJQUFJeEIsV0FBVzs0QkFDdEJzQixVQUFVLENBQUMvQixJQUFNSCxvQkFBb0JxQyxPQUFPbEMsRUFBRUUsTUFBTSxDQUFDd0MsS0FBSzs0QkFDMURDLFdBQVc7NEJBQ1gvQixXQUFXdkIsb0ZBQW9COzs7Ozs7O21CQXBCekI2Qzs7Ozs7Ozs7Ozs7QUEwQmxCO0dBekV3QnpDO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvd3JpdGluZy9fY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeD8zNDE0Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL19jc3MvaW1hZ2V1cGxvYWRlci5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBJbWFnZURhdGFUeXBlIH0gZnJvbSBcIkAvdHlwZXNcIjtcbmltcG9ydCB7IEljb24gfSBmcm9tIFwiQC9hcHAvX2NvbXBvbmVudHMvYXRvbXNcIjtcbmltcG9ydCBJY29JbWFnZUFkZCBmcm9tIFwiQC8uLi9wdWJsaWMvaWNvbi9pY29uLWFkZC1pbWFnZS5zdmdcIjtcbmltcG9ydCBJY29DbG9zZSBmcm9tIFwiQC8uLi9wdWJsaWMvaWNvbi9pY29uLWRlbGV0ZS1pbWdlcy5zdmdcIjtcblxudHlwZSBJbWFnZVVwbG9hZGVyUHJvcHMgPSB7XG4gIGltYWdlczogSW1hZ2VEYXRhVHlwZVtdO1xuICBvbkFkZEltYWdlOiAoaW1hZ2U6IEltYWdlRGF0YVR5cGUpID0+IHZvaWQ7XG4gIG9uUmVtb3ZlSW1hZ2U6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xuICBvbkNoYW5nZURlc2NyaXB0aW9uOiAoaW5kZXg6IG51bWJlciwgZGVzY3JpcHRpb246IHN0cmluZykgPT4gdm9pZDtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlVXBsb2FkZXIoe1xuICBpbWFnZXMsXG4gIG9uQWRkSW1hZ2UsXG4gIG9uUmVtb3ZlSW1hZ2UsXG4gIG9uQ2hhbmdlRGVzY3JpcHRpb24sXG59OiBJbWFnZVVwbG9hZGVyUHJvcHMpIHtcbiAgY29uc3QgZmlsZUlucHV0UmVmID0gdXNlUmVmPEhUTUxJbnB1dEVsZW1lbnQ+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZUZpbGVDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXSBhcyBGaWxlO1xuICAgIGNvbnN0IGlzRmlyc3RJbWFnZSA9IGltYWdlcy5sZW5ndGggPT09IDA7XG5cbiAgICBpZiAoZmlsZSkge1xuICAgICAgY29uc3QgcHJldmlld1VybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XG4gICAgICBvbkFkZEltYWdlKHtcbiAgICAgICAgZmlsZSxcbiAgICAgICAgcHJldmlld1VybCxcbiAgICAgICAgZGVzY3JpcHRpb246IFwiXCIsXG4gICAgICAgIGlzUmVwcmVzZW50YXRpdmU6IGlzRmlyc3RJbWFnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfY29udGFpbmVyfT5cbiAgICAgIHtpbWFnZXMubGVuZ3RoIDwgNiAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWRkX2J1dHRvbl9ib3h9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmFkZF9idXR0b259XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBmaWxlSW5wdXRSZWYuY3VycmVudD8uY2xpY2soKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8SWNvbiBzcmM9e0ljb0ltYWdlQWRkfSBhbHQ9XCLsnbTrr7jsp4Ag7LaU6rCAXCIgd2lkdGg9ezI4fSBoZWlnaHQ9ezI4fSAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY291bnR9PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5jb3VudF9jb2xvcn0+e2ltYWdlcy5sZW5ndGh9PC9zcGFuPi82XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICByZWY9e2ZpbGVJbnB1dFJlZn1cbiAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcbiAgICAgICAgICAgIGFjY2VwdD1cImltYWdlLypcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUZpbGVDaGFuZ2V9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzcl9vbmx5XCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIHtpbWFnZXMubWFwKChpbWcsIGluZGV4KSA9PiAoXG4gICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfYm94fT5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5kZWxldGVfYnV0dG9uX2JveH0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZV9idXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlSW1hZ2UoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBzcmM9e0ljb0Nsb3NlfSBhbHQ9XCLsnbTrr7jsp4Ag7IKt7KCcXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3X2ltZ30+XG4gICAgICAgICAgICAgIDxJY29uIHNyYz17aW1nLnByZXZpZXdVcmx9IGFsdD17YOyXheuhnOuTnCDsnbTrr7jsp4AgJHtpbmRleCArIDF9YH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtpbmRleCA9PSAxICYmIChcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMucmVwcmVzZW50YXRpdmVfYmFkZ2V9PuuMgO2RnCDsgqzsp4Q8L3NwYW4+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi7IKs7KeEIOyEpOuqhSAo7ISg7YOdKVwiXG4gICAgICAgICAgICB2YWx1ZT17aW1nLmRlc2NyaXB0aW9ufVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBvbkNoYW5nZURlc2NyaXB0aW9uKGluZGV4LCBlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBtYXhMZW5ndGg9ezMyfVxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY190ZXh0YXJlYX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVJlZiIsInN0eWxlcyIsIkljb24iLCJJY29JbWFnZUFkZCIsIkljb0Nsb3NlIiwiSW1hZ2VVcGxvYWRlciIsImltYWdlcyIsIm9uQWRkSW1hZ2UiLCJvblJlbW92ZUltYWdlIiwib25DaGFuZ2VEZXNjcmlwdGlvbiIsImZpbGVJbnB1dFJlZiIsImhhbmRsZUZpbGVDaGFuZ2UiLCJlIiwiZmlsZSIsInRhcmdldCIsImZpbGVzIiwiaXNGaXJzdEltYWdlIiwibGVuZ3RoIiwicHJldmlld1VybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImRlc2NyaXB0aW9uIiwiaXNSZXByZXNlbnRhdGl2ZSIsImRpdiIsImNsYXNzTmFtZSIsImltYWdlX2NvbnRhaW5lciIsImFkZF9idXR0b25fYm94IiwiYnV0dG9uIiwiYWRkX2J1dHRvbiIsIm9uQ2xpY2siLCJjdXJyZW50IiwiY2xpY2siLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsInNwYW4iLCJjb3VudCIsImNvdW50X2NvbG9yIiwiaW5wdXQiLCJyZWYiLCJ0eXBlIiwiYWNjZXB0Iiwib25DaGFuZ2UiLCJtYXAiLCJpbWciLCJpbmRleCIsImltYWdlX2JveCIsImRlbGV0ZV9idXR0b25fYm94IiwiZGVsZXRlX2J1dHRvbiIsInByZXZpZXdfaW1nIiwicmVwcmVzZW50YXRpdmVfYmFkZ2UiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJtYXhMZW5ndGgiLCJkZXNjX3RleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/writing/_components/ImageUploader.tsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ImageUploader; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_@opentelemetry+api@1.9.0_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_css/imageuploader.module.css */ \"(app-pages-browser)/./src/app/writing/_css/imageuploader.module.css\");\n/* harmony import */ var _css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_components_atoms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/app/_components/atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n/* harmony import */ var _public_icon_icon_add_image_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../public/icon/icon-add-image.svg */ \"(app-pages-browser)/./public/icon/icon-add-image.svg\");\n/* harmony import */ var _public_icon_icon_delete_imges_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/../public/icon/icon-delete-imges.svg */ \"(app-pages-browser)/./public/icon/icon-delete-imges.svg\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction ImageUploader(param) {\n    let { images, onAddImage, onRemoveImage, onChangeDescription } = param;\n    _s();\n    const fileInputRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleFileChange = (e)=>{\n        var _e_target_files;\n        const file = (_e_target_files = e.target.files) === null || _e_target_files === void 0 ? void 0 : _e_target_files[0];\n        const isFirstImage = images.length === 0;\n        if (file) {\n            const previewUrl = URL.createObjectURL(file);\n            onAddImage({\n                file,\n                previewUrl,\n                description: \"\",\n                isRepresentative: isFirstImage\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_container),\n        children: [\n            images.length < 6 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().add_button_box),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().add_button),\n                        onClick: ()=>{\n                            var _fileInputRef_current;\n                            return (_fileInputRef_current = fileInputRef.current) === null || _fileInputRef_current === void 0 ? void 0 : _fileInputRef_current.click();\n                        },\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                src: _public_icon_icon_add_image_svg__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                alt: \"이미지 추가\",\n                                width: 28,\n                                height: 28\n                            }, void 0, false, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().count),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().count_color),\n                                        children: images.length\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 15\n                                    }, this),\n                                    \"/6\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        ref: fileInputRef,\n                        type: \"file\",\n                        accept: \"image/*\",\n                        onChange: handleFileChange,\n                        className: \"sr_only\"\n                    }, void 0, false, {\n                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this),\n            images.map((img, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().image_box),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_box),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().delete_button),\n                                    onClick: ()=>onRemoveImage(index),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                        src: _public_icon_icon_delete_imges_svg__WEBPACK_IMPORTED_MODULE_5__[\"default\"],\n                                        alt: \"이미지 삭제\",\n                                        width: 24,\n                                        height: 24\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                    lineNumber: 66,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().preview_img),\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_app_components_atoms__WEBPACK_IMPORTED_MODULE_3__.Icon, {\n                                        src: img.previewUrl,\n                                        alt: \"업로드 이미지 \".concat(index + 1)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                        lineNumber: 73,\n                                        columnNumber: 15\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                    lineNumber: 72,\n                                    columnNumber: 13\n                                }, this),\n                                img.isRepresentative && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().representative_badge),\n                                    children: \"대표 사진\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                                    lineNumber: 76,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                            lineNumber: 65,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"사진 설명 (선택)\",\n                            value: img.description,\n                            onChange: (e)=>onChangeDescription(index, e.target.value),\n                            maxLength: 32,\n                            className: (_css_imageuploader_module_css__WEBPACK_IMPORTED_MODULE_2___default().desc_textarea)\n                        }, void 0, false, {\n                            fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, index, true, {\n                    fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n                    lineNumber: 64,\n                    columnNumber: 9\n                }, this))\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/writing/_components/ImageUploader.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(ImageUploader, \"YQqvMxdmg33cmOXmQcOjJm+FLVI=\");\n_c = ImageUploader;\nvar _c;\n$RefreshReg$(_c, \"ImageUploader\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvd3JpdGluZy9fY29tcG9uZW50cy9JbWFnZVVwbG9hZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUUrQjtBQUN1QjtBQUVQO0FBQ2U7QUFDQTtBQVMvQyxTQUFTSyxjQUFjLEtBS2pCO1FBTGlCLEVBQ3BDQyxNQUFNLEVBQ05DLFVBQVUsRUFDVkMsYUFBYSxFQUNiQyxtQkFBbUIsRUFDQSxHQUxpQjs7SUFNcEMsTUFBTUMsZUFBZVYsNkNBQU1BLENBQW1CO0lBRTlDLE1BQU1XLG1CQUFtQixDQUFDQztZQUNYQTtRQUFiLE1BQU1DLFFBQU9ELGtCQUFBQSxFQUFFRSxNQUFNLENBQUNDLEtBQUssY0FBZEgsc0NBQUFBLGVBQWdCLENBQUMsRUFBRTtRQUNoQyxNQUFNSSxlQUFlVixPQUFPVyxNQUFNLEtBQUs7UUFFdkMsSUFBSUosTUFBTTtZQUNSLE1BQU1LLGFBQWFDLElBQUlDLGVBQWUsQ0FBQ1A7WUFDdkNOLFdBQVc7Z0JBQ1RNO2dCQUNBSztnQkFDQUcsYUFBYTtnQkFDYkMsa0JBQWtCTjtZQUNwQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBV3ZCLHNGQUFzQjs7WUFDbkNLLE9BQU9XLE1BQU0sR0FBRyxtQkFDZiw4REFBQ007Z0JBQUlDLFdBQVd2QixxRkFBcUI7O2tDQUNuQyw4REFBQzBCO3dCQUNDSCxXQUFXdkIsaUZBQWlCO3dCQUM1QjRCLFNBQVM7Z0NBQU1uQjtvQ0FBQUEsd0JBQUFBLGFBQWFvQixPQUFPLGNBQXBCcEIsNENBQUFBLHNCQUFzQnFCLEtBQUs7OzswQ0FFMUMsOERBQUM3Qix1REFBSUE7Z0NBQUM4QixLQUFLN0IsdUVBQVdBO2dDQUFFOEIsS0FBSTtnQ0FBU0MsT0FBTztnQ0FBSUMsUUFBUTs7Ozs7OzBDQUN4RCw4REFBQ0M7Z0NBQUtaLFdBQVd2Qiw0RUFBWTs7a0RBQzNCLDhEQUFDbUM7d0NBQUtaLFdBQVd2QixrRkFBa0I7a0RBQUdLLE9BQU9XLE1BQU07Ozs7OztvQ0FBUTs7Ozs7Ozs7Ozs7OztrQ0FHL0QsOERBQUNzQjt3QkFDQ0MsS0FBSzlCO3dCQUNMK0IsTUFBSzt3QkFDTEMsUUFBTzt3QkFDUEMsVUFBVWhDO3dCQUNWYSxXQUFVOzs7Ozs7Ozs7Ozs7WUFLZmxCLE9BQU9zQyxHQUFHLENBQUMsQ0FBQ0MsS0FBS0Msc0JBQ2hCLDhEQUFDdkI7b0JBQWdCQyxXQUFXdkIsZ0ZBQWdCOztzQ0FDMUMsOERBQUNtQzs0QkFBS1osV0FBV3ZCLGlGQUFpQjs7OENBQ2hDLDhEQUFDMEI7b0NBQ0NILFdBQVd2QixvRkFBb0I7b0NBQy9CNEIsU0FBUyxJQUFNckIsY0FBY3NDOzhDQUU3Qiw0RUFBQzVDLHVEQUFJQTt3Q0FBQzhCLEtBQUs1QiwwRUFBUUE7d0NBQUU2QixLQUFJO3dDQUFTQyxPQUFPO3dDQUFJQyxRQUFROzs7Ozs7Ozs7Ozs4Q0FFdkQsOERBQUNDO29DQUFLWixXQUFXdkIsa0ZBQWtCOzhDQUNqQyw0RUFBQ0MsdURBQUlBO3dDQUFDOEIsS0FBS2EsSUFBSTNCLFVBQVU7d0NBQUVlLEtBQUssV0FBcUIsT0FBVmEsUUFBUTs7Ozs7Ozs7Ozs7Z0NBRXBERCxJQUFJdkIsZ0JBQWdCLGtCQUNuQiw4REFBQ2M7b0NBQUtaLFdBQVd2QiwyRkFBMkI7OENBQUU7Ozs7Ozs7Ozs7OztzQ0FHbEQsOERBQUNtRDs0QkFDQ0MsYUFBWTs0QkFDWkMsT0FBT1QsSUFBSXhCLFdBQVc7NEJBQ3RCc0IsVUFBVSxDQUFDL0IsSUFBTUgsb0JBQW9CcUMsT0FBT2xDLEVBQUVFLE1BQU0sQ0FBQ3dDLEtBQUs7NEJBQzFEQyxXQUFXOzRCQUNYL0IsV0FBV3ZCLG9GQUFvQjs7Ozs7OzttQkFwQnpCNkM7Ozs7Ozs7Ozs7O0FBMEJsQjtHQXpFd0J6QztLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL3dyaXRpbmcvX2NvbXBvbmVudHMvSW1hZ2VVcGxvYWRlci50c3g/MzQxNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9fY3NzL2ltYWdldXBsb2FkZXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgSW1hZ2VEYXRhVHlwZSB9IGZyb20gXCJAL3R5cGVzXCI7XG5pbXBvcnQgeyBJY29uIH0gZnJvbSBcIkAvYXBwL19jb21wb25lbnRzL2F0b21zXCI7XG5pbXBvcnQgSWNvSW1hZ2VBZGQgZnJvbSBcIkAvLi4vcHVibGljL2ljb24vaWNvbi1hZGQtaW1hZ2Uuc3ZnXCI7XG5pbXBvcnQgSWNvQ2xvc2UgZnJvbSBcIkAvLi4vcHVibGljL2ljb24vaWNvbi1kZWxldGUtaW1nZXMuc3ZnXCI7XG5cbnR5cGUgSW1hZ2VVcGxvYWRlclByb3BzID0ge1xuICBpbWFnZXM6IEltYWdlRGF0YVR5cGVbXTtcbiAgb25BZGRJbWFnZTogKGltYWdlOiBJbWFnZURhdGFUeXBlKSA9PiB2b2lkO1xuICBvblJlbW92ZUltYWdlOiAoaW5kZXg6IG51bWJlcikgPT4gdm9pZDtcbiAgb25DaGFuZ2VEZXNjcmlwdGlvbjogKGluZGV4OiBudW1iZXIsIGRlc2NyaXB0aW9uOiBzdHJpbmcpID0+IHZvaWQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZVVwbG9hZGVyKHtcbiAgaW1hZ2VzLFxuICBvbkFkZEltYWdlLFxuICBvblJlbW92ZUltYWdlLFxuICBvbkNoYW5nZURlc2NyaXB0aW9uLFxufTogSW1hZ2VVcGxvYWRlclByb3BzKSB7XG4gIGNvbnN0IGZpbGVJbnB1dFJlZiA9IHVzZVJlZjxIVE1MSW5wdXRFbGVtZW50PihudWxsKTtcblxuICBjb25zdCBoYW5kbGVGaWxlQ2hhbmdlID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgY29uc3QgZmlsZSA9IGUudGFyZ2V0LmZpbGVzPy5bMF0gYXMgRmlsZTtcbiAgICBjb25zdCBpc0ZpcnN0SW1hZ2UgPSBpbWFnZXMubGVuZ3RoID09PSAwO1xuXG4gICAgaWYgKGZpbGUpIHtcbiAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGZpbGUpO1xuICAgICAgb25BZGRJbWFnZSh7XG4gICAgICAgIGZpbGUsXG4gICAgICAgIHByZXZpZXdVcmwsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlwiLFxuICAgICAgICBpc1JlcHJlc2VudGF0aXZlOiBpc0ZpcnN0SW1hZ2UsXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2NvbnRhaW5lcn0+XG4gICAgICB7aW1hZ2VzLmxlbmd0aCA8IDYgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmFkZF9idXR0b25fYm94fT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hZGRfYnV0dG9ufVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEljb24gc3JjPXtJY29JbWFnZUFkZH0gYWx0PVwi7J2066+47KeAIOy2lOqwgFwiIHdpZHRoPXsyOH0gaGVpZ2h0PXsyOH0gLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLmNvdW50fT5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuY291bnRfY29sb3J9PntpbWFnZXMubGVuZ3RofTwvc3Bhbj4vNlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcmVmPXtmaWxlSW5wdXRSZWZ9XG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICBhY2NlcHQ9XCJpbWFnZS8qXCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVGaWxlQ2hhbmdlfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic3Jfb25seVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICB7aW1hZ2VzLm1hcCgoaW1nLCBpbmRleCkgPT4gKFxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX2JveH0+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9uX2JveH0+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlbGV0ZV9idXR0b259XG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlSW1hZ2UoaW5kZXgpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8SWNvbiBzcmM9e0ljb0Nsb3NlfSBhbHQ9XCLsnbTrr7jsp4Ag7IKt7KCcXCIgd2lkdGg9ezI0fSBoZWlnaHQ9ezI0fSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e3N0eWxlcy5wcmV2aWV3X2ltZ30+XG4gICAgICAgICAgICAgIDxJY29uIHNyYz17aW1nLnByZXZpZXdVcmx9IGFsdD17YOyXheuhnOuTnCDsnbTrr7jsp4AgJHtpbmRleCArIDF9YH0gLz5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIHtpbWcuaXNSZXByZXNlbnRhdGl2ZSAmJiAoXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17c3R5bGVzLnJlcHJlc2VudGF0aXZlX2JhZGdlfT7rjIDtkZwg7IKs7KeEPC9zcGFuPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIuyCrOynhCDshKTrqoUgKOyEoO2DnSlcIlxuICAgICAgICAgICAgdmFsdWU9e2ltZy5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gb25DaGFuZ2VEZXNjcmlwdGlvbihpbmRleCwgZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgbWF4TGVuZ3RoPXszMn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NfdGV4dGFyZWF9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICApKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VSZWYiLCJzdHlsZXMiLCJJY29uIiwiSWNvSW1hZ2VBZGQiLCJJY29DbG9zZSIsIkltYWdlVXBsb2FkZXIiLCJpbWFnZXMiLCJvbkFkZEltYWdlIiwib25SZW1vdmVJbWFnZSIsIm9uQ2hhbmdlRGVzY3JpcHRpb24iLCJmaWxlSW5wdXRSZWYiLCJoYW5kbGVGaWxlQ2hhbmdlIiwiZSIsImZpbGUiLCJ0YXJnZXQiLCJmaWxlcyIsImlzRmlyc3RJbWFnZSIsImxlbmd0aCIsInByZXZpZXdVcmwiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJkZXNjcmlwdGlvbiIsImlzUmVwcmVzZW50YXRpdmUiLCJkaXYiLCJjbGFzc05hbWUiLCJpbWFnZV9jb250YWluZXIiLCJhZGRfYnV0dG9uX2JveCIsImJ1dHRvbiIsImFkZF9idXR0b24iLCJvbkNsaWNrIiwiY3VycmVudCIsImNsaWNrIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJzcGFuIiwiY291bnQiLCJjb3VudF9jb2xvciIsImlucHV0IiwicmVmIiwidHlwZSIsImFjY2VwdCIsIm9uQ2hhbmdlIiwibWFwIiwiaW1nIiwiaW5kZXgiLCJpbWFnZV9ib3giLCJidXR0b25fYm94IiwiZGVsZXRlX2J1dHRvbiIsInByZXZpZXdfaW1nIiwicmVwcmVzZW50YXRpdmVfYmFkZ2UiLCJ0ZXh0YXJlYSIsInBsYWNlaG9sZGVyIiwidmFsdWUiLCJtYXhMZW5ndGgiLCJkZXNjX3RleHRhcmVhIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/writing/_components/ImageUploader.tsx\n"));

/***/ })

});
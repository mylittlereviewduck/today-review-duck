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

/***/ "(app-pages-browser)/./src/app/_components/atoms/DropDown.tsx":
/*!************************************************!*\
  !*** ./src/app/_components/atoms/DropDown.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_css/dropdown.module.css */ \"(app-pages-browser)/./src/app/_components/atoms/_css/dropdown.module.css\");\n/* harmony import */ var _css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Dropdown(param) {\n    let { isOpen, onClose, position = \"center\", width, height = \"auto\", margin, borderRadius = \"radius_8\", children } = param;\n    _s();\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleClickOutside(event) {\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                onClose();\n            }\n        }\n        if (isOpen) {\n            document.addEventListener(\"mousedown\", handleClickOutside);\n        }\n        return ()=>document.removeEventListener(\"mousedown\", handleClickOutside);\n    }, [\n        isOpen,\n        onClose\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: dropdownRef,\n        className: \"\".concat((_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown), \" \").concat(isOpen ? (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().open) : \"\", \" \").concat((_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default())[position], \" \"),\n        style: {\n            width,\n            height,\n            margin\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/DropDown.tsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropdown, \"lBksDI189chlgqHe47LAOFZSkUw=\");\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvRHJvcERvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ007QUFhakMsU0FBU0csU0FBUyxLQVNqQjtRQVRpQixFQUMvQkMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLFdBQVcsUUFBUSxFQUNuQkMsS0FBSyxFQUNMQyxTQUFTLE1BQU0sRUFDZkMsTUFBTSxFQUNSQyxlQUFlLFVBQVUsRUFDdkJDLFFBQVEsRUFDTSxHQVRpQjs7SUFVL0IsTUFBTUMsY0FBY1gsNkNBQU1BLENBQWlCO0lBRTNDRCxnREFBU0EsQ0FBQztRQUNSLFNBQVNhLG1CQUFtQkMsS0FBaUI7WUFDM0MsSUFDRUYsWUFBWUcsT0FBTyxJQUNuQixDQUFDSCxZQUFZRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUMxQztnQkFDQVo7WUFDRjtRQUNGO1FBQ0EsSUFBSUQsUUFBUTtZQUNWYyxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUN6QztRQUNBLE9BQU8sSUFBTUssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7SUFDekQsR0FBRztRQUFDVDtRQUFRQztLQUFRO0lBRXBCLHFCQUNFLDhEQUFDZ0I7UUFDQ0MsS0FBS1Y7UUFDTFcsV0FBVyxHQUFzQm5CLE9BQW5CRiwwRUFBZSxFQUFDLEtBQzVCQSxPQUQrQkUsU0FBU0Ysc0VBQVcsR0FBRyxJQUFHLEtBRTFELE9BRENBLGlFQUFNLENBQUNJLFNBQVMsRUFDakI7UUFDRG9CLE9BQU87WUFBRW5CO1lBQU9DO1lBQVFDO1FBQU87a0JBRTlCRTs7Ozs7O0FBR1A7R0F0Q3dCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2F0b21zL0Ryb3BEb3duLnRzeD83YjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvZHJvcGRvd24ubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgcG9zaXRpb24/OiBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG4gIHdpZHRoPzogc3RyaW5nO1xuICBoZWlnaHQ/OiBzdHJpbmc7XG4gIG1hcmdpbj86IHN0cmluZztcblx0Ym9yZGVyUmFkaXVzPzogXCJyYWRpdXNfOFwiIHwgXCJyYWRpdXNfMTZcIjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oe1xuICBpc09wZW4sXG4gIG9uQ2xvc2UsXG4gIHBvc2l0aW9uID0gXCJjZW50ZXJcIixcbiAgd2lkdGgsXG4gIGhlaWdodCA9IFwiYXV0b1wiLFxuICBtYXJnaW4sXG5ib3JkZXJSYWRpdXMgPSBcInJhZGl1c184XCIsXG4gIGNoaWxkcmVuLFxufTogRHJvcGRvd25Qcm9wcykge1xuICBjb25zdCBkcm9wZG93blJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZHJvcGRvd25SZWYuY3VycmVudCAmJlxuICAgICAgICAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICAgICkge1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfSwgW2lzT3Blbiwgb25DbG9zZV0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtkcm9wZG93blJlZn1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRyb3Bkb3dufSAke2lzT3BlbiA/IHN0eWxlcy5vcGVuIDogXCJcIn0gJHtcbiAgICAgICAgc3R5bGVzW3Bvc2l0aW9uXVxuICAgICAgfSBgfVxuICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCwgbWFyZ2luIH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkRyb3Bkb3duIiwiaXNPcGVuIiwib25DbG9zZSIsInBvc2l0aW9uIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJib3JkZXJSYWRpdXMiLCJjaGlsZHJlbiIsImRyb3Bkb3duUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiZHJvcGRvd24iLCJvcGVuIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/DropDown.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/login/page",{

/***/ "(app-pages-browser)/./src/app/_components/atoms/DropDown.tsx":
/*!************************************************!*\
  !*** ./src/app/_components/atoms/DropDown.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dropdown(param) {\n    let { isOpen, onClose, width = \"250px\", height = \"auto\", scrollable = false, children } = param;\n    _s();\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // 바깥 클릭 감지하여 닫기\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleClickOutside(event) {\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                onClose();\n            }\n        }\n        if (isOpen) {\n            document.addEventListener(\"mousedown\", handleClickOutside);\n        }\n        return ()=>document.removeEventListener(\"mousedown\", handleClickOutside);\n    }, [\n        isOpen,\n        onClose\n    ]);\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: dropdownRef,\n        className: \"\".concat(_atoms__WEBPACK_IMPORTED_MODULE_2__[\"default\"].dropdown, \" \").concat(scrollable ? _atoms__WEBPACK_IMPORTED_MODULE_2__[\"default\"].scrollable : \"\"),\n        style: {\n            width,\n            height\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/DropDown.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropdown, \"lBksDI189chlgqHe47LAOFZSkUw=\");\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvRHJvcERvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDWjtBQVdmLFNBQVNHLFNBQVMsS0FPakI7UUFQaUIsRUFDL0JDLE1BQU0sRUFDTkMsT0FBTyxFQUNQQyxRQUFRLE9BQU8sRUFDZkMsU0FBUyxNQUFNLEVBQ2ZDLGFBQWEsS0FBSyxFQUNsQkMsUUFBUSxFQUNNLEdBUGlCOztJQVEvQixNQUFNQyxjQUFjVCw2Q0FBTUEsQ0FBaUI7SUFFM0MsZ0JBQWdCO0lBQ2hCRCxnREFBU0EsQ0FBQztRQUNSLFNBQVNXLG1CQUFtQkMsS0FBaUI7WUFDM0MsSUFDRUYsWUFBWUcsT0FBTyxJQUNuQixDQUFDSCxZQUFZRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUMxQztnQkFDQVY7WUFDRjtRQUNGO1FBQ0EsSUFBSUQsUUFBUTtZQUNWWSxTQUFTQyxnQkFBZ0IsQ0FBQyxhQUFhTjtRQUN6QztRQUNBLE9BQU8sSUFBTUssU0FBU0UsbUJBQW1CLENBQUMsYUFBYVA7SUFDekQsR0FBRztRQUFDUDtRQUFRQztLQUFRO0lBRXBCLElBQUksQ0FBQ0QsUUFBUSxPQUFPO0lBRXBCLHFCQUNFLDhEQUFDZTtRQUNDQyxLQUFLVjtRQUNMVyxXQUFXLEdBQXNCYixPQUFuQk4sOENBQU1BLENBQUNvQixRQUFRLEVBQUMsS0FBdUMsT0FBcENkLGFBQWFOLDhDQUFNQSxDQUFDTSxVQUFVLEdBQUc7UUFDbEVlLE9BQU87WUFBRWpCO1lBQU9DO1FBQU87a0JBRXRCRTs7Ozs7O0FBR1A7R0FyQ3dCTjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2F0b21zL0Ryb3BEb3duLnRzeD83YjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9hdG9tc1wiO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgd2lkdGg/OiBzdHJpbmc7XG4gIGhlaWdodD86IHN0cmluZztcbiAgc2Nyb2xsYWJsZT86IGJvb2xlYW47XG4gIGNoaWxkcmVuOiBSZWFjdC5SZWFjdE5vZGU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIERyb3Bkb3duKHtcbiAgaXNPcGVuLFxuICBvbkNsb3NlLFxuICB3aWR0aCA9IFwiMjUwcHhcIixcbiAgaGVpZ2h0ID0gXCJhdXRvXCIsXG4gIHNjcm9sbGFibGUgPSBmYWxzZSxcbiAgY2hpbGRyZW4sXG59OiBEcm9wZG93blByb3BzKSB7XG4gIGNvbnN0IGRyb3Bkb3duUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcblxuICAvLyDrsJTquaUg7YG066atIOqwkOyngO2VmOyXrCDri6vquLBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGlja091dHNpZGUoZXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgZHJvcGRvd25SZWYuY3VycmVudCAmJlxuICAgICAgICAhZHJvcGRvd25SZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICAgICkge1xuICAgICAgICBvbkNsb3NlKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChpc09wZW4pIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgICB9XG4gICAgcmV0dXJuICgpID0+IGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgaGFuZGxlQ2xpY2tPdXRzaWRlKTtcbiAgfSwgW2lzT3Blbiwgb25DbG9zZV0pO1xuXG4gIGlmICghaXNPcGVuKSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17ZHJvcGRvd25SZWZ9XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kcm9wZG93bn0gJHtzY3JvbGxhYmxlID8gc3R5bGVzLnNjcm9sbGFibGUgOiBcIlwifWB9XG4gICAgICBzdHlsZT17eyB3aWR0aCwgaGVpZ2h0IH19XG4gICAgPlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVJlZiIsInN0eWxlcyIsIkRyb3Bkb3duIiwiaXNPcGVuIiwib25DbG9zZSIsIndpZHRoIiwiaGVpZ2h0Iiwic2Nyb2xsYWJsZSIsImNoaWxkcmVuIiwiZHJvcGRvd25SZWYiLCJoYW5kbGVDbGlja091dHNpZGUiLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJyZWYiLCJjbGFzc05hbWUiLCJkcm9wZG93biIsInN0eWxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/DropDown.tsx\n"));

/***/ })

});
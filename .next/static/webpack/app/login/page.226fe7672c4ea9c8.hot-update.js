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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_css/dropdown.module.css */ \"(app-pages-browser)/./src/app/_components/atoms/_css/dropdown.module.css\");\n/* harmony import */ var _css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nfunction Dropdown(param) {\n    let { isOpen, onClose, position = \"center\", height = \"auto\", margin, scrollable = false, children } = param;\n    _s();\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleClickOutside(event) {\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                onClose();\n            }\n        }\n        if (isOpen) {\n            document.addEventListener(\"mousedown\", handleClickOutside);\n        }\n        return ()=>document.removeEventListener(\"mousedown\", handleClickOutside);\n    }, [\n        isOpen,\n        onClose\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: dropdownRef,\n        className: \"\".concat((_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().dropdown), \" \").concat(isOpen ? (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().open) : \"\", \" \").concat((_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default())[position], \" \").concat(scrollable ? (_css_dropdown_module_css__WEBPACK_IMPORTED_MODULE_2___default().scrollable) : \"\"),\n        style: {\n            height,\n            margin\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/DropDown.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropdown, \"lBksDI189chlgqHe47LAOFZSkUw=\");\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvRHJvcERvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQTBDO0FBQ007QUFZakMsU0FBU0csU0FBUyxLQVFqQjtRQVJpQixFQUMvQkMsTUFBTSxFQUNOQyxPQUFPLEVBQ1BDLFdBQVcsUUFBUSxFQUNuQkMsU0FBUyxNQUFNLEVBQ2ZDLE1BQU0sRUFDTkMsYUFBYSxLQUFLLEVBQ2xCQyxRQUFRLEVBQ00sR0FSaUI7O0lBUy9CLE1BQU1DLGNBQWNWLDZDQUFNQSxDQUFpQjtJQUUzQ0QsZ0RBQVNBLENBQUM7UUFDUixTQUFTWSxtQkFBbUJDLEtBQWlCO1lBQzNDLElBQ0VGLFlBQVlHLE9BQU8sSUFDbkIsQ0FBQ0gsWUFBWUcsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FDMUM7Z0JBQ0FYO1lBQ0Y7UUFDRjtRQUNBLElBQUlELFFBQVE7WUFDVmEsU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFDekM7UUFDQSxPQUFPLElBQU1LLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO0lBQ3pELEdBQUc7UUFBQ1I7UUFBUUM7S0FBUTtJQUVwQixxQkFDRSw4REFBQ2U7UUFDQ0MsS0FBS1Y7UUFDTFcsV0FBVyxHQUFzQmxCLE9BQW5CRiwwRUFBZSxFQUFDLEtBQzVCQSxPQUQrQkUsU0FBU0Ysc0VBQVcsR0FBRyxJQUFHLEtBRXZETyxPQURGUCxpRUFBTSxDQUFDSSxTQUFTLEVBQ2pCLEtBQXVDLE9BQXBDRyxhQUFhUCw0RUFBaUIsR0FBRztRQUNyQ3VCLE9BQU87WUFBRWxCO1lBQVFDO1FBQU87a0JBRXZCRTs7Ozs7O0FBR1A7R0FyQ3dCUDtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL19jb21wb25lbnRzL2F0b21zL0Ryb3BEb3duLnRzeD83YjEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL19jc3MvZHJvcGRvd24ubW9kdWxlLmNzc1wiO1xuXG5pbnRlcmZhY2UgRHJvcGRvd25Qcm9wcyB7XG4gIGlzT3BlbjogYm9vbGVhbjtcbiAgb25DbG9zZTogKCkgPT4gdm9pZDtcbiAgcG9zaXRpb24/OiBcImxlZnRcIiB8IFwicmlnaHRcIiB8IFwiY2VudGVyXCI7XG4gIGhlaWdodD86IHN0cmluZztcbiAgbWFyZ2luPzogc3RyaW5nO1xuICBzY3JvbGxhYmxlPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oe1xuICBpc09wZW4sXG4gIG9uQ2xvc2UsXG4gIHBvc2l0aW9uID0gXCJjZW50ZXJcIixcbiAgaGVpZ2h0ID0gXCJhdXRvXCIsXG4gIG1hcmdpbixcbiAgc2Nyb2xsYWJsZSA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZnVuY3Rpb24gaGFuZGxlQ2xpY2tPdXRzaWRlKGV2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICBpZiAoXG4gICAgICAgIGRyb3Bkb3duUmVmLmN1cnJlbnQgJiZcbiAgICAgICAgIWRyb3Bkb3duUmVmLmN1cnJlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0IGFzIE5vZGUpXG4gICAgICApIHtcbiAgICAgICAgb25DbG9zZSgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaXNPcGVuKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gICAgfVxuICAgIHJldHVybiAoKSA9PiBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGhhbmRsZUNsaWNrT3V0c2lkZSk7XG4gIH0sIFtpc09wZW4sIG9uQ2xvc2VdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17ZHJvcGRvd25SZWZ9XG4gICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5kcm9wZG93bn0gJHtpc09wZW4gPyBzdHlsZXMub3BlbiA6IFwiXCJ9ICR7XG4gICAgICAgIHN0eWxlc1twb3NpdGlvbl1cbiAgICAgIH0gJHtzY3JvbGxhYmxlID8gc3R5bGVzLnNjcm9sbGFibGUgOiBcIlwifWB9XG4gICAgICBzdHlsZT17eyBoZWlnaHQsIG1hcmdpbiB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJzdHlsZXMiLCJEcm9wZG93biIsImlzT3BlbiIsIm9uQ2xvc2UiLCJwb3NpdGlvbiIsImhlaWdodCIsIm1hcmdpbiIsInNjcm9sbGFibGUiLCJjaGlsZHJlbiIsImRyb3Bkb3duUmVmIiwiaGFuZGxlQ2xpY2tPdXRzaWRlIiwiZXZlbnQiLCJjdXJyZW50IiwiY29udGFpbnMiLCJ0YXJnZXQiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwicmVmIiwiY2xhc3NOYW1lIiwiZHJvcGRvd24iLCJvcGVuIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/DropDown.tsx\n"));

/***/ })

});
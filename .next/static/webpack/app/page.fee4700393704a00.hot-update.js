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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Dropdown; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/.pnpm/next@14.2.4_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _atoms___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/ */ \"(app-pages-browser)/./src/app/_components/atoms/index.ts\");\n\nvar _s = $RefreshSig$();\n\n\nfunction Dropdown(param) {\n    let { isOpen, onClose, width = \"250px\", height = \"auto\", scrollable = false, children } = param;\n    _s();\n    const dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // 바깥 클릭 감지하여 닫기\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleClickOutside(event) {\n            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {\n                onClose();\n            }\n        }\n        if (isOpen) {\n            document.addEventListener(\"mousedown\", handleClickOutside);\n        }\n        return ()=>document.removeEventListener(\"mousedown\", handleClickOutside);\n    }, [\n        isOpen,\n        onClose\n    ]);\n    if (!isOpen) return null;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: dropdownRef,\n        className: \"\".concat(_atoms___WEBPACK_IMPORTED_MODULE_2__[\"default\"].dropdown, \" \").concat(scrollable ? _atoms___WEBPACK_IMPORTED_MODULE_2__[\"default\"].scrollable : \"\"),\n        style: {\n            width,\n            height\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/namookim/Documents/GitHub/today-review-duck/src/app/_components/atoms/DropDown.tsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(Dropdown, \"lBksDI189chlgqHe47LAOFZSkUw=\");\n_c = Dropdown;\nvar _c;\n$RefreshReg$(_c, \"Dropdown\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX2NvbXBvbmVudHMvYXRvbXMvRHJvcERvd24udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMEM7QUFDWDtBQVdoQixTQUFTRyxTQUFTLEtBT2pCO1FBUGlCLEVBQy9CQyxNQUFNLEVBQ05DLE9BQU8sRUFDUEMsUUFBUSxPQUFPLEVBQ2ZDLFNBQVMsTUFBTSxFQUNmQyxhQUFhLEtBQUssRUFDbEJDLFFBQVEsRUFDTSxHQVBpQjs7SUFRL0IsTUFBTUMsY0FBY1QsNkNBQU1BLENBQWlCO0lBRTNDLGdCQUFnQjtJQUNoQkQsZ0RBQVNBLENBQUM7UUFDUixTQUFTVyxtQkFBbUJDLEtBQWlCO1lBQzNDLElBQ0VGLFlBQVlHLE9BQU8sSUFDbkIsQ0FBQ0gsWUFBWUcsT0FBTyxDQUFDQyxRQUFRLENBQUNGLE1BQU1HLE1BQU0sR0FDMUM7Z0JBQ0FWO1lBQ0Y7UUFDRjtRQUNBLElBQUlELFFBQVE7WUFDVlksU0FBU0MsZ0JBQWdCLENBQUMsYUFBYU47UUFDekM7UUFDQSxPQUFPLElBQU1LLFNBQVNFLG1CQUFtQixDQUFDLGFBQWFQO0lBQ3pELEdBQUc7UUFBQ1A7UUFBUUM7S0FBUTtJQUVwQixJQUFJLENBQUNELFFBQVEsT0FBTztJQUVwQixxQkFDRSw4REFBQ2U7UUFDQ0MsS0FBS1Y7UUFDTFcsV0FBVyxHQUFzQmIsT0FBbkJOLCtDQUFNQSxDQUFDb0IsUUFBUSxFQUFDLEtBQXVDLE9BQXBDZCxhQUFhTiwrQ0FBTUEsQ0FBQ00sVUFBVSxHQUFHO1FBQ2xFZSxPQUFPO1lBQUVqQjtZQUFPQztRQUFPO2tCQUV0QkU7Ozs7OztBQUdQO0dBckN3Qk47S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fY29tcG9uZW50cy9hdG9tcy9Ecm9wRG93bi50c3g/N2IxMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vYXRvbXMvXCI7XG5cbmludGVyZmFjZSBEcm9wZG93blByb3BzIHtcbiAgaXNPcGVuOiBib29sZWFuO1xuICBvbkNsb3NlOiAoKSA9PiB2b2lkO1xuICB3aWR0aD86IHN0cmluZztcbiAgaGVpZ2h0Pzogc3RyaW5nO1xuICBzY3JvbGxhYmxlPzogYm9vbGVhbjtcbiAgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRHJvcGRvd24oe1xuICBpc09wZW4sXG4gIG9uQ2xvc2UsXG4gIHdpZHRoID0gXCIyNTBweFwiLFxuICBoZWlnaHQgPSBcImF1dG9cIixcbiAgc2Nyb2xsYWJsZSA9IGZhbHNlLFxuICBjaGlsZHJlbixcbn06IERyb3Bkb3duUHJvcHMpIHtcbiAgY29uc3QgZHJvcGRvd25SZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuXG4gIC8vIOuwlOq5pSDtgbTrpq0g6rCQ7KeA7ZWY7JesIOuLq+q4sFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZ1bmN0aW9uIGhhbmRsZUNsaWNrT3V0c2lkZShldmVudDogTW91c2VFdmVudCkge1xuICAgICAgaWYgKFxuICAgICAgICBkcm9wZG93blJlZi5jdXJyZW50ICYmXG4gICAgICAgICFkcm9wZG93blJlZi5jdXJyZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCBhcyBOb2RlKVxuICAgICAgKSB7XG4gICAgICAgIG9uQ2xvc2UoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGlzT3Blbikge1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICAgIH1cbiAgICByZXR1cm4gKCkgPT4gZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBoYW5kbGVDbGlja091dHNpZGUpO1xuICB9LCBbaXNPcGVuLCBvbkNsb3NlXSk7XG5cbiAgaWYgKCFpc09wZW4pIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtkcm9wZG93blJlZn1cbiAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmRyb3Bkb3dufSAke3Njcm9sbGFibGUgPyBzdHlsZXMuc2Nyb2xsYWJsZSA6IFwiXCJ9YH1cbiAgICAgIHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwic3R5bGVzIiwiRHJvcGRvd24iLCJpc09wZW4iLCJvbkNsb3NlIiwid2lkdGgiLCJoZWlnaHQiLCJzY3JvbGxhYmxlIiwiY2hpbGRyZW4iLCJkcm9wZG93blJlZiIsImhhbmRsZUNsaWNrT3V0c2lkZSIsImV2ZW50IiwiY3VycmVudCIsImNvbnRhaW5zIiwidGFyZ2V0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpdiIsInJlZiIsImNsYXNzTmFtZSIsImRyb3Bkb3duIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_components/atoms/DropDown.tsx\n"));

/***/ })

});
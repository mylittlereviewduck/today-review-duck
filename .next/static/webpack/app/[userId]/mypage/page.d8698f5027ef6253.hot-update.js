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

/***/ "(app-pages-browser)/./src/app/_recoil/navigationAtom.ts":
/*!*******************************************!*\
  !*** ./src/app/_recoil/navigationAtom.ts ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   activeItemState: function() { return /* binding */ activeItemState; }\n/* harmony export */ });\n/* harmony import */ var recoil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! recoil */ \"(app-pages-browser)/./node_modules/.pnpm/recoil@0.7.7_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/recoil/es/index.js\");\n\nconst activeItemState = (0,recoil__WEBPACK_IMPORTED_MODULE_0__.atom)({\n    key: \"activeItemState\",\n    default: \"트랜드\",\n    effects_UNSTABLE: [\n        (param)=>{\n            let { setSelf, onSet } = param;\n            if (true) {\n                const savedValue = localStorage.getItem(\"activeItem\");\n                if (savedValue) setSelf(savedValue); // 저장된 값 불러오기\n                onSet((newValue)=>{\n                    localStorage.setItem(\"activeItem\", newValue); // 값이 변경될 때 저장\n                });\n            }\n        }\n    ]\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvX3JlY29pbC9uYXZpZ2F0aW9uQXRvbS50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QjtBQUV2QixNQUFNQyxrQkFBa0JELDRDQUFJQSxDQUFTO0lBQzFDRSxLQUFLO0lBQ0xDLFNBQVM7SUFDVEMsa0JBQWtCO1FBQ2hCO2dCQUFDLEVBQUVDLE9BQU8sRUFBRUMsS0FBSyxFQUFFO1lBQ2pCLElBQUksSUFBNkIsRUFBRTtnQkFDakMsTUFBTUMsYUFBYUMsYUFBYUMsT0FBTyxDQUFDO2dCQUN4QyxJQUFJRixZQUFZRixRQUFRRSxhQUFhLGFBQWE7Z0JBRWxERCxNQUFNLENBQUNJO29CQUNMRixhQUFhRyxPQUFPLENBQUMsY0FBY0QsV0FBVyxjQUFjO2dCQUM5RDtZQUNGO1FBQ0Y7S0FDRDtBQUNILEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9fcmVjb2lsL25hdmlnYXRpb25BdG9tLnRzP2UwYmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXRvbSB9IGZyb20gXCJyZWNvaWxcIjtcblxuZXhwb3J0IGNvbnN0IGFjdGl2ZUl0ZW1TdGF0ZSA9IGF0b208c3RyaW5nPih7XG4gIGtleTogXCJhY3RpdmVJdGVtU3RhdGVcIixcbiAgZGVmYXVsdDogXCLtirjrnpzrk5xcIixcbiAgZWZmZWN0c19VTlNUQUJMRTogW1xuICAgICh7IHNldFNlbGYsIG9uU2V0IH0pID0+IHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGNvbnN0IHNhdmVkVmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImFjdGl2ZUl0ZW1cIik7XG4gICAgICAgIGlmIChzYXZlZFZhbHVlKSBzZXRTZWxmKHNhdmVkVmFsdWUpOyAvLyDsoIDsnqXrkJwg6rCSIOu2iOufrOyYpOq4sFxuXG4gICAgICAgIG9uU2V0KChuZXdWYWx1ZSkgPT4ge1xuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWN0aXZlSXRlbVwiLCBuZXdWYWx1ZSk7IC8vIOqwkuydtCDrs4Dqsr3rkKAg65WMIOyggOyepVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICBdLFxufSk7XG4iXSwibmFtZXMiOlsiYXRvbSIsImFjdGl2ZUl0ZW1TdGF0ZSIsImtleSIsImRlZmF1bHQiLCJlZmZlY3RzX1VOU1RBQkxFIiwic2V0U2VsZiIsIm9uU2V0Iiwic2F2ZWRWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJuZXdWYWx1ZSIsInNldEl0ZW0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/_recoil/navigationAtom.ts\n"));

/***/ })

});
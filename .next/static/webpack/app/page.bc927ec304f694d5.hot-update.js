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

/***/ "(app-pages-browser)/./app/home/detailCard.tsx":
/*!*********************************!*\
  !*** ./app/home/detailCard.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n\nconst DetailCard = (param)=>{\n    let { heading, title, image, style } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-black flex items-center justify-between px-80 py-16  max-2xl:px-36  max-xl:px-10 max-lg:flex-col max-sm:px-4 \".concat(style),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col gap-5\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white text-4xl font-black\",\n                            children: heading\n                        }, void 0, false, {\n                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/home/detailCard.tsx\",\n                            lineNumber: 23,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white text-xl font-normal\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/home/detailCard.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/home/detailCard.tsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/home/detailCard.tsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {\n                className: \"h-1 bg-black bg-opacity-60 w-full\"\n            }, void 0, false, {\n                fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/home/detailCard.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_c = DetailCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailCard);\nvar _c;\n$RefreshReg$(_c, \"DetailCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9ob21lL2RldGFpbENhcmQudHN4IiwibWFwcGluZ3MiOiI7OztBQVVBLE1BQU1BLGFBQXdDO1FBQUMsRUFDN0NDLE9BQU8sRUFDUEMsS0FBSyxFQUNMQyxLQUFLLEVBQ0xDLEtBQUssRUFDTjtJQUNDLHFCQUNFOzswQkFDRSw4REFBQ0M7Z0JBQ0NDLFdBQVcsbUhBQXlILE9BQU5GOzBCQUU5SCw0RUFBQ0M7b0JBQUlDLFdBQVU7O3NDQUNiLDhEQUFDQzs0QkFBRUQsV0FBVTtzQ0FBa0NMOzs7Ozs7c0NBQy9DLDhEQUFDTTs0QkFBRUQsV0FBVTtzQ0FBa0NKOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFHbkQsOERBQUNNO2dCQUFHRixXQUFVOzs7Ozs7OztBQUdwQjtLQW5CTU47QUFxQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2hvbWUvZGV0YWlsQ2FyZC50c3g/MjY0MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcblxuaW50ZXJmYWNlIERldGFpbENhcmRQcm9wcyB7XG4gIGhlYWRpbmc6IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgaW1hZ2U6IHN0cmluZztcbiAgc3R5bGU6IHN0cmluZztcbiAgZ2lmT25JbWFnZT86IGJvb2xlYW47XG59XG5cbmNvbnN0IERldGFpbENhcmQ6IFJlYWN0LkZDPERldGFpbENhcmRQcm9wcz4gPSAoe1xuICBoZWFkaW5nLFxuICB0aXRsZSxcbiAgaW1hZ2UsXG4gIHN0eWxlLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGJnLWJsYWNrIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktYmV0d2VlbiBweC04MCBweS0xNiAgbWF4LTJ4bDpweC0zNiAgbWF4LXhsOnB4LTEwIG1heC1sZzpmbGV4LWNvbCBtYXgtc206cHgtNCAke3N0eWxlfWB9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBnYXAtNVwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdGV4dC00eGwgZm9udC1ibGFja1wiPntoZWFkaW5nfTwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHRleHQteGwgZm9udC1ub3JtYWxcIj57dGl0bGV9PC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGhyIGNsYXNzTmFtZT1cImgtMSBiZy1ibGFjayBiZy1vcGFjaXR5LTYwIHctZnVsbFwiPjwvaHI+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxDYXJkO1xuIl0sIm5hbWVzIjpbIkRldGFpbENhcmQiLCJoZWFkaW5nIiwidGl0bGUiLCJpbWFnZSIsInN0eWxlIiwiZGl2IiwiY2xhc3NOYW1lIiwicCIsImhyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/home/detailCard.tsx\n"));

/***/ })

});
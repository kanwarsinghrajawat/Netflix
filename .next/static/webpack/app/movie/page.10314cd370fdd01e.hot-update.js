"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/movie/page",{

/***/ "(app-pages-browser)/./app/movie/mainContainer.tsx":
/*!*************************************!*\
  !*** ./app/movie/mainContainer.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _trailerBackground__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trailerBackground */ \"(app-pages-browser)/./app/movie/trailerBackground.tsx\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\nconst MainContainer = ()=>{\n    var _movies_nowPLayingMovies;\n    _s();\n    const movies = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((store)=>store.movies);\n    const filteredData = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((store)=>{\n        var _store_movies;\n        return store === null || store === void 0 ? void 0 : (_store_movies = store.movies) === null || _store_movies === void 0 ? void 0 : _store_movies.searchResultsCrad;\n    });\n    if (!movies || !movies.nowPLayingMovies) return;\n    // console.log(\"mainContainer movies\");\n    // console.log(movies);\n    const mainMovies = movies === null || movies === void 0 ? void 0 : (_movies_nowPLayingMovies = movies.nowPLayingMovies) === null || _movies_nowPLayingMovies === void 0 ? void 0 : _movies_nowPLayingMovies[2];\n    const { overview, id, title } = mainMovies;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: filteredData === null && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"relative overflow-x-hidden\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_trailerBackground__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    movieId: id\n                }, void 0, false, {\n                    fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                    lineNumber: 25,\n                    columnNumber: 11\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"absolute top-1/3 px-8 w-2/4 flex flex-col gap-6 max-lg:w-3/4 max-lg:px-6 max-md:px-4 max-md:top-1/2 max-sm:w-full\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white font-semibold text-6xl max-lg:text-4xl\",\n                            children: title\n                        }, void 0, false, {\n                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-white text-lg font-semibold max-md:hidden\",\n                            children: overview\n                        }, void 0, false, {\n                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                            lineNumber: 31,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-10 max-lg:h-12 max-sm:h-10\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/vedio\",\n                                    className: \"bg-white px-9 py-4 text-xs flex items-center justify-center gap-4 rounded-lg max-lg:py-2 max-sm:px-7 \",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {\n                                            src: \"/play.png\",\n                                            alt: \"\",\n                                            width: 20,\n                                            height: 20\n                                        }, void 0, false, {\n                                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                                            lineNumber: 39,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"text-base\",\n                                            children: \"Play\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                                            lineNumber: 40,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                                    lineNumber: 35,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_5___default()), {\n                                    href: \"/\",\n                                    className: \"text-white px-8 py-4 gap-4 bg-gray-700 bg-opacity-70 rounded-lg text-xs flex items-center justify-center max-sm:px-7 \",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        className: \"text-base\",\n                                        children: \"More Info\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                                    lineNumber: 42,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                            lineNumber: 34,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n                            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/mainContainer.tsx\",\n            lineNumber: 24,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false);\n};\n_s(MainContainer, \"9JmeHzqZxhpA1+uRIGbtEN73Ao4=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = MainContainer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MainContainer);\nvar _c;\n$RefreshReg$(_c, \"MainContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb3ZpZS9tYWluQ29udGFpbmVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDMEI7QUFDMEI7QUFDVjtBQUNYO0FBQ0Y7QUFFN0IsTUFBTUssZ0JBQWdCO1FBU0RDOztJQVJuQixNQUFNQSxTQUFTSix3REFBV0EsQ0FBQyxDQUFDSyxRQUFlQSxNQUFNRCxNQUFNO0lBQ3ZELE1BQU1FLGVBQWVOLHdEQUFXQSxDQUM5QixDQUFDSztZQUFlQTtlQUFBQSxrQkFBQUEsNkJBQUFBLGdCQUFBQSxNQUFPRCxNQUFNLGNBQWJDLG9DQUFBQSxjQUFlRSxpQkFBaUI7O0lBRWxELElBQUksQ0FBQ0gsVUFBVSxDQUFDQSxPQUFPSSxnQkFBZ0IsRUFBRTtJQUN6Qyx1Q0FBdUM7SUFDdkMsdUJBQXVCO0lBRXZCLE1BQU1DLGFBQWFMLG1CQUFBQSw4QkFBQUEsMkJBQUFBLE9BQVFJLGdCQUFnQixjQUF4QkosK0NBQUFBLHdCQUEwQixDQUFDLEVBQUU7SUFFaEQsTUFBTSxFQUFFTSxRQUFRLEVBQUVDLEVBQUUsRUFBRUMsS0FBSyxFQUFFLEdBQUdIO0lBRWhDLHFCQUNFO2tCQUNHSCxpQkFBaUIsc0JBQ2hCLDhEQUFDTztZQUFJQyxXQUFVOzs4QkFDYiw4REFBQ2YsMERBQWlCQTtvQkFBQ2dCLFNBQVNKOzs7Ozs7OEJBQzVCLDhEQUFDRTtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUNFOzRCQUFFRixXQUFVO3NDQUNWRjs7Ozs7O3NDQUdILDhEQUFDSTs0QkFBRUYsV0FBVTtzQ0FDVko7Ozs7OztzQ0FFSCw4REFBQ0c7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDWixrREFBSUE7b0NBQ0hlLE1BQUs7b0NBQ0xILFdBQVU7O3NEQUVWLDhEQUFDYixtREFBS0E7NENBQUNpQixLQUFJOzRDQUFZQyxLQUFJOzRDQUFHQyxPQUFPOzRDQUFJQyxRQUFROzs7Ozs7c0RBQ2pELDhEQUFDTDs0Q0FBRUYsV0FBVTtzREFBWTs7Ozs7Ozs7Ozs7OzhDQUUzQiw4REFBQ1osa0RBQUlBO29DQUNIZSxNQUFLO29DQUNMSCxXQUFVOzhDQUVWLDRFQUFDUTt3Q0FBT1IsV0FBVTtrREFBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBR2xDLDhEQUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWI7R0EvQ01WOztRQUNXSCxvREFBV0E7UUFDTEEsb0RBQVdBOzs7S0FGNUJHO0FBZ0ROLCtEQUFlQSxhQUFhQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9tb3ZpZS9tYWluQ29udGFpbmVyLnRzeD84NjU3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFRyYWlsZXJCYWNrZ3JvdW5kIGZyb20gXCIuL3RyYWlsZXJCYWNrZ3JvdW5kXCI7XG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5cbmNvbnN0IE1haW5Db250YWluZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1vdmllcyA9IHVzZVNlbGVjdG9yKChzdG9yZTogYW55KSA9PiBzdG9yZS5tb3ZpZXMpO1xuICBjb25zdCBmaWx0ZXJlZERhdGEgPSB1c2VTZWxlY3RvcihcbiAgICAoc3RvcmU6IGFueSkgPT4gc3RvcmU/Lm1vdmllcz8uc2VhcmNoUmVzdWx0c0NyYWRcbiAgKTtcbiAgaWYgKCFtb3ZpZXMgfHwgIW1vdmllcy5ub3dQTGF5aW5nTW92aWVzKSByZXR1cm47XG4gIC8vIGNvbnNvbGUubG9nKFwibWFpbkNvbnRhaW5lciBtb3ZpZXNcIik7XG4gIC8vIGNvbnNvbGUubG9nKG1vdmllcyk7XG5cbiAgY29uc3QgbWFpbk1vdmllcyA9IG1vdmllcz8ubm93UExheWluZ01vdmllcz8uWzJdO1xuXG4gIGNvbnN0IHsgb3ZlcnZpZXcsIGlkLCB0aXRsZSB9ID0gbWFpbk1vdmllcztcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7ZmlsdGVyZWREYXRhID09PSBudWxsICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSBvdmVyZmxvdy14LWhpZGRlblwiPlxuICAgICAgICAgIDxUcmFpbGVyQmFja2dyb3VuZCBtb3ZpZUlkPXtpZH0gLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0xLzMgcHgtOCB3LTIvNCBmbGV4IGZsZXgtY29sIGdhcC02IG1heC1sZzp3LTMvNCBtYXgtbGc6cHgtNiBtYXgtbWQ6cHgtNCBtYXgtbWQ6dG9wLTEvMiBtYXgtc206dy1mdWxsXCI+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGZvbnQtc2VtaWJvbGQgdGV4dC02eGwgbWF4LWxnOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbWF4LW1kOmhpZGRlblwiPlxuICAgICAgICAgICAgICB7b3ZlcnZpZXd9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwLTEwIG1heC1sZzpoLTEyIG1heC1zbTpoLTEwXCI+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi92ZWRpb1wiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHgtOSBweS00IHRleHQteHMgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTQgcm91bmRlZC1sZyBtYXgtbGc6cHktMiBtYXgtc206cHgtNyBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz1cIi9wbGF5LnBuZ1wiIGFsdD1cIlwiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2VcIj5QbGF5PC9wPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgaHJlZj1cIi9cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgcHgtOCBweS00IGdhcC00IGJnLWdyYXktNzAwIGJnLW9wYWNpdHktNzAgcm91bmRlZC1sZyB0ZXh0LXhzIGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1heC1zbTpweC03IFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cInRleHQtYmFzZVwiPk1vcmUgSW5mbzwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBNYWluQ29udGFpbmVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVHJhaWxlckJhY2tncm91bmQiLCJ1c2VTZWxlY3RvciIsIkltYWdlIiwiTGluayIsIk1haW5Db250YWluZXIiLCJtb3ZpZXMiLCJzdG9yZSIsImZpbHRlcmVkRGF0YSIsInNlYXJjaFJlc3VsdHNDcmFkIiwibm93UExheWluZ01vdmllcyIsIm1haW5Nb3ZpZXMiLCJvdmVydmlldyIsImlkIiwidGl0bGUiLCJkaXYiLCJjbGFzc05hbWUiLCJtb3ZpZUlkIiwicCIsImhyZWYiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/movie/mainContainer.tsx\n"));

/***/ })

});
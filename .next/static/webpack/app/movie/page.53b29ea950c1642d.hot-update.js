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

/***/ "(app-pages-browser)/./app/movie/trailerBackground.tsx":
/*!*****************************************!*\
  !*** ./app/movie/trailerBackground.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* harmony import */ var _components_hooks_useTrailer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/hooks/useTrailer */ \"(app-pages-browser)/./app/components/hooks/useTrailer.ts\");\n\nvar _s = $RefreshSig$();\n\n\nconst TrailerBackground = (param)=>{\n    let { movieId } = param;\n    _s();\n    (0,_components_hooks_useTrailer__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(movieId);\n    const trailerKey = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((store)=>{\n        var _store_movies;\n        return store === null || store === void 0 ? void 0 : (_store_movies = store.movies) === null || _store_movies === void 0 ? void 0 : _store_movies.trailerVedioKey;\n    });\n    const filteredData = (0,react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector)((store)=>{\n        var _store_movies;\n        return store === null || store === void 0 ? void 0 : (_store_movies = store.movies) === null || _store_movies === void 0 ? void 0 : _store_movies.searchResultsCrad;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-screen\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                className: \"w-screen aspect-video h-full\",\n                src: \"https://www.youtube.com/embed/ADDFmfOeihU?si=L5YWzuPdTajSFMvY&controls=0&autoplay=1&mute=1&loop=1\",\n                // src={`https://www.youtube.com/embed/MJfPgtchKCN5fwV4?autoplay=1&mute=1&loop=1&controls=0&playlist=MJfPgtchKCN5fwV4`}\n                title: \"YouTube video player\",\n                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\"\n            }, void 0, false, {\n                fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/trailerBackground.tsx\",\n                lineNumber: 15,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/movie/trailerBackground.tsx\",\n            lineNumber: 14,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(TrailerBackground, \"Sh1/d0fXnXInCQvGjfyxSQdkIS8=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector,\n        react_redux__WEBPACK_IMPORTED_MODULE_1__.useSelector\n    ];\n});\n_c = TrailerBackground;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TrailerBackground);\nvar _c;\n$RefreshReg$(_c, \"TrailerBackground\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9tb3ZpZS90cmFpbGVyQmFja2dyb3VuZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBDO0FBQ2M7QUFFeEQsTUFBTUUsb0JBQW9CO1FBQUMsRUFBRUMsT0FBTyxFQUFPOztJQUN6Q0Ysd0VBQVVBLENBQUNFO0lBQ1gsTUFBTUMsYUFBYUosd0RBQVdBLENBQzVCLENBQUNLO1lBQWVBO2VBQUFBLGtCQUFBQSw2QkFBQUEsZ0JBQUFBLE1BQU9DLE1BQU0sY0FBYkQsb0NBQUFBLGNBQWVFLGVBQWU7O0lBRWhELE1BQU1DLGVBQWVSLHdEQUFXQSxDQUM5QixDQUFDSztZQUFlQTtlQUFBQSxrQkFBQUEsNkJBQUFBLGdCQUFBQSxNQUFPQyxNQUFNLGNBQWJELG9DQUFBQSxjQUFlSSxpQkFBaUI7O0lBRWxELHFCQUNFO2tCQUNFLDRFQUFDQztZQUFJQyxXQUFVO3NCQUNiLDRFQUFDQztnQkFDQ0QsV0FBVTtnQkFDVkUsS0FBSTtnQkFDSix1SEFBdUg7Z0JBQ3ZIQyxPQUFNO2dCQUNOQyxPQUFNOzs7Ozs7Ozs7Ozs7QUFXaEI7R0EzQk1iOztRQUVlRixvREFBV0E7UUFHVEEsb0RBQVdBOzs7S0FMNUJFO0FBNEJOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL21vdmllL3RyYWlsZXJCYWNrZ3JvdW5kLnRzeD9iMGU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5pbXBvcnQgVXNlVHJhaWxlciBmcm9tIFwiLi4vY29tcG9uZW50cy9ob29rcy91c2VUcmFpbGVyXCI7XG5cbmNvbnN0IFRyYWlsZXJCYWNrZ3JvdW5kID0gKHsgbW92aWVJZCB9OiBhbnkpID0+IHtcbiAgVXNlVHJhaWxlcihtb3ZpZUlkKTtcbiAgY29uc3QgdHJhaWxlcktleSA9IHVzZVNlbGVjdG9yKFxuICAgIChzdG9yZTogYW55KSA9PiBzdG9yZT8ubW92aWVzPy50cmFpbGVyVmVkaW9LZXlcbiAgKTtcbiAgY29uc3QgZmlsdGVyZWREYXRhID0gdXNlU2VsZWN0b3IoXG4gICAgKHN0b3JlOiBhbnkpID0+IHN0b3JlPy5tb3ZpZXM/LnNlYXJjaFJlc3VsdHNDcmFkXG4gICk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW5cIj5cbiAgICAgICAgPGlmcmFtZVxuICAgICAgICAgIGNsYXNzTmFtZT1cInctc2NyZWVuIGFzcGVjdC12aWRlbyBoLWZ1bGxcIlxuICAgICAgICAgIHNyYz1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL0FEREZtZk9laWhVP3NpPUw1WVd6dVBkVGFqU0ZNdlkmY29udHJvbHM9MCZhdXRvcGxheT0xJm11dGU9MSZsb29wPTFcIlxuICAgICAgICAgIC8vIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkL01KZlBndGNoS0NONWZ3VjQ/YXV0b3BsYXk9MSZtdXRlPTEmbG9vcD0xJmNvbnRyb2xzPTAmcGxheWxpc3Q9TUpmUGd0Y2hLQ041ZndWNGB9XG4gICAgICAgICAgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiXG4gICAgICAgICAgYWxsb3c9XCJhY2NlbGVyb21ldGVyOyBhdXRvcGxheTsgY2xpcGJvYXJkLXdyaXRlOyBlbmNyeXB0ZWQtbWVkaWE7IGd5cm9zY29wZTsgcGljdHVyZS1pbi1waWN0dXJlOyB3ZWItc2hhcmVcIlxuICAgICAgICA+PC9pZnJhbWU+XG4gICAgICAgIHsvKiA8aWZyYW1lXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1zY3JlZW4gYXNwZWN0LXZpZGVvIGgtZnVsbFwiXG4gICAgICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt0cmFpbGVyS2V5fT9hdXRvcGxheT0xJm11dGU9MSZsb29wPTEmY29udHJvbHM9MCZwbGF5bGlzdD0ke3RyYWlsZXJLZXl9YH1cbiAgICAgICAgICB0aXRsZT1cIllvdVR1YmUgdmlkZW8gcGxheWVyXCJcbiAgICAgICAgICBhbGxvdz1cImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmU7IHdlYi1zaGFyZVwiXG4gICAgICAgID48L2lmcmFtZT4gKi99XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBUcmFpbGVyQmFja2dyb3VuZDtcbiJdLCJuYW1lcyI6WyJ1c2VTZWxlY3RvciIsIlVzZVRyYWlsZXIiLCJUcmFpbGVyQmFja2dyb3VuZCIsIm1vdmllSWQiLCJ0cmFpbGVyS2V5Iiwic3RvcmUiLCJtb3ZpZXMiLCJ0cmFpbGVyVmVkaW9LZXkiLCJmaWx0ZXJlZERhdGEiLCJzZWFyY2hSZXN1bHRzQ3JhZCIsImRpdiIsImNsYXNzTmFtZSIsImlmcmFtZSIsInNyYyIsInRpdGxlIiwiYWxsb3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/movie/trailerBackground.tsx\n"));

/***/ })

});
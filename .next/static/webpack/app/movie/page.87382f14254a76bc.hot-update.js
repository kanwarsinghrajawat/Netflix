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

/***/ "(app-pages-browser)/./app/components/hooks/useTrailer.ts":
/*!********************************************!*\
  !*** ./app/components/hooks/useTrailer.ts ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/constants */ \"(app-pages-browser)/./app/constants/index.ts\");\n/* harmony import */ var _app_reduxStore_moviesStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/reduxStore/moviesStore */ \"(app-pages-browser)/./app/reduxStore/moviesStore.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\nconst UseTrailer = (movieId)=>{\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useDispatch)();\n    const fetchData = async ()=>{\n        try {\n            const apiUrl = \"https://api.themoviedb.org/3/movie/\" + movieId + \"/videos?api_key=\" + _app_constants__WEBPACK_IMPORTED_MODULE_0__.API_KEY;\n            const response = await fetch(apiUrl);\n            const data = await response.json();\n            const trailer = data === null || data === void 0 ? void 0 : data.results.filter((item)=>item.type === \"Trailer\");\n            const filteredTrailer = trailer.length ? trailer[0] : data === null || data === void 0 ? void 0 : data.results[0];\n            dispatch((0,_app_reduxStore_moviesStore__WEBPACK_IMPORTED_MODULE_1__.trailerVedio)(filteredTrailer === null || filteredTrailer === void 0 ? void 0 : filteredTrailer.key));\n        } catch (error) {\n            console.error(\"Error fetching data:\", error);\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchData();\n    }, []);\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (UseTrailer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZVRyYWlsZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OzZEQUUwQztBQUNrQjtBQUMxQjtBQUNRO0FBRTFDLE1BQU1JLGFBQWEsQ0FBQ0M7SUFDbEIsTUFBTUMsV0FBV0gsd0RBQVdBO0lBRTVCLE1BQU1JLFlBQVk7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFNBQ0osd0NBQ0FILFVBQ0EscUJBQ0FMLG1EQUFPQTtZQUVULE1BQU1TLFdBQVcsTUFBTUMsTUFBTUY7WUFFN0IsTUFBTUcsT0FBTyxNQUFNRixTQUFTRyxJQUFJO1lBRWhDLE1BQU1DLFVBQVVGLGlCQUFBQSwyQkFBQUEsS0FBTUcsT0FBTyxDQUFDQyxNQUFNLENBQ2xDLENBQUNDLE9BQWNBLEtBQUtDLElBQUksS0FBSztZQUUvQixNQUFNQyxrQkFBa0JMLFFBQVFNLE1BQU0sR0FBR04sT0FBTyxDQUFDLEVBQUUsR0FBR0YsaUJBQUFBLDJCQUFBQSxLQUFNRyxPQUFPLENBQUMsRUFBRTtZQUN0RVIsU0FBU0wseUVBQVlBLENBQUNpQiw0QkFBQUEsc0NBQUFBLGdCQUFpQkUsR0FBRztRQUM1QyxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDLHdCQUF3QkE7UUFDeEM7SUFDRjtJQUVBbkIsZ0RBQVNBLENBQUM7UUFDUks7SUFDRixHQUFHLEVBQUU7QUFDUDtBQUNBLCtEQUFlSCxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9jb21wb25lbnRzL2hvb2tzL3VzZVRyYWlsZXIudHM/MzVlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgQVBJX0tFWSB9IGZyb20gXCJAL2FwcC9jb25zdGFudHNcIjtcbmltcG9ydCB7IHRyYWlsZXJWZWRpbyB9IGZyb20gXCJAL2FwcC9yZWR1eFN0b3JlL21vdmllc1N0b3JlXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcInJlYWN0LXJlZHV4XCI7XG5cbmNvbnN0IFVzZVRyYWlsZXIgPSAobW92aWVJZDogYW55KSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcblxuICBjb25zdCBmZXRjaERhdGEgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGFwaVVybCA9XG4gICAgICAgIFwiaHR0cHM6Ly9hcGkudGhlbW92aWVkYi5vcmcvMy9tb3ZpZS9cIiArXG4gICAgICAgIG1vdmllSWQgK1xuICAgICAgICBcIi92aWRlb3M/YXBpX2tleT1cIiArXG4gICAgICAgIEFQSV9LRVk7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYXBpVXJsKTtcblxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgY29uc3QgdHJhaWxlciA9IGRhdGE/LnJlc3VsdHMuZmlsdGVyKFxuICAgICAgICAoaXRlbTogYW55KSA9PiBpdGVtLnR5cGUgPT09IFwiVHJhaWxlclwiXG4gICAgICApO1xuICAgICAgY29uc3QgZmlsdGVyZWRUcmFpbGVyID0gdHJhaWxlci5sZW5ndGggPyB0cmFpbGVyWzBdIDogZGF0YT8ucmVzdWx0c1swXTtcbiAgICAgIGRpc3BhdGNoKHRyYWlsZXJWZWRpbyhmaWx0ZXJlZFRyYWlsZXI/LmtleSkpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgZGF0YTpcIiwgZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoRGF0YSgpO1xuICB9LCBbXSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgVXNlVHJhaWxlcjtcbiJdLCJuYW1lcyI6WyJBUElfS0VZIiwidHJhaWxlclZlZGlvIiwidXNlRWZmZWN0IiwidXNlRGlzcGF0Y2giLCJVc2VUcmFpbGVyIiwibW92aWVJZCIsImRpc3BhdGNoIiwiZmV0Y2hEYXRhIiwiYXBpVXJsIiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwidHJhaWxlciIsInJlc3VsdHMiLCJmaWx0ZXIiLCJpdGVtIiwidHlwZSIsImZpbHRlcmVkVHJhaWxlciIsImxlbmd0aCIsImtleSIsImVycm9yIiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/hooks/useTrailer.ts\n"));

/***/ })

});
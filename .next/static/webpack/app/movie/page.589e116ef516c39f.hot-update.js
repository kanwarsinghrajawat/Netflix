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

/***/ "(app-pages-browser)/./app/utils/searchInput.tsx":
/*!***********************************!*\
  !*** ./app/utils/searchInput.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\";\n// import Image from \"next/image\";\n// import React, { useState } from \"react\";\n// import { addSearchData, searchedmovies } from \"../reduxStore/moviesStore\";\n// import { useDispatch, useSelector } from \"react-redux\";\n// const SearchInput = () => {\n//   const [search, setSearch] = useState(\"\");\n//   const [showSearchIcon, setShowSearchIcon] = useState(false);\n//   const dispatch = useDispatch();\n//   const movies = useSelector((store: any) => store.movies);\n//   const handleSearchIcon = () => {\n//     setShowSearchIcon(true);\n//   };\n//   const setDataInSearch = (event: any) => {\n//     setSearch(event?.target.value);\n//   };\n//   const setDataInRedux = (event: any) => {\n//     if (event.key == \"Enter\") {\n//       dispatch(addSearchData(search));\n//       filterMovies(search, movies);\n//     }\n//   };\n//   const handleSearchValue = () => {\n//     dispatch(addSearchData(null));\n//     dispatch(searchedmovies(null));\n//     setSearch(\"\");\n//   };\n//   function filterMovies(searchString: any, movies: any) {\n//     const filteredNowPlaying = filterUniqueMovies(\n//       movies?.nowPlayingMovies,\n//       searchString\n//     );\n//     const filteredPopular = filterUniqueMovies(\n//       movies?.popularMovies,\n//       searchString\n//     );\n//     const filteredTopRated = filterUniqueMovies(\n//       movies?.topRatedMovies,\n//       searchString\n//     );\n//     const filteredMoviesObject = [\n//       ...filteredNowPlaying,\n//       ...filteredPopular,\n//       ...filteredTopRated,\n//     ];\n//     dispatch(searchedmovies(filteredMoviesObject));\n//     return filteredMoviesObject;\n//   }\n//   function filterUniqueMovies(movies: any[] | undefined, searchString: string) {\n//     const uniqueMovies: { [key: string]: any } = {};\n//     return (\n//       movies?.filter((movie: any) => {\n//         if (!uniqueMovies[movie.id]) {\n//           uniqueMovies[movie.id] = true;\n//           return movie.title.toLowerCase().includes(searchString.toLowerCase());\n//         }\n//         return false;\n//       }) || []\n//     );\n//   }\n//   return (\n//     <>\n//       {!showSearchIcon ? (\n//         <Image\n//           src=\"/search.png\"\n//           alt=\"search-icon\"\n//           width={15}\n//           height={15}\n//           onClick={handleSearchIcon}\n//         />\n//       ) : (\n//         <div className=\"rounded border py-[2px] px-2 flex gap-2 items-center\">\n//           <Image src=\"/search.png\" alt=\"search-icon\" width={15} height={15} />\n//           <input\n//             type=\"text\"\n//             placeholder=\"search\"\n//             value={search}\n//             className=\"bg-transparent focus:outline-none text-white\"\n//             onChange={setDataInSearch}\n//             onKeyPress={setDataInRedux}\n//           />\n//           <div className=\" text-white  cursor-pointer\">\n//             <Image\n//               src=\"/close-white.png\"\n//               alt=\"cancel\"\n//               className=\" \"\n//               width={15}\n//               height={15}\n//               onClick={handleSearchValue}\n//             />\n//           </div>\n//         </div>\n//       )}\n//     </>\n//   );\n// };\n// export default SearchInput;\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst SearchInput = ()=>{\n    _s();\n    const [isSearchOpen, setIsSearchOpen] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const searchBoxRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleOutsideClick = (event)=>{\n        if (searchBoxRef.current && !searchBoxRef.current.contains(event.target)) {\n            closeSearchBox();\n        }\n    };\n    const openSearchBox = ()=>{\n        setIsSearchOpen(true);\n        document.addEventListener(\"click\", handleOutsideClick);\n    };\n    const closeSearchBox = ()=>{\n        setIsSearchOpen(false);\n        document.removeEventListener(\"click\", handleOutsideClick);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        return ()=>{\n            document.removeEventListener(\"click\", handleOutsideClick);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"search-container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"search-icon\",\n                onClick: openSearchBox,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"search-icon.png\",\n                    alt: \"Search\"\n                }, void 0, false, {\n                    fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/utils/searchInput.tsx\",\n                    lineNumber: 144,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/utils/searchInput.tsx\",\n                lineNumber: 142,\n                columnNumber: 7\n            }, undefined),\n            isSearchOpen && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"search-box\",\n                ref: searchBoxRef,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"Search...\"\n                    }, void 0, false, {\n                        fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/utils/searchInput.tsx\",\n                        lineNumber: 148,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: closeSearchBox,\n                        children: \"Close\"\n                    }, void 0, false, {\n                        fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/utils/searchInput.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/utils/searchInput.tsx\",\n                lineNumber: 147,\n                columnNumber: 9\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tekenlight-06oct2022/Desktop/Next Js Project/Netflix/app/utils/searchInput.tsx\",\n        lineNumber: 141,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SearchInput, \"IlGHT2lIl+fja5yYi7FX+0FrWKQ=\");\n_c = SearchInput;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchInput);\nvar _c;\n$RefreshReg$(_c, \"SearchInput\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC91dGlscy9zZWFyY2hJbnB1dC50c3giLCJtYXBwaW5ncyI6Ijs7OztBQUFBLGdCQUFnQjtBQUVoQixrQ0FBa0M7QUFDbEMsMkNBQTJDO0FBQzNDLDZFQUE2RTtBQUM3RSwwREFBMEQ7QUFFMUQsOEJBQThCO0FBQzlCLDhDQUE4QztBQUM5QyxpRUFBaUU7QUFDakUsb0NBQW9DO0FBQ3BDLDhEQUE4RDtBQUU5RCxxQ0FBcUM7QUFDckMsK0JBQStCO0FBQy9CLE9BQU87QUFFUCw4Q0FBOEM7QUFDOUMsc0NBQXNDO0FBQ3RDLE9BQU87QUFFUCw2Q0FBNkM7QUFDN0Msa0NBQWtDO0FBQ2xDLHlDQUF5QztBQUN6QyxzQ0FBc0M7QUFDdEMsUUFBUTtBQUNSLE9BQU87QUFDUCxzQ0FBc0M7QUFDdEMscUNBQXFDO0FBQ3JDLHNDQUFzQztBQUN0QyxxQkFBcUI7QUFDckIsT0FBTztBQUVQLDREQUE0RDtBQUM1RCxxREFBcUQ7QUFDckQsa0NBQWtDO0FBQ2xDLHFCQUFxQjtBQUNyQixTQUFTO0FBQ1Qsa0RBQWtEO0FBQ2xELCtCQUErQjtBQUMvQixxQkFBcUI7QUFDckIsU0FBUztBQUNULG1EQUFtRDtBQUNuRCxnQ0FBZ0M7QUFDaEMscUJBQXFCO0FBQ3JCLFNBQVM7QUFDVCxxQ0FBcUM7QUFDckMsK0JBQStCO0FBQy9CLDRCQUE0QjtBQUM1Qiw2QkFBNkI7QUFDN0IsU0FBUztBQUNULHNEQUFzRDtBQUV0RCxtQ0FBbUM7QUFDbkMsTUFBTTtBQUVOLG1GQUFtRjtBQUNuRix1REFBdUQ7QUFDdkQsZUFBZTtBQUNmLHlDQUF5QztBQUN6Qyx5Q0FBeUM7QUFDekMsMkNBQTJDO0FBQzNDLG1GQUFtRjtBQUNuRixZQUFZO0FBQ1osd0JBQXdCO0FBQ3hCLGlCQUFpQjtBQUNqQixTQUFTO0FBQ1QsTUFBTTtBQUVOLGFBQWE7QUFDYixTQUFTO0FBQ1QsNkJBQTZCO0FBQzdCLGlCQUFpQjtBQUNqQiw4QkFBOEI7QUFDOUIsOEJBQThCO0FBQzlCLHVCQUF1QjtBQUN2Qix3QkFBd0I7QUFDeEIsdUNBQXVDO0FBQ3ZDLGFBQWE7QUFDYixjQUFjO0FBQ2QsaUZBQWlGO0FBQ2pGLGlGQUFpRjtBQUNqRixtQkFBbUI7QUFDbkIsMEJBQTBCO0FBQzFCLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IsdUVBQXVFO0FBQ3ZFLHlDQUF5QztBQUN6QywwQ0FBMEM7QUFDMUMsZUFBZTtBQUNmLDBEQUEwRDtBQUMxRCxxQkFBcUI7QUFDckIsdUNBQXVDO0FBQ3ZDLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsMkJBQTJCO0FBQzNCLDRCQUE0QjtBQUM1Qiw0Q0FBNEM7QUFDNUMsaUJBQWlCO0FBQ2pCLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsV0FBVztBQUNYLFVBQVU7QUFDVixPQUFPO0FBQ1AsS0FBSztBQUVMLDhCQUE4Qjs7O0FBRTZCO0FBRTNELE1BQU1JLGNBQWM7O0lBQ2xCLE1BQU0sQ0FBQ0MsY0FBY0MsZ0JBQWdCLEdBQUdMLCtDQUFRQSxDQUFDO0lBQ2pELE1BQU1NLGVBQWVMLDZDQUFNQSxDQUFpQjtJQUU1QyxNQUFNTSxxQkFBcUIsQ0FBQ0M7UUFDMUIsSUFDRUYsYUFBYUcsT0FBTyxJQUNwQixDQUFDSCxhQUFhRyxPQUFPLENBQUNDLFFBQVEsQ0FBQ0YsTUFBTUcsTUFBTSxHQUMzQztZQUNBQztRQUNGO0lBQ0Y7SUFFQSxNQUFNQyxnQkFBZ0I7UUFDcEJSLGdCQUFnQjtRQUNoQlMsU0FBU0MsZ0JBQWdCLENBQUMsU0FBU1I7SUFDckM7SUFFQSxNQUFNSyxpQkFBaUI7UUFDckJQLGdCQUFnQjtRQUNoQlMsU0FBU0UsbUJBQW1CLENBQUMsU0FBU1Q7SUFDeEM7SUFFQUwsZ0RBQVNBLENBQUM7UUFDUixPQUFPO1lBQ0xZLFNBQVNFLG1CQUFtQixDQUFDLFNBQVNUO1FBQ3hDO0lBQ0YsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNVO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTtnQkFBY0MsU0FBU047MEJBRXBDLDRFQUFDTztvQkFBSUMsS0FBSTtvQkFBa0JDLEtBQUk7Ozs7Ozs7Ozs7O1lBRWhDbEIsOEJBQ0MsOERBQUNhO2dCQUFJQyxXQUFVO2dCQUFhSyxLQUFLakI7O2tDQUMvQiw4REFBQ2tCO3dCQUFNQyxNQUFLO3dCQUFPQyxhQUFZOzs7Ozs7a0NBQy9CLDhEQUFDQzt3QkFBT1IsU0FBU1A7a0NBQWdCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0M7R0EzQ01UO0tBQUFBO0FBNkNOLCtEQUFlQSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC91dGlscy9zZWFyY2hJbnB1dC50c3g/YmFlYSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBcInVzZSBjbGllbnRcIjtcblxuLy8gaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG4vLyBpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbi8vIGltcG9ydCB7IGFkZFNlYXJjaERhdGEsIHNlYXJjaGVkbW92aWVzIH0gZnJvbSBcIi4uL3JlZHV4U3RvcmUvbW92aWVzU3RvcmVcIjtcbi8vIGltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuXG4vLyBjb25zdCBTZWFyY2hJbnB1dCA9ICgpID0+IHtcbi8vICAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuLy8gICBjb25zdCBbc2hvd1NlYXJjaEljb24sIHNldFNob3dTZWFyY2hJY29uXSA9IHVzZVN0YXRlKGZhbHNlKTtcbi8vICAgY29uc3QgZGlzcGF0Y2ggPSB1c2VEaXNwYXRjaCgpO1xuLy8gICBjb25zdCBtb3ZpZXMgPSB1c2VTZWxlY3Rvcigoc3RvcmU6IGFueSkgPT4gc3RvcmUubW92aWVzKTtcblxuLy8gICBjb25zdCBoYW5kbGVTZWFyY2hJY29uID0gKCkgPT4ge1xuLy8gICAgIHNldFNob3dTZWFyY2hJY29uKHRydWUpO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IHNldERhdGFJblNlYXJjaCA9IChldmVudDogYW55KSA9PiB7XG4vLyAgICAgc2V0U2VhcmNoKGV2ZW50Py50YXJnZXQudmFsdWUpO1xuLy8gICB9O1xuXG4vLyAgIGNvbnN0IHNldERhdGFJblJlZHV4ID0gKGV2ZW50OiBhbnkpID0+IHtcbi8vICAgICBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIikge1xuLy8gICAgICAgZGlzcGF0Y2goYWRkU2VhcmNoRGF0YShzZWFyY2gpKTtcbi8vICAgICAgIGZpbHRlck1vdmllcyhzZWFyY2gsIG1vdmllcyk7XG4vLyAgICAgfVxuLy8gICB9O1xuLy8gICBjb25zdCBoYW5kbGVTZWFyY2hWYWx1ZSA9ICgpID0+IHtcbi8vICAgICBkaXNwYXRjaChhZGRTZWFyY2hEYXRhKG51bGwpKTtcbi8vICAgICBkaXNwYXRjaChzZWFyY2hlZG1vdmllcyhudWxsKSk7XG4vLyAgICAgc2V0U2VhcmNoKFwiXCIpO1xuLy8gICB9O1xuXG4vLyAgIGZ1bmN0aW9uIGZpbHRlck1vdmllcyhzZWFyY2hTdHJpbmc6IGFueSwgbW92aWVzOiBhbnkpIHtcbi8vICAgICBjb25zdCBmaWx0ZXJlZE5vd1BsYXlpbmcgPSBmaWx0ZXJVbmlxdWVNb3ZpZXMoXG4vLyAgICAgICBtb3ZpZXM/Lm5vd1BsYXlpbmdNb3ZpZXMsXG4vLyAgICAgICBzZWFyY2hTdHJpbmdcbi8vICAgICApO1xuLy8gICAgIGNvbnN0IGZpbHRlcmVkUG9wdWxhciA9IGZpbHRlclVuaXF1ZU1vdmllcyhcbi8vICAgICAgIG1vdmllcz8ucG9wdWxhck1vdmllcyxcbi8vICAgICAgIHNlYXJjaFN0cmluZ1xuLy8gICAgICk7XG4vLyAgICAgY29uc3QgZmlsdGVyZWRUb3BSYXRlZCA9IGZpbHRlclVuaXF1ZU1vdmllcyhcbi8vICAgICAgIG1vdmllcz8udG9wUmF0ZWRNb3ZpZXMsXG4vLyAgICAgICBzZWFyY2hTdHJpbmdcbi8vICAgICApO1xuLy8gICAgIGNvbnN0IGZpbHRlcmVkTW92aWVzT2JqZWN0ID0gW1xuLy8gICAgICAgLi4uZmlsdGVyZWROb3dQbGF5aW5nLFxuLy8gICAgICAgLi4uZmlsdGVyZWRQb3B1bGFyLFxuLy8gICAgICAgLi4uZmlsdGVyZWRUb3BSYXRlZCxcbi8vICAgICBdO1xuLy8gICAgIGRpc3BhdGNoKHNlYXJjaGVkbW92aWVzKGZpbHRlcmVkTW92aWVzT2JqZWN0KSk7XG5cbi8vICAgICByZXR1cm4gZmlsdGVyZWRNb3ZpZXNPYmplY3Q7XG4vLyAgIH1cblxuLy8gICBmdW5jdGlvbiBmaWx0ZXJVbmlxdWVNb3ZpZXMobW92aWVzOiBhbnlbXSB8IHVuZGVmaW5lZCwgc2VhcmNoU3RyaW5nOiBzdHJpbmcpIHtcbi8vICAgICBjb25zdCB1bmlxdWVNb3ZpZXM6IHsgW2tleTogc3RyaW5nXTogYW55IH0gPSB7fTtcbi8vICAgICByZXR1cm4gKFxuLy8gICAgICAgbW92aWVzPy5maWx0ZXIoKG1vdmllOiBhbnkpID0+IHtcbi8vICAgICAgICAgaWYgKCF1bmlxdWVNb3ZpZXNbbW92aWUuaWRdKSB7XG4vLyAgICAgICAgICAgdW5pcXVlTW92aWVzW21vdmllLmlkXSA9IHRydWU7XG4vLyAgICAgICAgICAgcmV0dXJuIG1vdmllLnRpdGxlLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLnRvTG93ZXJDYXNlKCkpO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiBmYWxzZTtcbi8vICAgICAgIH0pIHx8IFtdXG4vLyAgICAgKTtcbi8vICAgfVxuXG4vLyAgIHJldHVybiAoXG4vLyAgICAgPD5cbi8vICAgICAgIHshc2hvd1NlYXJjaEljb24gPyAoXG4vLyAgICAgICAgIDxJbWFnZVxuLy8gICAgICAgICAgIHNyYz1cIi9zZWFyY2gucG5nXCJcbi8vICAgICAgICAgICBhbHQ9XCJzZWFyY2gtaWNvblwiXG4vLyAgICAgICAgICAgd2lkdGg9ezE1fVxuLy8gICAgICAgICAgIGhlaWdodD17MTV9XG4vLyAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2VhcmNoSWNvbn1cbi8vICAgICAgICAgLz5cbi8vICAgICAgICkgOiAoXG4vLyAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm91bmRlZCBib3JkZXIgcHktWzJweF0gcHgtMiBmbGV4IGdhcC0yIGl0ZW1zLWNlbnRlclwiPlxuLy8gICAgICAgICAgIDxJbWFnZSBzcmM9XCIvc2VhcmNoLnBuZ1wiIGFsdD1cInNlYXJjaC1pY29uXCIgd2lkdGg9ezE1fSBoZWlnaHQ9ezE1fSAvPlxuLy8gICAgICAgICAgIDxpbnB1dFxuLy8gICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuLy8gICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2hcIlxuLy8gICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbi8vICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXRyYW5zcGFyZW50IGZvY3VzOm91dGxpbmUtbm9uZSB0ZXh0LXdoaXRlXCJcbi8vICAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXREYXRhSW5TZWFyY2h9XG4vLyAgICAgICAgICAgICBvbktleVByZXNzPXtzZXREYXRhSW5SZWR1eH1cbi8vICAgICAgICAgICAvPlxuLy8gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIHRleHQtd2hpdGUgIGN1cnNvci1wb2ludGVyXCI+XG4vLyAgICAgICAgICAgICA8SW1hZ2Vcbi8vICAgICAgICAgICAgICAgc3JjPVwiL2Nsb3NlLXdoaXRlLnBuZ1wiXG4vLyAgICAgICAgICAgICAgIGFsdD1cImNhbmNlbFwiXG4vLyAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBcIlxuLy8gICAgICAgICAgICAgICB3aWR0aD17MTV9XG4vLyAgICAgICAgICAgICAgIGhlaWdodD17MTV9XG4vLyAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlYXJjaFZhbHVlfVxuLy8gICAgICAgICAgICAgLz5cbi8vICAgICAgICAgICA8L2Rpdj5cbi8vICAgICAgICAgPC9kaXY+XG4vLyAgICAgICApfVxuLy8gICAgIDwvPlxuLy8gICApO1xuLy8gfTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgU2VhcmNoSW5wdXQ7XG5cInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgU2VhcmNoSW5wdXQgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc1NlYXJjaE9wZW4sIHNldElzU2VhcmNoT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHNlYXJjaEJveFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlT3V0c2lkZUNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKFxuICAgICAgc2VhcmNoQm94UmVmLmN1cnJlbnQgJiZcbiAgICAgICFzZWFyY2hCb3hSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQgYXMgTm9kZSlcbiAgICApIHtcbiAgICAgIGNsb3NlU2VhcmNoQm94KCk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IG9wZW5TZWFyY2hCb3ggPSAoKSA9PiB7XG4gICAgc2V0SXNTZWFyY2hPcGVuKHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVPdXRzaWRlQ2xpY2spO1xuICB9O1xuXG4gIGNvbnN0IGNsb3NlU2VhcmNoQm94ID0gKCkgPT4ge1xuICAgIHNldElzU2VhcmNoT3BlbihmYWxzZSk7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZU91dHNpZGVDbGljayk7XG4gICAgfTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaC1pY29uXCIgb25DbGljaz17b3BlblNlYXJjaEJveH0+XG4gICAgICAgIHsvKiBZb3VyIHNlYXJjaCBpY29uIGltYWdlIGdvZXMgaGVyZSAqL31cbiAgICAgICAgPGltZyBzcmM9XCJzZWFyY2gtaWNvbi5wbmdcIiBhbHQ9XCJTZWFyY2hcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICB7aXNTZWFyY2hPcGVuICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2gtYm94XCIgcmVmPXtzZWFyY2hCb3hSZWZ9PlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2Nsb3NlU2VhcmNoQm94fT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2hJbnB1dDtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwidXNlRWZmZWN0IiwiU2VhcmNoSW5wdXQiLCJpc1NlYXJjaE9wZW4iLCJzZXRJc1NlYXJjaE9wZW4iLCJzZWFyY2hCb3hSZWYiLCJoYW5kbGVPdXRzaWRlQ2xpY2siLCJldmVudCIsImN1cnJlbnQiLCJjb250YWlucyIsInRhcmdldCIsImNsb3NlU2VhcmNoQm94Iiwib3BlblNlYXJjaEJveCIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwiaW1nIiwic3JjIiwiYWx0IiwicmVmIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/utils/searchInput.tsx\n"));

/***/ })

});
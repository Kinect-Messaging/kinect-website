"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(default)/layout",{

/***/ "(app-pages-browser)/./components/ui/header.tsx":
/*!**********************************!*\
  !*** ./components/ui/header.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Header; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo */ \"(app-pages-browser)/./components/ui/logo.tsx\");\n/* harmony import */ var _darkLogo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkLogo */ \"(app-pages-browser)/./components/ui/darkLogo.tsx\");\n/* harmony import */ var _mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobile-menu */ \"(app-pages-browser)/./components/ui/mobile-menu.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SliderComponent = ()=>{\n    _s();\n    const [value, setValue] = useState(minValue);\n    const [inputValue, setInputValue] = useState(minValue.toString());\n    const handleInputChange = (e)=>{\n        const v = e.target.value;\n        if (!isNaN(Number(v))) {\n            setInputValue(v);\n        }\n    };\n    const handleInputKeyDown = (e)=>{\n        if (e.key === \"Enter\") {\n            const numericValue = Number(inputValue);\n            if (!isNaN(numericValue)) {\n                if (numericValue < minValue) {\n                    setValue(minValue);\n                    setInputValue(minValue.toString());\n                } else if (numericValue > maxValue) {\n                    setValue(maxValue);\n                    setInputValue(maxValue.toString());\n                } else {\n                    setValue(numericValue);\n                }\n            }\n        }\n    };\n    const handleChange = (value)=>{\n        setValue(value);\n        setInputValue(value.toString());\n    };\n    // Callback to update premiumCost in the parent component\n    // useEffect(() => {\n    //   if (value > 10000) {\n    //     setPremiumCost(value * 0.005);\n    //   } else {\n    //     setPremiumCost(defPremCost)\n    //   }\n    // }, [value]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full max-w-lg mx-auto\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Slider, {\n                label: \"Email Count\",\n                size: \"md\",\n                step: 10000,\n                maxValue: maxValue,\n                minValue: minValue,\n                color: \"foreground\",\n                classNames: {\n                    base: \"max-w-lg\",\n                    label: \"text-medium\"\n                },\n                renderValue: (param)=>{\n                    let { children, ...props } = param;\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"output\", {\n                        ...props,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tooltip, {\n                            className: \"text-tiny text-default-500 rounded-md\",\n                            content: \"Press Enter to confirm\",\n                            placement: \"left\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: \"px-1 py-0.5 w-20 text-right text-small text-default-700 font-medium bg-default-100 outline-none transition-colors rounded-small border-medium border-transparent hover:border-primary focus:border-primary\",\n                                type: \"text\",\n                                \"aria-label\": \"Email Count value\",\n                                value: inputValue,\n                                onChange: handleInputChange,\n                                onKeyDown: handleInputKeyDown\n                            }, void 0, false, {\n                                fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                lineNumber: 73,\n                                columnNumber: 17\n                            }, void 0)\n                        }, void 0, false, {\n                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                            lineNumber: 68,\n                            columnNumber: 15\n                        }, void 0)\n                    }, void 0, false, {\n                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, void 0);\n                },\n                value: value,\n                onChange: handleChange\n            }, void 0, false, {\n                fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                lineNumber: 55,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n            lineNumber: 54,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n        lineNumber: 53,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SliderComponent, \"d3NIfpqycGBvxS0ZeoOaAyowSgE=\");\n_c = SliderComponent;\nfunction Header(param) {\n    let { mode = \"light\" } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n        className: \"absolute w-full z-30 \".concat(mode !== \"light\" ? \"dark\" : \"\"),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"max-w-6xl mx-auto px-5 sm:px-6\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex items-center justify-between h-16 md:h-20\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"shrink-0 mr-4\",\n                        children: mode === \"light\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_darkLogo__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 33\n                        }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_logo__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 48\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                        lineNumber: 101,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n                        className: \"hidden md:flex md:grow\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex grow justify-start flex-wrap items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/features\",\n                                            className: \"font-medium text-slate-800 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out\",\n                                            children: \"Features\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                        lineNumber: 112,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                        href: \"/404\",\n                                        className: \"font-medium text-slate-800 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out\",\n                                        children: \"Developers\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                        lineNumber: 115,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/pricing\",\n                                            className: \"font-medium text-slate-800 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out\",\n                                            children: \"Pricing\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                            lineNumber: 127,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                        lineNumber: 126,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/about\",\n                                            className: \"font-medium text-slate-800 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out\",\n                                            children: \"About\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                            lineNumber: 131,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                                className: \"flex grow justify-end flex-wrap items-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/request-demo\",\n                                            className: \"font-medium text-blue-600 dark:text-slate-300 dark:hover:text-white px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out group\",\n                                            children: [\n                                                \"Request Demo \",\n                                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                                    className: \"tracking-normal text-blue-600 group-hover:translate-x-0.5 transition-transform duration-150 ease-in-out ml-1\",\n                                                    children: \"->\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                                    lineNumber: 139,\n                                                    columnNumber: 32\n                                                }, this)\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                            lineNumber: 138,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                            href: \"/signin\",\n                                            className: \"font-medium text-slate-800 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-600 px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out\",\n                                            children: \"Sign in\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                            lineNumber: 143,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                        lineNumber: 142,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                                lineNumber: 136,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mobile_menu__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                        lineNumber: 149,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n                lineNumber: 98,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n            lineNumber: 97,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/pragnathc163/Desktop/code/kinect/kinect-website/components/ui/header.tsx\",\n        lineNumber: 96,\n        columnNumber: 5\n    }, this);\n}\n_c1 = Header;\nvar _c, _c1;\n$RefreshReg$(_c, \"SliderComponent\");\n$RefreshReg$(_c1, \"Header\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvdWkvaGVhZGVyLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBNEI7QUFDSDtBQUNRO0FBRUs7QUFFdEMsTUFBTUksa0JBQTRCOztJQUVoQyxNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR0MsU0FBU0M7SUFDbkMsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdILFNBQVNDLFNBQVNHLFFBQVE7SUFFOUQsTUFBTUMsb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU1DLElBQUlELEVBQUVFLE1BQU0sQ0FBQ1YsS0FBSztRQUV4QixJQUFJLENBQUNXLE1BQU1DLE9BQU9ILEtBQUs7WUFDckJKLGNBQWNJO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNSSxxQkFBcUIsQ0FBQ0w7UUFDMUIsSUFBSUEsRUFBRU0sR0FBRyxLQUFLLFNBQVM7WUFDckIsTUFBTUMsZUFBZUgsT0FBT1I7WUFFNUIsSUFBSSxDQUFDTyxNQUFNSSxlQUFlO2dCQUN4QixJQUFJQSxlQUFlWixVQUFVO29CQUMzQkYsU0FBU0U7b0JBQ1RFLGNBQWNGLFNBQVNHLFFBQVE7Z0JBQ2pDLE9BQU8sSUFBSVMsZUFBZUMsVUFBVTtvQkFDbENmLFNBQVNlO29CQUNUWCxjQUFjVyxTQUFTVixRQUFRO2dCQUNqQyxPQUFPO29CQUNMTCxTQUFTYztnQkFDWDtZQUNGO1FBQ0Y7SUFDRjtJQUVBLE1BQU1FLGVBQWUsQ0FBQ2pCO1FBQ3BCQyxTQUFTRDtRQUNUSyxjQUFjTCxNQUFNTSxRQUFRO0lBQzlCO0lBRUEseURBQXlEO0lBQ3pELG9CQUFvQjtJQUNwQix5QkFBeUI7SUFDekIscUNBQXFDO0lBQ3JDLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsTUFBTTtJQUNOLGVBQWU7SUFFZixxQkFDRSw4REFBQ1k7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0Q7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ0M7Z0JBQ0NDLE9BQU07Z0JBQ05DLE1BQUs7Z0JBQ0xDLE1BQU07Z0JBQ05QLFVBQVVBO2dCQUNWYixVQUFVQTtnQkFDVnFCLE9BQU07Z0JBQ05DLFlBQVk7b0JBQ1ZDLE1BQU07b0JBQ05MLE9BQU87Z0JBQ1Q7Z0JBQ0FNLGFBQWE7d0JBQUMsRUFBRUMsUUFBUSxFQUFFLEdBQUdDLE9BQU87eUNBQ2xDLDhEQUFDQzt3QkFBUSxHQUFHRCxLQUFLO2tDQUNmLDRFQUFDRTs0QkFDQ1osV0FBVTs0QkFDVmEsU0FBUTs0QkFDUkMsV0FBVTtzQ0FFViw0RUFBQ0M7Z0NBQ0NmLFdBQVU7Z0NBQ1ZnQixNQUFLO2dDQUNMQyxjQUFXO2dDQUNYcEMsT0FBT0k7Z0NBQ1BpQyxVQUFVOUI7Z0NBQ1YrQixXQUFXekI7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQUtuQmIsT0FBT0E7Z0JBQ1BxQyxVQUFVcEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLcEI7R0FuRk1sQjtLQUFBQTtBQXFGUyxTQUFTd0MsT0FBTyxLQUU5QjtRQUY4QixFQUFFQyxPQUFPLE9BQU8sRUFFOUMsR0FGOEI7SUFHN0IscUJBQ0UsOERBQUNDO1FBQU90QixXQUFXLHdCQUF1RCxPQUEvQnFCLFNBQVMsVUFBVSxTQUFTO2tCQUNyRSw0RUFBQ3RCO1lBQUlDLFdBQVU7c0JBQ2IsNEVBQUNEO2dCQUFJQyxXQUFVOztrQ0FHYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBR1pxQixTQUFTLHdCQUFVLDhEQUFDM0MsaURBQVFBOzs7O2lEQUFNLDhEQUFDRCw2Q0FBSUE7Ozs7Ozs7Ozs7a0NBSTFDLDhEQUFDOEM7d0JBQUl2QixXQUFVOzswQ0FHYiw4REFBQ3dCO2dDQUFHeEIsV0FBVTs7a0RBQ1osOERBQUN5QjtrREFDQyw0RUFBQ2pELGtEQUFJQTs0Q0FBQ2tELE1BQUs7NENBQVkxQixXQUFVO3NEQUFzSzs7Ozs7Ozs7Ozs7a0RBRXpNLDhEQUFDeEIsa0RBQUlBO3dDQUFDa0QsTUFBSzt3Q0FBTzFCLFdBQVU7a0RBQXNLOzs7Ozs7a0RBV2xNLDhEQUFDeUI7a0RBQ0MsNEVBQUNqRCxrREFBSUE7NENBQUNrRCxNQUFLOzRDQUFXMUIsV0FBVTtzREFBc0s7Ozs7Ozs7Ozs7O2tEQUd4TSw4REFBQ3lCO2tEQUNDLDRFQUFDakQsa0RBQUlBOzRDQUFDa0QsTUFBSzs0Q0FBUzFCLFdBQVU7c0RBQXNLOzs7Ozs7Ozs7Ozs7Ozs7OzswQ0FLeE0sOERBQUN3QjtnQ0FBR3hCLFdBQVU7O2tEQUNaLDhEQUFDeUI7a0RBQ0MsNEVBQUNqRCxrREFBSUE7NENBQUNrRCxNQUFLOzRDQUFnQjFCLFdBQVU7O2dEQUFvSjs4REFDMUssOERBQUMyQjtvREFBSzNCLFdBQVU7OERBQStHOzs7Ozs7Ozs7Ozs7Ozs7OztrREFHaEosOERBQUN5QjtrREFDQyw0RUFBQ2pELGtEQUFJQTs0Q0FBQ2tELE1BQUs7NENBQVUxQixXQUFVO3NEQUFzSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBTTNNLDhEQUFDckIsb0RBQVVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckI7TUEvRHdCeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91aS9oZWFkZXIudHN4P2U2NTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IExvZ28gZnJvbSAnLi9sb2dvJ1xuaW1wb3J0IERhcmtMb2dvIGZyb20gJy4vZGFya0xvZ28nXG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnQC9jb21wb25lbnRzL3V0aWxzL2Ryb3Bkb3duJ1xuaW1wb3J0IE1vYmlsZU1lbnUgZnJvbSAnLi9tb2JpbGUtbWVudSdcblxuY29uc3QgU2xpZGVyQ29tcG9uZW50OiBSZWFjdC5GQyA9ICgpID0+IHtcblxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKG1pblZhbHVlKTtcbiAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUobWluVmFsdWUudG9TdHJpbmcoKSk7XG5cbiAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcbiAgICBjb25zdCB2ID0gZS50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAoIWlzTmFOKE51bWJlcih2KSkpIHtcbiAgICAgIHNldElucHV0VmFsdWUodik7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUlucHV0S2V5RG93biA9IChlOiBSZWFjdC5LZXlib2FyZEV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGNvbnN0IG51bWVyaWNWYWx1ZSA9IE51bWJlcihpbnB1dFZhbHVlKTtcblxuICAgICAgaWYgKCFpc05hTihudW1lcmljVmFsdWUpKSB7XG4gICAgICAgIGlmIChudW1lcmljVmFsdWUgPCBtaW5WYWx1ZSkge1xuICAgICAgICAgIHNldFZhbHVlKG1pblZhbHVlKTtcbiAgICAgICAgICBzZXRJbnB1dFZhbHVlKG1pblZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9IGVsc2UgaWYgKG51bWVyaWNWYWx1ZSA+IG1heFZhbHVlKSB7XG4gICAgICAgICAgc2V0VmFsdWUobWF4VmFsdWUpO1xuICAgICAgICAgIHNldElucHV0VmFsdWUobWF4VmFsdWUudG9TdHJpbmcoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2V0VmFsdWUobnVtZXJpY1ZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2UgPSAodmFsdWU6IFNldFN0YXRlQWN0aW9uPG51bWJlcj4pID0+IHtcbiAgICBzZXRWYWx1ZSh2YWx1ZSk7XG4gICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZS50b1N0cmluZygpKTtcbiAgfTtcblxuICAvLyBDYWxsYmFjayB0byB1cGRhdGUgcHJlbWl1bUNvc3QgaW4gdGhlIHBhcmVudCBjb21wb25lbnRcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcbiAgLy8gICBpZiAodmFsdWUgPiAxMDAwMCkge1xuICAvLyAgICAgc2V0UHJlbWl1bUNvc3QodmFsdWUgKiAwLjAwNSk7XG4gIC8vICAgfSBlbHNlIHtcbiAgLy8gICAgIHNldFByZW1pdW1Db3N0KGRlZlByZW1Db3N0KVxuICAvLyAgIH1cbiAgLy8gfSwgW3ZhbHVlXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIG1heC13LWxnIG14LWF1dG9cIj5cbiAgICAgICAgPFNsaWRlclxuICAgICAgICAgIGxhYmVsPVwiRW1haWwgQ291bnRcIlxuICAgICAgICAgIHNpemU9XCJtZFwiXG4gICAgICAgICAgc3RlcD17MTAwMDB9XG4gICAgICAgICAgbWF4VmFsdWU9e21heFZhbHVlfVxuICAgICAgICAgIG1pblZhbHVlPXttaW5WYWx1ZX1cbiAgICAgICAgICBjb2xvcj1cImZvcmVncm91bmRcIlxuICAgICAgICAgIGNsYXNzTmFtZXM9e3tcbiAgICAgICAgICAgIGJhc2U6IFwibWF4LXctbGdcIixcbiAgICAgICAgICAgIGxhYmVsOiBcInRleHQtbWVkaXVtXCIsXG4gICAgICAgICAgfX1cbiAgICAgICAgICByZW5kZXJWYWx1ZT17KHsgY2hpbGRyZW4sIC4uLnByb3BzIH0pID0+IChcbiAgICAgICAgICAgIDxvdXRwdXQgey4uLnByb3BzfT5cbiAgICAgICAgICAgICAgPFRvb2x0aXBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXRpbnkgdGV4dC1kZWZhdWx0LTUwMCByb3VuZGVkLW1kXCJcbiAgICAgICAgICAgICAgICBjb250ZW50PVwiUHJlc3MgRW50ZXIgdG8gY29uZmlybVwiXG4gICAgICAgICAgICAgICAgcGxhY2VtZW50PVwibGVmdFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTEgcHktMC41IHctMjAgdGV4dC1yaWdodCB0ZXh0LXNtYWxsIHRleHQtZGVmYXVsdC03MDAgZm9udC1tZWRpdW0gYmctZGVmYXVsdC0xMDAgb3V0bGluZS1ub25lIHRyYW5zaXRpb24tY29sb3JzIHJvdW5kZWQtc21hbGwgYm9yZGVyLW1lZGl1bSBib3JkZXItdHJhbnNwYXJlbnQgaG92ZXI6Ym9yZGVyLXByaW1hcnkgZm9jdXM6Ym9yZGVyLXByaW1hcnlcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIkVtYWlsIENvdW50IHZhbHVlXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVJbnB1dEtleURvd259XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9Ub29sdGlwPlxuICAgICAgICAgICAgPC9vdXRwdXQ+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKHsgbW9kZSA9ICdsaWdodCcgfToge1xuICBtb2RlPzogc3RyaW5nXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGhlYWRlciBjbGFzc05hbWU9e2BhYnNvbHV0ZSB3LWZ1bGwgei0zMCAke21vZGUgIT09ICdsaWdodCcgPyAnZGFyaycgOiAnJ31gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXctNnhsIG14LWF1dG8gcHgtNSBzbTpweC02XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGgtMTYgbWQ6aC0yMFwiPlxuXG4gICAgICAgICAgey8qIFNpdGUgYnJhbmRpbmcgKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaHJpbmstMCBtci00XCI+XG4gICAgICAgICAgICB7LyogPExvZ28gLz4gKi99XG4gICAgICAgICAgICB7LyogPERhcmtMb2dvIC8+ICovfVxuICAgICAgICAgICAge21vZGUgPT09ICdsaWdodCcgPyA8RGFya0xvZ28gLz4gOiA8TG9nbyAvPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHsvKiBEZXNrdG9wIG5hdmlnYXRpb24gKi99XG4gICAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6ZmxleCBtZDpncm93XCI+XG5cbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIG1lbnUgbGlua3MgKi99XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBncm93IGp1c3RpZnktc3RhcnQgZmxleC13cmFwIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mZWF0dXJlc1wiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc2xhdGUtODAwIGhvdmVyOnRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTMwMCBkYXJrOmhvdmVyOnRleHQtYmx1ZS02MDAgcHgtMyBsZzpweC01IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5GZWF0dXJlczwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi80MDRcIiBjbGFzc05hbWU9XCJmb250LW1lZGl1bSB0ZXh0LXNsYXRlLTgwMCBob3Zlcjp0ZXh0LWJsdWUtNjAwIGRhcms6dGV4dC1zbGF0ZS0zMDAgZGFyazpob3Zlcjp0ZXh0LWJsdWUtNjAwIHB4LTMgbGc6cHgtNSBweS0yIGZsZXggaXRlbXMtY2VudGVyIHRyYW5zaXRpb24gZHVyYXRpb24tMTUwIGVhc2UtaW4tb3V0XCI+RGV2ZWxvcGVyczwvTGluaz5cbiAgICAgICAgICAgICAgey8qIDFzdCBsZXZlbDogaG92ZXIgKi99XG4gICAgICAgICAgICAgIHsvKiA8RHJvcGRvd24gdGl0bGU9XCJEZXZlbG9wZXJzXCI+ICovfVxuICAgICAgICAgICAgICB7LyogMm5kIGxldmVsOiBob3ZlciAqL31cbiAgICAgICAgICAgICAgey8qIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvNDA0XCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbSB0ZXh0LWdyYXktNjAwIGhvdmVyOnRleHQtZ3JheS05MDAgZmxleCBweS0yIHB4LTUgbGVhZGluZy10aWdodFwiPjQwNDwvTGluaz5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc3VwcG9ydFwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc20gdGV4dC1ncmF5LTYwMCBob3Zlcjp0ZXh0LWdyYXktOTAwIGZsZXggcHktMiBweC01IGxlYWRpbmctdGlnaHRcIj5TdXBwb3J0PC9MaW5rPlxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvRHJvcGRvd24+ICovfVxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcmljaW5nXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS04MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtc2xhdGUtMzAwIGRhcms6aG92ZXI6dGV4dC1ibHVlLTYwMCBweC0zIGxnOnB4LTUgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dFwiPlByaWNpbmc8L0xpbms+XG4gICAgICAgICAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvNDA0XCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS04MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtc2xhdGUtMzAwIGRhcms6aG92ZXI6dGV4dC1ibHVlLTYwMCBweC0zIGxnOnB4LTUgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dFwiPlByaWNpbmc8L0xpbms+ICovfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiIGNsYXNzTmFtZT1cImZvbnQtbWVkaXVtIHRleHQtc2xhdGUtODAwIGhvdmVyOnRleHQtYmx1ZS02MDAgZGFyazp0ZXh0LXNsYXRlLTMwMCBkYXJrOmhvdmVyOnRleHQtYmx1ZS02MDAgcHgtMyBsZzpweC01IHB5LTIgZmxleCBpdGVtcy1jZW50ZXIgdHJhbnNpdGlvbiBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXRcIj5BYm91dDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICAgIHsvKiBEZXNrdG9wIHNpZ24gaW4gbGlua3MgKi99XG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBncm93IGp1c3RpZnktZW5kIGZsZXgtd3JhcCBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVxdWVzdC1kZW1vXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtc2xhdGUtMzAwIGRhcms6aG92ZXI6dGV4dC13aGl0ZSBweC0zIGxnOnB4LTUgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dCBncm91cFwiPlxuICAgICAgICAgICAgICAgICAgUmVxdWVzdCBEZW1vIDxzcGFuIGNsYXNzTmFtZT1cInRyYWNraW5nLW5vcm1hbCB0ZXh0LWJsdWUtNjAwIGdyb3VwLWhvdmVyOnRyYW5zbGF0ZS14LTAuNSB0cmFuc2l0aW9uLXRyYW5zZm9ybSBkdXJhdGlvbi0xNTAgZWFzZS1pbi1vdXQgbWwtMVwiPi0mZ3Q7PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2lnbmluXCIgY2xhc3NOYW1lPVwiZm9udC1tZWRpdW0gdGV4dC1zbGF0ZS04MDAgaG92ZXI6dGV4dC1ibHVlLTYwMCBkYXJrOnRleHQtc2xhdGUtMzAwIGRhcms6aG92ZXI6dGV4dC1ibHVlLTYwMCBweC0zIGxnOnB4LTUgcHktMiBmbGV4IGl0ZW1zLWNlbnRlciB0cmFuc2l0aW9uIGR1cmF0aW9uLTE1MCBlYXNlLWluLW91dFwiPlNpZ24gaW48L0xpbms+XG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPC9uYXY+XG5cbiAgICAgICAgICA8TW9iaWxlTWVudSAvPlxuXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9oZWFkZXI+XG4gIClcbn1cbiJdLCJuYW1lcyI6WyJMaW5rIiwiTG9nbyIsIkRhcmtMb2dvIiwiTW9iaWxlTWVudSIsIlNsaWRlckNvbXBvbmVudCIsInZhbHVlIiwic2V0VmFsdWUiLCJ1c2VTdGF0ZSIsIm1pblZhbHVlIiwiaW5wdXRWYWx1ZSIsInNldElucHV0VmFsdWUiLCJ0b1N0cmluZyIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInYiLCJ0YXJnZXQiLCJpc05hTiIsIk51bWJlciIsImhhbmRsZUlucHV0S2V5RG93biIsImtleSIsIm51bWVyaWNWYWx1ZSIsIm1heFZhbHVlIiwiaGFuZGxlQ2hhbmdlIiwiZGl2IiwiY2xhc3NOYW1lIiwiU2xpZGVyIiwibGFiZWwiLCJzaXplIiwic3RlcCIsImNvbG9yIiwiY2xhc3NOYW1lcyIsImJhc2UiLCJyZW5kZXJWYWx1ZSIsImNoaWxkcmVuIiwicHJvcHMiLCJvdXRwdXQiLCJUb29sdGlwIiwiY29udGVudCIsInBsYWNlbWVudCIsImlucHV0IiwidHlwZSIsImFyaWEtbGFiZWwiLCJvbkNoYW5nZSIsIm9uS2V5RG93biIsIkhlYWRlciIsIm1vZGUiLCJoZWFkZXIiLCJuYXYiLCJ1bCIsImxpIiwiaHJlZiIsInNwYW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/ui/header.tsx\n"));

/***/ })

});
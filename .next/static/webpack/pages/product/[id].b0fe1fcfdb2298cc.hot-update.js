"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/product/[id]",{

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_sliced_to_array.mjs */ \"./node_modules/@swc/helpers/src/_sliced_to_array.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/ProductSummary/ProductSummary */ \"./components/ProductSummary/ProductSummary.tsx\");\n\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\n\n\nvar ProductItem = function() {\n    _s();\n    var query = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)().query;\n    var ref = (0,_swc_helpers_src_sliced_to_array_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(react__WEBPACK_IMPORTED_MODULE_1__.useState < TProduct | null > null, 2), product = ref[0], setProduct = ref[1];\n    useEffect(function() {\n        if (query.id) {\n            window.fetch(\"/api/avo/\".concat(query.id)).then(function(response) {\n                return response.json();\n            }).then(function(data) {\n                setProduct(data);\n            });\n        }\n    }, [\n        query.id\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: product == null ? null : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ProductSummary_ProductSummary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n            product: product\n        }, void 0, false, {\n            fileName: \"/home/davidvz/personalProjects/frontend/nextjs/pages/product/[id].js\",\n            lineNumber: 23,\n            columnNumber: 39\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/davidvz/personalProjects/frontend/nextjs/pages/product/[id].js\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, _this);\n};\n_s(ProductItem, \"6Ckf7DjEUpFEIfRTADr3HRX+2CU=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ProductItem;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);\nvar _c;\n$RefreshReg$(_c, \"ProductItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0L1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7QUFBdUM7QUFDQTtBQUUrQjtBQUV0RSxJQUFNSSxXQUFXLEdBQUcsV0FBTTs7SUFDdEIsSUFBTSxLQUFPLEdBQUtGLHNEQUFTLEVBQUUsQ0FBckJHLEtBQUs7SUFDYixJQUE4QixHQUFxQyxvRkFBckMsMkNBQVMsR0FBR0MsUUFBUSxHQUFLLElBQUksR0FBRyxJQUFJLElBQUMsRUFBNURDLE9BQU8sR0FBZ0IsR0FBcUMsR0FBckQsRUFBRUMsVUFBVSxHQUFJLEdBQXFDLEdBQXpDO0lBRTFCQyxTQUFTLENBQUMsV0FBTTtRQUNaLElBQUlKLEtBQUssQ0FBQ0ssRUFBRSxFQUFFO1lBQ1ZDLE1BQU0sQ0FDREMsS0FBSyxDQUFDLFdBQVUsQ0FBVyxPQUFUUCxLQUFLLENBQUNLLEVBQUUsQ0FBRSxDQUFDLENBQzdCRyxJQUFJLENBQUMsU0FBQ0MsUUFBUTt1QkFBS0EsUUFBUSxDQUFDQyxJQUFJLEVBQUU7YUFBQSxDQUFDLENBQ25DRixJQUFJLENBQUMsU0FBQ0csSUFBSSxFQUFLO2dCQUNaUixVQUFVLENBQUNRLElBQUksQ0FBQztZQUNwQixDQUFDLENBQUM7UUFDVixDQUFDO0lBQ0wsQ0FBQyxFQUFFO1FBQUNYLEtBQUssQ0FBQ0ssRUFBRTtLQUFDLENBQUM7SUFFZCxxQkFDSSw4REFBQ08sS0FBRztrQkFDQ1YsT0FBTyxJQUFJLElBQUksR0FBRyxJQUFJLGlCQUFHLDhEQUFDSixpRkFBYztZQUFDSSxPQUFPLEVBQUVBLE9BQU87Ozs7O2lCQUFJOzs7OzthQUM1RCxDQUNUO0FBQ0wsQ0FBQztHQXBCS0gsV0FBVzs7UUFDS0Ysa0RBQVM7OztBQUR6QkUsS0FBQUEsV0FBVztBQXNCakIsK0RBQWVBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdC9baWRdLmpzP2Y2ODUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcblxuaW1wb3J0IFByb2R1Y3RTdW1tYXJ5IGZyb20gJ0Bjb21wb25lbnRzL1Byb2R1Y3RTdW1tYXJ5L1Byb2R1Y3RTdW1tYXJ5J1xuXG5jb25zdCBQcm9kdWN0SXRlbSA9ICgpID0+IHtcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFtwcm9kdWN0LCBzZXRQcm9kdWN0XSA9ICh1c2VTdGF0ZSA8IFRQcm9kdWN0KSB8IChudWxsID4gbnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGlmIChxdWVyeS5pZCkge1xuICAgICAgICAgICAgd2luZG93XG4gICAgICAgICAgICAgICAgLmZldGNoKGAvYXBpL2F2by8ke3F1ZXJ5LmlkfWApXG4gICAgICAgICAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAgICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2V0UHJvZHVjdChkYXRhKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LCBbcXVlcnkuaWRdKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHtwcm9kdWN0ID09IG51bGwgPyBudWxsIDogPFByb2R1Y3RTdW1tYXJ5IHByb2R1Y3Q9e3Byb2R1Y3R9IC8+fVxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsIlByb2R1Y3RTdW1tYXJ5IiwiUHJvZHVjdEl0ZW0iLCJxdWVyeSIsIlRQcm9kdWN0IiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VFZmZlY3QiLCJpZCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n"));

/***/ })

});
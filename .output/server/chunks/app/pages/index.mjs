function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var pages = {};

var ids = pages.ids = [3];
var modules = pages.modules = {
  59: function(module, exports2, __webpack_require__) {
    var content = __webpack_require__(62);
    if (content.__esModule)
      content = content.default;
    if (typeof content === "string")
      content = [[module.i, content, ""]];
    if (content.locals)
      module.exports = content.locals;
    var add = __webpack_require__(8).default;
    module.exports.__inject__ = function(context) {
      add("2838a372", content, true, context);
    };
  },
  61: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_39_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_js_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(59);
    for (var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_39_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_js_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__)
      if (["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0)
        (function(key) {
          __webpack_require__.d(__webpack_exports__, key, function() {
            return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_39_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_nuxt_postcss8_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_nuxt_postcss8_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_windicss_webpack_plugin_dist_loaders_windicss_template_js_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_14_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_38_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key];
          });
        })(__WEBPACK_IMPORT_KEY__);
  },
  62: function(module, exports2, __webpack_require__) {
    var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(7);
    var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i) {
      return i[1];
    });
    ___CSS_LOADER_EXPORT___.push([module.i, "body,html{height:100%}", ""]);
    ___CSS_LOADER_EXPORT___.locals = {};
    module.exports = ___CSS_LOADER_EXPORT___;
  },
  66: function(module, __webpack_exports__, __webpack_require__) {
    __webpack_require__.r(__webpack_exports__);
    var render = function() {
      var _vm = this;
      var _h = _vm.$createElement;
      var _c = _vm._self._c || _h;
      return _c("div", { staticClass: "bg-red-300 w-full flex flex-col h-screen items-center justify-center px-4 py-4" }, [_vm._ssrNode('<p class="text-white text-2xl">Should be initially white</p> <div class="flex mt-4"><div class="h-8 w-8 bg-green-400 mr-2"></div> <div class="h-8 w-8 bg-blue-400 mr-2"></div> <div class="h-8 w-8 bg-yellow-400"></div></div>')]);
    };
    var staticRenderFns = [];
    var componentNormalizer = __webpack_require__(4);
    var script = {};
    function injectStyles(context) {
      var style0 = __webpack_require__(61);
      if (style0.__inject__)
        style0.__inject__(context);
    }
    var component = Object(componentNormalizer["a"])(script, render, staticRenderFns, false, injectStyles, null, "5cc70701");
    __webpack_exports__["default"] = component.exports;
  }
};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': pages,
  ids: ids,
  modules: modules
}, [pages]));

export { index as i };

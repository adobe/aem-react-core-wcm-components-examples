(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LanguageNavigationV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/layout/language-navigation/v1/LanguageNavigationV1.js":
/*!***********************************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/layout/language-navigation/v1/LanguageNavigationV1.js ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(a) {
      if (t[a]) return t[a].exports;
      var s = t[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return e[a].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: a
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var a = Object.create(null);
      if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var s in e) n.d(a, s, function (t) {
        return e[t];
      }.bind(null, s));
      return a;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 40);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return i;
      }), n.d(t, "a", function () {
        return l;
      });
      var a = n(0),
          s = n.n(a);

      const r = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return s.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            i = (e, t) => n => {
        const s = n.baseCssClass,
              r = s && s.trim().length > 0 ? s : t,
              i = { ...n,
          baseCssClass: r
        };
        return a.createElement(e, Object.assign({}, i));
      },
            l = (e, t, n, s) => i => {
        const l = t(i),
              {
          hidePlaceHolder: c = !1,
          isInEditor: o = !1
        } = i;
        return a.createElement(a.Fragment, null, !l && a.createElement(e, Object.assign({}, i)), l && o && !c && a.createElement(r, {
          emptyTextAppend: s,
          componentTitle: n
        }));
      };
    },
    17: function (e, t, n) {
      "use strict";

      function a(e) {
        return null == e.items || 0 === e.items.length;
      }

      n.d(t, "a", function () {
        return a;
      });
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return i;
      });
      var a = n(0),
          s = n.n(a),
          r = n(3);

      const i = e => {
        const {
          to: t,
          isRouted: n,
          ...a
        } = e;
        if (void 0 === t || 0 === t.trim().length) return s.a.createElement("a", Object.assign({
          href: "#"
        }, a));
        return /^https?:\/\//.test(t) || !n ? s.a.createElement("a", Object.assign({
          href: t
        }, a)) : s.a.createElement(r.Link, Object.assign({}, a, {
          to: t
        }));
      };
    },
    26: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "LanguageNavigationV1Link", function () {
        return o;
      }), n.d(t, "LanguageNavigationV1Group", function () {
        return u;
      }), n.d(t, "LanguageNavigationV1Item", function () {
        return m;
      });
      var a = n(0),
          s = n.n(a),
          r = n(1),
          i = n(9),
          l = n(2),
          c = n(17);

      const o = e => e.level > 0 ? s.a.createElement(l.a, {
        isRouted: e.routed,
        className: e.baseCssClass + "__item-link",
        to: e.url,
        hrefLang: e.language,
        lang: e.language,
        rel: "alternate",
        title: e.title
      }, e.title) : s.a.createElement("span", {
        className: e.baseCssClass + "__item-title",
        lang: e.language
      }, e.title),
            u = e => s.a.createElement(s.a.Fragment, null, !!e.children && e.children.length > 0 && s.a.createElement("ul", {
        className: e.baseCssClass + "__group"
      }, e.children.map((e, t) => s.a.createElement(m, Object.assign({}, e, {
        key: e.baseCssClass + "__item-" + t,
        index: t
      }))))),
            m = e => {
        const t = Object(i.determineIsActive)(e),
              n = e.baseCssClass + "__item " + e.baseCssClass + "__item--level-" + e.level + " " + `${e.baseCssClass}__item--countrycode-${e.country} ${e.baseCssClass}__item--langcode-${e.language}` + +(t ? " " + e.baseCssClass + "__item--active" : "");
        return s.a.createElement("li", {
          className: n
        }, s.a.createElement(o, Object.assign({}, e)), !!e.children && e.children.length > 0 && s.a.createElement(i.NavigationV1Group, Object.assign({}, e)));
      },
            d = e => {
        const t = {
          active: !1,
          lastModified: 0,
          level: 0,
          path: "",
          title: "",
          url: "",
          language: "",
          country: "",
          locale: "",
          children: e.items
        };
        return s.a.createElement("nav", {
          className: e.baseCssClass,
          role: "navigation",
          itemScope: !0,
          itemType: "http://schema.org/SiteNavigationElement",
          "aria-label": e.accessibilityLabel
        }, s.a.createElement(u, Object.assign({}, t)));
      };

      t.default = e => {
        const t = Object(r.a)(Object(r.b)(d, "cmp-languagenavigation"), c.a, "LanguageNavigation V1");
        return s.a.createElement(t, Object.assign({}, e));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    40: function (e, t, n) {
      e.exports = n(26);
    },
    6: function (e, t, n) {
      "use strict";

      function a(e) {
        return null == e.items || 0 === e.items.length;
      }

      n.d(t, "a", function () {
        return a;
      });
    },
    9: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "determineIsActive", function () {
        return c;
      }), n.d(t, "NavigationV1Group", function () {
        return o;
      }), n.d(t, "NavigationV1Item", function () {
        return u;
      }), n.d(t, "NavigationV1Impl", function () {
        return m;
      }), n.d(t, "NavigationV1", function () {
        return d;
      });
      var a = n(0),
          s = n.n(a),
          r = n(1),
          i = n(2),
          l = n(6);

      const c = e => e.active,
            o = e => s.a.createElement(s.a.Fragment, null, !!e.children && e.children.length > 0 && s.a.createElement("ul", {
        className: e.baseCssClass + "__group"
      }, e.children.map((e, t) => s.a.createElement(u, Object.assign({
        key: e.baseCssClass + "__item-" + t
      }, e, {
        index: t
      }))))),
            u = e => {
        const t = c(e),
              n = e.baseCssClass + "__item " + e.baseCssClass + "__item--level-" + e.level + " " + (t ? " " + e.baseCssClass + "__item--active" : "");
        return s.a.createElement("li", {
          className: n
        }, s.a.createElement(i.a, {
          isRouted: e.routed,
          to: e.url,
          title: e.title,
          "aria-current": t && "page",
          className: e.baseCssClass + "__item-link"
        }, e.title), !!e.children && e.children.length > 0 && s.a.createElement(o, Object.assign({}, e)));
      },
            m = e => {
        const t = {
          active: !1,
          lastModified: 0,
          level: 0,
          path: "",
          title: "",
          url: "",
          children: e.items
        };
        return s.a.createElement("nav", {
          className: e.baseCssClass,
          role: "navigation",
          itemScope: !0,
          itemType: "http://schema.org/SiteNavigationElement",
          "aria-label": e.accessibilityLabel
        }, s.a.createElement(o, Object.assign({}, t)));
      },
            d = e => {
        const t = Object(r.a)(Object(r.b)(m, "cmp-navigation"), l.a, "Navigation V1");
        return s.a.createElement(t, Object.assign({}, e));
      };

      t.default = d;
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9sYXlvdXQvbGFuZ3VhZ2UtbmF2aWdhdGlvbi92MS9MYW5ndWFnZU5hdmlnYXRpb25WMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBdUQsMEJBQTBCLFNBQWtNO0FBQ3JSLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRDQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPLGdFQUFnRTtBQUN2RTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxzR0FBc0csZUFBZSxzQkFBc0IsVUFBVSxHQUFHLGVBQWUsbUJBQW1CLFdBQVc7QUFDck07QUFDQTtBQUNBLFNBQVMsdUNBQXVDLHVHQUF1RztBQUN2SixPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVDQUF1QztBQUNoRDs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsaUZBQWtCO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLDBGQUEwRjtBQUNuRyxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVDQUF1QztBQUNoRCxPQUFPO0FBQ1A7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9MYW5ndWFnZU5hdmlnYXRpb25WMS5lYTQ0YjkzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKGEpIHtcbiAgICAgIGlmICh0W2FdKSByZXR1cm4gdFthXS5leHBvcnRzO1xuICAgICAgdmFyIHMgPSB0W2FdID0ge1xuICAgICAgICBpOiBhLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVthXS5jYWxsKHMuZXhwb3J0cywgcywgcy5leHBvcnRzLCBuKSwgcy5sID0gITAsIHMuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIGEpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBhXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgYSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKGEpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgcyBpbiBlKSBuLmQoYSwgcywgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgcykpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDQwKTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSBuKDApLFxuICAgICAgICAgIHMgPSBuLm4oYSk7XG5cbiAgICAgIGNvbnN0IHIgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIHMuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBpID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCBzID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIHIgPSBzICYmIHMudHJpbSgpLmxlbmd0aCA+IDAgPyBzIDogdCxcbiAgICAgICAgICAgICAgaSA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHJcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGEuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbCA9IChlLCB0LCBuLCBzKSA9PiBpID0+IHtcbiAgICAgICAgY29uc3QgbCA9IHQoaSksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGMgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiBvID0gITFcbiAgICAgICAgfSA9IGk7XG4gICAgICAgIHJldHVybiBhLmNyZWF0ZUVsZW1lbnQoYS5GcmFnbWVudCwgbnVsbCwgIWwgJiYgYS5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGkpKSwgbCAmJiBvICYmICFjICYmIGEuY3JlYXRlRWxlbWVudChyLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiBzLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAxNzogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBmdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gZS5pdGVtcyB8fCAwID09PSBlLml0ZW1zLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSBuKDApLFxuICAgICAgICAgIHMgPSBuLm4oYSksXG4gICAgICAgICAgciA9IG4oMyk7XG5cbiAgICAgIGNvbnN0IGkgPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRvOiB0LFxuICAgICAgICAgIGlzUm91dGVkOiBuLFxuICAgICAgICAgIC4uLmFcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQgfHwgMCA9PT0gdC50cmltKCkubGVuZ3RoKSByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgIH0sIGEpKTtcbiAgICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0KSB8fCAhbiA/IHMuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiB0XG4gICAgICAgIH0sIGEpKSA6IHMuYS5jcmVhdGVFbGVtZW50KHIuTGluaywgT2JqZWN0LmFzc2lnbih7fSwgYSwge1xuICAgICAgICAgIHRvOiB0XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAyNjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcIkxhbmd1YWdlTmF2aWdhdGlvblYxTGlua1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSksIG4uZCh0LCBcIkxhbmd1YWdlTmF2aWdhdGlvblYxR3JvdXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdTtcbiAgICAgIH0pLCBuLmQodCwgXCJMYW5ndWFnZU5hdmlnYXRpb25WMUl0ZW1cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSBuKDApLFxuICAgICAgICAgIHMgPSBuLm4oYSksXG4gICAgICAgICAgciA9IG4oMSksXG4gICAgICAgICAgaSA9IG4oOSksXG4gICAgICAgICAgbCA9IG4oMiksXG4gICAgICAgICAgYyA9IG4oMTcpO1xuXG4gICAgICBjb25zdCBvID0gZSA9PiBlLmxldmVsID4gMCA/IHMuYS5jcmVhdGVFbGVtZW50KGwuYSwge1xuICAgICAgICBpc1JvdXRlZDogZS5yb3V0ZWQsXG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1saW5rXCIsXG4gICAgICAgIHRvOiBlLnVybCxcbiAgICAgICAgaHJlZkxhbmc6IGUubGFuZ3VhZ2UsXG4gICAgICAgIGxhbmc6IGUubGFuZ3VhZ2UsXG4gICAgICAgIHJlbDogXCJhbHRlcm5hdGVcIixcbiAgICAgICAgdGl0bGU6IGUudGl0bGVcbiAgICAgIH0sIGUudGl0bGUpIDogcy5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLXRpdGxlXCIsXG4gICAgICAgIGxhbmc6IGUubGFuZ3VhZ2VcbiAgICAgIH0sIGUudGl0bGUpLFxuICAgICAgICAgICAgdSA9IGUgPT4gcy5hLmNyZWF0ZUVsZW1lbnQocy5hLkZyYWdtZW50LCBudWxsLCAhIWUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIHMuYS5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2dyb3VwXCJcbiAgICAgIH0sIGUuY2hpbGRyZW4ubWFwKChlLCB0KSA9PiBzLmEuY3JlYXRlRWxlbWVudChtLCBPYmplY3QuYXNzaWduKHt9LCBlLCB7XG4gICAgICAgIGtleTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1cIiArIHQsXG4gICAgICAgIGluZGV4OiB0XG4gICAgICB9KSkpKSksXG4gICAgICAgICAgICBtID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBPYmplY3QoaS5kZXRlcm1pbmVJc0FjdGl2ZSkoZSksXG4gICAgICAgICAgICAgIG4gPSBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtIFwiICsgZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS0tbGV2ZWwtXCIgKyBlLmxldmVsICsgXCIgXCIgKyBgJHtlLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWNvdW50cnljb2RlLSR7ZS5jb3VudHJ5fSAke2UuYmFzZUNzc0NsYXNzfV9faXRlbS0tbGFuZ2NvZGUtJHtlLmxhbmd1YWdlfWAgKyArKHQgPyBcIiBcIiArIGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tLWFjdGl2ZVwiIDogXCJcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IG5cbiAgICAgICAgfSwgcy5hLmNyZWF0ZUVsZW1lbnQobywgT2JqZWN0LmFzc2lnbih7fSwgZSkpLCAhIWUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIHMuYS5jcmVhdGVFbGVtZW50KGkuTmF2aWdhdGlvblYxR3JvdXAsIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgZCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0ge1xuICAgICAgICAgIGFjdGl2ZTogITEsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiAwLFxuICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICAgIGxhbmd1YWdlOiBcIlwiLFxuICAgICAgICAgIGNvdW50cnk6IFwiXCIsXG4gICAgICAgICAgbG9jYWxlOiBcIlwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBlLml0ZW1zXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgICAgICBpdGVtU2NvcGU6ICEwLFxuICAgICAgICAgIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL1NpdGVOYXZpZ2F0aW9uRWxlbWVudFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlLmFjY2Vzc2liaWxpdHlMYWJlbFxuICAgICAgICB9LCBzLmEuY3JlYXRlRWxlbWVudCh1LCBPYmplY3QuYXNzaWduKHt9LCB0KSkpO1xuICAgICAgfTtcblxuICAgICAgdC5kZWZhdWx0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBPYmplY3Qoci5hKShPYmplY3Qoci5iKShkLCBcImNtcC1sYW5ndWFnZW5hdmlnYXRpb25cIiksIGMuYSwgXCJMYW5ndWFnZU5hdmlnYXRpb24gVjFcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMzogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuICAgIH0sXG4gICAgNDA6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBlLmV4cG9ydHMgPSBuKDI2KTtcbiAgICB9LFxuICAgIDY6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gYShlKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGUuaXRlbXMgfHwgMCA9PT0gZS5pdGVtcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgOTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcImRldGVybWluZUlzQWN0aXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KSwgbi5kKHQsIFwiTmF2aWdhdGlvblYxR3JvdXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pLCBuLmQodCwgXCJOYXZpZ2F0aW9uVjFJdGVtXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KSwgbi5kKHQsIFwiTmF2aWdhdGlvblYxSW1wbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfSksIG4uZCh0LCBcIk5hdmlnYXRpb25WMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSk7XG4gICAgICB2YXIgYSA9IG4oMCksXG4gICAgICAgICAgcyA9IG4ubihhKSxcbiAgICAgICAgICByID0gbigxKSxcbiAgICAgICAgICBpID0gbigyKSxcbiAgICAgICAgICBsID0gbig2KTtcblxuICAgICAgY29uc3QgYyA9IGUgPT4gZS5hY3RpdmUsXG4gICAgICAgICAgICBvID0gZSA9PiBzLmEuY3JlYXRlRWxlbWVudChzLmEuRnJhZ21lbnQsIG51bGwsICEhZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgcy5hLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fZ3JvdXBcIlxuICAgICAgfSwgZS5jaGlsZHJlbi5tYXAoKGUsIHQpID0+IHMuYS5jcmVhdGVFbGVtZW50KHUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBrZXk6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tXCIgKyB0XG4gICAgICB9LCBlLCB7XG4gICAgICAgIGluZGV4OiB0XG4gICAgICB9KSkpKSksXG4gICAgICAgICAgICB1ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBjKGUpLFxuICAgICAgICAgICAgICBuID0gZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbSBcIiArIGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tLWxldmVsLVwiICsgZS5sZXZlbCArIFwiIFwiICsgKHQgPyBcIiBcIiArIGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tLWFjdGl2ZVwiIDogXCJcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IG5cbiAgICAgICAgfSwgcy5hLmNyZWF0ZUVsZW1lbnQoaS5hLCB7XG4gICAgICAgICAgaXNSb3V0ZWQ6IGUucm91dGVkLFxuICAgICAgICAgIHRvOiBlLnVybCxcbiAgICAgICAgICB0aXRsZTogZS50aXRsZSxcbiAgICAgICAgICBcImFyaWEtY3VycmVudFwiOiB0ICYmIFwicGFnZVwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1saW5rXCJcbiAgICAgICAgfSwgZS50aXRsZSksICEhZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgcy5hLmNyZWF0ZUVsZW1lbnQobywgT2JqZWN0LmFzc2lnbih7fSwgZSkpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBtID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSB7XG4gICAgICAgICAgYWN0aXZlOiAhMSxcbiAgICAgICAgICBsYXN0TW9kaWZpZWQ6IDAsXG4gICAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGUuaXRlbXNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHMuYS5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzLFxuICAgICAgICAgIHJvbGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgICAgIGl0ZW1TY29wZTogITAsXG4gICAgICAgICAgaXRlbVR5cGU6IFwiaHR0cDovL3NjaGVtYS5vcmcvU2l0ZU5hdmlnYXRpb25FbGVtZW50XCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGUuYWNjZXNzaWJpbGl0eUxhYmVsXG4gICAgICAgIH0sIHMuYS5jcmVhdGVFbGVtZW50KG8sIE9iamVjdC5hc3NpZ24oe30sIHQpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgZCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHIuYSkoT2JqZWN0KHIuYikobSwgXCJjbXAtbmF2aWdhdGlvblwiKSwgbC5hLCBcIk5hdmlnYXRpb24gVjFcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBkO1xuICAgIH1cbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
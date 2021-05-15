(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["LanguageNavigationV1"],{

/***/ "../../react-base-components/dist/layout/language-navigation/v1/LanguageNavigationV1.js":
/*!************************************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/layout/language-navigation/v1/LanguageNavigationV1.js ***!
  \************************************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvbGF5b3V0L2xhbmd1YWdlLW5hdmlnYXRpb24vdjEvTGFuZ3VhZ2VOYXZpZ2F0aW9uVjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRDtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTyxnRUFBZ0U7QUFDdkU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0Esc0dBQXNHLGVBQWUsc0JBQXNCLFVBQVUsR0FBRyxlQUFlLG1CQUFtQixXQUFXO0FBQ3JNO0FBQ0E7QUFDQSxTQUFTLHVDQUF1Qyx1R0FBdUc7QUFDdkosT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUFrQjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywwRkFBMEY7QUFDbkcsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQsT0FBTztBQUNQO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvTGFuZ3VhZ2VOYXZpZ2F0aW9uVjEuYWY1YmNhMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24gKGUsIHQpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW10sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpIDogZVtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gbihhKSB7XG4gICAgICBpZiAodFthXSkgcmV0dXJuIHRbYV0uZXhwb3J0cztcbiAgICAgIHZhciBzID0gdFthXSA9IHtcbiAgICAgICAgaTogYSxcbiAgICAgICAgbDogITEsXG4gICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVbYV0uY2FsbChzLmV4cG9ydHMsIHMsIHMuZXhwb3J0cywgbiksIHMubCA9ICEwLCBzLmV4cG9ydHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG4ubSA9IGUsIG4uYyA9IHQsIG4uZCA9IGZ1bmN0aW9uIChlLCB0LCBhKSB7XG4gICAgICBuLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGdldDogYVxuICAgICAgfSk7XG4gICAgfSwgbi5yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogXCJNb2R1bGVcIlxuICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICAgIH0pO1xuICAgIH0sIG4udCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAoMSAmIHQgJiYgKGUgPSBuKGUpKSwgOCAmIHQpIHJldHVybiBlO1xuICAgICAgaWYgKDQgJiB0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgICAgdmFyIGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgaWYgKG4ucihhKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZVxuICAgICAgfSksIDIgJiB0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIGZvciAodmFyIHMgaW4gZSkgbi5kKGEsIHMsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlW3RdO1xuICAgICAgfS5iaW5kKG51bGwsIHMpKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH0sIG4ubiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUgJiYgZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5kZWZhdWx0O1xuICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG4uZCh0LCBcImFcIiwgdCksIHQ7XG4gICAgfSwgbi5vID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdCk7XG4gICAgfSwgbi5wID0gXCJcIiwgbihuLnMgPSA0MCk7XG4gIH0oe1xuICAgIDA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gICAgfSxcbiAgICAxOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pLCBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICBzID0gbi5uKGEpO1xuXG4gICAgICBjb25zdCByID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSAobnVsbCAhPSBlLmNvbXBvbmVudFRpdGxlICYmIGUuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCA/IGUuY29tcG9uZW50VGl0bGUgKyBcIiAtIFwiIDogXCJcIikgKyAobnVsbCAhPSBlLmVtcHR5VGV4dEFwcGVuZCA/IGUuZW1wdHlUZXh0QXBwZW5kIDogXCJQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnRcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNxLXBsYWNlaG9sZGVyXCIgKyAobnVsbCAhPSBlLmNsYXNzQXBwZW5kID8gXCIgXCIgKyBlLmNsYXNzQXBwZW5kIDogXCJcIilcbiAgICAgICAgfSwgdCk7XG4gICAgICB9LFxuICAgICAgICAgICAgaSA9IChlLCB0KSA9PiBuID0+IHtcbiAgICAgICAgY29uc3QgcyA9IG4uYmFzZUNzc0NsYXNzLFxuICAgICAgICAgICAgICByID0gcyAmJiBzLnRyaW0oKS5sZW5ndGggPiAwID8gcyA6IHQsXG4gICAgICAgICAgICAgIGkgPSB7IC4uLm4sXG4gICAgICAgICAgYmFzZUNzc0NsYXNzOiByXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgaSkpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGwgPSAoZSwgdCwgbiwgcykgPT4gaSA9PiB7XG4gICAgICAgIGNvbnN0IGwgPSB0KGkpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgaGlkZVBsYWNlSG9sZGVyOiBjID0gITEsXG4gICAgICAgICAgaXNJbkVkaXRvcjogbyA9ICExXG4gICAgICAgIH0gPSBpO1xuICAgICAgICByZXR1cm4gYS5jcmVhdGVFbGVtZW50KGEuRnJhZ21lbnQsIG51bGwsICFsICYmIGEuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBpKSksIGwgJiYgbyAmJiAhYyAmJiBhLmNyZWF0ZUVsZW1lbnQociwge1xuICAgICAgICAgIGVtcHR5VGV4dEFwcGVuZDogcyxcbiAgICAgICAgICBjb21wb25lbnRUaXRsZTogblxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMTc6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gYShlKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGUuaXRlbXMgfHwgMCA9PT0gZS5pdGVtcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgMjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICBzID0gbi5uKGEpLFxuICAgICAgICAgIHIgPSBuKDMpO1xuXG4gICAgICBjb25zdCBpID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0bzogdCxcbiAgICAgICAgICBpc1JvdXRlZDogbixcbiAgICAgICAgICAuLi5hXG4gICAgICAgIH0gPSBlO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0IHx8IDAgPT09IHQudHJpbSgpLmxlbmd0aCkgcmV0dXJuIHMuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICB9LCBhKSk7XG4gICAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodCkgfHwgIW4gPyBzLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogdFxuICAgICAgICB9LCBhKSkgOiBzLmEuY3JlYXRlRWxlbWVudChyLkxpbmssIE9iamVjdC5hc3NpZ24oe30sIGEsIHtcbiAgICAgICAgICB0bzogdFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMjY6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJMYW5ndWFnZU5hdmlnYXRpb25WMUxpbmtcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pLCBuLmQodCwgXCJMYW5ndWFnZU5hdmlnYXRpb25WMUdyb3VwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KSwgbi5kKHQsIFwiTGFuZ3VhZ2VOYXZpZ2F0aW9uVjFJdGVtXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG07XG4gICAgICB9KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICBzID0gbi5uKGEpLFxuICAgICAgICAgIHIgPSBuKDEpLFxuICAgICAgICAgIGkgPSBuKDkpLFxuICAgICAgICAgIGwgPSBuKDIpLFxuICAgICAgICAgIGMgPSBuKDE3KTtcblxuICAgICAgY29uc3QgbyA9IGUgPT4gZS5sZXZlbCA+IDAgPyBzLmEuY3JlYXRlRWxlbWVudChsLmEsIHtcbiAgICAgICAgaXNSb3V0ZWQ6IGUucm91dGVkLFxuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tbGlua1wiLFxuICAgICAgICB0bzogZS51cmwsXG4gICAgICAgIGhyZWZMYW5nOiBlLmxhbmd1YWdlLFxuICAgICAgICBsYW5nOiBlLmxhbmd1YWdlLFxuICAgICAgICByZWw6IFwiYWx0ZXJuYXRlXCIsXG4gICAgICAgIHRpdGxlOiBlLnRpdGxlXG4gICAgICB9LCBlLnRpdGxlKSA6IHMuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS10aXRsZVwiLFxuICAgICAgICBsYW5nOiBlLmxhbmd1YWdlXG4gICAgICB9LCBlLnRpdGxlKSxcbiAgICAgICAgICAgIHUgPSBlID0+IHMuYS5jcmVhdGVFbGVtZW50KHMuYS5GcmFnbWVudCwgbnVsbCwgISFlLmNoaWxkcmVuICYmIGUuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiBzLmEuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19ncm91cFwiXG4gICAgICB9LCBlLmNoaWxkcmVuLm1hcCgoZSwgdCkgPT4gcy5hLmNyZWF0ZUVsZW1lbnQobSwgT2JqZWN0LmFzc2lnbih7fSwgZSwge1xuICAgICAgICBrZXk6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tXCIgKyB0LFxuICAgICAgICBpbmRleDogdFxuICAgICAgfSkpKSkpLFxuICAgICAgICAgICAgbSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KGkuZGV0ZXJtaW5lSXNBY3RpdmUpKGUpLFxuICAgICAgICAgICAgICBuID0gZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbSBcIiArIGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tLWxldmVsLVwiICsgZS5sZXZlbCArIFwiIFwiICsgYCR7ZS5iYXNlQ3NzQ2xhc3N9X19pdGVtLS1jb3VudHJ5Y29kZS0ke2UuY291bnRyeX0gJHtlLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWxhbmdjb2RlLSR7ZS5sYW5ndWFnZX1gICsgKyh0ID8gXCIgXCIgKyBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLS1hY3RpdmVcIiA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBuXG4gICAgICAgIH0sIHMuYS5jcmVhdGVFbGVtZW50KG8sIE9iamVjdC5hc3NpZ24oe30sIGUpKSwgISFlLmNoaWxkcmVuICYmIGUuY2hpbGRyZW4ubGVuZ3RoID4gMCAmJiBzLmEuY3JlYXRlRWxlbWVudChpLk5hdmlnYXRpb25WMUdyb3VwLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IHtcbiAgICAgICAgICBhY3RpdmU6ICExLFxuICAgICAgICAgIGxhc3RNb2RpZmllZDogMCxcbiAgICAgICAgICBsZXZlbDogMCxcbiAgICAgICAgICBwYXRoOiBcIlwiLFxuICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgIHVybDogXCJcIixcbiAgICAgICAgICBsYW5ndWFnZTogXCJcIixcbiAgICAgICAgICBjb3VudHJ5OiBcIlwiLFxuICAgICAgICAgIGxvY2FsZTogXCJcIixcbiAgICAgICAgICBjaGlsZHJlbjogZS5pdGVtc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgcm9sZTogXCJuYXZpZ2F0aW9uXCIsXG4gICAgICAgICAgaXRlbVNjb3BlOiAhMCxcbiAgICAgICAgICBpdGVtVHlwZTogXCJodHRwOi8vc2NoZW1hLm9yZy9TaXRlTmF2aWdhdGlvbkVsZW1lbnRcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogZS5hY2Nlc3NpYmlsaXR5TGFiZWxcbiAgICAgICAgfSwgcy5hLmNyZWF0ZUVsZW1lbnQodSwgT2JqZWN0LmFzc2lnbih7fSwgdCkpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHIuYSkoT2JqZWN0KHIuYikoZCwgXCJjbXAtbGFuZ3VhZ2VuYXZpZ2F0aW9uXCIpLCBjLmEsIFwiTGFuZ3VhZ2VOYXZpZ2F0aW9uIFYxXCIpO1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDQwOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigyNik7XG4gICAgfSxcbiAgICA2OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIGEoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlLml0ZW1zIHx8IDAgPT09IGUuaXRlbXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIDk6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJkZXRlcm1pbmVJc0FjdGl2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSksIG4uZCh0LCBcIk5hdmlnYXRpb25WMUdyb3VwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KSwgbi5kKHQsIFwiTmF2aWdhdGlvblYxSXRlbVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1O1xuICAgICAgfSksIG4uZCh0LCBcIk5hdmlnYXRpb25WMUltcGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0pLCBuLmQodCwgXCJOYXZpZ2F0aW9uVjFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSBuKDApLFxuICAgICAgICAgIHMgPSBuLm4oYSksXG4gICAgICAgICAgciA9IG4oMSksXG4gICAgICAgICAgaSA9IG4oMiksXG4gICAgICAgICAgbCA9IG4oNik7XG5cbiAgICAgIGNvbnN0IGMgPSBlID0+IGUuYWN0aXZlLFxuICAgICAgICAgICAgbyA9IGUgPT4gcy5hLmNyZWF0ZUVsZW1lbnQocy5hLkZyYWdtZW50LCBudWxsLCAhIWUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIHMuYS5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2dyb3VwXCJcbiAgICAgIH0sIGUuY2hpbGRyZW4ubWFwKChlLCB0KSA9PiBzLmEuY3JlYXRlRWxlbWVudCh1LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAga2V5OiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLVwiICsgdFxuICAgICAgfSwgZSwge1xuICAgICAgICBpbmRleDogdFxuICAgICAgfSkpKSkpLFxuICAgICAgICAgICAgdSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gYyhlKSxcbiAgICAgICAgICAgICAgbiA9IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0gXCIgKyBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLS1sZXZlbC1cIiArIGUubGV2ZWwgKyBcIiBcIiArICh0ID8gXCIgXCIgKyBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLS1hY3RpdmVcIiA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBuXG4gICAgICAgIH0sIHMuYS5jcmVhdGVFbGVtZW50KGkuYSwge1xuICAgICAgICAgIGlzUm91dGVkOiBlLnJvdXRlZCxcbiAgICAgICAgICB0bzogZS51cmwsXG4gICAgICAgICAgdGl0bGU6IGUudGl0bGUsXG4gICAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogdCAmJiBcInBhZ2VcIixcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tbGlua1wiXG4gICAgICAgIH0sIGUudGl0bGUpLCAhIWUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIHMuYS5jcmVhdGVFbGVtZW50KG8sIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0ge1xuICAgICAgICAgIGFjdGl2ZTogITEsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiAwLFxuICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBlLml0ZW1zXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgICAgICBpdGVtU2NvcGU6ICEwLFxuICAgICAgICAgIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL1NpdGVOYXZpZ2F0aW9uRWxlbWVudFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlLmFjY2Vzc2liaWxpdHlMYWJlbFxuICAgICAgICB9LCBzLmEuY3JlYXRlRWxlbWVudChvLCBPYmplY3QuYXNzaWduKHt9LCB0KSkpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChyLmEpKE9iamVjdChyLmIpKG0sIFwiY21wLW5hdmlnYXRpb25cIiksIGwuYSwgXCJOYXZpZ2F0aW9uIFYxXCIpO1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcblxuICAgICAgdC5kZWZhdWx0ID0gZDtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
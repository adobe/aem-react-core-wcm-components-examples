(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NavigationV1"],{

/***/ "../../react-base-components/dist/layout/navigation/v1/NavigationV1.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/layout/navigation/v1/NavigationV1.js ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var a = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
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
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var a in e) n.d(r, a, function (t) {
        return e[t];
      }.bind(null, a));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 39);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return i;
      }), n.d(t, "a", function () {
        return o;
      });
      var r = n(0),
          a = n.n(r);

      const s = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return a.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            i = (e, t) => n => {
        const a = n.baseCssClass,
              s = a && a.trim().length > 0 ? a : t,
              i = { ...n,
          baseCssClass: s
        };
        return r.createElement(e, Object.assign({}, i));
      },
            o = (e, t, n, a) => i => {
        const o = t(i),
              {
          hidePlaceHolder: c = !1,
          isInEditor: l = !1
        } = i;
        return r.createElement(r.Fragment, null, !o && r.createElement(e, Object.assign({}, i)), o && l && !c && r.createElement(s, {
          emptyTextAppend: a,
          componentTitle: n
        }));
      };
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return i;
      });
      var r = n(0),
          a = n.n(r),
          s = n(3);

      const i = e => {
        const {
          to: t,
          isRouted: n,
          ...r
        } = e;
        if (void 0 === t || 0 === t.trim().length) return a.a.createElement("a", Object.assign({
          href: "#"
        }, r));
        return /^https?:\/\//.test(t) || !n ? a.a.createElement("a", Object.assign({
          href: t
        }, r)) : a.a.createElement(s.Link, Object.assign({}, r, {
          to: t
        }));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    39: function (e, t, n) {
      e.exports = n(9);
    },
    6: function (e, t, n) {
      "use strict";

      function r(e) {
        return null == e.items || 0 === e.items.length;
      }

      n.d(t, "a", function () {
        return r;
      });
    },
    9: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "determineIsActive", function () {
        return c;
      }), n.d(t, "NavigationV1Group", function () {
        return l;
      }), n.d(t, "NavigationV1Item", function () {
        return u;
      }), n.d(t, "NavigationV1Impl", function () {
        return m;
      }), n.d(t, "NavigationV1", function () {
        return f;
      });
      var r = n(0),
          a = n.n(r),
          s = n(1),
          i = n(2),
          o = n(6);

      const c = e => e.active,
            l = e => a.a.createElement(a.a.Fragment, null, !!e.children && e.children.length > 0 && a.a.createElement("ul", {
        className: e.baseCssClass + "__group"
      }, e.children.map((e, t) => a.a.createElement(u, Object.assign({
        key: e.baseCssClass + "__item-" + t
      }, e, {
        index: t
      }))))),
            u = e => {
        const t = c(e),
              n = e.baseCssClass + "__item " + e.baseCssClass + "__item--level-" + e.level + " " + (t ? " " + e.baseCssClass + "__item--active" : "");
        return a.a.createElement("li", {
          className: n
        }, a.a.createElement(i.a, {
          isRouted: e.routed,
          to: e.url,
          title: e.title,
          "aria-current": t && "page",
          className: e.baseCssClass + "__item-link"
        }, e.title), !!e.children && e.children.length > 0 && a.a.createElement(l, Object.assign({}, e)));
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
        return a.a.createElement("nav", {
          className: e.baseCssClass,
          role: "navigation",
          itemScope: !0,
          itemType: "http://schema.org/SiteNavigationElement",
          "aria-label": e.accessibilityLabel
        }, a.a.createElement(l, Object.assign({}, t)));
      },
            f = e => {
        const t = Object(s.a)(Object(s.b)(m, "cmp-navigation"), o.a, "Navigation V1");
        return a.a.createElement(t, Object.assign({}, e));
      };

      t.default = f;
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvbGF5b3V0L25hdmlnYXRpb24vdjEvTmF2aWdhdGlvblYxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUF1RCwwQkFBMEIsU0FBa007QUFDclIsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNENBQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBa0I7QUFDNUMsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMEZBQTBGO0FBQ25HLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUNBQXVDO0FBQ2hELE9BQU87QUFDUDtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFIiwiZmlsZSI6ImpzL05hdmlnYXRpb25WMS5hZjViY2ExOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHIpIHtcbiAgICAgIGlmICh0W3JdKSByZXR1cm4gdFtyXS5leHBvcnRzO1xuICAgICAgdmFyIGEgPSB0W3JdID0ge1xuICAgICAgICBpOiByLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtyXS5jYWxsKGEuZXhwb3J0cywgYSwgYS5leHBvcnRzLCBuKSwgYS5sID0gITAsIGEuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiByXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHIpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgYSBpbiBlKSBuLmQociwgYSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgYSkpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDM5KTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ocik7XG5cbiAgICAgIGNvbnN0IHMgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBpID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCBhID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIHMgPSBhICYmIGEudHJpbSgpLmxlbmd0aCA+IDAgPyBhIDogdCxcbiAgICAgICAgICAgICAgaSA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbyA9IChlLCB0LCBuLCBhKSA9PiBpID0+IHtcbiAgICAgICAgY29uc3QgbyA9IHQoaSksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGMgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiBsID0gITFcbiAgICAgICAgfSA9IGk7XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoci5GcmFnbWVudCwgbnVsbCwgIW8gJiYgci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGkpKSwgbyAmJiBsICYmICFjICYmIHIuY3JlYXRlRWxlbWVudChzLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiBhLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ociksXG4gICAgICAgICAgcyA9IG4oMyk7XG5cbiAgICAgIGNvbnN0IGkgPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRvOiB0LFxuICAgICAgICAgIGlzUm91dGVkOiBuLFxuICAgICAgICAgIC4uLnJcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQgfHwgMCA9PT0gdC50cmltKCkubGVuZ3RoKSByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgIH0sIHIpKTtcbiAgICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0KSB8fCAhbiA/IGEuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiB0XG4gICAgICAgIH0sIHIpKSA6IGEuYS5jcmVhdGVFbGVtZW50KHMuTGluaywgT2JqZWN0LmFzc2lnbih7fSwgciwge1xuICAgICAgICAgIHRvOiB0XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAzOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4gICAgfSxcbiAgICAzOTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGUuZXhwb3J0cyA9IG4oOSk7XG4gICAgfSxcbiAgICA2OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlLml0ZW1zIHx8IDAgPT09IGUuaXRlbXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIDk6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJkZXRlcm1pbmVJc0FjdGl2ZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSksIG4uZCh0LCBcIk5hdmlnYXRpb25WMUdyb3VwXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSwgbi5kKHQsIFwiTmF2aWdhdGlvblYxSXRlbVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1O1xuICAgICAgfSksIG4uZCh0LCBcIk5hdmlnYXRpb25WMUltcGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0pLCBuLmQodCwgXCJOYXZpZ2F0aW9uVjFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ociksXG4gICAgICAgICAgcyA9IG4oMSksXG4gICAgICAgICAgaSA9IG4oMiksXG4gICAgICAgICAgbyA9IG4oNik7XG5cbiAgICAgIGNvbnN0IGMgPSBlID0+IGUuYWN0aXZlLFxuICAgICAgICAgICAgbCA9IGUgPT4gYS5hLmNyZWF0ZUVsZW1lbnQoYS5hLkZyYWdtZW50LCBudWxsLCAhIWUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIGEuYS5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2dyb3VwXCJcbiAgICAgIH0sIGUuY2hpbGRyZW4ubWFwKChlLCB0KSA9PiBhLmEuY3JlYXRlRWxlbWVudCh1LCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAga2V5OiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLVwiICsgdFxuICAgICAgfSwgZSwge1xuICAgICAgICBpbmRleDogdFxuICAgICAgfSkpKSkpLFxuICAgICAgICAgICAgdSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gYyhlKSxcbiAgICAgICAgICAgICAgbiA9IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0gXCIgKyBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLS1sZXZlbC1cIiArIGUubGV2ZWwgKyBcIiBcIiArICh0ID8gXCIgXCIgKyBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLS1hY3RpdmVcIiA6IFwiXCIpO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBuXG4gICAgICAgIH0sIGEuYS5jcmVhdGVFbGVtZW50KGkuYSwge1xuICAgICAgICAgIGlzUm91dGVkOiBlLnJvdXRlZCxcbiAgICAgICAgICB0bzogZS51cmwsXG4gICAgICAgICAgdGl0bGU6IGUudGl0bGUsXG4gICAgICAgICAgXCJhcmlhLWN1cnJlbnRcIjogdCAmJiBcInBhZ2VcIixcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tbGlua1wiXG4gICAgICAgIH0sIGUudGl0bGUpLCAhIWUuY2hpbGRyZW4gJiYgZS5jaGlsZHJlbi5sZW5ndGggPiAwICYmIGEuYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0ge1xuICAgICAgICAgIGFjdGl2ZTogITEsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiAwLFxuICAgICAgICAgIGxldmVsOiAwLFxuICAgICAgICAgIHBhdGg6IFwiXCIsXG4gICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgdXJsOiBcIlwiLFxuICAgICAgICAgIGNoaWxkcmVuOiBlLml0ZW1zXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICByb2xlOiBcIm5hdmlnYXRpb25cIixcbiAgICAgICAgICBpdGVtU2NvcGU6ICEwLFxuICAgICAgICAgIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL1NpdGVOYXZpZ2F0aW9uRWxlbWVudFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBlLmFjY2Vzc2liaWxpdHlMYWJlbFxuICAgICAgICB9LCBhLmEuY3JlYXRlRWxlbWVudChsLCBPYmplY3QuYXNzaWduKHt9LCB0KSkpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGYgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChzLmEpKE9iamVjdChzLmIpKG0sIFwiY21wLW5hdmlnYXRpb25cIiksIG8uYSwgXCJOYXZpZ2F0aW9uIFYxXCIpO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcblxuICAgICAgdC5kZWZhdWx0ID0gZjtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["NavigationV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/layout/navigation/v1/NavigationV1.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/layout/navigation/v1/NavigationV1.js ***!
  \******************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9sYXlvdXQvbmF2aWdhdGlvbi92MS9OYXZpZ2F0aW9uVjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRDtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUFrQjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUywwRkFBMEY7QUFDbkcsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQsT0FBTztBQUNQO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvTmF2aWdhdGlvblYxLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4ocikge1xuICAgICAgaWYgKHRbcl0pIHJldHVybiB0W3JdLmV4cG9ydHM7XG4gICAgICB2YXIgYSA9IHRbcl0gPSB7XG4gICAgICAgIGk6IHIsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW3JdLmNhbGwoYS5leHBvcnRzLCBhLCBhLmV4cG9ydHMsIG4pLCBhLmwgPSAhMCwgYS5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IHJcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciByID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIociksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciBhIGluIGUpIG4uZChyLCBhLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCBhKSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMzkpO1xuICB9KHtcbiAgICAwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKTtcblxuICAgICAgY29uc3QgcyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gKG51bGwgIT0gZS5jb21wb25lbnRUaXRsZSAmJiBlLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDAgPyBlLmNvbXBvbmVudFRpdGxlICsgXCIgLSBcIiA6IFwiXCIpICsgKG51bGwgIT0gZS5lbXB0eVRleHRBcHBlbmQgPyBlLmVtcHR5VGV4dEFwcGVuZCA6IFwiUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50XCIpO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjcS1wbGFjZWhvbGRlclwiICsgKG51bGwgIT0gZS5jbGFzc0FwcGVuZCA/IFwiIFwiICsgZS5jbGFzc0FwcGVuZCA6IFwiXCIpXG4gICAgICAgIH0sIHQpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGkgPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBuLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgICAgcyA9IGEgJiYgYS50cmltKCkubGVuZ3RoID4gMCA/IGEgOiB0LFxuICAgICAgICAgICAgICBpID0geyAuLi5uLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGkpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBvID0gKGUsIHQsIG4sIGEpID0+IGkgPT4ge1xuICAgICAgICBjb25zdCBvID0gdChpKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgIGhpZGVQbGFjZUhvbGRlcjogYyA9ICExLFxuICAgICAgICAgIGlzSW5FZGl0b3I6IGwgPSAhMVxuICAgICAgICB9ID0gaTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChyLkZyYWdtZW50LCBudWxsLCAhbyAmJiByLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgaSkpLCBvICYmIGwgJiYgIWMgJiYgci5jcmVhdGVFbGVtZW50KHMsIHtcbiAgICAgICAgICBlbXB0eVRleHRBcHBlbmQ6IGEsXG4gICAgICAgICAgY29tcG9uZW50VGl0bGU6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKSxcbiAgICAgICAgICBzID0gbigzKTtcblxuICAgICAgY29uc3QgaSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG86IHQsXG4gICAgICAgICAgaXNSb3V0ZWQ6IG4sXG4gICAgICAgICAgLi4uclxuICAgICAgICB9ID0gZTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCB8fCAwID09PSB0LnRyaW0oKS5sZW5ndGgpIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogXCIjXCJcbiAgICAgICAgfSwgcikpO1xuICAgICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvLy50ZXN0KHQpIHx8ICFuID8gYS5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IHRcbiAgICAgICAgfSwgcikpIDogYS5hLmNyZWF0ZUVsZW1lbnQocy5MaW5rLCBPYmplY3QuYXNzaWduKHt9LCByLCB7XG4gICAgICAgICAgdG86IHRcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDM5OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbig5KTtcbiAgICB9LFxuICAgIDY6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGUuaXRlbXMgfHwgMCA9PT0gZS5pdGVtcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgOTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcImRldGVybWluZUlzQWN0aXZlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KSwgbi5kKHQsIFwiTmF2aWdhdGlvblYxR3JvdXBcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pLCBuLmQodCwgXCJOYXZpZ2F0aW9uVjFJdGVtXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KSwgbi5kKHQsIFwiTmF2aWdhdGlvblYxSW1wbFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfSksIG4uZCh0LCBcIk5hdmlnYXRpb25WMVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBmO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKSxcbiAgICAgICAgICBzID0gbigxKSxcbiAgICAgICAgICBpID0gbigyKSxcbiAgICAgICAgICBvID0gbig2KTtcblxuICAgICAgY29uc3QgYyA9IGUgPT4gZS5hY3RpdmUsXG4gICAgICAgICAgICBsID0gZSA9PiBhLmEuY3JlYXRlRWxlbWVudChhLmEuRnJhZ21lbnQsIG51bGwsICEhZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgYS5hLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fZ3JvdXBcIlxuICAgICAgfSwgZS5jaGlsZHJlbi5tYXAoKGUsIHQpID0+IGEuYS5jcmVhdGVFbGVtZW50KHUsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICBrZXk6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tXCIgKyB0XG4gICAgICB9LCBlLCB7XG4gICAgICAgIGluZGV4OiB0XG4gICAgICB9KSkpKSksXG4gICAgICAgICAgICB1ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBjKGUpLFxuICAgICAgICAgICAgICBuID0gZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbSBcIiArIGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tLWxldmVsLVwiICsgZS5sZXZlbCArIFwiIFwiICsgKHQgPyBcIiBcIiArIGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tLWFjdGl2ZVwiIDogXCJcIik7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IG5cbiAgICAgICAgfSwgYS5hLmNyZWF0ZUVsZW1lbnQoaS5hLCB7XG4gICAgICAgICAgaXNSb3V0ZWQ6IGUucm91dGVkLFxuICAgICAgICAgIHRvOiBlLnVybCxcbiAgICAgICAgICB0aXRsZTogZS50aXRsZSxcbiAgICAgICAgICBcImFyaWEtY3VycmVudFwiOiB0ICYmIFwicGFnZVwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1saW5rXCJcbiAgICAgICAgfSwgZS50aXRsZSksICEhZS5jaGlsZHJlbiAmJiBlLmNoaWxkcmVuLmxlbmd0aCA+IDAgJiYgYS5hLmNyZWF0ZUVsZW1lbnQobCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBtID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSB7XG4gICAgICAgICAgYWN0aXZlOiAhMSxcbiAgICAgICAgICBsYXN0TW9kaWZpZWQ6IDAsXG4gICAgICAgICAgbGV2ZWw6IDAsXG4gICAgICAgICAgcGF0aDogXCJcIixcbiAgICAgICAgICB0aXRsZTogXCJcIixcbiAgICAgICAgICB1cmw6IFwiXCIsXG4gICAgICAgICAgY2hpbGRyZW46IGUuaXRlbXNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwibmF2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzLFxuICAgICAgICAgIHJvbGU6IFwibmF2aWdhdGlvblwiLFxuICAgICAgICAgIGl0ZW1TY29wZTogITAsXG4gICAgICAgICAgaXRlbVR5cGU6IFwiaHR0cDovL3NjaGVtYS5vcmcvU2l0ZU5hdmlnYXRpb25FbGVtZW50XCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IGUuYWNjZXNzaWJpbGl0eUxhYmVsXG4gICAgICAgIH0sIGEuYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIHQpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgZiA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHMuYSkoT2JqZWN0KHMuYikobSwgXCJjbXAtbmF2aWdhdGlvblwiKSwgby5hLCBcIk5hdmlnYXRpb24gVjFcIik7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBmO1xuICAgIH1cbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
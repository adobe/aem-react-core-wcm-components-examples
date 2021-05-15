(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListV2"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/authoring/list/v2/ListV2.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/authoring/list/v2/ListV2.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(s) {
      if (t[s]) return t[s].exports;
      var r = t[s] = {
        i: s,
        l: !1,
        exports: {}
      };
      return e[s].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, s) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: s
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
      var s = Object.create(null);
      if (n.r(s), Object.defineProperty(s, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) n.d(s, r, function (t) {
        return e[t];
      }.bind(null, r));
      return s;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 30);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return o;
      }), n.d(t, "a", function () {
        return c;
      });
      var s = n(0),
          r = n.n(s);

      const a = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return r.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            o = (e, t) => n => {
        const r = n.baseCssClass,
              a = r && r.trim().length > 0 ? r : t,
              o = { ...n,
          baseCssClass: a
        };
        return s.createElement(e, Object.assign({}, o));
      },
            c = (e, t, n, r) => o => {
        const c = t(o),
              {
          hidePlaceHolder: i = !1,
          isInEditor: l = !1
        } = o;
        return s.createElement(s.Fragment, null, !c && s.createElement(e, Object.assign({}, o)), c && l && !i && s.createElement(a, {
          emptyTextAppend: r,
          componentTitle: n
        }));
      };
    },
    10: function (e, t, n) {
      "use strict";

      function s(e) {
        return null == e.items || 0 === e.items.length;
      }

      n.d(t, "a", function () {
        return s;
      });
    },
    19: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "ListV2ItemModificationDate", function () {
        return i;
      }), n.d(t, "ListV2ItemContent", function () {
        return l;
      }), n.d(t, "ListV2Anchor", function () {
        return u;
      }), n.d(t, "ListV2ItemDescription", function () {
        return m;
      }), n.d(t, "ListV2Impl", function () {
        return d;
      });
      var s = n(0),
          r = n.n(s),
          a = n(1),
          o = n(2),
          c = n(10);

      const i = e => {
        const t = e.lastModifiedFormatted ? e.lastModifiedFormatted : "";
        return r.a.createElement("span", {
          className: e.baseCssClass + "__item-date"
        }, t);
      },
            l = e => r.a.createElement(r.a.Fragment, null, r.a.createElement("span", {
        className: e.baseCssClass + "__item-title"
      }, e.title), e.showModificationDate && r.a.createElement(i, Object.assign({}, e))),
            u = e => r.a.createElement(o.a, {
        isRouted: e.routed,
        className: e.baseCssClass + "__item-link",
        to: e.url
      }, r.a.createElement(l, Object.assign({}, e))),
            m = e => r.a.createElement("span", {
        className: e.baseCssClass + "__item-description"
      }, "$", e.description),
            d = e => {
        const t = t => r.a.createElement("li", {
          className: e.baseCssClass + "__item"
        }, r.a.createElement("article", null, e.linkItems && !!t.url && r.a.createElement(u, Object.assign({}, t)), !e.linkItems && r.a.createElement(l, Object.assign({}, t, {
          index: t.index
        })), e.showDescription && r.a.createElement(m, Object.assign({}, t))));

        return r.a.createElement("ul", {
          className: e.baseCssClass
        }, e.items.map((n, s) => r.a.createElement(t, Object.assign({}, n, {
          key: "cmp-list-" + s,
          baseCssClass: e.baseCssClass,
          routed: n.routed,
          index: s
        }))));
      };

      t.default = e => {
        const t = Object(a.a)(Object(a.b)(d, "cmp-list"), c.a, "List V2");
        return r.a.createElement(t, Object.assign({}, e));
      };
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return o;
      });
      var s = n(0),
          r = n.n(s),
          a = n(3);

      const o = e => {
        const {
          to: t,
          isRouted: n,
          ...s
        } = e;
        if (void 0 === t || 0 === t.trim().length) return r.a.createElement("a", Object.assign({
          href: "#"
        }, s));
        return /^https?:\/\//.test(t) || !n ? r.a.createElement("a", Object.assign({
          href: t
        }, s)) : r.a.createElement(a.Link, Object.assign({}, s, {
          to: t
        }));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    30: function (e, t, n) {
      e.exports = n(19);
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9hdXRob3JpbmcvbGlzdC92Mi9MaXN0VjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTywyRUFBMkU7QUFDbEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVDQUF1QztBQUM5QztBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0dBQW9HLDREQUE0RDtBQUN6SztBQUNBLFNBQVMsOERBQThEOztBQUV2RTtBQUNBO0FBQ0EsU0FBUyw2REFBNkQ7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBa0I7QUFDNUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvTGlzdFYyLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4ocykge1xuICAgICAgaWYgKHRbc10pIHJldHVybiB0W3NdLmV4cG9ydHM7XG4gICAgICB2YXIgciA9IHRbc10gPSB7XG4gICAgICAgIGk6IHMsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW3NdLmNhbGwoci5leHBvcnRzLCByLCByLmV4cG9ydHMsIG4pLCByLmwgPSAhMCwgci5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgcykge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IHNcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciBzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIocyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciByIGluIGUpIG4uZChzLCByLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCByKSk7XG4gICAgICByZXR1cm4gcztcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMzApO1xuICB9KHtcbiAgICAwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgICB2YXIgcyA9IG4oMCksXG4gICAgICAgICAgciA9IG4ubihzKTtcblxuICAgICAgY29uc3QgYSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gKG51bGwgIT0gZS5jb21wb25lbnRUaXRsZSAmJiBlLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDAgPyBlLmNvbXBvbmVudFRpdGxlICsgXCIgLSBcIiA6IFwiXCIpICsgKG51bGwgIT0gZS5lbXB0eVRleHRBcHBlbmQgPyBlLmVtcHR5VGV4dEFwcGVuZCA6IFwiUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50XCIpO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjcS1wbGFjZWhvbGRlclwiICsgKG51bGwgIT0gZS5jbGFzc0FwcGVuZCA/IFwiIFwiICsgZS5jbGFzc0FwcGVuZCA6IFwiXCIpXG4gICAgICAgIH0sIHQpO1xuICAgICAgfSxcbiAgICAgICAgICAgIG8gPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBuLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgICAgYSA9IHIgJiYgci50cmltKCkubGVuZ3RoID4gMCA/IHIgOiB0LFxuICAgICAgICAgICAgICBvID0geyAuLi5uLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogYVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gcy5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIG8pKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBjID0gKGUsIHQsIG4sIHIpID0+IG8gPT4ge1xuICAgICAgICBjb25zdCBjID0gdChvKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgIGhpZGVQbGFjZUhvbGRlcjogaSA9ICExLFxuICAgICAgICAgIGlzSW5FZGl0b3I6IGwgPSAhMVxuICAgICAgICB9ID0gbztcbiAgICAgICAgcmV0dXJuIHMuY3JlYXRlRWxlbWVudChzLkZyYWdtZW50LCBudWxsLCAhYyAmJiBzLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgbykpLCBjICYmIGwgJiYgIWkgJiYgcy5jcmVhdGVFbGVtZW50KGEsIHtcbiAgICAgICAgICBlbXB0eVRleHRBcHBlbmQ6IHIsXG4gICAgICAgICAgY29tcG9uZW50VGl0bGU6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDEwOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIHMoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlLml0ZW1zIHx8IDAgPT09IGUuaXRlbXMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIDE5OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4ucih0KSwgbi5kKHQsIFwiTGlzdFYySXRlbU1vZGlmaWNhdGlvbkRhdGVcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH0pLCBuLmQodCwgXCJMaXN0VjJJdGVtQ29udGVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSksIG4uZCh0LCBcIkxpc3RWMkFuY2hvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1O1xuICAgICAgfSksIG4uZCh0LCBcIkxpc3RWMkl0ZW1EZXNjcmlwdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfSksIG4uZCh0LCBcIkxpc3RWMkltcGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHMgPSBuKDApLFxuICAgICAgICAgIHIgPSBuLm4ocyksXG4gICAgICAgICAgYSA9IG4oMSksXG4gICAgICAgICAgbyA9IG4oMiksXG4gICAgICAgICAgYyA9IG4oMTApO1xuXG4gICAgICBjb25zdCBpID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBlLmxhc3RNb2RpZmllZEZvcm1hdHRlZCA/IGUubGFzdE1vZGlmaWVkRm9ybWF0dGVkIDogXCJcIjtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLWRhdGVcIlxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBsID0gZSA9PiByLmEuY3JlYXRlRWxlbWVudChyLmEuRnJhZ21lbnQsIG51bGwsIHIuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS10aXRsZVwiXG4gICAgICB9LCBlLnRpdGxlKSwgZS5zaG93TW9kaWZpY2F0aW9uRGF0ZSAmJiByLmEuY3JlYXRlRWxlbWVudChpLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpLFxuICAgICAgICAgICAgdSA9IGUgPT4gci5hLmNyZWF0ZUVsZW1lbnQoby5hLCB7XG4gICAgICAgIGlzUm91dGVkOiBlLnJvdXRlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLWxpbmtcIixcbiAgICAgICAgdG86IGUudXJsXG4gICAgICB9LCByLmEuY3JlYXRlRWxlbWVudChsLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpLFxuICAgICAgICAgICAgbSA9IGUgPT4gci5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLWRlc2NyaXB0aW9uXCJcbiAgICAgIH0sIFwiJFwiLCBlLmRlc2NyaXB0aW9uKSxcbiAgICAgICAgICAgIGQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IHQgPT4gci5hLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtXCJcbiAgICAgICAgfSwgci5hLmNyZWF0ZUVsZW1lbnQoXCJhcnRpY2xlXCIsIG51bGwsIGUubGlua0l0ZW1zICYmICEhdC51cmwgJiYgci5hLmNyZWF0ZUVsZW1lbnQodSwgT2JqZWN0LmFzc2lnbih7fSwgdCkpLCAhZS5saW5rSXRlbXMgJiYgci5hLmNyZWF0ZUVsZW1lbnQobCwgT2JqZWN0LmFzc2lnbih7fSwgdCwge1xuICAgICAgICAgIGluZGV4OiB0LmluZGV4XG4gICAgICAgIH0pKSwgZS5zaG93RGVzY3JpcHRpb24gJiYgci5hLmNyZWF0ZUVsZW1lbnQobSwgT2JqZWN0LmFzc2lnbih7fSwgdCkpKSk7XG5cbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwidWxcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3NcbiAgICAgICAgfSwgZS5pdGVtcy5tYXAoKG4sIHMpID0+IHIuYS5jcmVhdGVFbGVtZW50KHQsIE9iamVjdC5hc3NpZ24oe30sIG4sIHtcbiAgICAgICAgICBrZXk6IFwiY21wLWxpc3QtXCIgKyBzLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogZS5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgcm91dGVkOiBuLnJvdXRlZCxcbiAgICAgICAgICBpbmRleDogc1xuICAgICAgICB9KSkpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KGEuYSkoT2JqZWN0KGEuYikoZCwgXCJjbXAtbGlzdFwiKSwgYy5hLCBcIkxpc3QgVjJcIik7XG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KTtcbiAgICAgIHZhciBzID0gbigwKSxcbiAgICAgICAgICByID0gbi5uKHMpLFxuICAgICAgICAgIGEgPSBuKDMpO1xuXG4gICAgICBjb25zdCBvID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0bzogdCxcbiAgICAgICAgICBpc1JvdXRlZDogbixcbiAgICAgICAgICAuLi5zXG4gICAgICAgIH0gPSBlO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0IHx8IDAgPT09IHQudHJpbSgpLmxlbmd0aCkgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICB9LCBzKSk7XG4gICAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodCkgfHwgIW4gPyByLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogdFxuICAgICAgICB9LCBzKSkgOiByLmEuY3JlYXRlRWxlbWVudChhLkxpbmssIE9iamVjdC5hc3NpZ24oe30sIHMsIHtcbiAgICAgICAgICB0bzogdFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMzogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuICAgIH0sXG4gICAgMzA6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBlLmV4cG9ydHMgPSBuKDE5KTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
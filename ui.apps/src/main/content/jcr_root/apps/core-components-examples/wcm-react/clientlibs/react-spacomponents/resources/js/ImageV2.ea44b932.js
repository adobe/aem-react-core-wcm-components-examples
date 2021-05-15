(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ImageV2"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/authoring/image/v2/ImageV2.js":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/authoring/image/v2/ImageV2.js ***!
  \***********************************************************************************************/
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
    }, n.p = "", n(n.s = 34);
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
      var r = n(0),
          a = n.n(r);

      const s = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return a.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            o = (e, t) => n => {
        const a = n.baseCssClass,
              s = a && a.trim().length > 0 ? a : t,
              o = { ...n,
          baseCssClass: s
        };
        return r.createElement(e, Object.assign({}, o));
      },
            c = (e, t, n, a) => o => {
        const c = t(o),
              {
          hidePlaceHolder: i = !1,
          isInEditor: l = !1
        } = o;
        return r.createElement(r.Fragment, null, !c && r.createElement(e, Object.assign({}, o)), c && l && !i && r.createElement(s, {
          emptyTextAppend: a,
          componentTitle: n
        }));
      };
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return o;
      });
      var r = n(0),
          a = n.n(r),
          s = n(3);

      const o = e => {
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
    34: function (e, t, n) {
      e.exports = n(8);
    },
    5: function (e, t, n) {
      "use strict";

      function r(e) {
        return !e.src || 0 === e.src.trim().length;
      }

      n.d(t, "a", function () {
        return r;
      });
    },
    8: function (e, t, n) {
      "use strict";

      n.r(t);
      var r = n(0),
          a = n.n(r),
          s = n(1),
          o = n(2),
          c = n(5);

      const i = e => a.a.createElement(a.a.Fragment, null, a.a.createElement("img", {
        src: e.src,
        className: e.baseCssClass + "__image",
        alt: e.alt
      }), !!e.title && a.a.createElement("span", {
        className: e.baseCssClass + "__title",
        itemProp: "caption"
      }, e.title), e.displayPopupTitle && !!e.title && a.a.createElement("meta", {
        itemProp: "caption",
        content: e.title
      })),
            l = e => e.link && e.link.trim().length > 0 ? a.a.createElement(o.a, {
        className: e.baseCssClass + "__link",
        isRouted: e.routed,
        to: e.link
      }, a.a.createElement(i, Object.assign({}, e))) : a.a.createElement(i, Object.assign({}, e)),
            u = e => {
        const {
          isInEditor: t = !1
        } = e,
              n = t ? e.baseCssClass + " cq-dd-image" : e.baseCssClass;
        return a.a.createElement("div", {
          className: n
        }, a.a.createElement(l, Object.assign({}, e)));
      };

      t.default = e => {
        const t = Object(s.a)(Object(s.b)(u, "cmp-image"), c.a, "Image V2");
        return a.a.createElement(t, Object.assign({}, e));
      };
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9hdXRob3JpbmcvaW1hZ2UvdjIvSW1hZ2VWMi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBdUQsMEJBQTBCLFNBQWtNO0FBQ3JSLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRDQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsaUZBQWtCO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sdUNBQXVDLDhDQUE4QztBQUM1RjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9JbWFnZVYyLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4ocikge1xuICAgICAgaWYgKHRbcl0pIHJldHVybiB0W3JdLmV4cG9ydHM7XG4gICAgICB2YXIgYSA9IHRbcl0gPSB7XG4gICAgICAgIGk6IHIsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW3JdLmNhbGwoYS5leHBvcnRzLCBhLCBhLmV4cG9ydHMsIG4pLCBhLmwgPSAhMCwgYS5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IHJcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciByID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIociksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciBhIGluIGUpIG4uZChyLCBhLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCBhKSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMzQpO1xuICB9KHtcbiAgICAwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKTtcblxuICAgICAgY29uc3QgcyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gKG51bGwgIT0gZS5jb21wb25lbnRUaXRsZSAmJiBlLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDAgPyBlLmNvbXBvbmVudFRpdGxlICsgXCIgLSBcIiA6IFwiXCIpICsgKG51bGwgIT0gZS5lbXB0eVRleHRBcHBlbmQgPyBlLmVtcHR5VGV4dEFwcGVuZCA6IFwiUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50XCIpO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjcS1wbGFjZWhvbGRlclwiICsgKG51bGwgIT0gZS5jbGFzc0FwcGVuZCA/IFwiIFwiICsgZS5jbGFzc0FwcGVuZCA6IFwiXCIpXG4gICAgICAgIH0sIHQpO1xuICAgICAgfSxcbiAgICAgICAgICAgIG8gPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICAgIGNvbnN0IGEgPSBuLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgICAgcyA9IGEgJiYgYS50cmltKCkubGVuZ3RoID4gMCA/IGEgOiB0LFxuICAgICAgICAgICAgICBvID0geyAuLi5uLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogc1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIG8pKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBjID0gKGUsIHQsIG4sIGEpID0+IG8gPT4ge1xuICAgICAgICBjb25zdCBjID0gdChvKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgIGhpZGVQbGFjZUhvbGRlcjogaSA9ICExLFxuICAgICAgICAgIGlzSW5FZGl0b3I6IGwgPSAhMVxuICAgICAgICB9ID0gbztcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChyLkZyYWdtZW50LCBudWxsLCAhYyAmJiByLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgbykpLCBjICYmIGwgJiYgIWkgJiYgci5jcmVhdGVFbGVtZW50KHMsIHtcbiAgICAgICAgICBlbXB0eVRleHRBcHBlbmQ6IGEsXG4gICAgICAgICAgY29tcG9uZW50VGl0bGU6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKSxcbiAgICAgICAgICBzID0gbigzKTtcblxuICAgICAgY29uc3QgbyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG86IHQsXG4gICAgICAgICAgaXNSb3V0ZWQ6IG4sXG4gICAgICAgICAgLi4uclxuICAgICAgICB9ID0gZTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCB8fCAwID09PSB0LnRyaW0oKS5sZW5ndGgpIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogXCIjXCJcbiAgICAgICAgfSwgcikpO1xuICAgICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvLy50ZXN0KHQpIHx8ICFuID8gYS5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IHRcbiAgICAgICAgfSwgcikpIDogYS5hLmNyZWF0ZUVsZW1lbnQocy5MaW5rLCBPYmplY3QuYXNzaWduKHt9LCByLCB7XG4gICAgICAgICAgdG86IHRcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDM0OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbig4KTtcbiAgICB9LFxuICAgIDU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgIHJldHVybiAhZS5zcmMgfHwgMCA9PT0gZS5zcmMudHJpbSgpLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICA4OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4ucih0KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBhID0gbi5uKHIpLFxuICAgICAgICAgIHMgPSBuKDEpLFxuICAgICAgICAgIG8gPSBuKDIpLFxuICAgICAgICAgIGMgPSBuKDUpO1xuXG4gICAgICBjb25zdCBpID0gZSA9PiBhLmEuY3JlYXRlRWxlbWVudChhLmEuRnJhZ21lbnQsIG51bGwsIGEuYS5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3JjOiBlLnNyYyxcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pbWFnZVwiLFxuICAgICAgICBhbHQ6IGUuYWx0XG4gICAgICB9KSwgISFlLnRpdGxlICYmIGEuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fdGl0bGVcIixcbiAgICAgICAgaXRlbVByb3A6IFwiY2FwdGlvblwiXG4gICAgICB9LCBlLnRpdGxlKSwgZS5kaXNwbGF5UG9wdXBUaXRsZSAmJiAhIWUudGl0bGUgJiYgYS5hLmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgaXRlbVByb3A6IFwiY2FwdGlvblwiLFxuICAgICAgICBjb250ZW50OiBlLnRpdGxlXG4gICAgICB9KSksXG4gICAgICAgICAgICBsID0gZSA9PiBlLmxpbmsgJiYgZS5saW5rLnRyaW0oKS5sZW5ndGggPiAwID8gYS5hLmNyZWF0ZUVsZW1lbnQoby5hLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fbGlua1wiLFxuICAgICAgICBpc1JvdXRlZDogZS5yb3V0ZWQsXG4gICAgICAgIHRvOiBlLmxpbmtcbiAgICAgIH0sIGEuYS5jcmVhdGVFbGVtZW50KGksIE9iamVjdC5hc3NpZ24oe30sIGUpKSkgOiBhLmEuY3JlYXRlRWxlbWVudChpLCBPYmplY3QuYXNzaWduKHt9LCBlKSksXG4gICAgICAgICAgICB1ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpc0luRWRpdG9yOiB0ID0gITFcbiAgICAgICAgfSA9IGUsXG4gICAgICAgICAgICAgIG4gPSB0ID8gZS5iYXNlQ3NzQ2xhc3MgKyBcIiBjcS1kZC1pbWFnZVwiIDogZS5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBuXG4gICAgICAgIH0sIGEuYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChzLmEpKE9iamVjdChzLmIpKHUsIFwiY21wLWltYWdlXCIpLCBjLmEsIFwiSW1hZ2UgVjJcIik7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
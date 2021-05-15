(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TextV2"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/authoring/text/v2/TextV2.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/authoring/text/v2/TextV2.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
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
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
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
    }, n.p = "", n(n.s = 32);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return a;
      }), n.d(t, "a", function () {
        return s;
      });
      var r = n(0),
          o = n.n(r);

      const c = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return o.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            a = (e, t) => n => {
        const o = n.baseCssClass,
              c = o && o.trim().length > 0 ? o : t,
              a = { ...n,
          baseCssClass: c
        };
        return r.createElement(e, Object.assign({}, a));
      },
            s = (e, t, n, o) => a => {
        const s = t(a),
              {
          hidePlaceHolder: u = !1,
          isInEditor: l = !1
        } = a;
        return r.createElement(r.Fragment, null, !s && r.createElement(e, Object.assign({}, a)), s && l && !u && r.createElement(c, {
          emptyTextAppend: o,
          componentTitle: n
        }));
      };
    },
    11: function (e, t, n) {
      "use strict";

      function r(e) {
        return null == e.text || 0 === e.text.length;
      }

      n.d(t, "a", function () {
        return r;
      });
    },
    20: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "TextV2RichText", function () {
        return s;
      }), n.d(t, "TextV2PlainText", function () {
        return u;
      });
      var r = n(0),
          o = n.n(r),
          c = n(1),
          a = n(11);

      const s = e => {
        const t = e.text,
              n = e.id ? e.id : e.cqPath ? e.cqPath.substr(e.cqPath.lastIndexOf("/") + 1) : "";
        return o.a.createElement("div", {
          className: e.baseCssClass,
          id: n,
          "data-rte-editelement": !0,
          dangerouslySetInnerHTML: {
            __html: t
          }
        });
      },
            u = e => o.a.createElement("div", {
        className: e.baseCssClass
      }, o.a.createElement("p", {
        className: "cmp-text__paragraph"
      }, e.text)),
            l = e => {
        const {
          richText: t = !1
        } = e;
        return t ? o.a.createElement(s, Object.assign({}, e)) : o.a.createElement(u, Object.assign({}, e));
      };

      t.default = e => {
        const t = Object(c.a)(Object(c.b)(l, "cmp-text"), a.a, "Text V2");
        return o.a.createElement(t, Object.assign({}, e));
      };
    },
    32: function (e, t, n) {
      e.exports = n(20);
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9hdXRob3JpbmcvdGV4dC92Mi9UZXh0VjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsd0RBQXdELDZDQUE2QztBQUNyRzs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvVGV4dFYyLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4ocikge1xuICAgICAgaWYgKHRbcl0pIHJldHVybiB0W3JdLmV4cG9ydHM7XG4gICAgICB2YXIgbyA9IHRbcl0gPSB7XG4gICAgICAgIGk6IHIsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLCBvLCBvLmV4cG9ydHMsIG4pLCBvLmwgPSAhMCwgby5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IHJcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciByID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIociksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciBvIGluIGUpIG4uZChyLCBvLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCBvKSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMzIpO1xuICB9KHtcbiAgICAwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgbyA9IG4ubihyKTtcblxuICAgICAgY29uc3QgYyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gKG51bGwgIT0gZS5jb21wb25lbnRUaXRsZSAmJiBlLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDAgPyBlLmNvbXBvbmVudFRpdGxlICsgXCIgLSBcIiA6IFwiXCIpICsgKG51bGwgIT0gZS5lbXB0eVRleHRBcHBlbmQgPyBlLmVtcHR5VGV4dEFwcGVuZCA6IFwiUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50XCIpO1xuICAgICAgICByZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjcS1wbGFjZWhvbGRlclwiICsgKG51bGwgIT0gZS5jbGFzc0FwcGVuZCA/IFwiIFwiICsgZS5jbGFzc0FwcGVuZCA6IFwiXCIpXG4gICAgICAgIH0sIHQpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGEgPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSBuLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgICAgYyA9IG8gJiYgby50cmltKCkubGVuZ3RoID4gMCA/IG8gOiB0LFxuICAgICAgICAgICAgICBhID0geyAuLi5uLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGEpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBzID0gKGUsIHQsIG4sIG8pID0+IGEgPT4ge1xuICAgICAgICBjb25zdCBzID0gdChhKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgIGhpZGVQbGFjZUhvbGRlcjogdSA9ICExLFxuICAgICAgICAgIGlzSW5FZGl0b3I6IGwgPSAhMVxuICAgICAgICB9ID0gYTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChyLkZyYWdtZW50LCBudWxsLCAhcyAmJiByLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgYSkpLCBzICYmIGwgJiYgIXUgJiYgci5jcmVhdGVFbGVtZW50KGMsIHtcbiAgICAgICAgICBlbXB0eVRleHRBcHBlbmQ6IG8sXG4gICAgICAgICAgY29tcG9uZW50VGl0bGU6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDExOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlLnRleHQgfHwgMCA9PT0gZS50ZXh0Lmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAyMDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcIlRleHRWMlJpY2hUZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KSwgbi5kKHQsIFwiVGV4dFYyUGxhaW5UZXh0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBvID0gbi5uKHIpLFxuICAgICAgICAgIGMgPSBuKDEpLFxuICAgICAgICAgIGEgPSBuKDExKTtcblxuICAgICAgY29uc3QgcyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gZS50ZXh0LFxuICAgICAgICAgICAgICBuID0gZS5pZCA/IGUuaWQgOiBlLmNxUGF0aCA/IGUuY3FQYXRoLnN1YnN0cihlLmNxUGF0aC5sYXN0SW5kZXhPZihcIi9cIikgKyAxKSA6IFwiXCI7XG4gICAgICAgIHJldHVybiBvLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICBpZDogbixcbiAgICAgICAgICBcImRhdGEtcnRlLWVkaXRlbGVtZW50XCI6ICEwLFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICBfX2h0bWw6IHRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgICAgICAgIHUgPSBlID0+IG8uYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzc1xuICAgICAgfSwgby5hLmNyZWF0ZUVsZW1lbnQoXCJwXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBcImNtcC10ZXh0X19wYXJhZ3JhcGhcIlxuICAgICAgfSwgZS50ZXh0KSksXG4gICAgICAgICAgICBsID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICByaWNoVGV4dDogdCA9ICExXG4gICAgICAgIH0gPSBlO1xuICAgICAgICByZXR1cm4gdCA/IG8uYS5jcmVhdGVFbGVtZW50KHMsIE9iamVjdC5hc3NpZ24oe30sIGUpKSA6IG8uYS5jcmVhdGVFbGVtZW50KHUsIE9iamVjdC5hc3NpZ24oe30sIGUpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KGMuYSkoT2JqZWN0KGMuYikobCwgXCJjbXAtdGV4dFwiKSwgYS5hLCBcIlRleHQgVjJcIik7XG4gICAgICAgIHJldHVybiBvLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMzI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBlLmV4cG9ydHMgPSBuKDIwKTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
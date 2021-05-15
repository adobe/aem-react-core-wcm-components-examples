(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["SeparatorV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/authoring/separator/v1/SeparatorV1.js":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/authoring/separator/v1/SeparatorV1.js ***!
  \*******************************************************************************************************/
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
    }, n.p = "", n(n.s = 37);
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
    15: function (e, t, n) {
      "use strict";

      function r(e) {
        return !1;
      }

      n.d(t, "a", function () {
        return r;
      });
    },
    24: function (e, t, n) {
      "use strict";

      n.r(t);
      var r = n(0),
          o = n.n(r),
          c = n(1),
          a = n(15);

      const s = e => o.a.createElement("div", {
        className: e.baseCssClass
      }, o.a.createElement("hr", {
        className: e.baseCssClass + "__horizontal-rule"
      }));

      t.default = e => {
        const t = Object(c.a)(Object(c.b)(s, "cmp-separator"), a.a, "Separator V1");
        return o.a.createElement(t, Object.assign({}, e));
      };
    },
    37: function (e, t, n) {
      e.exports = n(24);
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9hdXRob3Jpbmcvc2VwYXJhdG9yL3YxL1NlcGFyYXRvclYxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUF1RCwwQkFBMEIsU0FBa007QUFDclIsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNENBQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFIiwiZmlsZSI6ImpzL1NlcGFyYXRvclYxLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4ocikge1xuICAgICAgaWYgKHRbcl0pIHJldHVybiB0W3JdLmV4cG9ydHM7XG4gICAgICB2YXIgbyA9IHRbcl0gPSB7XG4gICAgICAgIGk6IHIsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW3JdLmNhbGwoby5leHBvcnRzLCBvLCBvLmV4cG9ydHMsIG4pLCBvLmwgPSAhMCwgby5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgcikge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IHJcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciByID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIociksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciBvIGluIGUpIG4uZChyLCBvLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCBvKSk7XG4gICAgICByZXR1cm4gcjtcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMzcpO1xuICB9KHtcbiAgICAwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgbyA9IG4ubihyKTtcblxuICAgICAgY29uc3QgYyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gKG51bGwgIT0gZS5jb21wb25lbnRUaXRsZSAmJiBlLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDAgPyBlLmNvbXBvbmVudFRpdGxlICsgXCIgLSBcIiA6IFwiXCIpICsgKG51bGwgIT0gZS5lbXB0eVRleHRBcHBlbmQgPyBlLmVtcHR5VGV4dEFwcGVuZCA6IFwiUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50XCIpO1xuICAgICAgICByZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjcS1wbGFjZWhvbGRlclwiICsgKG51bGwgIT0gZS5jbGFzc0FwcGVuZCA/IFwiIFwiICsgZS5jbGFzc0FwcGVuZCA6IFwiXCIpXG4gICAgICAgIH0sIHQpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGEgPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICAgIGNvbnN0IG8gPSBuLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgICAgYyA9IG8gJiYgby50cmltKCkubGVuZ3RoID4gMCA/IG8gOiB0LFxuICAgICAgICAgICAgICBhID0geyAuLi5uLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogY1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGEpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBzID0gKGUsIHQsIG4sIG8pID0+IGEgPT4ge1xuICAgICAgICBjb25zdCBzID0gdChhKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgIGhpZGVQbGFjZUhvbGRlcjogdSA9ICExLFxuICAgICAgICAgIGlzSW5FZGl0b3I6IGwgPSAhMVxuICAgICAgICB9ID0gYTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChyLkZyYWdtZW50LCBudWxsLCAhcyAmJiByLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgYSkpLCBzICYmIGwgJiYgIXUgJiYgci5jcmVhdGVFbGVtZW50KGMsIHtcbiAgICAgICAgICBlbXB0eVRleHRBcHBlbmQ6IG8sXG4gICAgICAgICAgY29tcG9uZW50VGl0bGU6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDE1OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgMjQ6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIG8gPSBuLm4ociksXG4gICAgICAgICAgYyA9IG4oMSksXG4gICAgICAgICAgYSA9IG4oMTUpO1xuXG4gICAgICBjb25zdCBzID0gZSA9PiBvLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3NcbiAgICAgIH0sIG8uYS5jcmVhdGVFbGVtZW50KFwiaHJcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2hvcml6b250YWwtcnVsZVwiXG4gICAgICB9KSk7XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KGMuYSkoT2JqZWN0KGMuYikocywgXCJjbXAtc2VwYXJhdG9yXCIpLCBhLmEsIFwiU2VwYXJhdG9yIFYxXCIpO1xuICAgICAgICByZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM3OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigyNCk7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
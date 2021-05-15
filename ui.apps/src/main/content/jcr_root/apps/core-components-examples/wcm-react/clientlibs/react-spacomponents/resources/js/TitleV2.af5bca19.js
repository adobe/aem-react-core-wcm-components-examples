(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TitleV2"],{

/***/ "../../react-base-components/dist/authoring/title/v2/TitleV2.js":
/*!************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/title/v2/TitleV2.js ***!
  \************************************************************************************************************************/
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
    }, n.p = "", n(n.s = 33);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return a;
      }), n.d(t, "a", function () {
        return c;
      });
      var r = n(0),
          o = n.n(r);

      const s = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return o.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            a = (e, t) => n => {
        const o = n.baseCssClass,
              s = o && o.trim().length > 0 ? o : t,
              a = { ...n,
          baseCssClass: s
        };
        return r.createElement(e, Object.assign({}, a));
      },
            c = (e, t, n, o) => a => {
        const c = t(a),
              {
          hidePlaceHolder: i = !1,
          isInEditor: l = !1
        } = a;
        return r.createElement(r.Fragment, null, !c && r.createElement(e, Object.assign({}, a)), c && l && !i && r.createElement(s, {
          emptyTextAppend: o,
          componentTitle: n
        }));
      };
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return a;
      });
      var r = n(0),
          o = n.n(r),
          s = n(3);

      const a = e => {
        const {
          to: t,
          isRouted: n,
          ...r
        } = e;
        if (void 0 === t || 0 === t.trim().length) return o.a.createElement("a", Object.assign({
          href: "#"
        }, r));
        return /^https?:\/\//.test(t) || !n ? o.a.createElement("a", Object.assign({
          href: t
        }, r)) : o.a.createElement(s.Link, Object.assign({}, r, {
          to: t
        }));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    33: function (e, t, n) {
      e.exports = n(7);
    },
    4: function (e, t, n) {
      "use strict";

      function r(e) {
        return null == e.text || 0 === e.text.trim().length;
      }

      n.d(t, "a", function () {
        return r;
      });
    },
    7: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "TitleV2Link", function () {
        return l;
      }), n.d(t, "TitleV2Contents", function () {
        return u;
      });
      var r = n(0),
          o = n.n(r),
          s = n(1),
          a = n(2),
          c = n(4);

      const i = e => e.nested ? "-" : "__",
            l = e => o.a.createElement(a.a, {
        className: e.baseCssClass + i(e) + "link",
        isRouted: e.routed,
        to: e.linkURL
      }, e.text),
            u = e => e.linkDisabled ? o.a.createElement(o.a.Fragment, null, e.text) : o.a.createElement(l, Object.assign({}, e)),
            f = e => {
        const t = e.type ? e.type.toString() : "h3";
        return o.a.createElement("div", {
          className: e.baseCssClass
        }, o.a.createElement(t, {
          className: e.baseCssClass + i(e) + "text"
        }, o.a.createElement(u, Object.assign({}, e))));
      };

      t.default = e => {
        const t = Object(s.a)(Object(s.b)(f, "cmp-title"), c.a, "TitleV2");
        return o.a.createElement(t, Object.assign({}, e));
      };
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvYXV0aG9yaW5nL3RpdGxlL3YyL1RpdGxlVjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRDtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUFrQjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLDJIQUEySDtBQUMzSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVMsdUNBQXVDO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvVGl0bGVWMi5hZjViY2ExOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHIpIHtcbiAgICAgIGlmICh0W3JdKSByZXR1cm4gdFtyXS5leHBvcnRzO1xuICAgICAgdmFyIG8gPSB0W3JdID0ge1xuICAgICAgICBpOiByLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cywgbywgby5leHBvcnRzLCBuKSwgby5sID0gITAsIG8uZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiByXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHIpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgbyBpbiBlKSBuLmQociwgbywgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgbykpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDMzKTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIG8gPSBuLm4ocik7XG5cbiAgICAgIGNvbnN0IHMgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBhID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCBvID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIHMgPSBvICYmIG8udHJpbSgpLmxlbmd0aCA+IDAgPyBvIDogdCxcbiAgICAgICAgICAgICAgYSA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBhKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgYyA9IChlLCB0LCBuLCBvKSA9PiBhID0+IHtcbiAgICAgICAgY29uc3QgYyA9IHQoYSksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGkgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiBsID0gITFcbiAgICAgICAgfSA9IGE7XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoci5GcmFnbWVudCwgbnVsbCwgIWMgJiYgci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGEpKSwgYyAmJiBsICYmICFpICYmIHIuY3JlYXRlRWxlbWVudChzLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiBvLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIG8gPSBuLm4ociksXG4gICAgICAgICAgcyA9IG4oMyk7XG5cbiAgICAgIGNvbnN0IGEgPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRvOiB0LFxuICAgICAgICAgIGlzUm91dGVkOiBuLFxuICAgICAgICAgIC4uLnJcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQgfHwgMCA9PT0gdC50cmltKCkubGVuZ3RoKSByZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgIH0sIHIpKTtcbiAgICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0KSB8fCAhbiA/IG8uYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiB0XG4gICAgICAgIH0sIHIpKSA6IG8uYS5jcmVhdGVFbGVtZW50KHMuTGluaywgT2JqZWN0LmFzc2lnbih7fSwgciwge1xuICAgICAgICAgIHRvOiB0XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAzOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4gICAgfSxcbiAgICAzMzogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGUuZXhwb3J0cyA9IG4oNyk7XG4gICAgfSxcbiAgICA0OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlLnRleHQgfHwgMCA9PT0gZS50ZXh0LnRyaW0oKS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgNzogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcIlRpdGxlVjJMaW5rXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KSwgbi5kKHQsIFwiVGl0bGVWMkNvbnRlbnRzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBvID0gbi5uKHIpLFxuICAgICAgICAgIHMgPSBuKDEpLFxuICAgICAgICAgIGEgPSBuKDIpLFxuICAgICAgICAgIGMgPSBuKDQpO1xuXG4gICAgICBjb25zdCBpID0gZSA9PiBlLm5lc3RlZCA/IFwiLVwiIDogXCJfX1wiLFxuICAgICAgICAgICAgbCA9IGUgPT4gby5hLmNyZWF0ZUVsZW1lbnQoYS5hLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBpKGUpICsgXCJsaW5rXCIsXG4gICAgICAgIGlzUm91dGVkOiBlLnJvdXRlZCxcbiAgICAgICAgdG86IGUubGlua1VSTFxuICAgICAgfSwgZS50ZXh0KSxcbiAgICAgICAgICAgIHUgPSBlID0+IGUubGlua0Rpc2FibGVkID8gby5hLmNyZWF0ZUVsZW1lbnQoby5hLkZyYWdtZW50LCBudWxsLCBlLnRleHQpIDogby5hLmNyZWF0ZUVsZW1lbnQobCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpLFxuICAgICAgICAgICAgZiA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gZS50eXBlID8gZS50eXBlLnRvU3RyaW5nKCkgOiBcImgzXCI7XG4gICAgICAgIHJldHVybiBvLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzc1xuICAgICAgICB9LCBvLmEuY3JlYXRlRWxlbWVudCh0LCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIGkoZSkgKyBcInRleHRcIlxuICAgICAgICB9LCBvLmEuY3JlYXRlRWxlbWVudCh1LCBPYmplY3QuYXNzaWduKHt9LCBlKSkpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHMuYSkoT2JqZWN0KHMuYikoZiwgXCJjbXAtdGl0bGVcIiksIGMuYSwgXCJUaXRsZVYyXCIpO1xuICAgICAgICByZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
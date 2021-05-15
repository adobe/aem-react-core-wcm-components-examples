(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ImageV2"],{

/***/ "../../react-base-components/dist/authoring/image/v2/ImageV2.js":
/*!************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/image/v2/ImageV2.js ***!
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvYXV0aG9yaW5nL2ltYWdlL3YyL0ltYWdlVjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRDtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUFrQjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVDQUF1Qyw4Q0FBOEM7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUNBQXVDO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvSW1hZ2VWMi5hZjViY2ExOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHIpIHtcbiAgICAgIGlmICh0W3JdKSByZXR1cm4gdFtyXS5leHBvcnRzO1xuICAgICAgdmFyIGEgPSB0W3JdID0ge1xuICAgICAgICBpOiByLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtyXS5jYWxsKGEuZXhwb3J0cywgYSwgYS5leHBvcnRzLCBuKSwgYS5sID0gITAsIGEuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiByXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHIpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgYSBpbiBlKSBuLmQociwgYSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgYSkpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDM0KTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ocik7XG5cbiAgICAgIGNvbnN0IHMgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBvID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCBhID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIHMgPSBhICYmIGEudHJpbSgpLmxlbmd0aCA+IDAgPyBhIDogdCxcbiAgICAgICAgICAgICAgbyA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBvKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgYyA9IChlLCB0LCBuLCBhKSA9PiBvID0+IHtcbiAgICAgICAgY29uc3QgYyA9IHQobyksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGkgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiBsID0gITFcbiAgICAgICAgfSA9IG87XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoci5GcmFnbWVudCwgbnVsbCwgIWMgJiYgci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIG8pKSwgYyAmJiBsICYmICFpICYmIHIuY3JlYXRlRWxlbWVudChzLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiBhLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ociksXG4gICAgICAgICAgcyA9IG4oMyk7XG5cbiAgICAgIGNvbnN0IG8gPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRvOiB0LFxuICAgICAgICAgIGlzUm91dGVkOiBuLFxuICAgICAgICAgIC4uLnJcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQgfHwgMCA9PT0gdC50cmltKCkubGVuZ3RoKSByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgIH0sIHIpKTtcbiAgICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0KSB8fCAhbiA/IGEuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiB0XG4gICAgICAgIH0sIHIpKSA6IGEuYS5jcmVhdGVFbGVtZW50KHMuTGluaywgT2JqZWN0LmFzc2lnbih7fSwgciwge1xuICAgICAgICAgIHRvOiB0XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAzOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4gICAgfSxcbiAgICAzNDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGUuZXhwb3J0cyA9IG4oOCk7XG4gICAgfSxcbiAgICA1OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIHIoZSkge1xuICAgICAgICByZXR1cm4gIWUuc3JjIHx8IDAgPT09IGUuc3JjLnRyaW0oKS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgODogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKSxcbiAgICAgICAgICBzID0gbigxKSxcbiAgICAgICAgICBvID0gbigyKSxcbiAgICAgICAgICBjID0gbig1KTtcblxuICAgICAgY29uc3QgaSA9IGUgPT4gYS5hLmNyZWF0ZUVsZW1lbnQoYS5hLkZyYWdtZW50LCBudWxsLCBhLmEuY3JlYXRlRWxlbWVudChcImltZ1wiLCB7XG4gICAgICAgIHNyYzogZS5zcmMsXG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faW1hZ2VcIixcbiAgICAgICAgYWx0OiBlLmFsdFxuICAgICAgfSksICEhZS50aXRsZSAmJiBhLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX3RpdGxlXCIsXG4gICAgICAgIGl0ZW1Qcm9wOiBcImNhcHRpb25cIlxuICAgICAgfSwgZS50aXRsZSksIGUuZGlzcGxheVBvcHVwVGl0bGUgJiYgISFlLnRpdGxlICYmIGEuYS5jcmVhdGVFbGVtZW50KFwibWV0YVwiLCB7XG4gICAgICAgIGl0ZW1Qcm9wOiBcImNhcHRpb25cIixcbiAgICAgICAgY29udGVudDogZS50aXRsZVxuICAgICAgfSkpLFxuICAgICAgICAgICAgbCA9IGUgPT4gZS5saW5rICYmIGUubGluay50cmltKCkubGVuZ3RoID4gMCA/IGEuYS5jcmVhdGVFbGVtZW50KG8uYSwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2xpbmtcIixcbiAgICAgICAgaXNSb3V0ZWQ6IGUucm91dGVkLFxuICAgICAgICB0bzogZS5saW5rXG4gICAgICB9LCBhLmEuY3JlYXRlRWxlbWVudChpLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpIDogYS5hLmNyZWF0ZUVsZW1lbnQoaSwgT2JqZWN0LmFzc2lnbih7fSwgZSkpLFxuICAgICAgICAgICAgdSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgaXNJbkVkaXRvcjogdCA9ICExXG4gICAgICAgIH0gPSBlLFxuICAgICAgICAgICAgICBuID0gdCA/IGUuYmFzZUNzc0NsYXNzICsgXCIgY3EtZGQtaW1hZ2VcIiA6IGUuYmFzZUNzc0NsYXNzO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogblxuICAgICAgICB9LCBhLmEuY3JlYXRlRWxlbWVudChsLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpO1xuICAgICAgfTtcblxuICAgICAgdC5kZWZhdWx0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBPYmplY3Qocy5hKShPYmplY3Qocy5iKSh1LCBcImNtcC1pbWFnZVwiKSwgYy5hLCBcIkltYWdlIFYyXCIpO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
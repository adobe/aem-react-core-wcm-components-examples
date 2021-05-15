(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ButtonV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/authoring/button/v1/ButtonV1.js ***!
  \*************************************************************************************************/
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
    }, n.p = "", n(n.s = 31);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return c;
      }), n.d(t, "a", function () {
        return s;
      });
      var r = n(0),
          o = n.n(r);

      const a = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return o.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            c = (e, t) => n => {
        const o = n.baseCssClass,
              a = o && o.trim().length > 0 ? o : t,
              c = { ...n,
          baseCssClass: a
        };
        return r.createElement(e, Object.assign({}, c));
      },
            s = (e, t, n, o) => c => {
        const s = t(c),
              {
          hidePlaceHolder: l = !1,
          isInEditor: u = !1
        } = c;
        return r.createElement(r.Fragment, null, !s && r.createElement(e, Object.assign({}, c)), s && u && !l && r.createElement(a, {
          emptyTextAppend: o,
          componentTitle: n
        }));
      };
    },
    12: function (e, t, n) {
      "use strict";

      function r(e) {
        return null == e.text || 0 === e.text.length;
      }

      n.d(t, "a", function () {
        return r;
      });
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return c;
      });
      var r = n(0),
          o = n.n(r),
          a = n(3);

      const c = e => {
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
        }, r)) : o.a.createElement(a.Link, Object.assign({}, r, {
          to: t
        }));
      };
    },
    21: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "ButtonV1Content", function () {
        return l;
      });
      var r = n(0),
          o = n.n(r),
          a = n(1),
          c = n(2),
          s = n(12);

      const l = e => o.a.createElement(o.a.Fragment, null, e.icon && o.a.createElement("span", {
        className: `${e.baseCssClass}__icon ${e.baseCssClass}__icon--${e.icon}`
      }), o.a.createElement("span", {
        className: e.baseCssClass + "__text"
      }, e.text)),
            u = e => {
        const t = t => {
          e.handleOnClick && e.handleOnClick(t);
        },
              n = !!e.link,
              r = (n => {
          const r = {
            className: e.baseCssClass,
            onClick: t
          };
          return n && (r["aria-label"] = e.ariaLabel, r.href = e.link), r;
        })(n);

        return n ? o.a.createElement(c.a, Object.assign({
          isRouted: r.routed,
          to: r.link
        }, r), o.a.createElement(l, Object.assign({}, e))) : o.a.createElement("button", Object.assign({}, r), o.a.createElement(l, Object.assign({}, e)));
      };

      t.default = e => {
        const t = Object(a.a)(Object(a.b)(u, "cmp-button"), s.a, "Button V1");
        return o.a.createElement(t, Object.assign({}, e));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    31: function (e, t, n) {
      e.exports = n(21);
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9hdXRob3JpbmcvYnV0dG9uL3YxL0J1dHRvblYxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUF1RCwwQkFBMEIsU0FBa007QUFDclIsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNENBQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsZUFBZSxTQUFTLGVBQWUsVUFBVSxPQUFPO0FBQzlFLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsMkNBQTJDLHFEQUFxRCwyQ0FBMkM7QUFDcEo7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUFrQjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9CdXR0b25WMS5lYTQ0YjkzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHIpIHtcbiAgICAgIGlmICh0W3JdKSByZXR1cm4gdFtyXS5leHBvcnRzO1xuICAgICAgdmFyIG8gPSB0W3JdID0ge1xuICAgICAgICBpOiByLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtyXS5jYWxsKG8uZXhwb3J0cywgbywgby5leHBvcnRzLCBuKSwgby5sID0gITAsIG8uZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiByXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHIpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgbyBpbiBlKSBuLmQociwgbywgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgbykpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDMxKTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIG8gPSBuLm4ocik7XG5cbiAgICAgIGNvbnN0IGEgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBjID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCBvID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIGEgPSBvICYmIG8udHJpbSgpLmxlbmd0aCA+IDAgPyBvIDogdCxcbiAgICAgICAgICAgICAgYyA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IGFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBjKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgcyA9IChlLCB0LCBuLCBvKSA9PiBjID0+IHtcbiAgICAgICAgY29uc3QgcyA9IHQoYyksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGwgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiB1ID0gITFcbiAgICAgICAgfSA9IGM7XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoci5GcmFnbWVudCwgbnVsbCwgIXMgJiYgci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIGMpKSwgcyAmJiB1ICYmICFsICYmIHIuY3JlYXRlRWxlbWVudChhLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiBvLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAxMjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gZS50ZXh0IHx8IDAgPT09IGUudGV4dC5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgMjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBvID0gbi5uKHIpLFxuICAgICAgICAgIGEgPSBuKDMpO1xuXG4gICAgICBjb25zdCBjID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0bzogdCxcbiAgICAgICAgICBpc1JvdXRlZDogbixcbiAgICAgICAgICAuLi5yXG4gICAgICAgIH0gPSBlO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0IHx8IDAgPT09IHQudHJpbSgpLmxlbmd0aCkgcmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICB9LCByKSk7XG4gICAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodCkgfHwgIW4gPyBvLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogdFxuICAgICAgICB9LCByKSkgOiBvLmEuY3JlYXRlRWxlbWVudChhLkxpbmssIE9iamVjdC5hc3NpZ24oe30sIHIsIHtcbiAgICAgICAgICB0bzogdFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMjE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJCdXR0b25WMUNvbnRlbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIG8gPSBuLm4ociksXG4gICAgICAgICAgYSA9IG4oMSksXG4gICAgICAgICAgYyA9IG4oMiksXG4gICAgICAgICAgcyA9IG4oMTIpO1xuXG4gICAgICBjb25zdCBsID0gZSA9PiBvLmEuY3JlYXRlRWxlbWVudChvLmEuRnJhZ21lbnQsIG51bGwsIGUuaWNvbiAmJiBvLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGAke2UuYmFzZUNzc0NsYXNzfV9faWNvbiAke2UuYmFzZUNzc0NsYXNzfV9faWNvbi0tJHtlLmljb259YFxuICAgICAgfSksIG8uYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fdGV4dFwiXG4gICAgICB9LCBlLnRleHQpKSxcbiAgICAgICAgICAgIHUgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IHQgPT4ge1xuICAgICAgICAgIGUuaGFuZGxlT25DbGljayAmJiBlLmhhbmRsZU9uQ2xpY2sodCk7XG4gICAgICAgIH0sXG4gICAgICAgICAgICAgIG4gPSAhIWUubGluayxcbiAgICAgICAgICAgICAgciA9IChuID0+IHtcbiAgICAgICAgICBjb25zdCByID0ge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgIG9uQ2xpY2s6IHRcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiBuICYmIChyW1wiYXJpYS1sYWJlbFwiXSA9IGUuYXJpYUxhYmVsLCByLmhyZWYgPSBlLmxpbmspLCByO1xuICAgICAgICB9KShuKTtcblxuICAgICAgICByZXR1cm4gbiA/IG8uYS5jcmVhdGVFbGVtZW50KGMuYSwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaXNSb3V0ZWQ6IHIucm91dGVkLFxuICAgICAgICAgIHRvOiByLmxpbmtcbiAgICAgICAgfSwgciksIG8uYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIGUpKSkgOiBvLmEuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBPYmplY3QuYXNzaWduKHt9LCByKSwgby5hLmNyZWF0ZUVsZW1lbnQobCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KGEuYSkoT2JqZWN0KGEuYikodSwgXCJjbXAtYnV0dG9uXCIpLCBzLmEsIFwiQnV0dG9uIFYxXCIpO1xuICAgICAgICByZXR1cm4gby5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDMxOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigyMSk7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ButtonV1"],{

/***/ "../../react-base-components/dist/authoring/button/v1/ButtonV1.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/button/v1/ButtonV1.js ***!
  \**************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvYXV0aG9yaW5nL2J1dHRvbi92MS9CdXR0b25WMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBdUQsMEJBQTBCLFNBQWtNO0FBQ3JSLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRDQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLGVBQWUsU0FBUyxlQUFlLFVBQVUsT0FBTztBQUM5RSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTLDJDQUEyQyxxREFBcUQsMkNBQTJDO0FBQ3BKOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyxpRkFBa0I7QUFDNUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvQnV0dG9uVjEuYWY1YmNhMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24gKGUsIHQpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW10sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpIDogZVtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gbihyKSB7XG4gICAgICBpZiAodFtyXSkgcmV0dXJuIHRbcl0uZXhwb3J0cztcbiAgICAgIHZhciBvID0gdFtyXSA9IHtcbiAgICAgICAgaTogcixcbiAgICAgICAgbDogITEsXG4gICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsIG8sIG8uZXhwb3J0cywgbiksIG8ubCA9ICEwLCBvLmV4cG9ydHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG4ubSA9IGUsIG4uYyA9IHQsIG4uZCA9IGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICBuLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGdldDogclxuICAgICAgfSk7XG4gICAgfSwgbi5yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogXCJNb2R1bGVcIlxuICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICAgIH0pO1xuICAgIH0sIG4udCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAoMSAmIHQgJiYgKGUgPSBuKGUpKSwgOCAmIHQpIHJldHVybiBlO1xuICAgICAgaWYgKDQgJiB0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgICAgdmFyIHIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgaWYgKG4ucihyKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZVxuICAgICAgfSksIDIgJiB0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIGZvciAodmFyIG8gaW4gZSkgbi5kKHIsIG8sIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlW3RdO1xuICAgICAgfS5iaW5kKG51bGwsIG8pKTtcbiAgICAgIHJldHVybiByO1xuICAgIH0sIG4ubiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUgJiYgZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5kZWZhdWx0O1xuICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG4uZCh0LCBcImFcIiwgdCksIHQ7XG4gICAgfSwgbi5vID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdCk7XG4gICAgfSwgbi5wID0gXCJcIiwgbihuLnMgPSAzMSk7XG4gIH0oe1xuICAgIDA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gICAgfSxcbiAgICAxOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pLCBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBvID0gbi5uKHIpO1xuXG4gICAgICBjb25zdCBhID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSAobnVsbCAhPSBlLmNvbXBvbmVudFRpdGxlICYmIGUuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCA/IGUuY29tcG9uZW50VGl0bGUgKyBcIiAtIFwiIDogXCJcIikgKyAobnVsbCAhPSBlLmVtcHR5VGV4dEFwcGVuZCA/IGUuZW1wdHlUZXh0QXBwZW5kIDogXCJQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnRcIik7XG4gICAgICAgIHJldHVybiBvLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNxLXBsYWNlaG9sZGVyXCIgKyAobnVsbCAhPSBlLmNsYXNzQXBwZW5kID8gXCIgXCIgKyBlLmNsYXNzQXBwZW5kIDogXCJcIilcbiAgICAgICAgfSwgdCk7XG4gICAgICB9LFxuICAgICAgICAgICAgYyA9IChlLCB0KSA9PiBuID0+IHtcbiAgICAgICAgY29uc3QgbyA9IG4uYmFzZUNzc0NsYXNzLFxuICAgICAgICAgICAgICBhID0gbyAmJiBvLnRyaW0oKS5sZW5ndGggPiAwID8gbyA6IHQsXG4gICAgICAgICAgICAgIGMgPSB7IC4uLm4sXG4gICAgICAgICAgYmFzZUNzc0NsYXNzOiBhXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgYykpO1xuICAgICAgfSxcbiAgICAgICAgICAgIHMgPSAoZSwgdCwgbiwgbykgPT4gYyA9PiB7XG4gICAgICAgIGNvbnN0IHMgPSB0KGMpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgaGlkZVBsYWNlSG9sZGVyOiBsID0gITEsXG4gICAgICAgICAgaXNJbkVkaXRvcjogdSA9ICExXG4gICAgICAgIH0gPSBjO1xuICAgICAgICByZXR1cm4gci5jcmVhdGVFbGVtZW50KHIuRnJhZ21lbnQsIG51bGwsICFzICYmIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBjKSksIHMgJiYgdSAmJiAhbCAmJiByLmNyZWF0ZUVsZW1lbnQoYSwge1xuICAgICAgICAgIGVtcHR5VGV4dEFwcGVuZDogbyxcbiAgICAgICAgICBjb21wb25lbnRUaXRsZTogblxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMTI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGUudGV4dCB8fCAwID09PSBlLnRleHQubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHI7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIDI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgbyA9IG4ubihyKSxcbiAgICAgICAgICBhID0gbigzKTtcblxuICAgICAgY29uc3QgYyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG86IHQsXG4gICAgICAgICAgaXNSb3V0ZWQ6IG4sXG4gICAgICAgICAgLi4uclxuICAgICAgICB9ID0gZTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCB8fCAwID09PSB0LnRyaW0oKS5sZW5ndGgpIHJldHVybiBvLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogXCIjXCJcbiAgICAgICAgfSwgcikpO1xuICAgICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvLy50ZXN0KHQpIHx8ICFuID8gby5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IHRcbiAgICAgICAgfSwgcikpIDogby5hLmNyZWF0ZUVsZW1lbnQoYS5MaW5rLCBPYmplY3QuYXNzaWduKHt9LCByLCB7XG4gICAgICAgICAgdG86IHRcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDIxOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4ucih0KSwgbi5kKHQsIFwiQnV0dG9uVjFDb250ZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBvID0gbi5uKHIpLFxuICAgICAgICAgIGEgPSBuKDEpLFxuICAgICAgICAgIGMgPSBuKDIpLFxuICAgICAgICAgIHMgPSBuKDEyKTtcblxuICAgICAgY29uc3QgbCA9IGUgPT4gby5hLmNyZWF0ZUVsZW1lbnQoby5hLkZyYWdtZW50LCBudWxsLCBlLmljb24gJiYgby5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBgJHtlLmJhc2VDc3NDbGFzc31fX2ljb24gJHtlLmJhc2VDc3NDbGFzc31fX2ljb24tLSR7ZS5pY29ufWBcbiAgICAgIH0pLCBvLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX3RleHRcIlxuICAgICAgfSwgZS50ZXh0KSksXG4gICAgICAgICAgICB1ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSB0ID0+IHtcbiAgICAgICAgICBlLmhhbmRsZU9uQ2xpY2sgJiYgZS5oYW5kbGVPbkNsaWNrKHQpO1xuICAgICAgICB9LFxuICAgICAgICAgICAgICBuID0gISFlLmxpbmssXG4gICAgICAgICAgICAgIHIgPSAobiA9PiB7XG4gICAgICAgICAgY29uc3QgciA9IHtcbiAgICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICBvbkNsaWNrOiB0XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gbiAmJiAocltcImFyaWEtbGFiZWxcIl0gPSBlLmFyaWFMYWJlbCwgci5ocmVmID0gZS5saW5rKSwgcjtcbiAgICAgICAgfSkobik7XG5cbiAgICAgICAgcmV0dXJuIG4gPyBvLmEuY3JlYXRlRWxlbWVudChjLmEsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGlzUm91dGVkOiByLnJvdXRlZCxcbiAgICAgICAgICB0bzogci5saW5rXG4gICAgICAgIH0sIHIpLCBvLmEuY3JlYXRlRWxlbWVudChsLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpIDogby5hLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgT2JqZWN0LmFzc2lnbih7fSwgciksIG8uYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChhLmEpKE9iamVjdChhLmIpKHUsIFwiY21wLWJ1dHRvblwiKSwgcy5hLCBcIkJ1dHRvbiBWMVwiKTtcbiAgICAgICAgcmV0dXJuIG8uYS5jcmVhdGVFbGVtZW50KHQsIE9iamVjdC5hc3NpZ24oe30sIGUpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAzOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJvdXRlci1kb21cIik7XG4gICAgfSxcbiAgICAzMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIGUuZXhwb3J0cyA9IG4oMjEpO1xuICAgIH1cbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
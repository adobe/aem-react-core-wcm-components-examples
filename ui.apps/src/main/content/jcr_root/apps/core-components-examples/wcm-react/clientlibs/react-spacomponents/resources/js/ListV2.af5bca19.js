(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ListV2"],{

/***/ "../../react-base-components/dist/authoring/list/v2/ListV2.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/list/v2/ListV2.js ***!
  \**********************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvYXV0aG9yaW5nL2xpc3QvdjIvTGlzdFYyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUF1RCwwQkFBMEIsU0FBa007QUFDclIsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNENBQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU8sMkVBQTJFO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1Q0FBdUM7QUFDOUM7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9HQUFvRyw0REFBNEQ7QUFDeks7QUFDQSxTQUFTLDhEQUE4RDs7QUFFdkU7QUFDQTtBQUNBLFNBQVMsNkRBQTZEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsaUZBQWtCO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFIiwiZmlsZSI6ImpzL0xpc3RWMi5hZjViY2ExOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHMpIHtcbiAgICAgIGlmICh0W3NdKSByZXR1cm4gdFtzXS5leHBvcnRzO1xuICAgICAgdmFyIHIgPSB0W3NdID0ge1xuICAgICAgICBpOiBzLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtzXS5jYWxsKHIuZXhwb3J0cywgciwgci5leHBvcnRzLCBuKSwgci5sID0gITAsIHIuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHMpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBzXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHMpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkocywgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgciBpbiBlKSBuLmQocywgciwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgcikpO1xuICAgICAgcmV0dXJuIHM7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDMwKTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgICAgdmFyIHMgPSBuKDApLFxuICAgICAgICAgIHIgPSBuLm4ocyk7XG5cbiAgICAgIGNvbnN0IGEgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBvID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCByID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIGEgPSByICYmIHIudHJpbSgpLmxlbmd0aCA+IDAgPyByIDogdCxcbiAgICAgICAgICAgICAgbyA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IGFcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHMuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBvKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgYyA9IChlLCB0LCBuLCByKSA9PiBvID0+IHtcbiAgICAgICAgY29uc3QgYyA9IHQobyksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGkgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiBsID0gITFcbiAgICAgICAgfSA9IG87XG4gICAgICAgIHJldHVybiBzLmNyZWF0ZUVsZW1lbnQocy5GcmFnbWVudCwgbnVsbCwgIWMgJiYgcy5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIG8pKSwgYyAmJiBsICYmICFpICYmIHMuY3JlYXRlRWxlbWVudChhLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiByLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAxMDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBmdW5jdGlvbiBzKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gZS5pdGVtcyB8fCAwID09PSBlLml0ZW1zLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAxOTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcIkxpc3RWMkl0ZW1Nb2RpZmljYXRpb25EYXRlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KSwgbi5kKHQsIFwiTGlzdFYySXRlbUNvbnRlbnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH0pLCBuLmQodCwgXCJMaXN0VjJBbmNob3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdTtcbiAgICAgIH0pLCBuLmQodCwgXCJMaXN0VjJJdGVtRGVzY3JpcHRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0pLCBuLmQodCwgXCJMaXN0VjJJbXBsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBzID0gbigwKSxcbiAgICAgICAgICByID0gbi5uKHMpLFxuICAgICAgICAgIGEgPSBuKDEpLFxuICAgICAgICAgIG8gPSBuKDIpLFxuICAgICAgICAgIGMgPSBuKDEwKTtcblxuICAgICAgY29uc3QgaSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gZS5sYXN0TW9kaWZpZWRGb3JtYXR0ZWQgPyBlLmxhc3RNb2RpZmllZEZvcm1hdHRlZCA6IFwiXCI7XG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1kYXRlXCJcbiAgICAgICAgfSwgdCk7XG4gICAgICB9LFxuICAgICAgICAgICAgbCA9IGUgPT4gci5hLmNyZWF0ZUVsZW1lbnQoci5hLkZyYWdtZW50LCBudWxsLCByLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW0tdGl0bGVcIlxuICAgICAgfSwgZS50aXRsZSksIGUuc2hvd01vZGlmaWNhdGlvbkRhdGUgJiYgci5hLmNyZWF0ZUVsZW1lbnQoaSwgT2JqZWN0LmFzc2lnbih7fSwgZSkpKSxcbiAgICAgICAgICAgIHUgPSBlID0+IHIuYS5jcmVhdGVFbGVtZW50KG8uYSwge1xuICAgICAgICBpc1JvdXRlZDogZS5yb3V0ZWQsXG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1saW5rXCIsXG4gICAgICAgIHRvOiBlLnVybFxuICAgICAgfSwgci5hLmNyZWF0ZUVsZW1lbnQobCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpKSxcbiAgICAgICAgICAgIG0gPSBlID0+IHIuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1kZXNjcmlwdGlvblwiXG4gICAgICB9LCBcIiRcIiwgZS5kZXNjcmlwdGlvbiksXG4gICAgICAgICAgICBkID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSB0ID0+IHIuYS5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbVwiXG4gICAgICAgIH0sIHIuYS5jcmVhdGVFbGVtZW50KFwiYXJ0aWNsZVwiLCBudWxsLCBlLmxpbmtJdGVtcyAmJiAhIXQudXJsICYmIHIuYS5jcmVhdGVFbGVtZW50KHUsIE9iamVjdC5hc3NpZ24oe30sIHQpKSwgIWUubGlua0l0ZW1zICYmIHIuYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIHQsIHtcbiAgICAgICAgICBpbmRleDogdC5pbmRleFxuICAgICAgICB9KSksIGUuc2hvd0Rlc2NyaXB0aW9uICYmIHIuYS5jcmVhdGVFbGVtZW50KG0sIE9iamVjdC5hc3NpZ24oe30sIHQpKSkpO1xuXG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcInVsXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzXG4gICAgICAgIH0sIGUuaXRlbXMubWFwKChuLCBzKSA9PiByLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBuLCB7XG4gICAgICAgICAga2V5OiBcImNtcC1saXN0LVwiICsgcyxcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IGUuYmFzZUNzc0NsYXNzLFxuICAgICAgICAgIHJvdXRlZDogbi5yb3V0ZWQsXG4gICAgICAgICAgaW5kZXg6IHNcbiAgICAgICAgfSkpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChhLmEpKE9iamVjdChhLmIpKGQsIFwiY21wLWxpc3RcIiksIGMuYSwgXCJMaXN0IFYyXCIpO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSk7XG4gICAgICB2YXIgcyA9IG4oMCksXG4gICAgICAgICAgciA9IG4ubihzKSxcbiAgICAgICAgICBhID0gbigzKTtcblxuICAgICAgY29uc3QgbyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG86IHQsXG4gICAgICAgICAgaXNSb3V0ZWQ6IG4sXG4gICAgICAgICAgLi4uc1xuICAgICAgICB9ID0gZTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCB8fCAwID09PSB0LnRyaW0oKS5sZW5ndGgpIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogXCIjXCJcbiAgICAgICAgfSwgcykpO1xuICAgICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvLy50ZXN0KHQpIHx8ICFuID8gci5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IHRcbiAgICAgICAgfSwgcykpIDogci5hLmNyZWF0ZUVsZW1lbnQoYS5MaW5rLCBPYmplY3QuYXNzaWduKHt9LCBzLCB7XG4gICAgICAgICAgdG86IHRcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDMwOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigxOSk7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
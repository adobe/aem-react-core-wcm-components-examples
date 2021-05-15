(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BreadCrumbV2"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/layout/breadcrumb/v2/BreadCrumbV2.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/layout/breadcrumb/v2/BreadCrumbV2.js ***!
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
    }, n.p = "", n(n.s = 38);
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
          isInEditor: u = !1
        } = o;
        return r.createElement(r.Fragment, null, !c && r.createElement(e, Object.assign({}, o)), c && u && !i && r.createElement(s, {
          emptyTextAppend: a,
          componentTitle: n
        }));
      };
    },
    16: function (e, t, n) {
      "use strict";

      function r(e) {
        return null == e.items || 0 === e.items.length;
      }

      n.d(t, "a", function () {
        return r;
      });
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
    25: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "BreadCrumbV2SSpan", function () {
        return i;
      }), n.d(t, "BreadCrumbV2Link", function () {
        return u;
      }), n.d(t, "BreadCrumbV2ListItem", function () {
        return l;
      });
      var r = n(0),
          a = n.n(r),
          s = n(1),
          o = n(2),
          c = n(16);

      const i = e => a.a.createElement("span", {
        itemProp: "name"
      }, e.title),
            u = e => a.a.createElement(o.a, {
        to: e.url,
        isRouted: e.routed,
        className: e.baseCssClass + "__item-link",
        itemProp: "item"
      }, a.a.createElement(i, Object.assign({}, e))),
            l = e => {
        const t = e.baseCssClass + "__item" + (e.active ? ` ${e.baseCssClass}__item--active` : ""),
              n = e.index ? e.index.toString(2) : "noindex";
        return a.a.createElement("li", {
          className: t,
          itemProp: "itemListElement",
          itemScope: !0,
          itemType: "http://schema.org/ListItem"
        }, !e.active && a.a.createElement(u, Object.assign({}, e)), e.active && a.a.createElement(i, Object.assign({}, e)), a.a.createElement("meta", {
          itemProp: "position",
          content: n
        }));
      },
            m = e => {
        const {
          ariaLabelI18n: t = "BreadCrumbV2"
        } = e;
        return a.a.createElement("nav", {
          className: e.baseCssClass,
          "aria-label": t
        }, a.a.createElement("ol", {
          className: e.baseCssClass + "__list",
          itemScope: !0,
          itemType: "http://schema.org/BreadcrumbList"
        }, e.items.map((t, n) => a.a.createElement(l, Object.assign({}, t, {
          index: n,
          baseCssClass: e.baseCssClass,
          key: "crumbitem-" + n
        })))));
      };

      t.default = e => {
        const t = Object(s.a)(Object(s.b)(m, "cmp-breadcrumb"), c.a, "Breadcrumb V2");
        return a.a.createElement(t, Object.assign({}, e));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    38: function (e, t, n) {
      e.exports = n(25);
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9sYXlvdXQvYnJlYWRjcnVtYi92Mi9CcmVhZENydW1iVjIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLGtEQUFrRDtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVDQUF1QztBQUM5QztBQUNBLDhEQUE4RCxlQUFlO0FBQzdFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQW9ELHdEQUF3RDtBQUNySDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsNkRBQTZEO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsaUZBQWtCO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFIiwiZmlsZSI6ImpzL0JyZWFkQ3J1bWJWMi5lYTQ0YjkzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHIpIHtcbiAgICAgIGlmICh0W3JdKSByZXR1cm4gdFtyXS5leHBvcnRzO1xuICAgICAgdmFyIGEgPSB0W3JdID0ge1xuICAgICAgICBpOiByLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtyXS5jYWxsKGEuZXhwb3J0cywgYSwgYS5leHBvcnRzLCBuKSwgYS5sID0gITAsIGEuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHIpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiByXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgciA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHIpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkociwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgYSBpbiBlKSBuLmQociwgYSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgYSkpO1xuICAgICAgcmV0dXJuIHI7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDM4KTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ocik7XG5cbiAgICAgIGNvbnN0IHMgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBvID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCBhID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIHMgPSBhICYmIGEudHJpbSgpLmxlbmd0aCA+IDAgPyBhIDogdCxcbiAgICAgICAgICAgICAgbyA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IHNcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBvKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgYyA9IChlLCB0LCBuLCBhKSA9PiBvID0+IHtcbiAgICAgICAgY29uc3QgYyA9IHQobyksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGkgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiB1ID0gITFcbiAgICAgICAgfSA9IG87XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoci5GcmFnbWVudCwgbnVsbCwgIWMgJiYgci5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIG8pKSwgYyAmJiB1ICYmICFpICYmIHIuY3JlYXRlRWxlbWVudChzLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiBhLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAxNjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBmdW5jdGlvbiByKGUpIHtcbiAgICAgICAgcmV0dXJuIG51bGwgPT0gZS5pdGVtcyB8fCAwID09PSBlLml0ZW1zLmxlbmd0aDtcbiAgICAgIH1cblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pO1xuICAgICAgdmFyIHIgPSBuKDApLFxuICAgICAgICAgIGEgPSBuLm4ociksXG4gICAgICAgICAgcyA9IG4oMyk7XG5cbiAgICAgIGNvbnN0IG8gPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRvOiB0LFxuICAgICAgICAgIGlzUm91dGVkOiBuLFxuICAgICAgICAgIC4uLnJcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIGlmICh2b2lkIDAgPT09IHQgfHwgMCA9PT0gdC50cmltKCkubGVuZ3RoKSByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IFwiI1wiXG4gICAgICAgIH0sIHIpKTtcbiAgICAgICAgcmV0dXJuIC9eaHR0cHM/OlxcL1xcLy8udGVzdCh0KSB8fCAhbiA/IGEuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiB0XG4gICAgICAgIH0sIHIpKSA6IGEuYS5jcmVhdGVFbGVtZW50KHMuTGluaywgT2JqZWN0LmFzc2lnbih7fSwgciwge1xuICAgICAgICAgIHRvOiB0XG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAyNTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcIkJyZWFkQ3J1bWJWMlNTcGFuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KSwgbi5kKHQsIFwiQnJlYWRDcnVtYlYyTGlua1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1O1xuICAgICAgfSksIG4uZCh0LCBcIkJyZWFkQ3J1bWJWMkxpc3RJdGVtXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBhID0gbi5uKHIpLFxuICAgICAgICAgIHMgPSBuKDEpLFxuICAgICAgICAgIG8gPSBuKDIpLFxuICAgICAgICAgIGMgPSBuKDE2KTtcblxuICAgICAgY29uc3QgaSA9IGUgPT4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgaXRlbVByb3A6IFwibmFtZVwiXG4gICAgICB9LCBlLnRpdGxlKSxcbiAgICAgICAgICAgIHUgPSBlID0+IGEuYS5jcmVhdGVFbGVtZW50KG8uYSwge1xuICAgICAgICB0bzogZS51cmwsXG4gICAgICAgIGlzUm91dGVkOiBlLnJvdXRlZCxcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtLWxpbmtcIixcbiAgICAgICAgaXRlbVByb3A6IFwiaXRlbVwiXG4gICAgICB9LCBhLmEuY3JlYXRlRWxlbWVudChpLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpLFxuICAgICAgICAgICAgbCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbVwiICsgKGUuYWN0aXZlID8gYCAke2UuYmFzZUNzc0NsYXNzfV9faXRlbS0tYWN0aXZlYCA6IFwiXCIpLFxuICAgICAgICAgICAgICBuID0gZS5pbmRleCA/IGUuaW5kZXgudG9TdHJpbmcoMikgOiBcIm5vaW5kZXhcIjtcbiAgICAgICAgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwibGlcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdCxcbiAgICAgICAgICBpdGVtUHJvcDogXCJpdGVtTGlzdEVsZW1lbnRcIixcbiAgICAgICAgICBpdGVtU2NvcGU6ICEwLFxuICAgICAgICAgIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL0xpc3RJdGVtXCJcbiAgICAgICAgfSwgIWUuYWN0aXZlICYmIGEuYS5jcmVhdGVFbGVtZW50KHUsIE9iamVjdC5hc3NpZ24oe30sIGUpKSwgZS5hY3RpdmUgJiYgYS5hLmNyZWF0ZUVsZW1lbnQoaSwgT2JqZWN0LmFzc2lnbih7fSwgZSkpLCBhLmEuY3JlYXRlRWxlbWVudChcIm1ldGFcIiwge1xuICAgICAgICAgIGl0ZW1Qcm9wOiBcInBvc2l0aW9uXCIsXG4gICAgICAgICAgY29udGVudDogblxuICAgICAgICB9KSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgYXJpYUxhYmVsSTE4bjogdCA9IFwiQnJlYWRDcnVtYlYyXCJcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcIm5hdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdFxuICAgICAgICB9LCBhLmEuY3JlYXRlRWxlbWVudChcIm9sXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2xpc3RcIixcbiAgICAgICAgICBpdGVtU2NvcGU6ICEwLFxuICAgICAgICAgIGl0ZW1UeXBlOiBcImh0dHA6Ly9zY2hlbWEub3JnL0JyZWFkY3J1bWJMaXN0XCJcbiAgICAgICAgfSwgZS5pdGVtcy5tYXAoKHQsIG4pID0+IGEuYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIHQsIHtcbiAgICAgICAgICBpbmRleDogbixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IGUuYmFzZUNzc0NsYXNzLFxuICAgICAgICAgIGtleTogXCJjcnVtYml0ZW0tXCIgKyBuXG4gICAgICAgIH0pKSkpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHMuYSkoT2JqZWN0KHMuYikobSwgXCJjbXAtYnJlYWRjcnVtYlwiKSwgYy5hLCBcIkJyZWFkY3J1bWIgVjJcIik7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMzogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yb3V0ZXItZG9tXCIpO1xuICAgIH0sXG4gICAgMzg6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBlLmV4cG9ydHMgPSBuKDI1KTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
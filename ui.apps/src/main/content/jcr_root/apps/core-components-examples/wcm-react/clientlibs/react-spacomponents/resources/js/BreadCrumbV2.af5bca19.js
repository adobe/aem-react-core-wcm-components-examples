(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["BreadCrumbV2"],{

/***/ "../../react-base-components/dist/layout/breadcrumb/v2/BreadCrumbV2.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/layout/breadcrumb/v2/BreadCrumbV2.js ***!
  \*******************************************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvbGF5b3V0L2JyZWFkY3J1bWIvdjIvQnJlYWRDcnVtYlYyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUF1RCwwQkFBMEIsU0FBa007QUFDclIsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsNENBQU87QUFDakMsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCwwRkFBMEY7QUFDMUY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyxrREFBa0Q7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx1Q0FBdUM7QUFDOUM7QUFDQSw4REFBOEQsZUFBZTtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9EQUFvRCx3REFBd0Q7QUFDckg7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTLDZEQUE2RDtBQUN0RTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLGlGQUFrQjtBQUM1QyxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9CcmVhZENydW1iVjIuYWY1YmNhMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24gKGUsIHQpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW10sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpIDogZVtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gbihyKSB7XG4gICAgICBpZiAodFtyXSkgcmV0dXJuIHRbcl0uZXhwb3J0cztcbiAgICAgIHZhciBhID0gdFtyXSA9IHtcbiAgICAgICAgaTogcixcbiAgICAgICAgbDogITEsXG4gICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVbcl0uY2FsbChhLmV4cG9ydHMsIGEsIGEuZXhwb3J0cywgbiksIGEubCA9ICEwLCBhLmV4cG9ydHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG4ubSA9IGUsIG4uYyA9IHQsIG4uZCA9IGZ1bmN0aW9uIChlLCB0LCByKSB7XG4gICAgICBuLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGdldDogclxuICAgICAgfSk7XG4gICAgfSwgbi5yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogXCJNb2R1bGVcIlxuICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICAgIH0pO1xuICAgIH0sIG4udCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAoMSAmIHQgJiYgKGUgPSBuKGUpKSwgOCAmIHQpIHJldHVybiBlO1xuICAgICAgaWYgKDQgJiB0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgICAgdmFyIHIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgaWYgKG4ucihyKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHIsIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZVxuICAgICAgfSksIDIgJiB0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIGZvciAodmFyIGEgaW4gZSkgbi5kKHIsIGEsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlW3RdO1xuICAgICAgfS5iaW5kKG51bGwsIGEpKTtcbiAgICAgIHJldHVybiByO1xuICAgIH0sIG4ubiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUgJiYgZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5kZWZhdWx0O1xuICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG4uZCh0LCBcImFcIiwgdCksIHQ7XG4gICAgfSwgbi5vID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdCk7XG4gICAgfSwgbi5wID0gXCJcIiwgbihuLnMgPSAzOCk7XG4gIH0oe1xuICAgIDA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gICAgfSxcbiAgICAxOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pLCBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBhID0gbi5uKHIpO1xuXG4gICAgICBjb25zdCBzID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSAobnVsbCAhPSBlLmNvbXBvbmVudFRpdGxlICYmIGUuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCA/IGUuY29tcG9uZW50VGl0bGUgKyBcIiAtIFwiIDogXCJcIikgKyAobnVsbCAhPSBlLmVtcHR5VGV4dEFwcGVuZCA/IGUuZW1wdHlUZXh0QXBwZW5kIDogXCJQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnRcIik7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNxLXBsYWNlaG9sZGVyXCIgKyAobnVsbCAhPSBlLmNsYXNzQXBwZW5kID8gXCIgXCIgKyBlLmNsYXNzQXBwZW5kIDogXCJcIilcbiAgICAgICAgfSwgdCk7XG4gICAgICB9LFxuICAgICAgICAgICAgbyA9IChlLCB0KSA9PiBuID0+IHtcbiAgICAgICAgY29uc3QgYSA9IG4uYmFzZUNzc0NsYXNzLFxuICAgICAgICAgICAgICBzID0gYSAmJiBhLnRyaW0oKS5sZW5ndGggPiAwID8gYSA6IHQsXG4gICAgICAgICAgICAgIG8gPSB7IC4uLm4sXG4gICAgICAgICAgYmFzZUNzc0NsYXNzOiBzXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiByLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgbykpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGMgPSAoZSwgdCwgbiwgYSkgPT4gbyA9PiB7XG4gICAgICAgIGNvbnN0IGMgPSB0KG8pLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgaGlkZVBsYWNlSG9sZGVyOiBpID0gITEsXG4gICAgICAgICAgaXNJbkVkaXRvcjogdSA9ICExXG4gICAgICAgIH0gPSBvO1xuICAgICAgICByZXR1cm4gci5jcmVhdGVFbGVtZW50KHIuRnJhZ21lbnQsIG51bGwsICFjICYmIHIuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBvKSksIGMgJiYgdSAmJiAhaSAmJiByLmNyZWF0ZUVsZW1lbnQocywge1xuICAgICAgICAgIGVtcHR5VGV4dEFwcGVuZDogYSxcbiAgICAgICAgICBjb21wb25lbnRUaXRsZTogblxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMTY6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gcihlKSB7XG4gICAgICAgIHJldHVybiBudWxsID09IGUuaXRlbXMgfHwgMCA9PT0gZS5pdGVtcy5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gcjtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgMjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KTtcbiAgICAgIHZhciByID0gbigwKSxcbiAgICAgICAgICBhID0gbi5uKHIpLFxuICAgICAgICAgIHMgPSBuKDMpO1xuXG4gICAgICBjb25zdCBvID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICB0bzogdCxcbiAgICAgICAgICBpc1JvdXRlZDogbixcbiAgICAgICAgICAuLi5yXG4gICAgICAgIH0gPSBlO1xuICAgICAgICBpZiAodm9pZCAwID09PSB0IHx8IDAgPT09IHQudHJpbSgpLmxlbmd0aCkgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICBocmVmOiBcIiNcIlxuICAgICAgICB9LCByKSk7XG4gICAgICAgIHJldHVybiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QodCkgfHwgIW4gPyBhLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogdFxuICAgICAgICB9LCByKSkgOiBhLmEuY3JlYXRlRWxlbWVudChzLkxpbmssIE9iamVjdC5hc3NpZ24oe30sIHIsIHtcbiAgICAgICAgICB0bzogdFxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMjU6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJCcmVhZENydW1iVjJTU3BhblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSksIG4uZCh0LCBcIkJyZWFkQ3J1bWJWMkxpbmtcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdTtcbiAgICAgIH0pLCBuLmQodCwgXCJCcmVhZENydW1iVjJMaXN0SXRlbVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfSk7XG4gICAgICB2YXIgciA9IG4oMCksXG4gICAgICAgICAgYSA9IG4ubihyKSxcbiAgICAgICAgICBzID0gbigxKSxcbiAgICAgICAgICBvID0gbigyKSxcbiAgICAgICAgICBjID0gbigxNik7XG5cbiAgICAgIGNvbnN0IGkgPSBlID0+IGEuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGl0ZW1Qcm9wOiBcIm5hbWVcIlxuICAgICAgfSwgZS50aXRsZSksXG4gICAgICAgICAgICB1ID0gZSA9PiBhLmEuY3JlYXRlRWxlbWVudChvLmEsIHtcbiAgICAgICAgdG86IGUudXJsLFxuICAgICAgICBpc1JvdXRlZDogZS5yb3V0ZWQsXG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbS1saW5rXCIsXG4gICAgICAgIGl0ZW1Qcm9wOiBcIml0ZW1cIlxuICAgICAgfSwgYS5hLmNyZWF0ZUVsZW1lbnQoaSwgT2JqZWN0LmFzc2lnbih7fSwgZSkpKSxcbiAgICAgICAgICAgIGwgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGUuYmFzZUNzc0NsYXNzICsgXCJfX2l0ZW1cIiArIChlLmFjdGl2ZSA/IGAgJHtlLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWFjdGl2ZWAgOiBcIlwiKSxcbiAgICAgICAgICAgICAgbiA9IGUuaW5kZXggPyBlLmluZGV4LnRvU3RyaW5nKDIpIDogXCJub2luZGV4XCI7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHQsXG4gICAgICAgICAgaXRlbVByb3A6IFwiaXRlbUxpc3RFbGVtZW50XCIsXG4gICAgICAgICAgaXRlbVNjb3BlOiAhMCxcbiAgICAgICAgICBpdGVtVHlwZTogXCJodHRwOi8vc2NoZW1hLm9yZy9MaXN0SXRlbVwiXG4gICAgICAgIH0sICFlLmFjdGl2ZSAmJiBhLmEuY3JlYXRlRWxlbWVudCh1LCBPYmplY3QuYXNzaWduKHt9LCBlKSksIGUuYWN0aXZlICYmIGEuYS5jcmVhdGVFbGVtZW50KGksIE9iamVjdC5hc3NpZ24oe30sIGUpKSwgYS5hLmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgICBpdGVtUHJvcDogXCJwb3NpdGlvblwiLFxuICAgICAgICAgIGNvbnRlbnQ6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgICAgICAgIG0gPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGFyaWFMYWJlbEkxOG46IHQgPSBcIkJyZWFkQ3J1bWJWMlwiXG4gICAgICAgIH0gPSBlO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQoXCJuYXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRcbiAgICAgICAgfSwgYS5hLmNyZWF0ZUVsZW1lbnQoXCJvbFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19saXN0XCIsXG4gICAgICAgICAgaXRlbVNjb3BlOiAhMCxcbiAgICAgICAgICBpdGVtVHlwZTogXCJodHRwOi8vc2NoZW1hLm9yZy9CcmVhZGNydW1iTGlzdFwiXG4gICAgICAgIH0sIGUuaXRlbXMubWFwKCh0LCBuKSA9PiBhLmEuY3JlYXRlRWxlbWVudChsLCBPYmplY3QuYXNzaWduKHt9LCB0LCB7XG4gICAgICAgICAgaW5kZXg6IG4sXG4gICAgICAgICAgYmFzZUNzc0NsYXNzOiBlLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICBrZXk6IFwiY3J1bWJpdGVtLVwiICsgblxuICAgICAgICB9KSkpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChzLmEpKE9iamVjdChzLmIpKG0sIFwiY21wLWJyZWFkY3J1bWJcIiksIGMuYSwgXCJCcmVhZGNydW1iIFYyXCIpO1xuICAgICAgICByZXR1cm4gYS5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDM4OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigyNSk7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
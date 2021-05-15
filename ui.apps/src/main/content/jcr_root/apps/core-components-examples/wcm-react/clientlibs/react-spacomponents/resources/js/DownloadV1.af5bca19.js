(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DownloadV1"],{

/***/ "../../react-base-components/dist/authoring/download/v1/DownloadV1.js":
/*!******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/download/v1/DownloadV1.js ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(a) {
      if (t[a]) return t[a].exports;
      var r = t[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return e[a].call(r.exports, r, r.exports, n), r.l = !0, r.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, a) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: a
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
      var a = Object.create(null);
      if (n.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var r in e) n.d(a, r, function (t) {
        return e[t];
      }.bind(null, r));
      return a;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 36);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return s;
      }), n.d(t, "a", function () {
        return o;
      });
      var a = n(0),
          r = n.n(a);

      const l = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return r.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            s = (e, t) => n => {
        const r = n.baseCssClass,
              l = r && r.trim().length > 0 ? r : t,
              s = { ...n,
          baseCssClass: l
        };
        return a.createElement(e, Object.assign({}, s));
      },
            o = (e, t, n, r) => s => {
        const o = t(s),
              {
          hidePlaceHolder: c = !1,
          isInEditor: i = !1
        } = s;
        return a.createElement(a.Fragment, null, !o && a.createElement(e, Object.assign({}, s)), o && i && !c && a.createElement(l, {
          emptyTextAppend: r,
          componentTitle: n
        }));
      };
    },
    14: function (e, t, n) {
      "use strict";

      function a(e) {
        return (null == e.url || 0 === e.url.length) && null == e.handleOnClick;
      }

      n.d(t, "a", function () {
        return a;
      });
    },
    23: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "getDownloadV1Href", function () {
        return o;
      }), n.d(t, "DownloadV1HeadingContent", function () {
        return c;
      }), n.d(t, "DownloadV1HeadingElement", function () {
        return i;
      }), n.d(t, "renderProperty", function () {
        return u;
      }), n.d(t, "DownloadV1Details", function () {
        return d;
      }), n.d(t, "DownloadV1Description", function () {
        return m;
      }), n.d(t, "DownloadV1Link", function () {
        return p;
      }), n.d(t, "DownloadV1Impl", function () {
        return f;
      });
      var a = n(0),
          r = n.n(a),
          l = n(1),
          s = n(14);

      const o = e => e.url && e.url.length > 0 ? e.url : "#",
            c = e => r.a.createElement(r.a.Fragment, null, !!e.url || !!e.handleOnClick && r.a.createElement("a", {
        onClick: t => {
          e.handleOnClick && e.handleOnClick(t);
        },
        className: e.baseCssClass + "__title-link",
        href: o(e)
      }, e.title), !e.url && r.a.createElement(r.a.Fragment, null, " ", e.title, " ")),
            i = e => {
        const {
          titleType: t = "h3"
        } = e;
        return r.a.createElement("" + t, {
          className: e.baseCssClass + '__title"'
        }, r.a.createElement(c, Object.assign({}, e)));
      },
            u = (e, t, n, a) => {
        const l = `${a}__property ${a}__property--' + ${n}`;
        return r.a.createElement("div", {
          className: l
        }, r.a.createElement("dt", {
          className: a + "__property-label"
        }, e), r.a.createElement("dd", {
          className: a + "__property-content"
        }, t));
      },
            d = e => {
        const {
          displayFilename: t = !1,
          displaySize: n = !1,
          displayFormat: a = !1
        } = e;
        return r.a.createElement("dl", {
          className: e.baseCssClass + "__properties"
        }, t && u("Filename", e.filename, "filename", e.baseCssClass), n && u("Size", e.size, "size", e.baseCssClass), a && u("Format", e.format, "format", e.baseCssClass));
      },
            m = e => {
        const t = String(e.description) || "";
        return r.a.createElement("div", {
          className: e.baseCssClass + "__description",
          dangerouslySetInnerHTML: {
            __html: t
          }
        });
      },
            p = e => r.a.createElement("a", {
        onClick: t => {
          e.handleOnClick && e.handleOnClick(t);
        },
        className: e.baseCssClass + "__action",
        href: o(e)
      }, r.a.createElement("span", {
        className: e.baseCssClass + "__action-text"
      }, e.actionText)),
            f = e => {
        const {
          displayFilename: t = !1,
          displaySize: n = !1,
          displayFormat: a = !1
        } = e,
              l = e.baseCssClass + (e.isInEditor ? " cq-dd-file" : ""),
              s = t || n || a;
        return r.a.createElement("div", {
          className: l
        }, !!e.title && r.a.createElement(i, Object.assign({}, e)), !!e.description && r.a.createElement(m, Object.assign({}, e)), s && r.a.createElement(d, Object.assign({}, e)), r.a.createElement(p, Object.assign({}, e)));
      };

      t.default = e => {
        const t = Object(l.a)(Object(l.b)(f, "cmp-download"), s.a, "Download V1");
        return r.a.createElement(t, Object.assign({}, e));
      };
    },
    36: function (e, t, n) {
      e.exports = n(23);
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvYXV0aG9yaW5nL2Rvd25sb2FkL3YxL0Rvd25sb2FkVjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFrTTtBQUNyUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULDBGQUEwRjtBQUMxRjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQsT0FBTztBQUNQO0FBQ0EscUJBQXFCLEVBQUUsYUFBYSxFQUFFLGtCQUFrQixFQUFFO0FBQzFEO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLG9EQUFvRCwrREFBK0QsaURBQWlELDRDQUE0QztBQUN6Tjs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvRG93bmxvYWRWMS5hZjViY2ExOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKGEpIHtcbiAgICAgIGlmICh0W2FdKSByZXR1cm4gdFthXS5leHBvcnRzO1xuICAgICAgdmFyIHIgPSB0W2FdID0ge1xuICAgICAgICBpOiBhLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVthXS5jYWxsKHIuZXhwb3J0cywgciwgci5leHBvcnRzLCBuKSwgci5sID0gITAsIHIuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIGEpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBhXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgYSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKGEpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgciBpbiBlKSBuLmQoYSwgciwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgcikpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDM2KTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBzO1xuICAgICAgfSksIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbztcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSBuKDApLFxuICAgICAgICAgIHIgPSBuLm4oYSk7XG5cbiAgICAgIGNvbnN0IGwgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IChudWxsICE9IGUuY29tcG9uZW50VGl0bGUgJiYgZS5jb21wb25lbnRUaXRsZS5sZW5ndGggPiAwID8gZS5jb21wb25lbnRUaXRsZSArIFwiIC0gXCIgOiBcIlwiKSArIChudWxsICE9IGUuZW1wdHlUZXh0QXBwZW5kID8gZS5lbXB0eVRleHRBcHBlbmQgOiBcIlBsZWFzZSBjb25maWd1cmUgdGhlIGNvbXBvbmVudFwiKTtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IFwiY3EtcGxhY2Vob2xkZXJcIiArIChudWxsICE9IGUuY2xhc3NBcHBlbmQgPyBcIiBcIiArIGUuY2xhc3NBcHBlbmQgOiBcIlwiKVxuICAgICAgICB9LCB0KTtcbiAgICAgIH0sXG4gICAgICAgICAgICBzID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCByID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIGwgPSByICYmIHIudHJpbSgpLmxlbmd0aCA+IDAgPyByIDogdCxcbiAgICAgICAgICAgICAgcyA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IGxcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGEuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBzKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbyA9IChlLCB0LCBuLCByKSA9PiBzID0+IHtcbiAgICAgICAgY29uc3QgbyA9IHQocyksXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICBoaWRlUGxhY2VIb2xkZXI6IGMgPSAhMSxcbiAgICAgICAgICBpc0luRWRpdG9yOiBpID0gITFcbiAgICAgICAgfSA9IHM7XG4gICAgICAgIHJldHVybiBhLmNyZWF0ZUVsZW1lbnQoYS5GcmFnbWVudCwgbnVsbCwgIW8gJiYgYS5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIHMpKSwgbyAmJiBpICYmICFjICYmIGEuY3JlYXRlRWxlbWVudChsLCB7XG4gICAgICAgICAgZW1wdHlUZXh0QXBwZW5kOiByLFxuICAgICAgICAgIGNvbXBvbmVudFRpdGxlOiBuXG4gICAgICAgIH0pKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICAxNDogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBmdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgcmV0dXJuIChudWxsID09IGUudXJsIHx8IDAgPT09IGUudXJsLmxlbmd0aCkgJiYgbnVsbCA9PSBlLmhhbmRsZU9uQ2xpY2s7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgMjM6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJnZXREb3dubG9hZFYxSHJlZlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSksIG4uZCh0LCBcIkRvd25sb2FkVjFIZWFkaW5nQ29udGVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSksIG4uZCh0LCBcIkRvd25sb2FkVjFIZWFkaW5nRWxlbWVudFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfSksIG4uZCh0LCBcInJlbmRlclByb3BlcnR5XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHU7XG4gICAgICB9KSwgbi5kKHQsIFwiRG93bmxvYWRWMURldGFpbHNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH0pLCBuLmQodCwgXCJEb3dubG9hZFYxRGVzY3JpcHRpb25cIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gbTtcbiAgICAgIH0pLCBuLmQodCwgXCJEb3dubG9hZFYxTGlua1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBwO1xuICAgICAgfSksIG4uZCh0LCBcIkRvd25sb2FkVjFJbXBsXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGY7XG4gICAgICB9KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICByID0gbi5uKGEpLFxuICAgICAgICAgIGwgPSBuKDEpLFxuICAgICAgICAgIHMgPSBuKDE0KTtcblxuICAgICAgY29uc3QgbyA9IGUgPT4gZS51cmwgJiYgZS51cmwubGVuZ3RoID4gMCA/IGUudXJsIDogXCIjXCIsXG4gICAgICAgICAgICBjID0gZSA9PiByLmEuY3JlYXRlRWxlbWVudChyLmEuRnJhZ21lbnQsIG51bGwsICEhZS51cmwgfHwgISFlLmhhbmRsZU9uQ2xpY2sgJiYgci5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgICAgb25DbGljazogdCA9PiB7XG4gICAgICAgICAgZS5oYW5kbGVPbkNsaWNrICYmIGUuaGFuZGxlT25DbGljayh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX190aXRsZS1saW5rXCIsXG4gICAgICAgIGhyZWY6IG8oZSlcbiAgICAgIH0sIGUudGl0bGUpLCAhZS51cmwgJiYgci5hLmNyZWF0ZUVsZW1lbnQoci5hLkZyYWdtZW50LCBudWxsLCBcIiBcIiwgZS50aXRsZSwgXCIgXCIpKSxcbiAgICAgICAgICAgIGkgPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIHRpdGxlVHlwZTogdCA9IFwiaDNcIlxuICAgICAgICB9ID0gZTtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiXCIgKyB0LCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArICdfX3RpdGxlXCInXG4gICAgICAgIH0sIHIuYS5jcmVhdGVFbGVtZW50KGMsIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgdSA9IChlLCB0LCBuLCBhKSA9PiB7XG4gICAgICAgIGNvbnN0IGwgPSBgJHthfV9fcHJvcGVydHkgJHthfV9fcHJvcGVydHktLScgKyAke259YDtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGxcbiAgICAgICAgfSwgci5hLmNyZWF0ZUVsZW1lbnQoXCJkdFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBhICsgXCJfX3Byb3BlcnR5LWxhYmVsXCJcbiAgICAgICAgfSwgZSksIHIuYS5jcmVhdGVFbGVtZW50KFwiZGRcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogYSArIFwiX19wcm9wZXJ0eS1jb250ZW50XCJcbiAgICAgICAgfSwgdCkpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGQgPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRpc3BsYXlGaWxlbmFtZTogdCA9ICExLFxuICAgICAgICAgIGRpc3BsYXlTaXplOiBuID0gITEsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdDogYSA9ICExXG4gICAgICAgIH0gPSBlO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQoXCJkbFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19wcm9wZXJ0aWVzXCJcbiAgICAgICAgfSwgdCAmJiB1KFwiRmlsZW5hbWVcIiwgZS5maWxlbmFtZSwgXCJmaWxlbmFtZVwiLCBlLmJhc2VDc3NDbGFzcyksIG4gJiYgdShcIlNpemVcIiwgZS5zaXplLCBcInNpemVcIiwgZS5iYXNlQ3NzQ2xhc3MpLCBhICYmIHUoXCJGb3JtYXRcIiwgZS5mb3JtYXQsIFwiZm9ybWF0XCIsIGUuYmFzZUNzc0NsYXNzKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgbSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gU3RyaW5nKGUuZGVzY3JpcHRpb24pIHx8IFwiXCI7XG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19kZXNjcmlwdGlvblwiLFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICBfX2h0bWw6IHRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgICAgICAgIHAgPSBlID0+IHIuYS5jcmVhdGVFbGVtZW50KFwiYVwiLCB7XG4gICAgICAgIG9uQ2xpY2s6IHQgPT4ge1xuICAgICAgICAgIGUuaGFuZGxlT25DbGljayAmJiBlLmhhbmRsZU9uQ2xpY2sodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fYWN0aW9uXCIsXG4gICAgICAgIGhyZWY6IG8oZSlcbiAgICAgIH0sIHIuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fYWN0aW9uLXRleHRcIlxuICAgICAgfSwgZS5hY3Rpb25UZXh0KSksXG4gICAgICAgICAgICBmID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBkaXNwbGF5RmlsZW5hbWU6IHQgPSAhMSxcbiAgICAgICAgICBkaXNwbGF5U2l6ZTogbiA9ICExLFxuICAgICAgICAgIGRpc3BsYXlGb3JtYXQ6IGEgPSAhMVxuICAgICAgICB9ID0gZSxcbiAgICAgICAgICAgICAgbCA9IGUuYmFzZUNzc0NsYXNzICsgKGUuaXNJbkVkaXRvciA/IFwiIGNxLWRkLWZpbGVcIiA6IFwiXCIpLFxuICAgICAgICAgICAgICBzID0gdCB8fCBuIHx8IGE7XG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBsXG4gICAgICAgIH0sICEhZS50aXRsZSAmJiByLmEuY3JlYXRlRWxlbWVudChpLCBPYmplY3QuYXNzaWduKHt9LCBlKSksICEhZS5kZXNjcmlwdGlvbiAmJiByLmEuY3JlYXRlRWxlbWVudChtLCBPYmplY3QuYXNzaWduKHt9LCBlKSksIHMgJiYgci5hLmNyZWF0ZUVsZW1lbnQoZCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpLCByLmEuY3JlYXRlRWxlbWVudChwLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpO1xuICAgICAgfTtcblxuICAgICAgdC5kZWZhdWx0ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBPYmplY3QobC5hKShPYmplY3QobC5iKShmLCBcImNtcC1kb3dubG9hZFwiKSwgcy5hLCBcIkRvd25sb2FkIFYxXCIpO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM2OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigyMyk7XG4gICAgfVxuICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
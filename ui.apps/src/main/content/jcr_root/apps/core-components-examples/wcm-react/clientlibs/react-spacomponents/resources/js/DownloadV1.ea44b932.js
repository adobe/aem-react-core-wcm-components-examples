(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["DownloadV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-base/dist/authoring/download/v1/DownloadV1.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-base/dist/authoring/download/v1/DownloadV1.js ***!
  \*****************************************************************************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2UvZGlzdC9hdXRob3JpbmcvZG93bmxvYWQvdjEvRG93bmxvYWRWMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBdUQsMEJBQTBCLFNBQWtNO0FBQ3JSLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRDQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTLHVDQUF1QztBQUNoRCxPQUFPO0FBQ1A7QUFDQSxxQkFBcUIsRUFBRSxhQUFhLEVBQUUsa0JBQWtCLEVBQUU7QUFDMUQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsb0RBQW9ELCtEQUErRCxpREFBaUQsNENBQTRDO0FBQ3pOOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9Eb3dubG9hZFYxLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3QtYmFzZVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4oYSkge1xuICAgICAgaWYgKHRbYV0pIHJldHVybiB0W2FdLmV4cG9ydHM7XG4gICAgICB2YXIgciA9IHRbYV0gPSB7XG4gICAgICAgIGk6IGEsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW2FdLmNhbGwoci5leHBvcnRzLCByLCByLmV4cG9ydHMsIG4pLCByLmwgPSAhMCwgci5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgYSkge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IGFcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciBhID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIoYSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciByIGluIGUpIG4uZChhLCByLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCByKSk7XG4gICAgICByZXR1cm4gYTtcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMzYpO1xuICB9KHtcbiAgICAwOiBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICAgIH0sXG4gICAgMTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHM7XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSk7XG4gICAgICB2YXIgYSA9IG4oMCksXG4gICAgICAgICAgciA9IG4ubihhKTtcblxuICAgICAgY29uc3QgbCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gKG51bGwgIT0gZS5jb21wb25lbnRUaXRsZSAmJiBlLmNvbXBvbmVudFRpdGxlLmxlbmd0aCA+IDAgPyBlLmNvbXBvbmVudFRpdGxlICsgXCIgLSBcIiA6IFwiXCIpICsgKG51bGwgIT0gZS5lbXB0eVRleHRBcHBlbmQgPyBlLmVtcHR5VGV4dEFwcGVuZCA6IFwiUGxlYXNlIGNvbmZpZ3VyZSB0aGUgY29tcG9uZW50XCIpO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogXCJjcS1wbGFjZWhvbGRlclwiICsgKG51bGwgIT0gZS5jbGFzc0FwcGVuZCA/IFwiIFwiICsgZS5jbGFzc0FwcGVuZCA6IFwiXCIpXG4gICAgICAgIH0sIHQpO1xuICAgICAgfSxcbiAgICAgICAgICAgIHMgPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICAgIGNvbnN0IHIgPSBuLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgICAgbCA9IHIgJiYgci50cmltKCkubGVuZ3RoID4gMCA/IHIgOiB0LFxuICAgICAgICAgICAgICBzID0geyAuLi5uLFxuICAgICAgICAgIGJhc2VDc3NDbGFzczogbFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYS5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIHMpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBvID0gKGUsIHQsIG4sIHIpID0+IHMgPT4ge1xuICAgICAgICBjb25zdCBvID0gdChzKSxcbiAgICAgICAgICAgICAge1xuICAgICAgICAgIGhpZGVQbGFjZUhvbGRlcjogYyA9ICExLFxuICAgICAgICAgIGlzSW5FZGl0b3I6IGkgPSAhMVxuICAgICAgICB9ID0gcztcbiAgICAgICAgcmV0dXJuIGEuY3JlYXRlRWxlbWVudChhLkZyYWdtZW50LCBudWxsLCAhbyAmJiBhLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgcykpLCBvICYmIGkgJiYgIWMgJiYgYS5jcmVhdGVFbGVtZW50KGwsIHtcbiAgICAgICAgICBlbXB0eVRleHRBcHBlbmQ6IHIsXG4gICAgICAgICAgY29tcG9uZW50VGl0bGU6IG5cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDE0OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIGEoZSkge1xuICAgICAgICByZXR1cm4gKG51bGwgPT0gZS51cmwgfHwgMCA9PT0gZS51cmwubGVuZ3RoKSAmJiBudWxsID09IGUuaGFuZGxlT25DbGljaztcbiAgICAgIH1cblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICAyMzogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCksIG4uZCh0LCBcImdldERvd25sb2FkVjFIcmVmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KSwgbi5kKHQsIFwiRG93bmxvYWRWMUhlYWRpbmdDb250ZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9KSwgbi5kKHQsIFwiRG93bmxvYWRWMUhlYWRpbmdFbGVtZW50XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KSwgbi5kKHQsIFwicmVuZGVyUHJvcGVydHlcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdTtcbiAgICAgIH0pLCBuLmQodCwgXCJEb3dubG9hZFYxRGV0YWlsc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfSksIG4uZCh0LCBcIkRvd25sb2FkVjFEZXNjcmlwdGlvblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBtO1xuICAgICAgfSksIG4uZCh0LCBcIkRvd25sb2FkVjFMaW5rXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHA7XG4gICAgICB9KSwgbi5kKHQsIFwiRG93bmxvYWRWMUltcGxcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZjtcbiAgICAgIH0pO1xuICAgICAgdmFyIGEgPSBuKDApLFxuICAgICAgICAgIHIgPSBuLm4oYSksXG4gICAgICAgICAgbCA9IG4oMSksXG4gICAgICAgICAgcyA9IG4oMTQpO1xuXG4gICAgICBjb25zdCBvID0gZSA9PiBlLnVybCAmJiBlLnVybC5sZW5ndGggPiAwID8gZS51cmwgOiBcIiNcIixcbiAgICAgICAgICAgIGMgPSBlID0+IHIuYS5jcmVhdGVFbGVtZW50KHIuYS5GcmFnbWVudCwgbnVsbCwgISFlLnVybCB8fCAhIWUuaGFuZGxlT25DbGljayAmJiByLmEuY3JlYXRlRWxlbWVudChcImFcIiwge1xuICAgICAgICBvbkNsaWNrOiB0ID0+IHtcbiAgICAgICAgICBlLmhhbmRsZU9uQ2xpY2sgJiYgZS5oYW5kbGVPbkNsaWNrKHQpO1xuICAgICAgICB9LFxuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX3RpdGxlLWxpbmtcIixcbiAgICAgICAgaHJlZjogbyhlKVxuICAgICAgfSwgZS50aXRsZSksICFlLnVybCAmJiByLmEuY3JlYXRlRWxlbWVudChyLmEuRnJhZ21lbnQsIG51bGwsIFwiIFwiLCBlLnRpdGxlLCBcIiBcIikpLFxuICAgICAgICAgICAgaSA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdGl0bGVUeXBlOiB0ID0gXCJoM1wiXG4gICAgICAgIH0gPSBlO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQoXCJcIiArIHQsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgJ19fdGl0bGVcIidcbiAgICAgICAgfSwgci5hLmNyZWF0ZUVsZW1lbnQoYywgT2JqZWN0LmFzc2lnbih7fSwgZSkpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICB1ID0gKGUsIHQsIG4sIGEpID0+IHtcbiAgICAgICAgY29uc3QgbCA9IGAke2F9X19wcm9wZXJ0eSAke2F9X19wcm9wZXJ0eS0tJyArICR7bn1gO1xuICAgICAgICByZXR1cm4gci5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogbFxuICAgICAgICB9LCByLmEuY3JlYXRlRWxlbWVudChcImR0XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGEgKyBcIl9fcHJvcGVydHktbGFiZWxcIlxuICAgICAgICB9LCBlKSwgci5hLmNyZWF0ZUVsZW1lbnQoXCJkZFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBhICsgXCJfX3Byb3BlcnR5LWNvbnRlbnRcIlxuICAgICAgICB9LCB0KSk7XG4gICAgICB9LFxuICAgICAgICAgICAgZCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgZGlzcGxheUZpbGVuYW1lOiB0ID0gITEsXG4gICAgICAgICAgZGlzcGxheVNpemU6IG4gPSAhMSxcbiAgICAgICAgICBkaXNwbGF5Rm9ybWF0OiBhID0gITFcbiAgICAgICAgfSA9IGU7XG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcImRsXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX3Byb3BlcnRpZXNcIlxuICAgICAgICB9LCB0ICYmIHUoXCJGaWxlbmFtZVwiLCBlLmZpbGVuYW1lLCBcImZpbGVuYW1lXCIsIGUuYmFzZUNzc0NsYXNzKSwgbiAmJiB1KFwiU2l6ZVwiLCBlLnNpemUsIFwic2l6ZVwiLCBlLmJhc2VDc3NDbGFzcyksIGEgJiYgdShcIkZvcm1hdFwiLCBlLmZvcm1hdCwgXCJmb3JtYXRcIiwgZS5iYXNlQ3NzQ2xhc3MpKTtcbiAgICAgIH0sXG4gICAgICAgICAgICBtID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSBTdHJpbmcoZS5kZXNjcmlwdGlvbikgfHwgXCJcIjtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2Rlc2NyaXB0aW9uXCIsXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6IHtcbiAgICAgICAgICAgIF9faHRtbDogdFxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LFxuICAgICAgICAgICAgcCA9IGUgPT4gci5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHtcbiAgICAgICAgb25DbGljazogdCA9PiB7XG4gICAgICAgICAgZS5oYW5kbGVPbkNsaWNrICYmIGUuaGFuZGxlT25DbGljayh0KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19hY3Rpb25cIixcbiAgICAgICAgaHJlZjogbyhlKVxuICAgICAgfSwgci5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19hY3Rpb24tdGV4dFwiXG4gICAgICB9LCBlLmFjdGlvblRleHQpKSxcbiAgICAgICAgICAgIGYgPSBlID0+IHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGRpc3BsYXlGaWxlbmFtZTogdCA9ICExLFxuICAgICAgICAgIGRpc3BsYXlTaXplOiBuID0gITEsXG4gICAgICAgICAgZGlzcGxheUZvcm1hdDogYSA9ICExXG4gICAgICAgIH0gPSBlLFxuICAgICAgICAgICAgICBsID0gZS5iYXNlQ3NzQ2xhc3MgKyAoZS5pc0luRWRpdG9yID8gXCIgY3EtZGQtZmlsZVwiIDogXCJcIiksXG4gICAgICAgICAgICAgIHMgPSB0IHx8IG4gfHwgYTtcbiAgICAgICAgcmV0dXJuIHIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IGxcbiAgICAgICAgfSwgISFlLnRpdGxlICYmIHIuYS5jcmVhdGVFbGVtZW50KGksIE9iamVjdC5hc3NpZ24oe30sIGUpKSwgISFlLmRlc2NyaXB0aW9uICYmIHIuYS5jcmVhdGVFbGVtZW50KG0sIE9iamVjdC5hc3NpZ24oe30sIGUpKSwgcyAmJiByLmEuY3JlYXRlRWxlbWVudChkLCBPYmplY3QuYXNzaWduKHt9LCBlKSksIHIuYS5jcmVhdGVFbGVtZW50KHAsIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChsLmEpKE9iamVjdChsLmIpKGYsIFwiY21wLWRvd25sb2FkXCIpLCBzLmEsIFwiRG93bmxvYWQgVjFcIik7XG4gICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMzY6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBlLmV4cG9ydHMgPSBuKDIzKTtcbiAgICB9XG4gIH0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
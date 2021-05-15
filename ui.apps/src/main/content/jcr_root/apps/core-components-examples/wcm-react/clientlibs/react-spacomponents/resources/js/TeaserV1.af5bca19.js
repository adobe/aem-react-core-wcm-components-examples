(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TeaserV1"],{

/***/ "../../react-base-components/dist/authoring/teaser/v1/TeaserV1.js":
/*!**************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-base-components/dist/authoring/teaser/v1/TeaserV1.js ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(a) {
      if (t[a]) return t[a].exports;
      var s = t[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return e[a].call(s.exports, s, s.exports, n), s.l = !0, s.exports;
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
      }), 2 & t && "string" != typeof e) for (var s in e) n.d(a, s, function (t) {
        return e[t];
      }.bind(null, s));
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
    }, n.p = "", n(n.s = 35);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return c;
      }), n.d(t, "a", function () {
        return i;
      });
      var a = n(0),
          s = n.n(a);

      const r = e => {
        const t = (null != e.componentTitle && e.componentTitle.length > 0 ? e.componentTitle + " - " : "") + (null != e.emptyTextAppend ? e.emptyTextAppend : "Please configure the component");
        return s.a.createElement("div", {
          className: "cq-placeholder" + (null != e.classAppend ? " " + e.classAppend : "")
        }, t);
      },
            c = (e, t) => n => {
        const s = n.baseCssClass,
              r = s && s.trim().length > 0 ? s : t,
              c = { ...n,
          baseCssClass: r
        };
        return a.createElement(e, Object.assign({}, c));
      },
            i = (e, t, n, s) => c => {
        const i = t(c),
              {
          hidePlaceHolder: l = !1,
          isInEditor: o = !1
        } = c;
        return a.createElement(a.Fragment, null, !i && a.createElement(e, Object.assign({}, c)), i && o && !l && a.createElement(r, {
          emptyTextAppend: s,
          componentTitle: n
        }));
      };
    },
    13: function (e, t, n) {
      "use strict";

      function a(e) {
        return !e.imagePath && !e.description && 0 == e.actions.length;
      }

      n.d(t, "a", function () {
        return a;
      });
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "a", function () {
        return c;
      });
      var a = n(0),
          s = n.n(a),
          r = n(3);

      const c = e => {
        const {
          to: t,
          isRouted: n,
          ...a
        } = e;
        if (void 0 === t || 0 === t.trim().length) return s.a.createElement("a", Object.assign({
          href: "#"
        }, a));
        return /^https?:\/\//.test(t) || !n ? s.a.createElement("a", Object.assign({
          href: t
        }, a)) : s.a.createElement(r.Link, Object.assign({}, a, {
          to: t
        }));
      };
    },
    22: function (e, t, n) {
      "use strict";

      n.r(t);
      var a = n(0),
          s = n.n(a),
          r = n(1),
          c = n(8),
          i = n(7),
          l = n(2),
          o = n(13);

      const u = e => s.a.createElement("div", {
        className: e.baseCssClass + "__image"
      }, s.a.createElement(c.default, {
        isInEditor: e.isInEditor,
        src: e.imagePath,
        alt: e.imageAlt
      })),
            m = e => s.a.createElement("div", {
        className: e.baseCssClass + "__pretitle"
      }, e.pretitle),
            d = e => s.a.createElement(i.default, {
        baseCssClass: e.baseCssClass + "__title",
        nested: !0,
        type: e.titleType,
        isInEditor: e.isInEditor,
        linkDisabled: !1,
        text: e.title,
        linkURL: e.linkURL
      }),
            p = e => {
        const t = e.description;
        return s.a.createElement("div", {
          className: e.baseCssClass + "__description",
          dangerouslySetInnerHTML: {
            __html: t
          }
        });
      },
            b = e => s.a.createElement("div", {
        className: e.baseCssClass + "__action-container"
      }, e.actions.map((t, n) => ((e, t, n) => s.a.createElement(l.a, {
        key: "link-" + n,
        isRouted: e.routed,
        className: e.baseCssClass + "__action-link",
        to: t.URL
      }, "$", t.title))(e, t, n))),
            f = e => {
        const t = e.baseCssClass || "" + e.isInEditor ? " cq-dd-image" : "",
              n = e.actions.length > 0 && e.actionsEnabled;
        return s.a.createElement("div", {
          id: e.id,
          className: t
        }, e.imagePath && s.a.createElement(u, Object.assign({}, e)), s.a.createElement("div", {
          className: e.baseCssClass + "__content"
        }, e.pretitle && s.a.createElement(m, Object.assign({}, e)), e.title && s.a.createElement(d, Object.assign({}, e)), e.description && s.a.createElement(p, Object.assign({}, e)), n && s.a.createElement(b, Object.assign({}, e))));
      };

      t.default = e => {
        const t = Object(r.a)(Object(r.b)(f, "cmp-teaser"), o.a, "Teaser V1");
        return s.a.createElement(t, Object.assign({}, e));
      };
    },
    3: function (e, t) {
      e.exports = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
    },
    35: function (e, t, n) {
      e.exports = n(22);
    },
    4: function (e, t, n) {
      "use strict";

      function a(e) {
        return null == e.text || 0 === e.text.trim().length;
      }

      n.d(t, "a", function () {
        return a;
      });
    },
    5: function (e, t, n) {
      "use strict";

      function a(e) {
        return !e.src || 0 === e.src.trim().length;
      }

      n.d(t, "a", function () {
        return a;
      });
    },
    7: function (e, t, n) {
      "use strict";

      n.r(t), n.d(t, "TitleV2Link", function () {
        return o;
      }), n.d(t, "TitleV2Contents", function () {
        return u;
      });
      var a = n(0),
          s = n.n(a),
          r = n(1),
          c = n(2),
          i = n(4);

      const l = e => e.nested ? "-" : "__",
            o = e => s.a.createElement(c.a, {
        className: e.baseCssClass + l(e) + "link",
        isRouted: e.routed,
        to: e.linkURL
      }, e.text),
            u = e => e.linkDisabled ? s.a.createElement(s.a.Fragment, null, e.text) : s.a.createElement(o, Object.assign({}, e)),
            m = e => {
        const t = e.type ? e.type.toString() : "h3";
        return s.a.createElement("div", {
          className: e.baseCssClass
        }, s.a.createElement(t, {
          className: e.baseCssClass + l(e) + "text"
        }, s.a.createElement(u, Object.assign({}, e))));
      };

      t.default = e => {
        const t = Object(r.a)(Object(r.b)(m, "cmp-title"), i.a, "TitleV2");
        return s.a.createElement(t, Object.assign({}, e));
      };
    },
    8: function (e, t, n) {
      "use strict";

      n.r(t);
      var a = n(0),
          s = n.n(a),
          r = n(1),
          c = n(2),
          i = n(5);

      const l = e => s.a.createElement(s.a.Fragment, null, s.a.createElement("img", {
        src: e.src,
        className: e.baseCssClass + "__image",
        alt: e.alt
      }), !!e.title && s.a.createElement("span", {
        className: e.baseCssClass + "__title",
        itemProp: "caption"
      }, e.title), e.displayPopupTitle && !!e.title && s.a.createElement("meta", {
        itemProp: "caption",
        content: e.title
      })),
            o = e => e.link && e.link.trim().length > 0 ? s.a.createElement(c.a, {
        className: e.baseCssClass + "__link",
        isRouted: e.routed,
        to: e.link
      }, s.a.createElement(l, Object.assign({}, e))) : s.a.createElement(l, Object.assign({}, e)),
            u = e => {
        const {
          isInEditor: t = !1
        } = e,
              n = t ? e.baseCssClass + " cq-dd-image" : e.baseCssClass;
        return s.a.createElement("div", {
          className: n
        }, s.a.createElement(o, Object.assign({}, e)));
      };

      t.default = e => {
        const t = Object(r.a)(Object(r.b)(u, "cmp-image"), i.a, "Image V2");
        return s.a.createElement(t, Object.assign({}, e));
      };
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3QtYmFzZS1jb21wb25lbnRzL2Rpc3QvYXV0aG9yaW5nL3RlYXNlci92MS9UZWFzZXJWMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBdUQsMEJBQTBCLFNBQWtNO0FBQ3JSLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGtCQUFrQixtQkFBTyxDQUFDLDRDQUFPO0FBQ2pDLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsMEZBQTBGO0FBQzFGO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVMsa0RBQWtEO0FBQzNEO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxzREFBc0Q7QUFDL0Q7QUFDQSxTQUFTLHFEQUFxRCx1REFBdUQsNkRBQTZELGlEQUFpRDtBQUNuTzs7QUFFQTtBQUNBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsS0FBSztBQUNMO0FBQ0Esa0JBQWtCLG1CQUFPLENBQUMsaUZBQWtCO0FBQzVDLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsMkhBQTJIO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUyx1Q0FBdUM7QUFDaEQ7O0FBRUE7QUFDQTtBQUNBLG9EQUFvRDtBQUNwRDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLHVDQUF1Qyw4Q0FBOEM7QUFDNUY7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVMsdUNBQXVDO0FBQ2hEOztBQUVBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDLEUiLCJmaWxlIjoianMvVGVhc2VyVjEuYWY1YmNhMTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24gKGUsIHQpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW10sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1iYXNlXCJdID0gdCgpIDogZVtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LWJhc2VcIl0gPSB0KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gbihhKSB7XG4gICAgICBpZiAodFthXSkgcmV0dXJuIHRbYV0uZXhwb3J0cztcbiAgICAgIHZhciBzID0gdFthXSA9IHtcbiAgICAgICAgaTogYSxcbiAgICAgICAgbDogITEsXG4gICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVbYV0uY2FsbChzLmV4cG9ydHMsIHMsIHMuZXhwb3J0cywgbiksIHMubCA9ICEwLCBzLmV4cG9ydHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIG4ubSA9IGUsIG4uYyA9IHQsIG4uZCA9IGZ1bmN0aW9uIChlLCB0LCBhKSB7XG4gICAgICBuLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGdldDogYVxuICAgICAgfSk7XG4gICAgfSwgbi5yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogXCJNb2R1bGVcIlxuICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICAgIH0pO1xuICAgIH0sIG4udCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAoMSAmIHQgJiYgKGUgPSBuKGUpKSwgOCAmIHQpIHJldHVybiBlO1xuICAgICAgaWYgKDQgJiB0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgICAgdmFyIGEgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgaWYgKG4ucihhKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGEsIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZVxuICAgICAgfSksIDIgJiB0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIGZvciAodmFyIHMgaW4gZSkgbi5kKGEsIHMsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlW3RdO1xuICAgICAgfS5iaW5kKG51bGwsIHMpKTtcbiAgICAgIHJldHVybiBhO1xuICAgIH0sIG4ubiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUgJiYgZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5kZWZhdWx0O1xuICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIG4uZCh0LCBcImFcIiwgdCksIHQ7XG4gICAgfSwgbi5vID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdCk7XG4gICAgfSwgbi5wID0gXCJcIiwgbihuLnMgPSAzNSk7XG4gIH0oe1xuICAgIDA6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gICAgfSxcbiAgICAxOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4uZCh0LCBcImJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH0pLCBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICBzID0gbi5uKGEpO1xuXG4gICAgICBjb25zdCByID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHQgPSAobnVsbCAhPSBlLmNvbXBvbmVudFRpdGxlICYmIGUuY29tcG9uZW50VGl0bGUubGVuZ3RoID4gMCA/IGUuY29tcG9uZW50VGl0bGUgKyBcIiAtIFwiIDogXCJcIikgKyAobnVsbCAhPSBlLmVtcHR5VGV4dEFwcGVuZCA/IGUuZW1wdHlUZXh0QXBwZW5kIDogXCJQbGVhc2UgY29uZmlndXJlIHRoZSBjb21wb25lbnRcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBcImNxLXBsYWNlaG9sZGVyXCIgKyAobnVsbCAhPSBlLmNsYXNzQXBwZW5kID8gXCIgXCIgKyBlLmNsYXNzQXBwZW5kIDogXCJcIilcbiAgICAgICAgfSwgdCk7XG4gICAgICB9LFxuICAgICAgICAgICAgYyA9IChlLCB0KSA9PiBuID0+IHtcbiAgICAgICAgY29uc3QgcyA9IG4uYmFzZUNzc0NsYXNzLFxuICAgICAgICAgICAgICByID0gcyAmJiBzLnRyaW0oKS5sZW5ndGggPiAwID8gcyA6IHQsXG4gICAgICAgICAgICAgIGMgPSB7IC4uLm4sXG4gICAgICAgICAgYmFzZUNzc0NsYXNzOiByXG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgYykpO1xuICAgICAgfSxcbiAgICAgICAgICAgIGkgPSAoZSwgdCwgbiwgcykgPT4gYyA9PiB7XG4gICAgICAgIGNvbnN0IGkgPSB0KGMpLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgaGlkZVBsYWNlSG9sZGVyOiBsID0gITEsXG4gICAgICAgICAgaXNJbkVkaXRvcjogbyA9ICExXG4gICAgICAgIH0gPSBjO1xuICAgICAgICByZXR1cm4gYS5jcmVhdGVFbGVtZW50KGEuRnJhZ21lbnQsIG51bGwsICFpICYmIGEuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBjKSksIGkgJiYgbyAmJiAhbCAmJiBhLmNyZWF0ZUVsZW1lbnQociwge1xuICAgICAgICAgIGVtcHR5VGV4dEFwcGVuZDogcyxcbiAgICAgICAgICBjb21wb25lbnRUaXRsZTogblxuICAgICAgICB9KSk7XG4gICAgICB9O1xuICAgIH0sXG4gICAgMTM6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgZnVuY3Rpb24gYShlKSB7XG4gICAgICAgIHJldHVybiAhZS5pbWFnZVBhdGggJiYgIWUuZGVzY3JpcHRpb24gJiYgMCA9PSBlLmFjdGlvbnMubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIDI6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfSk7XG4gICAgICB2YXIgYSA9IG4oMCksXG4gICAgICAgICAgcyA9IG4ubihhKSxcbiAgICAgICAgICByID0gbigzKTtcblxuICAgICAgY29uc3QgYyA9IGUgPT4ge1xuICAgICAgICBjb25zdCB7XG4gICAgICAgICAgdG86IHQsXG4gICAgICAgICAgaXNSb3V0ZWQ6IG4sXG4gICAgICAgICAgLi4uYVxuICAgICAgICB9ID0gZTtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gdCB8fCAwID09PSB0LnRyaW0oKS5sZW5ndGgpIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImFcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgaHJlZjogXCIjXCJcbiAgICAgICAgfSwgYSkpO1xuICAgICAgICByZXR1cm4gL15odHRwcz86XFwvXFwvLy50ZXN0KHQpIHx8ICFuID8gcy5hLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgIGhyZWY6IHRcbiAgICAgICAgfSwgYSkpIDogcy5hLmNyZWF0ZUVsZW1lbnQoci5MaW5rLCBPYmplY3QuYXNzaWduKHt9LCBhLCB7XG4gICAgICAgICAgdG86IHRcbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDIyOiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4ucih0KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICBzID0gbi5uKGEpLFxuICAgICAgICAgIHIgPSBuKDEpLFxuICAgICAgICAgIGMgPSBuKDgpLFxuICAgICAgICAgIGkgPSBuKDcpLFxuICAgICAgICAgIGwgPSBuKDIpLFxuICAgICAgICAgIG8gPSBuKDEzKTtcblxuICAgICAgY29uc3QgdSA9IGUgPT4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2ltYWdlXCJcbiAgICAgIH0sIHMuYS5jcmVhdGVFbGVtZW50KGMuZGVmYXVsdCwge1xuICAgICAgICBpc0luRWRpdG9yOiBlLmlzSW5FZGl0b3IsXG4gICAgICAgIHNyYzogZS5pbWFnZVBhdGgsXG4gICAgICAgIGFsdDogZS5pbWFnZUFsdFxuICAgICAgfSkpLFxuICAgICAgICAgICAgbSA9IGUgPT4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX3ByZXRpdGxlXCJcbiAgICAgIH0sIGUucHJldGl0bGUpLFxuICAgICAgICAgICAgZCA9IGUgPT4gcy5hLmNyZWF0ZUVsZW1lbnQoaS5kZWZhdWx0LCB7XG4gICAgICAgIGJhc2VDc3NDbGFzczogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fdGl0bGVcIixcbiAgICAgICAgbmVzdGVkOiAhMCxcbiAgICAgICAgdHlwZTogZS50aXRsZVR5cGUsXG4gICAgICAgIGlzSW5FZGl0b3I6IGUuaXNJbkVkaXRvcixcbiAgICAgICAgbGlua0Rpc2FibGVkOiAhMSxcbiAgICAgICAgdGV4dDogZS50aXRsZSxcbiAgICAgICAgbGlua1VSTDogZS5saW5rVVJMXG4gICAgICB9KSxcbiAgICAgICAgICAgIHAgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGUuZGVzY3JpcHRpb247XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19kZXNjcmlwdGlvblwiLFxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MOiB7XG4gICAgICAgICAgICBfX2h0bWw6IHRcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgICAgICAgIGIgPSBlID0+IHMuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19hY3Rpb24tY29udGFpbmVyXCJcbiAgICAgIH0sIGUuYWN0aW9ucy5tYXAoKHQsIG4pID0+ICgoZSwgdCwgbikgPT4gcy5hLmNyZWF0ZUVsZW1lbnQobC5hLCB7XG4gICAgICAgIGtleTogXCJsaW5rLVwiICsgbixcbiAgICAgICAgaXNSb3V0ZWQ6IGUucm91dGVkLFxuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgXCJfX2FjdGlvbi1saW5rXCIsXG4gICAgICAgIHRvOiB0LlVSTFxuICAgICAgfSwgXCIkXCIsIHQudGl0bGUpKShlLCB0LCBuKSkpLFxuICAgICAgICAgICAgZiA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gZS5iYXNlQ3NzQ2xhc3MgfHwgXCJcIiArIGUuaXNJbkVkaXRvciA/IFwiIGNxLWRkLWltYWdlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICBuID0gZS5hY3Rpb25zLmxlbmd0aCA+IDAgJiYgZS5hY3Rpb25zRW5hYmxlZDtcbiAgICAgICAgcmV0dXJuIHMuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBpZDogZS5pZCxcbiAgICAgICAgICBjbGFzc05hbWU6IHRcbiAgICAgICAgfSwgZS5pbWFnZVBhdGggJiYgcy5hLmNyZWF0ZUVsZW1lbnQodSwgT2JqZWN0LmFzc2lnbih7fSwgZSkpLCBzLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19jb250ZW50XCJcbiAgICAgICAgfSwgZS5wcmV0aXRsZSAmJiBzLmEuY3JlYXRlRWxlbWVudChtLCBPYmplY3QuYXNzaWduKHt9LCBlKSksIGUudGl0bGUgJiYgcy5hLmNyZWF0ZUVsZW1lbnQoZCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpLCBlLmRlc2NyaXB0aW9uICYmIHMuYS5jcmVhdGVFbGVtZW50KHAsIE9iamVjdC5hc3NpZ24oe30sIGUpKSwgbiAmJiBzLmEuY3JlYXRlRWxlbWVudChiLCBPYmplY3QuYXNzaWduKHt9LCBlKSkpKTtcbiAgICAgIH07XG5cbiAgICAgIHQuZGVmYXVsdCA9IGUgPT4ge1xuICAgICAgICBjb25zdCB0ID0gT2JqZWN0KHIuYSkoT2JqZWN0KHIuYikoZiwgXCJjbXAtdGVhc2VyXCIpLCBvLmEsIFwiVGVhc2VyIFYxXCIpO1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQodCwgT2JqZWN0LmFzc2lnbih7fSwgZSkpO1xuICAgICAgfTtcbiAgICB9LFxuICAgIDM6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtcm91dGVyLWRvbVwiKTtcbiAgICB9LFxuICAgIDM1OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgZS5leHBvcnRzID0gbigyMik7XG4gICAgfSxcbiAgICA0OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIGZ1bmN0aW9uIGEoZSkge1xuICAgICAgICByZXR1cm4gbnVsbCA9PSBlLnRleHQgfHwgMCA9PT0gZS50ZXh0LnRyaW0oKS5sZW5ndGg7XG4gICAgICB9XG5cbiAgICAgIG4uZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gYTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgNTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBmdW5jdGlvbiBhKGUpIHtcbiAgICAgICAgcmV0dXJuICFlLnNyYyB8fCAwID09PSBlLnNyYy50cmltKCkubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGE7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIDc6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgbi5yKHQpLCBuLmQodCwgXCJUaXRsZVYyTGlua1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBvO1xuICAgICAgfSksIG4uZCh0LCBcIlRpdGxlVjJDb250ZW50c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB1O1xuICAgICAgfSk7XG4gICAgICB2YXIgYSA9IG4oMCksXG4gICAgICAgICAgcyA9IG4ubihhKSxcbiAgICAgICAgICByID0gbigxKSxcbiAgICAgICAgICBjID0gbigyKSxcbiAgICAgICAgICBpID0gbig0KTtcblxuICAgICAgY29uc3QgbCA9IGUgPT4gZS5uZXN0ZWQgPyBcIi1cIiA6IFwiX19cIixcbiAgICAgICAgICAgIG8gPSBlID0+IHMuYS5jcmVhdGVFbGVtZW50KGMuYSwge1xuICAgICAgICBjbGFzc05hbWU6IGUuYmFzZUNzc0NsYXNzICsgbChlKSArIFwibGlua1wiLFxuICAgICAgICBpc1JvdXRlZDogZS5yb3V0ZWQsXG4gICAgICAgIHRvOiBlLmxpbmtVUkxcbiAgICAgIH0sIGUudGV4dCksXG4gICAgICAgICAgICB1ID0gZSA9PiBlLmxpbmtEaXNhYmxlZCA/IHMuYS5jcmVhdGVFbGVtZW50KHMuYS5GcmFnbWVudCwgbnVsbCwgZS50ZXh0KSA6IHMuYS5jcmVhdGVFbGVtZW50KG8sIE9iamVjdC5hc3NpZ24oe30sIGUpKSxcbiAgICAgICAgICAgIG0gPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IGUudHlwZSA/IGUudHlwZS50b1N0cmluZygpIDogXCJoM1wiO1xuICAgICAgICByZXR1cm4gcy5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3NcbiAgICAgICAgfSwgcy5hLmNyZWF0ZUVsZW1lbnQodCwge1xuICAgICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBsKGUpICsgXCJ0ZXh0XCJcbiAgICAgICAgfSwgcy5hLmNyZWF0ZUVsZW1lbnQodSwgT2JqZWN0LmFzc2lnbih7fSwgZSkpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChyLmEpKE9iamVjdChyLmIpKG0sIFwiY21wLXRpdGxlXCIpLCBpLmEsIFwiVGl0bGVWMlwiKTtcbiAgICAgICAgcmV0dXJuIHMuYS5jcmVhdGVFbGVtZW50KHQsIE9iamVjdC5hc3NpZ24oe30sIGUpKTtcbiAgICAgIH07XG4gICAgfSxcbiAgICA4OiBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgIG4ucih0KTtcbiAgICAgIHZhciBhID0gbigwKSxcbiAgICAgICAgICBzID0gbi5uKGEpLFxuICAgICAgICAgIHIgPSBuKDEpLFxuICAgICAgICAgIGMgPSBuKDIpLFxuICAgICAgICAgIGkgPSBuKDUpO1xuXG4gICAgICBjb25zdCBsID0gZSA9PiBzLmEuY3JlYXRlRWxlbWVudChzLmEuRnJhZ21lbnQsIG51bGwsIHMuYS5jcmVhdGVFbGVtZW50KFwiaW1nXCIsIHtcbiAgICAgICAgc3JjOiBlLnNyYyxcbiAgICAgICAgY2xhc3NOYW1lOiBlLmJhc2VDc3NDbGFzcyArIFwiX19pbWFnZVwiLFxuICAgICAgICBhbHQ6IGUuYWx0XG4gICAgICB9KSwgISFlLnRpdGxlICYmIHMuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fdGl0bGVcIixcbiAgICAgICAgaXRlbVByb3A6IFwiY2FwdGlvblwiXG4gICAgICB9LCBlLnRpdGxlKSwgZS5kaXNwbGF5UG9wdXBUaXRsZSAmJiAhIWUudGl0bGUgJiYgcy5hLmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIsIHtcbiAgICAgICAgaXRlbVByb3A6IFwiY2FwdGlvblwiLFxuICAgICAgICBjb250ZW50OiBlLnRpdGxlXG4gICAgICB9KSksXG4gICAgICAgICAgICBvID0gZSA9PiBlLmxpbmsgJiYgZS5saW5rLnRyaW0oKS5sZW5ndGggPiAwID8gcy5hLmNyZWF0ZUVsZW1lbnQoYy5hLCB7XG4gICAgICAgIGNsYXNzTmFtZTogZS5iYXNlQ3NzQ2xhc3MgKyBcIl9fbGlua1wiLFxuICAgICAgICBpc1JvdXRlZDogZS5yb3V0ZWQsXG4gICAgICAgIHRvOiBlLmxpbmtcbiAgICAgIH0sIHMuYS5jcmVhdGVFbGVtZW50KGwsIE9iamVjdC5hc3NpZ24oe30sIGUpKSkgOiBzLmEuY3JlYXRlRWxlbWVudChsLCBPYmplY3QuYXNzaWduKHt9LCBlKSksXG4gICAgICAgICAgICB1ID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICBpc0luRWRpdG9yOiB0ID0gITFcbiAgICAgICAgfSA9IGUsXG4gICAgICAgICAgICAgIG4gPSB0ID8gZS5iYXNlQ3NzQ2xhc3MgKyBcIiBjcS1kZC1pbWFnZVwiIDogZS5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBuXG4gICAgICAgIH0sIHMuYS5jcmVhdGVFbGVtZW50KG8sIE9iamVjdC5hc3NpZ24oe30sIGUpKSk7XG4gICAgICB9O1xuXG4gICAgICB0LmRlZmF1bHQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgdCA9IE9iamVjdChyLmEpKE9iamVjdChyLmIpKHUsIFwiY21wLWltYWdlXCIpLCBpLmEsIFwiSW1hZ2UgVjJcIik7XG4gICAgICAgIHJldHVybiBzLmEuY3JlYXRlRWxlbWVudCh0LCBPYmplY3QuYXNzaWduKHt9LCBlKSk7XG4gICAgICB9O1xuICAgIH1cbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
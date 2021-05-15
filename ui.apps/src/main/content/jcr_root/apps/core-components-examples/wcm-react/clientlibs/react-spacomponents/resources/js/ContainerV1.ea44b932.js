(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ContainerV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-spa/dist/container/container/v1/ContainerV1.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-spa/dist/container/container/v1/ContainerV1.js ***!
  \******************************************************************************************************/
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
    }, n.p = "", n(n.s = 16);
  }({
    0: function (e, t) {
      e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
    },
    1: function (e, t) {
      e.exports = __webpack_require__(/*! @adobe/aem-react-editable-components */ "./node_modules/@adobe/aem-react-editable-components/dist/aem-react-editable-components.js");
    },
    16: function (e, t, n) {
      e.exports = n(9);
    },
    2: function (e, t, n) {
      "use strict";

      n.d(t, "b", function () {
        return o;
      }), n.d(t, "a", function () {
        return a;
      });
      var s = n(0);

      const r = (() => {
        try {
          return "undefined" != typeof window;
        } catch (e) {
          return !1;
        }
      })(),
            o = (e, t) => n => {
        const r = n.baseCssClass,
              o = r && r.trim().length > 0 ? r : t,
              a = { ...n,
          baseCssClass: o
        };
        return s.createElement(e, Object.assign({}, a));
      },
            a = e => class extends s.Component {
        constructor(e) {
          super(e), this.state = {}, r && window.Granite && window.Granite.author && window.Granite.author.MessageChannel && (this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window), this.callback = this.callback.bind(this));
        }

        callback(e) {
          if (e.data && e.data.id === this.props.cqPath && "navigate" === e.data.operation) {
            const t = e.data.index;
            this.setState({
              activeIndexFromAuthorPanel: t
            });
          }
        }

        componentDidMount() {
          this.messageChannel && this.messageChannel.subscribeRequestMessage("cmp.panelcontainer", this.callback);
        }

        componentWillUnmount() {
          this.messageChannel && this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer", this.callback);
        }

        render() {
          return s.createElement(e, Object.assign({}, this.props, {
            activeIndexFromAuthorPanel: this.state.activeIndexFromAuthorPanel
          }));
        }

      };
    },
    9: function (e, t, n) {
      "use strict";

      n.r(t);
      var s = n(0),
          r = n.n(s),
          o = n(1),
          a = n(2);

      class i extends o.Container {
        constructor(e) {
          super(e), this.state = {
            componentMapping: this.props.componentMapping || o.ComponentMapping
          }, this.mainDiv = r.a.createRef();
        }

        componentDidMount() {
          this.mainDiv.current && this.mainDiv.current.setAttribute("style", this.props.backgroundStyle);
        }

        componentDidUpdate() {
          this.mainDiv.current && this.mainDiv.current.setAttribute("style", this.props.backgroundStyle);
        }

        get coreContainerProps() {
          return {
            className: "container responsivegrid"
          };
        }

        render() {
          const {
            componentMapping: e,
            allowedComponents: t,
            children: n,
            cqPath: s,
            cqItems: a,
            cqItemsOrder: i,
            isInEditor: c,
            ...p
          } = this.props,
                u = {
            allowedComponents: this.props.allowedComponents,
            gridClassNames: this.props.gridClassNames,
            columnClassNames: this.props.columnClassNames,
            cqItems: this.props.cqItems,
            cqItemsOrder: this.props.cqItemsOrder,
            title: "",
            cqPath: this.props.cqPath,
            isInEditor: !1
          };
          return r.a.createElement("div", Object.assign({}, this.coreContainerProps), r.a.createElement("div", {
            ref: this.mainDiv,
            id: this.props.id,
            className: this.props.baseCssClass
          }, this.props.layout && "simple" === this.props.layout && r.a.createElement(o.Container, {
            componentMapping: this.state.componentMapping,
            cqForceReload: this.props.cqForceReload,
            cqPath: this.props.cqPath,
            cqItems: this.props.cqItems,
            cqItemsOrder: this.props.cqItemsOrder,
            isInEditor: !1
          }, this.childComponents), (!this.props.layout || "simple" !== this.props.layout) && r.a.createElement(o.ResponsiveGrid, Object.assign({}, u))));
        }

      }

      t.default = Object(a.b)(i, "cmp-container");
    }
  });
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9kaXN0L2NvbnRhaW5lci9jb250YWluZXIvdjEvQ29udGFpbmVyVjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFnTTtBQUNuUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUNqQyxLQUFLO0FBQ0w7QUFDQSxrQkFBa0IsbUJBQU8sQ0FBQyx1SUFBc0M7QUFDaEUsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xELE9BQU87QUFDUDtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0RBQW9EO0FBQ3BEO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsdUlBQXVJO0FBQ2xKOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQyxFIiwiZmlsZSI6ImpzL0NvbnRhaW5lclYxLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gdCgpIDogZVtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBuKHMpIHtcbiAgICAgIGlmICh0W3NdKSByZXR1cm4gdFtzXS5leHBvcnRzO1xuICAgICAgdmFyIHIgPSB0W3NdID0ge1xuICAgICAgICBpOiBzLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVtzXS5jYWxsKHIuZXhwb3J0cywgciwgci5leHBvcnRzLCBuKSwgci5sID0gITAsIHIuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gbi5tID0gZSwgbi5jID0gdCwgbi5kID0gZnVuY3Rpb24gKGUsIHQsIHMpIHtcbiAgICAgIG4ubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBzXG4gICAgICB9KTtcbiAgICB9LCBuLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgbi50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IG4oZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAobi5yKHMpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkocywgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgciBpbiBlKSBuLmQocywgciwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgcikpO1xuICAgICAgcmV0dXJuIHM7XG4gICAgfSwgbi5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gbi5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBuLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBuLnAgPSBcIlwiLCBuKG4ucyA9IDE2KTtcbiAgfSh7XG4gICAgMDogZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICB9LFxuICAgIDE6IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIpO1xuICAgIH0sXG4gICAgMTY6IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBlLmV4cG9ydHMgPSBuKDkpO1xuICAgIH0sXG4gICAgMjogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIG87XG4gICAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhO1xuICAgICAgfSk7XG4gICAgICB2YXIgcyA9IG4oMCk7XG5cbiAgICAgIGNvbnN0IHIgPSAoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3c7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICAgIH0pKCksXG4gICAgICAgICAgICBvID0gKGUsIHQpID0+IG4gPT4ge1xuICAgICAgICBjb25zdCByID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIG8gPSByICYmIHIudHJpbSgpLmxlbmd0aCA+IDAgPyByIDogdCxcbiAgICAgICAgICAgICAgYSA9IHsgLi4ubixcbiAgICAgICAgICBiYXNlQ3NzQ2xhc3M6IG9cbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHMuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBhKSk7XG4gICAgICB9LFxuICAgICAgICAgICAgYSA9IGUgPT4gY2xhc3MgZXh0ZW5kcyBzLkNvbXBvbmVudCB7XG4gICAgICAgIGNvbnN0cnVjdG9yKGUpIHtcbiAgICAgICAgICBzdXBlcihlKSwgdGhpcy5zdGF0ZSA9IHt9LCByICYmIHdpbmRvdy5HcmFuaXRlICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvciAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwgJiYgKHRoaXMubWVzc2FnZUNoYW5uZWwgPSBuZXcgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKFwiY3FhdXRob3JcIiwgd2luZG93KSwgdGhpcy5jYWxsYmFjayA9IHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cblxuICAgICAgICBjYWxsYmFjayhlKSB7XG4gICAgICAgICAgaWYgKGUuZGF0YSAmJiBlLmRhdGEuaWQgPT09IHRoaXMucHJvcHMuY3FQYXRoICYmIFwibmF2aWdhdGVcIiA9PT0gZS5kYXRhLm9wZXJhdGlvbikge1xuICAgICAgICAgICAgY29uc3QgdCA9IGUuZGF0YS5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCAmJiB0aGlzLm1lc3NhZ2VDaGFubmVsLnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCAmJiB0aGlzLm1lc3NhZ2VDaGFubmVsLnVuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgIH1cblxuICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgcmV0dXJuIHMuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuXG4gICAgICB9O1xuICAgIH0sXG4gICAgOTogZnVuY3Rpb24gKGUsIHQsIG4pIHtcbiAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICBuLnIodCk7XG4gICAgICB2YXIgcyA9IG4oMCksXG4gICAgICAgICAgciA9IG4ubihzKSxcbiAgICAgICAgICBvID0gbigxKSxcbiAgICAgICAgICBhID0gbigyKTtcblxuICAgICAgY2xhc3MgaSBleHRlbmRzIG8uQ29udGFpbmVyIHtcbiAgICAgICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgICAgIHN1cGVyKGUpLCB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZzogdGhpcy5wcm9wcy5jb21wb25lbnRNYXBwaW5nIHx8IG8uQ29tcG9uZW50TWFwcGluZ1xuICAgICAgICAgIH0sIHRoaXMubWFpbkRpdiA9IHIuYS5jcmVhdGVSZWYoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICAgIHRoaXMubWFpbkRpdi5jdXJyZW50ICYmIHRoaXMubWFpbkRpdi5jdXJyZW50LnNldEF0dHJpYnV0ZShcInN0eWxlXCIsIHRoaXMucHJvcHMuYmFja2dyb3VuZFN0eWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICB0aGlzLm1haW5EaXYuY3VycmVudCAmJiB0aGlzLm1haW5EaXYuY3VycmVudC5zZXRBdHRyaWJ1dGUoXCJzdHlsZVwiLCB0aGlzLnByb3BzLmJhY2tncm91bmRTdHlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICBnZXQgY29yZUNvbnRhaW5lclByb3BzKCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IFwiY29udGFpbmVyIHJlc3BvbnNpdmVncmlkXCJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IGUsXG4gICAgICAgICAgICBhbGxvd2VkQ29tcG9uZW50czogdCxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBuLFxuICAgICAgICAgICAgY3FQYXRoOiBzLFxuICAgICAgICAgICAgY3FJdGVtczogYSxcbiAgICAgICAgICAgIGNxSXRlbXNPcmRlcjogaSxcbiAgICAgICAgICAgIGlzSW5FZGl0b3I6IGMsXG4gICAgICAgICAgICAuLi5wXG4gICAgICAgICAgfSA9IHRoaXMucHJvcHMsXG4gICAgICAgICAgICAgICAgdSA9IHtcbiAgICAgICAgICAgIGFsbG93ZWRDb21wb25lbnRzOiB0aGlzLnByb3BzLmFsbG93ZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgZ3JpZENsYXNzTmFtZXM6IHRoaXMucHJvcHMuZ3JpZENsYXNzTmFtZXMsXG4gICAgICAgICAgICBjb2x1bW5DbGFzc05hbWVzOiB0aGlzLnByb3BzLmNvbHVtbkNsYXNzTmFtZXMsXG4gICAgICAgICAgICBjcUl0ZW1zOiB0aGlzLnByb3BzLmNxSXRlbXMsXG4gICAgICAgICAgICBjcUl0ZW1zT3JkZXI6IHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLFxuICAgICAgICAgICAgdGl0bGU6IFwiXCIsXG4gICAgICAgICAgICBjcVBhdGg6IHRoaXMucHJvcHMuY3FQYXRoLFxuICAgICAgICAgICAgaXNJbkVkaXRvcjogITFcbiAgICAgICAgICB9O1xuICAgICAgICAgIHJldHVybiByLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvcmVDb250YWluZXJQcm9wcyksIHIuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIHJlZjogdGhpcy5tYWluRGl2LFxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzXG4gICAgICAgICAgfSwgdGhpcy5wcm9wcy5sYXlvdXQgJiYgXCJzaW1wbGVcIiA9PT0gdGhpcy5wcm9wcy5sYXlvdXQgJiYgci5hLmNyZWF0ZUVsZW1lbnQoby5Db250YWluZXIsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMuc3RhdGUuY29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgIGNxRm9yY2VSZWxvYWQ6IHRoaXMucHJvcHMuY3FGb3JjZVJlbG9hZCxcbiAgICAgICAgICAgIGNxUGF0aDogdGhpcy5wcm9wcy5jcVBhdGgsXG4gICAgICAgICAgICBjcUl0ZW1zOiB0aGlzLnByb3BzLmNxSXRlbXMsXG4gICAgICAgICAgICBjcUl0ZW1zT3JkZXI6IHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLFxuICAgICAgICAgICAgaXNJbkVkaXRvcjogITFcbiAgICAgICAgICB9LCB0aGlzLmNoaWxkQ29tcG9uZW50cyksICghdGhpcy5wcm9wcy5sYXlvdXQgfHwgXCJzaW1wbGVcIiAhPT0gdGhpcy5wcm9wcy5sYXlvdXQpICYmIHIuYS5jcmVhdGVFbGVtZW50KG8uUmVzcG9uc2l2ZUdyaWQsIE9iamVjdC5hc3NpZ24oe30sIHUpKSkpO1xuICAgICAgICB9XG5cbiAgICAgIH1cblxuICAgICAgdC5kZWZhdWx0ID0gT2JqZWN0KGEuYikoaSwgXCJjbXAtY29udGFpbmVyXCIpO1xuICAgIH1cbiAgfSk7XG59KTsiXSwic291cmNlUm9vdCI6IiJ9
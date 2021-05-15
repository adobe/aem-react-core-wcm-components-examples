(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["TabsV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-spa/dist/container/tabs/v1/TabsV1.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-spa/dist/container/tabs/v1/TabsV1.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function n(s) {
      if (t[s]) return t[s].exports;
      var a = t[s] = {
        i: s,
        l: !1,
        exports: {}
      };
      return e[s].call(a.exports, a, a.exports, n), a.l = !0, a.exports;
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
      }), 2 & t && "string" != typeof e) for (var a in e) n.d(s, a, function (t) {
        return e[t];
      }.bind(null, a));
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
    }, n.p = "", n(n.s = 17);
  }([function (e, t) {
    e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
  }, function (e, t) {
    e.exports = __webpack_require__(/*! @adobe/aem-react-editable-components */ "./node_modules/@adobe/aem-react-editable-components/dist/aem-react-editable-components.js");
  }, function (e, t, n) {
    "use strict";

    n.d(t, "b", function () {
      return r;
    }), n.d(t, "a", function () {
      return o;
    });
    var s = n(0);

    const a = (() => {
      try {
        return "undefined" != typeof window;
      } catch (e) {
        return !1;
      }
    })(),
          r = (e, t) => n => {
      const a = n.baseCssClass,
            r = a && a.trim().length > 0 ? a : t,
            o = { ...n,
        baseCssClass: r
      };
      return s.createElement(e, Object.assign({}, o));
    },
          o = e => class extends s.Component {
      constructor(e) {
        super(e), this.state = {}, a && window.Granite && window.Granite.author && window.Granite.author.MessageChannel && (this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window), this.callback = this.callback.bind(this));
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
  },,, function (e, t, n) {
    "use strict";

    function s(e) {
      return null == e.cqItemsOrder || 0 === e.cqItemsOrder.length;
    }

    n.d(t, "a", function () {
      return s;
    });
  }, function (e, t, n) {
    "use strict";

    n.r(t);
    var s = n(0),
        a = n.n(s),
        r = n(1),
        o = n(2),
        i = n(5);

    class c extends r.Container {
      constructor(e) {
        super(e), this.state = {
          activeIndex: e.activeItem && e.activeItem.length > 0 ? this.props.cqItemsOrder.indexOf(e.activeItem) : 0,
          componentMapping: this.props.componentMapping || r.ComponentMapping
        }, this.handleTabNavClick = this.handleTabNavClick.bind(this);
      }

      componentDidUpdate(e, t, n) {
        void 0 !== this.props.activeIndexFromAuthorPanel && e.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel && this.setState({
          activeIndex: this.props.activeIndexFromAuthorPanel
        });
      }

      tabbedChildComponents() {
        return !0 === this.props.isInEditor ? a.a.createElement(a.a.Fragment, null, this.childComponents.map((e, t) => {
          const n = {
            display: this.state.activeIndex === t ? "block" : "none"
          };
          return a.a.createElement("div", {
            key: "tab-content-" + t,
            className: this.props.baseCssClass + "__author-tab-content",
            style: n
          }, this.childComponents[t]);
        })) : this.childComponents[this.state.activeIndex];
      }

      handleTabNavClick(e) {
        this.state.activeIndex !== e && this.setState({
          activeIndex: e
        });
      }

      tabNavigation() {
        const e = [];
        return this.props.cqItems && this.props.cqItemsOrder ? a.a.createElement("ol", {
          role: "tablist",
          className: this.props.baseCssClass + "__tablist",
          "aria-label": this.props.accessibilityLabel,
          "aria-multiselectable": "false"
        }, this.props.cqItemsOrder.map((e, t) => {
          const n = this.props.cqItems[e],
                s = t === this.state.activeIndex;
          return a.a.createElement("li", {
            role: "tab",
            key: "tab-" + t,
            onClick: () => this.handleTabNavClick(t),
            className: this.props.baseCssClass + "__tab" + (s ? " " + this.props.baseCssClass + "__tab--active" : ""),
            tabIndex: s ? 0 : -1,
            "data-cmp-hook-tabs": "tab"
          }, n["cq:panelTitle"]);
        })) : e;
      }

      get tabContainerProps() {
        const e = this.containerProps;
        return e.className = e.className + " " + this.props.baseCssClass, e["data-cmp-is"] = "tabs", e;
      }

      render() {
        const e = Object(i.a)(this.props);
        return a.a.createElement("div", Object.assign({}, this.tabContainerProps), !e && this.tabNavigation(), !e && this.tabbedChildComponents(), this.placeholderComponent);
      }

    }

    t.default = Object(o.b)(Object(o.a)(c), "cmp-tabs");
  },,,,,,,,,,, function (e, t, n) {
    e.exports = n(6);
  }]);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9kaXN0L2NvbnRhaW5lci90YWJzL3YxL1RhYnNWMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLEVBQUUsS0FBdUQsMEJBQTBCLFNBQWdNO0FBQ25SLENBQUM7QUFDRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxnQkFBZ0IsbUJBQU8sQ0FBQyw0Q0FBTztBQUMvQixHQUFHO0FBQ0gsZ0JBQWdCLG1CQUFPLENBQUMsdUlBQXNDO0FBQzlELEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hELEtBQUs7QUFDTDtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0RBQXdEO0FBQ3hEOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9UYWJzVjEuZWE0NGI5MzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIhZnVuY3Rpb24gKGUsIHQpIHtcbiAgXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBtb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA9IHQoKSA6IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZGVmaW5lICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoW10sIHQpIDogXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IGV4cG9ydHNbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSB0KCkgOiBlW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gdCgpO1xufShcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBzZWxmID8gc2VsZiA6IHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHQgPSB7fTtcblxuICAgIGZ1bmN0aW9uIG4ocykge1xuICAgICAgaWYgKHRbc10pIHJldHVybiB0W3NdLmV4cG9ydHM7XG4gICAgICB2YXIgYSA9IHRbc10gPSB7XG4gICAgICAgIGk6IHMsXG4gICAgICAgIGw6ICExLFxuICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlW3NdLmNhbGwoYS5leHBvcnRzLCBhLCBhLmV4cG9ydHMsIG4pLCBhLmwgPSAhMCwgYS5leHBvcnRzO1xuICAgIH1cblxuICAgIHJldHVybiBuLm0gPSBlLCBuLmMgPSB0LCBuLmQgPSBmdW5jdGlvbiAoZSwgdCwgcykge1xuICAgICAgbi5vKGUsIHQpIHx8IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCB0LCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICBnZXQ6IHNcbiAgICAgIH0pO1xuICAgIH0sIG4uciA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgU3ltYm9sLnRvU3RyaW5nVGFnICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgdmFsdWU6IFwiTW9kdWxlXCJcbiAgICAgIH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6ICEwXG4gICAgICB9KTtcbiAgICB9LCBuLnQgPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgaWYgKDEgJiB0ICYmIChlID0gbihlKSksIDggJiB0KSByZXR1cm4gZTtcbiAgICAgIGlmICg0ICYgdCAmJiBcIm9iamVjdFwiID09IHR5cGVvZiBlICYmIGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgICAgIHZhciBzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgIGlmIChuLnIocyksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzLCBcImRlZmF1bHRcIiwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgdmFsdWU6IGVcbiAgICAgIH0pLCAyICYgdCAmJiBcInN0cmluZ1wiICE9IHR5cGVvZiBlKSBmb3IgKHZhciBhIGluIGUpIG4uZChzLCBhLCBmdW5jdGlvbiAodCkge1xuICAgICAgICByZXR1cm4gZVt0XTtcbiAgICAgIH0uYmluZChudWxsLCBhKSk7XG4gICAgICByZXR1cm4gcztcbiAgICB9LCBuLm4gPSBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHQgPSBlICYmIGUuX19lc01vZHVsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGUuZGVmYXVsdDtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlO1xuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmQodCwgXCJhXCIsIHQpLCB0O1xuICAgIH0sIG4ubyA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsIHQpO1xuICAgIH0sIG4ucCA9IFwiXCIsIG4obi5zID0gMTcpO1xuICB9KFtmdW5jdGlvbiAoZSwgdCkge1xuICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgfSwgZnVuY3Rpb24gKGUsIHQpIHtcbiAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIpO1xuICB9LCBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgbi5kKHQsIFwiYlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcjtcbiAgICB9KSwgbi5kKHQsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gbztcbiAgICB9KTtcbiAgICB2YXIgcyA9IG4oMCk7XG5cbiAgICBjb25zdCBhID0gKCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiB3aW5kb3c7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAhMTtcbiAgICAgIH1cbiAgICB9KSgpLFxuICAgICAgICAgIHIgPSAoZSwgdCkgPT4gbiA9PiB7XG4gICAgICBjb25zdCBhID0gbi5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICByID0gYSAmJiBhLnRyaW0oKS5sZW5ndGggPiAwID8gYSA6IHQsXG4gICAgICAgICAgICBvID0geyAuLi5uLFxuICAgICAgICBiYXNlQ3NzQ2xhc3M6IHJcbiAgICAgIH07XG4gICAgICByZXR1cm4gcy5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIG8pKTtcbiAgICB9LFxuICAgICAgICAgIG8gPSBlID0+IGNsYXNzIGV4dGVuZHMgcy5Db21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IoZSkge1xuICAgICAgICBzdXBlcihlKSwgdGhpcy5zdGF0ZSA9IHt9LCBhICYmIHdpbmRvdy5HcmFuaXRlICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvciAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwgJiYgKHRoaXMubWVzc2FnZUNoYW5uZWwgPSBuZXcgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKFwiY3FhdXRob3JcIiwgd2luZG93KSwgdGhpcy5jYWxsYmFjayA9IHRoaXMuY2FsbGJhY2suYmluZCh0aGlzKSk7XG4gICAgICB9XG5cbiAgICAgIGNhbGxiYWNrKGUpIHtcbiAgICAgICAgaWYgKGUuZGF0YSAmJiBlLmRhdGEuaWQgPT09IHRoaXMucHJvcHMuY3FQYXRoICYmIFwibmF2aWdhdGVcIiA9PT0gZS5kYXRhLm9wZXJhdGlvbikge1xuICAgICAgICAgIGNvbnN0IHQgPSBlLmRhdGEuaW5kZXg7XG4gICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogdFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsICYmIHRoaXMubWVzc2FnZUNoYW5uZWwuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsICYmIHRoaXMubWVzc2FnZUNoYW5uZWwudW5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gcy5jcmVhdGVFbGVtZW50KGUsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbFxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICB9O1xuICB9LCwsIGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBzKGUpIHtcbiAgICAgIHJldHVybiBudWxsID09IGUuY3FJdGVtc09yZGVyIHx8IDAgPT09IGUuY3FJdGVtc09yZGVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBuLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH0pO1xuICB9LCBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgbi5yKHQpO1xuICAgIHZhciBzID0gbigwKSxcbiAgICAgICAgYSA9IG4ubihzKSxcbiAgICAgICAgciA9IG4oMSksXG4gICAgICAgIG8gPSBuKDIpLFxuICAgICAgICBpID0gbig1KTtcblxuICAgIGNsYXNzIGMgZXh0ZW5kcyByLkNvbnRhaW5lciB7XG4gICAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICAgIHN1cGVyKGUpLCB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgIGFjdGl2ZUluZGV4OiBlLmFjdGl2ZUl0ZW0gJiYgZS5hY3RpdmVJdGVtLmxlbmd0aCA+IDAgPyB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5pbmRleE9mKGUuYWN0aXZlSXRlbSkgOiAwLFxuICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCByLkNvbXBvbmVudE1hcHBpbmdcbiAgICAgICAgfSwgdGhpcy5oYW5kbGVUYWJOYXZDbGljayA9IHRoaXMuaGFuZGxlVGFiTmF2Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlKGUsIHQsIG4pIHtcbiAgICAgICAgdm9pZCAwICE9PSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsICYmIGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBhY3RpdmVJbmRleDogdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgdGFiYmVkQ2hpbGRDb21wb25lbnRzKCkge1xuICAgICAgICByZXR1cm4gITAgPT09IHRoaXMucHJvcHMuaXNJbkVkaXRvciA/IGEuYS5jcmVhdGVFbGVtZW50KGEuYS5GcmFnbWVudCwgbnVsbCwgdGhpcy5jaGlsZENvbXBvbmVudHMubWFwKChlLCB0KSA9PiB7XG4gICAgICAgICAgY29uc3QgbiA9IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPT09IHQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIlxuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIGEuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogXCJ0YWItY29udGVudC1cIiArIHQsXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2F1dGhvci10YWItY29udGVudFwiLFxuICAgICAgICAgICAgc3R5bGU6IG5cbiAgICAgICAgICB9LCB0aGlzLmNoaWxkQ29tcG9uZW50c1t0XSk7XG4gICAgICAgIH0pKSA6IHRoaXMuY2hpbGRDb21wb25lbnRzW3RoaXMuc3RhdGUuYWN0aXZlSW5kZXhdO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVUYWJOYXZDbGljayhlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggIT09IGUgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHRhYk5hdmlnYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGUgPSBbXTtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY3FJdGVtcyAmJiB0aGlzLnByb3BzLmNxSXRlbXNPcmRlciA/IGEuYS5jcmVhdGVFbGVtZW50KFwib2xcIiwge1xuICAgICAgICAgIHJvbGU6IFwidGFibGlzdFwiLFxuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9fdGFibGlzdFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlMYWJlbCxcbiAgICAgICAgICBcImFyaWEtbXVsdGlzZWxlY3RhYmxlXCI6IFwiZmFsc2VcIlxuICAgICAgICB9LCB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5tYXAoKGUsIHQpID0+IHtcbiAgICAgICAgICBjb25zdCBuID0gdGhpcy5wcm9wcy5jcUl0ZW1zW2VdLFxuICAgICAgICAgICAgICAgIHMgPSB0ID09PSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICAgIHJvbGU6IFwidGFiXCIsXG4gICAgICAgICAgICBrZXk6IFwidGFiLVwiICsgdCxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuaGFuZGxlVGFiTmF2Q2xpY2sodCksXG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX3RhYlwiICsgKHMgPyBcIiBcIiArIHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX3RhYi0tYWN0aXZlXCIgOiBcIlwiKSxcbiAgICAgICAgICAgIHRhYkluZGV4OiBzID8gMCA6IC0xLFxuICAgICAgICAgICAgXCJkYXRhLWNtcC1ob29rLXRhYnNcIjogXCJ0YWJcIlxuICAgICAgICAgIH0sIG5bXCJjcTpwYW5lbFRpdGxlXCJdKTtcbiAgICAgICAgfSkpIDogZTtcbiAgICAgIH1cblxuICAgICAgZ2V0IHRhYkNvbnRhaW5lclByb3BzKCkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5jb250YWluZXJQcm9wcztcbiAgICAgICAgcmV0dXJuIGUuY2xhc3NOYW1lID0gZS5jbGFzc05hbWUgKyBcIiBcIiArIHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzLCBlW1wiZGF0YS1jbXAtaXNcIl0gPSBcInRhYnNcIiwgZTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCBlID0gT2JqZWN0KGkuYSkodGhpcy5wcm9wcyk7XG4gICAgICAgIHJldHVybiBhLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnRhYkNvbnRhaW5lclByb3BzKSwgIWUgJiYgdGhpcy50YWJOYXZpZ2F0aW9uKCksICFlICYmIHRoaXMudGFiYmVkQ2hpbGRDb21wb25lbnRzKCksIHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQpO1xuICAgICAgfVxuXG4gICAgfVxuXG4gICAgdC5kZWZhdWx0ID0gT2JqZWN0KG8uYikoT2JqZWN0KG8uYSkoYyksIFwiY21wLXRhYnNcIik7XG4gIH0sLCwsLCwsLCwsLCBmdW5jdGlvbiAoZSwgdCwgbikge1xuICAgIGUuZXhwb3J0cyA9IG4oNik7XG4gIH1dKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=
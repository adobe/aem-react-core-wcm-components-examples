(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AccordionV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-spa/dist/container/accordion/v1/AccordionV1.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-spa/dist/container/accordion/v1/AccordionV1.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function s(n) {
      if (t[n]) return t[n].exports;
      var a = t[n] = {
        i: n,
        l: !1,
        exports: {}
      };
      return e[n].call(a.exports, a, a.exports, s), a.l = !0, a.exports;
    }

    return s.m = e, s.c = t, s.d = function (e, t, n) {
      s.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: n
      });
    }, s.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, s.t = function (e, t) {
      if (1 & t && (e = s(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (s.r(n), Object.defineProperty(n, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var a in e) s.d(n, a, function (t) {
        return e[t];
      }.bind(null, a));
      return n;
    }, s.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return s.d(t, "a", t), t;
    }, s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = 14);
  }([function (e, t) {
    e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
  }, function (e, t) {
    e.exports = __webpack_require__(/*! @adobe/aem-react-editable-components */ "./node_modules/@adobe/aem-react-editable-components/dist/aem-react-editable-components.js");
  }, function (e, t, s) {
    "use strict";

    s.d(t, "b", function () {
      return r;
    }), s.d(t, "a", function () {
      return o;
    });
    var n = s(0);

    const a = (() => {
      try {
        return "undefined" != typeof window;
      } catch (e) {
        return !1;
      }
    })(),
          r = (e, t) => s => {
      const a = s.baseCssClass,
            r = a && a.trim().length > 0 ? a : t,
            o = { ...s,
        baseCssClass: r
      };
      return n.createElement(e, Object.assign({}, o));
    },
          o = e => class extends n.Component {
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
        return n.createElement(e, Object.assign({}, this.props, {
          activeIndexFromAuthorPanel: this.state.activeIndexFromAuthorPanel
        }));
      }

    };
  }, function (e, t, s) {
    "use strict";

    function n(e) {
      return null == e.cqItemsOrder || 0 == e.cqItemsOrder.length;
    }

    s.d(t, "a", function () {
      return n;
    });
  },,,, function (e, t, s) {
    "use strict";

    s.r(t);
    var n = s(0),
        a = s(2),
        r = s(1),
        o = s(3);

    class i extends r.Container {
      constructor(e) {
        super(e), this.state = {
          componentMapping: this.props.componentMapping || r.ComponentMapping,
          expandedItems: this.props.expandedItems
        }, this.handleAccordionNavClick = this.handleAccordionNavClick.bind(this);
      }

      componentDidUpdate(e, t) {
        void 0 !== this.props.activeIndexFromAuthorPanel && e.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel && this.setState({
          expandedItems: [this.props.cqItemsOrder[this.props.activeIndexFromAuthorPanel]]
        });
      }

      handleAccordionNavClick(e) {
        const t = this.state.expandedItems.indexOf(e) > -1,
              s = this.props.singleExpansion;
        let n = this.state.expandedItems;
        if (s) n = t ? [] : [e];else if (t) {
          const t = this.state.expandedItems.indexOf(e);
          n.splice(t);
        } else n.push(e);
        this.setState({
          expandedItems: n
        });
      }

      isItemExpanded(e) {
        return this.state.expandedItems.indexOf(e) > -1;
      }

      get accordionContainerProps() {
        const e = this.containerProps;
        return e.className = e.className + " " + this.props.baseCssClass, e["data-cmp-is"] = "accordion", e;
      }

      displayItem(e, t) {
        const s = this.props.cqItemsOrder.indexOf(e);

        if (!0 === this.props.isInEditor || t) {
          const e = t ? `${this.props.baseCssClass}__panel ${this.props.baseCssClass}__panel--expanded` : `${this.props.baseCssClass}__panel ${this.props.baseCssClass}__panel--hidden`;
          return n.createElement("div", {
            className: e,
            role: "region"
          }, this.childComponents[s]);
        }

        return null;
      }

      renderHeadingButton(e, t, s) {
        return n.createElement("button", {
          className: s,
          onClick: () => {
            this.handleAccordionNavClick(e);
          }
        }, n.createElement("span", {
          className: this.props.baseCssClass + "__title"
        }, t["cq:panelTitle"]), n.createElement("span", {
          className: this.props.baseCssClass + "__icon"
        }));
      }

      get accordionContent() {
        return this.props.cqItemsOrder.map((e, t) => {
          const s = this.props.cqItems[e],
                a = this.isItemExpanded(e),
                r = a ? `${this.props.baseCssClass}__button ${this.props.baseCssClass}__button--expanded` : this.props.baseCssClass + "__button";
          return n.createElement("div", {
            key: "accordion-index" + t,
            className: this.props.baseCssClass + "__item",
            "data-cmp-index": t,
            "data-cmp-expanded": a
          }, n.createElement("" + (this.props.headingElement || "h3"), {
            className: this.props.baseCssClass + "__header"
          }, this.renderHeadingButton(e, s, r)), this.displayItem(e, a));
        });
      }

      render() {
        const e = Object(o.a)(this.props);
        return n.createElement("div", Object.assign({}, this.accordionContainerProps), !e && this.accordionContent, this.placeholderComponent);
      }

    }

    t.default = Object(a.b)(Object(a.a)(i), "cmp-accordion");
  },,,,,,, function (e, t, s) {
    e.exports = s(7);
  }]);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9kaXN0L2NvbnRhaW5lci9hY2NvcmRpb24vdjEvQWNjb3JkaW9uVjEuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFDQSxFQUFFLEtBQXVELDBCQUEwQixTQUFnTTtBQUNuUixDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsZ0JBQWdCLG1CQUFPLENBQUMsNENBQU87QUFDL0IsR0FBRztBQUNILGdCQUFnQixtQkFBTyxDQUFDLHVJQUFzQztBQUM5RCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGlDQUFpQztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsd0JBQXdCLFVBQVUsd0JBQXdCLHdCQUF3Qix3QkFBd0IsVUFBVSx3QkFBd0I7QUFDdks7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLHdCQUF3QixXQUFXLHdCQUF3QjtBQUN0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEO0FBQ3REOztBQUVBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9BY2NvcmRpb25WMS5lYTQ0YjkzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiFmdW5jdGlvbiAoZSwgdCkge1xuICBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIG1vZHVsZSA/IG1vZHVsZS5leHBvcnRzID0gdCgpIDogXCJmdW5jdGlvblwiID09IHR5cGVvZiBkZWZpbmUgJiYgZGVmaW5lLmFtZCA/IGRlZmluZShbXSwgdCkgOiBcIm9iamVjdFwiID09IHR5cGVvZiBleHBvcnRzID8gZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IHQoKSA6IGVbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSB0KCk7XG59KFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHNlbGYgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgdCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gcyhuKSB7XG4gICAgICBpZiAodFtuXSkgcmV0dXJuIHRbbl0uZXhwb3J0cztcbiAgICAgIHZhciBhID0gdFtuXSA9IHtcbiAgICAgICAgaTogbixcbiAgICAgICAgbDogITEsXG4gICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICB9O1xuICAgICAgcmV0dXJuIGVbbl0uY2FsbChhLmV4cG9ydHMsIGEsIGEuZXhwb3J0cywgcyksIGEubCA9ICEwLCBhLmV4cG9ydHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHMubSA9IGUsIHMuYyA9IHQsIHMuZCA9IGZ1bmN0aW9uIChlLCB0LCBuKSB7XG4gICAgICBzLm8oZSwgdCkgfHwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHQsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIGdldDogblxuICAgICAgfSk7XG4gICAgfSwgcy5yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBTeW1ib2wudG9TdHJpbmdUYWcgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICB2YWx1ZTogXCJNb2R1bGVcIlxuICAgICAgfSksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgICAgICB2YWx1ZTogITBcbiAgICAgIH0pO1xuICAgIH0sIHMudCA9IGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgICBpZiAoMSAmIHQgJiYgKGUgPSBzKGUpKSwgOCAmIHQpIHJldHVybiBlO1xuICAgICAgaWYgKDQgJiB0ICYmIFwib2JqZWN0XCIgPT0gdHlwZW9mIGUgJiYgZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xuICAgICAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgaWYgKHMucihuKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KG4sIFwiZGVmYXVsdFwiLCB7XG4gICAgICAgIGVudW1lcmFibGU6ICEwLFxuICAgICAgICB2YWx1ZTogZVxuICAgICAgfSksIDIgJiB0ICYmIFwic3RyaW5nXCIgIT0gdHlwZW9mIGUpIGZvciAodmFyIGEgaW4gZSkgcy5kKG4sIGEsIGZ1bmN0aW9uICh0KSB7XG4gICAgICAgIHJldHVybiBlW3RdO1xuICAgICAgfS5iaW5kKG51bGwsIGEpKTtcbiAgICAgIHJldHVybiBuO1xuICAgIH0sIHMubiA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgdCA9IGUgJiYgZS5fX2VzTW9kdWxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZS5kZWZhdWx0O1xuICAgICAgfSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHMuZCh0LCBcImFcIiwgdCksIHQ7XG4gICAgfSwgcy5vID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZSwgdCk7XG4gICAgfSwgcy5wID0gXCJcIiwgcyhzLnMgPSAxNCk7XG4gIH0oW2Z1bmN0aW9uIChlLCB0KSB7XG4gICAgZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuICB9LCBmdW5jdGlvbiAoZSwgdCkge1xuICAgIGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIik7XG4gIH0sIGZ1bmN0aW9uIChlLCB0LCBzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBzLmQodCwgXCJiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH0pLCBzLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBvO1xuICAgIH0pO1xuICAgIHZhciBuID0gcygwKTtcblxuICAgIGNvbnN0IGEgPSAoKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIHdpbmRvdztcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuICExO1xuICAgICAgfVxuICAgIH0pKCksXG4gICAgICAgICAgciA9IChlLCB0KSA9PiBzID0+IHtcbiAgICAgIGNvbnN0IGEgPSBzLmJhc2VDc3NDbGFzcyxcbiAgICAgICAgICAgIHIgPSBhICYmIGEudHJpbSgpLmxlbmd0aCA+IDAgPyBhIDogdCxcbiAgICAgICAgICAgIG8gPSB7IC4uLnMsXG4gICAgICAgIGJhc2VDc3NDbGFzczogclxuICAgICAgfTtcbiAgICAgIHJldHVybiBuLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgbykpO1xuICAgIH0sXG4gICAgICAgICAgbyA9IGUgPT4gY2xhc3MgZXh0ZW5kcyBuLkNvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3RvcihlKSB7XG4gICAgICAgIHN1cGVyKGUpLCB0aGlzLnN0YXRlID0ge30sIGEgJiYgd2luZG93LkdyYW5pdGUgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbCAmJiAodGhpcy5tZXNzYWdlQ2hhbm5lbCA9IG5ldyB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwoXCJjcWF1dGhvclwiLCB3aW5kb3cpLCB0aGlzLmNhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpKTtcbiAgICAgIH1cblxuICAgICAgY2FsbGJhY2soZSkge1xuICAgICAgICBpZiAoZS5kYXRhICYmIGUuZGF0YS5pZCA9PT0gdGhpcy5wcm9wcy5jcVBhdGggJiYgXCJuYXZpZ2F0ZVwiID09PSBlLmRhdGEub3BlcmF0aW9uKSB7XG4gICAgICAgICAgY29uc3QgdCA9IGUuZGF0YS5pbmRleDtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgIGFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsOiB0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwgJiYgdGhpcy5tZXNzYWdlQ2hhbm5lbC5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwgJiYgdGhpcy5tZXNzYWdlQ2hhbm5lbC51bnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiBuLmNyZWF0ZUVsZW1lbnQoZSwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5wcm9wcywge1xuICAgICAgICAgIGFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsOiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgIH07XG4gIH0sIGZ1bmN0aW9uIChlLCB0LCBzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBuKGUpIHtcbiAgICAgIHJldHVybiBudWxsID09IGUuY3FJdGVtc09yZGVyIHx8IDAgPT0gZS5jcUl0ZW1zT3JkZXIubGVuZ3RoO1xuICAgIH1cblxuICAgIHMuZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG47XG4gICAgfSk7XG4gIH0sLCwsIGZ1bmN0aW9uIChlLCB0LCBzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBzLnIodCk7XG4gICAgdmFyIG4gPSBzKDApLFxuICAgICAgICBhID0gcygyKSxcbiAgICAgICAgciA9IHMoMSksXG4gICAgICAgIG8gPSBzKDMpO1xuXG4gICAgY2xhc3MgaSBleHRlbmRzIHIuQ29udGFpbmVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKGUpIHtcbiAgICAgICAgc3VwZXIoZSksIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgY29tcG9uZW50TWFwcGluZzogdGhpcy5wcm9wcy5jb21wb25lbnRNYXBwaW5nIHx8IHIuQ29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICBleHBhbmRlZEl0ZW1zOiB0aGlzLnByb3BzLmV4cGFuZGVkSXRlbXNcbiAgICAgICAgfSwgdGhpcy5oYW5kbGVBY2NvcmRpb25OYXZDbGljayA9IHRoaXMuaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2suYmluZCh0aGlzKTtcbiAgICAgIH1cblxuICAgICAgY29tcG9uZW50RGlkVXBkYXRlKGUsIHQpIHtcbiAgICAgICAgdm9pZCAwICE9PSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsICYmIGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAmJiB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBleHBhbmRlZEl0ZW1zOiBbdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXJbdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbF1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVBY2NvcmRpb25OYXZDbGljayhlKSB7XG4gICAgICAgIGNvbnN0IHQgPSB0aGlzLnN0YXRlLmV4cGFuZGVkSXRlbXMuaW5kZXhPZihlKSA+IC0xLFxuICAgICAgICAgICAgICBzID0gdGhpcy5wcm9wcy5zaW5nbGVFeHBhbnNpb247XG4gICAgICAgIGxldCBuID0gdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zO1xuICAgICAgICBpZiAocykgbiA9IHQgPyBbXSA6IFtlXTtlbHNlIGlmICh0KSB7XG4gICAgICAgICAgY29uc3QgdCA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJdGVtcy5pbmRleE9mKGUpO1xuICAgICAgICAgIG4uc3BsaWNlKHQpO1xuICAgICAgICB9IGVsc2Ugbi5wdXNoKGUpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBleHBhbmRlZEl0ZW1zOiBuXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpc0l0ZW1FeHBhbmRlZChlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmV4cGFuZGVkSXRlbXMuaW5kZXhPZihlKSA+IC0xO1xuICAgICAgfVxuXG4gICAgICBnZXQgYWNjb3JkaW9uQ29udGFpbmVyUHJvcHMoKSB7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLmNvbnRhaW5lclByb3BzO1xuICAgICAgICByZXR1cm4gZS5jbGFzc05hbWUgPSBlLmNsYXNzTmFtZSArIFwiIFwiICsgdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MsIGVbXCJkYXRhLWNtcC1pc1wiXSA9IFwiYWNjb3JkaW9uXCIsIGU7XG4gICAgICB9XG5cbiAgICAgIGRpc3BsYXlJdGVtKGUsIHQpIHtcbiAgICAgICAgY29uc3QgcyA9IHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLmluZGV4T2YoZSk7XG5cbiAgICAgICAgaWYgKCEwID09PSB0aGlzLnByb3BzLmlzSW5FZGl0b3IgfHwgdCkge1xuICAgICAgICAgIGNvbnN0IGUgPSB0ID8gYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19wYW5lbCAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fcGFuZWwtLWV4cGFuZGVkYCA6IGAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fcGFuZWwgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX3BhbmVsLS1oaWRkZW5gO1xuICAgICAgICAgIHJldHVybiBuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgY2xhc3NOYW1lOiBlLFxuICAgICAgICAgICAgcm9sZTogXCJyZWdpb25cIlxuICAgICAgICAgIH0sIHRoaXMuY2hpbGRDb21wb25lbnRzW3NdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICByZW5kZXJIZWFkaW5nQnV0dG9uKGUsIHQsIHMpIHtcbiAgICAgICAgcmV0dXJuIG4uY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBzLFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2soZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCBuLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX3RpdGxlXCJcbiAgICAgICAgfSwgdFtcImNxOnBhbmVsVGl0bGVcIl0pLCBuLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2ljb25cIlxuICAgICAgICB9KSk7XG4gICAgICB9XG5cbiAgICAgIGdldCBhY2NvcmRpb25Db250ZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubWFwKChlLCB0KSA9PiB7XG4gICAgICAgICAgY29uc3QgcyA9IHRoaXMucHJvcHMuY3FJdGVtc1tlXSxcbiAgICAgICAgICAgICAgICBhID0gdGhpcy5pc0l0ZW1FeHBhbmRlZChlKSxcbiAgICAgICAgICAgICAgICByID0gYSA/IGAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYnV0dG9uICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19idXR0b24tLWV4cGFuZGVkYCA6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2J1dHRvblwiO1xuICAgICAgICAgIHJldHVybiBuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAga2V5OiBcImFjY29yZGlvbi1pbmRleFwiICsgdCxcbiAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9faXRlbVwiLFxuICAgICAgICAgICAgXCJkYXRhLWNtcC1pbmRleFwiOiB0LFxuICAgICAgICAgICAgXCJkYXRhLWNtcC1leHBhbmRlZFwiOiBhXG4gICAgICAgICAgfSwgbi5jcmVhdGVFbGVtZW50KFwiXCIgKyAodGhpcy5wcm9wcy5oZWFkaW5nRWxlbWVudCB8fCBcImgzXCIpLCB7XG4gICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2hlYWRlclwiXG4gICAgICAgICAgfSwgdGhpcy5yZW5kZXJIZWFkaW5nQnV0dG9uKGUsIHMsIHIpKSwgdGhpcy5kaXNwbGF5SXRlbShlLCBhKSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGNvbnN0IGUgPSBPYmplY3Qoby5hKSh0aGlzLnByb3BzKTtcbiAgICAgICAgcmV0dXJuIG4uY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFjY29yZGlvbkNvbnRhaW5lclByb3BzKSwgIWUgJiYgdGhpcy5hY2NvcmRpb25Db250ZW50LCB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KTtcbiAgICAgIH1cblxuICAgIH1cblxuICAgIHQuZGVmYXVsdCA9IE9iamVjdChhLmIpKE9iamVjdChhLmEpKGkpLCBcImNtcC1hY2NvcmRpb25cIik7XG4gIH0sLCwsLCwsIGZ1bmN0aW9uIChlLCB0LCBzKSB7XG4gICAgZS5leHBvcnRzID0gcyg3KTtcbiAgfV0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
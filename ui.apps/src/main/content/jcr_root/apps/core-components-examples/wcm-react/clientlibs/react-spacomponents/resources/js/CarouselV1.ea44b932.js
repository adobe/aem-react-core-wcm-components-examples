(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CarouselV1"],{

/***/ "./node_modules/@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@adobe/aem-core-components-react-spa/dist/container/carousel/v1/CarouselV1.js ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

!function (e, t) {
   true ? module.exports = t() : undefined;
}("undefined" != typeof self ? self : this, function () {
  return function (e) {
    var t = {};

    function s(a) {
      if (t[a]) return t[a].exports;
      var i = t[a] = {
        i: a,
        l: !1,
        exports: {}
      };
      return e[a].call(i.exports, i, i.exports, s), i.l = !0, i.exports;
    }

    return s.m = e, s.c = t, s.d = function (e, t, a) {
      s.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: a
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
      var a = Object.create(null);
      if (s.r(a), Object.defineProperty(a, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var i in e) s.d(a, i, function (t) {
        return e[t];
      }.bind(null, i));
      return a;
    }, s.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return s.d(t, "a", t), t;
    }, s.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, s.p = "", s(s.s = 15);
  }([function (e, t) {
    e.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
  }, function (e, t) {
    e.exports = __webpack_require__(/*! @adobe/aem-react-editable-components */ "./node_modules/@adobe/aem-react-editable-components/dist/aem-react-editable-components.js");
  }, function (e, t, s) {
    "use strict";

    s.d(t, "b", function () {
      return n;
    }), s.d(t, "a", function () {
      return o;
    });
    var a = s(0);

    const i = (() => {
      try {
        return "undefined" != typeof window;
      } catch (e) {
        return !1;
      }
    })(),
          n = (e, t) => s => {
      const i = s.baseCssClass,
            n = i && i.trim().length > 0 ? i : t,
            o = { ...s,
        baseCssClass: n
      };
      return a.createElement(e, Object.assign({}, o));
    },
          o = e => class extends a.Component {
      constructor(e) {
        super(e), this.state = {}, i && window.Granite && window.Granite.author && window.Granite.author.MessageChannel && (this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window), this.callback = this.callback.bind(this));
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
        return a.createElement(e, Object.assign({}, this.props, {
          activeIndexFromAuthorPanel: this.state.activeIndexFromAuthorPanel
        }));
      }

    };
  },, function (e, t, s) {
    "use strict";

    function a(e) {
      return null == e.cqItemsOrder || 0 === e.cqItemsOrder.length;
    }

    s.d(t, "a", function () {
      return a;
    });
  },,,, function (e, t, s) {
    "use strict";

    s.r(t);
    var a = s(0),
        i = s.n(a),
        n = s(2),
        o = s(1),
        r = s(4);

    const l = (e, t) => {
      let s = e;

      for (let e = 0; e < t.length; e++) {
        const a = "{" + e + "}";
        s = s.replace(a, t[e]);
      }

      return s;
    };

    class c extends o.Container {
      constructor(e) {
        super(e), this.interval = 0, this.clearAutoPlay = () => {
          window.clearInterval(this.interval);
        }, this.state = {
          activeIndex: 0,
          isMouseEntered: !1,
          autoPlay: this.props.autoplay && !this.props.isInEditor,
          componentMapping: this.props.componentMapping || o.ComponentMapping
        }, this.handleIndicatorClick = this.handleIndicatorClick.bind(this), this.handleOnButtonPrev = this.handleOnButtonPrev.bind(this), this.handleOnButtonNext = this.handleOnButtonNext.bind(this), this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this), this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
      }

      componentDidUpdate(e, t, s) {
        void 0 !== this.props.activeIndexFromAuthorPanel && e.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel && (this.setState({
          activeIndex: this.props.activeIndexFromAuthorPanel
        }), this.toggleAutoPlay(!1));
      }

      componentDidMount() {
        this.autoPlay();
      }

      componentWillUnmount() {
        this.interval && this.clearAutoPlay();
      }

      handleOnMouseEnter() {
        !this.props.autopauseDisabled && this.props.autoplay && this.clearAutoPlay();
      }

      handleOnMouseLeave() {
        !this.props.autopauseDisabled && this.props.autoplay && this.autoPlay();
      }

      handleOnButtonPrev() {
        this.prevSlide();
      }

      handleOnButtonNext() {
        this.nextSlide();
      }

      handleIndicatorClick(e) {
        this.state.activeIndex !== e && this.setState({
          activeIndex: e
        });
      }

      autoPlay() {
        this.interval = window.setInterval(() => {
          this.autoPlayTick();
        }, this.props.delay);
      }

      autoPlayTick() {
        !this.state.autoPlay || this.props.cqItemsOrder.length <= 1 || this.nextSlide();
      }

      toggleAutoPlay(e) {
        this.setState({
          autoPlay: e
        });
      }

      nextSlide() {
        const e = this.__getActiveIndex();

        e === this.props.cqItemsOrder.length - 1 ? this.__setSlide(0) : this.__setSlide(e + 1);
      }

      prevSlide() {
        const e = this.__getActiveIndex();

        0 === e ? this.__setSlide(this.props.cqItemsOrder.length - 1) : this.__setSlide(e - 1);
      }

      __getActiveIndex() {
        return this.state.activeIndex;
      }

      __setSlide(e) {
        this.setState({
          activeIndex: e
        });
      }

      render() {
        const e = Object(r.a)(this.props);
        return i.a.createElement("div", {
          className: this.props.baseCssClass,
          role: "group",
          "aria-label": this.props.accessibilityLabel,
          "aria-roledescription": "carousel"
        }, !e && this.renderCarousel(), this.placeholderComponent);
      }

      displayItem(e, t) {
        const s = t === this.state.activeIndex,
              a = !(!s && !this.props.isInEditor),
              n = s ? `${this.props.baseCssClass}__item ${this.props.baseCssClass}__item--active` : this.props.baseCssClass + "__item",
              o = l(this.props.accessibility.slide, [(t + 1).toString(), this.props.cqItemsOrder.length.toString()]);
        return i.a.createElement("div", {
          key: "item-" + t,
          className: n,
          role: "tabpanel",
          "aria-label": o,
          "data-cmp-hook-carousel": "item"
        }, a && e);
      }

      renderCarousel() {
        return i.a.createElement("div", {
          className: this.props.baseCssClass + "__content",
          onMouseEnter: () => this.handleOnMouseEnter(),
          onMouseLeave: () => this.handleOnMouseLeave()
        }, this.childComponents.map((e, t) => this.displayItem(e, t)), this.renderCarouselActions(), this.renderCarouselIndicators());
      }

      renderCarouselIndicators() {
        return i.a.createElement("ol", {
          className: this.props.baseCssClass + "__indicators",
          role: "tablist",
          "aria-label": this.props.accessibility.indicators
        }, this.props.cqItemsOrder.map((e, t) => {
          const s = this.props.cqItems[e],
                a = t === this.state.activeIndex ? `${this.props.baseCssClass}__indicator ${this.props.baseCssClass}__indicator--active` : this.props.baseCssClass + "__indicator",
                n = l(this.props.accessibility.indicator, [(t + 1).toString()]);
          return i.a.createElement("li", {
            key: "item-" + t,
            onClick: () => this.handleIndicatorClick(t),
            className: a,
            role: "tab",
            "aria-label": n
          }, s["cq:panelTitle"]);
        }));
      }

      renderCarouselActions() {
        return i.a.createElement("div", {
          className: this.props.baseCssClass + "__actions"
        }, i.a.createElement("button", {
          onClick: () => this.handleOnButtonPrev(),
          className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--previous`,
          type: "button",
          "aria-label": this.props.accessibility.previous
        }, i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-icon"
        }), i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-text"
        }, this.props.accessibility.previous)), i.a.createElement("button", {
          onClick: () => this.handleOnButtonNext(),
          className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--next`,
          type: "button",
          "aria-label": this.props.accessibility.next
        }, i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-icon"
        }), i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-text"
        }, this.props.accessibility.next)), this.props.autoplay && i.a.createElement(i.a.Fragment, null, i.a.createElement("button", {
          className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--pause ` + (this.state.autoPlay ? "" : this.props.baseCssClass + "__action--disabled"),
          type: "button",
          "aria-label": this.props.accessibility.pause,
          onClick: () => this.toggleAutoPlay(!1)
        }, i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-icon"
        }), i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-text"
        }, this.props.accessibility.pause)), i.a.createElement("button", {
          className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--play ` + (this.state.autoPlay ? this.props.baseCssClass + "__action--disabled" : ""),
          type: "button",
          "aria-label": this.props.accessibility.play,
          onClick: () => this.toggleAutoPlay(!0)
        }, i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-icon"
        }), i.a.createElement("span", {
          className: this.props.baseCssClass + "__action-text"
        }, this.props.accessibility.play))));
      }

    }

    c.defaultProps = {
      _allowedComponentPlaceholderListEmptyLabel: "CarouselV1",
      isInEditor: !1,
      autoplay: !1,
      cqPath: "",
      cqItems: {},
      cqItemsOrder: [],
      accessibilityLabel: "Carousel",
      accessibility: {
        play: "Play",
        pause: "Pause",
        next: "Next",
        previous: "Previous",
        slide: "Slide {0} of {1}",
        indicator: "Slide %{0}",
        indicators: "Choose a slide to display"
      }
    }, t.default = Object(n.b)(Object(n.a)(c), "cmp-carousel");
  },,,,,,, function (e, t, s) {
    e.exports = s(8);
  }]);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMtZXhhbXBsZXMvcmVhY3Qtc3BhY29tcG9uZW50cy1leGFtcGxlLXByb2plY3Qvbm9kZV9tb2R1bGVzL0BhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYS9kaXN0L2NvbnRhaW5lci9jYXJvdXNlbC92MS9DYXJvdXNlbFYxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsRUFBRSxLQUF1RCwwQkFBMEIsU0FBZ007QUFDblIsQ0FBQztBQUNEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILGdCQUFnQixtQkFBTyxDQUFDLDRDQUFPO0FBQy9CLEdBQUc7QUFDSCxnQkFBZ0IsbUJBQU8sQ0FBQyx1SUFBc0M7QUFDOUQsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQsS0FBSztBQUNMO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjO0FBQ25DLG9CQUFvQixVQUFVO0FBQzlCO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0JBQXdCLFNBQVMsd0JBQXdCO0FBQ2xGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHNEQUFzRCx3QkFBd0IsY0FBYyx3QkFBd0I7QUFDcEg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLHdCQUF3Qix3QkFBd0IsV0FBVyx3QkFBd0I7QUFDbkY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLHdCQUF3Qix3QkFBd0IsV0FBVyx3QkFBd0I7QUFDbkY7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCx3QkFBd0Isd0JBQXdCLFdBQVcsd0JBQXdCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVCx3QkFBd0Isd0JBQXdCLFdBQVcsd0JBQXdCO0FBQ25GO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLEVBQUUsS0FBSyxFQUFFO0FBQ2hDLDRCQUE0QixFQUFFO0FBQzlCO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNILENBQUMsRSIsImZpbGUiOiJqcy9DYXJvdXNlbFYxLmVhNDRiOTMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uIChlLCB0KSB7XG4gIFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgbW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgPSB0KCkgOiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFtdLCB0KSA6IFwib2JqZWN0XCIgPT0gdHlwZW9mIGV4cG9ydHMgPyBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gdCgpIDogZVtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IHQoKTtcbn0oXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygc2VsZiA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZSkge1xuICAgIHZhciB0ID0ge307XG5cbiAgICBmdW5jdGlvbiBzKGEpIHtcbiAgICAgIGlmICh0W2FdKSByZXR1cm4gdFthXS5leHBvcnRzO1xuICAgICAgdmFyIGkgPSB0W2FdID0ge1xuICAgICAgICBpOiBhLFxuICAgICAgICBsOiAhMSxcbiAgICAgICAgZXhwb3J0czoge31cbiAgICAgIH07XG4gICAgICByZXR1cm4gZVthXS5jYWxsKGkuZXhwb3J0cywgaSwgaS5leHBvcnRzLCBzKSwgaS5sID0gITAsIGkuZXhwb3J0cztcbiAgICB9XG5cbiAgICByZXR1cm4gcy5tID0gZSwgcy5jID0gdCwgcy5kID0gZnVuY3Rpb24gKGUsIHQsIGEpIHtcbiAgICAgIHMubyhlLCB0KSB8fCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgdCwge1xuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgICAgZ2V0OiBhXG4gICAgICB9KTtcbiAgICB9LCBzLnIgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgU3ltYm9sICYmIFN5bWJvbC50b1N0cmluZ1RhZyAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgU3ltYm9sLnRvU3RyaW5nVGFnLCB7XG4gICAgICAgIHZhbHVlOiBcIk1vZHVsZVwiXG4gICAgICB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgICAgIHZhbHVlOiAhMFxuICAgICAgfSk7XG4gICAgfSwgcy50ID0gZnVuY3Rpb24gKGUsIHQpIHtcbiAgICAgIGlmICgxICYgdCAmJiAoZSA9IHMoZSkpLCA4ICYgdCkgcmV0dXJuIGU7XG4gICAgICBpZiAoNCAmIHQgJiYgXCJvYmplY3RcIiA9PSB0eXBlb2YgZSAmJiBlICYmIGUuX19lc01vZHVsZSkgcmV0dXJuIGU7XG4gICAgICB2YXIgYSA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICBpZiAocy5yKGEpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoYSwgXCJkZWZhdWx0XCIsIHtcbiAgICAgICAgZW51bWVyYWJsZTogITAsXG4gICAgICAgIHZhbHVlOiBlXG4gICAgICB9KSwgMiAmIHQgJiYgXCJzdHJpbmdcIiAhPSB0eXBlb2YgZSkgZm9yICh2YXIgaSBpbiBlKSBzLmQoYSwgaSwgZnVuY3Rpb24gKHQpIHtcbiAgICAgICAgcmV0dXJuIGVbdF07XG4gICAgICB9LmJpbmQobnVsbCwgaSkpO1xuICAgICAgcmV0dXJuIGE7XG4gICAgfSwgcy5uID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHZhciB0ID0gZSAmJiBlLl9fZXNNb2R1bGUgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBlLmRlZmF1bHQ7XG4gICAgICB9IDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICAgIH07XG4gICAgICByZXR1cm4gcy5kKHQsIFwiYVwiLCB0KSwgdDtcbiAgICB9LCBzLm8gPSBmdW5jdGlvbiAoZSwgdCkge1xuICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLCB0KTtcbiAgICB9LCBzLnAgPSBcIlwiLCBzKHMucyA9IDE1KTtcbiAgfShbZnVuY3Rpb24gKGUsIHQpIHtcbiAgICBlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gIH0sIGZ1bmN0aW9uIChlLCB0KSB7XG4gICAgZS5leHBvcnRzID0gcmVxdWlyZShcIkBhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50c1wiKTtcbiAgfSwgZnVuY3Rpb24gKGUsIHQsIHMpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHMuZCh0LCBcImJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG47XG4gICAgfSksIHMuZCh0LCBcImFcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIG87XG4gICAgfSk7XG4gICAgdmFyIGEgPSBzKDApO1xuXG4gICAgY29uc3QgaSA9ICgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2Ygd2luZG93O1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gITE7XG4gICAgICB9XG4gICAgfSkoKSxcbiAgICAgICAgICBuID0gKGUsIHQpID0+IHMgPT4ge1xuICAgICAgY29uc3QgaSA9IHMuYmFzZUNzc0NsYXNzLFxuICAgICAgICAgICAgbiA9IGkgJiYgaS50cmltKCkubGVuZ3RoID4gMCA/IGkgOiB0LFxuICAgICAgICAgICAgbyA9IHsgLi4ucyxcbiAgICAgICAgYmFzZUNzc0NsYXNzOiBuXG4gICAgICB9O1xuICAgICAgcmV0dXJuIGEuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCBvKSk7XG4gICAgfSxcbiAgICAgICAgICBvID0gZSA9PiBjbGFzcyBleHRlbmRzIGEuQ29tcG9uZW50IHtcbiAgICAgIGNvbnN0cnVjdG9yKGUpIHtcbiAgICAgICAgc3VwZXIoZSksIHRoaXMuc3RhdGUgPSB7fSwgaSAmJiB3aW5kb3cuR3Jhbml0ZSAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsICYmICh0aGlzLm1lc3NhZ2VDaGFubmVsID0gbmV3IHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbChcImNxYXV0aG9yXCIsIHdpbmRvdyksIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcykpO1xuICAgICAgfVxuXG4gICAgICBjYWxsYmFjayhlKSB7XG4gICAgICAgIGlmIChlLmRhdGEgJiYgZS5kYXRhLmlkID09PSB0aGlzLnByb3BzLmNxUGF0aCAmJiBcIm5hdmlnYXRlXCIgPT09IGUuZGF0YS5vcGVyYXRpb24pIHtcbiAgICAgICAgICBjb25zdCB0ID0gZS5kYXRhLmluZGV4O1xuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IHRcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCAmJiB0aGlzLm1lc3NhZ2VDaGFubmVsLnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgfVxuXG4gICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCAmJiB0aGlzLm1lc3NhZ2VDaGFubmVsLnVuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgcmV0dXJuIGEuY3JlYXRlRWxlbWVudChlLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWxcbiAgICAgICAgfSkpO1xuICAgICAgfVxuXG4gICAgfTtcbiAgfSwsIGZ1bmN0aW9uIChlLCB0LCBzKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBmdW5jdGlvbiBhKGUpIHtcbiAgICAgIHJldHVybiBudWxsID09IGUuY3FJdGVtc09yZGVyIHx8IDAgPT09IGUuY3FJdGVtc09yZGVyLmxlbmd0aDtcbiAgICB9XG5cbiAgICBzLmQodCwgXCJhXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH0pO1xuICB9LCwsLCBmdW5jdGlvbiAoZSwgdCwgcykge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgcy5yKHQpO1xuICAgIHZhciBhID0gcygwKSxcbiAgICAgICAgaSA9IHMubihhKSxcbiAgICAgICAgbiA9IHMoMiksXG4gICAgICAgIG8gPSBzKDEpLFxuICAgICAgICByID0gcyg0KTtcblxuICAgIGNvbnN0IGwgPSAoZSwgdCkgPT4ge1xuICAgICAgbGV0IHMgPSBlO1xuXG4gICAgICBmb3IgKGxldCBlID0gMDsgZSA8IHQubGVuZ3RoOyBlKyspIHtcbiAgICAgICAgY29uc3QgYSA9IFwie1wiICsgZSArIFwifVwiO1xuICAgICAgICBzID0gcy5yZXBsYWNlKGEsIHRbZV0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcztcbiAgICB9O1xuXG4gICAgY2xhc3MgYyBleHRlbmRzIG8uQ29udGFpbmVyIHtcbiAgICAgIGNvbnN0cnVjdG9yKGUpIHtcbiAgICAgICAgc3VwZXIoZSksIHRoaXMuaW50ZXJ2YWwgPSAwLCB0aGlzLmNsZWFyQXV0b1BsYXkgPSAoKSA9PiB7XG4gICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgIH0sIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXG4gICAgICAgICAgaXNNb3VzZUVudGVyZWQ6ICExLFxuICAgICAgICAgIGF1dG9QbGF5OiB0aGlzLnByb3BzLmF1dG9wbGF5ICYmICF0aGlzLnByb3BzLmlzSW5FZGl0b3IsXG4gICAgICAgICAgY29tcG9uZW50TWFwcGluZzogdGhpcy5wcm9wcy5jb21wb25lbnRNYXBwaW5nIHx8IG8uQ29tcG9uZW50TWFwcGluZ1xuICAgICAgICB9LCB0aGlzLmhhbmRsZUluZGljYXRvckNsaWNrID0gdGhpcy5oYW5kbGVJbmRpY2F0b3JDbGljay5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZU9uQnV0dG9uUHJldiA9IHRoaXMuaGFuZGxlT25CdXR0b25QcmV2LmJpbmQodGhpcyksIHRoaXMuaGFuZGxlT25CdXR0b25OZXh0ID0gdGhpcy5oYW5kbGVPbkJ1dHRvbk5leHQuYmluZCh0aGlzKSwgdGhpcy5oYW5kbGVPbk1vdXNlRW50ZXIgPSB0aGlzLmhhbmRsZU9uTW91c2VFbnRlci5iaW5kKHRoaXMpLCB0aGlzLmhhbmRsZU9uTW91c2VMZWF2ZSA9IHRoaXMuaGFuZGxlT25Nb3VzZUxlYXZlLmJpbmQodGhpcyk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZFVwZGF0ZShlLCB0LCBzKSB7XG4gICAgICAgIHZvaWQgMCAhPT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAmJiBlLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsICE9IHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgJiYgKHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsXG4gICAgICAgIH0pLCB0aGlzLnRvZ2dsZUF1dG9QbGF5KCExKSk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLmF1dG9QbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICB0aGlzLmludGVydmFsICYmIHRoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVPbk1vdXNlRW50ZXIoKSB7XG4gICAgICAgICF0aGlzLnByb3BzLmF1dG9wYXVzZURpc2FibGVkICYmIHRoaXMucHJvcHMuYXV0b3BsYXkgJiYgdGhpcy5jbGVhckF1dG9QbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZU9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgIXRoaXMucHJvcHMuYXV0b3BhdXNlRGlzYWJsZWQgJiYgdGhpcy5wcm9wcy5hdXRvcGxheSAmJiB0aGlzLmF1dG9QbGF5KCk7XG4gICAgICB9XG5cbiAgICAgIGhhbmRsZU9uQnV0dG9uUHJldigpIHtcbiAgICAgICAgdGhpcy5wcmV2U2xpZGUoKTtcbiAgICAgIH1cblxuICAgICAgaGFuZGxlT25CdXR0b25OZXh0KCkge1xuICAgICAgICB0aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfVxuXG4gICAgICBoYW5kbGVJbmRpY2F0b3JDbGljayhlKSB7XG4gICAgICAgIHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggIT09IGUgJiYgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGF1dG9QbGF5KCkge1xuICAgICAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmF1dG9QbGF5VGljaygpO1xuICAgICAgICB9LCB0aGlzLnByb3BzLmRlbGF5KTtcbiAgICAgIH1cblxuICAgICAgYXV0b1BsYXlUaWNrKCkge1xuICAgICAgICAhdGhpcy5zdGF0ZS5hdXRvUGxheSB8fCB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPD0gMSB8fCB0aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfVxuXG4gICAgICB0b2dnbGVBdXRvUGxheShlKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGF1dG9QbGF5OiBlXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBuZXh0U2xpZGUoKSB7XG4gICAgICAgIGNvbnN0IGUgPSB0aGlzLl9fZ2V0QWN0aXZlSW5kZXgoKTtcblxuICAgICAgICBlID09PSB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggLSAxID8gdGhpcy5fX3NldFNsaWRlKDApIDogdGhpcy5fX3NldFNsaWRlKGUgKyAxKTtcbiAgICAgIH1cblxuICAgICAgcHJldlNsaWRlKCkge1xuICAgICAgICBjb25zdCBlID0gdGhpcy5fX2dldEFjdGl2ZUluZGV4KCk7XG5cbiAgICAgICAgMCA9PT0gZSA/IHRoaXMuX19zZXRTbGlkZSh0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggLSAxKSA6IHRoaXMuX19zZXRTbGlkZShlIC0gMSk7XG4gICAgICB9XG5cbiAgICAgIF9fZ2V0QWN0aXZlSW5kZXgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4O1xuICAgICAgfVxuXG4gICAgICBfX3NldFNsaWRlKGUpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgYWN0aXZlSW5kZXg6IGVcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgY29uc3QgZSA9IE9iamVjdChyLmEpKHRoaXMucHJvcHMpO1xuICAgICAgICByZXR1cm4gaS5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgcm9sZTogXCJncm91cFwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHlMYWJlbCxcbiAgICAgICAgICBcImFyaWEtcm9sZWRlc2NyaXB0aW9uXCI6IFwiY2Fyb3VzZWxcIlxuICAgICAgICB9LCAhZSAmJiB0aGlzLnJlbmRlckNhcm91c2VsKCksIHRoaXMucGxhY2Vob2xkZXJDb21wb25lbnQpO1xuICAgICAgfVxuXG4gICAgICBkaXNwbGF5SXRlbShlLCB0KSB7XG4gICAgICAgIGNvbnN0IHMgPSB0ID09PSB0aGlzLnN0YXRlLmFjdGl2ZUluZGV4LFxuICAgICAgICAgICAgICBhID0gISghcyAmJiAhdGhpcy5wcm9wcy5pc0luRWRpdG9yKSxcbiAgICAgICAgICAgICAgbiA9IHMgPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2l0ZW0gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2l0ZW0tLWFjdGl2ZWAgOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArIFwiX19pdGVtXCIsXG4gICAgICAgICAgICAgIG8gPSBsKHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5zbGlkZSwgWyh0ICsgMSkudG9TdHJpbmcoKSwgdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoLnRvU3RyaW5nKCldKTtcbiAgICAgICAgcmV0dXJuIGkuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICBrZXk6IFwiaXRlbS1cIiArIHQsXG4gICAgICAgICAgY2xhc3NOYW1lOiBuLFxuICAgICAgICAgIHJvbGU6IFwidGFicGFuZWxcIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogbyxcbiAgICAgICAgICBcImRhdGEtY21wLWhvb2stY2Fyb3VzZWxcIjogXCJpdGVtXCJcbiAgICAgICAgfSwgYSAmJiBlKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyQ2Fyb3VzZWwoKSB7XG4gICAgICAgIHJldHVybiBpLmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArIFwiX19jb250ZW50XCIsXG4gICAgICAgICAgb25Nb3VzZUVudGVyOiAoKSA9PiB0aGlzLmhhbmRsZU9uTW91c2VFbnRlcigpLFxuICAgICAgICAgIG9uTW91c2VMZWF2ZTogKCkgPT4gdGhpcy5oYW5kbGVPbk1vdXNlTGVhdmUoKVxuICAgICAgICB9LCB0aGlzLmNoaWxkQ29tcG9uZW50cy5tYXAoKGUsIHQpID0+IHRoaXMuZGlzcGxheUl0ZW0oZSwgdCkpLCB0aGlzLnJlbmRlckNhcm91c2VsQWN0aW9ucygpLCB0aGlzLnJlbmRlckNhcm91c2VsSW5kaWNhdG9ycygpKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyQ2Fyb3VzZWxJbmRpY2F0b3JzKCkge1xuICAgICAgICByZXR1cm4gaS5hLmNyZWF0ZUVsZW1lbnQoXCJvbFwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArIFwiX19pbmRpY2F0b3JzXCIsXG4gICAgICAgICAgcm9sZTogXCJ0YWJsaXN0XCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5pbmRpY2F0b3JzXG4gICAgICAgIH0sIHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLm1hcCgoZSwgdCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHMgPSB0aGlzLnByb3BzLmNxSXRlbXNbZV0sXG4gICAgICAgICAgICAgICAgYSA9IHQgPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2luZGljYXRvciAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9faW5kaWNhdG9yLS1hY3RpdmVgIDogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9faW5kaWNhdG9yXCIsXG4gICAgICAgICAgICAgICAgbiA9IGwodGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LmluZGljYXRvciwgWyh0ICsgMSkudG9TdHJpbmcoKV0pO1xuICAgICAgICAgIHJldHVybiBpLmEuY3JlYXRlRWxlbWVudChcImxpXCIsIHtcbiAgICAgICAgICAgIGtleTogXCJpdGVtLVwiICsgdCxcbiAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuaGFuZGxlSW5kaWNhdG9yQ2xpY2sodCksXG4gICAgICAgICAgICBjbGFzc05hbWU6IGEsXG4gICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IG5cbiAgICAgICAgICB9LCBzW1wiY3E6cGFuZWxUaXRsZVwiXSk7XG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgICAgcmVuZGVyQ2Fyb3VzZWxBY3Rpb25zKCkge1xuICAgICAgICByZXR1cm4gaS5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9fYWN0aW9uc1wiXG4gICAgICAgIH0sIGkuYS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmhhbmRsZU9uQnV0dG9uUHJldigpLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tcHJldmlvdXNgLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wcmV2aW91c1xuICAgICAgICB9LCBpLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9fYWN0aW9uLWljb25cIlxuICAgICAgICB9KSwgaS5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2FjdGlvbi10ZXh0XCJcbiAgICAgICAgfSwgdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LnByZXZpb3VzKSksIGkuYS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICBvbkNsaWNrOiAoKSA9PiB0aGlzLmhhbmRsZU9uQnV0dG9uTmV4dCgpLFxuICAgICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tbmV4dGAsXG4gICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5Lm5leHRcbiAgICAgICAgfSwgaS5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2FjdGlvbi1pY29uXCJcbiAgICAgICAgfSksIGkuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArIFwiX19hY3Rpb24tdGV4dFwiXG4gICAgICAgIH0sIHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5uZXh0KSksIHRoaXMucHJvcHMuYXV0b3BsYXkgJiYgaS5hLmNyZWF0ZUVsZW1lbnQoaS5hLkZyYWdtZW50LCBudWxsLCBpLmEuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1wYXVzZSBgICsgKHRoaXMuc3RhdGUuYXV0b1BsYXkgPyBcIlwiIDogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9fYWN0aW9uLS1kaXNhYmxlZFwiKSxcbiAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGF1c2UsXG4gICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy50b2dnbGVBdXRvUGxheSghMSlcbiAgICAgICAgfSwgaS5hLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2FjdGlvbi1pY29uXCJcbiAgICAgICAgfSksIGkuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArIFwiX19hY3Rpb24tdGV4dFwiXG4gICAgICAgIH0sIHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wYXVzZSkpLCBpLmEuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1wbGF5IGAgKyAodGhpcy5zdGF0ZS5hdXRvUGxheSA/IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgXCJfX2FjdGlvbi0tZGlzYWJsZWRcIiA6IFwiXCIpLFxuICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wbGF5LFxuICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMudG9nZ2xlQXV0b1BsYXkoITApXG4gICAgICAgIH0sIGkuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArIFwiX19hY3Rpb24taWNvblwiXG4gICAgICAgIH0pLCBpLmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyBcIl9fYWN0aW9uLXRleHRcIlxuICAgICAgICB9LCB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGxheSkpKSk7XG4gICAgICB9XG5cbiAgICB9XG5cbiAgICBjLmRlZmF1bHRQcm9wcyA9IHtcbiAgICAgIF9hbGxvd2VkQ29tcG9uZW50UGxhY2Vob2xkZXJMaXN0RW1wdHlMYWJlbDogXCJDYXJvdXNlbFYxXCIsXG4gICAgICBpc0luRWRpdG9yOiAhMSxcbiAgICAgIGF1dG9wbGF5OiAhMSxcbiAgICAgIGNxUGF0aDogXCJcIixcbiAgICAgIGNxSXRlbXM6IHt9LFxuICAgICAgY3FJdGVtc09yZGVyOiBbXSxcbiAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbDogXCJDYXJvdXNlbFwiLFxuICAgICAgYWNjZXNzaWJpbGl0eToge1xuICAgICAgICBwbGF5OiBcIlBsYXlcIixcbiAgICAgICAgcGF1c2U6IFwiUGF1c2VcIixcbiAgICAgICAgbmV4dDogXCJOZXh0XCIsXG4gICAgICAgIHByZXZpb3VzOiBcIlByZXZpb3VzXCIsXG4gICAgICAgIHNsaWRlOiBcIlNsaWRlIHswfSBvZiB7MX1cIixcbiAgICAgICAgaW5kaWNhdG9yOiBcIlNsaWRlICV7MH1cIixcbiAgICAgICAgaW5kaWNhdG9yczogXCJDaG9vc2UgYSBzbGlkZSB0byBkaXNwbGF5XCJcbiAgICAgIH1cbiAgICB9LCB0LmRlZmF1bHQgPSBPYmplY3Qobi5iKShPYmplY3Qobi5hKShjKSwgXCJjbXAtY2Fyb3VzZWxcIik7XG4gIH0sLCwsLCwsIGZ1bmN0aW9uIChlLCB0LCBzKSB7XG4gICAgZS5leHBvcnRzID0gcyg4KTtcbiAgfV0pO1xufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["CarouselV1"],{

/***/ "../../react-spa-components/dist/container/carousel/v1/CarouselV1.js":
/*!*****************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/carousel/v1/CarouselV1.js ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(typeof self !== 'undefined' ? self : this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/

      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/

        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId]) {
          /******/
          return installedModules[moduleId].exports;
          /******/
        }
        /******/
        // Create a new module (and put it into the cache)

        /******/


        var module = installedModules[moduleId] = {
          /******/
          i: moduleId,

          /******/
          l: false,

          /******/
          exports: {}
          /******/

        };
        /******/

        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/

        /******/
        // Flag the module as loaded

        /******/

        module.l = true;
        /******/

        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/

      /******/

      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/

      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/

      /******/
      // define getter function for harmony exports

      /******/

      __webpack_require__.d = function (exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
          /******/
          Object.defineProperty(exports, name, {
            enumerable: true,
            get: getter
          });
          /******/
        }
        /******/

      };
      /******/

      /******/
      // define __esModule on exports

      /******/


      __webpack_require__.r = function (exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/
          Object.defineProperty(exports, Symbol.toStringTag, {
            value: 'Module'
          });
          /******/
        }
        /******/


        Object.defineProperty(exports, '__esModule', {
          value: true
        });
        /******/
      };
      /******/

      /******/
      // create a fake namespace object

      /******/
      // mode & 1: value is a module id, require it

      /******/
      // mode & 2: merge all properties of value into the ns

      /******/
      // mode & 4: return value when already ns object

      /******/
      // mode & 8|1: behave like require

      /******/


      __webpack_require__.t = function (value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/

        if (mode & 8) return value;
        /******/

        if (mode & 4 && typeof value === 'object' && value && value.__esModule) return value;
        /******/

        var ns = Object.create(null);
        /******/

        __webpack_require__.r(ns);
        /******/


        Object.defineProperty(ns, 'default', {
          enumerable: true,
          value: value
        });
        /******/

        if (mode & 2 && typeof value != 'string') for (var key in value) __webpack_require__.d(ns, key, function (key) {
          return value[key];
        }.bind(null, key));
        /******/

        return ns;
        /******/
      };
      /******/

      /******/
      // getDefaultExport function for compatibility with non-harmony modules

      /******/


      __webpack_require__.n = function (module) {
        /******/
        var getter = module && module.__esModule ?
        /******/
        function getDefault() {
          return module['default'];
        } :
        /******/
        function getModuleExports() {
          return module;
        };
        /******/

        __webpack_require__.d(getter, 'a', getter);
        /******/


        return getter;
        /******/
      };
      /******/

      /******/
      // Object.prototype.hasOwnProperty.call

      /******/


      __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      /******/

      /******/
      // __webpack_public_path__

      /******/


      __webpack_require__.p = "";
      /******/

      /******/

      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(__webpack_require__.s = 3);
      /******/
    }(
    /************************************************************************/

    /******/
    {
      /***/
      "./src/AbstractCoreContainerComponent.tsx":
      /*!************************************************!*\
        !*** ./src/AbstractCoreContainerComponent.tsx ***!
        \************************************************/

      /*! exports provided: withStandardBaseCssClass, withAuthorPanelSwitch */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "withStandardBaseCssClass", function () {
          return withStandardBaseCssClass;
        });
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "withAuthorPanelSwitch", function () {
          return withAuthorPanelSwitch;
        });
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /*
         *  Copyright 2020 Adobe
         *
         *  Licensed under the Apache License, Version 2.0 (the "License");
         *  you may not use this file except in compliance with the License.
         *  You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         *  Unless required by applicable law or agreed to in writing, software
         *  distributed under the License is distributed on an "AS IS" BASIS,
         *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         *  See the License for the specific language governing permissions and
         *  limitations under the License.
         */


        const isBrowser = (() => {
          try {
            return typeof window !== 'undefined';
          } catch (err) {
            return false;
          }
        })();

        const withStandardBaseCssClass = (Component, defaultBaseCssClass) => {
          return props => {
            const baseCssClass = props.baseCssClass;
            const toBeUsedCssClass = baseCssClass && baseCssClass.trim().length > 0 ? baseCssClass : defaultBaseCssClass;
            const mergedProps = { ...props,
              baseCssClass: toBeUsedCssClass
            };
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, mergedProps));
          };
        };

        const withAuthorPanelSwitch = Component => {
          return class extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
            constructor(props) {
              super(props);
              this.state = {}; //@ts-ignore

              if (isBrowser && window.Granite && window.Granite.author && window.Granite.author.MessageChannel) {
                //@ts-ignore
                this.messageChannel = new window.Granite.author.MessageChannel("cqauthor", window);
                this.callback = this.callback.bind(this);
              }
            }

            callback(message) {
              if (message.data && message.data.id === this.props.cqPath) {
                if (message.data.operation === "navigate") {
                  const index = message.data.index;
                  this.setState({
                    activeIndexFromAuthorPanel: index
                  });
                }
              }
            }

            componentDidMount() {
              if (this.messageChannel) {
                this.messageChannel.subscribeRequestMessage("cmp.panelcontainer", this.callback);
              }
            }

            componentWillUnmount() {
              if (this.messageChannel) {
                this.messageChannel.unsubscribeRequestMessage("cmp.panelcontainer", this.callback);
              }
            }

            render() {
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](Component, Object.assign({}, this.props, {
                activeIndexFromAuthorPanel: this.state.activeIndexFromAuthorPanel
              }));
            }

          };
        };
        /***/

      },

      /***/
      "./src/container/carousel/v1/CarouselV1.tsx":
      /*!**************************************************!*\
        !*** ./src/container/carousel/v1/CarouselV1.tsx ***!
        \**************************************************/

      /*! exports provided: default */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
        /*! react */
        "react");
        /* harmony import */


        var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
        /* harmony import */


        var _AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! ../../../AbstractCoreContainerComponent */
        "./src/AbstractCoreContainerComponent.tsx");
        /* harmony import */


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! @adobe/aem-react-editable-components */
        "@adobe/aem-react-editable-components");
        /* harmony import */


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__);
        /* harmony import */


        var _CarouselV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./CarouselV1IsEmptyFn */
        "./src/container/carousel/v1/CarouselV1IsEmptyFn.ts");
        /*
         *  Copyright 2020 Adobe
         *
         *  Licensed under the Apache License, Version 2.0 (the "License");
         *  you may not use this file except in compliance with the License.
         *  You may obtain a copy of the License at
         *
         *      http://www.apache.org/licenses/LICENSE-2.0
         *
         *  Unless required by applicable law or agreed to in writing, software
         *  distributed under the License is distributed on an "AS IS" BASIS,
         *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
         *  See the License for the specific language governing permissions and
         *  limitations under the License.
         */


        const formatFn = (value, args) => {
          let content = value;

          for (let i = 0; i < args.length; i++) {
            const replacement = '{' + i + '}';
            content = content.replace(replacement, args[i]);
          }

          return content;
        };

        class CarouselV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["Container"] {
          constructor(props) {
            super(props);
            this.interval = 0;

            this.clearAutoPlay = () => {
              window.clearInterval(this.interval);
            }; //@ts-ignore


            this.state = {
              activeIndex: 0,
              isMouseEntered: false,
              autoPlay: this.props.autoplay && !this.props.isInEditor,
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["ComponentMapping"]
            };
            this.handleIndicatorClick = this.handleIndicatorClick.bind(this);
            this.handleOnButtonPrev = this.handleOnButtonPrev.bind(this);
            this.handleOnButtonNext = this.handleOnButtonNext.bind(this);
            this.handleOnMouseEnter = this.handleOnMouseEnter.bind(this);
            this.handleOnMouseLeave = this.handleOnMouseLeave.bind(this);
          }

          componentDidUpdate(prevProps, prevState, snapshot) {
            if (this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel) {
              this.setState({
                activeIndex: this.props.activeIndexFromAuthorPanel
              });
              this.toggleAutoPlay(false);
            }
          }

          componentDidMount() {
            this.autoPlay();
          }

          componentWillUnmount() {
            if (this.interval) {
              this.clearAutoPlay();
            }
          }

          handleOnMouseEnter() {
            if (!this.props.autopauseDisabled && this.props.autoplay) {
              this.clearAutoPlay();
            }
          }

          handleOnMouseLeave() {
            if (!this.props.autopauseDisabled && this.props.autoplay) {
              this.autoPlay();
            }
          }

          handleOnButtonPrev() {
            this.prevSlide();
          }

          handleOnButtonNext() {
            this.nextSlide();
          }

          handleIndicatorClick(index) {
            if (this.state.activeIndex !== index) {
              this.setState({
                activeIndex: index
              });
            }
          }

          autoPlay() {
            this.interval = window.setInterval(() => {
              this.autoPlayTick();
            }, this.props.delay);
          }

          autoPlayTick() {
            if (!this.state.autoPlay || this.props.cqItemsOrder.length <= 1) {
              return;
            }

            this.nextSlide();
          }

          toggleAutoPlay(toggle) {
            this.setState({
              autoPlay: toggle
            });
          }

          nextSlide() {
            const activeIndex = this.__getActiveIndex();

            if (activeIndex === this.props.cqItemsOrder.length - 1) {
              this.__setSlide(0);
            } else {
              this.__setSlide(activeIndex + 1);
            }
          }

          prevSlide() {
            const activeIndex = this.__getActiveIndex();

            if (activeIndex === 0) {
              this.__setSlide(this.props.cqItemsOrder.length - 1);
            } else {
              this.__setSlide(activeIndex - 1);
            }
          }

          __getActiveIndex() {
            return this.state.activeIndex;
          }

          __setSlide(index) {
            this.setState({
              activeIndex: index
            });
          }

          render() {
            const isEmpty = Object(_CarouselV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["CarouselV1IsEmptyFn"])(this.props);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: this.props.baseCssClass,
              role: "group",
              "data-panelcontainer": "carousel",
              "aria-label": this.props.accessibilityLabel,
              "aria-roledescription": "carousel"
            }, !isEmpty && this.renderCarousel(), this.placeholderComponent);
          }

          displayItem(item, index) {
            const isActive = index === this.state.activeIndex; //we display the item if active is true, or if we are in the author mode. we need to always display the item for the author mode to work properly.

            const display = !!(isActive || this.props.isInEditor);
            const cssClass = isActive ? `${this.props.baseCssClass}__item ${this.props.baseCssClass}__item--active` : `${this.props.baseCssClass}__item`;
            const ariaLabel = formatFn(this.props.accessibility.slide, [(index + 1).toString(), this.props.cqItemsOrder.length.toString()]);
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: 'item-' + index,
              className: cssClass,
              role: "tabpanel",
              "aria-label": ariaLabel,
              "data-cmp-hook-carousel": "item"
            }, display && item);
          }

          renderCarousel() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: this.props.baseCssClass + '__content',
              onMouseEnter: () => this.handleOnMouseEnter(),
              onMouseLeave: () => this.handleOnMouseLeave()
            }, this.childComponents.map((childComponent, index) => this.displayItem(childComponent, index)), this.renderCarouselActions(), this.renderCarouselIndicators());
          }

          renderCarouselIndicators() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
              className: this.props.baseCssClass + '__indicators',
              role: "tablist",
              "aria-label": this.props.accessibility.indicators
            }, this.props.cqItemsOrder.map((key, index) => {
              const item = this.props.cqItems[key];
              const cssClass = index === this.state.activeIndex ? `${this.props.baseCssClass}__indicator ${this.props.baseCssClass}__indicator--active` : `${this.props.baseCssClass}__indicator`;
              const ariaLabelItem = formatFn(this.props.accessibility.indicator, [(index + 1).toString()]);
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
                key: 'item-' + index,
                onClick: () => this.handleIndicatorClick(index),
                className: cssClass,
                role: "tab",
                "aria-label": ariaLabelItem
              }, item["cq:panelTitle"]);
            }));
          }

          renderCarouselActions() {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              className: this.props.baseCssClass + '__actions'
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: () => this.handleOnButtonPrev(),
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--previous`,
              type: "button",
              "aria-label": this.props.accessibility.previous
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.previous)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              onClick: () => this.handleOnButtonNext(),
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--next`,
              type: "button",
              "aria-label": this.props.accessibility.next
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.next)), this.props.autoplay && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--pause ` + (!this.state.autoPlay ? this.props.baseCssClass + '__action--disabled' : ''),
              type: "button",
              "aria-label": this.props.accessibility.pause,
              onClick: () => this.toggleAutoPlay(false)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.pause)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
              className: `${this.props.baseCssClass}__action ${this.props.baseCssClass}__action--play ` + (this.state.autoPlay ? this.props.baseCssClass + '__action--disabled' : ''),
              type: "button",
              "aria-label": this.props.accessibility.play,
              onClick: () => this.toggleAutoPlay(true)
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-icon'
            }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
              className: this.props.baseCssClass + '__action-text'
            }, this.props.accessibility.play))));
          }

        }

        CarouselV1Impl.defaultProps = {
          _allowedComponentPlaceholderListEmptyLabel: 'CarouselV1',
          isInEditor: false,
          autoplay: false,
          cqPath: '',
          cqItems: {},
          cqItemsOrder: [],
          accessibilityLabel: 'Carousel',
          accessibility: {
            play: 'Play',
            pause: 'Pause',
            next: 'Next',
            previous: 'Previous',
            slide: 'Slide {0} of {1}',
            indicator: 'Slide %{0}',
            indicators: 'Choose a slide to display'
          }
        };
        /* harmony default export */

        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withAuthorPanelSwitch"])(CarouselV1Impl), "cmp-carousel");
        /***/
      },

      /***/
      "./src/container/carousel/v1/CarouselV1IsEmptyFn.ts":
      /*!**********************************************************!*\
        !*** ./src/container/carousel/v1/CarouselV1IsEmptyFn.ts ***!
        \**********************************************************/

      /*! exports provided: CarouselV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "CarouselV1IsEmptyFn", function () {
          return CarouselV1IsEmptyFn;
        });

        function CarouselV1IsEmptyFn(props) {
          return props.cqItemsOrder == null || props.cqItemsOrder.length === 0;
        }
        /***/

      },

      /***/
      3:
      /*!********************************************************!*\
        !*** multi ./src/container/carousel/v1/CarouselV1.tsx ***!
        \********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/carousel/v1/CarouselV1.tsx */
        "./src/container/carousel/v1/CarouselV1.tsx");
        /***/
      },

      /***/
      "@adobe/aem-react-editable-components":
      /*!*******************************************************!*\
        !*** external "@adobe/aem-react-editable-components" ***!
        \*******************************************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __webpack_require__(/*! @adobe/aem-react-editable-components */ "./node_modules/@adobe/aem-react-editable-components/dist/aem-react-editable-components.js");
        /***/
      },

      /***/
      "react":
      /*!************************!*\
        !*** external "react" ***!
        \************************/

      /*! no static exports found */

      /***/
      function (module, exports) {
        module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");
        /***/
      }
      /******/

    })
  );
}); //# sourceMappingURL=CarouselV1.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3Qtc3BhLWNvbXBvbmVudHMvZGlzdC9jb250YWluZXIvY2Fyb3VzZWwvdjEvQ2Fyb3VzZWxWMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLE1BQU0sSUFBeUQsNkJBQTZCLEtBQUssRUFBb087QUFDclUsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQSxrR0FBa0c7QUFDbEc7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qjs7QUFFOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0dBQW9HO0FBQ3BHO0FBQ0EsZUFBZTtBQUNmOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQSx5QkFBeUIsaUJBQWlCO0FBQzFDLGtDQUFrQyxVQUFVO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYzs7O0FBR2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsOERBQThEOztBQUU5RDtBQUNBLDJDQUEyQyx3QkFBd0IsU0FBUyx3QkFBd0IscUJBQXFCLHdCQUF3QjtBQUNqSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxxRUFBcUUsd0JBQXdCLGNBQWMsd0JBQXdCLDBCQUEwQix3QkFBd0I7QUFDckw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2YsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0IsV0FBVyx3QkFBd0I7QUFDdkY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLDRCQUE0Qix3QkFBd0IsV0FBVyx3QkFBd0I7QUFDdkY7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYiw0QkFBNEIsd0JBQXdCLFdBQVcsd0JBQXdCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYiw0QkFBNEIsd0JBQXdCLFdBQVcsd0JBQXdCO0FBQ3ZGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLEVBQUUsS0FBSyxFQUFFO0FBQ3BDLGdDQUFnQyxFQUFFO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHlCQUF5QixtQkFBTyxDQUFDLHVJQUFzQztBQUN2RTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsNENBQU87QUFDeEM7QUFDQTtBQUNBOztBQUVBLEtBQUs7QUFDTDtBQUNBLENBQUMsRUFBRSx1QyIsImZpbGUiOiJqcy9DYXJvdXNlbFYxLmFmNWJjYTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JykgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoW10sIGZhY3RvcnkpO2Vsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IGZhY3RvcnkoKTtlbHNlIHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIC8qKioqKiovXG4gICAgZnVuY3Rpb24gKG1vZHVsZXMpIHtcbiAgICAgIC8vIHdlYnBhY2tCb290c3RyYXBcblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIFRoZSBtb2R1bGUgY2FjaGVcblxuICAgICAgLyoqKioqKi9cbiAgICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cblxuICAgICAgLyoqKioqKi9cblxuICAgICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgfVxuICAgICAgICAvKioqKioqL1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXG4gICAgICAgIC8qKioqKiovXG5cblxuICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBpOiBtb2R1bGVJZCxcblxuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgbDogZmFsc2UsXG5cbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICB9O1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgbW9kdWxlLmwgPSB0cnVlO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uIChleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgaWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBnZXR0ZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuXG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAnTW9kdWxlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgIH1cbiAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24gKHZhbHVlLCBtb2RlKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGlmIChtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAobW9kZSAmIDQgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgdmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuICAgICAgICAvKioqKioqL1xuXG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlW2tleV07XG4gICAgICAgIH0uYmluZChudWxsLCBrZXkpKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICByZXR1cm4gbnM7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9O1xuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHtcbiAgICAgICAgICByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107XG4gICAgICAgIH0gOlxuICAgICAgICAvKioqKioqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkge1xuICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuICAgICAgICAvKioqKioqL1xuXG5cbiAgICAgICAgcmV0dXJuIGdldHRlcjtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXG4gICAgICAvKioqKioqL1xuXG4gICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzKTtcbiAgICAgIC8qKioqKiovXG4gICAgfShcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKioqKi9cbiAgICB7XG4gICAgICAvKioqL1xuICAgICAgXCIuL3NyYy9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnQudHN4XCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogLi9zcmMvQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50LnRzeCAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKiEgZXhwb3J0cyBwcm92aWRlZDogd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzLCB3aXRoQXV0aG9yUGFuZWxTd2l0Y2ggKi9cblxuICAgICAgLyoqKi9cbiAgICAgIGZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgICAvKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi9cblxuXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIndpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcztcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwid2l0aEF1dGhvclBhbmVsU3dpdGNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gd2l0aEF1dGhvclBhbmVsU3dpdGNoO1xuICAgICAgICB9KTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIHJlYWN0ICovXG4gICAgICAgIFwicmVhY3RcIik7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbiAgICAgICAgLypcbiAgICAgICAgICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gICAgICAgICAqXG4gICAgICAgICAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICAgICAgICAgKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgICAgICAgKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICAgICAgICAqXG4gICAgICAgICAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgICAgICAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgICAgICAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICAgICAgICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICAgICAgICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlciA9ICgoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgICAgICAgIHJldHVybiBwcm9wcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHsgLi4ucHJvcHMsXG4gICAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY3JlYXRlRWxlbWVudFwiXShDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB3aXRoQXV0aG9yUGFuZWxTd2l0Y2ggPSBDb21wb25lbnQgPT4ge1xuICAgICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDb21wb25lbnRcIl0ge1xuICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge307IC8vQHRzLWlnbm9yZVxuXG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgd2luZG93LkdyYW5pdGUgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwgPSBuZXcgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKFwiY3FhdXRob3JcIiwgd2luZG93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YSAmJiBtZXNzYWdlLmRhdGEuaWQgPT09IHRoaXMucHJvcHMuY3FQYXRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5vcGVyYXRpb24gPT09IFwibmF2aWdhdGVcIikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtZXNzYWdlLmRhdGEuaW5kZXg7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IGluZGV4XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbC5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnVuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImNyZWF0ZUVsZW1lbnRcIl0oQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWxcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqKi9cblxuICAgICAgfSxcblxuICAgICAgLyoqKi9cbiAgICAgIFwiLi9zcmMvY29udGFpbmVyL2Nhcm91c2VsL3YxL0Nhcm91c2VsVjEudHN4XCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICAgISoqKiAuL3NyYy9jb250YWluZXIvY2Fyb3VzZWwvdjEvQ2Fyb3VzZWxWMS50c3ggKioqIVxuICAgICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKiEgZXhwb3J0cyBwcm92aWRlZDogZGVmYXVsdCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gICAgICAgIC8qISByZWFjdCAqL1xuICAgICAgICBcInJlYWN0XCIpO1xuICAgICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgICAgdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgX0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIC4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudCAqL1xuICAgICAgICBcIi4vc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3hcIik7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgX2Fkb2JlX2FlbV9yZWFjdF9lZGl0YWJsZV9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgICAgICAvKiEgQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzICovXG4gICAgICAgIFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIpO1xuICAgICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgICAgdmFyIF9hZG9iZV9hZW1fcmVhY3RfZWRpdGFibGVfY29tcG9uZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKF9hZG9iZV9hZW1fcmVhY3RfZWRpdGFibGVfY29tcG9uZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciBfQ2Fyb3VzZWxWMUlzRW1wdHlGbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIC4vQ2Fyb3VzZWxWMUlzRW1wdHlGbiAqL1xuICAgICAgICBcIi4vc3JjL2NvbnRhaW5lci9jYXJvdXNlbC92MS9DYXJvdXNlbFYxSXNFbXB0eUZuLnRzXCIpO1xuICAgICAgICAvKlxuICAgICAgICAgKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAgICAgICAgICpcbiAgICAgICAgICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgICAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgICAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgICAgICAgICpcbiAgICAgICAgICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICAgICAgICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICAgICAgICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgICAgICAgKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgICAgICAgKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgY29uc3QgZm9ybWF0Rm4gPSAodmFsdWUsIGFyZ3MpID0+IHtcbiAgICAgICAgICBsZXQgY29udGVudCA9IHZhbHVlO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCByZXBsYWNlbWVudCA9ICd7JyArIGkgKyAnfSc7XG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5yZXBsYWNlKHJlcGxhY2VtZW50LCBhcmdzW2ldKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgICAgfTtcblxuICAgICAgICBjbGFzcyBDYXJvdXNlbFYxSW1wbCBleHRlbmRzIF9hZG9iZV9hZW1fcmVhY3RfZWRpdGFibGVfY29tcG9uZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fW1wiQ29udGFpbmVyXCJdIHtcbiAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbCA9IDA7XG5cbiAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgICAgICAgICB9OyAvL0B0cy1pZ25vcmVcblxuXG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcbiAgICAgICAgICAgICAgaXNNb3VzZUVudGVyZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICBhdXRvUGxheTogdGhpcy5wcm9wcy5hdXRvcGxheSAmJiAhdGhpcy5wcm9wcy5pc0luRWRpdG9yLFxuICAgICAgICAgICAgICBjb21wb25lbnRNYXBwaW5nOiB0aGlzLnByb3BzLmNvbXBvbmVudE1hcHBpbmcgfHwgX2Fkb2JlX2FlbV9yZWFjdF9lZGl0YWJsZV9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJDb21wb25lbnRNYXBwaW5nXCJdXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVJbmRpY2F0b3JDbGljayA9IHRoaXMuaGFuZGxlSW5kaWNhdG9yQ2xpY2suYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlT25CdXR0b25QcmV2ID0gdGhpcy5oYW5kbGVPbkJ1dHRvblByZXYuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlT25CdXR0b25OZXh0ID0gdGhpcy5oYW5kbGVPbkJ1dHRvbk5leHQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlT25Nb3VzZUVudGVyID0gdGhpcy5oYW5kbGVPbk1vdXNlRW50ZXIuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlT25Nb3VzZUxlYXZlID0gdGhpcy5oYW5kbGVPbk1vdXNlTGVhdmUuYmluZCh0aGlzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzLCBwcmV2U3RhdGUsIHNuYXBzaG90KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAhPT0gdW5kZWZpbmVkICYmIHByZXZQcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCAhPSB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiB0aGlzLnByb3BzLmFjdGl2ZUluZGV4RnJvbUF1dGhvclBhbmVsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUF1dG9QbGF5KGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIHRoaXMuYXV0b1BsYXkoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmludGVydmFsKSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZU9uTW91c2VFbnRlcigpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5hdXRvcGF1c2VEaXNhYmxlZCAmJiB0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgIHRoaXMuY2xlYXJBdXRvUGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZU9uTW91c2VMZWF2ZSgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5wcm9wcy5hdXRvcGF1c2VEaXNhYmxlZCAmJiB0aGlzLnByb3BzLmF1dG9wbGF5KSB7XG4gICAgICAgICAgICAgIHRoaXMuYXV0b1BsYXkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoYW5kbGVPbkJ1dHRvblByZXYoKSB7XG4gICAgICAgICAgICB0aGlzLnByZXZTbGlkZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZU9uQnV0dG9uTmV4dCgpIHtcbiAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaGFuZGxlSW5kaWNhdG9yQ2xpY2soaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlLmFjdGl2ZUluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXV0b1BsYXkoKSB7XG4gICAgICAgICAgICB0aGlzLmludGVydmFsID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5hdXRvUGxheVRpY2soKTtcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuZGVsYXkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGF1dG9QbGF5VGljaygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5zdGF0ZS5hdXRvUGxheSB8fCB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubmV4dFNsaWRlKCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdG9nZ2xlQXV0b1BsYXkodG9nZ2xlKSB7XG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgYXV0b1BsYXk6IHRvZ2dsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dFNsaWRlKCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlSW5kZXggPSB0aGlzLl9fZ2V0QWN0aXZlSW5kZXgoKTtcblxuICAgICAgICAgICAgaWYgKGFjdGl2ZUluZGV4ID09PSB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgIHRoaXMuX19zZXRTbGlkZSgwKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuX19zZXRTbGlkZShhY3RpdmVJbmRleCArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHByZXZTbGlkZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGl2ZUluZGV4ID0gdGhpcy5fX2dldEFjdGl2ZUluZGV4KCk7XG5cbiAgICAgICAgICAgIGlmIChhY3RpdmVJbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgICB0aGlzLl9fc2V0U2xpZGUodGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLl9fc2V0U2xpZGUoYWN0aXZlSW5kZXggLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBfX2dldEFjdGl2ZUluZGV4KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3RhdGUuYWN0aXZlSW5kZXg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgX19zZXRTbGlkZShpbmRleCkge1xuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiBpbmRleFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgY29uc3QgaXNFbXB0eSA9IE9iamVjdChfQ2Fyb3VzZWxWMUlzRW1wdHlGbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fW1wiQ2Fyb3VzZWxWMUlzRW1wdHlGblwiXSkodGhpcy5wcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MsXG4gICAgICAgICAgICAgIHJvbGU6IFwiZ3JvdXBcIixcbiAgICAgICAgICAgICAgXCJkYXRhLXBhbmVsY29udGFpbmVyXCI6IFwiY2Fyb3VzZWxcIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eUxhYmVsLFxuICAgICAgICAgICAgICBcImFyaWEtcm9sZWRlc2NyaXB0aW9uXCI6IFwiY2Fyb3VzZWxcIlxuICAgICAgICAgICAgfSwgIWlzRW1wdHkgJiYgdGhpcy5yZW5kZXJDYXJvdXNlbCgpLCB0aGlzLnBsYWNlaG9sZGVyQ29tcG9uZW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBkaXNwbGF5SXRlbShpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgY29uc3QgaXNBY3RpdmUgPSBpbmRleCA9PT0gdGhpcy5zdGF0ZS5hY3RpdmVJbmRleDsgLy93ZSBkaXNwbGF5IHRoZSBpdGVtIGlmIGFjdGl2ZSBpcyB0cnVlLCBvciBpZiB3ZSBhcmUgaW4gdGhlIGF1dGhvciBtb2RlLiB3ZSBuZWVkIHRvIGFsd2F5cyBkaXNwbGF5IHRoZSBpdGVtIGZvciB0aGUgYXV0aG9yIG1vZGUgdG8gd29yayBwcm9wZXJseS5cblxuICAgICAgICAgICAgY29uc3QgZGlzcGxheSA9ICEhKGlzQWN0aXZlIHx8IHRoaXMucHJvcHMuaXNJbkVkaXRvcik7XG4gICAgICAgICAgICBjb25zdCBjc3NDbGFzcyA9IGlzQWN0aXZlID8gYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pdGVtICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pdGVtLS1hY3RpdmVgIDogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pdGVtYDtcbiAgICAgICAgICAgIGNvbnN0IGFyaWFMYWJlbCA9IGZvcm1hdEZuKHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5zbGlkZSwgWyhpbmRleCArIDEpLnRvU3RyaW5nKCksIHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLmxlbmd0aC50b1N0cmluZygpXSk7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGtleTogJ2l0ZW0tJyArIGluZGV4LFxuICAgICAgICAgICAgICBjbGFzc05hbWU6IGNzc0NsYXNzLFxuICAgICAgICAgICAgICByb2xlOiBcInRhYnBhbmVsXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWwsXG4gICAgICAgICAgICAgIFwiZGF0YS1jbXAtaG9vay1jYXJvdXNlbFwiOiBcIml0ZW1cIlxuICAgICAgICAgICAgfSwgZGlzcGxheSAmJiBpdGVtKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW5kZXJDYXJvdXNlbCgpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2NvbnRlbnQnLFxuICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI6ICgpID0+IHRoaXMuaGFuZGxlT25Nb3VzZUVudGVyKCksXG4gICAgICAgICAgICAgIG9uTW91c2VMZWF2ZTogKCkgPT4gdGhpcy5oYW5kbGVPbk1vdXNlTGVhdmUoKVxuICAgICAgICAgICAgfSwgdGhpcy5jaGlsZENvbXBvbmVudHMubWFwKChjaGlsZENvbXBvbmVudCwgaW5kZXgpID0+IHRoaXMuZGlzcGxheUl0ZW0oY2hpbGRDb21wb25lbnQsIGluZGV4KSksIHRoaXMucmVuZGVyQ2Fyb3VzZWxBY3Rpb25zKCksIHRoaXMucmVuZGVyQ2Fyb3VzZWxJbmRpY2F0b3JzKCkpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlckNhcm91c2VsSW5kaWNhdG9ycygpIHtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwib2xcIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faW5kaWNhdG9ycycsXG4gICAgICAgICAgICAgIHJvbGU6IFwidGFibGlzdFwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LmluZGljYXRvcnNcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuY3FJdGVtc09yZGVyLm1hcCgoa2V5LCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5wcm9wcy5jcUl0ZW1zW2tleV07XG4gICAgICAgICAgICAgIGNvbnN0IGNzc0NsYXNzID0gaW5kZXggPT09IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXggPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2luZGljYXRvciAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9faW5kaWNhdG9yLS1hY3RpdmVgIDogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19pbmRpY2F0b3JgO1xuICAgICAgICAgICAgICBjb25zdCBhcmlhTGFiZWxJdGVtID0gZm9ybWF0Rm4odGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LmluZGljYXRvciwgWyhpbmRleCArIDEpLnRvU3RyaW5nKCldKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiAnaXRlbS0nICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5oYW5kbGVJbmRpY2F0b3JDbGljayhpbmRleCksXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzcyxcbiAgICAgICAgICAgICAgICByb2xlOiBcInRhYlwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiBhcmlhTGFiZWxJdGVtXG4gICAgICAgICAgICAgIH0sIGl0ZW1bXCJjcTpwYW5lbFRpdGxlXCJdKTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZW5kZXJDYXJvdXNlbEFjdGlvbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb25zJ1xuICAgICAgICAgICAgfSwgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMuaGFuZGxlT25CdXR0b25QcmV2KCksXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tcHJldmlvdXNgLFxuICAgICAgICAgICAgICB0eXBlOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogdGhpcy5wcm9wcy5hY2Nlc3NpYmlsaXR5LnByZXZpb3VzXG4gICAgICAgICAgICB9LCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24taWNvbidcbiAgICAgICAgICAgIH0pLCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tdGV4dCdcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wcmV2aW91cykpLCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy5oYW5kbGVPbkJ1dHRvbk5leHQoKSxcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1uZXh0YCxcbiAgICAgICAgICAgICAgdHlwZTogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsXCI6IHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5uZXh0XG4gICAgICAgICAgICB9LCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24taWNvbidcbiAgICAgICAgICAgIH0pLCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tdGV4dCdcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5uZXh0KSksIHRoaXMucHJvcHMuYXV0b3BsYXkgJiYgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5GcmFnbWVudCwgbnVsbCwgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19hY3Rpb24gJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbi0tcGF1c2UgYCArICghdGhpcy5zdGF0ZS5hdXRvUGxheSA/IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLS1kaXNhYmxlZCcgOiAnJyksXG4gICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGF1c2UsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICgpID0+IHRoaXMudG9nZ2xlQXV0b1BsYXkoZmFsc2UpXG4gICAgICAgICAgICB9LCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24taWNvbidcbiAgICAgICAgICAgIH0pLCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwic3BhblwiLCB7XG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3MgKyAnX19hY3Rpb24tdGV4dCdcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMuYWNjZXNzaWJpbGl0eS5wYXVzZSkpLCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2FjdGlvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYWN0aW9uLS1wbGF5IGAgKyAodGhpcy5zdGF0ZS5hdXRvUGxheSA/IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLS1kaXNhYmxlZCcgOiAnJyksXG4gICAgICAgICAgICAgIHR5cGU6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIFwiYXJpYS1sYWJlbFwiOiB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGxheSxcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4gdGhpcy50b2dnbGVBdXRvUGxheSh0cnVlKVxuICAgICAgICAgICAgfSwgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLWljb24nXG4gICAgICAgICAgICB9KSwgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19fYWN0aW9uLXRleHQnXG4gICAgICAgICAgICB9LCB0aGlzLnByb3BzLmFjY2Vzc2liaWxpdHkucGxheSkpKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgICAgICBDYXJvdXNlbFYxSW1wbC5kZWZhdWx0UHJvcHMgPSB7XG4gICAgICAgICAgX2FsbG93ZWRDb21wb25lbnRQbGFjZWhvbGRlckxpc3RFbXB0eUxhYmVsOiAnQ2Fyb3VzZWxWMScsXG4gICAgICAgICAgaXNJbkVkaXRvcjogZmFsc2UsXG4gICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgIGNxUGF0aDogJycsXG4gICAgICAgICAgY3FJdGVtczoge30sXG4gICAgICAgICAgY3FJdGVtc09yZGVyOiBbXSxcbiAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw6ICdDYXJvdXNlbCcsXG4gICAgICAgICAgYWNjZXNzaWJpbGl0eToge1xuICAgICAgICAgICAgcGxheTogJ1BsYXknLFxuICAgICAgICAgICAgcGF1c2U6ICdQYXVzZScsXG4gICAgICAgICAgICBuZXh0OiAnTmV4dCcsXG4gICAgICAgICAgICBwcmV2aW91czogJ1ByZXZpb3VzJyxcbiAgICAgICAgICAgIHNsaWRlOiAnU2xpZGUgezB9IG9mIHsxfScsXG4gICAgICAgICAgICBpbmRpY2F0b3I6ICdTbGlkZSAlezB9JyxcbiAgICAgICAgICAgIGluZGljYXRvcnM6ICdDaG9vc2UgYSBzbGlkZSB0byBkaXNwbGF5J1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqL1xuXG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gT2JqZWN0KF9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIndpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc1wiXSkoT2JqZWN0KF9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIndpdGhBdXRob3JQYW5lbFN3aXRjaFwiXSkoQ2Fyb3VzZWxWMUltcGwpLCBcImNtcC1jYXJvdXNlbFwiKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH0sXG5cbiAgICAgIC8qKiovXG4gICAgICBcIi4vc3JjL2NvbnRhaW5lci9jYXJvdXNlbC92MS9DYXJvdXNlbFYxSXNFbXB0eUZuLnRzXCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgICAhKioqIC4vc3JjL2NvbnRhaW5lci9jYXJvdXNlbC92MS9DYXJvdXNlbFYxSXNFbXB0eUZuLnRzICoqKiFcbiAgICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKiEgZXhwb3J0cyBwcm92aWRlZDogQ2Fyb3VzZWxWMUlzRW1wdHlGbiAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiQ2Fyb3VzZWxWMUlzRW1wdHlGblwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIENhcm91c2VsVjFJc0VtcHR5Rm47XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIENhcm91c2VsVjFJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuY3FJdGVtc09yZGVyID09IG51bGwgfHwgcHJvcHMuY3FJdGVtc09yZGVyLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfVxuICAgICAgICAvKioqL1xuXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgMzpcbiAgICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgICAhKioqIG11bHRpIC4vc3JjL2NvbnRhaW5lci9jYXJvdXNlbC92MS9DYXJvdXNlbFYxLnRzeCAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gICAgICAgIC8qISAuL3NyYy9jb250YWluZXIvY2Fyb3VzZWwvdjEvQ2Fyb3VzZWxWMS50c3ggKi9cbiAgICAgICAgXCIuL3NyYy9jb250YWluZXIvY2Fyb3VzZWwvdjEvQ2Fyb3VzZWxWMS50c3hcIik7XG4gICAgICAgIC8qKiovXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIjpcbiAgICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogZXh0ZXJuYWwgXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIiAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbiAgICAgIC8qKiovXG4gICAgICBmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50c1wiKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH0sXG5cbiAgICAgIC8qKiovXG4gICAgICBcInJlYWN0XCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogZXh0ZXJuYWwgXCJyZWFjdFwiICoqKiFcbiAgICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH1cbiAgICAgIC8qKioqKiovXG5cbiAgICB9KVxuICApO1xufSk7IC8vIyBzb3VyY2VNYXBwaW5nVVJMPUNhcm91c2VsVjEuanMubWFwIl0sInNvdXJjZVJvb3QiOiIifQ==
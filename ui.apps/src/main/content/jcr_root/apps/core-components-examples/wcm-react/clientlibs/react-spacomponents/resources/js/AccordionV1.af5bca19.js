(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["AccordionV1"],{

/***/ "../../react-spa-components/dist/container/accordion/v1/AccordionV1.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/accordion/v1/AccordionV1.js ***!
  \*******************************************************************************************************************************/
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

      return __webpack_require__(__webpack_require__.s = 2);
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
      "./src/container/accordion/v1/AccordionV1.tsx":
      /*!****************************************************!*\
        !*** ./src/container/accordion/v1/AccordionV1.tsx ***!
        \****************************************************/

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


        var _AccordionV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
        /*! ./AccordionV1IsEmptyFn */
        "./src/container/accordion/v1/AccordionV1IsEmptyFn.ts");
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


        class AccordionV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["Container"] {
          constructor(props) {
            super(props);
            this.state = {
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_2__["ComponentMapping"],
              expandedItems: this.props.expandedItems
            };
            this.handleAccordionNavClick = this.handleAccordionNavClick.bind(this);
          }

          componentDidUpdate(prevProps, prevState) {
            if (this.props.activeIndexFromAuthorPanel !== undefined && prevProps.activeIndexFromAuthorPanel != this.props.activeIndexFromAuthorPanel) {
              this.setState({
                expandedItems: [this.props.cqItemsOrder[this.props.activeIndexFromAuthorPanel]]
              });
            }
          }

          handleAccordionNavClick(itemKey) {
            const isActive = this.state.expandedItems.indexOf(itemKey) > -1;
            const isSingleExpansion = this.props.singleExpansion;
            let expandedItems = this.state.expandedItems;

            if (isSingleExpansion) {
              expandedItems = isActive ? [] : [itemKey];
            } else {
              if (isActive) {
                const index = this.state.expandedItems.indexOf(itemKey);
                expandedItems.splice(index);
              } else {
                expandedItems.push(itemKey);
              }
            }

            this.setState({
              expandedItems: expandedItems
            });
          }

          isItemExpanded(key) {
            return this.state.expandedItems.indexOf(key) > -1;
          }

          get accordionContainerProps() {
            const attrs = this.containerProps;
            attrs['className'] = attrs.className + ' ' + this.props.baseCssClass;
            attrs['data-cmp-is'] = 'accordion';
            attrs['data-panelcontainer'] = 'accordion';
            return attrs;
          }

          displayItem(key, isExpanded) {
            const indexToShow = this.props.cqItemsOrder.indexOf(key);

            if (this.props.isInEditor === true || isExpanded) {
              const cssClass = isExpanded ? `${this.props.baseCssClass}__panel ${this.props.baseCssClass}__panel--expanded` : `${this.props.baseCssClass}__panel ${this.props.baseCssClass}__panel--hidden`;
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
                className: cssClass,
                role: "region"
              }, this.childComponents[indexToShow]);
            }

            return null;
          }

          renderHeadingButton(key, item, buttonCssClass) {
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("button", {
              className: buttonCssClass,
              onClick: () => {
                this.handleAccordionNavClick(key);
              }
            }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: this.props.baseCssClass + '__title'
            }, item["cq:panelTitle"]), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", {
              className: this.props.baseCssClass + '__icon'
            }));
          }

          get accordionContent() {
            return this.props.cqItemsOrder.map((key, index) => {
              const item = this.props.cqItems[key];
              const isExpanded = this.isItemExpanded(key);
              const buttonCssClass = isExpanded ? `${this.props.baseCssClass}__button ${this.props.baseCssClass}__button--expanded` : `${this.props.baseCssClass}__button`;
              return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", {
                key: "accordion-index" + index,
                className: this.props.baseCssClass + '__item',
                "data-cmp-index": index,
                "data-cmp-expanded": isExpanded
              }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](`${this.props.headingElement || 'h3'}`, {
                className: this.props.baseCssClass + '__header'
              }, this.renderHeadingButton(key, item, buttonCssClass)), this.displayItem(key, isExpanded));
            });
          }

          render() {
            const isEmpty = Object(_AccordionV1IsEmptyFn__WEBPACK_IMPORTED_MODULE_3__["AccordionV1IsEmptyFn"])(this.props);
            return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", Object.assign({}, this.accordionContainerProps), !isEmpty && this.accordionContent, this.placeholderComponent);
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withStandardBaseCssClass"])(Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_1__["withAuthorPanelSwitch"])(AccordionV1Impl), "cmp-accordion");
        /***/
      },

      /***/
      "./src/container/accordion/v1/AccordionV1IsEmptyFn.ts":
      /*!************************************************************!*\
        !*** ./src/container/accordion/v1/AccordionV1IsEmptyFn.ts ***!
        \************************************************************/

      /*! exports provided: AccordionV1IsEmptyFn */

      /***/
      function (module, __webpack_exports__, __webpack_require__) {
        "use strict";

        __webpack_require__.r(__webpack_exports__);
        /* harmony export (binding) */


        __webpack_require__.d(__webpack_exports__, "AccordionV1IsEmptyFn", function () {
          return AccordionV1IsEmptyFn;
        });
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


        function AccordionV1IsEmptyFn(props) {
          return props.cqItemsOrder == null || props.cqItemsOrder.length == 0;
        }
        /***/

      },

      /***/
      2:
      /*!**********************************************************!*\
        !*** multi ./src/container/accordion/v1/AccordionV1.tsx ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/accordion/v1/AccordionV1.tsx */
        "./src/container/accordion/v1/AccordionV1.tsx");
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
}); //# sourceMappingURL=AccordionV1.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3Qtc3BhLWNvbXBvbmVudHMvZGlzdC9jb250YWluZXIvYWNjb3JkaW9uL3YxL0FjY29yZGlvblYxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTSxJQUF5RCw2QkFBNkIsS0FBSyxFQUFvTztBQUNyVSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCLG1CQUFPLENBQUMsdUlBQXNDO0FBQ3ZFO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsbUJBQU8sQ0FBQyw0Q0FBTztBQUN4QztBQUNBO0FBQ0E7O0FBRUEsS0FBSztBQUNMO0FBQ0EsQ0FBQyxFQUFFLHdDIiwiZmlsZSI6ImpzL0FjY29yZGlvblYxLmFmNWJjYTE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JykgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7ZWxzZSBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSBkZWZpbmUoW10sIGZhY3RvcnkpO2Vsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JykgZXhwb3J0c1tcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IGZhY3RvcnkoKTtlbHNlIHJvb3RbXCJAYWRvYmUvYWVtLWNvcmUtY29tcG9uZW50cy1yZWFjdC1zcGFcIl0gPSBmYWN0b3J5KCk7XG59KSh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgPyBzZWxmIDogdGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gKFxuICAgIC8qKioqKiovXG4gICAgZnVuY3Rpb24gKG1vZHVsZXMpIHtcbiAgICAgIC8vIHdlYnBhY2tCb290c3RyYXBcblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIFRoZSBtb2R1bGUgY2FjaGVcblxuICAgICAgLyoqKioqKi9cbiAgICAgIHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cblxuICAgICAgLyoqKioqKi9cblxuICAgICAgZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGlmIChpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgcmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgfVxuICAgICAgICAvKioqKioqL1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXG4gICAgICAgIC8qKioqKiovXG5cblxuICAgICAgICB2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBpOiBtb2R1bGVJZCxcblxuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgbDogZmFsc2UsXG5cbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgLyoqKioqKi9cblxuICAgICAgICB9O1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgLy8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgbW9kdWxlLmwgPSB0cnVlO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uIChleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgaWYgKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0OiBnZXR0ZXJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuXG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uIChleHBvcnRzKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGlmICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHtcbiAgICAgICAgICAgIHZhbHVlOiAnTW9kdWxlJ1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgIH1cbiAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24gKHZhbHVlLCBtb2RlKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGlmIChtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAobW9kZSAmIDQgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgdmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuICAgICAgICAvKioqKioqL1xuXG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBpZiAobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IgKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlW2tleV07XG4gICAgICAgIH0uYmluZChudWxsLCBrZXkpKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICByZXR1cm4gbnM7XG4gICAgICAgIC8qKioqKiovXG4gICAgICB9O1xuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24gKG1vZHVsZSkge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICB2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHtcbiAgICAgICAgICByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107XG4gICAgICAgIH0gOlxuICAgICAgICAvKioqKioqL1xuICAgICAgICBmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkge1xuICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgIH07XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuICAgICAgICAvKioqKioqL1xuXG5cbiAgICAgICAgcmV0dXJuIGdldHRlcjtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24gKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTtcbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuXG4gICAgICAvKioqKioqL1xuXG4gICAgICByZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyKTtcbiAgICAgIC8qKioqKiovXG4gICAgfShcbiAgICAvKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgLyoqKioqKi9cbiAgICB7XG4gICAgICAvKioqL1xuICAgICAgXCIuL3NyYy9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnQudHN4XCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogLi9zcmMvQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50LnRzeCAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKiEgZXhwb3J0cyBwcm92aWRlZDogd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzLCB3aXRoQXV0aG9yUGFuZWxTd2l0Y2ggKi9cblxuICAgICAgLyoqKi9cbiAgICAgIGZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgICAvKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi9cblxuXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIndpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmV0dXJuIHdpdGhTdGFuZGFyZEJhc2VDc3NDbGFzcztcbiAgICAgICAgfSk7XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwid2l0aEF1dGhvclBhbmVsU3dpdGNoXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gd2l0aEF1dGhvclBhbmVsU3dpdGNoO1xuICAgICAgICB9KTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIHJlYWN0ICovXG4gICAgICAgIFwicmVhY3RcIik7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbiAgICAgICAgLypcbiAgICAgICAgICogIENvcHlyaWdodCAyMDIwIEFkb2JlXG4gICAgICAgICAqXG4gICAgICAgICAqICBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICAgICAgICAgKiAgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICAgICAgICAgKiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gICAgICAgICAqXG4gICAgICAgICAqICAgICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gICAgICAgICAqXG4gICAgICAgICAqICBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gICAgICAgICAqICBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gICAgICAgICAqICBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAgICAgICAgICogIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAgICAgICAgICogIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICAgICAgICAgKi9cblxuXG4gICAgICAgIGNvbnN0IGlzQnJvd3NlciA9ICgoKSA9PiB7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcbiAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3Qgd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzID0gKENvbXBvbmVudCwgZGVmYXVsdEJhc2VDc3NDbGFzcykgPT4ge1xuICAgICAgICAgIHJldHVybiBwcm9wcyA9PiB7XG4gICAgICAgICAgICBjb25zdCBiYXNlQ3NzQ2xhc3MgPSBwcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgICAgICBjb25zdCB0b0JlVXNlZENzc0NsYXNzID0gYmFzZUNzc0NsYXNzICYmIGJhc2VDc3NDbGFzcy50cmltKCkubGVuZ3RoID4gMCA/IGJhc2VDc3NDbGFzcyA6IGRlZmF1bHRCYXNlQ3NzQ2xhc3M7XG4gICAgICAgICAgICBjb25zdCBtZXJnZWRQcm9wcyA9IHsgLi4ucHJvcHMsXG4gICAgICAgICAgICAgIGJhc2VDc3NDbGFzczogdG9CZVVzZWRDc3NDbGFzc1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY3JlYXRlRWxlbWVudFwiXShDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIG1lcmdlZFByb3BzKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBjb25zdCB3aXRoQXV0aG9yUGFuZWxTd2l0Y2ggPSBDb21wb25lbnQgPT4ge1xuICAgICAgICAgIHJldHVybiBjbGFzcyBleHRlbmRzIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJDb21wb25lbnRcIl0ge1xuICAgICAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICAgICAgICB0aGlzLnN0YXRlID0ge307IC8vQHRzLWlnbm9yZVxuXG4gICAgICAgICAgICAgIGlmIChpc0Jyb3dzZXIgJiYgd2luZG93LkdyYW5pdGUgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yICYmIHdpbmRvdy5HcmFuaXRlLmF1dGhvci5NZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwgPSBuZXcgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKFwiY3FhdXRob3JcIiwgd2luZG93KTtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbGxiYWNrID0gdGhpcy5jYWxsYmFjay5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNhbGxiYWNrKG1lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YSAmJiBtZXNzYWdlLmRhdGEuaWQgPT09IHRoaXMucHJvcHMuY3FQYXRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UuZGF0YS5vcGVyYXRpb24gPT09IFwibmF2aWdhdGVcIikge1xuICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBtZXNzYWdlLmRhdGEuaW5kZXg7XG4gICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IGluZGV4XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgICAgICAgIGlmICh0aGlzLm1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbC5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnVuc3Vic2NyaWJlUmVxdWVzdE1lc3NhZ2UoXCJjbXAucGFuZWxjb250YWluZXJcIiwgdGhpcy5jYWxsYmFjayk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyKCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImNyZWF0ZUVsZW1lbnRcIl0oQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLnByb3BzLCB7XG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWw6IHRoaXMuc3RhdGUuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWxcbiAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqKi9cblxuICAgICAgfSxcblxuICAgICAgLyoqKi9cbiAgICAgIFwiLi9zcmMvY29udGFpbmVyL2FjY29yZGlvbi92MS9BY2NvcmRpb25WMS50c3hcIjpcbiAgICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogLi9zcmMvY29udGFpbmVyL2FjY29yZGlvbi92MS9BY2NvcmRpb25WMS50c3ggKioqIVxuICAgICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBleHBvcnRzIHByb3ZpZGVkOiBkZWZhdWx0ICovXG5cbiAgICAgIC8qKiovXG4gICAgICBmdW5jdGlvbiAobW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIHJlYWN0ICovXG4gICAgICAgIFwicmVhY3RcIik7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciBfQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgICAgICAvKiEgLi4vLi4vLi4vQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50ICovXG4gICAgICAgIFwiLi9zcmMvQWJzdHJhY3RDb3JlQ29udGFpbmVyQ29tcG9uZW50LnRzeFwiKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciBfYWRvYmVfYWVtX3JlYWN0X2VkaXRhYmxlX2NvbXBvbmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gICAgICAgIC8qISBAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHMgKi9cbiAgICAgICAgXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIik7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgX2Fkb2JlX2FlbV9yZWFjdF9lZGl0YWJsZV9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oX2Fkb2JlX2FlbV9yZWFjdF9lZGl0YWJsZV9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX18pO1xuICAgICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgICAgdmFyIF9BY2NvcmRpb25WMUlzRW1wdHlGbl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIC4vQWNjb3JkaW9uVjFJc0VtcHR5Rm4gKi9cbiAgICAgICAgXCIuL3NyYy9jb250YWluZXIvYWNjb3JkaW9uL3YxL0FjY29yZGlvblYxSXNFbXB0eUZuLnRzXCIpO1xuICAgICAgICAvKlxuICAgICAgICAgKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAgICAgICAgICpcbiAgICAgICAgICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgICAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgICAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgICAgICAgICpcbiAgICAgICAgICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICAgICAgICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICAgICAgICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgICAgICAgKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgICAgICAgKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgY2xhc3MgQWNjb3JkaW9uVjFJbXBsIGV4dGVuZHMgX2Fkb2JlX2FlbV9yZWFjdF9lZGl0YWJsZV9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJDb250YWluZXJcIl0ge1xuICAgICAgICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgICAgICAgICBjb21wb25lbnRNYXBwaW5nOiB0aGlzLnByb3BzLmNvbXBvbmVudE1hcHBpbmcgfHwgX2Fkb2JlX2FlbV9yZWFjdF9lZGl0YWJsZV9jb21wb25lbnRzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19bXCJDb21wb25lbnRNYXBwaW5nXCJdLFxuICAgICAgICAgICAgICBleHBhbmRlZEl0ZW1zOiB0aGlzLnByb3BzLmV4cGFuZGVkSXRlbXNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUFjY29yZGlvbk5hdkNsaWNrID0gdGhpcy5oYW5kbGVBY2NvcmRpb25OYXZDbGljay5iaW5kKHRoaXMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMsIHByZXZTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT09IHVuZGVmaW5lZCAmJiBwcmV2UHJvcHMuYWN0aXZlSW5kZXhGcm9tQXV0aG9yUGFuZWwgIT0gdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbCkge1xuICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICAgICAgICBleHBhbmRlZEl0ZW1zOiBbdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXJbdGhpcy5wcm9wcy5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbF1dXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGhhbmRsZUFjY29yZGlvbk5hdkNsaWNrKGl0ZW1LZXkpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzQWN0aXZlID0gdGhpcy5zdGF0ZS5leHBhbmRlZEl0ZW1zLmluZGV4T2YoaXRlbUtleSkgPiAtMTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2luZ2xlRXhwYW5zaW9uID0gdGhpcy5wcm9wcy5zaW5nbGVFeHBhbnNpb247XG4gICAgICAgICAgICBsZXQgZXhwYW5kZWRJdGVtcyA9IHRoaXMuc3RhdGUuZXhwYW5kZWRJdGVtcztcblxuICAgICAgICAgICAgaWYgKGlzU2luZ2xlRXhwYW5zaW9uKSB7XG4gICAgICAgICAgICAgIGV4cGFuZGVkSXRlbXMgPSBpc0FjdGl2ZSA/IFtdIDogW2l0ZW1LZXldO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaWYgKGlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLnN0YXRlLmV4cGFuZGVkSXRlbXMuaW5kZXhPZihpdGVtS2V5KTtcbiAgICAgICAgICAgICAgICBleHBhbmRlZEl0ZW1zLnNwbGljZShpbmRleCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhwYW5kZWRJdGVtcy5wdXNoKGl0ZW1LZXkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICBleHBhbmRlZEl0ZW1zOiBleHBhbmRlZEl0ZW1zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpc0l0ZW1FeHBhbmRlZChrZXkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXRlLmV4cGFuZGVkSXRlbXMuaW5kZXhPZihrZXkpID4gLTE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgZ2V0IGFjY29yZGlvbkNvbnRhaW5lclByb3BzKCkge1xuICAgICAgICAgICAgY29uc3QgYXR0cnMgPSB0aGlzLmNvbnRhaW5lclByb3BzO1xuICAgICAgICAgICAgYXR0cnNbJ2NsYXNzTmFtZSddID0gYXR0cnMuY2xhc3NOYW1lICsgJyAnICsgdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3M7XG4gICAgICAgICAgICBhdHRyc1snZGF0YS1jbXAtaXMnXSA9ICdhY2NvcmRpb24nO1xuICAgICAgICAgICAgYXR0cnNbJ2RhdGEtcGFuZWxjb250YWluZXInXSA9ICdhY2NvcmRpb24nO1xuICAgICAgICAgICAgcmV0dXJuIGF0dHJzO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRpc3BsYXlJdGVtKGtleSwgaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhUb1Nob3cgPSB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5pbmRleE9mKGtleSk7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnByb3BzLmlzSW5FZGl0b3IgPT09IHRydWUgfHwgaXNFeHBhbmRlZCkge1xuICAgICAgICAgICAgICBjb25zdCBjc3NDbGFzcyA9IGlzRXhwYW5kZWQgPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX3BhbmVsICR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19wYW5lbC0tZXhwYW5kZWRgIDogYCR7dGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3N9X19wYW5lbCAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fcGFuZWwtLWhpZGRlbmA7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY3JlYXRlRWxlbWVudFwiXShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiBjc3NDbGFzcyxcbiAgICAgICAgICAgICAgICByb2xlOiBcInJlZ2lvblwiXG4gICAgICAgICAgICAgIH0sIHRoaXMuY2hpbGRDb21wb25lbnRzW2luZGV4VG9TaG93XSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlckhlYWRpbmdCdXR0b24oa2V5LCBpdGVtLCBidXR0b25Dc3NDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJjcmVhdGVFbGVtZW50XCJdKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiBidXR0b25Dc3NDbGFzcyxcbiAgICAgICAgICAgICAgb25DbGljazogKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQWNjb3JkaW9uTmF2Q2xpY2soa2V5KTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImNyZWF0ZUVsZW1lbnRcIl0oXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX3RpdGxlJ1xuICAgICAgICAgICAgfSwgaXRlbVtcImNxOnBhbmVsVGl0bGVcIl0pLCByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY3JlYXRlRWxlbWVudFwiXShcInNwYW5cIiwge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6IHRoaXMucHJvcHMuYmFzZUNzc0NsYXNzICsgJ19faWNvbidcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBnZXQgYWNjb3JkaW9uQ29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3BzLmNxSXRlbXNPcmRlci5tYXAoKGtleSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMucHJvcHMuY3FJdGVtc1trZXldO1xuICAgICAgICAgICAgICBjb25zdCBpc0V4cGFuZGVkID0gdGhpcy5pc0l0ZW1FeHBhbmRlZChrZXkpO1xuICAgICAgICAgICAgICBjb25zdCBidXR0b25Dc3NDbGFzcyA9IGlzRXhwYW5kZWQgPyBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2J1dHRvbiAke3RoaXMucHJvcHMuYmFzZUNzc0NsYXNzfV9fYnV0dG9uLS1leHBhbmRlZGAgOiBgJHt0aGlzLnByb3BzLmJhc2VDc3NDbGFzc31fX2J1dHRvbmA7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY3JlYXRlRWxlbWVudFwiXShcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAga2V5OiBcImFjY29yZGlvbi1pbmRleFwiICsgaW5kZXgsXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2l0ZW0nLFxuICAgICAgICAgICAgICAgIFwiZGF0YS1jbXAtaW5kZXhcIjogaW5kZXgsXG4gICAgICAgICAgICAgICAgXCJkYXRhLWNtcC1leHBhbmRlZFwiOiBpc0V4cGFuZGVkXG4gICAgICAgICAgICAgIH0sIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJjcmVhdGVFbGVtZW50XCJdKGAke3RoaXMucHJvcHMuaGVhZGluZ0VsZW1lbnQgfHwgJ2gzJ31gLCB7XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lOiB0aGlzLnByb3BzLmJhc2VDc3NDbGFzcyArICdfX2hlYWRlcidcbiAgICAgICAgICAgICAgfSwgdGhpcy5yZW5kZXJIZWFkaW5nQnV0dG9uKGtleSwgaXRlbSwgYnV0dG9uQ3NzQ2xhc3MpKSwgdGhpcy5kaXNwbGF5SXRlbShrZXksIGlzRXhwYW5kZWQpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzRW1wdHkgPSBPYmplY3QoX0FjY29yZGlvblYxSXNFbXB0eUZuX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX19bXCJBY2NvcmRpb25WMUlzRW1wdHlGblwiXSkodGhpcy5wcm9wcyk7XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcImNyZWF0ZUVsZW1lbnRcIl0oXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hY2NvcmRpb25Db250YWluZXJQcm9wcyksICFpc0VtcHR5ICYmIHRoaXMuYWNjb3JkaW9uQ29udGVudCwgdGhpcy5wbGFjZWhvbGRlckNvbXBvbmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqL1xuXG5cbiAgICAgICAgX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSBPYmplY3QoX0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wid2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzXCJdKShPYmplY3QoX0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wid2l0aEF1dGhvclBhbmVsU3dpdGNoXCJdKShBY2NvcmRpb25WMUltcGwpLCBcImNtcC1hY2NvcmRpb25cIik7XG4gICAgICAgIC8qKiovXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgXCIuL3NyYy9jb250YWluZXIvYWNjb3JkaW9uL3YxL0FjY29yZGlvblYxSXNFbXB0eUZuLnRzXCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogLi9zcmMvY29udGFpbmVyL2FjY29yZGlvbi92MS9BY2NvcmRpb25WMUlzRW1wdHlGbi50cyAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKiEgZXhwb3J0cyBwcm92aWRlZDogQWNjb3JkaW9uVjFJc0VtcHR5Rm4gKi9cblxuICAgICAgLyoqKi9cbiAgICAgIGZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgICAvKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi9cblxuXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcIkFjY29yZGlvblYxSXNFbXB0eUZuXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gQWNjb3JkaW9uVjFJc0VtcHR5Rm47XG4gICAgICAgIH0pO1xuICAgICAgICAvKlxuICAgICAgICAgKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAgICAgICAgICpcbiAgICAgICAgICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgICAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgICAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgICAgICAgICpcbiAgICAgICAgICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICAgICAgICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICAgICAgICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgICAgICAgKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgICAgICAgKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgZnVuY3Rpb24gQWNjb3JkaW9uVjFJc0VtcHR5Rm4ocHJvcHMpIHtcbiAgICAgICAgICByZXR1cm4gcHJvcHMuY3FJdGVtc09yZGVyID09IG51bGwgfHwgcHJvcHMuY3FJdGVtc09yZGVyLmxlbmd0aCA9PSAwO1xuICAgICAgICB9XG4gICAgICAgIC8qKiovXG5cbiAgICAgIH0sXG5cbiAgICAgIC8qKiovXG4gICAgICAyOlxuICAgICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICAgISoqKiBtdWx0aSAuL3NyYy9jb250YWluZXIvYWNjb3JkaW9uL3YxL0FjY29yZGlvblYxLnRzeCAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbiAgICAgIC8qKiovXG4gICAgICBmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIC4vc3JjL2NvbnRhaW5lci9hY2NvcmRpb24vdjEvQWNjb3JkaW9uVjEudHN4ICovXG4gICAgICAgIFwiLi9zcmMvY29udGFpbmVyL2FjY29yZGlvbi92MS9BY2NvcmRpb25WMS50c3hcIik7XG4gICAgICAgIC8qKiovXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIjpcbiAgICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogZXh0ZXJuYWwgXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIiAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyohIG5vIHN0YXRpYyBleHBvcnRzIGZvdW5kICovXG5cbiAgICAgIC8qKiovXG4gICAgICBmdW5jdGlvbiAobW9kdWxlLCBleHBvcnRzKSB7XG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50c1wiKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH0sXG5cbiAgICAgIC8qKiovXG4gICAgICBcInJlYWN0XCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogZXh0ZXJuYWwgXCJyZWFjdFwiICoqKiFcbiAgICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcbiAgICAgICAgLyoqKi9cbiAgICAgIH1cbiAgICAgIC8qKioqKiovXG5cbiAgICB9KVxuICApO1xufSk7IC8vIyBzb3VyY2VNYXBwaW5nVVJMPUFjY29yZGlvblYxLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=
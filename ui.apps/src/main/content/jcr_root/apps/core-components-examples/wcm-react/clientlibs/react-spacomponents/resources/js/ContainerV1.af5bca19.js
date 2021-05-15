(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ContainerV1"],{

/***/ "../../react-spa-components/dist/container/container/v1/ContainerV1.js":
/*!*******************************************************************************************************************************!*\
  !*** /Users/raaijmak/workspace/aem-react-core-wcm-components/react-spa-components/dist/container/container/v1/ContainerV1.js ***!
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

      return __webpack_require__(__webpack_require__.s = 4);
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
      "./src/container/container/v1/ContainerV1.tsx":
      /*!****************************************************!*\
        !*** ./src/container/container/v1/ContainerV1.tsx ***!
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


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
        /*! @adobe/aem-react-editable-components */
        "@adobe/aem-react-editable-components");
        /* harmony import */


        var _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__);
        /* harmony import */


        var _AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
        /*! ../../../AbstractCoreContainerComponent */
        "./src/AbstractCoreContainerComponent.tsx");
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


        class ContainerV1Impl extends _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["Container"] {
          constructor(props) {
            super(props); //@ts-ignore

            this.state = {
              componentMapping: this.props.componentMapping || _adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ComponentMapping"]
            };
            this.mainDiv = react__WEBPACK_IMPORTED_MODULE_0___default.a.createRef();
          }

          componentDidMount() {
            if (this.mainDiv.current) {
              this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
            }
          }

          componentDidUpdate() {
            if (this.mainDiv.current) {
              this.mainDiv.current.setAttribute('style', this.props.backgroundStyle);
            }
          }

          get coreContainerProps() {
            return {
              className: 'container responsivegrid'
            };
          }

          render() {
            const {
              componentMapping,
              allowedComponents,
              children,
              cqPath,
              cqItems,
              cqItemsOrder,
              isInEditor,
              ...otherProps
            } = this.props;
            const gridProps = {
              allowedComponents: this.props.allowedComponents,
              gridClassNames: this.props.gridClassNames,
              columnClassNames: this.props.columnClassNames,
              cqItems: this.props.cqItems,
              cqItemsOrder: this.props.cqItemsOrder,
              title: "",
              cqPath: this.props.cqPath,
              isInEditor: this.props.isInEditor
            };
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({}, this.coreContainerProps), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              ref: this.mainDiv,
              id: this.props.id,
              className: this.props.baseCssClass
            }, this.props.layout && this.props.layout === 'simple' && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["Container"], {
              componentMapping: this.state.componentMapping,
              cqForceReload: this.props.cqForceReload,
              cqPath: this.props.cqPath,
              cqItems: this.props.cqItems,
              cqItemsOrder: this.props.cqItemsOrder,
              isInEditor: this.props.isInEditor
            }, this.childComponents), (!this.props.layout || this.props.layout !== 'simple') && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_adobe_aem_react_editable_components__WEBPACK_IMPORTED_MODULE_1__["ResponsiveGrid"], Object.assign({}, gridProps))));
          }

        }
        /* harmony default export */


        __webpack_exports__["default"] = Object(_AbstractCoreContainerComponent__WEBPACK_IMPORTED_MODULE_2__["withStandardBaseCssClass"])(ContainerV1Impl, "cmp-container");
        /***/
      },

      /***/
      4:
      /*!**********************************************************!*\
        !*** multi ./src/container/container/v1/ContainerV1.tsx ***!
        \**********************************************************/

      /*! no static exports found */

      /***/
      function (module, exports, __webpack_require__) {
        module.exports = __webpack_require__(
        /*! ./src/container/container/v1/ContainerV1.tsx */
        "./src/container/container/v1/ContainerV1.tsx");
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
}); //# sourceMappingURL=ContainerV1.js.map

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yYWFpam1hay93b3Jrc3BhY2UvYWVtLXJlYWN0LWNvcmUtd2NtLWNvbXBvbmVudHMvcmVhY3Qtc3BhLWNvbXBvbmVudHMvZGlzdC9jb250YWluZXIvY29udGFpbmVyL3YxL0NvbnRhaW5lclYxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0EsTUFBTSxJQUF5RCw2QkFBNkIsS0FBSyxFQUFvTztBQUNyVSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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LCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKSBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtlbHNlIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIGRlZmluZShbXSwgZmFjdG9yeSk7ZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSBleHBvcnRzW1wiQGFkb2JlL2FlbS1jb3JlLWNvbXBvbmVudHMtcmVhY3Qtc3BhXCJdID0gZmFjdG9yeSgpO2Vsc2Ugcm9vdFtcIkBhZG9iZS9hZW0tY29yZS1jb21wb25lbnRzLXJlYWN0LXNwYVwiXSA9IGZhY3RvcnkoKTtcbn0pKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyA/IHNlbGYgOiB0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAoXG4gICAgLyoqKioqKi9cbiAgICBmdW5jdGlvbiAobW9kdWxlcykge1xuICAgICAgLy8gd2VicGFja0Jvb3RzdHJhcFxuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gVGhlIG1vZHVsZSBjYWNoZVxuXG4gICAgICAvKioqKioqL1xuICAgICAgdmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuXG4gICAgICAvKioqKioqL1xuXG4gICAgICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgLy8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICB9XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cbiAgICAgICAgLyoqKioqKi9cblxuXG4gICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiAgICAgICAgICAvKioqKioqL1xuICAgICAgICAgIGk6IG1vZHVsZUlkLFxuXG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgICBsOiBmYWxzZSxcblxuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgZXhwb3J0czoge31cbiAgICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIH07XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgLy8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICAvKioqKioqL1xuICAgICAgICAvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBtb2R1bGUubCA9IHRydWU7XG4gICAgICAgIC8qKioqKiovXG5cbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgLy8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblxuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH1cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuXG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcblxuICAgICAgLyoqKioqKi9cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcblxuICAgICAgLyoqKioqKi9cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24gKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuICAgICAgICAvKioqKioqL1xuICAgICAgICBpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICBnZXQ6IGdldHRlclxuICAgICAgICAgIH0pO1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgIH1cbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgfTtcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5cbiAgICAgIC8qKioqKiovXG5cblxuICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgaWYgKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuICAgICAgICAgIC8qKioqKiovXG4gICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywge1xuICAgICAgICAgICAgdmFsdWU6ICdNb2R1bGUnXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLyoqKioqKi9cbiAgICAgICAgfVxuICAgICAgICAvKioqKioqL1xuXG5cbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKioqKioqL1xuICAgICAgfTtcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcblxuICAgICAgLyoqKioqKi9cbiAgICAgIC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbiAodmFsdWUsIG1vZGUpIHtcbiAgICAgICAgLyoqKioqKi9cbiAgICAgICAgaWYgKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIGlmIChtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIGlmIChtb2RlICYgNCAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICB2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gICAgICAgIC8qKioqKiovXG5cblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0Jywge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIGlmIChtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvciAodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVba2V5XTtcbiAgICAgICAgfS5iaW5kKG51bGwsIGtleSkpO1xuICAgICAgICAvKioqKioqL1xuXG4gICAgICAgIHJldHVybiBucztcbiAgICAgICAgLyoqKioqKi9cbiAgICAgIH07XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbiAobW9kdWxlKSB7XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuICAgICAgICAvKioqKioqL1xuICAgICAgICBmdW5jdGlvbiBnZXREZWZhdWx0KCkge1xuICAgICAgICAgIHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTtcbiAgICAgICAgfSA6XG4gICAgICAgIC8qKioqKiovXG4gICAgICAgIGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7XG4gICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgfTtcbiAgICAgICAgLyoqKioqKi9cblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gICAgICAgIC8qKioqKiovXG5cblxuICAgICAgICByZXR1cm4gZ2V0dGVyO1xuICAgICAgICAvKioqKioqL1xuICAgICAgfTtcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcblxuICAgICAgLyoqKioqKi9cblxuXG4gICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbiAob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpO1xuICAgICAgfTtcbiAgICAgIC8qKioqKiovXG5cbiAgICAgIC8qKioqKiovXG4gICAgICAvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuXG4gICAgICAvKioqKioqL1xuXG5cbiAgICAgIF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuXG4gICAgICAvKioqKioqL1xuICAgICAgLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5cbiAgICAgIC8qKioqKiovXG5cbiAgICAgIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDQpO1xuICAgICAgLyoqKioqKi9cbiAgICB9KFxuICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAvKioqKioqL1xuICAgIHtcbiAgICAgIC8qKiovXG4gICAgICBcIi4vc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3hcIjpcbiAgICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICAgISoqKiAuL3NyYy9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnQudHN4ICoqKiFcbiAgICAgICAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBleHBvcnRzIHByb3ZpZGVkOiB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MsIHdpdGhBdXRob3JQYW5lbFN3aXRjaCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4gICAgICAgIC8qIGhhcm1vbnkgZXhwb3J0IChiaW5kaW5nKSAqL1xuXG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwid2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByZXR1cm4gd2l0aFN0YW5kYXJkQmFzZUNzc0NsYXNzO1xuICAgICAgICB9KTtcbiAgICAgICAgLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovXG5cblxuICAgICAgICBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywgXCJ3aXRoQXV0aG9yUGFuZWxTd2l0Y2hcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB3aXRoQXV0aG9yUGFuZWxTd2l0Y2g7XG4gICAgICAgIH0pO1xuICAgICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgICAgdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgICAgICAvKiEgcmVhY3QgKi9cbiAgICAgICAgXCJyZWFjdFwiKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuICAgICAgICAvKlxuICAgICAgICAgKiAgQ29weXJpZ2h0IDIwMjAgQWRvYmVcbiAgICAgICAgICpcbiAgICAgICAgICogIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gICAgICAgICAqICB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gICAgICAgICAqICBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAgICAgICAgICpcbiAgICAgICAgICogICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAgICAgICAgICpcbiAgICAgICAgICogIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAgICAgICAgICogIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAgICAgICAgICogIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICAgICAgICAgKiAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICAgICAgICAgKiAgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgY29uc3QgaXNCcm93c2VyID0gKCgpID0+IHtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCB3aXRoU3RhbmRhcmRCYXNlQ3NzQ2xhc3MgPSAoQ29tcG9uZW50LCBkZWZhdWx0QmFzZUNzc0NsYXNzKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHByb3BzID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGJhc2VDc3NDbGFzcyA9IHByb3BzLmJhc2VDc3NDbGFzcztcbiAgICAgICAgICAgIGNvbnN0IHRvQmVVc2VkQ3NzQ2xhc3MgPSBiYXNlQ3NzQ2xhc3MgJiYgYmFzZUNzc0NsYXNzLnRyaW0oKS5sZW5ndGggPiAwID8gYmFzZUNzc0NsYXNzIDogZGVmYXVsdEJhc2VDc3NDbGFzcztcbiAgICAgICAgICAgIGNvbnN0IG1lcmdlZFByb3BzID0geyAuLi5wcm9wcyxcbiAgICAgICAgICAgICAgYmFzZUNzc0NsYXNzOiB0b0JlVXNlZENzc0NsYXNzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19bXCJjcmVhdGVFbGVtZW50XCJdKENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7fSwgbWVyZ2VkUHJvcHMpKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGNvbnN0IHdpdGhBdXRob3JQYW5lbFN3aXRjaCA9IENvbXBvbmVudCA9PiB7XG4gICAgICAgICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX1tcIkNvbXBvbmVudFwiXSB7XG4gICAgICAgICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7fTsgLy9AdHMtaWdub3JlXG5cbiAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlciAmJiB3aW5kb3cuR3Jhbml0ZSAmJiB3aW5kb3cuR3Jhbml0ZS5hdXRob3IgJiYgd2luZG93LkdyYW5pdGUuYXV0aG9yLk1lc3NhZ2VDaGFubmVsKSB7XG4gICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlQ2hhbm5lbCA9IG5ldyB3aW5kb3cuR3Jhbml0ZS5hdXRob3IuTWVzc2FnZUNoYW5uZWwoXCJjcWF1dGhvclwiLCB3aW5kb3cpO1xuICAgICAgICAgICAgICAgIHRoaXMuY2FsbGJhY2sgPSB0aGlzLmNhbGxiYWNrLmJpbmQodGhpcyk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2FsbGJhY2sobWVzc2FnZSkge1xuICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhICYmIG1lc3NhZ2UuZGF0YS5pZCA9PT0gdGhpcy5wcm9wcy5jcVBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS5kYXRhLm9wZXJhdGlvbiA9PT0gXCJuYXZpZ2F0ZVwiKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IG1lc3NhZ2UuZGF0YS5pbmRleDtcbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogaW5kZXhcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgICAgaWYgKHRoaXMubWVzc2FnZUNoYW5uZWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VDaGFubmVsLnN1YnNjcmliZVJlcXVlc3RNZXNzYWdlKFwiY21wLnBhbmVsY29udGFpbmVyXCIsIHRoaXMuY2FsbGJhY2spO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgICAgICAgICAgICBpZiAodGhpcy5tZXNzYWdlQ2hhbm5lbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZUNoYW5uZWwudW5zdWJzY3JpYmVSZXF1ZXN0TWVzc2FnZShcImNtcC5wYW5lbGNvbnRhaW5lclwiLCB0aGlzLmNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZW5kZXIoKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fW1wiY3JlYXRlRWxlbWVudFwiXShDb21wb25lbnQsIE9iamVjdC5hc3NpZ24oe30sIHRoaXMucHJvcHMsIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbDogdGhpcy5zdGF0ZS5hY3RpdmVJbmRleEZyb21BdXRob3JQYW5lbFxuICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICAvKioqL1xuXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgXCIuL3NyYy9jb250YWluZXIvY29udGFpbmVyL3YxL0NvbnRhaW5lclYxLnRzeFwiOlxuICAgICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgICAgICAgISoqKiAuL3NyYy9jb250YWluZXIvY29udGFpbmVyL3YxL0NvbnRhaW5lclYxLnRzeCAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLyohIGV4cG9ydHMgcHJvdmlkZWQ6IGRlZmF1bHQgKi9cblxuICAgICAgLyoqKi9cbiAgICAgIGZ1bmN0aW9uIChtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcbiAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAgICAgX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuICAgICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgICAgdmFyIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFxuICAgICAgICAvKiEgcmVhY3QgKi9cbiAgICAgICAgXCJyZWFjdFwiKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18pO1xuICAgICAgICAvKiBoYXJtb255IGltcG9ydCAqL1xuXG5cbiAgICAgICAgdmFyIF9hZG9iZV9hZW1fcmVhY3RfZWRpdGFibGVfY29tcG9uZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIEBhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50cyAqL1xuICAgICAgICBcIkBhZG9iZS9hZW0tcmVhY3QtZWRpdGFibGUtY29tcG9uZW50c1wiKTtcbiAgICAgICAgLyogaGFybW9ueSBpbXBvcnQgKi9cblxuXG4gICAgICAgIHZhciBfYWRvYmVfYWVtX3JlYWN0X2VkaXRhYmxlX2NvbXBvbmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihfYWRvYmVfYWVtX3JlYWN0X2VkaXRhYmxlX2NvbXBvbmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4gICAgICAgIC8qIGhhcm1vbnkgaW1wb3J0ICovXG5cblxuICAgICAgICB2YXIgX0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcbiAgICAgICAgLyohIC4uLy4uLy4uL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudCAqL1xuICAgICAgICBcIi4vc3JjL0Fic3RyYWN0Q29yZUNvbnRhaW5lckNvbXBvbmVudC50c3hcIik7XG4gICAgICAgIC8qXG4gICAgICAgICAqICBDb3B5cmlnaHQgMjAyMCBBZG9iZVxuICAgICAgICAgKlxuICAgICAgICAgKiAgTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAgICAgICAgICogIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAgICAgICAgICogIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICAgICAgICAgKlxuICAgICAgICAgKiAgICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICAgICAgICAgKlxuICAgICAgICAgKiAgVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuICAgICAgICAgKiAgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuICAgICAgICAgKiAgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4gICAgICAgICAqICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXG4gICAgICAgICAqICBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cbiAgICAgICAgICovXG5cblxuICAgICAgICBjbGFzcyBDb250YWluZXJWMUltcGwgZXh0ZW5kcyBfYWRvYmVfYWVtX3JlYWN0X2VkaXRhYmxlX2NvbXBvbmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIkNvbnRhaW5lclwiXSB7XG4gICAgICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgICAgIHN1cGVyKHByb3BzKTsgLy9AdHMtaWdub3JlXG5cbiAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMucHJvcHMuY29tcG9uZW50TWFwcGluZyB8fCBfYWRvYmVfYWVtX3JlYWN0X2VkaXRhYmxlX2NvbXBvbmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIkNvbXBvbmVudE1hcHBpbmdcIl1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB0aGlzLm1haW5EaXYgPSByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVSZWYoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1haW5EaXYuY3VycmVudCkge1xuICAgICAgICAgICAgICB0aGlzLm1haW5EaXYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5wcm9wcy5iYWNrZ3JvdW5kU3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1haW5EaXYuY3VycmVudCkge1xuICAgICAgICAgICAgICB0aGlzLm1haW5EaXYuY3VycmVudC5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgdGhpcy5wcm9wcy5iYWNrZ3JvdW5kU3R5bGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGdldCBjb3JlQ29udGFpbmVyUHJvcHMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBjbGFzc05hbWU6ICdjb250YWluZXIgcmVzcG9uc2l2ZWdyaWQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJlbmRlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgY29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgICAgYWxsb3dlZENvbXBvbmVudHMsXG4gICAgICAgICAgICAgIGNoaWxkcmVuLFxuICAgICAgICAgICAgICBjcVBhdGgsXG4gICAgICAgICAgICAgIGNxSXRlbXMsXG4gICAgICAgICAgICAgIGNxSXRlbXNPcmRlcixcbiAgICAgICAgICAgICAgaXNJbkVkaXRvcixcbiAgICAgICAgICAgICAgLi4ub3RoZXJQcm9wc1xuICAgICAgICAgICAgfSA9IHRoaXMucHJvcHM7XG4gICAgICAgICAgICBjb25zdCBncmlkUHJvcHMgPSB7XG4gICAgICAgICAgICAgIGFsbG93ZWRDb21wb25lbnRzOiB0aGlzLnByb3BzLmFsbG93ZWRDb21wb25lbnRzLFxuICAgICAgICAgICAgICBncmlkQ2xhc3NOYW1lczogdGhpcy5wcm9wcy5ncmlkQ2xhc3NOYW1lcyxcbiAgICAgICAgICAgICAgY29sdW1uQ2xhc3NOYW1lczogdGhpcy5wcm9wcy5jb2x1bW5DbGFzc05hbWVzLFxuICAgICAgICAgICAgICBjcUl0ZW1zOiB0aGlzLnByb3BzLmNxSXRlbXMsXG4gICAgICAgICAgICAgIGNxSXRlbXNPcmRlcjogdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIlwiLFxuICAgICAgICAgICAgICBjcVBhdGg6IHRoaXMucHJvcHMuY3FQYXRoLFxuICAgICAgICAgICAgICBpc0luRWRpdG9yOiB0aGlzLnByb3BzLmlzSW5FZGl0b3JcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmNvcmVDb250YWluZXJQcm9wcyksIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgICAgICAgICByZWY6IHRoaXMubWFpbkRpdixcbiAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgICAgIGNsYXNzTmFtZTogdGhpcy5wcm9wcy5iYXNlQ3NzQ2xhc3NcbiAgICAgICAgICAgIH0sIHRoaXMucHJvcHMubGF5b3V0ICYmIHRoaXMucHJvcHMubGF5b3V0ID09PSAnc2ltcGxlJyAmJiByZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fX2RlZmF1bHQuYS5jcmVhdGVFbGVtZW50KF9hZG9iZV9hZW1fcmVhY3RfZWRpdGFibGVfY29tcG9uZW50c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMV9fW1wiQ29udGFpbmVyXCJdLCB7XG4gICAgICAgICAgICAgIGNvbXBvbmVudE1hcHBpbmc6IHRoaXMuc3RhdGUuY29tcG9uZW50TWFwcGluZyxcbiAgICAgICAgICAgICAgY3FGb3JjZVJlbG9hZDogdGhpcy5wcm9wcy5jcUZvcmNlUmVsb2FkLFxuICAgICAgICAgICAgICBjcVBhdGg6IHRoaXMucHJvcHMuY3FQYXRoLFxuICAgICAgICAgICAgICBjcUl0ZW1zOiB0aGlzLnByb3BzLmNxSXRlbXMsXG4gICAgICAgICAgICAgIGNxSXRlbXNPcmRlcjogdGhpcy5wcm9wcy5jcUl0ZW1zT3JkZXIsXG4gICAgICAgICAgICAgIGlzSW5FZGl0b3I6IHRoaXMucHJvcHMuaXNJbkVkaXRvclxuICAgICAgICAgICAgfSwgdGhpcy5jaGlsZENvbXBvbmVudHMpLCAoIXRoaXMucHJvcHMubGF5b3V0IHx8IHRoaXMucHJvcHMubGF5b3V0ICE9PSAnc2ltcGxlJykgJiYgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfX19kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChfYWRvYmVfYWVtX3JlYWN0X2VkaXRhYmxlX2NvbXBvbmVudHNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfX1tcIlJlc3BvbnNpdmVHcmlkXCJdLCBPYmplY3QuYXNzaWduKHt9LCBncmlkUHJvcHMpKSkpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIC8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi9cblxuXG4gICAgICAgIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gT2JqZWN0KF9BYnN0cmFjdENvcmVDb250YWluZXJDb21wb25lbnRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX1tcIndpdGhTdGFuZGFyZEJhc2VDc3NDbGFzc1wiXSkoQ29udGFpbmVyVjFJbXBsLCBcImNtcC1jb250YWluZXJcIik7XG4gICAgICAgIC8qKiovXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgNDpcbiAgICAgIC8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICAgICAgICEqKiogbXVsdGkgLi9zcmMvY29udGFpbmVyL2NvbnRhaW5lci92MS9Db250YWluZXJWMS50c3ggKioqIVxuICAgICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oXG4gICAgICAgIC8qISAuL3NyYy9jb250YWluZXIvY29udGFpbmVyL3YxL0NvbnRhaW5lclYxLnRzeCAqL1xuICAgICAgICBcIi4vc3JjL2NvbnRhaW5lci9jb250YWluZXIvdjEvQ29udGFpbmVyVjEudHN4XCIpO1xuICAgICAgICAvKioqL1xuICAgICAgfSxcblxuICAgICAgLyoqKi9cbiAgICAgIFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCI6XG4gICAgICAvKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgICAhKioqIGV4dGVybmFsIFwiQGFkb2JlL2FlbS1yZWFjdC1lZGl0YWJsZS1jb21wb25lbnRzXCIgKioqIVxuICAgICAgICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5cbiAgICAgIC8qISBubyBzdGF0aWMgZXhwb3J0cyBmb3VuZCAqL1xuXG4gICAgICAvKioqL1xuICAgICAgZnVuY3Rpb24gKG1vZHVsZSwgZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYWRvYmUvYWVtLXJlYWN0LWVkaXRhYmxlLWNvbXBvbmVudHNcIik7XG4gICAgICAgIC8qKiovXG4gICAgICB9LFxuXG4gICAgICAvKioqL1xuICAgICAgXCJyZWFjdFwiOlxuICAgICAgLyohKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAgICAgICAhKioqIGV4dGVybmFsIFwicmVhY3RcIiAqKiohXG4gICAgICAgIFxcKioqKioqKioqKioqKioqKioqKioqKioqL1xuXG4gICAgICAvKiEgbm8gc3RhdGljIGV4cG9ydHMgZm91bmQgKi9cblxuICAgICAgLyoqKi9cbiAgICAgIGZ1bmN0aW9uIChtb2R1bGUsIGV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG4gICAgICAgIC8qKiovXG4gICAgICB9XG4gICAgICAvKioqKioqL1xuXG4gICAgfSlcbiAgKTtcbn0pOyAvLyMgc291cmNlTWFwcGluZ1VSTD1Db250YWluZXJWMS5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9
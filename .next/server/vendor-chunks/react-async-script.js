"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-async-script";
exports.ids = ["vendor-chunks/react-async-script"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-async-script/lib/esm/async-script-loader.js":
/*!************************************************************************!*\
  !*** ./node_modules/react-async-script/lib/esm/async-script-loader.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ makeAsyncScript)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ \"(ssr)/./node_modules/prop-types/index.js\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hoist-non-react-statics */ \"(ssr)/./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js\");\n/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1__);\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\nfunction _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }\n\n\n\n\nvar SCRIPT_MAP = {}; // A counter used to generate a unique id for each component that uses the function\n\nvar idCount = 0;\nfunction makeAsyncScript(getScriptURL, options) {\n  options = options || {};\n  return function wrapWithAsyncScript(WrappedComponent) {\n    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || \"Component\";\n\n    var AsyncScriptLoader =\n    /*#__PURE__*/\n    function (_Component) {\n      _inheritsLoose(AsyncScriptLoader, _Component);\n\n      function AsyncScriptLoader(props, context) {\n        var _this;\n\n        _this = _Component.call(this, props, context) || this;\n        _this.state = {};\n        _this.__scriptURL = \"\";\n        return _this;\n      }\n\n      var _proto = AsyncScriptLoader.prototype;\n\n      _proto.asyncScriptLoaderGetScriptLoaderID = function asyncScriptLoaderGetScriptLoaderID() {\n        if (!this.__scriptLoaderID) {\n          this.__scriptLoaderID = \"async-script-loader-\" + idCount++;\n        }\n\n        return this.__scriptLoaderID;\n      };\n\n      _proto.setupScriptURL = function setupScriptURL() {\n        this.__scriptURL = typeof getScriptURL === \"function\" ? getScriptURL() : getScriptURL;\n        return this.__scriptURL;\n      };\n\n      _proto.asyncScriptLoaderHandleLoad = function asyncScriptLoaderHandleLoad(state) {\n        var _this2 = this;\n\n        // use reacts setState callback to fire props.asyncScriptOnLoad with new state/entry\n        this.setState(state, function () {\n          return _this2.props.asyncScriptOnLoad && _this2.props.asyncScriptOnLoad(_this2.state);\n        });\n      };\n\n      _proto.asyncScriptLoaderTriggerOnScriptLoaded = function asyncScriptLoaderTriggerOnScriptLoaded() {\n        var mapEntry = SCRIPT_MAP[this.__scriptURL];\n\n        if (!mapEntry || !mapEntry.loaded) {\n          throw new Error(\"Script is not loaded.\");\n        }\n\n        for (var obsKey in mapEntry.observers) {\n          mapEntry.observers[obsKey](mapEntry);\n        }\n\n        delete window[options.callbackName];\n      };\n\n      _proto.componentDidMount = function componentDidMount() {\n        var _this3 = this;\n\n        var scriptURL = this.setupScriptURL();\n        var key = this.asyncScriptLoaderGetScriptLoaderID();\n        var _options = options,\n            globalName = _options.globalName,\n            callbackName = _options.callbackName,\n            scriptId = _options.scriptId; // check if global object already attached to window\n\n        if (globalName && typeof window[globalName] !== \"undefined\") {\n          SCRIPT_MAP[scriptURL] = {\n            loaded: true,\n            observers: {}\n          };\n        } // check if script loading already\n\n\n        if (SCRIPT_MAP[scriptURL]) {\n          var entry = SCRIPT_MAP[scriptURL]; // if loaded or errored then \"finish\"\n\n          if (entry && (entry.loaded || entry.errored)) {\n            this.asyncScriptLoaderHandleLoad(entry);\n            return;\n          } // if still loading then callback to observer queue\n\n\n          entry.observers[key] = function (entry) {\n            return _this3.asyncScriptLoaderHandleLoad(entry);\n          };\n\n          return;\n        }\n        /*\n         * hasn't started loading\n         * start the \"magic\"\n         * setup script to load and observers\n         */\n\n\n        var observers = {};\n\n        observers[key] = function (entry) {\n          return _this3.asyncScriptLoaderHandleLoad(entry);\n        };\n\n        SCRIPT_MAP[scriptURL] = {\n          loaded: false,\n          observers: observers\n        };\n        var script = document.createElement(\"script\");\n        script.src = scriptURL;\n        script.async = true;\n\n        for (var attribute in options.attributes) {\n          script.setAttribute(attribute, options.attributes[attribute]);\n        }\n\n        if (scriptId) {\n          script.id = scriptId;\n        }\n\n        var callObserverFuncAndRemoveObserver = function callObserverFuncAndRemoveObserver(func) {\n          if (SCRIPT_MAP[scriptURL]) {\n            var mapEntry = SCRIPT_MAP[scriptURL];\n            var observersMap = mapEntry.observers;\n\n            for (var obsKey in observersMap) {\n              if (func(observersMap[obsKey])) {\n                delete observersMap[obsKey];\n              }\n            }\n          }\n        };\n\n        if (callbackName && typeof window !== \"undefined\") {\n          window[callbackName] = function () {\n            return _this3.asyncScriptLoaderTriggerOnScriptLoaded();\n          };\n        }\n\n        script.onload = function () {\n          var mapEntry = SCRIPT_MAP[scriptURL];\n\n          if (mapEntry) {\n            mapEntry.loaded = true;\n            callObserverFuncAndRemoveObserver(function (observer) {\n              if (callbackName) {\n                return false;\n              }\n\n              observer(mapEntry);\n              return true;\n            });\n          }\n        };\n\n        script.onerror = function () {\n          var mapEntry = SCRIPT_MAP[scriptURL];\n\n          if (mapEntry) {\n            mapEntry.errored = true;\n            callObserverFuncAndRemoveObserver(function (observer) {\n              observer(mapEntry);\n              return true;\n            });\n          }\n        };\n\n        document.body.appendChild(script);\n      };\n\n      _proto.componentWillUnmount = function componentWillUnmount() {\n        // Remove tag script\n        var scriptURL = this.__scriptURL;\n\n        if (options.removeOnUnmount === true) {\n          var allScripts = document.getElementsByTagName(\"script\");\n\n          for (var i = 0; i < allScripts.length; i += 1) {\n            if (allScripts[i].src.indexOf(scriptURL) > -1) {\n              if (allScripts[i].parentNode) {\n                allScripts[i].parentNode.removeChild(allScripts[i]);\n              }\n            }\n          }\n        } // Clean the observer entry\n\n\n        var mapEntry = SCRIPT_MAP[scriptURL];\n\n        if (mapEntry) {\n          delete mapEntry.observers[this.asyncScriptLoaderGetScriptLoaderID()];\n\n          if (options.removeOnUnmount === true) {\n            delete SCRIPT_MAP[scriptURL];\n          }\n        }\n      };\n\n      _proto.render = function render() {\n        var globalName = options.globalName; // remove asyncScriptOnLoad from childProps\n\n        var _this$props = this.props,\n            asyncScriptOnLoad = _this$props.asyncScriptOnLoad,\n            forwardedRef = _this$props.forwardedRef,\n            childProps = _objectWithoutPropertiesLoose(_this$props, [\"asyncScriptOnLoad\", \"forwardedRef\"]); // eslint-disable-line no-unused-vars\n\n\n        if (globalName && typeof window !== \"undefined\") {\n          childProps[globalName] = typeof window[globalName] !== \"undefined\" ? window[globalName] : undefined;\n        }\n\n        childProps.ref = forwardedRef;\n        return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(WrappedComponent, childProps);\n      };\n\n      return AsyncScriptLoader;\n    }(react__WEBPACK_IMPORTED_MODULE_0__.Component); // Note the second param \"ref\" provided by React.forwardRef.\n    // We can pass it along to AsyncScriptLoader as a regular prop, e.g. \"forwardedRef\"\n    // And it can then be attached to the Component.\n\n\n    var ForwardedComponent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (props, ref) {\n      return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(AsyncScriptLoader, _extends({}, props, {\n        forwardedRef: ref\n      }));\n    });\n    ForwardedComponent.displayName = \"AsyncScriptLoader(\" + wrappedComponentName + \")\";\n    ForwardedComponent.propTypes = {\n      asyncScriptOnLoad: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().func)\n    };\n    return hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_1___default()(ForwardedComponent, WrappedComponent);\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtYXN5bmMtc2NyaXB0L2xpYi9lc20vYXN5bmMtc2NyaXB0LWxvYWRlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0JBQXNCLGdEQUFnRCxnQkFBZ0Isc0JBQXNCLE9BQU8sMkJBQTJCLDBCQUEwQix5REFBeUQsaUNBQWlDLGtCQUFrQjs7QUFFcFIsMkRBQTJELCtCQUErQixpQkFBaUIsc0NBQXNDLFlBQVksWUFBWSx1QkFBdUIsT0FBTyxxQkFBcUIsMENBQTBDLDZCQUE2Qjs7QUFFblMsZ0RBQWdELDBEQUEwRCwyQ0FBMkM7O0FBRXhGO0FBQzFCO0FBQ2dCO0FBQ25ELHFCQUFxQjs7QUFFckI7QUFDZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7O0FBRTFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVOzs7QUFHVjtBQUNBLDZDQUE2Qzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0EsWUFBWTs7O0FBR1o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQix1QkFBdUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTs7O0FBR1Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkNBQTZDOztBQUU3QztBQUNBO0FBQ0E7QUFDQSw0R0FBNEc7OztBQUc1RztBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLG9EQUFhO0FBQzVCOztBQUVBO0FBQ0EsS0FBSyxDQUFDLDRDQUFTLEdBQUc7QUFDbEI7QUFDQTs7O0FBR0EsNkJBQTZCLGlEQUFVO0FBQ3ZDLGFBQWEsb0RBQWEsK0JBQStCO0FBQ3pEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EseUJBQXlCLHdEQUFjO0FBQ3ZDO0FBQ0EsV0FBVyw4REFBWTtBQUN2QjtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV2ZWxvcGVyLXBvcnRmb2xpby8uL25vZGVfbW9kdWxlcy9yZWFjdC1hc3luYy1zY3JpcHQvbGliL2VzbS9hc3luYy1zY3JpcHQtbG9hZGVyLmpzPzgyMTIiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2V4dGVuZHMoKSB7IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTsgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkgeyBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTsgdmFyIHRhcmdldCA9IHt9OyB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7IHZhciBrZXksIGk7IGZvciAoaSA9IDA7IGkgPCBzb3VyY2VLZXlzLmxlbmd0aDsgaSsrKSB7IGtleSA9IHNvdXJjZUtleXNbaV07IGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHNMb29zZShzdWJDbGFzcywgc3VwZXJDbGFzcykgeyBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MucHJvdG90eXBlKTsgc3ViQ2xhc3MucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gc3ViQ2xhc3M7IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuaW1wb3J0IHsgQ29tcG9uZW50LCBjcmVhdGVFbGVtZW50LCBmb3J3YXJkUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgaG9pc3RTdGF0aWNzIGZyb20gXCJob2lzdC1ub24tcmVhY3Qtc3RhdGljc1wiO1xudmFyIFNDUklQVF9NQVAgPSB7fTsgLy8gQSBjb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgYSB1bmlxdWUgaWQgZm9yIGVhY2ggY29tcG9uZW50IHRoYXQgdXNlcyB0aGUgZnVuY3Rpb25cblxudmFyIGlkQ291bnQgPSAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWFrZUFzeW5jU2NyaXB0KGdldFNjcmlwdFVSTCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHdyYXBXaXRoQXN5bmNTY3JpcHQoV3JhcHBlZENvbXBvbmVudCkge1xuICAgIHZhciB3cmFwcGVkQ29tcG9uZW50TmFtZSA9IFdyYXBwZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgV3JhcHBlZENvbXBvbmVudC5uYW1lIHx8IFwiQ29tcG9uZW50XCI7XG5cbiAgICB2YXIgQXN5bmNTY3JpcHRMb2FkZXIgPVxuICAgIC8qI19fUFVSRV9fKi9cbiAgICBmdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICAgICAgX2luaGVyaXRzTG9vc2UoQXN5bmNTY3JpcHRMb2FkZXIsIF9Db21wb25lbnQpO1xuXG4gICAgICBmdW5jdGlvbiBBc3luY1NjcmlwdExvYWRlcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICB2YXIgX3RoaXM7XG5cbiAgICAgICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMsIGNvbnRleHQpIHx8IHRoaXM7XG4gICAgICAgIF90aGlzLnN0YXRlID0ge307XG4gICAgICAgIF90aGlzLl9fc2NyaXB0VVJMID0gXCJcIjtcbiAgICAgICAgcmV0dXJuIF90aGlzO1xuICAgICAgfVxuXG4gICAgICB2YXIgX3Byb3RvID0gQXN5bmNTY3JpcHRMb2FkZXIucHJvdG90eXBlO1xuXG4gICAgICBfcHJvdG8uYXN5bmNTY3JpcHRMb2FkZXJHZXRTY3JpcHRMb2FkZXJJRCA9IGZ1bmN0aW9uIGFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQoKSB7XG4gICAgICAgIGlmICghdGhpcy5fX3NjcmlwdExvYWRlcklEKSB7XG4gICAgICAgICAgdGhpcy5fX3NjcmlwdExvYWRlcklEID0gXCJhc3luYy1zY3JpcHQtbG9hZGVyLVwiICsgaWRDb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX19zY3JpcHRMb2FkZXJJRDtcbiAgICAgIH07XG5cbiAgICAgIF9wcm90by5zZXR1cFNjcmlwdFVSTCA9IGZ1bmN0aW9uIHNldHVwU2NyaXB0VVJMKCkge1xuICAgICAgICB0aGlzLl9fc2NyaXB0VVJMID0gdHlwZW9mIGdldFNjcmlwdFVSTCA9PT0gXCJmdW5jdGlvblwiID8gZ2V0U2NyaXB0VVJMKCkgOiBnZXRTY3JpcHRVUkw7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2NyaXB0VVJMO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZCA9IGZ1bmN0aW9uIGFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChzdGF0ZSkge1xuICAgICAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgICAgICAvLyB1c2UgcmVhY3RzIHNldFN0YXRlIGNhbGxiYWNrIHRvIGZpcmUgcHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQgd2l0aCBuZXcgc3RhdGUvZW50cnlcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczIucHJvcHMuYXN5bmNTY3JpcHRPbkxvYWQgJiYgX3RoaXMyLnByb3BzLmFzeW5jU2NyaXB0T25Mb2FkKF90aGlzMi5zdGF0ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmFzeW5jU2NyaXB0TG9hZGVyVHJpZ2dlck9uU2NyaXB0TG9hZGVkID0gZnVuY3Rpb24gYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQoKSB7XG4gICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbdGhpcy5fX3NjcmlwdFVSTF07XG5cbiAgICAgICAgaWYgKCFtYXBFbnRyeSB8fCAhbWFwRW50cnkubG9hZGVkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2NyaXB0IGlzIG5vdCBsb2FkZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgb2JzS2V5IGluIG1hcEVudHJ5Lm9ic2VydmVycykge1xuICAgICAgICAgIG1hcEVudHJ5Lm9ic2VydmVyc1tvYnNLZXldKG1hcEVudHJ5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSB3aW5kb3dbb3B0aW9ucy5jYWxsYmFja05hbWVdO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xuXG4gICAgICAgIHZhciBzY3JpcHRVUkwgPSB0aGlzLnNldHVwU2NyaXB0VVJMKCk7XG4gICAgICAgIHZhciBrZXkgPSB0aGlzLmFzeW5jU2NyaXB0TG9hZGVyR2V0U2NyaXB0TG9hZGVySUQoKTtcbiAgICAgICAgdmFyIF9vcHRpb25zID0gb3B0aW9ucyxcbiAgICAgICAgICAgIGdsb2JhbE5hbWUgPSBfb3B0aW9ucy5nbG9iYWxOYW1lLFxuICAgICAgICAgICAgY2FsbGJhY2tOYW1lID0gX29wdGlvbnMuY2FsbGJhY2tOYW1lLFxuICAgICAgICAgICAgc2NyaXB0SWQgPSBfb3B0aW9ucy5zY3JpcHRJZDsgLy8gY2hlY2sgaWYgZ2xvYmFsIG9iamVjdCBhbHJlYWR5IGF0dGFjaGVkIHRvIHdpbmRvd1xuXG4gICAgICAgIGlmIChnbG9iYWxOYW1lICYmIHR5cGVvZiB3aW5kb3dbZ2xvYmFsTmFtZV0gIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBTQ1JJUFRfTUFQW3NjcmlwdFVSTF0gPSB7XG4gICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcnM6IHt9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSAvLyBjaGVjayBpZiBzY3JpcHQgbG9hZGluZyBhbHJlYWR5XG5cblxuICAgICAgICBpZiAoU0NSSVBUX01BUFtzY3JpcHRVUkxdKSB7XG4gICAgICAgICAgdmFyIGVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdOyAvLyBpZiBsb2FkZWQgb3IgZXJyb3JlZCB0aGVuIFwiZmluaXNoXCJcblxuICAgICAgICAgIGlmIChlbnRyeSAmJiAoZW50cnkubG9hZGVkIHx8IGVudHJ5LmVycm9yZWQpKSB7XG4gICAgICAgICAgICB0aGlzLmFzeW5jU2NyaXB0TG9hZGVySGFuZGxlTG9hZChlbnRyeSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfSAvLyBpZiBzdGlsbCBsb2FkaW5nIHRoZW4gY2FsbGJhY2sgdG8gb2JzZXJ2ZXIgcXVldWVcblxuXG4gICAgICAgICAgZW50cnkub2JzZXJ2ZXJzW2tleV0gPSBmdW5jdGlvbiAoZW50cnkpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuYXN5bmNTY3JpcHRMb2FkZXJIYW5kbGVMb2FkKGVudHJ5KTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8qXG4gICAgICAgICAqIGhhc24ndCBzdGFydGVkIGxvYWRpbmdcbiAgICAgICAgICogc3RhcnQgdGhlIFwibWFnaWNcIlxuICAgICAgICAgKiBzZXR1cCBzY3JpcHQgdG8gbG9hZCBhbmQgb2JzZXJ2ZXJzXG4gICAgICAgICAqL1xuXG5cbiAgICAgICAgdmFyIG9ic2VydmVycyA9IHt9O1xuXG4gICAgICAgIG9ic2VydmVyc1trZXldID0gZnVuY3Rpb24gKGVudHJ5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMy5hc3luY1NjcmlwdExvYWRlckhhbmRsZUxvYWQoZW50cnkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIFNDUklQVF9NQVBbc2NyaXB0VVJMXSA9IHtcbiAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgIG9ic2VydmVyczogb2JzZXJ2ZXJzXG4gICAgICAgIH07XG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICBzY3JpcHQuc3JjID0gc2NyaXB0VVJMO1xuICAgICAgICBzY3JpcHQuYXN5bmMgPSB0cnVlO1xuXG4gICAgICAgIGZvciAodmFyIGF0dHJpYnV0ZSBpbiBvcHRpb25zLmF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKGF0dHJpYnV0ZSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2F0dHJpYnV0ZV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNjcmlwdElkKSB7XG4gICAgICAgICAgc2NyaXB0LmlkID0gc2NyaXB0SWQ7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyID0gZnVuY3Rpb24gY2FsbE9ic2VydmVyRnVuY0FuZFJlbW92ZU9ic2VydmVyKGZ1bmMpIHtcbiAgICAgICAgICBpZiAoU0NSSVBUX01BUFtzY3JpcHRVUkxdKSB7XG4gICAgICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG4gICAgICAgICAgICB2YXIgb2JzZXJ2ZXJzTWFwID0gbWFwRW50cnkub2JzZXJ2ZXJzO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBvYnNLZXkgaW4gb2JzZXJ2ZXJzTWFwKSB7XG4gICAgICAgICAgICAgIGlmIChmdW5jKG9ic2VydmVyc01hcFtvYnNLZXldKSkge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBvYnNlcnZlcnNNYXBbb2JzS2V5XTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoY2FsbGJhY2tOYW1lICYmIHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICB3aW5kb3dbY2FsbGJhY2tOYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpczMuYXN5bmNTY3JpcHRMb2FkZXJUcmlnZ2VyT25TY3JpcHRMb2FkZWQoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9XG5cbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgbWFwRW50cnkgPSBTQ1JJUFRfTUFQW3NjcmlwdFVSTF07XG5cbiAgICAgICAgICBpZiAobWFwRW50cnkpIHtcbiAgICAgICAgICAgIG1hcEVudHJ5LmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIGlmIChjYWxsYmFja05hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBvYnNlcnZlcihtYXBFbnRyeSk7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciBtYXBFbnRyeSA9IFNDUklQVF9NQVBbc2NyaXB0VVJMXTtcblxuICAgICAgICAgIGlmIChtYXBFbnRyeSkge1xuICAgICAgICAgICAgbWFwRW50cnkuZXJyb3JlZCA9IHRydWU7XG4gICAgICAgICAgICBjYWxsT2JzZXJ2ZXJGdW5jQW5kUmVtb3ZlT2JzZXJ2ZXIoZnVuY3Rpb24gKG9ic2VydmVyKSB7XG4gICAgICAgICAgICAgIG9ic2VydmVyKG1hcEVudHJ5KTtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIC8vIFJlbW92ZSB0YWcgc2NyaXB0XG4gICAgICAgIHZhciBzY3JpcHRVUkwgPSB0aGlzLl9fc2NyaXB0VVJMO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnJlbW92ZU9uVW5tb3VudCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIHZhciBhbGxTY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbFNjcmlwdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChhbGxTY3JpcHRzW2ldLnNyYy5pbmRleE9mKHNjcmlwdFVSTCkgPiAtMSkge1xuICAgICAgICAgICAgICBpZiAoYWxsU2NyaXB0c1tpXS5wYXJlbnROb2RlKSB7XG4gICAgICAgICAgICAgICAgYWxsU2NyaXB0c1tpXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGFsbFNjcmlwdHNbaV0pO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIENsZWFuIHRoZSBvYnNlcnZlciBlbnRyeVxuXG5cbiAgICAgICAgdmFyIG1hcEVudHJ5ID0gU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuXG4gICAgICAgIGlmIChtYXBFbnRyeSkge1xuICAgICAgICAgIGRlbGV0ZSBtYXBFbnRyeS5vYnNlcnZlcnNbdGhpcy5hc3luY1NjcmlwdExvYWRlckdldFNjcmlwdExvYWRlcklEKCldO1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMucmVtb3ZlT25Vbm1vdW50ID09PSB0cnVlKSB7XG4gICAgICAgICAgICBkZWxldGUgU0NSSVBUX01BUFtzY3JpcHRVUkxdO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICAgICAgdmFyIGdsb2JhbE5hbWUgPSBvcHRpb25zLmdsb2JhbE5hbWU7IC8vIHJlbW92ZSBhc3luY1NjcmlwdE9uTG9hZCBmcm9tIGNoaWxkUHJvcHNcblxuICAgICAgICB2YXIgX3RoaXMkcHJvcHMgPSB0aGlzLnByb3BzLFxuICAgICAgICAgICAgYXN5bmNTY3JpcHRPbkxvYWQgPSBfdGhpcyRwcm9wcy5hc3luY1NjcmlwdE9uTG9hZCxcbiAgICAgICAgICAgIGZvcndhcmRlZFJlZiA9IF90aGlzJHByb3BzLmZvcndhcmRlZFJlZixcbiAgICAgICAgICAgIGNoaWxkUHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wiYXN5bmNTY3JpcHRPbkxvYWRcIiwgXCJmb3J3YXJkZWRSZWZcIl0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG5cblxuICAgICAgICBpZiAoZ2xvYmFsTmFtZSAmJiB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgY2hpbGRQcm9wc1tnbG9iYWxOYW1lXSA9IHR5cGVvZiB3aW5kb3dbZ2xvYmFsTmFtZV0gIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3dbZ2xvYmFsTmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgIH1cblxuICAgICAgICBjaGlsZFByb3BzLnJlZiA9IGZvcndhcmRlZFJlZjtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgY2hpbGRQcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQXN5bmNTY3JpcHRMb2FkZXI7XG4gICAgfShDb21wb25lbnQpOyAvLyBOb3RlIHRoZSBzZWNvbmQgcGFyYW0gXCJyZWZcIiBwcm92aWRlZCBieSBSZWFjdC5mb3J3YXJkUmVmLlxuICAgIC8vIFdlIGNhbiBwYXNzIGl0IGFsb25nIHRvIEFzeW5jU2NyaXB0TG9hZGVyIGFzIGEgcmVndWxhciBwcm9wLCBlLmcuIFwiZm9yd2FyZGVkUmVmXCJcbiAgICAvLyBBbmQgaXQgY2FuIHRoZW4gYmUgYXR0YWNoZWQgdG8gdGhlIENvbXBvbmVudC5cblxuXG4gICAgdmFyIEZvcndhcmRlZENvbXBvbmVudCA9IGZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICAgIHJldHVybiBjcmVhdGVFbGVtZW50KEFzeW5jU2NyaXB0TG9hZGVyLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHtcbiAgICAgICAgZm9yd2FyZGVkUmVmOiByZWZcbiAgICAgIH0pKTtcbiAgICB9KTtcbiAgICBGb3J3YXJkZWRDb21wb25lbnQuZGlzcGxheU5hbWUgPSBcIkFzeW5jU2NyaXB0TG9hZGVyKFwiICsgd3JhcHBlZENvbXBvbmVudE5hbWUgKyBcIilcIjtcbiAgICBGb3J3YXJkZWRDb21wb25lbnQucHJvcFR5cGVzID0ge1xuICAgICAgYXN5bmNTY3JpcHRPbkxvYWQ6IFByb3BUeXBlcy5mdW5jXG4gICAgfTtcbiAgICByZXR1cm4gaG9pc3RTdGF0aWNzKEZvcndhcmRlZENvbXBvbmVudCwgV3JhcHBlZENvbXBvbmVudCk7XG4gIH07XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-async-script/lib/esm/async-script-loader.js\n");

/***/ })

};
;
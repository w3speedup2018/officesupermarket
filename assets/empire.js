/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		36: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"0":"vendors-DynamicBlogPosts-DynamicFeaturedCollection-DynamicInstagramFeed-DynamicTwitterFeed-StaticCol-09aa5aa9","1":"DynamicFeaturedCollection-StaticCollection-StaticProduct-StaticProductRecommendations-StaticSearch","2":"vendors-DynamicFeaturedCollection-StaticCollection-StaticProduct-StaticProductRecommendations-StaticSearch","3":"DynamicFeaturedCollection-StaticCollection-StaticProductRecommendations-StaticSearch","4":"DynamicSearch-StaticHeader","5":"vendors-DynamicSearch-StaticHeader","6":"Account","7":"Contact","8":"ContainSwatchTooltips","9":"DynamicBlogPosts","10":"DynamicFeaturedCollection","11":"DynamicInstagramFeed","12":"DynamicMenuList","13":"DynamicNewsletter","14":"DynamicPromoBlocks","15":"DynamicRichText","16":"DynamicSearch","17":"DynamicTwitterFeed","18":"DynamicVideo","19":"GiftCard","20":"PXSMap","21":"Page","22":"StaticAnnouncement","23":"StaticArticle","24":"StaticBlog","25":"StaticCart","26":"StaticCollection","27":"StaticFooter","28":"StaticHeader","29":"StaticHighlightsBanners","30":"StaticPassword","31":"StaticProduct","32":"StaticProductRecommendations","33":"StaticRecentlyViewed","34":"StaticSearch","35":"StaticSlideshow","37":"vendors-StaticCart"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 	  const bundles = { '0': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/vendors-DynamicBlogPosts-DynamicFeaturedCollection-DynamicInstagramFeed-DynamicTwitterFeed-StaticCol-09aa5aa9.bundle.js?v=93247682346006884431688033307','11': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicInstagramFeed.bundle.js?v=82261626839197843451688033307','17': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicTwitterFeed.bundle.js?v=83592189350648622561688033307','2': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/vendors-DynamicFeaturedCollection-StaticCollection-StaticProduct-StaticProductRecommendations-StaticSearch.bundle.js?v=132299743837979098861688033307','1': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicFeaturedCollection-StaticCollection-StaticProduct-StaticProductRecommendations-StaticSearch.bundle.js?v=65825820127777742401688033307','3': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicFeaturedCollection-StaticCollection-StaticProductRecommendations-StaticSearch.bundle.js?v=161755861142274917131688033307','10': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicFeaturedCollection.bundle.js?v=3980514495204690901688033307','26': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticCollection.bundle.js?v=121070345804156320301688033307','32': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticProductRecommendations.bundle.js?v=38502666680462283961688033307','34': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticSearch.bundle.js?v=8007699097934529601688033307','31': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticProduct.bundle.js?v=68109855393849953591688033307','29': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticHighlightsBanners.bundle.js?v=54381311851228602491688033307','33': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticRecentlyViewed.bundle.js?v=99620711959357059541688033307','35': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticSlideshow.bundle.js?v=27332112742114675461688033307','9': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicBlogPosts.bundle.js?v=15937608908701057121688033307','12': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicMenuList.bundle.js?v=170021137598519386191688033307','13': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicNewsletter.bundle.js?v=154144007980651550601688033307','14': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicPromoBlocks.bundle.js?v=69948068982977509321688033307','15': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicRichText.bundle.js?v=151650695514048847841688033307','18': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicVideo.bundle.js?v=10778740264846705581688033307','19': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/GiftCard.bundle.js?v=108720334823731942491688033307','20': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/PXSMap.bundle.js?v=34955591683517707261688033307','21': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/Page.bundle.js?v=130925894117906972641688033307','22': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticAnnouncement.bundle.js?v=61845286072443853561688033307','23': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticArticle.bundle.js?v=35356024476013757771688033307','24': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticBlog.bundle.js?v=42734289127559458641688033307','27': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticFooter.bundle.js?v=20369977009660616191688033307','30': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticPassword.bundle.js?v=20937405789698780981688033307','37': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/vendors-StaticCart.bundle.js?v=142791055196190010991688033307','25': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticCart.bundle.js?v=19607739830015067791688033307','5': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/vendors-DynamicSearch-StaticHeader.bundle.js?v=14880666089420689891688033307','4': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicSearch-StaticHeader.bundle.js?v=120935098869403988391688033307','16': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/DynamicSearch.bundle.js?v=78699253504472646201688033307','28': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/StaticHeader.bundle.js?v=30118691114470568701688033307','6': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/Account.bundle.js?v=70740910335984054451688033307','7': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/Contact.bundle.js?v=75595974926755698221688033307','8': '//cdn.shopify.com/s/files/1/0254/6473/3747/t/41/assets/ContainSwatchTooltips.bundle.js?v=68562669373204758221688033307' };
/******/ 	  return bundles[chunkId];
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([5,38]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/jquery/dist/jquery.js
var jquery = __webpack_require__(0);
var jquery_default = /*#__PURE__*/__webpack_require__.n(jquery);

// CONCATENATED MODULE: ./source/scripts/globals/jquery.js
// jQuery plugins expect to find a global `jQuery` object, so we
// need to attach it to the window.
//
// This is in its own file because we have to attach it before any
// other imports happen, but with ES6 modules, all `import`s have
// to be at the top.

window.jQuery = jquery_default.a;
window.$ = jquery_default.a;
// EXTERNAL MODULE: ./node_modules/jquery-trend/jquery.trend.js
var jquery_trend = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/jquery-revealer/jquery.revealer.js
var jquery_revealer = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/scriptjs/dist/script.js
var script = __webpack_require__(1);
var script_default = /*#__PURE__*/__webpack_require__.n(script);

// EXTERNAL MODULE: ./node_modules/rimg-shopify/dist/index.es.js + 1 modules
var index_es = __webpack_require__(2);

// CONCATENATED MODULE: ./source/scripts/Sections.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Allows a callback to be run once, when a target intersects the viewport.
 * @constructor
 * @param {Object} [options] options with which to construct the IntersectionObserver
 * @param {string} [options.rootMargin='30%'] A string which specifies a set of offsets to add to
 *                                          the root's bounding_box when calculating intersections.
 * @param {number} [options.threshold=0] Ratio of intersection required to trigger callback
 */
var LazyLoader =
/*#__PURE__*/
function () {
  function LazyLoader(options) {
    _classCallCheck(this, LazyLoader);

    var defaultOptions = {
      rootMargin: '30%',
      threshold: 0
    };
    this.callbacks = new WeakMap();
    this._observerCallback = this._observerCallback.bind(this);
    this.observer = new IntersectionObserver(this._observerCallback, _objectSpread({}, defaultOptions, {}, options));
  }
  /**
   * Add target and callback. Callback is only run once.
   * @add
   * @param {HTMLElement} target Target element
   * @param {function} callback Callback to run when target begins intersecting
   */


  _createClass(LazyLoader, [{
    key: "add",
    value: function add(target, callback) {
      this.callbacks.set(target, callback);
      this.observer.observe(target);
    }
    /**
     * Remove target. Associated callback is also removed.
     * @remove
     * @param {HTMLElement} target Target element
     */

  }, {
    key: "remove",
    value: function remove(target) {
      this.observer.unobserve(target);
      this.callbacks.delete(target);
    }
    /**
     * Disconnects IntersectionObserver if active
     * @unload
     */

  }, {
    key: "unload",
    value: function unload() {
      this.observer.disconnect();
    }
    /**
     * Runs associated callbacks for each entry, then removes that entry and callback
     * @_observerCallback
     * @param {IntersectionObserverEntry[]} entries Entries to check
     * @param {InterserctionObserver} observer IntersectionObserver instance
     */

  }, {
    key: "_observerCallback",
    value: function _observerCallback(entries, observer) {
      var _this = this;

      entries.forEach(function (_ref) {
        var isIntersecting = _ref.isIntersecting,
            target = _ref.target;

        // do nothing unless target moved into state of intersection
        if (isIntersecting === true) {
          // make sure we stop observing before running the callback, so we don't
          // somehow run the callback twice if element intersects twice quickly
          observer.unobserve(target);

          var callback = _this.callbacks.get(target);

          if (typeof callback === 'function') {
            callback();
          }

          _this.callbacks.delete(target);
        }
      });
    }
  }]);

  return LazyLoader;
}();

var Sections =
/*#__PURE__*/
function () {
  function Sections() {
    _classCallCheck(this, Sections);

    this.handlers = {};
    this.instances = {};
    this.options = {};
    this.imports = {};
    this.lazyLoader = null;
    this._onSectionEvent = this._onSectionEvent.bind(this);
    document.addEventListener('shopify:section:load', this._onSectionEvent);
    document.addEventListener('shopify:section:unload', this._onSectionEvent);
    document.addEventListener('shopify:section:select', this._onSectionEvent);
    document.addEventListener('shopify:section:deselect', this._onSectionEvent);
    document.addEventListener('shopify:block:select', this._onSectionEvent);
    document.addEventListener('shopify:block:deselect', this._onSectionEvent);
  }
  /**
   * Stop listening for section events, and unbind all handlers.
   */


  _createClass(Sections, [{
    key: "unbind",
    value: function unbind() {
      document.removeEventListener('shopify:section:load', this._onSectionEvent);
      document.removeEventListener('shopify:section:unload', this._onSectionEvent);
      document.removeEventListener('shopify:section:select', this._onSectionEvent);
      document.removeEventListener('shopify:section:deselect', this._onSectionEvent);
      document.removeEventListener('shopify:block:select', this._onSectionEvent);
      document.removeEventListener('shopify:block:deselect', this._onSectionEvent); // Unload all instances

      for (var i = 0; i < this.instances.length; i++) {
        this._triggerInstanceEvent(this.instances[i], 'onSectionUnload');
      }

      this.handlers = {};
      this.options = {};
      this.lazyLoader.unload();
      this.lazyLoader = null;
      this.instances = {};
    }
    /**
     * Register a section handler.
     *
     * @param {string} type
     *        The section type to handle. The handler will be called for all
     *        sections with this type.
     *
     * @param {function} handler
     *        The handler function is passed information about a specific section
     *        instance. The handler is expected to return an object that will be
     *        associated with the section instance.
     *
     *        Section handlers are passed an object with the following parameters:
     *          {string} id
     *          An ID that maps to a specific section instance. Typically the
     *          section's filename for static sections, or a generated ID for
     *          dynamic sections.
     *
     *          {string} type
     *          The section type, as supplied when registered.
     *
     *          {Element} el
     *          The root DOM element for the section instance.
     *
     *          {Object} data
     *          Data loaded from the section script element. Defaults to an
     *          empty object.
     *
     *          {Function} postMessage
     *          A function that can be called to pass messages between sections.
     *          The function should be called with a message "name", and
     *          optionally some data.
     *
     * @param {object} options
     *
     * @param {boolean} options.lazy
     *     If true, sections will only be initialized after they intersect the viewport + 30% margin
     */

  }, {
    key: "register",
    value: function register(type, handler) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

      if (this.handlers[type]) {
        console.warn("Sections: section handler already exists of type '".concat(type, "'."));
      } // Store the section handler


      this.handlers[type] = handler; // Store options

      this.options[type] = options; // Init sections for this type

      this._initSections(type);
    }
    /**
     * Initialize sections already on the page.
     */

  }, {
    key: "_initSections",
    value: function _initSections(type) {
      var _this2 = this;

      // Fetch all existing sections of our type on the page
      var dataEls = document.querySelectorAll("[data-section-type=\"".concat(type, "\"]"));
      if (!dataEls) return; // Create an instance for each section

      var _loop = function _loop(i) {
        var dataEl = dataEls[i];
        var el = dataEl.parentNode; // Get instance ID

        var idEl = el.querySelector('[data-section-id]');

        if (!idEl) {
          console.warn("Sections: unable to find section id for '".concat(type, "'."), el);
          return "continue"; // eslint-disable-line no-continue
        }

        var sectionId = idEl.getAttribute('data-section-id');

        if (!sectionId) {
          console.warn("Sections: unable to find section id for '".concat(type, "'."), el);
          return "continue"; // eslint-disable-line no-continue
        }

        if (_this2.options[type] && _this2.options[type].lazy) {
          if (_this2.lazyLoader === null) {
            _this2.lazyLoader = new LazyLoader();
          }

          _this2.lazyLoader.add(el, function () {
            return _this2._createInstance(sectionId, el);
          });
        } else {
          _this2._createInstance(sectionId, el);
        }
      };

      for (var i = 0; i < dataEls.length; i++) {
        var _ret = _loop(i);

        if (_ret === "continue") continue;
      }
    }
  }, {
    key: "_onSectionEvent",
    value: function _onSectionEvent(event) {
      var el = event.target;
      var _event$detail = event.detail,
          sectionId = _event$detail.sectionId,
          blockId = _event$detail.blockId;
      var instance = this.instances[sectionId];

      switch (event.type) {
        case 'shopify:section:load':
          this._createInstance(sectionId, el);

          break;

        case 'shopify:section:unload':
          this._triggerInstanceEvent(instance, 'onSectionUnload', {
            el: el,
            id: sectionId
          });

          if (this.lazyLoader) {
            this.lazyLoader.remove(el);
          }

          delete this.instances[sectionId];
          break;

        case 'shopify:section:select':
          this._triggerInstanceEvent(instance, 'onSectionSelect', {
            el: el,
            id: sectionId
          });

          break;

        case 'shopify:section:deselect':
          this._triggerInstanceEvent(instance, 'onSectionDeselect', {
            el: el,
            id: sectionId
          });

          break;

        case 'shopify:block:select':
          this._triggerInstanceEvent(instance, 'onSectionBlockSelect', {
            el: el,
            id: blockId
          });

          break;

        case 'shopify:block:deselect':
          this._triggerInstanceEvent(instance, 'onSectionBlockDeselect', {
            el: el,
            id: blockId
          });

          break;

        default:
          break;
      }
    }
  }, {
    key: "_triggerInstanceEvent",
    value: function _triggerInstanceEvent(instance, eventName) {
      if (instance && instance[eventName]) {
        for (var _len = arguments.length, args = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
          args[_key - 2] = arguments[_key];
        }

        instance[eventName].apply(instance, args);
      }
    }
  }, {
    key: "_postMessage",
    value: function _postMessage(name, data) {
      var _this3 = this;

      Object.keys(this.instances).forEach(function (id) {
        _this3._triggerInstanceEvent(_this3.instances[id], 'onSectionMessage', name, data);
      });
    }
  }, {
    key: "_createInstance",
    value: function _createInstance(id, el) {
      var _this4 = this;

      var typeEl = el.querySelector('[data-section-type]');
      if (!typeEl) return;
      var type = typeEl.getAttribute('data-section-type');
      if (!type) return;
      var handler = this.handlers[type];

      if (!handler) {
        console.warn("Sections: unable to find section handler for type '".concat(type, "'."));
        return;
      }

      var data = this._loadData(el);

      var postMessage = this._postMessage.bind(this);

      var handlerParams = {
        id: id,
        type: type,
        el: el,
        data: data,
        postMessage: postMessage
      };

      if (!this.imports[type]) {
        handler().then(function (_ref2) {
          var Component = _ref2.default;
          _this4.imports[type] = Component;
          _this4.instances[id] = new Component(handlerParams);
        });
      } else {
        this.instances[id] = new this.imports[type](handlerParams);
      }
    }
  }, {
    key: "_loadData",
    value: function _loadData(el) {
      var dataEl = el.querySelector('[data-section-data]');
      if (!dataEl) return {}; // Load data from attribute, or innerHTML

      var data = dataEl.getAttribute('data-section-data') || dataEl.innerHTML;

      try {
        return JSON.parse(data);
      } catch (error) {
        console.warn("Sections: invalid section data found. ".concat(error.message));
        return {};
      }
    }
  }]);

  return Sections;
}();


// CONCATENATED MODULE: ./source/scripts/checkPolyfills.js
var polyfillUrls = []; // Checks if all IntersectionObserver and IntersectionObserverEntry
// features are natively supported.

if (!('IntersectionObserver' in window && 'IntersectionObserverEntry' in window && 'intersectionRatio' in window.IntersectionObserverEntry.prototype)) {
  polyfillUrls.push(document.querySelector('[data-scripts]').dataset.pxuPolyfills);
} // Polyfill NodeList.forEach if required.
// Polyfill is so small it doesn't need to load any external code.


if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* harmony default export */ var checkPolyfills = (polyfillUrls);
// CONCATENATED MODULE: ./source/scripts/helpers/FlickityTouchFix.js
// This is a helper class to fix a touch issue that came up in flickity
// on iOS devices as of version 13. It should smooth out some of the scroll
// and swipe issues that flickity is having on that version of iOS.
var flickityTouchFix = function flickityTouchFix() {
  var touchingSlider = false;
  var touchStartCoordsX = 0;

  var onTouchStart = function onTouchStart(e) {
    if (e.target.closest && e.target.closest('.flickity-slider')) {
      touchingSlider = true;
      touchStartCoordsX = e.touches[0].pageX;
    } else {
      touchingSlider = false;
    }
  };

  var onTouchMove = function onTouchMove(e) {
    if (!(touchingSlider && e.cancelable)) {
      return;
    }

    if (Math.abs(e.touches[0].pageX - touchStartCoordsX) > 10) {
      e.preventDefault();
    }
  };

  document.body.addEventListener('touchstart', onTouchStart);
  document.body.addEventListener('touchmove', onTouchMove, {
    passive: false
  });
};

/* harmony default export */ var FlickityTouchFix = (flickityTouchFix);
// CONCATENATED MODULE: ./source/scripts/Empire.js
// jQuery plugins

 // eslint-disable-line

 // eslint-disable-line
// Global imports

 // Responsive Images

 // eslint-disable-line
// Section Manager

 // Polyfills

 // Flickity iOS fix



var Empire_initEmpire = function initEmpire() {
  index_es["a" /* default */].init('[data-rimg="lazy"]', {
    round: 1
  });
  var sections = new Sections(); // Static sections

  sections.register('static-header', function () {
    return Promise.all(/* import() | StaticHeader */[__webpack_require__.e(5), __webpack_require__.e(4), __webpack_require__.e(28)]).then(__webpack_require__.bind(null, 80));
  });
  sections.register('static-announcement', function () {
    return __webpack_require__.e(/* import() | StaticAnnouncement */ 22).then(__webpack_require__.bind(null, 52));
  });
  sections.register('static-footer', function () {
    return __webpack_require__.e(/* import() | StaticFooter */ 27).then(__webpack_require__.bind(null, 53));
  });
  sections.register('static-article', function () {
    return __webpack_require__.e(/* import() | StaticArticle */ 23).then(__webpack_require__.bind(null, 54));
  });
  sections.register('static-blog', function () {
    return __webpack_require__.e(/* import() | StaticBlog */ 24).then(__webpack_require__.bind(null, 55));
  });
  sections.register('static-cart', function () {
    return Promise.all(/* import() | StaticCart */[__webpack_require__.e(37), __webpack_require__.e(25)]).then(__webpack_require__.bind(null, 56));
  });
  sections.register('static-collection', function () {
    return Promise.all(/* import() | StaticCollection */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(26)]).then(__webpack_require__.bind(null, 57));
  });
  sections.register('static-password', function () {
    return __webpack_require__.e(/* import() | StaticPassword */ 30).then(__webpack_require__.bind(null, 58));
  });
  sections.register('static-product', function () {
    return Promise.all(/* import() | StaticProduct */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, 59));
  });
  sections.register('static-product-recommendations', function () {
    return Promise.all(/* import() | StaticProductRecommendations */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(32)]).then(__webpack_require__.bind(null, 81));
  });
  sections.register('static-recently-viewed', function () {
    return Promise.all(/* import() | StaticRecentlyViewed */[__webpack_require__.e(0), __webpack_require__.e(33)]).then(__webpack_require__.bind(null, 60));
  });
  sections.register('static-search', function () {
    return Promise.all(/* import() | StaticSearch */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(34)]).then(__webpack_require__.bind(null, 61));
  });
  sections.register('static-highlights-banners', function () {
    return Promise.all(/* import() | StaticHighlightsBanners */[__webpack_require__.e(0), __webpack_require__.e(29)]).then(__webpack_require__.bind(null, 62));
  });
  sections.register('static-slideshow', function () {
    return Promise.all(/* import() | StaticSlideshow */[__webpack_require__.e(0), __webpack_require__.e(35)]).then(__webpack_require__.bind(null, 63));
  }, {
    lazy: true
  }); // Dynamic sections (lazy loaded)\

  sections.register('dynamic-blog-posts', function () {
    return Promise.all(/* import() | DynamicBlogPosts */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, 64));
  }, {
    lazy: true
  });
  sections.register('dynamic-promo-mosaic', function () {
    return __webpack_require__.e(/* import() | DynamicPromoBlocks */ 14).then(__webpack_require__.bind(null, 65));
  }, {
    lazy: true
  });
  sections.register('dynamic-promo-grid', function () {
    return __webpack_require__.e(/* import() | DynamicPromoBlocks */ 14).then(__webpack_require__.bind(null, 65));
  }, {
    lazy: true
  });
  sections.register('dynamic-menu-list', function () {
    return __webpack_require__.e(/* import() | DynamicMenuList */ 12).then(__webpack_require__.bind(null, 66));
  }, {
    lazy: true
  });
  sections.register('dynamic-twitter-feed', function () {
    return Promise.all(/* import() | DynamicTwitterFeed */[__webpack_require__.e(0), __webpack_require__.e(17)]).then(__webpack_require__.bind(null, 67));
  }, {
    lazy: true
  });
  sections.register('dynamic-instagram-feed', function () {
    return Promise.all(/* import() | DynamicInstagramFeed */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, 68));
  }, {
    lazy: true
  });
  sections.register('dynamic-featured-collection', function () {
    return Promise.all(/* import() | DynamicFeaturedCollection */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(3), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, 69));
  }, {
    lazy: true
  });
  sections.register('dynamic-featured-product', function () {
    return Promise.all(/* import() | StaticProduct */[__webpack_require__.e(0), __webpack_require__.e(2), __webpack_require__.e(1), __webpack_require__.e(31)]).then(__webpack_require__.bind(null, 59));
  }, {
    lazy: true
  });
  sections.register('dynamic-rich-text', function () {
    return __webpack_require__.e(/* import() | DynamicRichText */ 15).then(__webpack_require__.bind(null, 70));
  }, {
    lazy: true
  });
  sections.register('dynamic-html', function () {
    return __webpack_require__.e(/* import() | DynamicRichText */ 15).then(__webpack_require__.bind(null, 70));
  }, {
    lazy: true
  });
  sections.register('dynamic-search', function () {
    return Promise.all(/* import() | DynamicSearch */[__webpack_require__.e(5), __webpack_require__.e(4), __webpack_require__.e(16)]).then(__webpack_require__.bind(null, 71));
  }, {
    lazy: true
  });
  sections.register('dynamic-video', function () {
    return __webpack_require__.e(/* import() | DynamicVideo */ 18).then(__webpack_require__.bind(null, 72));
  }, {
    lazy: true
  });
  sections.register('pxs-newsletter', function () {
    return __webpack_require__.e(/* import() | DynamicNewsletter */ 13).then(__webpack_require__.bind(null, 73));
  }, {
    lazy: true
  });
  sections.register('pxs-map', function () {
    return __webpack_require__.e(/* import() | PXSMap */ 20).then(__webpack_require__.bind(null, 74));
  }, {
    lazy: true
  });

  if (document.body.classList.contains('template-giftcard')) {
    __webpack_require__.e(/* import() | GiftCard */ 19).then(__webpack_require__.bind(null, 75)).then(function (_ref) {
      var GiftCard = _ref.default;
      return new GiftCard();
    });
  }

  if (document.querySelector('[data-template-account]')) {
    __webpack_require__.e(/* import() | Account */ 6).then(__webpack_require__.bind(null, 76)).then(function (_ref2) {
      var Account = _ref2.default;
      return new Account();
    });
  }

  if (document.body.classList.contains('template-contact')) {
    __webpack_require__.e(/* import() | Contact */ 7).then(__webpack_require__.bind(null, 77)).then(function (_ref3) {
      var Contact = _ref3.default;
      return new Contact();
    });
  }

  if (document.body.classList.contains('template-page')) {
    __webpack_require__.e(/* import() | Page */ 21).then(__webpack_require__.bind(null, 78)).then(function (_ref4) {
      var Page = _ref4.default;
      return new Page();
    });
  }

  if (document.querySelector('[data-swatch-tooltip]')) {
    __webpack_require__.e(/* import() | ContainSwatchTooltips */ 8).then(__webpack_require__.bind(null, 79)).then(function (_ref5) {
      var ContainSwatchTooltips = _ref5.default;
      return new ContainSwatchTooltips();
    });
  }
};

FlickityTouchFix();


//Custom by doublebrace for highlights-banners-block to open modal

$('.highlights-banners-block.has-modal').click(function(){
  
  $('.modal').addClass('slim');
  $('body').addClass('scroll-lock').addClass('modal-visible').addClass('modal-loaded');
  var title = $(this).find('.highlights-banners-heading').text(); 
  var content = $(this).find('.highlights-banners-text').data("modal-content")

  $('.modal-content').html('<h2>'+ title +'</h2>'+ 
  '<div>' + content + '</div>'
  )

});

$('.modal-close').click(function(){
  $('.modal').removeClass('slim');
  $('body').removeClass('scroll-lock').removeClass('modal-visible').removeClass('modal-loaded');
  $('.modal-content').html('');
});

//End Custom for highlights-banners-block to open modal

//Custom by doublebrace for read more content current use collection pages 

$(".reveal-trigger").click(function () {
  var text = $(this).text();
  $(this).prev(".reveal-content").toggleClass("show-reveal");
  $(this).text(text == "Read more" ? "Read less" : "Read more");
});

// if (isMobile()) {
//   $(".reveal-content.show-reveal").removeClass("show-reveal");
//   $(".reveal-trigger.d-none").removeClass("d-none");
// }

//End Custom for read more 


//Custom by doublebrace for colour options of tagged products

$('[data-tagged-colour]').on('mouseover', function() {
	var colour = $(this).data('tagged-colour');	
	$('[data-tagged-selected-colour]').text(colour);
})

$('[data-tagged-colour]').on('mouseleave', function() {
	var colour = $('[data-tagged-original-colour]').data('tagged-original-colour');
	if (colour) {
		$('[data-tagged-selected-colour]').text(colour);
	}
})

//End custome selected colour

if( $('.delivery-message').length ) {
	setInterval(function () {
		var deliveryMessage = $(".delivery-message").html();
		$(".delivery-message-section").html(deliveryMessage);
	}, 1000);
}


//Custom by Doublebrace show reviews widget if bulk buy table doesnt exisit

window.addEventListener('load', function () {
	const isProductPage = document.querySelector('.template-product');
	const bulkBuyTable = document.querySelector('.quantity-breaks-now-wrapper');
	if ( isProductPage && bulkBuyTable.innerHTML === '' ) {
		reviewsBadgeRibbon("product-reviews-placeholder", {
			store: "office-supermarket",
			size: "small",
			mono: true,
		});
	}
})

// $('body').click(function(){
//   if ( $('body').hasClass('scroll-lock') ) {
//     $('body').removeClass('scroll-lock').removeClass('modal-visible').removeClass('modal-loaded');
//   }
// })

if (checkPolyfills.length) {
  script_default()(checkPolyfills, Empire_initEmpire);
} else {
  Empire_initEmpire();
}

/***/ })

/******/ });
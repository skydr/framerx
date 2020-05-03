(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("framer/resource"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["framer", "framer-package-loader!@framer/framer.default", "framer/resource", "react"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("framer"), (function webpackLoadOptionalExternalModule() { try { return require("framer-package-loader!@framer/framer.default"); } catch(e) {} }()), require("framer/resource"), require("react")) : factory(root["Framer"], root["framer-package-loader!@framer/framer.default"], root["framer/resource"], root["React"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function(__WEBPACK_EXTERNAL_MODULE_framer__, __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__, __WEBPACK_EXTERNAL_MODULE_framer_resource__, __WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		try { modules[moduleId].call(module.exports, module, module.exports, __webpack_require__); } catch (error) { module.exports = { error } }
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
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
/******/ 	// asset url
/******/ 	var __module_i = eval("typeof module !== 'undefined' ? module.i : ''");
/******/ 	var __framer_package = (/(node_modules\/.*)\/(?:build|dist)\/index\.js$/.exec(__module_i) || [])[1];
/******/ 	function __asset_url__(src) { return __WEBPACK_EXTERNAL_MODULE_framer__.serverURL(__framer_package, src) };
/******/ 	installedModules['framer/resource'] = { i: 'framer/resource', l: true, exports: { url: __asset_url__ } };
/******/
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./code sync recursive \\.(t|j)s(x?)|\\.css$":
/*!***************************************!*\
  !*** ./code sync \.(t|j)s(x?)|\.css$ ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./IPhone11Pro.tsx": "./code/IPhone11Pro.tsx",
	"./canvas.tsx": "./code/canvas.tsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./code sync recursive \\.(t|j)s(x?)|\\.css$";

/***/ }),

/***/ "./code/IPhone11Pro.tsx":
/*!******************************!*\
  !*** ./code/IPhone11Pro.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//# framerSourceMap=eyJ2ZXJzaW9uIjozLCJmaWxlIjoiSVBob25lMTFQcm8uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9jb2RlL0lQaG9uZTExUHJvLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtCQUE4QjtBQUM5QixtQ0FNZTtBQUNmLDhDQUFxQztBQUVyQyxNQUFNLGlCQUFpQixHQUFHLHVDQUF1QyxDQUFBO0FBQ2pFLE1BQU0scUJBQXFCLEdBQUcsMkNBQTJDLENBQUE7QUFDekUsTUFBTSxjQUFjLEdBQUcsbUNBQW1DLENBQUE7QUFDMUQsTUFBTSxZQUFZLEdBQUcsaUNBQWlDLENBQUE7QUFFdEQsTUFBTSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDeEMsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUE7QUFDekMsTUFBTSxXQUFXLEdBQUcsR0FBRyxDQUFBO0FBQ3ZCLE1BQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQTtBQUN4QixNQUFNLE9BQU8sR0FBRyxFQUFFLENBQUE7QUFFbEIsU0FBZ0IsV0FBVyxDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUU7O0lBQ3pFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxXQUFXLENBQUE7SUFDcEMsTUFBTSxNQUFNLEdBQUc7UUFDWCxTQUFTLEVBQUUsaUJBQWlCO1FBQzVCLGFBQWEsRUFBRSxxQkFBcUI7UUFDcEMsTUFBTSxFQUFFLGNBQWM7UUFDdEIsSUFBSSxFQUFFLFlBQVk7S0FDckIsQ0FBQTtJQUVELGtDQUFrQztJQUVsQyxNQUFNLE1BQU0sR0FBRyxLQUFLLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxDQUFBO0lBQ2xELE1BQU0sTUFBTSxHQUFHLE1BQU0sR0FBRyxDQUFDLFlBQVksR0FBRyxDQUFDLEdBQUcs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

Object.defineProperty(exports, "__esModule", { value: true });
const React = __webpack_require__(/*! react */ "react");
const framer_1 = __webpack_require__(/*! framer */ "framer");
const resource_1 = __webpack_require__(/*! framer/resource */ "framer/resource");
const iphone11spacegrey = "./devices/iphone11-pro-space-grey.png";
const iphone11midnightgreen = "./devices/iphone11-pro-midnight-green.png";
const iphone11silver = "./devices/iphone11-pro-silver.png";
const iphone11gold = "./devices/iphone11-pro-gold.png";
const deviceWidth = Math.round(1415 / 3);
const deviceHeight = Math.round(2726 / 3);
const screenWidth = 375;
const screenHeight = 812;
const padding = 40;
function IPhone11Pro({ children, width, height, color, image, iphone }) {
    window["__checkBudget__"]();
    const frames = iphone || "spacegrey";
    const colors = {
        spacegrey: iphone11spacegrey,
        midnightgreen: iphone11midnightgreen,
        silver: iphone11silver,
        gold: iphone11gold,
    };
    // Scale -------------------------
    const scaleX = width / (deviceWidth + 2 * padding);
    const scaleY = height / (deviceHeight + 2 * padding);
    const scale = Math.min(scaleX, scaleY, 1);
    const child = children && children[0];
    const resizedChild = child && React.isValidElement(child)
        ? React.cloneElement(child, {
            width: screenWidth,
            height: screenHeight,
        })
        : null;
    const isCanvas = framer_1.RenderTarget.current() === framer_1.RenderTarget.canvas ||
        framer_1.RenderTarget.current() === framer_1.RenderTarget.export;
    const childWithNavigation = resizedChild ? (React.createElement(framer_1.Navigation, null, resizedChild)) : null;
    return (React.createElement(framer_1.Frame, { size: "100%", backgroundColor: color, image: image, overflow: "hidden" },
        React.createElement("div", { style: {
                display: "flex",
                placeItems: "center",
                placeContent: "center",
                width: "100%",
                height: "100%",
                transform: `scale(${scale})`,
            } },
            React.createElement(framer_1.Frame, { width: deviceWidth, height: deviceHeight, image: resource_1.url(colors[frames]), backgroundColor: "transparent", style: {
                    imageRendering: "auto",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                } }),
            React.createElement(framer_1.Frame, { center: true, backgroundColor: "#000", style: {
                    width: screenWidth,
                    height: screenHeight,
                    WebkitMaskImage: makeMask(screenWidth, screenWidth),
                    maskSize: "contain",
                    WebkitMaskSize: "contain",
                } }, isCanvas ? resizedChild : childWithNavigation))));
}
exports.IPhone11Pro = IPhone11Pro;
function makeMask(screenWidth, screenHeight) {
    window["__checkBudget__"]();
    const path = '<path d="M292 8.667V9c0 9.265-7.069 21-23.333 21h-162C90.402 30 83.333 18.265 83.333 9v-.333c0-4.285 0-8.667-7.666-8.667H43.333C16.312 0 0 16.312 0 43.333v725.334C0 795.688 16.312 812 43.333 812h288.334C358.688 812 375 795.688 375 768.667V43.333C375 16.312 358.688 0 331.667 0h-32C292 0 292 4.382 292 8.667z" />';
    const encoded = encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewport="0 0 ${screenWidth} ${screenHeight}" preserveAspectRatio="none"><g x="0" y="0">${path}</g></svg>`);
    return `url("data:image/svg+xml;utf8,${encoded}")`;
}
IPhone11Pro.defaultProps = {
    color: "#000",
    width: 1200,
    height: 1200,
    iphone: "spacegrey",
};
IPhone11Pro.displayName = "iPhone 11 Pro";
framer_1.addPropertyControls(IPhone11Pro, {
    iphone: {
        type: framer_1.ControlType.Enum,
        options: ["spacegrey", "midnightgreen", "silver", "gold"],
        optionTitles: ["Space Grey", "Midnight Green", "Silver", "Gold"],
        title: "Color",
    },
    color: { type: framer_1.ControlType.Color, title: "Fill" },
    image: {
        type: framer_1.ControlType.File,
        allowedFileTypes: ["jpg", "png", "jpeg"],
        title: "Image",
    },
});
exports.__info__ = [{ "name": "IPhone11Pro", "children": true, "type": "component" }];


/***/ }),

/***/ "./code/canvas.tsx":
/*!*************************!*\
  !*** ./code/canvas.tsx ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// WARNING: this file is auto generated, any changes will be lost
const framer_1 = __webpack_require__(/*! framer */ "framer");
const canvas = framer_1.CanvasStore.shared({"children":[]});


/***/ }),

/***/ "./designDependencies.js":
/*!*******************************!*\
  !*** ./designDependencies.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {


const designs = {}

// The packages are passed in through a template
designs["@framer/framer.default"] = {
  "root" : {
    "__class" : "RootNode",
    "children" : [
      {
        "__class" : "FrameNode",
        "aspectRatio" : null,
        "blendingEnabled" : 0,
        "blendingMode" : "normal",
        "bottom" : null,
        "centerAnchorX" : 0,
        "centerAnchorY" : 0,
        "children" : [
          {
            "__class" : "CodeComponentNode",
            "aspectRatio" : null,
            "bottom" : null,
            "centerAnchorX" : 0,
            "centerAnchorY" : 0,
            "children" : [

            ],
            "clip" : true,
            "codeComponentIdentifier" : ".\/Button.tsx_Button",
            "codeComponentProps" : {
              "bottomLeft" : 10,
              "bottomRight" : 10,
              "defaultBackground" : "#0099FF",
              "defaultTextColor" : "#ffffff",
              "disabledBackground" : "#f3f3f3",
              "disabledTextColor" : "#AAAAAA",
              "fontSize" : 14,
              "hoverBackground" : "#0077FF",
              "hoverTextColor" : "#ffffff",
              "isMixed" : false,
              "padding" : 12,
              "paddingBottom" : 0,
              "paddingLeft" : 0,
              "paddingPerSide" : false,
              "paddingRight" : 0,
              "paddingTop" : 0,
              "pressedBackground" : "#0088FF",
              "pressedTextColor" : "#ffffff",
              "radius" : 10,
              "shadow" : true,
              "text" : "Hello Framer!",
              "topLeft" : 10,
              "topRight" : 10,
              "variant" : "Default",
              "whileHoverScale" : 1.1000000000000001,
              "whileTapScale" : 0.94999999999999996
            },
            "codeOverrideEnabled" : false,
            "constraintsLocked" : false,
            "deviceType" : null,
            "exportOptions" : [

            ],
            "fillColor" : "rgba(255,255,255,1)",
            "fillEnabled" : false,
            "fillImage" : null,
            "fillImageOriginalName" : null,
            "fillImagePixelHeight" : null,
            "fillImagePixelWidth" : null,
            "fillImageResize" : "fill",
            "fillType" : "color",
            "height" : 45,
            "heightType" : 0,
            "id" : "wJAgIx5AI",
            "intrinsicHeight" : 45,
            "intrinsicWidth" : 135,
            "left" : 179,
            "locked" : false,
            "name" : null,
            "opacity" : 1,
            "originalid" : null,
            "parentid" : "kwmzRbTMe",
            "previewSettings" : null,
            "radius" : 0,
            "radiusBottomLeft" : 0,
            "radiusBottomRight" : 0,
            "radiusIsRelative" : false,
            "radiusPerCorner" : false,
            "radiusTopLeft" : 0,
            "radiusTopRight" : 0,
            "right" : null,
            "rotation" : 0,
            "top" : 83,
            "visible" : true,
            "width" : 135,
            "widthType" : 0
          }
        ],
        "clip" : true,
        "codeOverrideEnabled" : false,
        "constraintsLocked" : false,
        "deviceType" : null,
        "exportOptions" : [

        ],
        "fillColor" : "white",
        "fillEnabled" : true,
        "fillImage" : null,
        "fillImageOriginalName" : null,
        "fillImagePixelHeight" : null,
        "fillImagePixelWidth" : null,
        "fillImageResize" : "fill",
        "fillType" : "color",
        "guidesX" : [

        ],
        "guidesY" : [

        ],
        "height" : 292,
        "heightType" : 0,
        "id" : "kwmzRbTMe",
        "intrinsicHeight" : null,
        "intrinsicWidth" : null,
        "isExternalMaster" : null,
        "isMaster" : false,
        "isTarget" : false,
        "left" : -461,
        "locked" : false,
        "name" : null,
        "opacity" : 1,
        "originalid" : null,
        "parentid" : "uXpaPrDOp",
        "previewSettings" : null,
        "radius" : 0,
        "radiusBottomLeft" : 0,
        "radiusBottomRight" : 0,
        "radiusIsRelative" : false,
        "radiusPerCorner" : false,
        "radiusTopLeft" : 0,
        "radiusTopRight" : 0,
        "replicaInfo" : null,
        "right" : null,
        "rotation" : 0,
        "top" : -418,
        "visible" : true,
        "width" : 522,
        "widthType" : 0
      }
    ],
    "guidesX" : [

    ],
    "guidesY" : [

    ],
    "homeNodeId" : "kwmzRbTMe",
    "id" : "uXpaPrDOp",
    "name" : null,
    "originalid" : null,
    "parentid" : null,
    "tokens" : {

    },
    "tokensIndex" : [

    ],
    "visible" : false
  },
  "version" : 57
}

module.exports = designs


/***/ }),

/***/ "./entry.js":
/*!******************!*\
  !*** ./entry.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


// The template for the dynamic webpack entry. Be aware of the variables

const packageJson = __webpack_require__(/*! ./package.json */ "./package.json")

const packageInfo = {
    packageJson,
    sourceModules: {},
    dependencies: {},
}

try {
    // This is a special webpack thing that watches the whole directory
    // https://github.com/webpack/docs/wiki/context
    const ctx = __webpack_require__("./code sync recursive \\.(t|j)s(x?)|\\.css$")

    ctx.keys().forEach(key => {
        packageInfo.sourceModules[key] = () => ctx(key)
    })
} catch (e) {
    // Handle when the code directory is missing
    // See issue #8178 for more information
}

const packages = {}

// The packages are passed in through a template

                packages["framer"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer */ "framer")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["framer"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"name":"framer","version":"1.1.7","main":"build/framer.js","author":"Framer","license":"MIT","scripts":{"coverage":"jest --coverage","test":"jest","watch":"jest --watch"},"devDependencies":{"@emotion/is-prop-valid":"^0.8.2","@microsoft/api-extractor":"^7.3.4","@testing-library/react":"^8.0.1","@types/chalk":"^2.2.0","@types/draft-js":"0.10.19","@types/enzyme":"^3.1.10","@types/enzyme-adapter-react-16":"^1.0.3","@types/google.fonts":"^1.0.2","@types/hsluv":"https://github.com/framer/typed_hsluv#bump","@types/jest":"^23.0.0","@types/jest-diff":"^20.0.0","@types/jest-matcher-utils":"^21.0.1","@types/node":"^10.12.9","@types/promise-queue":"^2.2.0","@types/react":"16.8.4","@types/react-dom":"^16.8","@types/webfontloader":"^1.6.29","cache-loader":"^1.2.2","chalk":"^2.4.1","convert-tsconfig-paths-to-webpack-aliases":"^0.9.2","css.escape":"^1.5.1","draft-js":"0.10.4","enzyme":"^3.9.0","enzyme-adapter-react-16":"^1.9.1","eventemitter3":"^3.1.0","fork-ts-checker-webpack-plugin":"^0.4.1","framer-motion":"^1.6.7","hoist-non-react-statics":"^2.5.0","hsluv":"^0.0.3","immutable":"^3.8.2","jest":"^23.1.0","jest-diff":"^23.6.0","jest-dom":"^3.1.3","jest-junit":"^5.2.0","modclean":"^3.0.0-beta.1","progress-bar-webpack-plugin":"^1.11.0","promise-queue":"^2.2.5","raf":"^3.4.0","react":"^16.8","react-dev-utils":"^5.0.1","react-dom":"^16.8","react-hooks-testing-library":"^0.5.1","react-testing-library":"^6.0.0","resize-observer-polyfill":"^1.5.1","semver":"^5.6.0","style-value-types":"^3.1.4","ts-jest":"^23.10.5","ts-loader":"^4.1.0","tslint":"^5.12.1","tslint-react-hooks":"^1.1.0","typescript":"^3.5.3","watch":"^1.0.2","webfontloader":"^1.6.28","webpack":"^4.4.1","webpack-cli":"^3.1.2","webpack-dev-server":"^3.1.10","xcssmatrix":"^0.2.2"},"peerDependencies":{"react":"^16.8.2","react-dom":"^16.8.2"},"tsdoc":{"tsdocFlavor":"AEDoc"},"framer":{"components":[{"name":"Scroll","children":true,"properties":[{"key":"direction","title":"Direction","kind":"enum","options":["horizontal","vertical","both"]}]},{"name":"Page"},{"name":"Stack"},{"name":"FramerAppleWatch38","type":"device"},{"name":"FramerAppleWatch42","type":"device"},{"name":"FramerSonySmartWatch","type":"device"},{"name":"FramerAppleIPhoneSE","type":"device"},{"name":"FramerAppleIPhone8","type":"device"},{"name":"FramerAppleIPhone8Plus","type":"device"},{"name":"FramerAppleIPhoneXS","type":"device"},{"name":"FramerAppleIPhoneXR","type":"device"},{"name":"FramerAppleIPhoneXSMax","type":"device"},{"name":"FramerGooglePixel2","type":"device"},{"name":"FramerGooglePixel2XL","type":"device"},{"name":"FramerGooglePixel3","type":"device"},{"name":"FramerGooglePixel3XL","type":"device"},{"name":"FramerSamsungNote5","type":"device"},{"name":"FramerSamsungGalaxyS9","type":"device"},{"name":"FramerAppleIPadAir","type":"device"},{"name":"FramerAppleIPadMini","type":"device"},{"name":"FramerAppleIPadPro","type":"device"},{"name":"FramerGoogleNexusTablet","type":"device"},{"name":"FramerMicrosoftSurfacePro3","type":"device"},{"name":"FramerMicrosoftSurfacePro4","type":"device"},{"name":"FramerAppleIMac","type":"device"},{"name":"FramerAppleThunderboltDisplay","type":"device"},{"name":"FramerAppleMacBook","type":"device"},{"name":"FramerAppleMacBookAir","type":"device"},{"name":"FramerAppleMacBookPro","type":"device"},{"name":"FramerDellXPS","type":"device"},{"name":"FramerMicrosoftSurfaceBook","type":"device"},{"name":"FramerSonyW850C","type":"device"},{"name":"FramerStoreArtwork","type":"device"},{"name":"FramerStoreIcon","type":"device"}]}}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

                packages["@framer/framer.default"] = () => {
                    var packageInfo = {}
                    var designJson
                    try {
                        packageInfo = __webpack_require__(/*! framer-package-loader!@framer/framer.default */ "framer-package-loader!@framer/framer.default")
                        designJson = __webpack_require__(/*! ./designDependencies.js */ "./designDependencies.js")["@framer/framer.default"]
                    } catch (e) {
                        console.log(e)
                    }
                    packageInfo.__framer__ = packageInfo.__framer__ || {}
                    packageInfo.__framer__.packageJson = {"main":"dist/index.js","license":"MIT","dependencies":{"react-feather":"^2.0.3"},"devDependencies":{"@types/react":"^16.8"},"peerDependencies":{"framer":"^1.0","react":"^16.8"},"framer":{"id":"ed433636-a308-4ea6-8026-c3b3f320806d","displayName":"Default"},"author":"Framer Team","name":"@framer/framer.default","version":"1.11.0"}
                    packageInfo.__framer__.packageJson.design = designJson
                    return packageInfo
                }

packageInfo.dependencies = packages

exports.__framer__ = packageInfo


/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: main, license, devDependencies, peerDependencies, framer, author, dependencies, name, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"main\":\"dist/index.js\",\"license\":\"MIT\",\"devDependencies\":{\"@types/react\":\"^16.8\",\"framer\":\"1.1.7\"},\"peerDependencies\":{\"framer\":\"^1.0\",\"react\":\"^16.8\"},\"framer\":{\"id\":\"ea06ad45-13ab-450f-8620-365fde2bd977\",\"displayName\":\"iPhone 11 Pro\"},\"author\":\"Benjamin den Boer\",\"dependencies\":{\"@framer/framer.default\":\"^1.11.0\"},\"name\":\"@framer/benjamin.iphone-11-pro\",\"version\":\"1.16.0\"}");

/***/ }),

/***/ "framer":
/*!******************************************************************************************!*\
  !*** external {"root":"Framer","commonjs2":"framer","commonjs":"framer","amd":"framer"} ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer__;

/***/ }),

/***/ "framer-package-loader!@framer/framer.default":
/*!***************************************************************!*\
  !*** external "framer-package-loader!@framer/framer.default" ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

if(typeof __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__ === 'undefined') {var e = new Error("Cannot find module 'framer-package-loader!@framer/framer.default'"); e.code = 'MODULE_NOT_FOUND'; throw e;}
module.exports = __WEBPACK_EXTERNAL_MODULE_framer_package_loader_framer_framer_default__;

/***/ }),

/***/ "framer/resource":
/*!******************************************************************************************************************************!*\
  !*** external {"root":"framer/resource","commonjs2":"framer/resource","commonjs":"framer/resource","amd":"framer/resource"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_framer_resource__;

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","commonjs2":"react","commonjs":"react","amd":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ });
});
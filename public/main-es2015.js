(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/admin-page.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/admin-page.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"admin-container\">\r\n  <div class=\"header\">\r\n    Admin Page\r\n  </div>\r\n  <br />\r\n  <div class=\"image-upload\">\r\n    <input\r\n      type=\"file\"\r\n      name=\"image-selector\"\r\n      id=\"image-selector\"\r\n      multiple\r\n      accept=\"image/*\"\r\n      (change)=\"onFileSelect($event)\"\r\n      #fileInput\r\n    />\r\n    <button\r\n      type=\"button\"\r\n      (click)=\"fileInput.click()\"\r\n      id=\"select-btn\"\r\n      class=\"select-btn btn\"\r\n    >\r\n      {{ select }} Image(s) to Upload\r\n    </button>\r\n    <label for=\"select-btn\">(.jpg, .png, .gif supported)</label>\r\n    <br />\r\n    <br />\r\n    <div class=\"list-container\" *ngIf=\"selectorClicked\">\r\n      Images to Upload\r\n      <div class=\"list-scroller\">\r\n        <ul class=\"image-list\" *ngFor=\"let image of selectedImages; index as i\">\r\n          <li>\r\n            <div class=\"image-name\">Name: {{ image.name }}</div>\r\n            <div class=\"image-size\">Size: {{ size[i] }}KB</div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n      <br />\r\n      <div class=\"warning-unsupported\">{{ notAnImageMsg }}</div>\r\n      <br />\r\n      <button class=\"upload-btn btn\" (click)=\"sendImages()\">\r\n        Upload Image(s)\r\n      </button>\r\n      <br />\r\n      <div class=\"progress\" *ngIf=\"uploadStarted\">Progress: {{ uploadProgress }}%</div>\r\n      <div class=\"completion-level\" *ngIf=\"uploadComplete\">\r\n        Upload Complete!\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/bio/bio.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/bio/bio.component.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bio-container\">\n    <div class=\"bio-text\" [ngClass]=\"{'color-red':redClass}\">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde iusto quod tempora molestiae in dignissimos ullam odit non voluptas eveniet nobis dolore, alias laborum illo exercitationem delectus quam quibusdam.\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/contact/contact.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/contact/contact.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-container\">\n    <ul class=\"contact\">\n        <li>Email: <a class=\"link link-fix\" href=\"mailto:darth@vader.deathstar\">darth@vader.deathstar</a></li>\n        <li>Phone: 808-867-5309</li>\n        <li>Buy Artwork: <a class=\"link link-fix\" target=\"_blank\" href=\"https://www.absolutearts.com/portfolios/k/killerkuff/\" >Mike's Absolute Arts Profile</a></li>\n    </ul>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/gallery/gallery.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gallery/gallery.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gallery-container\">\n  <div class=\"err\">{{ imagePullError }}</div>\n  <div class=\"gallery-photos\" *ngFor=\"let image of imageArr; let i = index\">\n    <div class=\"image-container\" (click)=\"fullSizeImage(i)\">\n      <img\n        class=\"images-g\"\n        src=\"{{ image.src }}\"\n        alt=\"{{ image.alt }}\"\n        title=\"{{ image.title }}\"\n      />\n    </div>\n  </div>\n</div>\n\n<div class=\"image-modal\" *ngIf=\"showModal\" (click)=\"hideModal()\">\n  <span class=\"modal-image-container\"></span>\n  <img\n    class=\"images-full\"\n    src=\"{{ modalImage.src }}\"\n    alt=\"{{ modalImage.alt }}\"\n    title=\"{{ modalImage.title }}\"\n  />\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<slideshow [height]=\"'100%'\" [minHeight]=\"'100px'\" [autoPlay]=\"true\" [showArrows]=\"true\" [imageUrls]=\"imageSources\"\n  [lazyLoad]=\"imageSources?.length > 1\" [autoPlayWaitForLazyLoad]=\"true\" [autoPlayInterval]=\"autoPlayInterval\"\n  [captionColor]=\"captionColor\" [captionBackground]=\"captionBackground\">\n</slideshow>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/version/version.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/version/version.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"version-container\">\n  <div class=\"dev-contact\">\n    For issues with this website please contact:\n    <button class=\"beauty-btn\">\n      <a class=\"link\" href=\"mailto:billycoda@killerkuff.com\">billycoda@killerkuff.com</a>\n    </button>\n  </div>\n  <div class=\"admin-access\">\n    Admin access:\n    <button class=\"beauty-btn\" (click)=\"loginModalShow()\">\n      <a class=\"link\">LOGIN</a>\n    </button>\n  </div>\n\n  <div *ngIf=\"loginModal\" class=\"login-modal\">\n    <div class=\"login-container\" (click)=\"loginModalHide()\">\n      <div class=\"login-box\" (click)=\"badTouch($event)\">\n        <div class=\"input-box\">\n          <input type=\"username\" class=\"input username\" />\n        </div>\n        <div class=\"input-box\">\n          <input type=\"password\" class=\"input password\" />\n        </div>\n        <div class=\"input-box\">\n          <button class=\"better-btn\" (click)=\"tryLogin()\" routerLink=\"/administration\">Go to Admin Page</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br />\n  <div class=\"patch-notes\">\n    <div class=\"header\">\n      Version Notes\n    </div>\n    <hr />\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.2.0\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Site now hosted by Google\n      </li>\n      <li>\n        Email <a class=\"link\" href=\"mailto:mike@killerkuff.com\">mike@killerkuff.com</a> is live\n      </li>\n      <li>\n        Image upload and retrieval is implemented\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.1.0\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Site now hosted at 'https://killerkuff.com'\n      </li>\n      <li>\n        Support email implemented and live\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.0.0\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Basic site structure with component and 404 routing implemented\n      </li>\n      <li>\n        Hosted using GitHub Pages and Google Firebase\n      </li>\n      <li>\n        Placeholder photos in place for homepage slideshow and gallery - gallery photos now zoom to full size upon click\n      </li>\n      <li>\n        Placeholder information used in Bio and Contact pages\n      </li>\n      <li>\n        Artwork marketplace linked in Contact page - future plans to implement local marketplace\n      </li>\n      <li>\n        Patch notes implemented\n      </li>\n    </ul>\n    <!-- patchouli dividisimo -->\n    <br />\n    <div class=\"patch-number\">\n      Candidates for future implementation\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li class=\"strikeout\">\n        Site will be migrated to 'http://killerkuff.com'\n      </li>\n      <li>\n        Marketplace integration/creation\n      </li>\n      <li class=\"strikeout\">\n        Support email and email routing\n      </li>\n      <li>\n        Enhance gallery with zoom function\n      </li>\n      <li>\n        Style details\n      </li>\n      <li>\n        Mobile version\n      </li>\n      <li>\n        Administration page and authentication/authorization and upload functionality\n      </li>\n    </ul>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nav-header die-nasty\">\n    <a class=\"link\" routerLink=\"/\">MIKE CUFF</a>\n</div>\n<div class=\"nav-links die-nasty\">\n    <a class=\"link pad\" routerLink=\"/gallery\">Gallery</a>\n    <a class=\"link pad\" routerLink=\"/bio\">Bio</a>\n    <a class=\"link pad\" routerLink=\"/contact\">Contact</a>\n</div>\n<div class=\"footer\">\n    <a class=\"link footer\" routerLink=\"/version\">V{{ versionNumber }}</a>\n</div>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/gallery/gallery.component */ "./src/app/main/gallery/gallery.component.ts");
/* harmony import */ var _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _main_bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/bio/bio.component */ "./src/app/main/bio/bio.component.ts");
/* harmony import */ var _main_version_version_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/version/version.component */ "./src/app/main/version/version.component.ts");
/* harmony import */ var _auth_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth/admin-page/admin-page.component */ "./src/app/auth/admin-page/admin-page.component.ts");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");










const routes = [
    {
        path: '',
        component: _main_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
        pathMatch: 'full'
    },
    {
        path: 'gallery',
        component: _main_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"]
    },
    {
        path: 'bio',
        component: _main_bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"]
    },
    {
        path: 'contact',
        component: _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: 'version',
        component: _main_version_version_component__WEBPACK_IMPORTED_MODULE_7__["VersionComponent"]
    },
    {
        path: 'administration',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_9__["AuthGuardService"]],
        component: _auth_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_8__["AdminPageComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        declarations: []
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _main_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main/gallery/gallery.component */ "./src/app/main/gallery/gallery.component.ts");
/* harmony import */ var _main_bio_bio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main/bio/bio.component */ "./src/app/main/bio/bio.component.ts");
/* harmony import */ var _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main/home/home.component */ "./src/app/main/home/home.component.ts");
/* harmony import */ var _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main/contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-simple-slideshow */ "./node_modules/ng-simple-slideshow/ng-simple-slideshow.js");
/* harmony import */ var _main_version_version_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main/version/version.component */ "./src/app/main/version/version.component.ts");
/* harmony import */ var _auth_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./auth/admin-page/admin-page.component */ "./src/app/auth/admin-page/admin-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
            _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"],
            _main_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_5__["GalleryComponent"],
            _main_bio_bio_component__WEBPACK_IMPORTED_MODULE_6__["BioComponent"],
            _main_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _main_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
            _main_version_version_component__WEBPACK_IMPORTED_MODULE_11__["VersionComponent"],
            _auth_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__["AdminPageComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            ng_simple_slideshow__WEBPACK_IMPORTED_MODULE_10__["SlideshowModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_17__["AngularFireDatabaseModule"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__["AngularFireAuthModule"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__["AngularFireStorageModule"],
            angularfire2__WEBPACK_IMPORTED_MODULE_14__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_18__["environment"].firebaseConfig)
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/admin-page/admin-page.component.css":
/*!**********************************************************!*\
  !*** ./src/app/auth/admin-page/admin-page.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".admin-container {\r\n    color: cornsilk;\r\n    position: absolute;\r\n    top: 30vh;\r\n    left: 25vw;\r\n    height: 60vh;\r\n    width: 50vw;\r\n}\r\n\r\n#image-selector {\r\n    display: none;\r\n}\r\n\r\n.btn {\r\n    padding: 1%;\r\n    margin: 1%;\r\n}\r\n\r\n.list-scroller {\r\n    border: solid 2px rgba(0, 0, 0, 0.2);\r\n    height: 30vh;\r\n    overflow-y: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsWUFBWTtJQUNaLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiBjb3Juc2lsaztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzB2aDtcclxuICAgIGxlZnQ6IDI1dnc7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogNTB2dztcclxufVxyXG5cclxuI2ltYWdlLXNlbGVjdG9yIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBtYXJnaW46IDElO1xyXG59XHJcblxyXG4ubGlzdC1zY3JvbGxlciB7XHJcbiAgICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/auth/admin-page/admin-page.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/admin-page/admin-page.component.ts ***!
  \*********************************************************/
/*! exports provided: AdminPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function() { return AdminPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");



let AdminPageComponent = class AdminPageComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.selectedImages = [];
        this.selectorClicked = false;
        this.select = 'Select';
        this.size = [];
        this.uploadStarted = false;
        this.uploadComplete = false;
    }
    ngOnInit() { }
    onFileSelect(event) {
        this.selectedImages = [];
        this.select = 'Reselect';
        this.selectorClicked = true;
        const imageFiles = event.target.files;
        const imageRegex = /^image\//;
        for (const image of imageFiles) {
            if (image.type.match(imageRegex)) {
                this.selectedImages.push(image);
                const sizeFormatted = Math.round(image.size * 0.001);
                this.size.push(sizeFormatted);
            }
            else {
                this.notAnImageMsg =
                    'One or more files were omitted due to unsupported format. Image files only.';
            }
        }
    }
    sendImages() {
        this.uploadStarted = true;
        if (this.selectedImages.length > 0) {
            this.storageService.onUpload(this.selectedImages);
        }
        else {
            this.notAnImageMsg = 'No images selected.';
        }
        this.storageService.uploadProgress
            .subscribe((res) => {
            this.uploadProgress = res;
            if (res === 100) {
                this.uploadComplete = true;
            }
        });
    }
};
AdminPageComponent.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/admin-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.css */ "./src/app/auth/admin-page/admin-page.component.css")).default]
    })
], AdminPageComponent);



/***/ }),

/***/ "./src/app/main/bio/bio.component.css":
/*!********************************************!*\
  !*** ./src/app/main/bio/bio.component.css ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bio-container {\r\n    position: absolute;\r\n    top: 30vh;\r\n    left: 30vh;\r\n    width: 50vw;\r\n}\r\n\r\n.bio-text {\r\n    color: whitesmoke;\r\n    font-size: 2em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9iaW8vYmlvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmlvL2Jpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJpby1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzB2aDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG59XHJcblxyXG4uYmlvLXRleHQge1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/bio/bio.component.ts":
/*!*******************************************!*\
  !*** ./src/app/main/bio/bio.component.ts ***!
  \*******************************************/
/*! exports provided: BioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function() { return BioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BioComponent = class BioComponent {
    constructor() {
        this.redClass = false;
    }
    ngOnInit() {
    }
};
BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bio',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/bio/bio.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bio.component.css */ "./src/app/main/bio/bio.component.css")).default]
    })
], BioComponent);



/***/ }),

/***/ "./src/app/main/contact/contact.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/contact/contact.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".contact-container {\r\n    position: fixed;\r\n    top: 30vh;\r\n    left: 30vw;\r\n}\r\n\r\n.contact {\r\n    list-style: none;\r\n    font-family: fantasy;\r\n    color: whitesmoke;\r\n    font-size: 2em;\r\n}\r\n\r\n.link-fix {\r\n    color: whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzB2dztcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmxpbmstZml4IHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/main/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/main/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/main/gallery/gallery.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/gallery/gallery.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gallery-container {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  position: fixed;\r\n  top: 20vh;\r\n  left: 10vw;\r\n  height: 70vh;\r\n  width: 80vw;\r\n}\r\n\r\n.gallery-photos {\r\n    display: inline;\r\n}\r\n\r\n.image-container {\r\n    display: inline-block;\r\n    height: 30%;\r\n    width: 20%;\r\n    padding: 2.5%;\r\n}\r\n\r\n.images-g {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n  color: whitesmoke;\r\n}\r\n\r\n.err {\r\n    color: blanchedalmond;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.image-modal {\r\n    color: whitesmoke;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    z-index: 4;\r\n    text-align: center;\r\n}\r\n\r\n.modal-image-container {\r\n    height: 100%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    z-index: 5;\r\n}\r\n\r\n.images-full {\r\n    padding: 0;\r\n    vertical-align: middle;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    z-index: 6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDIwdmg7XHJcbiAgbGVmdDogMTB2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXBob3RvcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZzogMi41JTtcclxufVxyXG5cclxuLmltYWdlcy1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5lcnIge1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmltYWdlLW1vZGFsIHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4uaW1hZ2VzLWZ1bGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNjtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/main/gallery/gallery.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/gallery/gallery.component.ts ***!
  \***************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");



let GalleryComponent = class GalleryComponent {
    constructor(storageService) {
        this.storageService = storageService;
        this.imageArr = []; // Image objects
        this.imageNames = []; // Names of images - used to pull images from Firebase Storage
        this.imageRefs = []; // SRC of images pulled from Firebase Storage
        this.showModal = false;
        this.loadingImages = true;
        this.imagePullError = null;
        this.image1 = "https://www.skullshoppe.com/images/skulls/rl%20ud1.jpg";
        this.image2 = "https://cdn.mos.cms.futurecdn.net/u8wSHMmMMXzZuAFBCmcsCK.jpg";
        this.image3 = "https://cdn.shopify.com/s/files/1/0038/3867/3008/products/Skull_Head_Statue_016_600x.jpg?v=1541304069";
        this.image4 = "https://upload.wikimedia.org/wikipedia/en/thumb/6/6c/ScorpionMKXRender.png/220px-ScorpionMKXRender.png";
        this.image5 = "https://i.ytimg.com/vi/Sg0rXa1WnZc/maxresdefault.jpg";
        this.pullImageNames();
    }
    ngOnInit() {
        this.checkImageArr();
    }
    checkImageArr() {
        if (this.imageArr.length < 1) {
            this.imagePullError = 'Loading ...';
        }
        else {
            this.imagePullError = null;
        }
    }
    pullImageNames() {
        this.storageService.pullImageNames()
            .valueChanges()
            .subscribe(pulledImageNames => {
            pulledImageNames.forEach(imageName => {
                this.imageNames.push(imageName);
            });
            this.imageNames.forEach(imgName => {
                this.pullImageRefs(imgName);
            });
        });
    }
    pullImageRefs(imageName) {
        this.storageService.pullImageRefs(imageName)
            .getDownloadURL()
            .subscribe(imgURL => {
            this.imageRefs.push(imgURL);
            this.imageArr.push({
                src: imgURL,
                alt: imageName,
                title: imageName
            });
            this.checkImageArr();
        });
    }
    pushImages() {
        this.imageArr.push({
            src: this.image1,
            alt: "Skull boi",
            title: "I dunno"
        });
        this.imageArr.push({
            src: this.image2,
            alt: "Skull boi",
            title: "I dunno"
        });
        this.imageArr.push({
            src: this.image3,
            alt: "Skull boi",
            title: "I dunno"
        });
        this.imageArr.push({
            src: this.image4,
            alt: "Skull boi",
            title: "GET OVER HERE"
        });
        this.imageArr.push({
            src: this.image5,
            alt: "Vader",
            title: "Darth Vader"
        });
    }
    fullSizeImage(imgIndex) {
        this.showModal = true;
        this.modalImage = this.imageArr[imgIndex];
    }
    hideModal() {
        this.showModal = false;
    }
};
GalleryComponent.ctorParameters = () => [
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
];
GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-gallery",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/gallery/gallery.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/main/gallery/gallery.component.css")).default]
    })
], GalleryComponent);



/***/ }),

/***/ "./src/app/main/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/main/home/home.component.css ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("slideshow {\r\n    position: absolute;\r\n    top: 30vh;\r\n    left: 25vw;\r\n    margin: auto;\r\n    box-shadow: 0px 0px 50px black;\r\n    width: 50vw;\r\n    height: 30vh;\r\n    font-family: 'die nasty';\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7QUFDNUIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2xpZGVzaG93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzB2aDtcclxuICAgIGxlZnQ6IDI1dnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggYmxhY2s7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnZGllIG5hc3R5JztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.imageSources = [
            // '../../../resources/skull_drawn.jpg',
            // '../../../resources/skull_vector.jpg',
            // '../../../resources/small_skull_drawn.jpg'
            {
                url: 'https://cdn-prod.mortalkombat.com/features/scorpion-bg.jpg',
                caption: 'Picture with caption',
                title: 'Picture title goes here'
            },
            {
                url: 'https://i.ytimg.com/vi/z_N2gPZKYIE/maxresdefault.jpg',
                clickAction: () => alert('picture clicked, function performed'),
                title: 'Cool sample picture #2'
            },
            {
                url: 'https://www.syfy.com/sites/syfy/files/styles/1200x680/public/2019/01/mortal_kombat_11_via_official_youtube_trailer_2019.png',
                caption: 'Clickable link',
                href: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
                title: 'hehe'
            }
        ];
        this.autoPlayInterval = 5000;
        this.captionColor = 'whitesmoke';
        this.captionBackground = 'rgba(0, 0, 0, .35)';
    }
    ngOnInit() { }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/main/home/home.component.css")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/main/version/version.component.css":
/*!****************************************************!*\
  !*** ./src/app/main/version/version.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Lato&display=swap');\r\n\r\n.version-container {\r\n    position: absolute;\r\n    top: 20vh;\r\n    left: 25vw;\r\n    height: 60vh;\r\n    width: 50vw;\r\n    overflow-y: auto;\r\n    color: whitesmoke;\r\n    font-family: 'Lato', monospace, sans-serif;\r\n}\r\n\r\n.dev-contact {\r\n    font-size: 1.4em;\r\n}\r\n\r\n.beauty-btn {\r\n    background-color: cadetblue;\r\n    border: solid 1px rgb(0, 113, 100);\r\n    border-radius: 4px;\r\n    font-family: monospace, Verdana, Geneva, Tahoma, sans-serif;\r\n    padding: .5%;\r\n}\r\n\r\n.patch-notes-list {\r\n    list-style-type: circle;\r\n}\r\n\r\n.strikeout {\r\n    -webkit-text-decoration-line: line-through;\r\n            text-decoration-line: line-through;\r\n}\r\n\r\n.login-container {\r\n    color: whitesmoke;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    z-index: 5;\r\n    text-align: center;\r\n}\r\n\r\n.login-box {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 25%;\r\n    width: 50%;\r\n    max-height: 60%;\r\n    background-color: rgba(31, 36, 46, 0.4);\r\n    padding: 2% 0;\r\n    z-index: 6;\r\n}\r\n\r\n.input {\r\n    border: none;\r\n    background-color: rgb(65, 48, 48);\r\n    color: cornsilk;\r\n    padding: 1%;\r\n    font-size: 2em;\r\n    margin: 1%;\r\n    z-index: 10;\r\n    max-width: 100%;\r\n    max-height: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi92ZXJzaW9uL3ZlcnNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RUFBd0U7O0FBRXhFO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsWUFBWTtJQUNaLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLDBDQUEwQztBQUM5Qzs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLDJEQUEyRDtJQUMzRCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksMENBQWtDO1lBQWxDLGtDQUFrQztBQUN0Qzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsVUFBVTtJQUNWLGVBQWU7SUFDZix1Q0FBdUM7SUFDdkMsYUFBYTtJQUNiLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFlBQVk7SUFDWixpQ0FBaUM7SUFDakMsZUFBZTtJQUNmLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21haW4vdmVyc2lvbi92ZXJzaW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG8mZGlzcGxheT1zd2FwJyk7XHJcblxyXG4udmVyc2lvbi1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAyMHZoO1xyXG4gICAgbGVmdDogMjV2dztcclxuICAgIGhlaWdodDogNjB2aDtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgbW9ub3NwYWNlLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4uZGV2LWNvbnRhY3Qge1xyXG4gICAgZm9udC1zaXplOiAxLjRlbTtcclxufVxyXG5cclxuLmJlYXV0eS1idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY2FkZXRibHVlO1xyXG4gICAgYm9yZGVyOiBzb2xpZCAxcHggcmdiKDAsIDExMywgMTAwKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmO1xyXG4gICAgcGFkZGluZzogLjUlO1xyXG59XHJcblxyXG4ucGF0Y2gtbm90ZXMtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IGNpcmNsZTtcclxufVxyXG5cclxuLnN0cmlrZW91dCB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogbGluZS10aHJvdWdoO1xyXG59XHJcblxyXG4ubG9naW4tY29udGFpbmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB6LWluZGV4OiA1O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgbGVmdDogMjUlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIG1heC1oZWlnaHQ6IDYwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDM2LCA0NiwgMC40KTtcclxuICAgIHBhZGRpbmc6IDIlIDA7XHJcbiAgICB6LWluZGV4OiA2O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY1LCA0OCwgNDgpO1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgcGFkZGluZzogMSU7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICAgIG1hcmdpbjogMSU7XHJcbiAgICB6LWluZGV4OiAxMDtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/main/version/version.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/version/version.component.ts ***!
  \***************************************************/
/*! exports provided: VersionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function() { return VersionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authenticate.service */ "./src/app/services/authenticate.service.ts");



let VersionComponent = class VersionComponent {
    constructor(authService) {
        this.authService = authService;
        this.loginModal = false;
        this.currentAppVersion = 'Error, please reload.';
        this.currentAppVersion = this.authService.appVersion;
    }
    ngOnInit() {
    }
    loginModalShow() {
        this.loginModal = true;
    }
    loginModalHide() {
        this.loginModal = false;
    }
    badTouch(event) {
        event.stopPropagation();
    }
    tryLogin() {
        // try login and redirect with authguard activated
    }
};
VersionComponent.ctorParameters = () => [
    { type: src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] }
];
VersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-version',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./version.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/version/version.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./version.component.css */ "./src/app/main/version/version.component.css")).default]
    })
], VersionComponent);



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer {\r\n    position: fixed;\r\n    bottom: 0;\r\n    right: 1%;\r\n    font-size: 1.2em;\r\n    font-family: monospace;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLFNBQVM7SUFDVCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgZm9udC1zaXplOiAxLjJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");



let NavbarComponent = class NavbarComponent {
    constructor(auth) {
        this.auth = auth;
        this.versionNumber = this.auth.appVersion;
    }
    ngOnInit() {
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthGuardService = class AuthGuardService {
    constructor() { }
    canActivate() {
        return true;
    }
};
AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuardService);



/***/ }),

/***/ "./src/app/services/authenticate.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/authenticate.service.ts ***!
  \**************************************************/
/*! exports provided: AuthenticateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function() { return AuthenticateService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthenticateService = class AuthenticateService {
    constructor() {
        this.appVersion = '1.2.0';
    }
};
AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticateService);



/***/ }),

/***/ "./src/app/services/storage.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);




let StorageService = class StorageService {
    constructor(db, rtdb) {
        this.db = db;
        this.rtdb = rtdb;
        this.imageNames = [];
        this.imageRefs = [];
    }
    onUpload(imageList) {
        for (let i = 0; i < imageList.length; i++) {
            const currentImage = imageList[i];
            this.ref = this.db.ref("pictures/" + currentImage.name);
            this.rtdb.database.ref("imageNames").push(currentImage.name);
            this.task = this.ref.put(currentImage);
            this.uploadProgress = this.task.percentageChanges();
        }
    }
    pullImageNames() {
        const path = "/imageNames";
        return this.rtdb.list(path);
    }
    pullImageRefs(imgName) {
        return this.db.ref("pictures/" + imgName);
    }
};
StorageService.ctorParameters = () => [
    { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
    { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
];
StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    })
], StorageService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyCgUEIHqxkwQ1il88IpJnCJzN5RoJUd_7Q',
        authDomain: 'mike-cuff-portfolio.firebaseapp.com',
        databaseURL: 'https://mike-cuff-portfolio.firebaseio.com',
        projectId: 'mike-cuff-portfolio',
        storageBucket: 'mike-cuff-portfolio.appspot.com',
        messagingSenderId: '337222460170',
        appId: '1:337222460170:web:d64c23369c5352fd8350f3',
        measurementId: 'G-YVM4M2Z64M'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\wNewman\Code\Github\mc-portfolio\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body-mask\">\n  <app-navbar></app-navbar>\n\n  <router-outlet></router-outlet>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/add-images/add-images.component.html": 
        /*!************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/add-images/add-images.component.html ***!
          \************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image-upload\">\n  <h3 class=\"collapse-btn\" (click)=\"toggleCollapse()\">\n    Upload new images\n    <span *ngIf=\"!collapsed\" class=\"arrow down\"></span>\n    <span *ngIf=\"collapsed\" class=\"arrow up\"></span>\n  </h3>\n  <span *ngIf=\"collapsed\">\n    <input\n      type=\"file\"\n      name=\"image-selector\"\n      id=\"image-selector\"\n      multiple\n      accept=\"image/*\"\n      (change)=\"onFileSelect($event)\"\n      #fileInput\n    />\n    <button\n      type=\"button\"\n      (click)=\"fileInput.click()\"\n      id=\"select-btn\"\n      class=\"select-btn btn\"\n    >\n      {{ select }} Image(s) to Upload\n    </button>\n    <label for=\"select-btn\">(.jpg, .png, .gif supported)</label>\n    <br />\n    <br />\n    <div class=\"list-container\" *ngIf=\"selectorClicked\">\n      Images to Upload\n      <div class=\"list-scroller\">\n        <ul class=\"image-list\" *ngFor=\"let image of selectedImages; index as i\">\n          <li>\n            <div class=\"image-name\">Name: {{ image.name }}</div>\n            <div class=\"image-size\">Size: {{ size[i] }}KB</div>\n          </li>\n        </ul>\n      </div>\n      <br />\n      <div class=\"warning-unsupported\">{{ notAnImageMsg }}</div>\n      <br />\n      <button class=\"upload-btn btn\" (click)=\"sendImages()\">\n        Upload Image(s)\n      </button>\n      <br />\n      <div class=\"progress\" *ngIf=\"uploadStarted\">\n        Progress: {{ uploadProgress }}%\n      </div>\n      <div class=\"completion-level\" *ngIf=\"uploadComplete\">\n        Upload Complete!\n      </div>\n    </div>\n  </span>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/admin-page.component.html": 
        /*!*************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/admin-page.component.html ***!
          \*************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"header\">\r\n  Admin Menu\r\n</div>\r\n<div class=\"admin-container\">\r\n  <app-move-images></app-move-images>\r\n  <app-add-images></app-add-images>\r\n</div>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/move-images/move-images.component.html": 
        /*!**************************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/move-images/move-images.component.html ***!
          \**************************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image-move\">\n  <h3 class=\"collapse-btn\" (click)=\"toggleCollapse()\">\n    Reorder images\n    <span *ngIf=\"!collapsed\" class=\"arrow down\"></span>\n    <span *ngIf=\"collapsed\" class=\"arrow up\"></span>\n  </h3>\n  <span *ngIf=\"collapsed\">\n    <table id=\"image-item\">\n      <thead>\n        <tr>\n          <th>Order</th>\n          <th>Name</th>\n          <th>Type</th>\n          <th>Controls</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr class=\"image-list\" *ngFor=\"let image of imageMetadata; let i = index\">\n            <td class=\"index\">{{ image.index }}</td>\n            <td class=\"name\">{{ image.name }}</td>\n            <td class=\"type\">{{ image.type }}</td>\n            <td class=\"controls\">\n              <span class=\"move-up\" (click)=\"moveUp(i)\">Up</span>\n              <span class=\"move-down\" (click)=\"moveDown(i)\">Down</span>\n            </td>\n        </tr>\n      </tbody>\n    </table>\n    <div class=\"errors\">{{ errMessage }}</div>\n    <div class=\"link\" (click)=\"saveConfig()\">\n      Save Configuration\n    </div>\n    <div class=\"link float\" (click)=\"resetConfig()\">\n      Reset Configuration\n    </div>\n  </span>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/bio/bio.component.html": 
        /*!***********************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/bio/bio.component.html ***!
          \***********************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <div class=\"bio-container\">\n    <div class=\"bio-text\" [ngClass]=\"{'color-red':redClass}\">\n        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel unde iusto quod tempora molestiae in dignissimos ullam odit non voluptas eveniet nobis dolore, alias laborum illo exercitationem delectus quam quibusdam.\n    </div>\n</div>\n<article class=\"starwars\">\n  <audio preload=\"auto\">\n    <source\n      src=\"https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.ogg\"\n      type=\"audio/ogg\"\n    />\n    <source\n      src=\"https://s.cdpn.io/1202/Star_Wars_original_opening_crawl_1977.mp3\"\n      type=\"audio/mpeg\"\n    />\n  </audio>\n\n  <section class=\"start\">\n    <p>\n      Press Start\n      <br />\n      <span>Star Wars opening crawl</span>\n      <br />\n      yuh mum\n      <br />\n      <span>Beep bop beep bop beedo bohp</span>\n    </p>\n  </section>\n\n  <div class=\"animation\">\n    <section class=\"intro\">\n      A long time ago, in a galaxy far,<br />\n      far away....\n    </section>\n\n    <section class=\"titles\">\n      <div contenteditable=\"true\" spellcheck=\"false\">\n        <p>\n          It is a period of civil war. Rebel spaceships, striking from a hidden\n          base, have won their first victory against the evil Galactic Empire.\n        </p>\n\n        <p>\n          During the battle, Rebel spies managed to steal secret plans to the\n          Empire's ultimate weapon, the DEATH STAR, an armored space station\n          with enough power to destroy an entire planet.\n        </p>\n\n        <p>\n          Pursued by the Empire's sinister agents, Princess Leia races home\n          aboard her starship, custodian of the stolen plan that can save her\n          people and restore freedom to the galaxy....\n        </p>\n      </div>\n    </section>\n\n    <section class=\"logo\">\n      <svg\n        version=\"1.0\"\n        id=\"Layer_1\"\n        xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\"\n        x=\"0px\"\n        y=\"0px\"\n        width=\"693.615px\"\n        height=\"419.375px\"\n        viewBox=\"0 0 693.615 419.375\"\n        enable-background=\"new 0 0 693.615 419.375\"\n        xml:space=\"preserve\"\n      >\n        <g id=\"Layer_2\">\n          <g>\n            <path\n              fill=\"#FFE81F\"\n              d=\"M148.718,221.207l8.67,25.461c4.691,13.768,8.879,24.779,9.425,24.779c0.009,0,0.017-0.004,0.024-0.01\n              c0.6-0.53,17.57-49.811,17.57-49.811h32.89l-39.68,115.619h-22.86c0,0-24.4-70.471-24.3-70.739l-25.47,69.851h-22.63\n              l-39.18-115.15l32.73,0.021c0,0,17.929,50.821,18.168,50.821c0.001,0,0.001-0.001,0.002-0.002l17.89-50.841H148.718 M32.003,213.2\n              l3.601,10.584l39.18,115.149l1.845,5.424h5.729h22.63h5.598l1.918-5.26l17.685-48.5c1.524,4.434,3.171,9.213,4.818,13.988\n              c6.089,17.655,12.191,35.277,12.191,35.277l1.864,5.383h5.696h22.86h5.712l1.854-5.403l39.68-115.618l3.637-10.598h-11.204h-32.89\n              h-5.706l-1.858,5.396c-2.974,8.635-6.921,20.031-10.296,29.676c-0.509-1.463-1.039-3.001-1.587-4.611l-8.669-25.46l-1.846-5.421\n              h-5.727h-36.75h-5.666l-1.881,5.345l-10.453,29.706c-3.453-9.706-7.456-21.017-10.516-29.691l-1.882-5.334l-5.657-0.004\n              l-32.73-0.021L32.003,213.2L32.003,213.2z\"\n            />\n          </g>\n          <g>\n            <path\n              fill=\"#FFE81F\"\n              d=\"M655.258,220.758l-0.075,30.305c0,0-32.643-0.109-49.239-0.109c-5.521,0-9.266,0.013-9.444,0.045\n              c-2.86,0.521-4.681,6.602-3.87,9.271c0.399,1.35,3.391,5.76,6.63,9.81c3.229,4.051,8.54,10.681,11.78,14.729\n              c8.319,10.381,9.46,12.43,10.229,18.391c1.25,9.681-3.329,20.16-11.829,27.07c-8.518,6.93-8.145,6.979-71.383,6.979\n              c-0.916,0-1.835,0-2.777,0c-38.46-0.01-58.8-0.329-61.761-0.989c-5.26-1.19-13.64-8.03-35.79-29.28\n              c-7.967-7.636-15.309-14.322-15.686-14.324c-0.01,0-0.015,0.006-0.015,0.016l-0.261,44.579l-35.899-0.159l-0.221-114.98h45.271\n              h34.79c24.13,0.871,40.46,24.91,37.21,40.24c-0.74,3.479-2.62,8.521-4.181,11.2c-3.21,5.5-11.38,12.56-18.011,15.591\n              c-2.449,1.108-4.449,2.398-4.449,2.858c0,1.71,8.061,9.649,11.08,10.91c2.579,1.079,10.09,1.319,43.21,1.319\n              c3.882,0,7.408,0.002,10.608,0.002c33.293,0,31.618-0.24,34.19-5.741c1.801-3.83,0.431-6.12-12.239-20.39\n              c-16.051-15.971-14.37-23.621-14.48-29.271c-0.229-6.77,5.102-28.069,32.812-28.069L655.258,220.758 M440.188,273.878\n              c15.37,0,18.49-0.239,21.761-1.66c11.04-4.8,11.63-18.979,1.04-25.271c-2.319-1.381-5.3-1.609-21.96-1.7l-19.279-0.101\n              c0.159,0.15-0.061,27.57-0.061,27.57S426.518,273.878,440.188,273.878 M663.277,212.758h-8.021h-73.8\n              c-16.032,0-25.515,6.328-30.646,11.637c-8.347,8.633-10.313,19.504-10.162,24.629c0.008,0.427,0.003,0.865-0.002,1.322\n              c-0.073,8.329,1.154,17.758,16.659,33.246c3.065,3.452,8.193,9.239,10.131,12.115c-4.238,0.521-14.98,0.521-26.262,0.521h-4.792\n              l-5.816-0.002c-19.904,0-36.688-0.057-40.128-0.736c-0.481-0.314-1.156-0.854-1.898-1.498c6.877-4.235,13.83-10.799,17.104-16.412\n              c1.987-3.413,4.178-9.243,5.098-13.568c2.04-9.625-1.325-21.236-9.001-31.068c-8.956-11.471-21.985-18.334-35.746-18.83\n              l-0.145-0.006h-0.145h-34.79h-45.271h-8.016l0.016,8.017l0.221,114.979l0.016,7.949l7.949,0.035l35.899,0.159l7.988,0.035\n              l0.047-7.988l0.155-26.706c0.733,0.696,1.491,1.419,2.269,2.165c24.227,23.24,32.359,29.679,39.562,31.308\n              c1.979,0.441,5.253,1.172,63.523,1.188h2.779c31.546,0,47.38,0,56.799-0.91c10.789-1.043,14.259-3.49,19.461-7.725l0.173-0.141\n              c10.685-8.687,16.323-21.83,14.715-34.3c-1.048-8.11-3.194-11.479-11.922-22.368l-2.594-3.24\n              c-3.04-3.799-6.713-8.387-9.175-11.475c-1.986-2.484-3.546-4.689-4.487-6.133c1.236-0.003,2.841-0.005,4.918-0.005\n              c16.395,0,48.887,0.108,49.213,0.11l8.008,0.026l0.02-8.008l0.075-30.306L663.277,212.758L663.277,212.758z M429.739,265.586\n              c0.013-2.021,0.025-4.287,0.038-6.557c0.01-2,0.019-4.004,0.022-5.84l11.187,0.058c6.429,0.035,16.103,0.088,17.989,0.623\n              c2.407,1.461,3.75,3.72,3.604,6.06c-0.08,1.264-0.682,3.588-3.821,4.951c-1.75,0.76-4.54,0.997-18.57,0.997\n              C435.738,265.878,432.305,265.749,429.739,265.586L429.739,265.586z\"\n            />\n          </g>\n          <g>\n            <path\n              fill=\"#FFE81F\"\n              d=\"M312.908,220.287l40.29,115.92l-32.83,0.15l-5.45-17.41l-58.7-0.471l-5.18,17.431l-32.5-0.341\n              l39.78-115.229L312.908,220.287 M286.507,237.283c-0.083,0.333-5.144,14.219-10.222,28.104c-5.12,14-10.257,28-10.328,28.109\n              c0,0.001-0.001,0.001,0,0.001l0,0c0,0,0,0,0-0.001c0.136-0.04,18.316-0.08,29.968-0.08c5.453,0,9.475,0.009,9.55,0.029\n              c0.001,0.004,0.001,0.005,0.001,0.005s0-0.001,0-0.003c0,0,0,0-0.001-0.002C305.271,292.916,286.566,237.959,286.507,237.283\n              c0.001-0.004,0.001-0.006,0.001-0.006l0,0C286.507,237.277,286.507,237.279,286.507,237.283 M318.595,212.282l-5.693,0.005\n              l-54.59,0.051l-5.696,0.005l-1.859,5.386l-39.78,115.229l-3.623,10.494l11.102,0.115l32.5,0.341l6.033,0.063l1.719-5.782\n              l3.466-11.662l46.854,0.375l3.708,11.848l1.765,5.638l5.907-0.026l32.829-0.15l11.195-0.052l-3.676-10.574l-40.29-115.92\n              L318.595,212.282L318.595,212.282z M277.472,285.424c1.515-4.129,3.556-9.71,6.327-17.289c0.869-2.376,1.664-4.551,2.393-6.545\n              c0.663,1.956,1.385,4.084,2.169,6.398c0.646,1.906,3.485,10.27,5.92,17.428C287.041,285.416,281.591,285.417,277.472,285.424\n              L277.472,285.424z\"\n            />\n          </g>\n          <g>\n            <path\n              fill=\"#FFE81F\"\n              d=\"M326.488,81.928v28.6h-57.28v87.47h-34.15v-87.54l-66.86,0.19c-8.06,0-9.14,6.42-9.14,8.88\n              c0,3.02,1.97,6.04,12.79,19.74c7.02,8.9,13.47,17.78,14.32,19.72c4.64,10.68-1.36,27.32-12.29,34.08\n              c-7.79,4.813-6.459,4.931-64.308,4.931c-2.974,0-6.096,0-9.392,0h-62.27v-32.13h97.9l2.89-2.01c1.95-1.36,3.08-3.23,3.51-5.79\n              c0.6-3.68,0.29-4.16-11.8-17.78c-14.29-16.1-15.8-19.04-15.06-29.32c0.84-11.73,11.3-28.77,29.58-28.77L326.488,81.928\n               M334.488,73.916l-8.013,0.012l-181.56,0.27c-10.458,0-20.171,4.518-27.342,12.722c-5.814,6.652-9.63,15.429-10.206,23.477\n              c-0.973,13.511,2.137,18.393,17.056,35.202c4.33,4.877,8.447,9.516,9.821,11.486c-0.022,0.079-0.042,0.13-0.054,0.159\n              c-0.015,0.012-0.038,0.03-0.07,0.052l-0.822,0.572H37.908h-8v8v32.13v8h8h62.27h4.937h4.455c28.522,0,42.6-0.027,50.894-0.635\n              c9.49-0.695,12.518-2.323,17.054-5.14l0.566-0.351c14.262-8.821,21.612-29.827,15.422-44.074\n              c-1.91-4.358-14.003-19.746-15.376-21.486c-3.796-4.807-10.062-12.74-11.054-15.036c0.024-0.193,0.071-0.393,0.121-0.532\n              c0.165-0.042,0.481-0.098,1.001-0.098l58.86-0.167v79.517v8h8h34.15h8v-8v-79.47h49.28h8v-8v-28.6V73.916L334.488,73.916z\"\n            />\n          </g>\n          <g>\n            <path\n              fill=\"#FFE81F\"\n              d=\"M419.548,82.857l40.18,116.22l-32.77-0.18l-5.32-17.41l-58.439-0.26l-5.221,16.77h-33.369l39.739-115.14\n              H419.548 M372.737,156.478l39.801-0.05c0.001,0,0.001,0.001,0.001,0.001c0.136,0-19.342-57.201-19.472-57.241l0,0\n              C392.925,99.183,372.288,156.478,372.737,156.478 M425.247,74.857h-5.699h-55.2h-5.701l-1.86,5.39l-39.74,115.141l-3.662,10.61\n              h11.225h33.37h5.889l1.75-5.623l3.461-11.121l46.632,0.207l3.599,11.774l1.721,5.629l5.887,0.033l32.77,0.18l11.297,0.062\n              l-3.691-10.676l-40.18-116.22L425.247,74.857L425.247,74.857z M383.851,148.464c2.468-7.027,5.904-16.657,9.014-25.312\n              c2.948,8.644,6.209,18.245,8.588,25.29L383.851,148.464L383.851,148.464z\"\n            />\n          </g>\n          <g>\n            <path\n              fill=\"#FFE81F\"\n              d=\"M532.396,82.857c25.921,0,43.91,0.37,47.37,0.97c8,1.39,15.23,5.66,20.65,12.22\n              c5.67,6.86,6.97,10.14,7.71,19.54c1.061,13.27-5.25,24.72-17.7,32.15c-3.63,2.17-7.359,4.28-8.29,4.7\n              c-1.43,0.65-1.239,1.27,1.32,4.27c1.649,1.93,4.51,4.68,6.35,6.11l3.36,2.61l62.08,0.89l0.609,31.68h-38.061\n              c-29.439,0-38.86-0.27-41.62-1.2c-4.13-1.4-14.069-9.82-34.271-29.04l-14.42-13.72l0.152,43.96h-37.043V82.857H532.396\n               M526.938,134.627h19.671c19.141,0,19.739-0.06,22.47-2.11c4.881-3.66,6.609-7.43,6.091-13.22c-0.53-5.97-2.83-9.08-8.601-11.58\n              c-3.25-1.42-6.381-1.65-21.721-1.65h-17.91V134.627 M532.396,74.857h-41.8h-8v8v115.14v8h8h37.043h8.028l-0.028-8.028\n              l-0.088-25.216l0.84,0.799c24.986,23.773,32.356,29.173,37.218,30.821c3.733,1.259,9.982,1.624,44.188,1.624h38.061h8.154\n              l-0.156-8.154l-0.609-31.68l-0.148-7.734l-7.734-0.111l-59.402-0.851l-1.245-0.967c-0.396-0.309-0.876-0.717-1.389-1.179\n              c0.446-0.264,0.854-0.507,1.207-0.717c15.003-8.953,22.866-23.407,21.569-39.653c-0.863-10.959-2.82-15.896-9.52-24\n              c-6.584-7.969-15.621-13.298-25.447-15.005C575.678,74.999,548.257,74.857,532.396,74.857L532.396,74.857z M534.938,114.067h9.91\n              c14.027,0,16.806,0.233,18.518,0.981c3.25,1.408,3.58,2.091,3.835,4.957c0.256,2.848-0.097,3.994-2.922,6.112\n              c-0.093,0.069-0.164,0.123-0.223,0.166c-1.865,0.345-8.786,0.345-17.447,0.345h-11.67L534.938,114.067L534.938,114.067z\"\n            />\n          </g>\n        </g>\n      </svg>\n    </section>\n  </div>\n</article> -->\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/contact/contact.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/contact/contact.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contact-container\">\n  <ul class=\"contact\">\n    <li>\n      Email:\n      <a class=\"link link-fix\" href=\"mailto:mike@killerkuff.com\"\n        >mike@killerkuff.com</a\n      >\n    </li>\n    <li>Phone: xxx-xxx-xxxx</li>\n    <li>\n      <a\n        class=\"link link-fix\"\n        target=\"_blank\"\n        href=\"https://www.absolutearts.com/portfolios/k/killerkuff/\"\n        >Mike's Absolute Arts Profile</a\n      >\n    </li>\n  </ul>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/gallery/gallery.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/gallery/gallery.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gallery-container\">\n  <div class=\"err\">{{ imagePullError }}</div>\n  <div class=\"gallery-photos\" *ngFor=\"let image of imageArr; let i = index\">\n    <div class=\"image-container\" (click)=\"fullSizeImage(i)\">\n      <img\n        class=\"images-g\"\n        src=\"{{ image.src }}\"\n        alt=\"{{ image.alt }}\"\n        title=\"{{ image.title }}\"\n      />\n    </div>\n  </div>\n</div>\n\n<div class=\"image-modal\" *ngIf=\"showModal\" (click)=\"hideModal()\">\n  <span class=\"modal-image-container\"></span>\n  <img\n    class=\"images-full\"\n    src=\"{{ modalImage.src }}\"\n    alt=\"{{ modalImage.alt }}\"\n    title=\"{{ modalImage.title }}\"\n  />\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<slideshow [height]=\"'100%'\" [minHeight]=\"'100px'\" [autoPlay]=\"true\" [showArrows]=\"true\" [imageUrls]=\"imageSources\"\n  [lazyLoad]=\"imageSources?.length > 1\" [autoPlayWaitForLazyLoad]=\"true\" [autoPlayInterval]=\"autoPlayInterval\"\n  [captionColor]=\"captionColor\" [captionBackground]=\"captionBackground\">\n</slideshow>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/version/version.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/version/version.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"version-container\">\n  <div class=\"dev-contact\">\n    For issues with this website please contact:\n    <button class=\"beauty-btn\">\n      <a class=\"link\" href=\"mailto:billycoda@killerkuff.com\">billycoda@killerkuff.com</a>\n    </button>\n  </div>\n  <div class=\"admin-access\">\n    Admin access:\n    <button class=\"beauty-btn\" (click)=\"loginModalShow()\">\n      <a class=\"link\">LOGIN</a>\n    </button>\n  </div>\n\n  <div *ngIf=\"loginModal\" class=\"login-modal\">\n    <div class=\"login-container\" (click)=\"loginModalHide()\">\n      <div class=\"login-box\" (click)=\"badTouch($event)\">\n        <div class=\"input-box\">\n          <input type=\"username\" class=\"input username\" />\n        </div>\n        <div class=\"input-box\">\n          <input type=\"password\" class=\"input password\" />\n        </div>\n        <div class=\"input-box\">\n          <button class=\"better-btn\" (click)=\"tryLogin()\" routerLink=\"/administration\">Go to Admin Page</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <br />\n  <div class=\"patch-notes\">\n    <div class=\"header\">\n      Version Notes\n    </div>\n    <div class=\"version-current\">\n      Current version is {{ currentAppVersion }}\n    </div>\n    <hr />\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.2.3\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Implemented admin option to order gallery\n      </li>\n      <li>\n        Bug fixes including the gallery index one I created\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.2.2\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Added more admin options, styled the admin buttons\n      </li>\n      <li>\n        Indexed gallery to be ordered and not spawn randomly\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.2.1\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Updated variable types, various small fixes\n      </li>\n      <li>\n        Added better documentation\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.2.0\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Site now hosted by Google\n      </li>\n      <li>\n        Email <a class=\"link\" href=\"mailto:mike@killerkuff.com\">mike@killerkuff.com</a> is live\n      </li>\n      <li>\n        Image upload and retrieval is implemented\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.1.0\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Site now hosted at 'https://killerkuff.com'\n      </li>\n      <li>\n        Support email implemented and live\n      </li>\n    </ul>\n    <!-- patch divider -->\n    <br />\n    <div class=\"patch-number\">\n      V1.0.0\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li>\n        Basic site structure with component and 404 routing implemented\n      </li>\n      <li>\n        Hosted using GitHub Pages and Google Firebase\n      </li>\n      <li>\n        Placeholder photos in place for homepage slideshow and gallery - gallery photos now zoom to full size upon click\n      </li>\n      <li>\n        Placeholder information used in Bio and Contact pages\n      </li>\n      <li>\n        Artwork marketplace linked in Contact page - future plans to implement local marketplace\n      </li>\n      <li>\n        Patch notes implemented\n      </li>\n    </ul>\n    <!-- patchouli dividisimo -->\n    <br />\n    <div class=\"patch-number\">\n      Candidates for future implementation\n    </div>\n    <ul class=\"patch-notes-list\">\n      <li class=\"strikeout\">\n        Site will be migrated to 'http://killerkuff.com'\n      </li>\n      <li>\n        Marketplace integration/creation\n      </li>\n      <li class=\"strikeout\">\n        Support email and email routing\n      </li>\n      <li>\n        Enhance gallery with zoom function\n      </li>\n      <li>\n        Style details\n      </li>\n      <li>\n        Mobile version\n      </li>\n      <li>\n        Administration page and authentication/authorization and upload functionality\n      </li>\n    </ul>\n  </div>\n</div>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"full-bar\">\n  <div class=\"nav-header die-nasty\">\n    <a class=\"link\" routerLink=\"/\">MIKE CUFF</a>\n  </div>\n\n  <nav [ngClass]=\"{ show: hamActive, 'nav-links': true, 'die-nasty': true }\">\n    <a class=\"link pad\" routerLink=\"/gallery\">Gallery</a>\n    <a class=\"link pad\" routerLink=\"/bio\">Bio</a>\n    <a class=\"link pad\" routerLink=\"/contact\">Contact</a>\n  </nav>\n</div>\n\n<div class=\"footer\">\n  <a class=\"link footer\" routerLink=\"/version\">V{{ versionNumber }}</a>\n</div>\n\n<div id=\"container\" class=\"ham-boi\" (click)=\"toggleHamburgerActive()\">\n  <div id=\"burger\" [ngClass]=\"{ active: hamActive }\">\n    <div class=\"bun top\"></div>\n    <div class=\"filling\"></div>\n    <div class=\"bun bottom\"></div>\n  </div>\n</div>\n\n<div id=\"blades\" class=\"b1\"></div>\n<div id=\"blades\" class=\"b2\"></div>\n\n<nav [ngClass]=\"{ show: hamActive, 'ham-boi': true }\">\n  <ul>\n    <li class=\"purple\">\n      <a class=\"link\" routerLink=\"/\">Home</a>\n    </li>\n    <li class=\"green\">\n      <a class=\"link pad\" routerLink=\"/gallery\">Gallery</a>\n    </li>\n    <li class=\"red\">\n      <a class=\"link pad\" routerLink=\"/bio\">Bio</a>\n    </li>\n    <li class=\"yellow\">\n      <a class=\"link pad\" routerLink=\"/contact\">Contact</a>\n    </li>\n  </ul>\n</nav>\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
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
            var routes = [
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
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
                    declarations: []
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent() {
                }
                return AppComponent;
            }());
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
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
            /* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
            /* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_15__);
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
            /* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_16__);
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_17__);
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _auth_admin_page_add_images_add_images_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/admin-page/add-images/add-images.component */ "./src/app/auth/admin-page/add-images/add-images.component.ts");
            /* harmony import */ var _auth_admin_page_move_images_move_images_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./auth/admin-page/move-images/move-images.component */ "./src/app/auth/admin-page/move-images/move-images.component.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
                        _auth_admin_page_admin_page_component__WEBPACK_IMPORTED_MODULE_12__["AdminPageComponent"],
                        _auth_admin_page_add_images_add_images_component__WEBPACK_IMPORTED_MODULE_19__["AddImagesComponent"],
                        _auth_admin_page_move_images_move_images_component__WEBPACK_IMPORTED_MODULE_20__["MoveImagesComponent"]
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
            /***/ 
        }),
        /***/ "./src/app/auth/admin-page/add-images/add-images.component.scss": 
        /*!**********************************************************************!*\
          !*** ./src/app/auth/admin-page/add-images/add-images.component.scss ***!
          \**********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#image-selector {\n  display: none;\n}\n\n.btn {\n  padding: 1%;\n  margin: 1%;\n}\n\n.list-scroller {\n  border: solid 2px rgba(0, 0, 0, 0.2);\n  height: 30vh;\n  overflow-y: auto;\n}\n\n.collapse-btn {\n  color: white;\n  border-top: solid 1px blanchedalmond;\n  border-bottom: solid 1px blanchedalmond;\n  cursor: pointer;\n}\n\n.arrow {\n  float: right;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  padding: 4px;\n  margin: auto 10px;\n}\n\n.down {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n\n.up {\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL2FkZC1pbWFnZXMvQzpcXFVzZXJzXFx3TmV3bWFuXFxDb2RlXFxHaXRodWJcXG1jLXBvcnRmb2xpby9zcmNcXGFwcFxcYXV0aFxcYWRtaW4tcGFnZVxcYWRkLWltYWdlc1xcYWRkLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL2FkZC1pbWFnZXMvYWRkLWltYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUNBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0Usd0JBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0UsMEJBQUE7RUFDQSxrQ0FBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL2FkZC1pbWFnZXMvYWRkLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWFnZS1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuLmxpc3Qtc2Nyb2xsZXIge1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICBoZWlnaHQ6IDMwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxufVxyXG5cclxuLmNvbGxhcHNlLWJ0biB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBibGFuY2hlZGFsbW9uZDtcclxuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhbmNoZWRhbG1vbmQ7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYXJyb3cge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBib3JkZXI6IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW46IGF1dG8gMTBweDtcclxufVxyXG5cclxuLmRvd24ge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcclxufVxyXG5cclxuLnVwIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMTM1ZGVnKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG59XHJcbiIsIiNpbWFnZS1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxJTtcbiAgbWFyZ2luOiAxJTtcbn1cblxuLmxpc3Qtc2Nyb2xsZXIge1xuICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGhlaWdodDogMzB2aDtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmNvbGxhcHNlLWJ0biB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYW5jaGVkYWxtb25kO1xuICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggYmxhbmNoZWRhbG1vbmQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmFycm93IHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXI6IHNvbGlkIHdoaXRlO1xuICBib3JkZXItd2lkdGg6IDAgM3B4IDNweCAwO1xuICBwYWRkaW5nOiA0cHg7XG4gIG1hcmdpbjogYXV0byAxMHB4O1xufVxuXG4uZG93biB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG59XG5cbi51cCB7XG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/auth/admin-page/add-images/add-images.component.ts": 
        /*!********************************************************************!*\
          !*** ./src/app/auth/admin-page/add-images/add-images.component.ts ***!
          \********************************************************************/
        /*! exports provided: AddImagesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddImagesComponent", function () { return AddImagesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
            var AddImagesComponent = /** @class */ (function () {
                function AddImagesComponent(storageService) {
                    this.storageService = storageService;
                    this.selectedImages = []; // Array of images ready to upload
                    this.selectorClicked = false; // Whether the selector has been clicked
                    this.select = "Select"; // Text on image selection button
                    this.size = [];
                    this.uploadStarted = false; // File upload started
                    this.uploadComplete = false; // File upload complete
                    this.collapsed = false; // Whether to show this module or not
                }
                AddImagesComponent.prototype.ngOnInit = function () {
                    this.pullImageNameList();
                };
                AddImagesComponent.prototype.toggleCollapse = function () {
                    this.collapsed = !this.collapsed;
                };
                AddImagesComponent.prototype.pullImageNameList = function () {
                    var _this = this;
                    this.storageService
                        .pullImageMetadata()
                        .valueChanges()
                        .subscribe(function (list) {
                        _this.imageNameListLength = list.length;
                    });
                };
                AddImagesComponent.prototype.onFileSelect = function (event) {
                    this.selectedImages = [];
                    this.select = "Reselect"; // Change button text to reflect change
                    this.selectorClicked = true; // selector button has been clicked
                    var imageFiles = event.target.files; // Pull file array from event object
                    var imageRegex = /^image\//; // File type = image
                    for (var _i = 0, imageFiles_1 = imageFiles; _i < imageFiles_1.length; _i++) {
                        var image = imageFiles_1[_i];
                        if (image.type.match(imageRegex)) {
                            image["index"] = this.imageNameListLength;
                            this.selectedImages.push(image);
                            var sizeFormatted = Math.round(image.size * 0.001);
                            this.size.push(sizeFormatted);
                            this.imageNameListLength++;
                        }
                        else {
                            this.notAnImageMsg =
                                "One or more files were omitted due to unsupported format. Image files only.";
                        }
                    }
                };
                AddImagesComponent.prototype.sendImages = function () {
                    var _this = this;
                    this.uploadStarted = true;
                    if (this.selectedImages.length > 0) {
                        this.storageService.onUpload(this.selectedImages);
                    }
                    else {
                        this.notAnImageMsg = "No images selected.";
                    }
                    this.storageService.uploadProgress.subscribe(function (res) {
                        _this.uploadProgress = res;
                        if (res === 100) {
                            _this.uploadComplete = true;
                        }
                    });
                };
                return AddImagesComponent;
            }());
            AddImagesComponent.ctorParameters = function () { return [
                { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
            ]; };
            AddImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-images',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/add-images/add-images.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-images.component.scss */ "./src/app/auth/admin-page/add-images/add-images.component.scss")).default]
                })
            ], AddImagesComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/admin-page/admin-page.component.css": 
        /*!**********************************************************!*\
          !*** ./src/app/auth/admin-page/admin-page.component.css ***!
          \**********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".admin-container {\r\n  color: cornsilk;\r\n  position: absolute;\r\n  top: 20vh;\r\n  left: 12vw;\r\n  height: 75vh;\r\n  width: 76vw;\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n}\r\n\r\n.header {\r\n  position: absolute;\r\n  top: 15vh;\r\n  left: 45vw;\r\n  text-align: center;\r\n  color: blanchedalmond;\r\n  font-size: 1.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL2FkbWluLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRtaW4tcGFnZS9hZG1pbi1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRtaW4tY29udGFpbmVyIHtcclxuICBjb2xvcjogY29ybnNpbGs7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjB2aDtcclxuICBsZWZ0OiAxMnZ3O1xyXG4gIGhlaWdodDogNzV2aDtcclxuICB3aWR0aDogNzZ2dztcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTV2aDtcclxuICBsZWZ0OiA0NXZ3O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogYmxhbmNoZWRhbG1vbmQ7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbn1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/auth/admin-page/admin-page.component.ts": 
        /*!*********************************************************!*\
          !*** ./src/app/auth/admin-page/admin-page.component.ts ***!
          \*********************************************************/
        /*! exports provided: AdminPageComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPageComponent", function () { return AdminPageComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AdminPageComponent = /** @class */ (function () {
                function AdminPageComponent() {
                }
                return AdminPageComponent;
            }());
            AdminPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-admin-page",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/admin-page.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-page.component.css */ "./src/app/auth/admin-page/admin-page.component.css")).default]
                })
            ], AdminPageComponent);
            /***/ 
        }),
        /***/ "./src/app/auth/admin-page/move-images/move-images.component.scss": 
        /*!************************************************************************!*\
          !*** ./src/app/auth/admin-page/move-images/move-images.component.scss ***!
          \************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("#image-selector {\n  display: none;\n}\n\n.btn {\n  padding: 1%;\n  margin: 1%;\n}\n\n#image-item {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#image-item td, #image-item th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#image-item tr:nth-child(even) {\n  background-color: #f2f2f220;\n}\n\n#image-item tr:hover {\n  background-color: rgba(221, 221, 221, 0.253);\n}\n\n#image-item th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: center;\n  background-color: rgba(197, 50, 50, 0.35);\n  color: white;\n}\n\n.move-up {\n  cursor: pointer;\n  text-align: center;\n  float: left;\n  height: 90%;\n  width: 25%;\n  border: solid 2px rgba(158, 39, 39, 0.35);\n  background-color: rgba(197, 50, 50, 0.35);\n}\n\n.move-down {\n  cursor: pointer;\n  text-align: center;\n  float: right;\n  height: 90%;\n  width: 25%;\n  border: solid 2px rgba(158, 39, 39, 0.35);\n  background-color: rgba(197, 50, 50, 0.35);\n}\n\n.list-scroller {\n  border: solid 2px rgba(0, 0, 0, 0.2);\n  height: 30vh;\n  overflow-y: auto;\n}\n\n.collapse-btn {\n  color: white;\n  border-top: solid 1px blanchedalmond;\n  border-bottom: solid 1px blanchedalmond;\n  cursor: pointer;\n}\n\n.arrow {\n  float: right;\n  border: solid white;\n  border-width: 0 3px 3px 0;\n  padding: 4px;\n  margin: auto 10px;\n}\n\n.down {\n  transform: rotate(45deg);\n  -webkit-transform: rotate(45deg);\n}\n\n.up {\n  transform: rotate(-135deg);\n  -webkit-transform: rotate(-135deg);\n}\n\n.errors {\n  overflow: hidden;\n  margin: 10px;\n  width: 100%;\n  text-align: center;\n}\n\n.float {\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL21vdmUtaW1hZ2VzL0M6XFxVc2Vyc1xcd05ld21hblxcQ29kZVxcR2l0aHViXFxtYy1wb3J0Zm9saW8vc3JjXFxhcHBcXGF1dGhcXGFkbWluLXBhZ2VcXG1vdmUtaW1hZ2VzXFxtb3ZlLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXV0aC9hZG1pbi1wYWdlL21vdmUtaW1hZ2VzL21vdmUtaW1hZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFVBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFBK0IsMkJBQUE7QUNFL0I7O0FEQUE7RUFBc0IsNENBQUE7QUNJdEI7O0FERkE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5Q0FBQTtFQUNBLFlBQUE7QUNLRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUNLRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLHlDQUFBO0VBQ0EseUNBQUE7QUNLRjs7QURGQTtFQUNFLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDS0Y7O0FERkE7RUFDRSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSx1Q0FBQTtFQUNBLGVBQUE7QUNLRjs7QURGQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDS0Y7O0FERkE7RUFDRSx3QkFBQTtFQUNBLGdDQUFBO0FDS0Y7O0FERkE7RUFDRSwwQkFBQTtFQUNBLGtDQUFBO0FDS0Y7O0FERkE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURGQTtFQUNFLFlBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYWRtaW4tcGFnZS9tb3ZlLWltYWdlcy9tb3ZlLWltYWdlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNpbWFnZS1zZWxlY3RvciB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgcGFkZGluZzogMSU7XHJcbiAgbWFyZ2luOiAxJTtcclxufVxyXG5cclxuI2ltYWdlLWl0ZW0ge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbiNpbWFnZS1pdGVtIHRkLCAjaW1hZ2UtaXRlbSB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuXHJcbiNpbWFnZS1pdGVtIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyMjA7fVxyXG5cclxuI2ltYWdlLWl0ZW0gdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6IHJnYmEoMjIxLCAyMjEsIDIyMSwgMC4yNTMpO31cclxuXHJcbiNpbWFnZS1pdGVtIHRoIHtcclxuICBwYWRkaW5nLXRvcDogMTJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDUwLCA1MCwgMC4zNSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubW92ZS11cCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMTU4LCAzOSwgMzksIDAuMzUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCA1MCwgNTAsIDAuMzUpO1xyXG59XHJcblxyXG4ubW92ZS1kb3duIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBoZWlnaHQ6IDkwJTtcclxuICB3aWR0aDogMjUlO1xyXG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMTU4LCAzOSwgMzksIDAuMzUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCA1MCwgNTAsIDAuMzUpO1xyXG59XHJcblxyXG4ubGlzdC1zY3JvbGxlciB7XHJcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xyXG4gIGhlaWdodDogMzB2aDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uY29sbGFwc2UtYnRuIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IGJsYW5jaGVkYWxtb25kO1xyXG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFuY2hlZGFsbW9uZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5hcnJvdyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJvcmRlcjogc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XHJcbiAgcGFkZGluZzogNHB4O1xyXG4gIG1hcmdpbjogYXV0byAxMHB4O1xyXG59XHJcblxyXG4uZG93biB7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG59XHJcblxyXG4udXAge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKC0xMzVkZWcpO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XHJcbn1cclxuXHJcbi5lcnJvcnMge1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZsb2F0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuIiwiI2ltYWdlLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDElO1xuICBtYXJnaW46IDElO1xufVxuXG4jaW1hZ2UtaXRlbSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaW1hZ2UtaXRlbSB0ZCwgI2ltYWdlLWl0ZW0gdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG59XG5cbiNpbWFnZS1pdGVtIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjIyMDtcbn1cblxuI2ltYWdlLWl0ZW0gdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyMSwgMjIxLCAyMjEsIDAuMjUzKTtcbn1cblxuI2ltYWdlLWl0ZW0gdGgge1xuICBwYWRkaW5nLXRvcDogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDUwLCA1MCwgMC4zNSk7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm1vdmUtdXAge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGhlaWdodDogOTAlO1xuICB3aWR0aDogMjUlO1xuICBib3JkZXI6IHNvbGlkIDJweCByZ2JhKDE1OCwgMzksIDM5LCAwLjM1KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxOTcsIDUwLCA1MCwgMC4zNSk7XG59XG5cbi5tb3ZlLWRvd24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBoZWlnaHQ6IDkwJTtcbiAgd2lkdGg6IDI1JTtcbiAgYm9yZGVyOiBzb2xpZCAycHggcmdiYSgxNTgsIDM5LCAzOSwgMC4zNSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTk3LCA1MCwgNTAsIDAuMzUpO1xufVxuXG4ubGlzdC1zY3JvbGxlciB7XG4gIGJvcmRlcjogc29saWQgMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgaGVpZ2h0OiAzMHZoO1xuICBvdmVyZmxvdy15OiBhdXRvO1xufVxuXG4uY29sbGFwc2UtYnRuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItdG9wOiBzb2xpZCAxcHggYmxhbmNoZWRhbG1vbmQ7XG4gIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCBibGFuY2hlZGFsbW9uZDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYXJyb3cge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJvcmRlcjogc29saWQgd2hpdGU7XG4gIGJvcmRlci13aWR0aDogMCAzcHggM3B4IDA7XG4gIHBhZGRpbmc6IDRweDtcbiAgbWFyZ2luOiBhdXRvIDEwcHg7XG59XG5cbi5kb3duIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcbn1cblxuLnVwIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEzNWRlZyk7XG59XG5cbi5lcnJvcnMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXJnaW46IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbG9hdCB7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/auth/admin-page/move-images/move-images.component.ts": 
        /*!**********************************************************************!*\
          !*** ./src/app/auth/admin-page/move-images/move-images.component.ts ***!
          \**********************************************************************/
        /*! exports provided: MoveImagesComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveImagesComponent", function () { return MoveImagesComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
            var MoveImagesComponent = /** @class */ (function () {
                function MoveImagesComponent(storageService) {
                    this.storageService = storageService;
                    this.imageMetadata = []; // Image metadata
                    this.errMessage = ""; // Error message
                    this.collapsed = true; // Whether to show this module or not
                    this.pullImageMetadata();
                }
                MoveImagesComponent.prototype.ngOnInit = function () { };
                MoveImagesComponent.prototype.ngDoCheck = function () {
                    this.imageMetadata.sort(this.compare);
                };
                MoveImagesComponent.prototype.compare = function (a, b) {
                    if (a.index < b.index) {
                        return -1;
                    }
                    if (a.index > b.index) {
                        return 1;
                    }
                    return 0;
                };
                MoveImagesComponent.prototype.toggleCollapse = function () {
                    this.collapsed = !this.collapsed;
                };
                MoveImagesComponent.prototype.pullImageMetadata = function () {
                    var _this = this;
                    this.imageMetadata = []; // Clear the array before load and after functions
                    this.storageService
                        .pullImageMetadata()
                        .valueChanges()
                        .subscribe(function (pulledImageMetadata) {
                        pulledImageMetadata.forEach(function (imageData) {
                            _this.imageMetadata.push(imageData);
                        });
                    });
                };
                MoveImagesComponent.prototype.moveUp = function (imageIndex) {
                    if (imageIndex > 0) {
                        this.imageMetadata[imageIndex].index--;
                        this.imageMetadata[imageIndex - 1].index++;
                    }
                    else {
                        this.errMessage = "List item exceeds list range";
                        this.errorResetTimer();
                    }
                };
                MoveImagesComponent.prototype.moveDown = function (imageIndex) {
                    if (imageIndex < this.imageMetadata.length - 1) {
                        this.imageMetadata[imageIndex].index++;
                        this.imageMetadata[imageIndex + 1].index--;
                    }
                    else {
                        this.errMessage = "List item exceeds list range";
                        this.errorResetTimer();
                    }
                };
                MoveImagesComponent.prototype.errorResetTimer = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.errMessage = "";
                    }, 5000);
                };
                MoveImagesComponent.prototype.saveConfig = function () {
                    if (this.imageMetadata.length > 0) {
                        this.storageService.changeImageIndexes(this.imageMetadata);
                        this.resetConfig();
                    }
                };
                MoveImagesComponent.prototype.resetConfig = function () {
                    location.reload();
                };
                return MoveImagesComponent;
            }());
            MoveImagesComponent.ctorParameters = function () { return [
                { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
            ]; };
            MoveImagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-move-images",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./move-images.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/admin-page/move-images/move-images.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./move-images.component.scss */ "./src/app/auth/admin-page/move-images/move-images.component.scss")).default]
                })
            ], MoveImagesComponent);
            /***/ 
        }),
        /***/ "./src/app/main/bio/bio.component.scss": 
        /*!*********************************************!*\
          !*** ./src/app/main/bio/bio.component.scss ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vYmlvL2Jpby5jb21wb25lbnQuc2NzcyJ9 */");
            /***/ 
        }),
        /***/ "./src/app/main/bio/bio.component.ts": 
        /*!*******************************************!*\
          !*** ./src/app/main/bio/bio.component.ts ***!
          \*******************************************/
        /*! exports provided: BioComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BioComponent", function () { return BioComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var BioComponent = /** @class */ (function () {
                function BioComponent() {
                    this.redClass = false; // Strange attempt to use alternate class names in the bio?
                }
                BioComponent.prototype.ngOnInit = function () { };
                return BioComponent;
            }());
            BioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-bio",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/bio/bio.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bio.component.scss */ "./src/app/main/bio/bio.component.scss")).default]
                })
            ], BioComponent);
            /***/ 
        }),
        /***/ "./src/app/main/contact/contact.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/main/contact/contact.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".contact-container {\r\n    position: fixed;\r\n    top: 30vh;\r\n    left: 30vw;\r\n}\r\n\r\n.contact {\r\n    list-style: none;\r\n    font-family: fantasy;\r\n    color: whitesmoke;\r\n    font-size: 2em;\r\n}\r\n\r\n.link-fix {\r\n    color: whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC1jb250YWluZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAzMHZoO1xyXG4gICAgbGVmdDogMzB2dztcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBmYW50YXN5O1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxufVxyXG5cclxuLmxpbmstZml4IHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/main/contact/contact.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/main/contact/contact.component.ts ***!
          \***************************************************/
        /*! exports provided: ContactComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function () { return ContactComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ContactComponent = /** @class */ (function () {
                function ContactComponent() {
                }
                ContactComponent.prototype.ngOnInit = function () {
                };
                return ContactComponent;
            }());
            ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-contact',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/contact/contact.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/main/contact/contact.component.css")).default]
                })
            ], ContactComponent);
            /***/ 
        }),
        /***/ "./src/app/main/gallery/gallery.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/main/gallery/gallery.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".gallery-container {\r\n  overflow-y: auto;\r\n  overflow-x: hidden;\r\n  position: fixed;\r\n  top: 20vh;\r\n  left: 10vw;\r\n  height: 70vh;\r\n  width: 80vw;\r\n}\r\n\r\n.gallery-photos {\r\n    display: inline;\r\n}\r\n\r\n.image-container {\r\n    display: inline-block;\r\n    height: 30%;\r\n    width: 20%;\r\n    padding: 2.5%;\r\n}\r\n\r\n.images-g {\r\n    max-height: 100%;\r\n    max-width: 100%;\r\n    border-radius: 5px;\r\n    cursor: pointer;\r\n}\r\n\r\nimg {\r\n  color: whitesmoke;\r\n}\r\n\r\n.err {\r\n    color: blanchedalmond;\r\n    text-align: center;\r\n    font-size: 2rem;\r\n    font-family: 'Lato', sans-serif;\r\n}\r\n\r\n.image-modal {\r\n    color: whitesmoke;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    z-index: 4;\r\n    text-align: center;\r\n}\r\n\r\n.modal-image-container {\r\n    height: 100%;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    z-index: 5;\r\n}\r\n\r\n.images-full {\r\n    padding: 0;\r\n    vertical-align: middle;\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    z-index: 6;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLFNBQVM7RUFDVCxVQUFVO0VBQ1YsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsV0FBVztJQUNYLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21haW4vZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ2FsbGVyeS1jb250YWluZXIge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDIwdmg7XHJcbiAgbGVmdDogMTB2dztcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcbi5nYWxsZXJ5LXBob3RvcyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgaGVpZ2h0OiAzMCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgcGFkZGluZzogMi41JTtcclxufVxyXG5cclxuLmltYWdlcy1nIHtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5lcnIge1xyXG4gICAgY29sb3I6IGJsYW5jaGVkYWxtb25kO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICdMYXRvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmltYWdlLW1vZGFsIHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgICB6LWluZGV4OiA0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubW9kYWwtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4uaW1hZ2VzLWZ1bGwge1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gICAgei1pbmRleDogNjtcclxufVxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/main/gallery/gallery.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/main/gallery/gallery.component.ts ***!
          \***************************************************/
        /*! exports provided: GalleryComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function () { return GalleryComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
            var GalleryComponent = /** @class */ (function () {
                function GalleryComponent(storageService) {
                    this.storageService = storageService;
                    this.imageArr = []; // Image objects
                    this.imageMetadata = []; // Image metadata including names of images which is used to pull images from Firebase Storage
                    this.imageRefs = []; // SRC of images pulled from Firebase Storage
                    this.showModal = false; // Boolean to show or hide the full size image modal
                    this.loadingImages = true; // Whether images are loading or not
                    this.imagePullError = null; // Place for call errors
                    this.pullImageMetadata();
                }
                GalleryComponent.prototype.ngOnInit = function () {
                    this.checkImageArr();
                };
                GalleryComponent.prototype.checkImageArr = function () {
                    if (this.imageArr.length < 1) {
                        this.imagePullError = 'Loading ...';
                    }
                    else {
                        this.imageArr.sort(this.compare);
                        this.imagePullError = null;
                    }
                };
                GalleryComponent.prototype.compare = function (a, b) {
                    if (a.index < b.index) {
                        return -1;
                    }
                    if (a.index > b.index) {
                        return 1;
                    }
                    return 0;
                };
                GalleryComponent.prototype.pullImageMetadata = function () {
                    var _this = this;
                    this.imageMetadata = [];
                    this.storageService.pullImageMetadata()
                        .valueChanges()
                        .subscribe(function (pulledImageMetadata) {
                        pulledImageMetadata.forEach(function (imageData) {
                            _this.imageMetadata.push(imageData);
                        });
                        _this.imageMetadata.forEach(function (imgData) {
                            _this.pullImageRefs(imgData);
                        });
                    });
                };
                GalleryComponent.prototype.pullImageRefs = function (imageMetadata) {
                    var _this = this;
                    this.storageService.pullImageRefs(imageMetadata.name)
                        .getDownloadURL()
                        .subscribe(function (imgURL) {
                        _this.imageRefs.push(imgURL);
                        _this.imageArr.push({
                            index: imageMetadata.index,
                            src: imgURL,
                            alt: imageMetadata.name,
                            title: imageMetadata.name
                        });
                        _this.checkImageArr();
                    });
                };
                GalleryComponent.prototype.fullSizeImage = function (imgIndex) {
                    this.showModal = true;
                    this.modalImage = this.imageArr[imgIndex];
                };
                GalleryComponent.prototype.hideModal = function () {
                    this.showModal = false;
                };
                return GalleryComponent;
            }());
            GalleryComponent.ctorParameters = function () { return [
                { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_2__["StorageService"] }
            ]; };
            GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-gallery",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/gallery/gallery.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./gallery.component.css */ "./src/app/main/gallery/gallery.component.css")).default]
                })
            ], GalleryComponent);
            /***/ 
        }),
        /***/ "./src/app/main/home/home.component.css": 
        /*!**********************************************!*\
          !*** ./src/app/main/home/home.component.css ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("slideshow {\r\n    position: absolute;\r\n    top: 30vh;\r\n    left: 25vw;\r\n    margin: auto;\r\n    box-shadow: 0px 0px 50px black;\r\n    width: 50vw;\r\n    height: 30vh;\r\n    font-family: 'lato', sans-serif;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWiw4QkFBOEI7SUFDOUIsV0FBVztJQUNYLFlBQVk7SUFDWiwrQkFBK0I7QUFDbkMiLCJmaWxlIjoic3JjL2FwcC9tYWluL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2xpZGVzaG93IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzB2aDtcclxuICAgIGxlZnQ6IDI1dnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDUwcHggYmxhY2s7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIGhlaWdodDogMzB2aDtcclxuICAgIGZvbnQtZmFtaWx5OiAnbGF0bycsIHNhbnMtc2VyaWY7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/main/home/home.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/main/home/home.component.ts ***!
          \*********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent() {
                    this.imageSources = [
                        {
                            url: 'https://cdn-prod.mortalkombat.com/features/scorpion-bg.jpg',
                            caption: 'Picture with caption',
                            title: 'Picture title goes here'
                        },
                        {
                            url: 'https://i.ytimg.com/vi/z_N2gPZKYIE/maxresdefault.jpg',
                            clickAction: function () { return alert('picture clicked, function performed'); },
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
                HomeComponent.prototype.ngOnInit = function () { };
                return HomeComponent;
            }());
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/main/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/main/version/version.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/main/version/version.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".version-container {\r\n    position: absolute;\r\n    top: 20vh;\r\n    left: 25vw;\r\n    height: 60vh;\r\n    width: 50vw;\r\n    overflow-y: auto;\r\n    color: whitesmoke;\r\n    font-family: 'Lato', monospace, sans-serif;\r\n}\r\n\r\n.dev-contact {\r\n    font-size: 1.4em;\r\n}\r\n\r\n.beauty-btn {\r\n    background-color: cadetblue;\r\n    border: solid 1px rgb(0, 113, 100);\r\n    border-radius: 4px;\r\n    font-family: monospace, Verdana, Geneva, Tahoma, sans-serif;\r\n    padding: .5%;\r\n}\r\n\r\n.patch-notes-list {\r\n    list-style-type: circle;\r\n}\r\n\r\n.strikeout {\r\n    -webkit-text-decoration-line: line-through;\r\n            text-decoration-line: line-through;\r\n}\r\n\r\n.login-container {\r\n    color: whitesmoke;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    height: 100vh;\r\n    width: 100vw;\r\n    background-color: rgba(0, 0, 0, 0.3);\r\n    z-index: 5;\r\n    text-align: center;\r\n}\r\n\r\n.login-box {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 25%;\r\n    width: 50%;\r\n    max-height: 60%;\r\n    background-color: rgba(31, 36, 46, 0.4);\r\n    padding: 2% 0;\r\n    z-index: 6;\r\n}\r\n\r\n.input {\r\n    border: none;\r\n    background-color: rgb(65, 48, 48);\r\n    color: cornsilk;\r\n    padding: 1%;\r\n    font-size: 2em;\r\n    margin: 1%;\r\n    z-index: 10;\r\n    max-width: 100%;\r\n    max-height: 10%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi92ZXJzaW9uL3ZlcnNpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtJQUNWLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQiwwQ0FBMEM7QUFDOUM7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwyQkFBMkI7SUFDM0Isa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQiwyREFBMkQ7SUFDM0QsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDBDQUFrQztZQUFsQyxrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsYUFBYTtJQUNiLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsVUFBVTtJQUNWLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULFVBQVU7SUFDVixlQUFlO0lBQ2YsdUNBQXVDO0lBQ3ZDLGFBQWE7SUFDYixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixXQUFXO0lBQ1gsY0FBYztJQUNkLFVBQVU7SUFDVixXQUFXO0lBQ1gsZUFBZTtJQUNmLGVBQWU7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9tYWluL3ZlcnNpb24vdmVyc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnNpb24tY29udGFpbmVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjB2aDtcclxuICAgIGxlZnQ6IDI1dnc7XHJcbiAgICBoZWlnaHQ6IDYwdmg7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTGF0bycsIG1vbm9zcGFjZSwgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmRldi1jb250YWN0IHtcclxuICAgIGZvbnQtc2l6ZTogMS40ZW07XHJcbn1cclxuXHJcbi5iZWF1dHktYnRuIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGNhZGV0Ymx1ZTtcclxuICAgIGJvcmRlcjogc29saWQgMXB4IHJnYigwLCAxMTMsIDEwMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IC41JTtcclxufVxyXG5cclxuLnBhdGNoLW5vdGVzLWxpc3Qge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBjaXJjbGU7XHJcbn1cclxuXHJcbi5zdHJpa2VvdXQge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IGxpbmUtdGhyb3VnaDtcclxufVxyXG5cclxuLmxvZ2luLWNvbnRhaW5lciB7XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGxlZnQ6IDI1JTtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCAzNiwgNDYsIDAuNCk7XHJcbiAgICBwYWRkaW5nOiAyJSAwO1xyXG4gICAgei1pbmRleDogNjtcclxufVxyXG5cclxuLmlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NSwgNDgsIDQ4KTtcclxuICAgIGNvbG9yOiBjb3Juc2lsaztcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgZm9udC1zaXplOiAyZW07XHJcbiAgICBtYXJnaW46IDElO1xyXG4gICAgei1pbmRleDogMTA7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMCU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/main/version/version.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/main/version/version.component.ts ***!
          \***************************************************/
        /*! exports provided: VersionComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VersionComponent", function () { return VersionComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authenticate.service */ "./src/app/services/authenticate.service.ts");
            var VersionComponent = /** @class */ (function () {
                function VersionComponent(authService) {
                    this.authService = authService;
                    this.loginModal = false;
                    this.currentAppVersion = 'Error, please reload.';
                    this.currentAppVersion = this.authService.appVersion;
                }
                VersionComponent.prototype.ngOnInit = function () {
                };
                // Shows login modal
                VersionComponent.prototype.loginModalShow = function () {
                    this.loginModal = true;
                };
                // Hides login modal
                VersionComponent.prototype.loginModalHide = function () {
                    this.loginModal = false;
                };
                // Stop event propagation so that the input form cannot be clicked through
                VersionComponent.prototype.badTouch = function (event) {
                    event.stopPropagation();
                };
                VersionComponent.prototype.tryLogin = function () {
                    // try login and redirect with authguard activated
                };
                return VersionComponent;
            }());
            VersionComponent.ctorParameters = function () { return [
                { type: src_app_services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] }
            ]; };
            VersionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-version',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./version.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/main/version/version.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./version.component.css */ "./src/app/main/version/version.component.css")).default]
                })
            ], VersionComponent);
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.scss": 
        /*!**********************************************!*\
          !*** ./src/app/navbar/navbar.component.scss ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".footer {\n  position: fixed;\n  bottom: 0;\n  right: 1%;\n  font-size: 1.2em;\n  font-family: monospace;\n}\n\n@media (min-width: 1001px) {\n  .full-bar {\n    display: block;\n  }\n\n  .ham-boi {\n    display: none;\n  }\n}\n\n@media (max-width: 1000px) {\n  .full-bar {\n    display: none;\n  }\n\n  .ham-boi {\n    display: block;\n  }\n\n  @import url(\"https://fonts.googleapis.com/css?family=Open+Sans\");\n  html,\nbody {\n    background: #222;\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  #container {\n    width: 80px;\n    height: 80px;\n    position: absolute;\n    top: 0%;\n    left: 0%;\n  }\n\n  #burger {\n    cursor: pointer;\n    opacity: 0;\n    -webkit-animation: fadein 0.2s ease 1s forwards;\n            animation: fadein 0.2s ease 1s forwards;\n    overflow: hidden;\n    position: relative;\n    width: 100%;\n    height: 100%;\n  }\n  #burger .filling, #burger .bun {\n    display: block;\n    position: absolute;\n    left: 50%;\n    transform: translate(-50%, -50%) rotate(0deg);\n    height: 10%;\n    width: 70%;\n    transform-origin: 50% 50%;\n    transition: top 0.4s ease 0.4s, transform 0.4s ease 0.4s;\n  }\n  #burger .filling:before, #burger .bun:before, #burger .filling:after, #burger .bun:after {\n    content: \"\";\n    display: block;\n    height: 40%;\n    background: white;\n    position: absolute;\n    top: 50%;\n    transform: translate(0%, -45%);\n    transition: background 0.2s ease, box-shadow 0.2s ease;\n  }\n  #burger .filling:before, #burger .bun:before {\n    left: 0;\n    width: calc(-1px + 75%);\n    border-radius: 10px 0px 0px 10px;\n  }\n  #burger .filling:after, #burger .bun:after {\n    right: 0;\n    width: calc(-1px + 25%);\n  }\n  #burger:hover .bun.top:before {\n    background: #fee;\n    box-shadow: #f00 0px 0px 10px 1px;\n  }\n  #burger:hover .bun.bottom:before {\n    background: #dff;\n    box-shadow: #0ff 0px 0px 10px 1px;\n  }\n  #burger:hover .filling:before {\n    background: #efe;\n    box-shadow: #0f0 0px 0px 10px 1px;\n  }\n  #burger .bun.top {\n    top: 25%;\n  }\n  #burger .bun.bottom {\n    top: 75%;\n  }\n  #burger .filling {\n    top: 50%;\n    transform: translate(-50%, -50%) rotate(180deg);\n    -webkit-animation: green-ls-out 0.8s ease forwards;\n            animation: green-ls-out 0.8s ease forwards;\n  }\n  #burger.active .bun {\n    border-radius: 3px;\n    top: 50%;\n    transition: top 0.4s ease, transform 0.4s ease;\n  }\n  #burger.active .bun.top {\n    transform: translate(-50%, -50%) rotate(-225deg);\n  }\n  #burger.active .bun.bottom {\n    transform: translate(-50%, -50%) rotate(405deg);\n  }\n  #burger.active .filling {\n    transform: translate(-50%, -50%) rotate(-90deg);\n    -webkit-animation: green-ls-in 0.8s ease forwards;\n            animation: green-ls-in 0.8s ease forwards;\n  }\n\n  nav {\n    font-family: Open Sans;\n    color: white;\n    background: #111;\n    position: absolute;\n    transform: translatex(-100%);\n    transition: transform 0.2s ease;\n    top: 80px;\n    bottom: 0px;\n    padding-right: 16px;\n    width: 300px;\n  }\n  nav.show {\n    transform: translatex(0%);\n  }\n  nav ul {\n    list-style: none;\n    padding: 0;\n    margin: 0;\n  }\n  nav ul li {\n    background: #ecfcff;\n    box-shadow: #4df 0px 0px 0px 2px;\n    font-size: 1.75em;\n    line-height: 1.25em;\n    padding: 0px;\n    padding-left: 0px;\n    margin: 16px 0px;\n    width: 0;\n    border-radius: 0px 100px 100px 0px;\n    transition: width 0.2s ease, padding 0.2s ease, color 0.2s ease, text-shadow 0.2s ease;\n  }\n  nav ul li:hover {\n    box-shadow: #4df 0px 0px 20px 2px;\n    text-shadow: #4df 0px 0px 6px, #4df 0px 0px 10px;\n  }\n  nav ul li:hover {\n    width: 100%;\n    padding: 0px 16px 0px 0px;\n    color: black;\n  }\n  nav ul li a {\n    display: block;\n    text-decoration: none;\n    width: 300px;\n    color: inherit;\n    padding-left: 16px;\n  }\n  nav ul li.green {\n    background: #e6ffe6;\n    box-shadow: #0f0 0px 0px 0px 2px;\n  }\n  nav ul li.green:hover {\n    box-shadow: #0f0 0px 0px 20px 2px;\n    text-shadow: #0f0 0px 0px 6px, #0f0 0px 0px 10px;\n  }\n  nav ul li.red {\n    background: #ffe6e6;\n    box-shadow: #f00 0px 0px 0px 2px;\n  }\n  nav ul li.red:hover {\n    box-shadow: #f00 0px 0px 20px 2px;\n    text-shadow: #f00 0px 0px 6px, #f00 0px 0px 10px;\n  }\n  nav ul li.purple {\n    background: #fae6fa;\n    box-shadow: #c0c 0px 0px 0px 2px;\n  }\n  nav ul li.purple:hover {\n    box-shadow: #c0c 0px 0px 20px 2px;\n    text-shadow: #c0c 0px 0px 6px, #c0c 0px 0px 10px;\n  }\n  nav ul li.yellow {\n    background: #ffffe6;\n    box-shadow: #ff0 0px 0px 0px 2px;\n  }\n  nav ul li.yellow:hover {\n    box-shadow: #ff0 0px 0px 20px 2px;\n    text-shadow: #ff0 0px 0px 6px, #ff0 0px 0px 10px;\n  }\n\n  @-webkit-keyframes green-ls-in {\n    0% {\n      transform: translate(-50%, -50%) rotate(180deg);\n    }\n    50% {\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(-90deg) translate(200%, 0%);\n    }\n  }\n\n  @keyframes green-ls-in {\n    0% {\n      transform: translate(-50%, -50%) rotate(180deg);\n    }\n    50% {\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(-90deg) translate(200%, 0%);\n    }\n  }\n  @-webkit-keyframes green-ls-out {\n    0% {\n      transform: translate(-50%, -200%) rotate(-90deg);\n    }\n    50% {\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(180deg);\n    }\n  }\n  @keyframes green-ls-out {\n    0% {\n      transform: translate(-50%, -200%) rotate(-90deg);\n    }\n    50% {\n      transform: translate(-50%, -50%) rotate(-90deg);\n    }\n    100% {\n      transform: translate(-50%, -50%) rotate(180deg);\n    }\n  }\n  @-webkit-keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n  @keyframes fadein {\n    from {\n      opacity: 0;\n    }\n    to {\n      opacity: 1;\n    }\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL0M6XFxVc2Vyc1xcd05ld21hblxcQ29kZVxcR2l0aHViXFxtYy1wb3J0Zm9saW8vc3JjXFxhcHBcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0NGOztBREVBO0VBQ0U7SUFDRSxjQUFBO0VDQ0Y7O0VEQ0E7SUFDRSxhQUFBO0VDRUY7QUFDRjs7QURDQTtFQUNFO0lBQ0UsYUFBQTtFQ0NGOztFRENBO0lBQ0UsY0FBQTtFQ0VGOztFREdRLGdFQUFBO0VBV1I7O0lBRUUsZ0JBQUE7RUNWRjs7RURhQTtJQUNFLHNCQUFBO0VDVkY7O0VEYUE7SUFDRSxXQXZCVTtJQXdCVixZQXhCVTtJQXlCVixrQkFBQTtJQUNBLE9BQUE7SUFDQSxRQUFBO0VDVkY7O0VEYUE7SUFDRSxlQUFBO0lBQ0EsVUFBQTtJQUNBLCtDQUFBO1lBQUEsdUNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNWRjtFRFdFO0lBQ0UsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLDZDQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7SUFDQSx5QkFBQTtJQUNBLHdEQUFBO0VDVEo7RURVSTtJQUVFLFdBQUE7SUFDQSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0lBQ0EsOEJBQUE7SUFDQSxzREFBQTtFQ1ROO0VEV0k7SUFDRSxPQUFBO0lBQ0EsdUJBQUE7SUFDQSxnQ0FBQTtFQ1ROO0VEV0k7SUFDRSxRQUFBO0lBQ0EsdUJBQUE7RUNUTjtFRGVNO0lBQ0UsZ0JBQUE7SUFDQSxpQ0FBQTtFQ2JSO0VEZU07SUFDRSxnQkFBQTtJQUNBLGlDQUFBO0VDYlI7RURpQk07SUFDRSxnQkFBQTtJQUNBLGlDQUFBO0VDZlI7RURzQkk7SUFDRSxRQUFBO0VDcEJOO0VEc0JJO0lBQ0UsUUFBQTtFQ3BCTjtFRHVCRTtJQUVFLFFBQUE7SUFDQSwrQ0FBQTtJQUNBLGtEQUFBO1lBQUEsMENBQUE7RUN0Qko7RUQwQkk7SUFDRSxrQkFBQTtJQUNBLFFBQUE7SUFDQSw4Q0FBQTtFQ3hCTjtFRHlCTTtJQUNFLGdEQUFBO0VDdkJSO0VEeUJNO0lBQ0UsK0NBQUE7RUN2QlI7RUQwQkk7SUFDRSwrQ0FBQTtJQUNBLGlEQUFBO1lBQUEseUNBQUE7RUN4Qk47O0VENkJBO0lBSUUsc0JBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLDRCQUFBO0lBQ0EsK0JBQUE7SUFDQSxTQXJJVTtJQXNJVixXQUFBO0lBQ0EsbUJBQUE7SUFDQSxZQXZJRTtFQzBHSjtFRGlCRTtJQUNFLHlCQUFBO0VDZko7RUQyQkU7SUFDRSxnQkFBQTtJQUNBLFVBQUE7SUFDQSxTQUFBO0VDekJKO0VEMkJJO0lBeklGLG1CQUFBO0lBQ0EsZ0NBQUE7SUEwSUksaUJBQUE7SUFDQSxtQkFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsUUFBQTtJQUNBLGtDQUFBO0lBQ0Esc0ZBQUE7RUN4Qk47RUR4SEU7SUFDRSxpQ0FBQTtJQUNBLGdEQUFBO0VDMEhKO0VEc0JNO0lBQ0UsV0FBQTtJQUNBLHlCQUFBO0lBQ0EsWUFBQTtFQ3BCUjtFRHNCTTtJQUNFLGNBQUE7SUFDQSxxQkFBQTtJQUNBLFlBaEtKO0lBaUtJLGNBQUE7SUFDQSxrQkFBQTtFQ3BCUjtFRHNCTTtJQWhLSixtQkFBQTtJQUNBLGdDQUFBO0VDNklGO0VENUlFO0lBQ0UsaUNBQUE7SUFDQSxnREFBQTtFQzhJSjtFRGlCTTtJQW5LSixtQkFBQTtJQUNBLGdDQUFBO0VDcUpGO0VEcEpFO0lBQ0UsaUNBQUE7SUFDQSxnREFBQTtFQ3NKSjtFRFlNO0lBdEtKLG1CQUFBO0lBQ0EsZ0NBQUE7RUM2SkY7RUQ1SkU7SUFDRSxpQ0FBQTtJQUNBLGdEQUFBO0VDOEpKO0VET007SUF6S0osbUJBQUE7SUFDQSxnQ0FBQTtFQ3FLRjtFRHBLRTtJQUNFLGlDQUFBO0lBQ0EsZ0RBQUE7RUNzS0o7O0VETUE7SUFDRTtNQUNFLCtDQUFBO0lDSEY7SURLQTtNQUNFLCtDQUFBO0lDSEY7SURLQTtNQUNFLG1FQUFBO0lDSEY7RUFDRjs7RUROQTtJQUNFO01BQ0UsK0NBQUE7SUNIRjtJREtBO01BQ0UsK0NBQUE7SUNIRjtJREtBO01BQ0UsbUVBQUE7SUNIRjtFQUNGO0VETUE7SUFDRTtNQUNFLGdEQUFBO0lDSkY7SURNQTtNQUNFLCtDQUFBO0lDSkY7SURPQTtNQUNFLCtDQUFBO0lDTEY7RUFDRjtFRExBO0lBQ0U7TUFDRSxnREFBQTtJQ0pGO0lETUE7TUFDRSwrQ0FBQTtJQ0pGO0lET0E7TUFDRSwrQ0FBQTtJQ0xGO0VBQ0Y7RURRQTtJQUNFO01BQ0UsVUFBQTtJQ05GO0lEUUE7TUFDRSxVQUFBO0lDTkY7RUFDRjtFREFBO0lBQ0U7TUFDRSxVQUFBO0lDTkY7SURRQTtNQUNFLFVBQUE7SUNORjtFQUNGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMSU7XHJcbiAgZm9udC1zaXplOiAxLjJlbTtcclxuICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG59XHJcblxyXG5AbWVkaWEgKG1pbi13aWR0aDogMTAwMXB4KSB7XHJcbiAgLmZ1bGwtYmFyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gIH1cclxuICAuaGFtLWJvaSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCkge1xyXG4gIC5mdWxsLWJhciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICAuaGFtLWJvaSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcblxyXG4gICRpY29uLXNpemU6IDgwcHg7XHJcbiAgJHc6IDMwMHB4O1xyXG4gIEBpbXBvcnQgdXJsKFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PU9wZW4rU2Fuc1wiKTtcclxuXHJcbiAgQG1peGluIGxpZ2h0c2FiZXIoJGNvbG9yKSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBtaXgoJGNvbG9yLCAjZmZmLCAxMCUpO1xyXG4gICAgYm94LXNoYWRvdzogJGNvbG9yIDBweCAwcHggMHB4IDJweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBib3gtc2hhZG93OiAkY29sb3IgMHB4IDBweCAyMHB4IDJweDtcclxuICAgICAgdGV4dC1zaGFkb3c6ICRjb2xvciAwcHggMHB4IDZweCwgJGNvbG9yIDBweCAwcHggMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGh0bWwsXHJcbiAgYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjIyO1xyXG4gIH1cclxuXHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgI2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogJGljb24tc2l6ZTtcclxuICAgIGhlaWdodDogJGljb24tc2l6ZTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICB9XHJcblxyXG4gICNidXJnZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbjogZmFkZWluIDAuMnMgZWFzZSAxcyBmb3J3YXJkcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgICVidXJnZXJzZWN0aW9uIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgIGhlaWdodDogMTAlO1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gICAgICB0cmFuc2l0aW9uOiB0b3AgMC40cyBlYXNlIDAuNHMsIHRyYW5zZm9ybSAwLjRzIGVhc2UgMC40cztcclxuICAgICAgJjpiZWZvcmUsXHJcbiAgICAgICY6YWZ0ZXIge1xyXG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgaGVpZ2h0OiA0MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNDUlKTtcclxuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XHJcbiAgICAgIH1cclxuICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoLTFweCArIDc1JSk7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XHJcbiAgICAgIH1cclxuICAgICAgJjphZnRlciB7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoLTFweCArIDI1JSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgLmJ1biB7XHJcbiAgICAgICAgJi50b3A6YmVmb3JlIHtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmZWU7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAjZjAwIDBweCAwcHggMTBweCAxcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuYm90dG9tOmJlZm9yZSB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZGZmO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogIzBmZiAwcHggMHB4IDEwcHggMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZmlsbGluZyB7XHJcbiAgICAgICAgJjpiZWZvcmUge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2VmZTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6ICMwZjAgMHB4IDBweCAxMHB4IDFweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnVuIHtcclxuICAgICAgQGV4dGVuZCAlYnVyZ2Vyc2VjdGlvbjtcclxuICAgICAgJi50b3Age1xyXG4gICAgICAgIHRvcDogMjUlO1xyXG4gICAgICB9XHJcbiAgICAgICYuYm90dG9tIHtcclxuICAgICAgICB0b3A6IDc1JTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZpbGxpbmcge1xyXG4gICAgICBAZXh0ZW5kICVidXJnZXJzZWN0aW9uO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XHJcbiAgICAgIGFuaW1hdGlvbjogZ3JlZW4tbHMtb3V0IDAuOHMgZWFzZSBmb3J3YXJkcztcclxuICAgIH1cclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIC5idW4ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICB0cmFuc2l0aW9uOiB0b3AgMC40cyBlYXNlLCB0cmFuc2Zvcm0gMC40cyBlYXNlO1xyXG4gICAgICAgICYudG9wIHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtMjI1ZGVnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5ib3R0b20ge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQwNWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5maWxsaW5nIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKTtcclxuICAgICAgICBhbmltYXRpb246IGdyZWVuLWxzLWluIDAuOHMgZWFzZSBmb3J3YXJkcztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmF2IHtcclxuICAgICYuc2hvdyB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgwJSk7XHJcbiAgICB9XHJcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZDogIzExMTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRleCgtMTAwJSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgdG9wOiAkaWNvbi1zaXplO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xyXG4gICAgd2lkdGg6ICR3O1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIC8vZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgQGluY2x1ZGUgbGlnaHRzYWJlcigjNGRmKTtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yNWVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICBtYXJnaW46IDE2cHggMHB4O1xyXG4gICAgICAgIHdpZHRoOiAwO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDBweCAxMDBweCAxMDBweCAwcHg7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLCBwYWRkaW5nIDAuMnMgZWFzZSwgY29sb3IgMC4ycyBlYXNlLFxyXG4gICAgICAgICAgdGV4dC1zaGFkb3cgMC4ycyBlYXNlO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTZweCAwcHggMHB4O1xyXG4gICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgd2lkdGg6ICR3O1xyXG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYuZ3JlZW4ge1xyXG4gICAgICAgICAgQGluY2x1ZGUgbGlnaHRzYWJlcigjMGYwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5yZWQge1xyXG4gICAgICAgICAgQGluY2x1ZGUgbGlnaHRzYWJlcigjZjAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5wdXJwbGUge1xyXG4gICAgICAgICAgQGluY2x1ZGUgbGlnaHRzYWJlcigjYzBjKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi55ZWxsb3cge1xyXG4gICAgICAgICAgQGluY2x1ZGUgbGlnaHRzYWJlcigjZmYwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZ3JlZW4tbHMtaW4ge1xyXG4gICAgMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgfVxyXG4gICAgMTAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpIHRyYW5zbGF0ZSgyMDAlLCAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAa2V5ZnJhbWVzIGdyZWVuLWxzLW91dCB7XHJcbiAgICAwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yMDAlKSByb3RhdGUoLTkwZGVnKTtcclxuICAgIH1cclxuICAgIDUwJSB7XHJcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcclxuICAgIGZyb20ge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgfVxyXG4gICAgdG8ge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuZm9vdGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAxJTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDFweCkge1xuICAuZnVsbC1iYXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmhhbS1ib2kge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAxMDAwcHgpIHtcbiAgLmZ1bGwtYmFyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmhhbS1ib2kge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9T3BlbitTYW5zXCIpO1xuICBodG1sLFxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogIzIyMjtcbiAgfVxuXG4gICoge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cblxuICAjY29udGFpbmVyIHtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMCU7XG4gICAgbGVmdDogMCU7XG4gIH1cblxuICAjYnVyZ2VyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBhbmltYXRpb246IGZhZGVpbiAwLjJzIGVhc2UgMXMgZm9yd2FyZHM7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG4gICNidXJnZXIgLmZpbGxpbmcsICNidXJnZXIgLmJ1biB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMGRlZyk7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgd2lkdGg6IDcwJTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjRzIGVhc2UgMC40cywgdHJhbnNmb3JtIDAuNHMgZWFzZSAwLjRzO1xuICB9XG4gICNidXJnZXIgLmZpbGxpbmc6YmVmb3JlLCAjYnVyZ2VyIC5idW46YmVmb3JlLCAjYnVyZ2VyIC5maWxsaW5nOmFmdGVyLCAjYnVyZ2VyIC5idW46YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgaGVpZ2h0OiA0MCU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAtNDUlKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnMgZWFzZSwgYm94LXNoYWRvdyAwLjJzIGVhc2U7XG4gIH1cbiAgI2J1cmdlciAuZmlsbGluZzpiZWZvcmUsICNidXJnZXIgLmJ1bjpiZWZvcmUge1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IGNhbGMoLTFweCArIDc1JSk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweCAwcHggMHB4IDEwcHg7XG4gIH1cbiAgI2J1cmdlciAuZmlsbGluZzphZnRlciwgI2J1cmdlciAuYnVuOmFmdGVyIHtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogY2FsYygtMXB4ICsgMjUlKTtcbiAgfVxuICAjYnVyZ2VyOmhvdmVyIC5idW4udG9wOmJlZm9yZSB7XG4gICAgYmFja2dyb3VuZDogI2ZlZTtcbiAgICBib3gtc2hhZG93OiAjZjAwIDBweCAwcHggMTBweCAxcHg7XG4gIH1cbiAgI2J1cmdlcjpob3ZlciAuYnVuLmJvdHRvbTpiZWZvcmUge1xuICAgIGJhY2tncm91bmQ6ICNkZmY7XG4gICAgYm94LXNoYWRvdzogIzBmZiAwcHggMHB4IDEwcHggMXB4O1xuICB9XG4gICNidXJnZXI6aG92ZXIgLmZpbGxpbmc6YmVmb3JlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWZlO1xuICAgIGJveC1zaGFkb3c6ICMwZjAgMHB4IDBweCAxMHB4IDFweDtcbiAgfVxuICAjYnVyZ2VyIC5idW4udG9wIHtcbiAgICB0b3A6IDI1JTtcbiAgfVxuICAjYnVyZ2VyIC5idW4uYm90dG9tIHtcbiAgICB0b3A6IDc1JTtcbiAgfVxuICAjYnVyZ2VyIC5maWxsaW5nIHtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICBhbmltYXRpb246IGdyZWVuLWxzLW91dCAwLjhzIGVhc2UgZm9yd2FyZHM7XG4gIH1cbiAgI2J1cmdlci5hY3RpdmUgLmJ1biB7XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIHRvcDogNTAlO1xuICAgIHRyYW5zaXRpb246IHRvcCAwLjRzIGVhc2UsIHRyYW5zZm9ybSAwLjRzIGVhc2U7XG4gIH1cbiAgI2J1cmdlci5hY3RpdmUgLmJ1bi50b3Age1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtMjI1ZGVnKTtcbiAgfVxuICAjYnVyZ2VyLmFjdGl2ZSAuYnVuLmJvdHRvbSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDQwNWRlZyk7XG4gIH1cbiAgI2J1cmdlci5hY3RpdmUgLmZpbGxpbmcge1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHJvdGF0ZSgtOTBkZWcpO1xuICAgIGFuaW1hdGlvbjogZ3JlZW4tbHMtaW4gMC44cyBlYXNlIGZvcndhcmRzO1xuICB9XG5cbiAgbmF2IHtcbiAgICBmb250LWZhbWlseTogT3BlbiBTYW5zO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBiYWNrZ3JvdW5kOiAjMTExO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoLTEwMCUpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgdG9wOiA4MHB4O1xuICAgIGJvdHRvbTogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDE2cHg7XG4gICAgd2lkdGg6IDMwMHB4O1xuICB9XG4gIG5hdi5zaG93IHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZXgoMCUpO1xuICB9XG4gIG5hdiB1bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBuYXYgdWwgbGkge1xuICAgIGJhY2tncm91bmQ6ICNlY2ZjZmY7XG4gICAgYm94LXNoYWRvdzogIzRkZiAwcHggMHB4IDBweCAycHg7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVlbTtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICB3aWR0aDogMDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHggMTAwcHggMTAwcHggMHB4O1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZSwgcGFkZGluZyAwLjJzIGVhc2UsIGNvbG9yIDAuMnMgZWFzZSwgdGV4dC1zaGFkb3cgMC4ycyBlYXNlO1xuICB9XG4gIG5hdiB1bCBsaTpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogIzRkZiAwcHggMHB4IDIwcHggMnB4O1xuICAgIHRleHQtc2hhZG93OiAjNGRmIDBweCAwcHggNnB4LCAjNGRmIDBweCAwcHggMTBweDtcbiAgfVxuICBuYXYgdWwgbGk6aG92ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweCAxNnB4IDBweCAwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICB9XG4gIG5hdiB1bCBsaSBhIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgd2lkdGg6IDMwMHB4O1xuICAgIGNvbG9yOiBpbmhlcml0O1xuICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgfVxuICBuYXYgdWwgbGkuZ3JlZW4ge1xuICAgIGJhY2tncm91bmQ6ICNlNmZmZTY7XG4gICAgYm94LXNoYWRvdzogIzBmMCAwcHggMHB4IDBweCAycHg7XG4gIH1cbiAgbmF2IHVsIGxpLmdyZWVuOmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAjMGYwIDBweCAwcHggMjBweCAycHg7XG4gICAgdGV4dC1zaGFkb3c6ICMwZjAgMHB4IDBweCA2cHgsICMwZjAgMHB4IDBweCAxMHB4O1xuICB9XG4gIG5hdiB1bCBsaS5yZWQge1xuICAgIGJhY2tncm91bmQ6ICNmZmU2ZTY7XG4gICAgYm94LXNoYWRvdzogI2YwMCAwcHggMHB4IDBweCAycHg7XG4gIH1cbiAgbmF2IHVsIGxpLnJlZDpob3ZlciB7XG4gICAgYm94LXNoYWRvdzogI2YwMCAwcHggMHB4IDIwcHggMnB4O1xuICAgIHRleHQtc2hhZG93OiAjZjAwIDBweCAwcHggNnB4LCAjZjAwIDBweCAwcHggMTBweDtcbiAgfVxuICBuYXYgdWwgbGkucHVycGxlIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmFlNmZhO1xuICAgIGJveC1zaGFkb3c6ICNjMGMgMHB4IDBweCAwcHggMnB4O1xuICB9XG4gIG5hdiB1bCBsaS5wdXJwbGU6aG92ZXIge1xuICAgIGJveC1zaGFkb3c6ICNjMGMgMHB4IDBweCAyMHB4IDJweDtcbiAgICB0ZXh0LXNoYWRvdzogI2MwYyAwcHggMHB4IDZweCwgI2MwYyAwcHggMHB4IDEwcHg7XG4gIH1cbiAgbmF2IHVsIGxpLnllbGxvdyB7XG4gICAgYmFja2dyb3VuZDogI2ZmZmZlNjtcbiAgICBib3gtc2hhZG93OiAjZmYwIDBweCAwcHggMHB4IDJweDtcbiAgfVxuICBuYXYgdWwgbGkueWVsbG93OmhvdmVyIHtcbiAgICBib3gtc2hhZG93OiAjZmYwIDBweCAwcHggMjBweCAycHg7XG4gICAgdGV4dC1zaGFkb3c6ICNmZjAgMHB4IDBweCA2cHgsICNmZjAgMHB4IDBweCAxMHB4O1xuICB9XG5cbiAgQGtleWZyYW1lcyBncmVlbi1scy1pbiB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICAgIDUwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSByb3RhdGUoLTkwZGVnKSB0cmFuc2xhdGUoMjAwJSwgMCUpO1xuICAgIH1cbiAgfVxuICBAa2V5ZnJhbWVzIGdyZWVuLWxzLW91dCB7XG4gICAgMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIwMCUpIHJvdGF0ZSgtOTBkZWcpO1xuICAgIH1cbiAgICA1MCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKC05MGRlZyk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuICB9XG4gIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICBmcm9tIHtcbiAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuICAgIHRvIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG59Il19 */");
            /***/ 
        }),
        /***/ "./src/app/navbar/navbar.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/navbar/navbar.component.ts ***!
          \********************************************/
        /*! exports provided: NavbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () { return NavbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/authenticate.service */ "./src/app/services/authenticate.service.ts");
            var NavbarComponent = /** @class */ (function () {
                function NavbarComponent(auth) {
                    this.auth = auth;
                    this.hamActive = false; // Hamburger icon bool
                    this.versionNumber = this.auth.appVersion;
                }
                NavbarComponent.prototype.ngOnInit = function () {
                };
                NavbarComponent.prototype.toggleHamburgerActive = function () {
                    this.hamActive = !this.hamActive;
                };
                return NavbarComponent;
            }());
            NavbarComponent.ctorParameters = function () { return [
                { type: _services_authenticate_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticateService"] }
            ]; };
            NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-navbar',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navbar/navbar.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navbar.component.scss */ "./src/app/navbar/navbar.component.scss")).default]
                })
            ], NavbarComponent);
            /***/ 
        }),
        /***/ "./src/app/services/auth-guard.service.ts": 
        /*!************************************************!*\
          !*** ./src/app/services/auth-guard.service.ts ***!
          \************************************************/
        /*! exports provided: AuthGuardService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function () { return AuthGuardService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthGuardService = /** @class */ (function () {
                function AuthGuardService() {
                }
                AuthGuardService.prototype.canActivate = function () {
                    return true;
                };
                return AuthGuardService;
            }());
            AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthGuardService);
            /***/ 
        }),
        /***/ "./src/app/services/authenticate.service.ts": 
        /*!**************************************************!*\
          !*** ./src/app/services/authenticate.service.ts ***!
          \**************************************************/
        /*! exports provided: AuthenticateService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticateService", function () { return AuthenticateService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var AuthenticateService = /** @class */ (function () {
                function AuthenticateService() {
                    this.appVersion = '1.2.3';
                }
                return AuthenticateService;
            }());
            AuthenticateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], AuthenticateService);
            /***/ 
        }),
        /***/ "./src/app/services/storage.service.ts": 
        /*!*********************************************!*\
          !*** ./src/app/services/storage.service.ts ***!
          \*********************************************/
        /*! exports provided: StorageService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function () { return StorageService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
            /* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
            /* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
            var StorageService = /** @class */ (function () {
                function StorageService(db, rtdb) {
                    this.db = db;
                    this.rtdb = rtdb;
                    this.imageNames = [];
                    this.imageRefs = [];
                    this.rtdbPath = 'imageMetadata';
                }
                StorageService.prototype.onUpload = function (imageList) {
                    for (var i = 0; i < imageList.length; i++) {
                        var currentImage = imageList[i];
                        var imageMetadata = {
                            index: currentImage.index,
                            name: currentImage.name,
                            type: currentImage.type
                        };
                        this.ref = this.db.ref("pictures/" + imageMetadata.name);
                        this.rtdb.database.ref(this.rtdbPath).push(imageMetadata);
                        this.task = this.ref.put(currentImage);
                        this.uploadProgress = this.task.percentageChanges();
                    }
                };
                StorageService.prototype.pullImageMetadata = function () {
                    var path = "/" + this.rtdbPath;
                    return this.rtdb.list(path);
                };
                StorageService.prototype.pullImageRefs = function (imgName) {
                    return this.db.ref("pictures/" + imgName);
                };
                StorageService.prototype.changeImageIndexes = function (imageMetadata) {
                    this.rtdb.database.ref(this.rtdbPath).set(imageMetadata);
                };
                return StorageService;
            }());
            StorageService.ctorParameters = function () { return [
                { type: angularfire2_storage__WEBPACK_IMPORTED_MODULE_2__["AngularFireStorage"] },
                { type: angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"] }
            ]; };
            StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], StorageService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
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
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\wNewman\Code\Github\mc-portfolio\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map
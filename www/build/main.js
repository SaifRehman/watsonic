webpackJsonp([0],{

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatsonConfig; });
var WatsonConfig = (function () {
    function WatsonConfig() {
    }
    WatsonConfig.authURL = {
        wantsonVisualRecognition: {
            api_key: "5dd5250c79742263cd33e095cc938d1a0952d690",
            version_date: "2016-05-20",
            threshold: 0,
            baseLinkClassify: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=",
            baseLinkClassifyFace: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces?api_key=",
            baseLinkClassifier: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classifiers?api_key=",
            baseLink: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classifiers/"
        },
        watsonTranslation: {
            authUsername: "55b4673e-be7d-4d06-9c50-0fd7867b40b2",
            authPassword: "QRGgAh6DY22n",
            baseLink: "https://gateway.watsonplatform.net/language-translator/api/v2/translate"
        },
        toneAnalyzer: {
            authUsername: "93eccd0e-13d9-4608-a6b0-adb1ffe368ab",
            authPassword: "s1TbeXdgMaDB",
            baseLink: "https://gateway.watsonplatform.net/tone-analyzer/api/v3/tone?version=",
            version_date: "2017-09-21"
        }
    };
    return WatsonConfig;
}());

//# sourceMappingURL=watson.config.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 162;

/***/ }),

/***/ 207:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 207;

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__ = __webpack_require__(346);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, WatsonVisualRecognition, WatsonTranslation) {
        this.navCtrl = navCtrl;
        this.WatsonVisualRecognition = WatsonVisualRecognition;
        this.WatsonTranslation = WatsonTranslation;
        this.show = "nothing";
        this.randomImage = "https://loremflickr.com/200/200";
        this.url = "http://lorempixel.com/100/100/";
        this.WatsonVisualRecognition.getClassifiersDetails('dogs_697818401').subscribe(function (data) {
            console.log(data);
        }, function (error) {
            console.log(error);
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saifrehman/Desktop/watsonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{show}}\n    </ion-title>\n  </ion-navbar>\n\n\n</ion-header>\n\n<ion-content padding>\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n      </ion-refresher>\n  <img src={{randomImage}} alt="HTML5 Icon" width="200" height="200">\n</ion-content>\n'/*ion-inline-end:"/Users/saifrehman/Desktop/watsonic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__["a" /* watsonVisualRecognition */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__["a" /* watsonVisualRecognition */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__["a" /* watsonTranslation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__["a" /* watsonTranslation */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonVisualRecognition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util__ = __webpack_require__(674);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_util___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_util__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import { createReadStream } from 'fs';



var watsonVisualRecognition = (function () {
    function watsonVisualRecognition(http) {
        this.http = http;
        this.parameters = {};
        this.params = {};
    }
    watsonVisualRecognition.prototype.getVisualRecognitonDataByOnlyURL = function (url) {
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLinkClassify +
            __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString()
            + "&threshold=" +
            __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.threshold.toString();
        var bodyObject = {};
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map(function (res) {
            console.log('res is ', JSON.parse(res['_body']));
            return JSON.parse(res['_body']);
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonVisualRecognition.prototype.getVisualRecognitonDataByOnlyURLWithHighConfidenceOnly = function (url) {
        var _this = this;
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLinkClassify +
            __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString()
            + "&threshold=" +
            __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.threshold.toString();
        var bodyObject = {};
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map(function (res) {
            console.log('res issssss ', JSON.parse(res['_body']));
            _this.temp = JSON.parse(res['_body']);
            console.log('temmppppp is', _this.temp['images'][0]['classifiers'][0]['classes'][0]);
            if (_this.temp['images'][0]['classifiers'][0]['classes'][0]) {
                return _this.temp['images'][0]['classifiers'][0]['classes'][0];
            }
            else {
                throw __WEBPACK_IMPORTED_MODULE_4_util__["error"];
            }
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonVisualRecognition.prototype.getListOfCustomCreatedClassifiers = function () {
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLinkClassifier +
            __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.api_key.toString() +
            "&version=" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString();
        var bodyObject = {};
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map(function (res) {
            return JSON.parse(res['_body']);
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonVisualRecognition.prototype.getClassifiersDetails = function (classifier) {
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLink + classifier + '?api_key=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition
            .api_key + "&version=" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString();
        var bodyObject = {};
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map(function (res) {
            return JSON.parse(res['_body']);
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonVisualRecognition.prototype.deleteClassifiers = function (classifier) {
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLink + classifier + '?api_key=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition
            .api_key + "&version=" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString();
        var bodyObject = {};
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.delete(link) // ...using post request
            .map(function (res) {
            return JSON.parse(res['_body']);
        })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonVisualRecognition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], watsonVisualRecognition);
    return watsonVisualRecognition;
    var _a;
}());

//# sourceMappingURL=watsonVisualRecognition.service.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonTranslation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var watsonTranslation = (function () {
    function watsonTranslation(http) {
        this.http = http;
    }
    watsonTranslation.prototype.translateToALanguage = function (text, lang) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.watsonTranslation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.watsonTranslation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.watsonTranslation.baseLink;
        var bodyObject = {
            text: text,
            model_id: lang
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonTranslation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], watsonTranslation);
    return watsonTranslation;
}());

//# sourceMappingURL=watsonTranslation.service.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(352);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__watsonServices_watson_module__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7__watsonServices_watson_module__["a" /* WatsonModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(253);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifrehman/Desktop/watsonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/saifrehman/Desktop/watsonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatsonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(678);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watsonVisualRecognition_service__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watsonTranslation_service__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watsonToneAnalyzer_service__ = __webpack_require__(679);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var WatsonModule = (function () {
    function WatsonModule() {
    }
    WatsonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            declarations: [],
            imports: [],
            entryComponents: [],
            providers: [
                __WEBPACK_IMPORTED_MODULE_1__auth_service__["a" /* watsonAuthService */],
                __WEBPACK_IMPORTED_MODULE_2__watsonVisualRecognition_service__["a" /* watsonVisualRecognition */],
                __WEBPACK_IMPORTED_MODULE_3__watsonTranslation_service__["a" /* watsonTranslation */],
                __WEBPACK_IMPORTED_MODULE_4__watsonToneAnalyzer_service__["a" /* watsonToneAnalyzer */],
            ]
        })
    ], WatsonModule);
    return WatsonModule;
}());

//# sourceMappingURL=watson.module.js.map

/***/ }),

/***/ 678:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var watsonAuthService = (function () {
    function watsonAuthService() {
    }
    watsonAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], watsonAuthService);
    return watsonAuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 679:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonToneAnalyzer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var watsonToneAnalyzer = (function () {
    function watsonToneAnalyzer(http) {
        this.http = http;
    }
    watsonToneAnalyzer.prototype.analyzeToneOnGivenText = function (text) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.baseLink + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.version_date;
        var bodyObject = {
            text: text
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    // check on this function what is it???
    watsonToneAnalyzer.prototype.analyzeToneOnGivenTextWithDifferentLanguageResponse = function (text, lang) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
                'Accept-Language': lang
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.baseLink + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.toneAnalyzer.version_date;
        var bodyObject = {
            text: text,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonToneAnalyzer = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
    ], watsonToneAnalyzer);
    return watsonToneAnalyzer;
}());

//# sourceMappingURL=watsonToneAnalyzer.service.js.map

/***/ })

},[347]);
//# sourceMappingURL=main.js.map
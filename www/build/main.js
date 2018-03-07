webpackJsonp([0],{

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatsonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(1109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watsonVisualRecognition_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watsonTranslation_service__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watsonToneAnalyzer_service__ = __webpack_require__(1110);
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

/***/ 1109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__);
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
        this.authorization = new __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__["AuthorizationV1"]({
            password: '<Text to Speech password>',
            url: 'https://stream.watsonplatform.net/authorization/api',
        });
    }
    watsonAuthService.prototype.getToken = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].defer(function () {
            return new Promise(function (resolve, reject) {
                _this.authorization.getToken({
                    url: 'https://stream.watsonplatform.net/text-to-speech/api'
                }, function (err, token) {
                    if (!token || err) {
                        console.log('error:', err);
                        throw err;
                    }
                    else {
                        resolve(token);
                    }
                });
            });
        });
    };
    watsonAuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], watsonAuthService);
    return watsonAuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonToneAnalyzer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(212);
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

/***/ }),

/***/ 251:
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
            baseLink: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key="
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

/***/ 262:
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
webpackEmptyAsyncContext.id = 262;

/***/ }),

/***/ 307:
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
webpackEmptyAsyncContext.id = 307;

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__ = __webpack_require__(522);
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
        this.appTitle = "Watsonic";
        this.watsonLogo = "../../assets/imgs/brand.jpg";
        this.videoPlaceholder = "../../assets/imgs/static.png";
        this.watsonVideoHD = "../../assets/videos/IBM_Watson_Ambient_720.mp4";
        this.watsonVideoMobile = "../../assets/videos/ibm_watson_logo_inverse_small.mp4";
        this.visualRecognition = "../../assets/imgs/visual_recognition.svg";
        this.randomImage = "https://loremflickr.com/200/200";
    }
    HomePage.prototype.doRefresh = function (refresher) {
        var _this = this;
        this.randomImage = "https://loremflickr.com/200/200";
        this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.randomImage).subscribe(function (data) {
            console.log('data', data);
            refresher.complete();
            _this.show = data['images'][0]['classifiers'][0]['classes'][0]['class'];
            _this.WatsonTranslation.translateToALanguage(_this.show, 'en-ar').subscribe(function (data) {
                _this.show = data['translations'][0]['translation'];
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
            refresher.complete();
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var videoFile = "";
        if (window.innerWidth <= 768) {
            videoFile = this.watsonVideoMobile;
            document.querySelector('source').setAttribute('src', videoFile);
        }
        else if (window.innerWidth > 768) {
            videoFile = this.watsonVideoHD;
            console.log(videoFile);
            document.querySelector('source').setAttribute('src', videoFile);
        }
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/Heba/Development/Watsonic/src/pages/home/home.html"*/'<!-- <ion-header color="primary" no-border>\n\n    <ion-navbar class="bg-transparent">\n       <ion-title class="bg-transparent">\n            <h2 class="bx--cloud-header-brand__text">{{appTitle}}</h2>\n        </ion-title>\n    </ion-navbar>\n    \n</ion-header> -->\n\n<ion-content padding class="video-bg">\n    <ion-grid style="height: 100%">\n        <ion-refresher (ionRefresh)="doRefresh($event)">\n            <ion-refresher-content></ion-refresher-content>\n        </ion-refresher>\n\n        <div class="video-background-container position-absolute top-left-0 nudge-right" style="width:auto;height:100vh;background:transparent;">\n            <div class="flex flex-column">\n                <video class="" autoplay="" data-playtimes="100" style="width:102vw;height:auto;" loop preload="auto" poster="{{videoPlaceholder}}">\n                    <source src="">\n                    <img src="{{videoPlaceholder}}" title="Your browser does not support the video tag">\n                </video>\n            </div>\n        </div>\n\n        <ion-row justify-content-center align-items-center class="position-hero">\n            <div class="text-align-center on-top">\n                <h1 class="text-size-hero font-weight-bold text-shadow">Welcome to <span>Watsonic</span></h1>\n                <h3 class="font-mono text-shadow">Your One-Stop-Shop for all Watson Services</h3>\n            </div>\n        </ion-row>\n\n        <ion-row justify-content-center align-self-end class="position-hero">\n            <ion-fab center bottom>\n                <button ion-fab color="danger"><ion-icon name="md-share"></ion-icon></button>\n                <ion-fab-list side="top">\n                    <button ion-fab color="primary"><ion-icon name="logo-vimeo"></ion-icon></button>\n                </ion-fab-list>\n                <ion-fab-list side="bottom">\n                    <button ion-fab color="secondary"><ion-icon name="logo-facebook"></ion-icon></button>\n                </ion-fab-list>\n                <ion-fab-list side="left">\n                    <button ion-fab color="light"><ion-icon name="logo-googleplus"></ion-icon></button>\n                </ion-fab-list>\n                <ion-fab-list side="right">\n                    <button ion-fab color="dark"><ion-icon name="logo-twitter"></ion-icon></button>\n                </ion-fab-list>\n            </ion-fab>\n        </ion-row>\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/Users/Heba/Development/Watsonic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__["a" /* watsonVisualRecognition */], __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__["a" /* watsonTranslation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonVisualRecognition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__ = __webpack_require__(444);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watson_config__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var watsonVisualRecognition = (function () {
    function watsonVisualRecognition(http) {
        this.http = http;
        this.visualRecognition = new __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__["VisualRecognitionV3"]({
            api_key: __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.api_key,
            version_date: __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date,
        });
        this.parameters = {};
        this.params = {};
    }
    watsonVisualRecognition.prototype.getVisualRecognitonDataByOnlyURL = function (url) {
        var link = __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLink +
            __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString()
            + "&threshold=" +
            __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.threshold.toString();
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
    watsonVisualRecognition.prototype.getVisualRecognitonForFacesDataByOnlyURL = function (url) {
        var link = __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.baseLink +
            __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.version_date.toString() + "&threshold=" +
            __WEBPACK_IMPORTED_MODULE_3__watson_config__["a" /* WatsonConfig */].authURL.wantsonVisualRecognition.threshold.toString();
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
    watsonVisualRecognition = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]])
    ], watsonVisualRecognition);
    return watsonVisualRecognition;
}());

//# sourceMappingURL=watsonVisualRecognition.service.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonTranslation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(212);
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

/***/ 523:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(528);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 528:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_full_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__watsonServices_watson_module__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var config = {
    statusbarPadding: true
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], config, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__watsonServices_watson_module__["a" /* WatsonModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_android_full_screen__["a" /* AndroidFullScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 572:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_full_screen__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(352);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { SplashScreen } from '@ionic-native/splash-screen';
//import { MenuController } from 'ionic-angular';

var MyApp = (function () {
    function MyApp(platform, statusBar, androidFullScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        if (platform.is('android')) {
            androidFullScreen.isImmersiveModeSupported()
                .then(function () { return androidFullScreen.immersiveMode(); })
                .catch(function (error) { return console.log(error); });
        }
        else {
            platform.ready().then(function () {
                if (statusBar) {
                    console.log(statusBar);
                    statusBar.hide();
                }
            });
        }
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/Heba/Development/Watsonic/src/app/app.html"*/'<ion-nav [root]="rootPage" #nav swipeBackEnabled="false"></ion-nav>\n\n<!-- <ion-menu [content]="nav">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu> -->\n'/*ion-inline-end:"/Users/Heba/Development/Watsonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_android_full_screen__["a" /* AndroidFullScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 894:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 895:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 963:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[523]);
//# sourceMappingURL=main.js.map
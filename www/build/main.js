webpackJsonp([0],{

/***/ 1077:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WatsonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_service__ = __webpack_require__(1078);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watsonVisualRecognition_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watsonTranslation_service__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__watsonToneAnalyzer_service__ = __webpack_require__(1079);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__watsonConversation_service__ = __webpack_require__(1080);
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
                __WEBPACK_IMPORTED_MODULE_5__watsonConversation_service__["a" /* watsonConversation */],
            ]
        })
    ], WatsonModule);
    return WatsonModule;
}());

//# sourceMappingURL=watson.module.js.map

/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__ = __webpack_require__(441);
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

/***/ 1079:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonToneAnalyzer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(213);
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

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonConversation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var watsonConversation = (function () {
    function watsonConversation(http) {
        this.http = http;
    }
    watsonConversation.prototype.getWorkspace = function () {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.createWorkspace = function (name, intents, entities, language, description, dialog_nodes) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            name: name,
            intents: intents,
            entities: entities,
            language: language,
            description: description,
            dialog_nodes: dialog_nodes,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteWorkspace = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
                'Accept': ' text/html'
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid;
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getWorkspaceById = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid;
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateWorkspace = function (name, intents, entities, language, description, dialog_nodes, workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid;
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            name: name,
            intents: intents,
            entities: entities,
            language: language,
            description: description,
            dialog_nodes: dialog_nodes,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.sendMessage = function (text, workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + 'message' + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            input: {
                text: text,
            }
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listCounterExamples = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.createCounterExample = function (workspaceid, text) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            text: text,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteCounterExamples = function (workspaceid, text) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
                'Accept': ' text/html'
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
            +'/' + text + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getCounterExamples = function (workspaceid, text) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' + '/' + text +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateCounterExample = function (workspaceid, oldtext, newtext) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
            '/' + 'counterexamples' + '/' + oldtext +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            newtext: newtext,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listEntities = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.createEntities = function (workspaceid, entities, value) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            entities: entities,
            value: value,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteEntity = function (workspaceid, entity) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
                'Accept': ' text/html'
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
            +'/entities/' + entity + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getEntity = function (workspaceid, entity) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' + '/' + entity +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateEntity = function (workspaceid, entity, description) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
            '/' + 'entities' + '/' + entity +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            description: description,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listEntityValues = function (workspaceid, entity) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.addEntityValue = function (workspaceid, entity, value) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            value: value,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteEntityValue = function (workspaceid, entity, value) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values' + '/' + value +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getEntityValue = function (workspaceid, entity, values) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + values;
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateEntityValue = function (workspaceid, entity, values, synonyms) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + values;
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            synonyms: synonyms,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listSynonyms = function (workspaceid, entity, value) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + value + '/' + 'synonyms';
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.addSynonym = function (workspaceid, entity, value, synonym) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + value + '/' + 'synonyms';
        '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            synonym: synonym,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteSynonym = function (workspaceid, entity, value, synonym) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + value + '/' + 'synonyms' + '/' + synonym +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getSynonyms = function (workspaceid, entity, value, synonym) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + value + '/' + 'synonyms' + '/' + synonym +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateSynonym = function (workspaceid, entity, value, oldsynonym, synonym) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
            +'/' + entity + '/values/' + value + '/' + 'synonyms' + '/' + oldsynonym +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            synonym: synonym,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listIntents = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.createIntents = function (workspaceid, intent, examples) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            intent: intent,
            examples: examples,
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteIntent = function (workspaceid, intent) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
            +'/' + intent +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getIntents = function (workspaceid, intent) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
            +'/' + intent +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateIntent = function (workspaceid, oldintent, intent, examples) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
            +'/' + oldintent +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            intent: intent,
            examples: examples
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listDialogNodes = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.createDialogNode = function (workspaceid, dialog_node, conditions, output, title) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            dialog_node: dialog_node,
            conditions: conditions,
            output: output,
            title: title
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteDialogNode = function (workspaceid, dialog_node) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' + '/' +
            dialog_node + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.getDialogNodes = function (workspaceid, dialog_node) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' + '/' +
            dialog_node + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.updateDialogNode = function (workspaceid, dialog_node, conditions, output, title) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' + '/' +
            dialog_node + '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            output: output
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listLogEventsInWorkSpace = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'logs' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listLogEventsInAllWorkSpace = function (workspaceid) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLink +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.listExamples = function (workspaceid, intent) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
            '/' + 'examples' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.createExamples = function (workspaceid, intent, text) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
            '/' + 'examples' +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        var bodyObject = {
            text: text
        };
        var bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyString, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation.prototype.deleteExamples = function (workspaceid, intent, text) {
        var token = btoa(__WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authUsername + ":" + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.authPassword);
        var options = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["d" /* RequestOptions */]({
            headers: new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]({
                'Content-Type': 'application/json',
                'Authorization': "Basic " + token,
            })
        });
        var link = __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
            '/' + 'examples' + '/' + text +
            '?version=' + __WEBPACK_IMPORTED_MODULE_2__watson_config__["a" /* WatsonConfig */].authURL.conversation.version_date;
        return this.http.delete(link, options) // ...using post request
            .map(function (res) { return res.json(); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error.json().error || 'Server error');
        });
    };
    watsonConversation = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _a || Object])
    ], watsonConversation);
    return watsonConversation;
    var _a;
}());

//# sourceMappingURL=watsonConversation.service.js.map

/***/ }),

/***/ 247:
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
        },
        conversation: {
            authUsername: "4677f4f0-fde3-41ad-987a-ce10bd553252",
            authPassword: "0OMHKrwnyawh",
            baseLinkWorkspace: "https://gateway.watsonplatform.net/conversation/api/v1/workspaces",
            baseLink: "https://gateway.watsonplatform.net/conversation/api/v1/logs",
            version_date: "2018-02-16"
        },
    };
    return WatsonConfig;
}());

//# sourceMappingURL=watson.config.js.map

/***/ }),

/***/ 260:
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
webpackEmptyAsyncContext.id = 260;

/***/ }),

/***/ 305:
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
webpackEmptyAsyncContext.id = 305;

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__ = __webpack_require__(513);
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/saifrehman/Desktop/watsonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      {{show}}\n    </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div style="display:table-cell; vertical-align:middle; text-align:center">\n    <img src={{randomImage}} alt="HTML5 Icon" width="400" height="400">\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/saifrehman/Desktop/watsonic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__watsonServices_watsonVisualRecognition_service__["a" /* watsonVisualRecognition */], __WEBPACK_IMPORTED_MODULE_3__watsonServices_watsonTranslation_service__["a" /* watsonTranslation */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonVisualRecognition; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__ = __webpack_require__(441);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_watson_developer_cloud__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__watson_config__ = __webpack_require__(247);
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

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return watsonTranslation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__watson_config__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(213);
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

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(519);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(556);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__watsonServices_watson_module__ = __webpack_require__(1077);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(151);
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

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_home_home__ = __webpack_require__(350);
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
    function MyApp(platform, statusBar) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.overlaysWebView(false);
            statusBar.styleBlackTranslucent();
            //splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/saifrehman/Desktop/watsonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/saifrehman/Desktop/watsonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 854:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 856:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 889:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 890:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 957:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[514]);
//# sourceMappingURL=main.js.map
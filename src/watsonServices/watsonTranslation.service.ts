import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import { WatsonConfig } from './watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';

@Injectable()
export class watsonTranslation {
    public constructor(public http: Http) {

    }
    public translateToALanguage(text, lang): Observable<any> {
        const token = btoa(WatsonConfig.authURL.watsonTranslation.authUsername+":"+WatsonConfig.authURL.watsonTranslation.authPassword)
        // let headers = new HttpHeaders({'Content-Type': 'application/json'})
        //  .set("authorization", auth);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + token
            })
        });
        console.log(token);
        const link = "https://gateway.watsonplatform.net/language-translator/api/v2/translate"
        const bodyObject = {
            text: text,
            model_id: lang
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res) => {
                return res;
            })
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
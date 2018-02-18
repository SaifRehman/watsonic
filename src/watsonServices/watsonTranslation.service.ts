import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as fs from 'fs';
import { WatsonConfig } from './watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class watsonTranslation {

    public constructor(public http: HttpClient) {

    }

    public translateToALanguage(text,lang): Observable<any> {
        const link = "https://"+ WatsonConfig.authURL.watsonTranslation.authUsername+":"+
        WatsonConfig.authURL.watsonTranslation.authPassword+"gateway.watsonplatform.net/language-translator/api/v2/translate"
        const bodyObject = {
            text:text,
            model_id:lang
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map((res) => {
                return res;
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getVisualRecognitonForFacesDataByOnlyURL(url): Observable<any> {
        const link = "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/detect_faces?api_key=" +
            WatsonConfig.authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString() + "&threshold=" +
            WatsonConfig.authURL.wantsonVisualRecognition.threshold.toString();
        const bodyObject = {};
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map((res) => {
                return res;
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}


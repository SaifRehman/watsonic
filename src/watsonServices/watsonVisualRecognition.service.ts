import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as watson from 'watson-developer-cloud';
import * as fs from 'fs';
import { WatsonConfig } from './watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class watsonVisualRecognition {
    public visualRecognition = new watson.VisualRecognitionV3({
        api_key: WatsonConfig.authURL.wantsonVisualRecognition.api_key,
        version_date: WatsonConfig.authURL.wantsonVisualRecognition.version_date,
    });

    public parameters: any;
    public params: any;

    public constructor(public http: HttpClient) {
        this.parameters = {};
        this.params = {};
    }

    public getVisualRecognitonDataByOnlyURL(url): Observable<any> {
        const link = "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=" +
            WatsonConfig.authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString()
            + "&threshold=" +
            WatsonConfig.authURL.wantsonVisualRecognition.threshold.toString()
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


import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatsonConfig } from './watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
@Injectable()
export class watsonVisualRecognition {
    public parameters: any;
    public params: any;
    public temp:any;
    public constructor(public http: Http) {
        this.parameters = {};
        this.params = {};
    }
    public getVisualRecognitonDataByOnlyURL(url): Observable<any> {
        const link = WatsonConfig.authURL.wantsonVisualRecognition.baseLinkClassify +
            WatsonConfig.authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString()
            + "&threshold=" +
            WatsonConfig.authURL.wantsonVisualRecognition.threshold.toString()
        const bodyObject = {};
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map((res) => {
                console.log('res is ', JSON.parse(res['_body']));
                return JSON.parse(res['_body']);
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }
    public getVisualRecognitonDataByOnlyURLWithHighConfidenceOnly(url): Observable<any> {
        const link = WatsonConfig.authURL.wantsonVisualRecognition.baseLinkClassify +
            WatsonConfig.authURL.wantsonVisualRecognition.api_key.toString() + "&url=" +
            url +
            "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString()
            + "&threshold=" +
            WatsonConfig.authURL.wantsonVisualRecognition.threshold.toString()
        const bodyObject = {};
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map((res) => {
                console.log('res issssss ', JSON.parse(res['_body']));
                this.temp = JSON.parse(res['_body']);
                console.log('temmppppp is',this.temp['images'][0]['classifiers'][0]['classes'][0]);
                if ( this.temp['images'][0]['classifiers'][0]['classes'][0]){
                    return this.temp['images'][0]['classifiers'][0]['classes'][0];
                }
                else{
                    throw error;
                }
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }
    public getListOfCustomCreatedClassifiers(): Observable<any> {
        const link = WatsonConfig.authURL.wantsonVisualRecognition.baseLinkClassifier +
            WatsonConfig.authURL.wantsonVisualRecognition.api_key.toString() + 
            "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString();
        const bodyObject = {};
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map((res) => {
                return JSON.parse(res['_body']);
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getClassifiersDetails(classifier): Observable<any> {
        const link = WatsonConfig.authURL.wantsonVisualRecognition.baseLink + classifier + '?api_key=' + WatsonConfig.authURL.wantsonVisualRecognition
        .api_key + "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString();
        const bodyObject = {};
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.get(link) // ...using post request
            .map((res) => {
                return JSON.parse(res['_body']);
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteClassifiers(classifier): Observable<any> {
        const link = WatsonConfig.authURL.wantsonVisualRecognition.baseLink + classifier + '?api_key=' + WatsonConfig.authURL.wantsonVisualRecognition
        .api_key + "&version=" + WatsonConfig.authURL.wantsonVisualRecognition.version_date.toString();
        const bodyObject = {};
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.delete(link) // ...using post request
            .map((res) => {
                return JSON.parse(res['_body']);
            })
            .catch((error: any) => {
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
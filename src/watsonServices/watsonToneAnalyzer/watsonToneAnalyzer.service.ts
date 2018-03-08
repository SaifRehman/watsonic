import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatsonConfig } from '../watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class watsonToneAnalyzer {
    constructor(
        private http: Http
    ){ }
    
    public analyzeToneOnGivenText(text: string): Observable<any> {
        const token = btoa(WatsonConfig.authURL.toneAnalyzer.authUsername+":"+WatsonConfig.authURL.toneAnalyzer.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.toneAnalyzer.baseLink + WatsonConfig.authURL.toneAnalyzer.version_date;
        const bodyObject = {
            text: text
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    // check on this function what is it???
    public analyzeToneOnGivenTextWithDifferentLanguageResponse(text: string, lang: string): Observable<any> {
        const token = btoa(WatsonConfig.authURL.toneAnalyzer.authUsername+":"+WatsonConfig.authURL.toneAnalyzer.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
                'Accept-Language': lang
            })
        });
        const link = WatsonConfig.authURL.toneAnalyzer.baseLink + WatsonConfig.authURL.toneAnalyzer.version_date;
        const bodyObject = {
            text: text,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link, bodyObject, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatsonConfig } from './watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class watsonTranslation {
    constructor(
        private http: Http
    ){ }
    
    public translateToALanguage(text: string, lang: string): Observable<any> {
        const token = btoa(WatsonConfig.authURL.watsonTranslation.authUsername+":"+WatsonConfig.authURL.watsonTranslation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.watsonTranslation.baseLink;
        const bodyObject = {
            text: text,
            model_id: lang
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

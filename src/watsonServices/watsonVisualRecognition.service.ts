import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as watson from 'watson-developer-cloud';
import * as fs from 'fs';
import { WatsonConfig } from './watson.config';
@Injectable()
export class watsonVisualRecognition {
    public visualRecognition = new watson.VisualRecognitionV3({
        api_key: WatsonConfig.authURL.wantsonVisualRecognition.api_key,
        version_date: WatsonConfig.authURL.wantsonVisualRecognition.version_date,
    });

    public parameters: any;
    public params: any;

    public constructor() {
        this.parameters = {};
        this.params = {};
    }

    public getVisualRecognitonDataByOnlyURL(link): Observable<any> {
        this.parameters = {
            url: link
        }
        this.params = {
            parameters: this.parameters
        }
        return Observable.defer(() => {
            console.log('function called')
            return new Promise((resolve, reject) => {
                console.log('in promise');
                this.visualRecognition.classify(this.params, function (err, res) {
                    console.log('in visual recog call api ');
                    if (err) {
                        console.log('there is errorrrrrr',err);
                        throw err;
                    } else {
                        console.log(JSON.stringify(res, null, 2));
                        resolve(res);
                    }
                });

            });
        });
    }
}


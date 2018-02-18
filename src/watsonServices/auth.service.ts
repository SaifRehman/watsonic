import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import * as watson from 'watson-developer-cloud';
import { WatsonConfig } from './watson.config';
@Injectable()
export class watsonAuthService {
    public authorization = new watson.AuthorizationV1({
        username: WatsonConfig.authUsername,
        password: '<Text to Speech password>',
        url: 'https://stream.watsonplatform.net/authorization/api', // Speech tokens
    });
    
    public constructor() {

    }
    public getToken(): Observable<any> {
        return Observable.defer(() => {
            return new Promise((resolve, reject) => {
                this.authorization.getToken({
                    url: 'https://stream.watsonplatform.net/text-to-speech/api'
                },
                    (err, token) => {
                        if (!token || err) {
                            console.log('error:', err);
                            throw err;
                        } else {
                            resolve(token);
                        }
                    });
            });
        });
    }





}




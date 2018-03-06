import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WatsonConfig } from './watson.config';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { error } from 'util';
@Injectable()
export class watsonConversation {
 
    public constructor(public http: Http) {

    }

    public getWorkspace(): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public createWorkspace(name,intents,entities,language,description,dialog_nodes): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            name,
            intents,
            entities,
            language,
            description,
            dialog_nodes,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteWorkspace(workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
                'Accept': ' text/html'
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid
         '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getWorkspaceById(workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid
         '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateWorkspace(name,intents,entities,language,description,dialog_nodes,workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid
         '?version=' + WatsonConfig.authURL.conversation.version_date;        const bodyObject = {
            name,
            intents,
            entities,
            language,
            description,
            dialog_nodes,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public sendMessage(text,workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + 'message' + '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            input:{
                text,
            }
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listCounterExamples (workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
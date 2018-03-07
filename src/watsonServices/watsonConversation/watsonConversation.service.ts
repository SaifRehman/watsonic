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

    public createCounterExample(workspaceid,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            text,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteCounterExamples(workspaceid,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
                'Accept': ' text/html'
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
        + '/'+ text + '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getCounterExamples (workspaceid,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' + '/' + text +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateCounterExample(workspaceid,oldtext,newtext): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' + 
        '/' + 'counterexamples' + '/' + oldtext +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            newtext,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listEntities (workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public createEntities(workspaceid,entities,value): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            entities,
            value,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteEntity(workspaceid,entity): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
                'Accept': ' text/html'
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' +
        + '/entities/'+ entity + '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getEntity (workspaceid,entity): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' + '/' + entity +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateEntity(workspaceid,entity,description): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'counterexamples' + 
        '/' + 'entities' + '/' + entity +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            description,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listEntityValues (workspaceid, entity): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public addEntityValue(workspaceid,entity,value): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            value,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteEntityValue(workspaceid,entity,value): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values' + '/' + value +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getEntityValue (workspaceid,entity,values): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + values
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateEntityValue(workspaceid,entity,values,synonyms): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + values
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            synonyms,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listSynonyms (workspaceid, entity,value): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + value + '/' + 'synonyms'
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public addSynonym(workspaceid,entity,value, synonym): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + value + '/' + 'synonyms'
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            synonym,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteSynonym(workspaceid,entity,value,synonym): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + value + '/' + 'synonyms' + '/' + synonym +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getSynonyms (workspaceid, entity,value, synonym): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + value + '/' + 'synonyms' + '/' + synonym +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateSynonym(workspaceid,entity,value, oldsynonym,synonym): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'entities' +
        + '/' + entity + '/values/' + value + '/' + 'synonyms' + '/' + oldsynonym +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            synonym,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
    
    public listIntents (workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public createIntents(workspaceid,intent,examples): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            intent,
            examples,
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteIntent(workspaceid,intent): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
        + '/' + intent +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getIntents (workspaceid, intent): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
        + '/' + intent +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateIntent(workspaceid,oldintent,intent,examples): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intents' +
        + '/' + oldintent +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            intent,
            examples
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listDialogNodes (workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }


    public createDialogNode(workspaceid,dialog_node,conditions,output,title): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            dialog_node,
            conditions,
            output,
            title
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteDialogNode(workspaceid,dialog_node): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' + '/' +
        dialog_node + '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getDialogNodes (workspaceid,dialog_node): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' + '/' +
        dialog_node + '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateDialogNode(workspaceid,dialog_node,conditions,output,title): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'dialog_nodes' + '/' +
        dialog_node + '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            output
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listLogEventsInWorkSpace (workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'logs' +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
    public listLogEventsInAllWorkSpace (workspaceid): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLink +
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public listExamples (workspaceid,intent): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
        '/' + 'examples'+
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public createExamples(workspaceid,intent,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
        '/' + 'examples'+
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            text
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public deleteExamples(workspaceid,intent,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`,
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
        '/' + 'examples'+ '/' + text + 
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.delete(link,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public getExamples (workspaceid,intent,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
        '/' + 'examples'+ '/' + text + 
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        return this.http.get(link, options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }

    public updateExamples(workspaceid,intent,oldtext,text): Observable<any> {
        const token = btoa(WatsonConfig.authURL.conversation.authUsername+":"+WatsonConfig.authURL.conversation.authPassword);
        const options = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Basic ${token}`
            })
        });
        const link = WatsonConfig.authURL.conversation.baseLinkWorkspace + '/' + workspaceid + '/' + 'intent' +
        '/' + 'examples'+ '/' + oldtext + 
        '?version=' + WatsonConfig.authURL.conversation.version_date;
        const bodyObject = {
            text
        };
        const bodyString = JSON.stringify(bodyObject); // Stringify payload
        return this.http.post(link,bodyString,options) // ...using post request
            .map((res: Response) => res.json())
            .catch((error: any) => {
                console.log(error);
                return Observable.throw(error.json().error || 'Server error');
            });
    }
}
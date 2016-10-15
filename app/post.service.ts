import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Post } from './post';

@Injectable()
export class PostService {

    private apiurl = 'https://jsonplaceholder.typicode.com';
    
    constructor (private http: Http) { }

    getPosts(): Promise<Post[]> {
        return this.http.get(this.apiurl + '/posts')
                    .toPromise()
                    .then(response => response.json() as Post[])
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
}
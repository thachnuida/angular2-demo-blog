import { Component } from '@angular/core';

import { Post } from './post';
import { PostService } from './post.service';

@Component({
    selector: 'my-app',
    template: `
        <div class="header">
            <h1>{{title}}</h1>
            <h2>{{description}}</h2>
        </div>

        <div class="post-list">
            <div *ngFor="let post of posts" class="post">
                <h4>{{post.title}}</h4>
            </div>
        </div>
        `
})

export class AppComponent {
    title = 'My Blog';
    description = 'This is my blog, this is my life';
    posts: Post[] = [];

    constructor(private postService: PostService)  {}

    ngOnInit(): void {
        this.postService.getPosts()
            .then(posts => this.posts = posts);
    }
}
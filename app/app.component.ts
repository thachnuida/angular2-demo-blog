import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <div class="header">
            <h1>{{title}}</h1>
            <h2>{{description}}</h2>
        </div>
        `
})

export class AppComponent {
    title = 'My Blog';
    description = 'This is my blog, this is my life';
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PostService } from './post.service';

@NgModule({
    imports: [ 
        BrowserModule,
        HttpModule
    ],
    declarations: [ AppComponent ],
    providers: [
        PostService
    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
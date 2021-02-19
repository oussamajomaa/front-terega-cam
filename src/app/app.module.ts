import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebCamComponent } from './web-cam/web-cam.component';
import { WebcamModule } from 'ngx-webcam';
import { NavComponent } from './nav/nav.component';
import { S3Component } from './s3/s3.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    WebCamComponent,
    NavComponent,
    S3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

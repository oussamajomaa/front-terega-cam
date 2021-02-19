import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { S3Component } from './s3/s3.component';
import { WebCamComponent } from './web-cam/web-cam.component';

const routes: Routes = [
  {path:"upload", component:S3Component},
  {path:"camera", component:WebCamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
providedIn: 'root'
})
export class ImageUploadService {
constructor(private http: HttpClient) {}

imageUpload(imageForm: FormData) {
  console.log('image uploading');
  return this.http.post('http://localhost:3001/api/upload', imageForm);
  }

// convertir en blob
dataURItoBlob(base64:any) {
  let binary = atob(base64.split(',')[1]);
  let array = [];
  for (let i = 0; i < binary.length; i++) {
      array.push(binary.charCodeAt(i));
  }
  return new Blob([new Uint8Array(array)], { type: 'image/jpeg' });
}



}
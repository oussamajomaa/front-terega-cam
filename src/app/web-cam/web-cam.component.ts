import { Component } from '@angular/core';
import { WebcamImage } from 'ngx-webcam'
import { Subject, Observable } from 'rxjs'
import { ImageUploadService } from '../image-upload.service';

@Component({
  selector: 'app-web-cam',
  templateUrl: './web-cam.component.html',
  styleUrls: ['./web-cam.component.css']
})
export class WebCamComponent {

  // imageObj: File
  id:any

  imageUrl: string = ""

  public buttonDisabled: boolean = false;

  public index = 0

  public base64: string = ""

  public text: string = "Prendre une photo"

  // latest snapshot
  public webcamImage: WebcamImage = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();

  constructor(private imageUploadService: ImageUploadService) { }

  triggerSnapshot(): void {
    this.trigger.next();
    this.text = "Modifier la photo"
    this.buttonDisabled = false
    
  
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
    this.base64 = this.webcamImage.imageAsDataUrl
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  savaImage() {
    this.index += 1
    if (this.index < 7) {
      let a = document.createElement('a')
      a.setAttribute('download', "fileName")
      a.setAttribute('href', this.base64)
      a.click()
      this.text = "Prendre une photo"
      let img = document.createElement('img')
      img.setAttribute('src', this.base64)
      img.setAttribute('class', 'base64, w-100')
      document.getElementById('p' + this.index)?.appendChild(img)
      this.buttonDisabled = !this.buttonDisabled

      this.id=Date.now()
      let fileName = this.id+ '.jpeg'
      const imageForm = new FormData();
      imageForm.set('image', this.imageUploadService.dataURItoBlob(this.base64), fileName);
      this.imageUploadService.imageUpload(imageForm).subscribe((res: any) => {
        this.imageUrl = res['image']
      });

    } else {
      alert('6 photos ont été prises')
    }

  }

  // onImagePicked(event: Event): void {
  //   const FILE = (event.target as HTMLInputElement).files[0]
  //   this.imageObj = FILE;

  //   console.log(event)
  // }

  // onImageUpload() {
  //   const imageForm = new FormData();
  //   imageForm.append('image', this.imageUploadService.dataURItoBlob(this.base64));
  //   this.imageUploadService.imageUpload(imageForm).subscribe((res: any) => {
  //     this.imageUrl = res['image']
  //   });
  // }

  // const formData = new FormData()
  // let blob = dataURItoBlob()
  // formData.set("image", blob, fileName);
  // const request = new XMLHttpRequest();
  // request.open("post", "/api/upload");
  // request.send(formData);

}

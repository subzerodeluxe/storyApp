import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

// import image model
import { Image } from '../models/image'; 

@Injectable()
export class ImagesService {

  private images: Image[] = []; 

  addImage(imageUrl: string, userName: string, date: string, title: string) {
    const image = new Image(imageUrl, userName, date, title);
    this.images.push(image); 
  }

  loadImages() {
    return this.images.slice(); 
  }

  deleteImage(index: number) {
    this.images.splice(index, 1); 
  }

}

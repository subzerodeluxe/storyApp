import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';

// import models and services 
import { Image } from '../../models/image';
import { ImagesService } from '../../services/images';

@Component({
  selector: 'page-image',
  templateUrl: 'image.html'
})
export class ImagePage {

  // properties 
  image: Image;
  index: number; 

  constructor(public navParams: NavParams, private viewCtrl: ViewController, private imagesService: ImagesService) {
    this.image = this.navParams.get('image'); 
    this.index = this.navParams.get('index'); 
  }

  leaveImage() {
     this.viewCtrl.dismiss(); 
  }

  deleteImage() {
    this.imagesService.deleteImage(this.index); 
    this.leaveImage(); 
  }
}

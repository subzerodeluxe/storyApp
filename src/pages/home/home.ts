import { Component } from '@angular/core';
import { ModalController } from 'ionic-angular';

// import pages
import { ImagePage } from '../image/image';
import { AddImagePage } from '../add-image/add-image';

// import models and services 
import { Image } from '../../models/image';
import { ImagesService } from '../../services/images'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  
  // properties
  addImagePage = AddImagePage; 
  images: Image[] = []; 
  
  constructor(private imagesService: ImagesService,
  private modalCtrl: ModalController) {

  }

  ionViewWillEnter() {
    this.images = this.imagesService.loadImages(); 
    console.log(new Date().toLocaleDateString()); 
  }

  openImage(image: Image, index: number) {
    const modal = this.modalCtrl.create(ImagePage, {image: image, index: index}); 
    modal.present(); 
  }

 

}

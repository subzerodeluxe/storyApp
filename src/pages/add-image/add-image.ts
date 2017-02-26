import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { NgForm } from "@angular/forms";

// import native camera 
import { Camera } from 'ionic-native';

// import pages
import { ImagePage } from '../image/image';

// import models and services 
import { Image } from '../../models/image';
import { ImagesService } from '../../services/images'; 

@Component({
  selector: 'page-add-image',
  templateUrl: 'add-image.html'
})
export class AddImagePage {

  // properties
  imageUrl = ''; 
  date = new Date().toLocaleDateString();

  constructor(public navCtrl: NavController, public navParams: NavParams,  
  private alertCtrl: AlertController, private imagesService: ImagesService) {}

  submitImage(form: NgForm) {
    this.imagesService.addImage(this.imageUrl, form.value.username, this.date, form.value.title);
    form.reset();
    this.imageUrl = '';
  }

  takePicture() {
    Camera.getPicture({
      encodingType: Camera.EncodingType.JPEG,
      correctOrientation: true
    })
      .then(
        imageData => {
          console.log('Took a shot!');
          this.imageUrl = imageData; 
        }
      )
      .catch(
        err => {
          this.showAlert('Camera not working. Bleh!');
        }
      ) 
  }

   showAlert(message: string) {
    const alert = this.alertCtrl.create({
      title: 'Oh my ..',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present(); 
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import native camera 
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // properties
  imageUrl = ''; 

  constructor(public navCtrl: NavController) {
    
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
          console.log(err);
        }
      ) 
  }

}

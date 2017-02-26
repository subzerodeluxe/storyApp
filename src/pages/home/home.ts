import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


// import native camera 
import { Camera } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // properties
  imageUrl = ''; 

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }


  takePicture() {
    Camera.getPicture({
      destinationType: Camera.DestinationType.DATA_URL,
      targetWidth: 1000,
      targetHeight: 1000
    })
      .then(
        imageData => {
          console.log('Took a shot!');
          this.imageUrl = "data:image/jpeg;base64," + imageData;
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

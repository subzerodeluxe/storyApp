import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  constructor(private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  loginUser(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Signing you in...'
    });
    //loading.present();
    const alert = this.alertCtrl.create({
          title: 'Failed to log you in!',
          message: "Try again Bob",
          buttons: ['Ok']
        });
    alert.present();
    /*this.authService.signin(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Failed to log you in!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });*/ 
  }
}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NgForm } from "@angular/forms";
import { LoadingController, AlertController } from "ionic-angular";

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  constructor(private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

   createAccount(form: NgForm) {
    const loading = this.loadingCtrl.create({
      content: 'Creating an account ...'
    });
      const alert = this.alertCtrl.create({
          title: 'Failed create an account',
          message: "Try again Bob",
          buttons: ['Ok']
        });
    alert.present();
    /*loading.present();
    this.authService.signup(form.value.email, form.value.password)
      .then(data => {
        loading.dismiss();
      })
      .catch(error => {
        loading.dismiss();
        const alert = this.alertCtrl.create({
          title: 'Signup failed!',
          message: error.message,
          buttons: ['Ok']
        });
        alert.present();
      });*/ 
  }
}

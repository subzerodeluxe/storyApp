import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ParallaxHeader } from '../components/parallax-header/parallax-header';

// import models and services
import { ImagesService } from '../services/images';

// import pages
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { ImagePage } from '../pages/image/image';
import { AddImagePage } from '../pages/add-image/add-image';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AddImagePage,
    ParallaxHeader
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignupPage,
    AddImagePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},
  ImagesService]
})
export class AppModule {}

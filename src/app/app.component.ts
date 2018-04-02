import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidFullScreen } from '@ionic-native/android-full-screen';
//import { SplashScreen } from '@ionic-native/splash-screen';
//import { MenuController } from 'ionic-angular';

import { HomePage } from '../pages/home/home';
import { VisualRecognitionPage } from '../pages/visualRecognition/visualRecognition';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  pages: Array<{ title: string, component: any }>;
  

  constructor(platform: Platform, statusBar: StatusBar, androidFullScreen: AndroidFullScreen) {
    if (platform.is('android')) {
      androidFullScreen.isImmersiveModeSupported()
        .then(() => androidFullScreen.immersiveMode())
        .catch((error: any) => console.log(error));
    } else {
      platform.ready().then(() => {
        if (statusBar) {
          console.log(statusBar);
          statusBar.hide();
        }
      });
    }
  }
}


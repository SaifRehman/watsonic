import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public url: string = "https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/prez.jpg";
  constructor(public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition) {
    this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.url).subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.log(error)
      });
  }
}
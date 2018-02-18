import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public url: string = "https://loremflickr.com/cache/resized/4473_37419767910_471a2c84e6_q_100_100_nofilter.jpg";
  constructor(public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition) {
    this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.url).subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.log(error);
        // console.log(error)
      });
  }
}

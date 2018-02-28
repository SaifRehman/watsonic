import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
import { watsonTranslation } from '../../watsonServices/watsonTranslation.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public show: any = "nothing"
  public randomImage: string = "https://loremflickr.com/200/200"
  public url: string = "http://lorempixel.com/100/100/";
  constructor(public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition, public WatsonTranslation: watsonTranslation) {
    this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.randomImage).subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.log(error)
      });
  }


}
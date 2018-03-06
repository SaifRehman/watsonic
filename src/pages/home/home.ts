import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
import { watsonTranslation } from '../../watsonServices/watsonTranslation.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public show:any="nothing";
  public appTitle:any="Watsonic";
  public watsonLogo:any="../../assets/imgs/brand.jpg";
  public watsonVideo:any="../../assets/videos/IBM Watson_ Ambient (1).mp4"
  public visualRecognition:any="../../assets/imgs/visual_recognition.svg"
  public randomImage:string = "https://loremflickr.com/200/200";
  public url: string = "http://lorempixel.com/100/100/";
  constructor(public navCtrl: NavController, public WatsonVisualRecognition:watsonVisualRecognition, public WatsonTranslation:watsonTranslation) {
  }

  doRefresh(refresher) {
    this.randomImage = "https://loremflickr.com/200/200"
    this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.randomImage).subscribe((data) => {
      console.log('data', data);
      refresher.complete();
      this.show = data['images'][0]['classifiers'][0]['classes'][0]['class']
      this.WatsonTranslation.translateToALanguage(this.show, 'en-ar').subscribe((data) => {
       this.show = data['translations'][0]['translation']
    },
    (error) => {
        console.log(error)
    })
  },
  (error) => {
      console.log(error)
      refresher.complete();
  });
  }
}
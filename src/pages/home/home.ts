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
  public videoPlaceholder:any="../../assets/imgs/static.png";
  public watsonVideoHD:any="../../assets/videos/IBM_Watson_Ambient_720.mp4";
  public watsonVideoMobile:any="../../assets/videos/ibm_watson_logo_inverse_small.mp4";
  public visualRecognition:any="../../assets/imgs/visual_recognition.svg";
  public randomImage:string = "https://loremflickr.com/200/200";
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

  ionViewDidLoad() {
    var videoFile = "";
    if (window.innerWidth <= 768) {
        videoFile = this.watsonVideoMobile;
        document.querySelector('source').setAttribute('src', videoFile);
    }
    else if (window.innerWidth > 768) {
        videoFile = this.watsonVideoHD;
        console.log(videoFile);
        document.querySelector('source').setAttribute('src', videoFile);
    }
  }
}
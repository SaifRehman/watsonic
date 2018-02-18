import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
import { watsonTranslation } from '../../watsonServices/watsonTranslation.service'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public url: string = "https://watson-developer-cloud.github.io/doc-tutorial-downloads/visual-recognition/prez.jpg";
  constructor(public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition, public WatsonTranslation:watsonTranslation) {
    this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.url).subscribe((data) => {
      console.log('data',data);
    },
      (error) => {
        console.log(error)
      });
  //   this.WatsonTranslation.translateToALanguage('hello','en-es').subscribe((data) =>{
  //     console.log(data);
  //   },
  // (error)=>{
  //   console.log(error)
  // })
  }
}
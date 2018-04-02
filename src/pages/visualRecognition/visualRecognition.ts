import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition/watsonVisualRecognition.service'
import {HomePage} from '../home/home'

@Component({
  selector: 'page-visualRecognition',
  templateUrl: 'visualRecognition.html'
})


export class VisualRecognitionPage {
  public visualRecognition:any="../../assets/imgs/visual_recognition.svg";
  constructor(public navCtr:NavController, public WatsonVisualRecognition: watsonVisualRecognition) {
  }

  ionViewDidLoad() {
    this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURLWithHighConfidenceOnly("https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350").subscribe((data) => {
      console.log('data', data);
  },
  (error) => {
      console.log(error)
  });
  }
  click() {

  }
  home(){
    this.navCtr.push(HomePage);
  }
}
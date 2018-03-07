import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition/watsonVisualRecognition.service'
import { watsonTranslation } from '../../watsonServices/watsonTranslation/watsonTranslation.service'
import { watsonConversation } from '../../watsonServices/watsonConversation/watsonConversation.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public show: any = ""
  public randomImage: string = "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/144966156-adoptable-cat-photo-tips-632x475.jpg"
  public url: string = "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/144966156-adoptable-cat-photo-tips-632x475.jpg";
  constructor(public WatsonConversation: watsonConversation,public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition, public WatsonTranslation: watsonTranslation) {

  }
  ionViewDidLoad() {
    this.WatsonConversation.getWorkspace().subscribe((data) => {
      console.log('data', data);
    },
      (error) => {
        console.log(error);
      });
  }
}
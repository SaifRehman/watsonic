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
  public show:any="nothing";
  public appTitle:any="Watsonic";
  public watsonLogo:any="../../assets/imgs/brand.png";
  public videoPlaceholder:any="../../assets/imgs/static.png";
  public watsonVideoHD:any="../../assets/videos/IBM_Watson_Ambient_720.mp4";
  public watsonVideoMobile:any="../../assets/videos/ibm_watson_logo_inverse_small.mp4";
  public visualRecognition:any="../../assets/imgs/visual_recognition.svg";
  public randomImage: string = "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/144966156-adoptable-cat-photo-tips-632x475.jpg"
  public url: string = "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/144966156-adoptable-cat-photo-tips-632x475.jpg";
  constructor(public WatsonConversation: watsonConversation,public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition, public WatsonTranslation: watsonTranslation) {
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

    this.WatsonConversation.listWorkspace().subscribe((data) => {
      console.log('data', data);
    },
    (error) => {
        console.log(error);
    });

    
  }
}
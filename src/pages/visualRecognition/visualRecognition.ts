import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition/watsonVisualRecognition.service'

@Component({
  selector: 'page-visualRecognition',
  templateUrl: 'visualRecognition.html'
})


export class VisualRecognitionPage {
  public visualRecognition:any="../../assets/imgs/visual_recognition.svg";
  constructor() {
  }

  ionViewDidLoad() {
  }
  click() {
    console.log('button clickedddd ')
    const options: CameraOptions = {
      quality: 70,
      destinationType: 1,
      sourceType: 0,
      targetWidth: 100,
      targetHeight: 100,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURLWithHighConfidenceOnly(imageData).subscribe((data) => {
        console.log('data', data);
        alert(data)
      },
        (error) => {
          alert(error)
          console.log(error)
        });

    }, (err) => {
    });

  }
}
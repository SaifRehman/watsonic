import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
import { watsonTranslation } from '../../watsonServices/watsonTranslation.service'
import { watsonToneAnalyzer } from '../../watsonServices/watsonToneAnalyzer.service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public url: string = "http://lorempixel.com/100/100/";
  constructor(public navCtrl: NavController, public WatsonVisualRecognition: watsonVisualRecognition,
     public WatsonTranslation: watsonTranslation, public WatsonToneAnalyzer:watsonToneAnalyzer) {
    // this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.url).subscribe((data) => {
    //   console.log('data', data);
    // },
    //   (error) => {
    //     console.log(error)
    //   });
    // this.WatsonTranslation.translateToALanguage('hello', 'en-es').subscribe((data) => {
    //   console.log(data);
    // },
    //   (error) => {
    //     console.log(error)
    //   })

    this.WatsonToneAnalyzer.analyzeToneOnGivenText('On August 24, shallow volcanic earthquakes began under the summit region. On September 14, after a steam plume was observed above the summit, Indonesia’s Center for Volcanology and Geological Hazard raised the eruption alert level from 1 (normal) to 2 (increased activity but no eruption imminent). On September 18, as the number of volcanic earthquakes became hundreds per day, the Center raised the alert level to 3 (eruption possible within 2 weeks), and then on September 22 to the highest level 4 (eruption possible within 24 hours). This level of earthquake activity at other volcanoes had led to deadly eruptions. More than 150,000 residents fled to one of the makeshift evacuation centers throughout the island, while an additional 30,000 fled to stay with friends or family.').subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.log(error)
      })
  }
}
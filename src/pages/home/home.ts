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

    this.WatsonToneAnalyzer.analyzeToneOnGivenTextWithDifferentLanguageResponse('وأوضح أباالخيل أنه تم مؤخرًا، تطبيق الوصف الوظيفي بحسب التصنيف المهني المعياري العربي في البوابة، إذ يتم تعبئة حقل الوصف الوظيفي بشكل آلي عند اختيار المهنة المطلوبة بحسب الوصف الوظيفي في التصنيف، بالإضافة إلى تطبيق آلية الأجر السائد في سوق العمل وفقا للمستوى التعليمي للمهن المطلوبة، ويتم منع الإعلان إذا كان الأجر المدخل أقل من الأجر السائد، ويرتفع الأجر السائد مع زيادة سنوات الخبرة المطلوبة في الإعلان، وفق معايير دقيقة لضبط مدخلات الإعلان عن فرص العمل التي ترغب المنشأة في شغلها بسعوديين وسعوديات، وللتأكد من جدية المنشآت المعلنة','en').subscribe((data) => {
      console.log(data);
    },
      (error) => {
        console.log(error)
      })
  }
}
import {  NgModule } from '@angular/core';
import { watsonAuthService } from './auth.service';
import { watsonVisualRecognition } from './watsonVisualRecognition/watsonVisualRecognition.service';
import { watsonTranslation } from './watsonTranslation/watsonTranslation.service';
import { watsonToneAnalyzer } from './watsonToneAnalyzer/watsonToneAnalyzer.service';
import { watsonConversation } from './watsonConversation/watsonConversation.service';

@NgModule({
  declarations: [
   
  ],
  imports: [
  
  ],
  entryComponents: [
   
  ],
  providers: [
    watsonAuthService,
    watsonVisualRecognition,
    watsonTranslation,
    watsonToneAnalyzer,
    watsonConversation,
  ]
})
export class WatsonModule {}

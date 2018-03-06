import {  NgModule } from '@angular/core';
import { watsonAuthService } from './auth.service';
import { watsonVisualRecognition } from './watsonVisualRecognition.service';
import { watsonTranslation } from './watsonTranslation.service';
import { watsonToneAnalyzer } from './watsonToneAnalyzer.service';
import { watsonConversation } from './watsonConversation.service';

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

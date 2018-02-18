import {  NgModule } from '@angular/core';
import { watsonAuthService } from './auth.service';
import { watsonVisualRecognition } from './watsonVisualRecognition.service';

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
  ]
})
export class WatsonModule {}

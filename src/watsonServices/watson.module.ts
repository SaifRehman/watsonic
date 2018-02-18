import {  NgModule } from '@angular/core';
import { watsonAuthService } from './auth.service';
import { watsonVisualRecognition } from './watsonVisualRecognition.service';
import { watsonTranslation } from './watsonTranslation.service';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

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
    HttpClientModule,
  ]
})
export class WatsonModule {}

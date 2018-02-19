### watsonic
Ionic app with all Watson services.

### Watson Services Completed for this framework
- [x] Watson Visual Recognition
- [x] Watson Language Translator
- [ ] Watson Conversation
- [ ] Watson Discovery
- [ ] Watson Natural Language Understanding
- [ ] Watson Speech to Text
- [ ] Watson Text to Speech
- [ ] Watson Natural Language Classifier
- [ ] Personality Insights
- [ ] Tone Analyzer

## Watson Visual Recognition Service 
1. getVisualRecognitonDataByOnlyURL :-  Classify the image given in the url

### Example

```TypeScript
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURL(this.url).subscribe((data) => {
    console.log('data', data);
},
(error) => {
    console.log(error)
});
```
2. getVisualRecognitonForFacesDataByOnlyURL :-  Classify the faces based on image given in URL

### Example

```TypeScript
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
this.WatsonVisualRecognition.getVisualRecognitonForFacesDataByOnlyURL(this.url).subscribe((data) => {
    console.log('data', data);
},
(error) => {
    console.log(error)
});
```

## Watson Language Translator
1. getVisualRecognitonDataByOnlyURL :-  Classify the image given in the url

### Example

```TypeScript
import { watsonTranslation } from '../../watsonServices/watsonTranslation.service'
this.WatsonTranslation.translateToALanguage('hello', 'en-es').subscribe((data) => {
    console.log(data);
},
(error) => {
    console.log(error)
})
```
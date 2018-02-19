# WATSON IONIC (WORK IN PROGRESS)
Ionic app with all Watson services.
![Watson](https://www.moodleworld.com/wp-content/uploads/2016/11/IBM-watson1.png)
## Install Ionic
```
> npm install -g ionic cordova
```
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

## Watson Language support 
| Language | Short Terms |
|----------|-------------|
|Afrikaans|af|
|Albanian|sq|
|Arabic|ar|
|Armenia|hy|
|Azerbaijani|az|
|Bashkir|ba|
|Basque|eu|
|Belarusian|be|
|Bengali|bn|
|Bosnian|bs|
|Bulgarian|bg|
|Central Khmer|km|
|Chinese|zh|
|Chuvash|cv|
|Czech|cs|
|Danish|da|
|Dutch|nl|
|English|en|
|Esperanto|eo|
|Estonian|et|
|Finnish|fi|
|French|fr|
|Georgian|ka|
|German|de|
|Greek|el|
|Gujarati|gu|
|Haitian|ht|
|Hebrew|he|
|Hindi|hi|
|Hungarian|hu|
|Icelandic|is|
|Indonesian|id|
|Italian|it|
|Japanese|ja|
|Kazakh|kk|
|Kirghiz|ky|
|Korean|ko|
|Kurdish|ku|
|Latvian|lv|
|Lithuanian|lt|
|Malayalam|ml|
|Mongolian|mn|
|Norwegian Bokmal|nb|
|Norwegian Nynorsk|nn|
|Panjabi|pa|
|Persian|fa|
|Polish|pl|
|Portuguese|pt|
|Pushto|ps|
|Romanian|ro|
|Russian|ru|
|Slovakian|sk|
|Somali|so|
|Spanish|es|
|Swedish|sv|
|Tamil|ta|
|Telugu|te|
|Traditional Chinese|zh-TW|
|Turkish|tr|
|Ukrainian|uk|
|Urdu|ur|
|Vietnamese|vi|
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

# Special Thanks to Walid Abou Ali for the guidance
- [Walid Abou Ali](https://www.linkedin.com/in/walid-abou-ali-45680a43/)
# WATSON IONIC (WORK IN PROGRESS)
![Watson](https://www.ibm.com/blogs/watson/wp-content/uploads/2017/04/B_card.png)

## Contributors

| [<img src="https://pbs.twimg.com/profile_images/969598365716635648/-E0SfuGA_400x400.jpg" width="100px;"/><br /><sub><b>SaifRehman</b></sub>](https://www.linkedin.com/in/saif-ur-rehman/)<br />[💻](https://github.com/SaifRehman/watsonic/commits?author=SaifRehman "Code") [📖](https://github.com/SaifRehman/watsonic/commits?author=SaifRehman "Documentation") [🤔](#ideas-keppel "Ideas, Planning, & Feedback") [⚠️](https://github.com/SaifRehman/watsonic/commits?author=SaifRehman "Tests") | [<img src="https://pbs.twimg.com/profile_images/964820643651956736/6gLfdbbR_400x400.jpg" width="100px;"/><br /><sub><b>AreejEssa</b></sub>](https://www.linkedin.com/in/areej-essa-b19336114/)<br />[💻](https://github.com/SaifRehman/watsonic/commits?author=AreejEssa "Code") [🤔](#ideas-mappum "Ideas, Planning, & Feedback") [⚠️](https://github.com/SaifRehman/watsonic/commits?author=AreejEssa "Tests") [🔌](#plugin-mappum "Plugin/utility libraries") | [<img src="https://avatars3.githubusercontent.com/u/6966801?s=460&v=4" width="100px;"/><br /><sub><b>HebaShimy</b></sub>](https://www.linkedin.com/in/hebaelshimy/)<br />[🎨](https://github.com/SaifRehman/watsonic/commits?author=HebaNAS "Code") [📖](https://github.com/SaifRehman/watsonic/commits?author=HebaNAS "Documentation") [🤔](#ideas-keppel "Ideas, Planning, & Feedback") [⚠️](https://github.com/SaifRehman/watsonic/commits?author=HebaNAS "Tests") |
| :---: | :---: | :---: |

Contributions of any kind welcome!

## Install Ionic
```
> npm install -g ionic cordova
```
## Run The Application
```
> git clone https://github.com/SaifRehman/watsonic.git
> ionic serve
```
### Watson Services Completed for this framework
- [x] Watson Visual Recognition
- [x] Watson Language Translator
- [x] Watson Tone Analyzer
- [ ] Watson Conversation
- [ ] Watson Discovery
- [ ] Watson Natural Language Understanding
- [ ] Watson Speech to Text
- [ ] Watson Text to Speech
- [ ] Watson Natural Language Classifier
- [ ] Watson Personality Insights
- [ ] Watson Knowledge Studio

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
3. getVisualRecognitonDataByOnlyURLWithHighConfidenceOnly :- Get only confidence result 

### Example

```TypeScript
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
this.WatsonVisualRecognition.getVisualRecognitonDataByOnlyURLWithHighConfidenceOnly(this.url).subscribe((data) => {
    console.log('data', data);
},
(error) => {
    console.log(error)
});
```

4. getListOfCustomCreatedClassifiers :- Get list of created classifiers

### Example

```TypeScript
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
this.WatsonVisualRecognition.getListOfCustomCreatedClassifiers().subscribe((data) => {
    console.log('data', data);
},
(error) => {
    console.log(error)
});
```

5. getClassifiersDetails :- Get detail of a classifier created

### Example

```TypeScript
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
this.WatsonVisualRecognition.getClassifiersDetails(classifier).subscribe((data) => {
    console.log('data', data);
},
(error) => {
    console.log(error)
});
```

6. deleteClassifiers :- Delete a created classifer 

### Example

```TypeScript
import { watsonVisualRecognition } from '../../watsonServices/watsonVisualRecognition.service'
this.WatsonVisualRecognition.deleteClassifiers(classifier).subscribe((data) => {
    console.log('data', data);
},
(error) => {
    console.log(error)
});
```

## Watson Language Translator

### Watson Language support 
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

1. WatsonTranslation :-  Tranlate given text to a language specified

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

## Watson Tone Analyzer Service 
1. analyzeToneOnGivenText :-  Analyze tone by given text

### Example

```TypeScript
import { watsonToneAnalyzer } from '../../watsonServices/watsonToneAnalyzer.service'
this.WatsonToneAnalyzer.analyzeToneOnGivenText(text).subscribe((data) => {
      console.log(data);
},
(error) => {
    console.log(error)
})
```


### Special Thanks to Walid Abou Ali for the Guidance
- [Walid Abou Ali](https://www.linkedin.com/in/walid-abou-ali-45680a43/)
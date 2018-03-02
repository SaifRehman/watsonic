# WATSON IONIC (WORK IN PROGRESS)
Ionic app with all Watson services.
![Watson](https://www.moodleworld.com/wp-content/uploads/2016/11/IBM-watson1.png)


## Contributors

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<!-- | [<img src="https://pbs.twimg.com/profile_images/969598365716635648/-E0SfuGA_400x400.jpg" width="100px;"/><br /><sub><b>Saif Rehman</b></sub>](https://www.linkedin.com/in/saif-ur-rehman/)<br />[💻](https://github.com/SaifRehman/watsonic/commits?author=SaifRehman "Code") [📖](https://github.com/SaifRehman/watsonic/commits?author=SaifRehman "Documentation") [🤔](#ideas-keppel "Ideas, Planning, & Feedback") [⚠️](https://github.com/SaifRehman/watsonic/commits?author=SaifRehman "Tests") | [<img src="https://pbs.twimg.com/profile_images/964820643651956736/6gLfdbbR_400x400.jpg" width="100px;"/><br /><sub><b>AreejEssa</b></sub>](https://www.linkedin.com/in/areej-essa-b19336114/)<br />[💻](https://github.com/SaifRehman/watsonic/commits?author=AreejEssa "Code") [🤔](#ideas-mappum "Ideas, Planning, & Feedback") [⚠️](https://github.com/SaifRehman/watsonic/commits?author=AreejEssa "Tests") [🔌](#plugin-mappum "Plugin/utility libraries") | [<img src="https://avatars3.githubusercontent.com/u/6966801?s=460&v=4" width="100px;"/><br /><sub><b>Heba El-Shimy
</b></sub>](https://www.linkedin.com/in/hebaelshimy/)<br />[🎨](#design-jolesbi "Design") |
| :---: | :---: | :---:  -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

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
- [ ] Watson Language Translator
- [ ] Watson Tone Analyzer
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
this.WatsonToneAnalyzer.analyzeToneOnGivenText('On August 24, shallow volcanic earthquakes began under the summit region. On September 14, after a steam plume was observed above the summit, Indonesia’s Center for Volcanology and Geological Hazard raised the eruption alert level from 1 (normal) to 2 (increased activity but no eruption imminent). On September 18, as the number of volcanic earthquakes became hundreds per day, the Center raised the alert level to 3 (eruption possible within 2 weeks), and then on September 22 to the highest level 4 (eruption possible within 24 hours). This level of earthquake activity at other volcanoes had led to deadly eruptions. More than 150,000 residents fled to one of the makeshift evacuation centers throughout the island, while an additional 30,000 fled to stay with friends or family.').subscribe((data) => {
      console.log(data);
},
(error) => {
    console.log(error)
})
```


### Special Thanks to Walid Abou Ali for the Guidance
- [Walid Abou Ali](https://www.linkedin.com/in/walid-abou-ali-45680a43/)
export class WatsonConfig {
    public static authURL = {
        wantsonVisualRecognition:{
            api_key: "5dd5250c79742263cd33e095cc938d1a0952d690",
            version_date: "2016-05-20",
            threshold: 0,
            baseLink: "https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key="
        },
        watsonTranslation:{
            authUsername: "55b4673e-be7d-4d06-9c50-0fd7867b40b2",
            authPassword: "QRGgAh6DY22n",
            baseLink: "https://gateway.watsonplatform.net/language-translator/api/v2/translate"
        },
        toneAnalyzer:{
            authUsername: "93eccd0e-13d9-4608-a6b0-adb1ffe368ab",
            authPassword: "s1TbeXdgMaDB",
            baseLink: "https://gateway.watsonplatform.net/tone-analyzer/api"
        }
    }
    public  constructor() {

    }
}
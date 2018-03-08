var watson = require('watson-developer-cloud');
var fs = require('fs');

var visual_recognition = watson.visual_recognition({
  api_key: '5dd5250c79742263cd33e095cc938d1a0952d690',
  version: 'v3',
  version_date: '2016-05-20'
});

var params = {
  name: 'dogs',
  beagle_positive_examples: fs.createReadStream('./src/watsonServices/beagle.zip'),
  goldenretriever_positive_examples: fs.createReadStream('./src/watsonServices/golden-retriever.zip'),
  husky_positive_examples: fs.createReadStream('./src/watsonServices/husky.zip'),
  negative_examples: fs.createReadStream('./src/watsonServices/cats.zip')
};

visual_recognition.createClassifier(params,
  function(err, response) {
    if (err)
      console.log(err);
    else
      console.log(JSON.stringify(response, null, 2))
});
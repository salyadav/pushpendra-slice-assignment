const WordCount = require('./../models/wordCount.model');

// get word count
exports.word_get = (req,res)=>{
    let word = req.params.word;
    WordCount.findOne({word:word},'count').exec((error,result)=>{
        let responseJson = {};
        if(error || result === null){
            responseJson.success = false;
            responseJson.error = error;
        } else {
            responseJson.success = true;
            responseJson.result = {};
            responseJson.result.count = result.count;
        }
        res.json(responseJson);
    });
};
// put word
exports.word_put = (req,res)=>{
    let word = req.params.word;
    const filter = { word: word };
    WordCount.findOneAndUpdate(filter, {$inc : {'count' : 1}},{new : true , upsert : true}).exec((error,result)=>{
        let responseJson = {};
        if(error || result === null){
            responseJson.success = false;
            responseJson.error = error;
        } else {
            responseJson.success = true;
            responseJson.result = {};
            responseJson.result.word = result.word;
            responseJson.result.count = result.count;
        }
        res.json(responseJson);
    });
};
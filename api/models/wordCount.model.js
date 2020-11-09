const mongoose = require('mongoose');

mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

// Define Schema
const WordCount  = new Schema({
    word : {type : String , required : true},
    count : { type : Number , required: true, default : 0}
});
// export module
module.exports = mongoose.model('WordCount',WordCount);
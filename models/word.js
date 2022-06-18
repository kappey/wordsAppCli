const mongoose = require('mongoose');

const wordSchema = new mongoose.Schema({
    word_id:String,
    word:String,
    page_num:Number,
});

exports.WordModel =  mongoose.model("words" , wordSchema);
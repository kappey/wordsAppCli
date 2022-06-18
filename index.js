const dotenv = require ('dotenv').config();
const db = require('./db/mongoConnection');
const { WordModel } = require('./models/word');


// ADD A NEW WORD:

const addWord = async (word) => {
    try {
        await WordModel.create(word);
        console.log('New word added');
    }
    catch (err){
        console.log(`Error: ${err}`)
    }
}


// FIND A WORD:

const pagesWithWord = async (word) => {
    let findWord = new RegExp(word, 'i');
    let pageNum = [];
    try {
        let data = await WordModel.find({word: findWord}, {__v:0, _id:0});
        data.forEach((item) => {
            if (!pageNum.includes(item.page_num)){
                pageNum.push(item.page_num);
            }
        });
        console.log(pageNum);
    }
    catch (err){
        console.log(`Error: ${err}`)
    }
}

// FIND MULTIPLE WORDS:

const pagesWithWords = async (words) => {
    let findWord = new RegExp(words, 'i');
    let pageNumMany = [];

    try {
        let data = await WordModel.find({word: findWord}, {__v:0, _id:0});
        data.forEach((item) => {
            if (!pageNumMany.includes(item.page_num)){
                pageNumMany.push(item.page_num);
            }
        });
        console.log(pageNumMany);
        
    }
    catch (err){
        console.log(`Error: ${err}`)
    }
}


module.exports = {
    addWord,
    pagesWithWord,
    pagesWithWords
}
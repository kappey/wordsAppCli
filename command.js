const { program } = require('commander');
const {addWord, pagesWithWord, pagesWithWords} = require('./index');

program
    .version('1.0.0')
    .description('Registering Words');

program
    .command('add <word> <page_num>')
    .alias('a')
    .description('Add a new word')
    .action((word,page_num) => {
        addWord({word, page_num});
    })

    program
    .command('find <word>')
    .alias('f')
    .description('Find a word')
    .action((word) => {
        pagesWithWord(word);
    })

    program
    .command('find-many <words>')
    .alias('fm')
    .description('Find words')
    .action((words) => {
        pagesWithWords({words});
    })

program.parse();



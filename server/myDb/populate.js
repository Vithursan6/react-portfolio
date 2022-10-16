

const mongoose = require('mongoose');
const config = require('../config/dev');
const myDb = require('./myDb');

    mongoose.connect(config.DB_URI,  {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
        useCreateIndex: true
    }, async () => {
        console.log('Initializing DB Population....');
        await myDb.populate();
        await mongoose.connection.close();
        console.log('DB has been populated.');
    })
const mongoose = require('mongoose');

const { database } = require('./keys');

mongoose.connect(database.URI,{
    useNewUrlParser: true // neededs for internal works
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.error('DB error:', err));

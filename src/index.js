const express = require('express');
const config = require('./server/config');

require('./database'); // execute connection to DB
const app = config(express());

app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});

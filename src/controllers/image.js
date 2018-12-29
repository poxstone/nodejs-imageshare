const path = require('path');
const fs = require('fs-extra');
const { randomNumber } = require('../helpers/libs');
const ctrl = {};

ctrl.index = (req, res) => {
    res.send('Index page');
};

// add "async" for asyncronus functions with await
ctrl.create = async (req, res) => {
    const imgUrl = randomNumber();
    const imageTempPath = req.file.path;
    const ext = path.extname(req.file.originalname).toLowerCase();
    const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

    if (ext.match(/(png)|(jpe?g)|(gif)/)) {
        // move image
        await fs.rename(imageTempPath, targetPath);
    }
    res.send('Works!');
};

ctrl.like = (req, res) => {
    res.send('like image');
};

ctrl.comment = (req, res) => {
    res.send('comment image');
};

ctrl.remove = (req, res) => {
    res.send('delete image');
};

module.exports = ctrl;
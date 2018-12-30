const path = require('path');
const fs = require('fs-extra');
const { randomNumber } = require('../helpers/libs');
const ctrl = {};

// nodejs default search index in folders (mmodels/index)
const { Image } = require('../models/');

ctrl.index = (req, res) => {
    res.send('Index page');
};

// add "async" for asyncronus functions with await
ctrl.create = (req, res) => {
    const saveImage = async () => {
        const imgUrl = randomNumber();
        // validate if id exist
        const images = await Image.find({ filename: imgUrl });
        if (images.length > 0) {
            saveImage();
        } else {
            const imageTempPath = req.file.path;
            const ext = path.extname(req.file.originalname).toLowerCase();
            const targetPath = path.resolve(`src/public/upload/${imgUrl}${ext}`);

            if (ext.match(/(png)|(jpe?g)|(gif)/)) {
                // move image
                await fs.rename(imageTempPath, targetPath);
                const newImg = new Image({
                    title: req.body.title,
                    filename: imgUrl + ext,
                    description: req.body.description
                })
                const imageSave = await newImg.save();
                //res.redirect('/images');
                res.send('Works!');
            } else {
                // delete image
                await fs.unlink(imageTempPath);
                res.status(500).json({ error: 'format image invalid' });
            }
        }
    };

    saveImage();

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
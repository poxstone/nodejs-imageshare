const ctrl = {};

ctrl.index = (req, res) => {
    res.send('Index page');
};

ctrl.create = (req, res) => {
    console.log('file upload:', req.file);
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
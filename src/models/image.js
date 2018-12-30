const mongoose = require('mongoose');
const path = require('path');
const { Schema } = mongoose;

const ImageSchema = new Schema({
  title: {type: String},
  description: {type: String},
  filename: {type: String},
  views: {type: Number, default: 0},
  timestamp: {type: Date, default: Date.now}
});

// Return new virtual var, name without extension name
ImageSchema.virtual('uniqueId')
  .get(() => this.filename.replace(path.extname(this.filename), ''));

// set colletion name 'image' and return collection Schema
module.exports = mongoose.model('image', ImageSchema);

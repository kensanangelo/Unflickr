var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CommentSchema = new Schema({
	imageID: { type: String },
	comment: { type: String },
	name: { type: String },
	email: { type: String },
	timestamp: { type: Date, 'default': Date.now }
});

module.exports = mongoose.model('Comment', CommentSchema);
var Models = require('../models'),
	async = require('async');

module.exports = function(viewModel, callback) {
	
	//Sorts by date and finds the most recent 5 comments
	Models.Comment.find()
	.sort('-timestamp')
  	.limit(5)
  	.exec(function (err, comments) {
		if (err) { throw err; }
		if (comments) {
			//Assigns the 5 comments to the view model
			viewModel.sidebar.comments = comments;
				
			//Pulls the image info for each comment and puts it in the viewModel
			async.parallel([
				function(next) {
					Models.Image.findOne({ filename: { $regex: comments[0].imageID } },
						function (err, image) {
							viewModel.sidebar.comments[0].image=image;
							next(null);
					});
				},
				function(next) {
					Models.Image.findOne({ filename: { $regex: comments[1].imageID } },
						function (err, image) {
							viewModel.sidebar.comments[1].image=image;
							next(null);
					});
				},
				function(next) {
					Models.Image.findOne({ filename: { $regex: comments[2].imageID } },
						function (err, image) {
							viewModel.sidebar.comments[2].image=image;
							next(null);
					});
				},
				function(next) {
					Models.Image.findOne({ filename: { $regex: comments[3].imageID } },
						function (err, image) {
							viewModel.sidebar.comments[3].image=image;
							next(null);
					});
				},
				function(next) {
					Models.Image.findOne({ filename: { $regex: comments[4].imageID } },
						function (err, image) {
							viewModel.sidebar.comments[4].image=image;
							next(null);
					});
				}
			], function(err){
				callback(viewModel);
			});
		}
	});
};
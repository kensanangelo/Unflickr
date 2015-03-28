//takes the browser's request and lets us send back a page or other information
var imageModel = require('../models').Image,
	sidebar = require('../helpers/sidebar');

module.exports = {
	index: function(req, res) {
		var viewModel = {
			images: {},
			sidebar: {},
			userName: req.user ? req.user.username : ''
		};

		imageModel.find(function(err, images) {
			viewModel.images = images;
			
			//Adds sidebar data and renders
			sidebar(viewModel, function(viewModel) {
				res.render('index',viewModel);
			});
		});
	//	res.render('index',viewModel);
	}
};
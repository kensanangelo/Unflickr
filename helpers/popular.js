var Models = require('../models');

module.exports = function(viewModel, callback) {
	//finds out which 3 photos have the most likes
	Models.Image.find()
  	.sort('-likes')//finds the one with the most likes
  	.limit(3)
  	.exec(function (err, populars) {
		if (err) { throw err; }
		if (populars) {
			viewModel.sidebar.popular = populars;
			//then we send our modified viewModel back to the controller after our functions are complete
			callback(viewModel);
		}
	});

};
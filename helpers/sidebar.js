var stats = require('../helpers/stats'),
	popular = require('../helpers/popular'),
	recentComments = require('../helpers/comments');

module.exports = function(viewModel, callback) {

	//Gets all of the information for the sidebar from the other helpers and sends it back up to the controllers
	stats(viewModel, function(viewModel) {
		popular(viewModel, function(viewModel) {
			recentComments(viewModel, function(viewModel) {
				callback(viewModel);
			});
		});
	});

};
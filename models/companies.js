let mongoose = require('mongoose');

let companySchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true
	},
	details: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model('Companies', companySchema);
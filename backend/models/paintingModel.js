const mongoose = require('mongoose')

const paintingSchema = mongoose.Schema({
	category: {
		type: String,
		required: true,
	},
	path: {		
		type: String,
		required: true,
		unique: true,
	}
}, {
	timestamps: true,
})

module.exports = mongoose.model('Painting', paintingSchema)
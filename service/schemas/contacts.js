const { mongoose, Schema } = require('mongoose')

const contactSchema = new Schema(
	{
		name: {
			type: String,
			minlength: 2,
			required: [true, 'name is required'],
		},
		email: {
			type: String,
			minlength: 6,
			required: [true, 'email is required'],
			unique: true,
		},
		phone: {
			type: String,
			required: [true, 'phone is required'],
			unique: true,
		},
	},
	{ versionKey: false, timestamps: true }
)

const Contacts = mongoose.model('contact', contactSchema)

module.exports = Contacts

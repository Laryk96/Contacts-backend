const Contacts = require('./schemas/contacts')

const getAll = async () => {
	return Contacts.find()
}

const getById = id => {
	return Contacts.findOne({ _id: id })
}

const createContact = ({ body }) => {
	return Contacts.create({ body })
}

const updateContact = (id, fields) => {
	return Contacts.findByIdAndUpdate({ _id: id }, fields, { new: true })
}

const removeContact = id => {
	return Contacts.findByIdAndRemove({ _id: id })
}

module.exports = {
	getAll,
	getById,
	createContact,
	updateContact,
	removeContact,
}

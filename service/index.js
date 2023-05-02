const {
	find,
	findOne,
	create,
	findByIdAndUpdate,
	findByIdAndRemove,
} = require('./schemas/contacts')

const getAll = async () => {
	return find()
}

const getById = id => {
	return findOne({ _id: id })
}

const createContact = ({ body }) => {
	return create({ body })
}

const updateContact = (id, fields) => {
	return findByIdAndUpdate({ _id: id }, fields, { new: true })
}

const removeContact = id => {
	return findByIdAndRemove({ _id: id })
}

module.exports = {
	getAll,
	getById,
	createContact,
	updateContact,
	removeContact,
}

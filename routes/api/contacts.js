const express = require('express')
const {
	getAllContacts,
	getContactById,
	addNewContact,
	removeContactById,
	updateContactById,
} = require('../../controllers/contacts')
// const { validateBody } = require('../../middlewapres')
// const { addContact, updateContact } = require('../../schemas')

const router = express.Router()

router.get('/', getAllContacts)

router.get('/:contactId', getContactById)

router.post('/', addNewContact)
// validateBody(addContact)
router.delete('/:contactId', removeContactById)

router.put('/:contactId', updateContactById)
// validateBody(updateContact)
module.exports = router

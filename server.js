const mongoose = require('mongoose')
const app = require('./app')

mongoose
	.connect(process.env.DB_HOST)
	.then(() => {
		app.listen(1996, () => {
			console.log('Server running')
		})
	})
	.catch(err => {
		console.log(err)
		process.exit(1)
	})

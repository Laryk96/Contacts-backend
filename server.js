const mongoose = require('mongoose')
const app = require('./app')

mongoose
	.connect(process.env.DB_HOST)
	.then(() => {
		app.listen(9999, () => {
			console.log('Server running. Use our API on port: 9999')
		})
	})
	.catch(err => {
		console.log(err)
		process.exit(1)
	})

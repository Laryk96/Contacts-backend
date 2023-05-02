const mongoose = require('mongoose')
const app = require('./app')
// mongoose.Promise = global.Promise
const { PORT, DB_HOST } = process.env

// mongoose
// 	.connect(DB_HOST)
// 	.then(() => {
// 		app.listen(PORT | 3000, () => {
// 			console.log('Server running')
// 		})
// 	})
// 	.catch(err => {
// 		console.log(err)
// 		process.exit(1)
// 	})

const connection = mongoose.connect(DB_HOST, {
	// promiseLibrary: global.Promise,
	// useCreateIndex: true,
	// useUnifiedTopology: true,
	// useFindAndModify: false,
})

connection
	.then(() => {
		app.listen(PORT | 3000, function () {
			console.log(`Server running. Use our API on port: ${PORT}`)
		})
	})
	.catch(err =>
		console.log(`Server not running. Error message: ${err.message}`)
	)

//libs
var express = require('express')

//MAIN
var app = express()

app.configure(function() {
	app.use(express.methodOverride())
	app.use(express.bodyParser())
	app.use('/app', express.static('app'))
	app.use(express.errorHandler({
		dumpExceptions: true,
		showStack: true,
	}))
	app.use(app.router)
})

app.get(
	'/',
	function(req,res) {
		res.redirect('/app')
	}
)

app.listen(8080)
console.log("MagicEx server online and listening on port 8080")

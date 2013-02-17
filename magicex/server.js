//libs
var express = require('express')

//MAIN
var app = express()

app.configure(function() {
	app.use(express.methodOverride())
	app.use(express.bodyParser())
	app.use(express.static(__dirname))
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

var cards = [
	{id: 0, name: "Alpha", set: "Red" },
	{id: 1, name: "Beta", set: "Green" },
	{id: 2, name: "Gamma", set: "Blue" },
	{id: 3, name: "Delta", set: "Red" },
	{id: 4, name: "Epsilon", set: "Green" },
	{id: 5, name: "Zeta", set: "Red" },
]

function getCardByID(id) {
	for (var i = 0; i<cards.length; i++) {
		var card = cards[i]
		if (card.id == id) return card
	}
}

app.get(
	'/cards',
	function(req, res) {
		console.log("Getting all cards!")
		res.writeHead(200, {'content-type': 'application/json'})
		res.write( JSON.stringify({cards: cards}) )
		res.end()
	}
)
app.get(
	'/cards/:id',
	function(req, res) {
		console.log("Getting card for id " + req.params.id)
		var card = getCardByID(req.params.id)
		res.writeHead(200, {'content-type': 'application/json'})
		res.write( JSON.stringify({card: card}) )
		res.end()
	}
)

var users = [
	{id: 0, name: "tboonpickles", email: "tboonpickles@gmail.com" },
	{id: 1, name: "bobbyg", email: "bobbyg@hotmail.com" },
	{id: 2, name: "jethro", email: "jethro@aol.com" },
	{id: 3, name: "thnicev", email: "thnicev@yahoo.com" },
	{id: 4, name: "gradao", email: "gradao@verizon.net" },
]
function getUserByID(id) {
	for (var i = 0; i<users.length; i++) {
		var user = users[i]
		if (user.id == id) return user
	}
}
app.get(
	'/users',
	function(req, res) {
		console.log("Getting all users!")
		res.writeHead(200, {'content-type': 'application/json'})
		res.write( JSON.stringify({users: users}) )
		res.end()
	}
)
app.get(
	'/users/:id',
	function(req, res) {
		console.log("Getting user for id " + req.params.id)
		var user = getUserByID(req.params.id)
		res.writeHead(200, {'content-type': 'application/json'})
		res.write( JSON.stringify({user: user}) )
		res.end()
	}
)

var orders = [
	{id: 0, type: 'b', user_id: 0, card_id: 0, timestamp: 1000, amount: 2.20},
	{id: 1, type: 's', user_id: 0, card_id: 1, timestamp: 1000, amount: 3.10},
	{id: 2, type: 'b', user_id: 1, card_id: 3, timestamp: 1000, amount: 2.30},
	{id: 3, type: 's', user_id: 1, card_id: 5, timestamp: 1000, amount: 4.40},
	{id: 4, type: 'b', user_id: 2, card_id: 2, timestamp: 1000, amount: 2.50},
	{id: 5, type: 's', user_id: 2, card_id: 3, timestamp: 1000, amount: 1.60},
	{id: 6, type: 'b', user_id: 3, card_id: 5, timestamp: 1000, amount: 2.70},
	{id: 7, type: 's', user_id: 4, card_id: 4, timestamp: 1000, amount: 3.80},
	{id: 8, type: 'b', user_id: 4, card_id: 1, timestamp: 1000, amount: 4.90},
	{id: 9, type: 's', user_id: 4, card_id: 2, timestamp: 1000, amount: 5.00},
]

function getOrderByID(id) {
	for (var i = 0; i<orders.length; i++) {
		var order = orders[i]
		if (order.id == id) return order
	}
}

app.get(
	'/orders',
	function(req, res) {
		console.log("Getting all orders!")
		res.writeHead(200, {'content-type': 'application/json'})
		res.write( JSON.stringify({orders: orders}) )
		res.end()
	}
)
app.get(
	'/orders/:id',
	function(req, res) {
		console.log("Getting order for id " + req.params.id)
		var order = getOrderByID(req.params.id)
		res.writeHead(200, {'content-type': 'application/json'})
		res.write( JSON.stringify({order: order}) )
		res.end()
	}
)

app.listen(8080)
console.log("MagicEx server online and listening on port 8080")

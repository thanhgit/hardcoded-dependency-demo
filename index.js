const controller = require('./authController/controller')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

function User(userID, email, password, role) {
	this.userID   = userID;
	this.email    = email;
	this.password = password;
	this.role     = role;
}

app.use(bodyParser.json())

app.get('/', (req, res) => {
	
	res.status(200).json({ message: "Hello world" })
})

app.post('/register',(req, res) => {
	var user = new User(req.body.userID,req.body.email,req.body.password,req.body.role);
	res.status(200).json({ email: user.email })
})

app.post('/login',controller.login)
app.post("/checktoken",controller.checkToken)

app.listen(port)



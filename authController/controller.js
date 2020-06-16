const service = require('../authService/service')

exports.login = (req, res, next) => {
	var username = req.body.username
	var password = req.body.password
	token = service.login(username, password)
	res.status(200).json({ token: token })
}

exports.checkToken = (req, res, next) => {
	var token = req.body.token
	if(service.checkToken(token)){
		res.status(200).json({ status: "True" })
	} else {
		res.status(200).json( { status: "Fale"} )
	}
}

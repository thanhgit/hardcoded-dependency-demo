const assert = require('assert')

const service = require('../authService/service')

describe('login test', () => {
	it('login success', () => {
		const username = "admin"
		const password = "admin"
		token = service.login(username, password)

		const notExpectedToken = ''
		assert.notEqual(token, notExpectedToken)
	})
	it('login fail', () => {
		const username = "mysql"
		const password = "mongodb"
		token = service.login(username, password)

		const expectedToken = ''
		assert.equal(token, expectedToken)
	})
})

describe('get token test', () => {
	it('get token success', () => {
		const token = '12345'
		const status = service.checkToken(token)
		
		const statusExpected = true
		assert.equal(status, statusExpected)
	})
	it('get token fail', () => {
		const token = '3456'
		const status = service.checkToken(token)
		
		const statusExpected = true
		assert.notEqual(status, statusExpected)
	})
})

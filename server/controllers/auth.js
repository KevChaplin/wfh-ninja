const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const register = asyncWrapper(async (req, res) => {
    const { name, password } = req.body
    if (!name || !password) {
        throw new BadRequestError('Please provide name and password')
    }
        const user = await User.create(req.body)
        res.status(StatusCodes.CREATED).json({ user })
})

const login = async (req, res) => {
    res.send('login user')
}

module.exports = {
    register,
    login
}
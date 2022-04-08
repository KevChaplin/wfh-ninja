const bcrypt = require('bcryptjs')

const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { StatusCodes, TOO_MANY_REQUESTS } = require('http-status-codes')
const { BadRequestError } = require('../errors')

const register = asyncWrapper(async (req, res) => {

    const user = await User.create({ ...req.body })

    res.status(StatusCodes.CREATED).json({ user })
})

const login = async (req, res) => {
    res.send('login user')
}

module.exports = {
    register,
    login
}


    // const { name, password } = req.body
    // if (!name || !password) {
    //     throw new BadRequestError('Please provide name and password')
    // }
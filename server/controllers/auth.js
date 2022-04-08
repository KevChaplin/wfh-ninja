const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { StatusCodes } = require('http-status-codes')
const { BadRequestError, UnauthenticatedError } = require('../errors')

const register = asyncWrapper(async (req, res) => {
    const user = await User.create({ ...req.body })
    const token = user.createJWT()
    res
        .status(StatusCodes.CREATED)
        .json({ user:{ name: user.name }, token })
})

const login =  asyncWrapper(async (req, res) => {
    const { name, password } = req.body

    if ( !name || !password ) {
        throw new BadRequestError('Please provide name and password')
    }

    const user = await User.findOne({ name })
    if(!user) {
        throw new UnauthenticatedError('Invalid credentials')
    }
    const isPasswordCorrect = await user.comparePassword(password)
    if(!isPasswordCorrect) {
        throw new UnauthenticatedError('Invalid credentials')
    }

    const token = user.createJWT()
    res
        .status(StatusCodes.OK)
        .json({user: {name: user.name}, token})
})

module.exports = {
    register,
    login
}
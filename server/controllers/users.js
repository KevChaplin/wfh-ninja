const { StatusCodes } = require('http-status-codes')
const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { NotFoundError } = require('../errors')

// Get all users (for testing - not needed in final)
const getAllUser = asyncWrapper(async (req, res, next) => {
        const user = await User.find({})
        if(!user) {
            throw new NotFoundError('No users in Database', StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({ user })
})

// Get user info
const getUser = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findById(userId)
        if(!user) {
            throw new NotFoundError(`No user with id ${userId}`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({ user })
})

// Update user goal
const updateGoal = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, { $set: { goals: req.body } }, { new: true, runValidators: true })
        if(!user) {
            throw new NotFoundError(`No user with id ${userId}`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({ user })
})

// Update user logs
const updateLogs = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, { $set: { logs: req.body } }, { new: true, runValidators: true })
        if(!user) {
            throw new NotFoundError(`No user with id ${userId}`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({ user })
})

// Delete user
const deleteUser = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        if(!user) {
            throw new NotFoundError(`No user with id ${userId}`, StatusCodes.NOT_FOUND)
        }
        res.status(StatusCodes.OK).json({ msg: 'User successfully deleted' })
})

module.exports = {
    getAllUser,
    getUser,
    updateGoal,
    updateLogs,
    deleteUser
}

const User = require('../models/User')
const asyncWrapper = require('../middleware/async')
const { createCustomError } = require('../errors/custom-error')

// Create new user -- SWITHCHED TO AUTH ROUTE
// const createUser = asyncWrapper(async (req, res) => {
//         const user = await User.create(req.body)
//         res.status(201).json({ user })
// })

// Get all users (for testing - not needed in final)
const getAllUser = asyncWrapper(async (req, res, next) => {
        const user = await User.find({})
        if(!user) {
            return next(createCustomError('No users in Database', 404))
        }
        res.status(200).json({ user })
})

// Get user info
const getUser = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findById(userId)
        if(!user) {
            return next(createCustomError(`No user with id ${userId}`, 404))
        }
        res.status(200).json({ user })
})

// Update user goal
const updateGoal = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, { $set: { goals: req.body } }, { new: true, runValidators: true })
        if(!user) {
            return next(createCustomError(`No user with id ${userId}`, 404))
        }
        res.status(200).json({ user })
})

// Update user logs
const updateLogs = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, { $set: { logs: req.body } }, { new: true, runValidators: true })
        if(!user) {
            return next(createCustomError(`No user with id ${userId}`, 404))
        }
        res.status(200).json({ user })
})

// Delete user
const deleteUser = asyncWrapper(async (req, res, next) => {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        if(!user) {
            return next(createCustomError(`No user with id ${userId}`, 404))
        }
        res.status(200).json({ user })
})

module.exports = {
    getAllUser,
    getUser,
    updateGoal,
    updateLogs,
    deleteUser
}

const User = require('../models/User')

// Create new user
const createUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        res.status(201).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Get all users (for testing - not needed in final)
const getAllUser = async (req, res) => {
    try {
        const user = await User.find({})
        if(!user) {
            return res.status(404).json({msg: 'No users in Database'})
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Get user info
const getUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findById(userId)
        if(!user) {
            return res.status(404).json({msg: `No user with id ${userId}`})
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Update user goal
const updateGoal = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, { $set: { goals: req.body } }, { new: true, runValidators: true })
        if(!user) {
            return res.status(404).json({msg: `No user with id ${userId}`})
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Update user logs
const updateLogs = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndUpdate(userId, { $set: { logs: req.body } }, { new: true, runValidators: true })
        if(!user) {
            return res.status(404).json({msg: `No user with id ${userId}`})
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

// Delete user
const deleteUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await User.findByIdAndDelete(userId)
        if(!user) {
            return res.status(404).json({msg: `No user with id ${userId}`})
        }
        res.status(200).json({ user })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports = {
    createUser,
    getAllUser,
    getUser,
    updateGoal,
    updateLogs,
    deleteUser
}

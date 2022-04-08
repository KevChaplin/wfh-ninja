const express = require('express')
const router = express.Router()

const { 
    getAllUser,
    getUser,
    updateGoal,
    updateLogs,
    updateUser,
    deleteUser
} = require('../controllers/users')

router.route('/').get(getAllUser)
router.route('/:id').get(getUser).delete(deleteUser)
router.route('/:id/goals').patch(updateGoal)
router.route('/:id/logs').patch(updateLogs)

module.exports = router
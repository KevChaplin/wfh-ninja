const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    exercise: {
        type: String,
        required: [ true, 'Exercise name is required'],
        trim: true,
        maxlength: [30, 'Name cannot exceed 30 characters']
    },
    reps: {
        type: Number,
        required: [ true, 'Daily target is required'],
        min: [1, 'Value must be between 1 and 1000'],
        max: [1000, 'Value must be between 1 and 1000']
    }
})

const logSchema = new mongoose.Schema({
    date: { type: Date, default: new Date()},
    workouts: [ exerciseSchema ]
})

const UserSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [ true, 'Name is required'],
        trim: true,
        maxlength: [30, 'Name cannot exceed 30 characters']
    },
    password: {
        type:String,
        required: [ true, 'Password is required'],
        trim: true,
        minlength: [8, 'Password must be 8 - 16 characters in length'],
        maxlength: [16, 'Password must be 8 - 16 characters in length']
    },
    goals: [ exerciseSchema ],
    logs: [ logSchema ]
})

module.exports = mongoose.model('User', UserSchema)
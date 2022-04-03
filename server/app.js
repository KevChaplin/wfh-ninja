const express = require('express')
const app = express()
require('dotenv').config()

const connectDB = require('./db/connect')
const users = require('./routes/users')
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// Middleware

app.use(express.json())

// Routes

app.use('/api/v1/users', users)

app.use(notFound)
app.use(errorHandlerMiddleware)

// app.post('/api/v1/users/')  - register new user 
// app.get('/api/v1/users/')  - get all users
// app.get('/api/v1/users/:id')  - get user info
// app.delete('/api/v1/users/:id')  - delete user info 
// app.patch('/api/v1/users/:id/goals')  - update user goals
// app.patch('/api/v1/users/:id/logs')  - update user logs 


const port =  process.env.PORT || 3000
// app.listen(port, console.log(`Server is listening on port ${port}`))

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
require('dotenv').config()
const express = require('express')
const app = express()

const connectDB = require('./db/connect')
const authenticateUser = require('./middleware/authentication')

// Routers
const usersRouter = require('./routes/users')
const authRouter = require('./routes/auth')

// Error handlers
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware = require('./middleware/error-handler')

app.use(express.json())

// Routes
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/users', authenticateUser, usersRouter)

app.use(notFound)
app.use(errorHandlerMiddleware)

const port =  process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}

start()
const express = require('express')
const app = express()
require('dotenv').config()

const connectDB = require('./db/connect')
const users = require('./routes/users')


// Middleware

app.use(express.json())

// Routes
app.get('/hello', (req, res) => {
    res.send('WFH Ninja')
})

app.use('/api/v1/users', users)

// app.post('/api/v1/newuser')  - register new user 
// app.post('/api/v1/users/:id/login')  - login user
// app.get('/api/v1/users')  - get all users 
// app.get('/api/v1/users/:id')  - get user info 
// app.patch('/api/v1users/:id')  - post workout session


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
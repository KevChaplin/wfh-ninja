const express = require('express')
const app = express()
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



const port = 3000

app.listen(port, console.log(`Server is listening on port ${port}`))
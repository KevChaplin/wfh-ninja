const getUser = (req, res) => {
    const user = req.params.id
    res.json({id: user})
    // res.send('Get User')
}

const updateUser = (req, res) => {
    res.send('Update User')
}

module.exports = {
    getUser,
    updateUser
}

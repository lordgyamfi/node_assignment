const User = require('../models/User');

function addUser(req, res){
    const newUser = User.create(req.body);
res.status(200).json({
    message: 'User has been created'
})

}
function getAllUser(req, res){
    const users = User.find(req.getAllUser);
    res.status(200).json({
        User: [
            {firstName: '', lastName: '', dateOfBirth: '', school: '',},
            {firstName: '', lastName: '', dateOfBirth: '', school: '',},
            {firstName: '', lastName: '', dateOfBirth: '', school: '',},
        ]
    })
}

module.exports = {getAllUser, addUser}
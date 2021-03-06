require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userController = require('./controllers/user_controller.js');
const PORT = process.env.PORT || 3000;



app.use(express.json());
app.get('/', function(req, res){
    res.status(200).json({message:'Welcome to Lord Todo API'});
    });

app.get('/user', userController.getAllUser);
app.post('/user', userController.addUser);


app.listen(PORT, function(){
    console.log('Server has started to run');
    mongoose.connect(process.env.DB_URL)
    .then(function(){
        console.log('DB is connected');
    })
    .catch(function(error){
        console.log('DB is not connected', error.message);
    })
});
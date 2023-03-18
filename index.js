const express = require('express') //Initialize express app
const app = express(); //Initialize the sever
const mongoose = require('mongoose');
const Address = require('./model/models');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}))
mongoose.connect('mongodb://localhost:27017/AddressBook', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('connected to db')
}).catch((error) => {
    console.log(error)
});


app.listen(3000, () => {
    console.log('sever listening on port:3000');
});
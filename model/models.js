const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema for AddressBook
const sleepSchema = Schema({
    userId: {
     type: Schema.ObjectId,
     ref: user.username
    },
    sleepHours: {
     type: String,
     required: true
    },
    sleepStart: {
     type: Date
    },
    sleepEnd: {
     type: Date
    }
})
//Creating the collection Address
const Address = mongoose.model('Address', addressSchema)
module.exports = Address;
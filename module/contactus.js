const mongoose = require('mongoose');

const contactus = new mongoose.Schema({
    Name: {
        type: String
    },

    Email: {
        type: String
    },
    Message: {
        type: String
    },


    added_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Contactus = mongoose.model('contactus', contactus);
const mongoose = require('mongoose'),
    user = mongoose.Schema,
    validate = require('mongoose-unique-validator');

const userSchema = new user({
    name:{
        type: String,
        required: true,
        index: true,
        lowercase: true
    }, 
    address:{
        type: String,
        required: true,
        index: true,
        lowercase: true
    },
    hobby:{
        type: String,
        required: true,
        index: true,
        lowercase: true
    }
},{
    timestamps: {
        createdAt : 'createdAt',
        updatedAt : 'updatedAt'
    }
});

userSchema.plugin(validate);
module.exports = mongoose.model('user', userSchema);
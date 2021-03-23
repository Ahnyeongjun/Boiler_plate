const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minglength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String,
    },
    tokenExp: {
        type: Number
    }
})

userSchema.pre('save', next => {
    var user = this;
    try {
        if (user.isModified('password')) {
            // console.log('password changed')
            const salt = bcrypt.genSalt(saltRounds);

            const hash = bcrypt.hash(user.password, salt);
            user.password = hash;

        }
        next()

    }
    catch (err) {
        res.status(400).end();
    }
})

userSchema.methods.comparePassword = function (plainPassword) {
    return isMatch = bcrypt.compare(plainPassword, this.password)
}
userSchema.methods.generateToken = () => {
    var user = this;
    console.log('user', user)
    console.log('userSchema', userSchema)
    var token = jwt.sign(user._id.toHexString(), 'secret')
    var oneHour = moment().add(1, 'hour').valueOf();

    user.tokenExp = oneHour;
    user.token = token;
    user.save(user)
}

const User = mongoose.model('User', userSchema);
module.exports = { User }
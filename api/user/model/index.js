const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const validateEmail = (email) => {
  const regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return regEx.test(email);
};

const userSchema = new Schema({
  login: {
    type: String,
    unique: true,
    required: [true, 'Login i required'],
    minlength: 6,
  },
  password: {
    type: String,
    unique: true,
    required: [true, 'Password i required'],
    minlength: 8,
  },
  email: {
    type: String,
    required: [true, 'Login i required'],
    lowercase: true,
    validate: [validateEmail, 'Please fill a valid email adresss'],
  },
  clients: [
    {
      type: String,
      ref: 'Treatment',
      default: [],
    },
  ],
});

//hook in mongoose(middleware) that is apply to object that we want to save before we actualy save this. next as a argument  is to call nest function

const User = mongoose.model('User', userSchema);
module.exports = User;

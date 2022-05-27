const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: {
    type: 'string',
    required: true,
  },
  age: {
    type: 'number',
    required: true,
  },
  username: {
    type: 'string',
    required: true,
  },
})

const UserModel = mongoose.model('Mern', UserSchema)

module.exports = UserModel

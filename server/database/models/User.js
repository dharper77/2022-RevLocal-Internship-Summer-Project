const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  shipping: {
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: Number
    }
  },
  billing: {
    address: {
      street: String,
      city: String,
      state: String,
      zipCode: Number
    },
    ccNumber: Number,
    ccExp: String,
    ccv: Number
  },
  selling: {
    listings: [String],
    routing: Number,
    storeRating: Number
  }
})

module.exports = mongoose.model('User', userSchema, 'users')

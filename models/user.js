const mongoose = require('mongoose');
const db = mongoose.connection;

// Create a schema for User table. Will be a mongodb collection
const userSchema = new mongoose.Schema({
  name: String
});

// Create a new user model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User
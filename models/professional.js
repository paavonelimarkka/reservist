const mongoose = require('mongoose');
const db = mongoose.connection;

// Create a schema for Professional table. Will be a mongodb collection
const professionalSchema = new mongoose.Schema({
  name: String
});

// Create a new model based on the schema
const Professional = mongoose.model('Professional', professionalSchema); 

module.exports = Professional
const mongoose = require('mongoose')
const db = mongoose.connection

// Create a schema for Professional table. Will be a mongodb collection
// Here you could add a lot more data depending on the service. For example a subject for the reservation or an office number
const reservationSchema = new mongoose.Schema({
  userId: String,
  professionalId: String,
  reservationStart: Date,
  reservationEnd: Date,
  subject: String
})

// Create a new model based on the schema
const Reservation = mongoose.model('Reservation', reservationSchema); 

module.exports = Reservation
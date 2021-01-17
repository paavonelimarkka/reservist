const express = require("express")
const router = express.Router()
const jwt = require('express-jwt')

const Reservation = require("../models/reservation.js")
const User = require("../models/user.js")
const Professional = require("../models/professional.js")

router.get('/reservations', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  let findReservations = ""

  if (!req.query.params) { findReservations = await Reservation.find() }
  if (req.query.id) { findReservations = await Reservation.findOne({ _id: req.query.id }) }
  if (req.query.subject) { findReservations = await Reservation.findOne({ subject: req.query.subject }) }

  res.json(findReservations)
})

router.post('/reservations', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {

const user = await User.findOne({ name: req.body.user })
const professional = await Professional.findOne({ name: req.body.professional })

const newReservation = new Reservation ({
  userId: user._id,
  professionalId: professional._id,
  reservationStart: req.body.reservationStart,
  reservationEnd: req.body.reservationEnd,
  subject: req.body.subject
})

  await newReservation.save()
  res.json("New reservation done: " + newReservation)
})

router.put('/reservations/:id', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  const oldReservation = await Reservation.findOne({"_id": req.params.id})
  const user = await User.findOne({ name: req.body.user })
  const professional = await Professional.findOne({ name: req.body.professional })

  oldReservation._id = req.params.id
  oldReservation.user = user._id
  oldReservation.professional = professional._id
  oldReservation.reservationStart = req.body.reservationStart
  oldReservation.reservationEnd = req.body.reservationEnd
  oldReservation.subject = req.body.subject

  await oldReservation.save()
  res.json("Reservation updated via PUT : " + oldReservation)
})

router.patch('/reservations/:id', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  const Reserv = await Reservation.findOne({"_id": req.params.id})
  const user = await User.findOne({ name: req.body.user })
  const professional = await Professional.findOne({ name: req.body.professional })

  if (req.body.user)               Reserv.userId = user._id
  if (req.body.professional)       Reserv.professionalId = professional._id
  if (req.body.reservationStart)   Reserv.reservationStart = req.body.reservationStart
  if (req.body.reservationEnd)     Reserv.reservationEnd = req.body.reservationEnd
  if (req.body.subject)            Reserv.subject = req.body.subject

  await Reserv.save()
  res.json("Reservation updated via PATCH : " + Reserv)
})

router.delete('/reservations/:id', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  await Reservation.deleteOne({"_id": req.params.id})
  res.json("Reservation deleted: " + req.params.id)  
})

// Dirty debug database clear. Stupid route please don't ask
router.delete('/reservations/debug/del', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  await Reservation.deleteMany({})
  res.json("Reservations deleted")  
})

module.exports = router
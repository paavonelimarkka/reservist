const express = require("express")
const router = express.Router()
const jwt = require('express-jwt')

const Professional = require ("../models/professional.js")

router.get('/professionals', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  const findProfessionals = await Professional.find()
  res.json(findProfessionals)
})

router.post('/professionals', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  const newProfessional = new Professional ({ name: req.body.name })
  await newProfessional.save()

  res.json("New professional saved: " + req.body.name)  
})

router.delete('/professionals', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  await Professional.deleteOne(req.body)
  res.json("Professional deleted: " + req.body.name)  
})

// Dirty debug dabatase clear
router.delete('/professionals/del', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  await Professional.deleteMany({})
  res.json("Professionals deleted")  
})

module.exports = router
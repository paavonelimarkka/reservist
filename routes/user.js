const express = require("express")
const router = express.Router()
const jwt = require('express-jwt')

const User = require ("../models/user.js")

router.get('/users', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  const findUsers = await User.find()
  res.json(findUsers)
})

router.post('/users', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  const newUser = new User ({ name: req.body.name })
  await newUser.save()

  res.json("New user saved: " + req.body.name)  
})

router.delete('/users', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  await User.deleteOne(req.body)
  res.json("User deleted: " + req.body.name)  
})

// Dirty debug database clear
router.delete('/users/del', jwt({ secret: 'koira', algorithms: ['HS256'] }), async (req, res) => {
  await User.deleteMany({})
  res.json("Users deleted")  
})

module.exports = router
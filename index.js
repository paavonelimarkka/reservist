const express = require('express')
const mongoose = require('mongoose')

const professionalRoutes = require("./routes/professional")
const userRoutes = require("./routes/user.js")
const reservationRoutes = require("./routes/reservation.js")

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true})
  .then(() => {
    const app = express()
    app.use(express.json())
    app.use("", professionalRoutes)
    app.use("", userRoutes)
    app.use("", reservationRoutes)

    app.listen(3000, () => {
      console.log("The server is running!")
    })
})
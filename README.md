# Reservist

This is a final assignment for the YTSP0200 Data Modeling & Back-end Development course. Course is part of JAMK Full Stack Developers masters degree programme. 

The assignment was to make a simple API for making reservations, using Express & MongoDB with Mongoose. Authentication was mandatory and I used simple express-jwt lib for the purpose. For the "front-end" I used Postman for testing purposes, and I included a request collection here.

## Features

### Implemented

- Reservation
  - You can get a single reservation, or a reservation based on the id
  - You can search a reservation based on reservation sucject or id
  - You can post a reservation
  - You can update a reservation via put
  - You can patch a reservation
  - You can delete a reservation based on id
- User
  - You can get all the users
  - You can post an user
  - You can delete an user
- Professional
  - You can get all the professionals
  - You can post a professional
  - You can delete a professional
- Theres also dirty debug route to clear the whole database for reservation, user and professional
- User authentication based on bearer token
- Postman collection for testing the API

### Should be implented

- Data validation
- A check on reservation post if the chosen timeframe has already been taken
- Try/catch for errors
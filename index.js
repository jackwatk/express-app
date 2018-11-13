// Requiring express package
const express = require('express')

//Our routes
const mainRoutes = require('./routes/main');

// Starting express app
const app = express()

// Defining Port
const port = 3000

// Our first middleware
app.use((req, res, next) => {
  req.requestTime = Date.now()
  next()
})

app.use('/', mainRoutes);

app.get('*', (req, res) => res.send('404 - Page not found'))

// Start listening for requests
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
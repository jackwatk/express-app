'use strict'

const express = require('express');
const router = express.Router();

// Our first route - localhost:3000/
router.post('/', (req, res) => {
  console.log(req.requestTime);
  res.send('Got a POST request')
})

router.get('/', (req, res) => res.sendFile(__dirname + '/views/index.html'))

router.get('/about', (req, res) => res.send('About page'))

module.exports = router;
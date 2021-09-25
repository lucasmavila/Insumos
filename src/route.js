const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render('index', { page: 'home' }))
route.get('/simulator', (req, res) =>
  res.render('index', { page: 'simulator' })
)

module.exports = route

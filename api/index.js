const express = require('express');
const api = express.Router();
const clientRoutes = require('./client/routes/index');

api.use('/clients', clientRoutes);

module.exports = api;

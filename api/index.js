const express = require('express');
const api = express.Router();
const clientRoutes = require('./client/routes/index');
const userRoutes = require('./user/routes/index');

api.use('/clients', clientRoutes);
api.use('/authentication', userRoutes);

module.exports = api;

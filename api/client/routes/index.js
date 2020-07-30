const express = require('express');
const clientController = require('../controller/index');
const authController = require('../../authentication/controller/index');
const router = express.Router();

router
  .route('/')
  .post(authController.checkToken, clientController.createClient)
  .get(authController.checkToken, clientController.getClients);

router
  .route('/:id')
  .get(authController.checkToken, clientController.getClient)
  .put(authController.checkToken, clientController.editClient)
  .delete(authController.checkToken, clientController.deleteClient);

module.exports = router;

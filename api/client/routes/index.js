const express = require('express');
const clientController = require('../controller/index');
const router = express.Router();

router.route('/').post(clientController.createUser);

module.exports = router;

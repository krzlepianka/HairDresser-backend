const express = require('express');
const authController = require('../../authentication/controller/index');
const router = express.Router();

router.route('/signup').post(authController.signUp);
router.route('/signin').post(authController.signIn);

module.exports = router;

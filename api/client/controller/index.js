const express = require('express');
const Client = require('../model/index');

exports.createUser = (req, res) => {
  res.status(200).json({
    message: 'created new client',
  });
};

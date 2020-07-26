const express = require('express');
const Client = require('../model/index');

exports.createUser = async (req, res) => {
  try {
    const client = await Client.create(req.body);
    res.status(200).json({
      message: 'you added a new client',
      client,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something gone wrong',
    });
  }
};

exports.getClients = async (req, res) => {
  try {
    console.log('lol');
    const clients = await Client.find();
    res.status(200).json({
      message: 'clients list',
      clients,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something gone wrong',
    });
  }
};

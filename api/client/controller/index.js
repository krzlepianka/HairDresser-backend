const express = require('express');
const Client = require('../model/index');
const User = require('../../user/model/index');

exports.createClients = async (req, res) => {
  try {
    const { data } = res.locals.decode;
    const client = await Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      createdBy: data,
    });
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
    const { data } = res.locals.decode;
    const clients = await Client.find({ createdBy: data });
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

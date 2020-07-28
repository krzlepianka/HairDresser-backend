const express = require('express');
const Client = require('../model/index');
const User = require('../../user/model/index');

exports.getClients = async (req, res) => {
  try {
    const { id } = res.locals.decode;
    const clients = await Client.find({ createdBy: id });
    res.status(200).json({
      message: 'clients list',
      clients,
    });
  } catch (err) {
    res.status(500).json({
      message: 'something gone wrong',
      error: err.message,
    });
  }
};

exports.getClient = async (req, res) => {
  const { id } = req.params;
  try {
    const client = await Client.findById(id);
    res.status(200).json({
      message: 'you found a client',
      client,
    });
  } catch (error) {
    res.status(404).json({
      message: 'there is no client with id that you passed',
      error: error.messae,
    });
  }
};

exports.createClient = async (req, res) => {
  try {
    const { id } = res.locals.decode;
    const client = await Client.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      createdBy: id,
    });
    res.status(200).json({
      message: 'you added a new client',
      client,
    });
  } catch (err) {
    res.status(404).json({
      message: 'something gone wrong',
      error: err.message,
    });
  }
};

exports.editClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await Client.findByIdAndUpdate(id, {
      firstName: 'Maria',
    });
    res.status(200).json({
      message: 'this rout works',
      updatedClient,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

exports.deleteClient = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedClient = await Client.findByIdAndDelete(id);
    res.status(200).json({
      message: `you deleted client with id ${id}`,
      deletedClient,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: String,
  treatments: [{ type: String, ref: 'Treatment' }],
  default: [],
});

exports.module = mongoose.model('Client', ClientSchema);

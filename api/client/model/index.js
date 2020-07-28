const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClientSchema = new Schema({
  firstName: String,
  lastName: String,
  phone: Number,
  email: String,
  treatments: [
    {
      type: String,
      ref: 'Treatment',
      default: [],
    },
  ],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Client = mongoose.model('Client', ClientSchema);
module.exports = Client;

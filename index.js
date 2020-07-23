require('dotenv').config();
const express = require('express');
app = express();
cors = require('cors');
bodyParser = require('body-parser');
mongoose = require('mongoose');
api = require('./api/index');

//define variable with our PORT and DATABASE CONNECTION STRING form enviromental variables
const { PORT, DB_CONNECTION_STRING } = process.env;

//Connect express with Mongoose and handle initial errors
mongoose
  .connect('mongodb://localhost:27017/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log('connection established'))
  .catch((error) => {
    console.error('connection failed', error);
  });

//handle errors after initial connection succeed
mongoose.connection.on('error', (error) => {
  console.log('you have lost connection with database', error);
});

//create middleware with cors and bodyParser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//api middleware
app.use('/api', api);

app.get('/', (req, res) => {
  return res.status(200).json({
    message: 'route works',
  });
});

app.listen(PORT, () => {
  console.log(`server is working on port ${PORT}`);
});

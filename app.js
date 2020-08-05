const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Book = require('./models/bookModel');
const bookRouter = require('./routes/bookRouter')(Book);

const app = express();

if (process.env.ENV === 'Test') {
  // DB connection
  mongoose
    .connect('mongodb://localhost:27017/bookAPI_Test', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Test DB connection successful...'));
} else {
  // DB connection
  mongoose
    .connect('mongodb://localhost:27017/bookAPI', {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    })
    .then(() => console.log('Database connection successful...'));
}

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', bookRouter);

app.get('/', (req, res) => {
  res.send('Welcome to my Node API.');
});

app.server = app.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});

module.exports = app;

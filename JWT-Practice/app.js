const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(
    'mongodb://localhost/jwt-practice',
    { useNewUrlParser: true }
);

const authRouter = require('./controllers/auth');
const applesRouter = require('./controllers/apples');

app.use('/auth', authRouter);
app.use('/apples', applesRouter);

app.listen(3000, function() {
  console.log('App listening on localhost:3000');
});
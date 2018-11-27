const { Router } = require('express');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const router = Router();

router.post('/sign-up', (req, res) => {
  const newUser = new User(req.body);

  newUser.save()
  .then(savedUser => {
    const token = jwt.sign({ _id: savedUser._id }, 'shhhhhhared-secret');
    res.json({'authToken:': token});
  })
  .catch(err => {
    console.log(err);
    res.json({'Error': 'There was an error trying to create a user'});
  })
});

module.exports = router;
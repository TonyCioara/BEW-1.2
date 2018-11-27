const { Router } = require('express');
const jwt = require('jsonwebtoken');

const router = Router();

router.get('/', (req, res) => {
  if (req.get('Authorization') == undefined) {
    return res.json({'Error': 'There was no Authorization Token'});
  };

  const authToken = req.get('Authorization').split(' ')[1];

  console.log(authToken);
  try {
    const verifyToken = jwt.verify(authToken, 'shhhhhhared-secret');
  } catch (error) {
    return res.json({'Error': 'There was an error veryfing the user'});
  };

  res.json({'Apples': 'Here are some apples'});

});

module.exports = router;

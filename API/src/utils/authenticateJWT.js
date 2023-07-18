const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.JWT_KEY;

function authenticateJWT(req, res, next) {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    const token = authHeader.split(' ')[1];

    jwt.verify(token, secret, (err, user) => {
      if (err) {
        res.status(400).json("accés refusé. Connecté vous");
      }

      req.user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
}

module.exports = authenticateJWT;

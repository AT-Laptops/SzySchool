const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req, res, next) {
  //get the token from header
  const token = req.header('x-auth-token');

  //if there is no token (user is not logged in)
  //reject the access
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  try {
    //decode the token and assing the user from token to request.user
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({
      msg: 'Token is not valid'
    });
  }
};

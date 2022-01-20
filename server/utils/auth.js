const jwt = require('jsonwebtoken');

// Set globals
const secret = 'whisperwhisper';
const expiration = '2h';

module.exports = {
  authMiddleware: function ({ req }) {
   //   Look for the user's encoded token at one of the three req object locations
    let token = req.body.token || req.query.token || req.headers.authorization;
   //  Reformat token if it comes from authorization header
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }
   // If no token found in middleware, return bad request object
    if (!token) {
      return req;
    }
   // Make sure the secret is properly encoded in both tokens
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
    }
   // Send request object back to context
    return req;
  },

  signToken: function ({ email, username, _id }) {
    const payload = { email, username, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};

const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe-gandalfthegrey';
const expiration = '1h';

module.exports = {
    authMiddleware: function ({req}) {
        // allows token to be sent via  req.query or headers
        let token = req.body?.token || req.query?.token || req.headers?.authorization;
    
        if (req.headers?.authorization) {
          token = token.split(' ').pop().trim();
        }
    
        if (!token) {
          return req;
        }
    
        // verify token and get user data out of it
        try {
          const { data } = jwt.verify(token, secret, { maxAge: expiration });
          req.user = data;
        } catch {
          console.log('Invalid token');

        }
        return req;

      },
    
    signToken: function ({ email, firstName, lastName, _id }) {
        const payload = { email, firstName, lastName, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};

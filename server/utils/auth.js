const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe-gandalfthegrey';
const expiration = '1h';

module.exports = {
    signToken: function ({ email, firstName, lastName, _id }) {
        const payload = { email, firstName, lastName, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};

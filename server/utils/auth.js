const jwt = require('jsonwebtoken');

const secret = 'keepitsecretkeepitsafe-gandalfthegrey';
const expiration = '1h';

module.exports = {
    signToken: function ({ email, firstname, lastname, _id }) {
        const payload = { email, firstname, lastname, _id };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};

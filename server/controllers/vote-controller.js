const { Vote } = require('../models');

module.exports = {
    async submitVote({ body, res }) {
        const newVote = await Vote.create(body)

        if (!newVote) {
            return res.status(400).json({ message: 'Unable to submit new vote' });
          }

          es.status(200).json(newVote);
    }
}
const { Poll } = require('../models');

module.exports = {
    async createPoll({ body }, res) {
        const newPoll = await Poll.create(body)

        if (!newPoll) {
            return res.status(400).json({ message: 'Unable to create newPoll' });
          }

          es.status(200).json(newPoll);
    },
    async getAllPolls(req, res) {
        const allPolls = await Poll.find({});
    
        if (!allPolls) {
          return res.status(400).json({ message: 'No polls found' });
        }
    
        res.status(200).json(allPolls);
      },
      async getPoll({ params }, res) {
        const onePoll = await Poll.findOne({ _id: params.id });
    
        if (!onePoll) {
          return res.status(400).json({ message: 'No polls found by that id' });
        }
    
        res.status(200).json(onePoll);
      },
      async createPollOption(req, res) {
        const vote = await Poll.findOneAndUpdate(
          { _id: req.body.id },
          { $addToSet: { pollOp: req.body } },
        );
    
        if (!vote) {
          return res.status(400).json({ message: 'Unable to vote on matchup' });
        }
    
        res.status(200).json(vote);
      },
}
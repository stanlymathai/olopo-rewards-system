const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');
const ruleEngine = require('../services/ruleEngine.service/rules');

exports.accruePoints = async (userId, points, source) => {
  const user = await User.findById(userId);
  if (user) {
    // Define the facts to be evaluated by the rule engine
    const facts = {
      userId: user._id,
      points,
      source,
      userPoints: user.points,
    };

    // Evaluate the rules using the rule engine
    const ruleResult = await ruleEngine.run(facts);

    // If rule evaluation succeeds, proceed with accruing points
    if (ruleResult.events.length > 0) {
      user.points += points;
      await user.save();

      // Log the transaction
      const transaction = new Transaction({
        userId,
        type: 'accrual',
        points,
        source,
      });
      await transaction.save();

      return user;
    } else {
      throw new Error('Rule evaluation failed, points not accrued');
    }
  } else {
    throw new Error('User not found');
  }
};

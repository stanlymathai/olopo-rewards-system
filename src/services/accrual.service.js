const { Engine } = require('json-rules-engine');
const Transaction = require('../models/transaction.model');
const User = require('../models/user.model');
const rules = require('../services/ruleEngine.service/rules');

exports.accruePoints = async (userId, points, source) => {
  const user = await User.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }

  // Initialize the rule engine
  const engine = new Engine();

  // Load rules into the engine
  rules.forEach((rule) => engine.addRule(rule));

  // Define the facts (data) that the engine will evaluate
  const facts = {
    user,
    points,
    source,
  };

  // Run the engine
  const { events } = await engine.run(facts);

  // Check if any rule disallows the accrual of points
  if (events.length === 0) {
    throw new Error('Points accrual disallowed by rule engine');
  }

  // If allowed, update the user's points
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
};

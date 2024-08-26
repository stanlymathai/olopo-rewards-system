const { Engine } = require('json-rules-engine');

const engine = new Engine();

// Example rule: User earns points for a purchase
const purchaseRule = {
  conditions: {
    all: [
      {
        fact: 'transactionType',
        operator: 'equal',
        value: 'purchase',
      },
    ],
  },
  event: {
    type: 'awardPoints',
    params: {
      points: 10,
    },
  },
};

// Example rule: User earns extra points for referrals
const referralRule = {
  conditions: {
    all: [
      {
        fact: 'transactionType',
        operator: 'equal',
        value: 'referral',
      },
    ],
  },
  event: {
    type: 'awardPoints',
    params: {
      points: 20,
    },
  },
};

engine.addRule(purchaseRule);
engine.addRule(referralRule);

module.exports = engine;

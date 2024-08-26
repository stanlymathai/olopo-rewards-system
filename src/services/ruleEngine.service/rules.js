const { Engine } = require('json-rules-engine');

const engine = new Engine();

// Example rule: Users can't accrue more than 1000 points in one transaction
engine.addRule({
  conditions: {
    all: [
      {
        fact: 'points',
        operator: 'lessThanInclusive',
        value: 1000,
      },
    ],
  },
  event: {
    type: 'accrual-approved',
    params: {
      message: 'Points can be accrued',
    },
  },
});

module.exports.run = (facts) => engine.run(facts);

module.exports = [
  {
    conditions: {
      all: [
        {
          fact: 'source',
          operator: 'equal',
          value: 'purchase',
        },
        {
          fact: 'user',
          path: '$.status',
          operator: 'equal',
          value: 'active',
        },
      ],
    },
    event: {
      type: 'allow-accrual',
      params: {
        message: 'Points accrual allowed',
      },
    },
  },
  {
    conditions: {
      any: [
        {
          fact: 'source',
          operator: 'equal',
          value: 'bonus',
        },
        {
          fact: 'user',
          path: '$.status',
          operator: 'equal',
          value: 'premium',
        },
      ],
    },
    event: {
      type: 'allow-accrual',
      params: {
        message: 'Points accrual allowed for premium users or bonus',
      },
    },
  },
];

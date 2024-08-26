const mongoose = require('mongoose');

const ledgerSchema = new mongoose.Schema({
  transactionId: String,
  userId: String,
  points: Number,
  type: String, // 'accrual', 'redemption', 'extinguishment'
  timestamp: { type: Date, default: Date.now },
});

const Ledger = mongoose.model('Ledger', ledgerSchema);

module.exports = Ledger;

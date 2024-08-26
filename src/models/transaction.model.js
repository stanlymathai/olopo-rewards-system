const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  type: { type: String, enum: ['accrual', 'redemption'], required: true },
  points: { type: Number, required: true },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;

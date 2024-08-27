const mongoose = require('mongoose');
const User = require('../models/user.model');
const Transaction = require('../models/transaction.model');
const accrualService = require('../services/accrual.service');

// Mock the User and Transaction models
jest.mock('../models/user.model');
jest.mock('../models/transaction.model');

describe('accruePoints', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should successfully accrue points when the rules allow it', async () => {
    const mockUser = {
      _id: new mongoose.Types.ObjectId(),
      points: 100,
      status: 'active',
      save: jest.fn(),
    };

    User.findById.mockResolvedValue(mockUser);
    Transaction.prototype.save = jest.fn().mockResolvedValue({});

    const result = await accrualService.accruePoints(
      mockUser._id,
      50,
      'purchase'
    );
    expect(result.points).toBe(150);
    expect(mockUser.save).toHaveBeenCalled();
    expect(Transaction.prototype.save).toHaveBeenCalled();
  });

  it('should throw an error when the rules disallow accrual', async () => {
    const mockUser = {
      _id: new mongoose.Types.ObjectId(),
      points: 100,
      status: 'inactive',
      save: jest.fn(),
    };

    User.findById.mockResolvedValue(mockUser);

    await expect(
      accrualService.accruePoints(mockUser._id, 50, 'purchase')
    ).rejects.toThrow('Points accrual disallowed by rule engine');

    expect(mockUser.save).not.toHaveBeenCalled();
    expect(Transaction.prototype.save).not.toHaveBeenCalled();
  });

  it('should throw an error if the user is not found', async () => {
    User.findById.mockResolvedValue(null);

    await expect(
      accrualService.accruePoints(new mongoose.Types.ObjectId(), 50, 'purchase')
    ).rejects.toThrow('User not found');
  });
});

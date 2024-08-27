import React, { useState } from 'react';
import axios from 'axios';

const AccruePoints = () => {
  const [accrualData, setAccrualData] = useState({
    userId: '',
    points: '',
    source: '',
  });

  const handleChange = (e) => {
    setAccrualData({ ...accrualData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/accrual', accrualData);
      alert('Points accrued successfully');
    } catch (error) {
      alert('Error accruing points');
    }
  };

  return (
    <div>
      <h2>Accrue Points</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID</label>
          <input type="text" name="userId" onChange={handleChange} required />
        </div>
        <div>
          <label>Points</label>
          <input type="number" name="points" onChange={handleChange} required />
        </div>
        <div>
          <label>Source</label>
          <input type="text" name="source" onChange={handleChange} required />
        </div>
        <button type="submit">Accrue Points</button>
      </form>
    </div>
  );
};

export default AccruePoints;

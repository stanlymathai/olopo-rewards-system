import React, { useState } from 'react';
import axios from 'axios';

const AccruePointsForm = () => {
  const [userId, setUserId] = useState('');
  const [points, setPoints] = useState(0);
  const [source, setSource] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/api/points/accrual', {
        userId,
        points: parseInt(points, 10),
        source,
      });

      setMessage(
        `Points accrued successfully! New balance: ${response.data.points}`
      );
    } catch (error) {
      setMessage(
        `Error: ${error.response ? error.response.data : error.message}`
      );
    }
  };

  return (
    <div>
      <h2>Accrue Points</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User ID:</label>
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Points:</label>
          <input
            type="number"
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Source:</label>
          <input
            type="text"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            required
          />
        </div>
        <button type="submit">Accrue Points</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AccruePointsForm;

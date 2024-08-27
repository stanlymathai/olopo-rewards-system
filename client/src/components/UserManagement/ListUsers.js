import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ListUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await axios.get('http://localhost:8000/api/users/list');
      setUsers(response.data);
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <ul>
        {users.map((user) => (
          <li key={user._id}>
            {user.name} ({user.email}) - Points: {user.points}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListUsers;

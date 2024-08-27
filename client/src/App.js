import React, { useState } from 'react';
import CreateUser from '../src/components/UserManagement/CreateUser';
import ListUsers from '../src/components/UserManagement/ListUsers';

const App = () => {
  const [users, setUsers] = useState([]);

  const handleUserCreated = (newUser) => {
    setUsers([...users, newUser]);
  };

  return (
    <div>
      <h1>Olopo Rewards Management System</h1>
      <CreateUser onUserCreated={handleUserCreated} />
      <ListUsers />
    </div>
  );
};

export default App;

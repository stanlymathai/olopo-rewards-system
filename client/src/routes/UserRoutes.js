import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateUser from '../components/UserManagement/CreateUser';
import UserList from '../components/UserManagement/UserList';

const UserRoutes = () => {
  return (
    <Routes>
      <Route path="/users/create" element={<CreateUser />} />
      <Route path="/users/list" element={<UserList />} />
    </Routes>
  );
};

export default UserRoutes;

import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoutes = () => { // Receive auth as a prop

 const token = localStorage.getItem('authToken');

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;

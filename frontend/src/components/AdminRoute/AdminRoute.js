import React, { Children } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';
import AuthRoute from '../AuthRoute/AuthRoute';

function AdminRoute({ children }) {
  const { user } = useAuthentication();
  return localStorage.getItem('isAdmin') === 'true' ? (
    children
  ) : (
    <div>
        <h1>You don't have access to this page!</h1>
        <h1>Get out of here! &#128547;</h1>
    </div>
    
  );
}

const AdminRouteExport = ({ children }) => (
  <AuthRoute>
    <AdminRoute>{children}</AdminRoute>
  </AuthRoute>
);

export default AdminRouteExport;
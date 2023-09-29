import React from 'react';
import ReactDOM from 'react-dom/client';
import NavigationBar from './pages/navBar/NavigationBar';
import RegisteredMicroorganisms from './pages/registeredMicroorganisms/RegisteredMicroorganisms';
import RegisteredUsers from './pages/registeredUsers/RegisteredUsers';
import Login  from './pages/loginUsers/Login';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

import { BrowserRouter as Router, Navigate } from 'react-router-dom';




import { AuthProvider } from './ContextAuthentication/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
    <Router>
      <NavigationBar isLandingPage={false} />
      <Login />
    </Router>
    </AuthProvider>
      </React.StrictMode>
);
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RegisteredMicroorganisms from './pages/registeredMicroorganisms/RegisteredMicroorganisms';
import RegisteredUsers from './pages/registeredUsers/RegisteredUsers';
import Login  from './pages/loginUsers/Login';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    {/* <RegisteredMicroorganisms/>  */}
    <ForgotPassword/>
  
  </React.StrictMode>
);
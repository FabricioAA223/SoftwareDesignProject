import React from 'react';
import ReactDOM from 'react-dom/client';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import Manuals from './pages/manuals/Manuals';
import NewCount from './pages/newCount/NewCount';
import RegisteredMicroorganisms from './pages/registeredMicroorganisms/RegisteredMicroorganisms';
import RegisteredUsers from './pages/registeredUsers/RegisteredUsers';
import { Login } from '@mui/icons-material';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { < ForgotPassword /> }  
    {/* < Manuals /> */}  
    {/* < NewCount /> */}  
    {/* < RegisteredMicroorganisms /> */}  
    { /*< RegisteredUsers /> */}  
  </React.StrictMode>
);
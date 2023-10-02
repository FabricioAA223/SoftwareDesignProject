import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import RegisteredMicroorganisms from './pages/registeredMicroorganisms/RegisteredMicroorganisms';
import RegisteredUsers from './pages/registeredUsers/RegisteredUsers';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />  */}
    {/* <RegisteredMicroorganisms/>  */}
    <RegisteredUsers />
  </React.StrictMode>
);
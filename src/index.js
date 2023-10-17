import React from 'react';
import ReactDOM from 'react-dom/client';
import NewGender from '../src/pages/newGender/NewGender'
import newCount from '../src/pages/newCount/NewCount'
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import ChangeCredentials from './pages/changeCredentials/ChangeCredentials';
import Manuals from '../src/pages/manuals/Manuals';
import HomePage from '../src/pages/homePage/HomePage';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    { /*<Manuals />*/}
    { <ChangeCredentials />}
    { /*<HomePage/>*/ }
  </React.StrictMode>
);
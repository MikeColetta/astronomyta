import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthService from './utils/auth_service';
require('dotenv').config();

const authService = new AuthService();

ReactDOM.render(
  <App authService={authService} />,
  document.getElementById('root')
);
registerServiceWorker();

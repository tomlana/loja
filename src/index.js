import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Menu from './component/menu/Menu'
import reportWebVitals from './reportWebVitals';
import Tabela from './component/tabela/tabela';
import Login from './component/containers/Login';
// import Login from './component/containers/Login';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

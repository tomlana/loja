import React from 'react';
import ReactDOM from 'react-dom';
import '../../index.css';
import Menu from '../menu/Menu';
import reportWebVitals from '../../reportWebVitals';
import Tabela from '../tabela/tabela';

ReactDOM.render(
  <React.StrictMode>
    <Menu />
    <Tabela />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


export default this;



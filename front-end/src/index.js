import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import {GlobalStyles} from './global-style';

ReactDOM.render(
  <React.StrictMode>
    <>
    <GlobalStyles/>
    <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);


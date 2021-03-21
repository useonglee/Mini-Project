import reportWebVitals from './reportWebVitals'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import SimpleHabit from './components/simpleHabit';
import '@fortawesome/fontawesome-free/js/all.js';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();

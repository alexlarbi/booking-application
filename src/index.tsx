import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import "normalize.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/datetime/lib/css/blueprint-datetime.css";

import {DateTimeExample} from "./DateTimeExample";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <DateTimeExample />
  </React.StrictMode>,
  document.getElementById('root')
);



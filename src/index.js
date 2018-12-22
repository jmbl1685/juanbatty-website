import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './flexbox.css';
import './index.css';
import 'aos/dist/aos.css';
import './smoothscroll.js'

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

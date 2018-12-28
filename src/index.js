import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import './assets/css/flexbox.css';
import './index.css';
import 'aos/dist/aos.css';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

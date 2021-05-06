import React from 'react';
import {hydrate} from 'react-dom';

import App from './components/app.js';

hydrate(<App />, document.getElementById("app"));

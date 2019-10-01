import * as React from 'react';
import { render } from 'react-dom';
import { App } from 'views/App';
import '../server';

import 'css/variables.css';
import 'normalize.css';

render(<App />, document.getElementById('root'));

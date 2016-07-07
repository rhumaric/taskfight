import React from 'react';
import {render} from 'react-dom';

import routes from './ui/routes';

render(routes(), document.getElementById('app'));
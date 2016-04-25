import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';

import App from './components/app/App';

const store = new Store({
    portName: 'MY_APP' // communication port name
});


const anchor = document.createElement('div');
anchor.id = 'mockup-overlay';

document.body.insertBefore(anchor, document.body.childNodes[0]);

render(
    <Provider store={store}>
        <App/>
    </Provider>
    , document.getElementById('mockup-overlay'));

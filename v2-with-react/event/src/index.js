// background.js
import {createStore} from 'redux';
import reducers from '../../reducers';
import {wrapStore} from 'react-chrome-redux';

const store = createStore(reducers);
wrapStore(store, {portName: 'MY_APP'});
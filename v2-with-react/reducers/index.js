/**
 * Created by maxit on 4/24/2016.
 */
import {combineReducers} from 'redux';

import overlay from './overlay';
import app from './app';

export default combineReducers({
    overlay,
    app
});
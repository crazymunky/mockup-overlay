import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Store} from 'react-chrome-redux';
import {toggleControls, addMedia} from '../../../actions';
import App from './components/app/App';

const store = new Store({
    portName: 'MY_APP' // communication port name
});


console.log("initial state", store.getState());
store.subscribe(()=> {
    console.log("state change", store.getState());
    store.dispatch(toggleControls());
    store.dispatch(addMedia("NEW MEDIA FILE"));
});
const unsuscribe = store.subscribe(()=> { 
    unsuscribe();

    const anchor = document.createElement('div');

    anchor.id = 'mockup-overlay';
    document.body.insertBefore(anchor, document.body.childNodes[0]);
    render(
        <Provider store={store}>
            <App/>
        </Provider>
        , document.getElementById('mockup-overlay'));

});


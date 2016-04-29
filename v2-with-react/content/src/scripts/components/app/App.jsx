import React, {Component} from 'react';
import MediaCanvas from './MediaCanvas.jsx';
import OverlayControls from './OverlayControls.jsx';
import {connect} from 'react-redux';
class App extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        return (
            <div>
                <OverlayControls/>
                <MediaCanvas/>
            </div>
        );
    }
}

export default connect((state)=>{
    return state;
})(App);

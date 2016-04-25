import React, {Component} from 'react';
import MediaCanvas from './MediaCanvas.jsx';
import OverlayControls from './OverlayControls.jsx';
class App extends Component {
    constructor(props) {
        super(props);
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

export default App;

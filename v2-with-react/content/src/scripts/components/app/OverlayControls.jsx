/**
 * Created by maxit on 4/24/2016.
 */
import React, {Component} from 'react';

class OverlayControls extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="holder-controls">
                <div className="clip-bg"></div>
                <div className="inner-holder">
                    <button className="btn minimize">-</button>
                    <div className="file-selector">
                        <label for="file">Select your media file</label>
                        <input type="file" name="file" id="file"/>
                    </div>
                    <div className="holder-media-layers">
                        <div className="media-layer">
                            <div className="opacity-selector">
                                <label for="opacity">Set your overlay opacity: <span
                                    id="opacity-value">100</span>%</label>
                                <input type="range" max="100" min="0" name="opacity" id="opacity" value="100"/>
                            </div>
                            <button className="btn remove">
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OverlayControls;

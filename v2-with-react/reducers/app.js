/**
 * Created by maxit on 4/24/2016.
 */
import {TOGGLE_CONTROLS} from '../actions';
const initialState = {
    controlsShowing: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_CONTROLS:
            return {
                ...state,
                controlsShowing: !state.controlsShowing
            };
        default:
            return state;
    }
};
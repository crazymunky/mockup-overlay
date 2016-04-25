/**
 * Created by maxit on 4/24/2016.
 */
const initialState = {
    medias: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MEDIA':
            return [...state.medias, {
                src: action.src
            }];
        default:
            return state;
    }
};
/**
 * Created by MunKy on 4/28/2016.
 */
export const ADD_MEDIA = 'ADD_MEDIA';
export const TOGGLE_CONTROLS = 'TOGGLE_CONTROLS';

export function addMedia(media) {
    return {
        type: ADD_MEDIA,
        media
    }; 
}

export function toggleControls() {
    return {
        type: TOGGLE_CONTROLS
    };
}
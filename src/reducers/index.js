import { SET_SPACES, LOG_IN, LOG_OUT, SEE_MORE } from '../actions/index';
import { data } from '../data/data'

const initialState = {
    spaces: data,
    loggedIn: false,
    spaceDetails: ''
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SPACES:
            return {
                ...state,
                spaces: []
            }
        case LOG_IN:
            return {
                ...state,
                loggedIn: true
            }
        case LOG_OUT:
            return {
                ...state,
                loggedIn: false
            }
        case SEE_MORE:
            return {
                ...state,
                spaceDetails:action.payload
            }
        default:
            return state;
    }
}

export default reducer;
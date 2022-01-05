import { SET_SPACES, LOG_IN, LOG_OUT} from '../actions/index';

const initialState = {
    spaces: [],
    loggedIn: false,
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SPACES:
            return {
                ...state,
                spaces: action.payload
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
        default:
            return state;
    }
}

export default reducer;
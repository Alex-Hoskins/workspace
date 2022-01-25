import { SET_SPACES, LOG_IN, LOG_OUT, ADD_USER_SPACE} from '../actions/index';

const initialState = {
    spaces: [],
    loggedIn: false,
    userSpaces: []
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
        case ADD_USER_SPACE:
            console.log('hello form reducer', action.payload)

            return {
                ...state,
                userSpaces: [...state.userSpaces, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;
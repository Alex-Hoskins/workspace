import { SET_SPACES, LOG_IN, LOG_OUT, ADD_USER_SPACE, FILTER_SPACES} from '../actions/index';

const initialState = {
    spaces: [],
    loggedIn: false,
    userSpaces: [],
    filterSpaces: []
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SPACES:
            return {
                ...state,
                spaces: action.payload,
                filterSpaces: action.payload
            }
        case FILTER_SPACES:
                let new_filtered_spaces = []
                state.spaces.map(s=>{
                    if(s.workspace_price<=action.payload){
                        new_filtered_spaces.push(s)
                    }
                })
                return {
                    ...state,
                    filterSpaces: new_filtered_spaces
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
            return {
                ...state,
                userSpaces: [...state.userSpaces, action.payload]
            }
        default:
            return state;
    }
}

export default reducer;
import { SET_SPACES } from '../actions/index';

const initialState = {
    spaces: [],
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_SPACES:
            return {
                ...state,
                spaces: []
            }
        default:
            return state;
    }
}

export default reducer;
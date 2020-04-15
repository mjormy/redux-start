import * as actionType from '../actions';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    //const newState = Object.assign({}, state);
    switch ( action.type ) {
        case actionType.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})
            }
        case actionType.DELETE_RESULT:
            const updatedArray = state.results.filter(result => result.id !== action.resultElemenId);
            return {
                ...state,
                results: updatedArray
            }
        
        default:
            return state;
    }
};

export default reducer;


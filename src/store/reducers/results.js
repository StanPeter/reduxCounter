import * as actionTypes from "../action";

const initialState = {
    results: []
};

const resultReducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.STORECOUNTER:
            return {
                ...state,
                results: [...state.results, {value: action.counter, id: new Date()}]
            }
        case actionTypes.DELETECOUNTER:
            const results = state.results.filter((result) => result.id !== action.resultId);
            return {
                ...state,
                results: results
            }
    }
    return state;
}

export default resultReducer;
import * as actionTypes from "./action";

const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADDITION:
            return {
                ...state,
                counter: state.counter + action.value
            }
        case actionTypes.SUBSTRACTION:
            return {
                ...state,
                counter: state.counter - action.value
            }
        case actionTypes.STORECOUNTER:
            return {
                ...state,
                results: [...state.results, {value: state.counter, id: new Date()}]
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

export default reducer;
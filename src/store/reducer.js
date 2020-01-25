const initialState = {
    counter: 0,
    results: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return {
                ...state,
                counter: state.counter + 1
            }
        case "DECREMENT":
            return {
                ...state,
                counter: state.counter - 1
            }
        case "ADDITION":
            return {
                ...state,
                counter: state.counter + action.value
            }
        case "SUBSTRACTION":
            return {
                ...state,
                counter: state.counter - action.value
            }
        case "STORECOUNTER":
            console.log(state.results);
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})
            }
        case "DELETECOUNTER":
            console.log("deletecounter");
    }
    return state;
}

export default reducer;
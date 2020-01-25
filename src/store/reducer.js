const initialState = {
    counter: 0
};

const reducer = (state = initialState, action) => {
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === "DECREMENT") {
        return {
            counter: state.counter - 1
        }
    } else if (action.type === "ADDITION") {
        return {
            counter: state.counter + action.value
        }
    } else if (action.type === "SUBSTRACTION") {
        return {
            counter: state.counter - action.value
        }
    }
    return state;
}

export default reducer;
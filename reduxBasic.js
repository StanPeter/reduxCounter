const redux = require("redux"); //stands alone library
const createStore = redux.createStore;

//initial state
const initialState = {
    counter: 0
};

//Reducer
const reducer = (state = initialState, action) => {
    if(action.type === "INC_BY_ONE") {
        return {
            ...state,
            counter: state.counter += 1
        };
    } if(action.type === "ADD_INC") {
        return {
            ...state,
            counter: state.counter += action.value
        };
    } else {
        return state;
    }
};

//Store
const store = createStore(reducer);
// const store = createStore((state = {counter: 0}, action) => state); //the same
console.log(store.getState());

//Subsription shows whenever a state is updated 
store.subscribe(() => {console.log("Change: ", store.getState())});

//Dispatchijng Action
store.dispatch({type: "INC_BY_ONE"});
console.log(store.getState());

store.dispatch({type: "ADD_INC", value: 10});
console.log(store.getState());

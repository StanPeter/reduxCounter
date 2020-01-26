import React, { Component } from "react";
import { connect } from "react-redux";

import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/action";

class Counter extends Component {
    state = {
        counter: 0
    }
    render () {        
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onAddition}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubstraction}  />

                <button onClick={this.props.onStoreCounter} style={{display: "block", margin: "0 auto"}}>Add Number</button>

                <ul>
                {this.props.resultCtr.map((result) => (
                    <li onClick={() => this.props.onDeleteCounter(result.id)} key={result.id}>{result.value}</li>
                ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter,
        resultCtr: state.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: actionTypes.INCREMENT}),
        onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
        onAddition: () => dispatch({type: actionTypes.ADDITION, value: 5}),
        onSubstraction: () => dispatch({type: actionTypes.SUBSTRACTION, value: 5}),
        onStoreCounter: () => dispatch({type: actionTypes.STORECOUNTER}),
        onDeleteCounter: (resultId) => dispatch({type: actionTypes.DELETECOUNTER, resultId: resultId})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
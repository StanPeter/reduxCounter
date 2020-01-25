import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }
    render () {        
        console.log(this.props.results);
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
                    <li key={result.id}>{result}</li>
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
        onIncrement: () => dispatch({type: "INCREMENT"}),
        onDecrement: () => dispatch({type: "DECREMENT"}),
        onAddition: () => dispatch({type: "ADDITION", value: 5}),
        onSubstraction: () => dispatch({type: "SUBSTRACTION", value: 5}),
        onStoreCounter: () => dispatch({type: "STORECOUNTER"}),
        onDeleteCounter: () => dispatch({type: "DELETECOUNTER"})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
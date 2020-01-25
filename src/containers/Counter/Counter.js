import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    console.log(this.props);
    console.log(this.props.onAddition);
    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={() => this.props.onAddition}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddition}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubstraction}  />
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({type: "INCREMENT"}),
        onDecrement: () => dispatch({type: "DECREMENT"}),
        onAddition: () => dispatch({type: "ADDITION", value: 5}),
        onSubstraction: () => dispatch({type: "SUBSTRACTION", value: 5})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
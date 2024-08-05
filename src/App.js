import React, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  handleIncrement = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };
  handleDecrement = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1
    }));
  };
  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default App;

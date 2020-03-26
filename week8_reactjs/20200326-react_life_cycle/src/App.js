import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0
    }
  }

  plusOne = () => {
    return this.setState( {value: (this.state.value) + 1} );
  }
  
  minusOne = () => {
    return this.setState( {value: (this.state.value) - 1} );
  }

  resetValue = () => {
    return this.setState( {value: 0} );
  }

  render () {
    return (
      <div className="App">
        <p>Counter: {this.state.value}</p>
        <button className="App__button" onClick={this.plusOne}>plus 1</button>
        <button className="App__button" onClick={this.minusOne}>minus 1</button>
        <button className="App__button" onClick={this.resetValue}>reset</button>
      </div>
    );  
  }
}

export default App;

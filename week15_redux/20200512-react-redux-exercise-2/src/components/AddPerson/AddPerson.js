import React from 'react';

import './AddPerson.css';

class addPerson extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: 0
    };
  }

  // onChangeInputName = (name) => {
  //   const inputName = name;
  //   this.setState(() => {
  //     return {name: inputName }
  //   })
  // }

  // onChangeInputAge = (age) => {
  //   const inputAge = age
  //   this.setState(() => {
  //     return {age: inputAge }
  //   })
  // }
  

  render() {
    return (
      <div className="AddPerson">
        Name: <input type="text" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} />
        Age: <input type="number" value={this.state.age} onChange={(e) => this.setState({age: e.target.value})} />
        <br/>
        <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button>
      </div>
    );
  }
}

export default addPerson;
import React, { Component } from 'react'

export default class Profile extends Component {
  
  state = { studentList:
    [{
      id: 1,
      name: "Nat",
      age: 25
    },
    {
      id: 2,
      name: "Sonter",
      age: 19
    },
    {
      id: 3,
      name: "Wichai",
      age: 20
    }
  ]}
  
  render() {
    const studentList = this.state.studentList;
    const id = this.props.match.params.id;
    const idx = id-1


    return (
      <div>
        <h1>Name: {studentList[idx].name}</h1>
      <h2>Age: {studentList[idx].age}</h2>
      </div>
    )
  }
}

import React, {Fragment} from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      arr: ["a", "b", "c", "d"],
      text: "",
      name: ""
    }

    // this.deleteList = this.deleteList.bind(this);
    this.addName = this.addName.bind(this)
  }

  plusOne = () => {
    this.setState( {value: (this.state.value) + 1} );
  }
  
  minusOne = () => {
    this.setState( {value: (this.state.value) - 1} );
  }

  resetValue = () => {
    this.setState( {value: 0} );
  }

  formInput = (e) => {
    let newInput = e.target.value
    this.setState( {text: newInput} );
    console.log(this.state.text);
  }

  // สร้าง variable มารับ arr ใหม่ ไม่งั้นจะเป็นการแก้ข้อมูลใน state
  arrayPush = (e) => {
    e.preventDefault();
    let item = this.state.text;
    let newArr = this.state.arr;
    // let newArr = [...this.state.arr, item];
    newArr.push(item);
    this.setState( {
      arr: newArr, 
      text: ""
    } );
  }

  addName = (e) => {
    e.preventDefault();
    this.setState( {
      name: this.state.text,
      text: ""
    } );
  }

  // deleteList = (e) => { 
  //   e.preventDefault();
  //   let newArr = this.state.arr;
  //   newArr.filter(function(item, index) {
  //     return item !== this.state.text
  //   })
  //   this.setState( {
  //     arr: newArr
  //   } )
  // }


  
  render () {
    return (
      <div className="App">
        <p>Counter: {this.state.value}</p>
        <button className="App__button" onClick={this.plusOne}>plus 1</button>
        <button className="App__button" onClick={this.minusOne}>minus 1</button>
        <button className="App__button" onClick={this.resetValue}>reset</button>
        <br />
        
        <form action="#">
          <input type="text" onChange={this.formInput} value={this.state.text} />
          <button className="App__button" onClick={this.arrayPush}>Add List</button>
          <button className="App__button" onClick={this.addName}>Add Name</button>
        </form>

        <ul>
          {this.state.arr.map( (item, index) => {
            return (
              <Fragment>
                <li key={index}>
                  {item}
                  <button className="App__button" >delete</button>
                </li>
              </Fragment>
            )
          })}          
        </ul>

        <p>name: {this.state.name} </p>
        

      </div>
    );  
  }
}

export default App;

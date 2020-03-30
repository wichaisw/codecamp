import React from 'react';
import './App.css';
import _ from 'lodash';
import MyTodoList from './Components/MyTodoList';

import TabComponents from './Components/TabComponents';
import Tab from './Components/Tab';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      editValue: "",
      editId: "",
      todoList: [],

      tabContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quae magni quaerat, ut, a reprehenderit voluptatem amet eveniet perspiciatis neque aliquid impedit unde asperiores cupiditate explicabo cum excepturi quos pariatur!",
    }
  }
  
  // fucntion for onChange Input,EditText, EditId using computed property
  onChange = (state, targetValue) => {
    this.setState( {
      [state]: targetValue
    } );
  }

  // onChangeInput = (e) => {
  //   this.setState( {
  //     inputValue: e.target.value
  //   } )
  // }

  // onChangeEditText = (e) => {
  //   this.setState( {
  //     editValue: e.target.value
  //   } )
  // }

  // onChangeEditId = (e) => {
  //   this.setState( {
  //     editId: Number(e.target.value)
  //   } )
  // }

  addTodoList = () => {
    const inputValue = this.state.inputValue;
    const todoList = this.state.todoList;
    const newTodoObj = {
      id: _.uniqueId(),
      task: inputValue
    }

    this.setState( {
      todoList: [newTodoObj, ...todoList],
      inputValue: "",
    } )
    
  }

  deleteTodoList = (targetId) => {
    const updatedTodoList = this.state.todoList.filter( (item) => targetId !== item.id )
    this.setState( {
      todoList: updatedTodoList
    } )
  }

  editItemById = () => {
    const targetId = this.state.editId
    const editValue = this.state.editValue

    console.log("edit")

    let updatedTodoList = this.state.todoList.map( (todoItem) => {
      if(targetId == todoItem.id) {
        return {
          id: todoItem.id,
          task: editValue
        }
      } else {
        return todoItem
      }
    })

    this.setState( {
      todoList: updatedTodoList
    } )
  }

  
  render() {
    // const { inputValue, todoList } = this.state;

    return (
      <div className="container">
        <TabComponents >
          <Tab tabContent={this.state.tabContent} />
        </TabComponents>

        <div className="row"> 
          <h1>To-do List</h1>
            <input type="text" onChange={(e) => this.onChange("inputValue", e.target.value)} value={this.state.inputValue} placeholder="Enter to-do List" />
            <button onClick={this.addTodoList}>Add</button>
            <br />

            <input type="text" onChange={(e) => this.onChange("editValue", e.target.value)} value={this.state.editValue} placeholder="Edit task here" />
            <input type="text" onChange={(e) => this.onChange("editId", e.target.value)} value={this.state.editId} placeholder="enter id" />
            <button onClick={ this.editItemById }>Edit</button>

            <ul>
              <MyTodoList todoList={this.state.todoList} deleteTodoList={this.deleteTodoList} />
            </ul>
        </div>
      </div>
    );
  }
}

export default App;

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
      todoList: [],

      tabContent: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab, quae magni quaerat, ut, a reprehenderit voluptatem amet eveniet perspiciatis neque aliquid impedit unde asperiores cupiditate explicabo cum excepturi quos pariatur!",
    }

    this.deleteTodoList = this.deleteTodoList.bind(this)
  }
  
  onChangeInput = (e) => {
    this.setState( {
      inputValue: e.target.value
    } )
  }

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

  
  render() {
    // const { inputValue, todoList } = this.state;

    return (
      <div className="container">
        <TabComponents >
          <Tab tabContent={this.state.tabContent} />
        </TabComponents>

        <div className="row"> 
          <h1>To-do List</h1>
            <input onChange={this.onChangeInput} value={this.state.inputValue} placeholder="Enter to-do List" />
            <button onClick={this.addTodoList}>Add</button>
            <ul>
              <MyTodoList todoList={this.state.todoList} deleteTodoList={this.deleteTodoList}/>
            </ul>
        </div>
      </div>
    );
  }
}

export default App;

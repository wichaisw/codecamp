import React from 'react';
import './App.css';
import TodoList from './Components/TodoList'


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todoList: [],
    }
  }
  
  onChangeInputValue = (e) => {
    this.setState({
      inputValue: e.target.value
    });
  }

  addTodoItem = () => {
    const inputValue = this.state.inputValue;
    const oldTodoList = this.state.todoList;
    
    this.setState({ 
      todoList: [...oldTodoList, inputValue]
    });
    
  }



  
  render() {
    const { inputValue, todoList } = this.state;

    return (
      <div className="container">
        <div className="row"> 
          <h1>Todo List</h1>
          <input placeholder="Enter Todo item" onChange={this.onChangeInputValue} value={inputValue} className="form-control col-10 App" />
          <button type="button" onClick={this.addTodoItem}  className="col-2"> Add </button>

                  <TodoList todoList={todoList} />

        </div>
      </div>
    );
  }
}

export default App;

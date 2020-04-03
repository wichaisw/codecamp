import React, {useState} from 'react';
import _ from 'lodash';
import './TodoList.css'

function TodoList() {

  const [inputValue, setInputValue] = useState("");
  const [inProgressTask, setInProgressTask] = useState([]);
  const [finishedTask, setFinishedTask] = useState([]);

  function addTodo() {
    const todoObj = [...inProgressTask, { checked: false, task: inputValue }]
    setInProgressTask(todoObj);
    setInputValue("");
  }

  function onChangeInProgress(target) {
    const newInProgressTask = [...inProgressTask]
    const targetIndex = newInProgressTask.findIndex(item => item.task === target.nextSibling.textContent)
    console.dir(target.nextSibling.textContent)
    console.dir(target.checked)
    console.dir(target)
    newInProgressTask[targetIndex] = { checked: target.checked, task: target.nextSibling.textContent }
    setInProgressTask(newInProgressTask)
  }

  function onChangeFinished(target) {
    const newFinishedTask = [...finishedTask]
    const targetIndex = newFinishedTask.findIndex(item => item.task === target.nextSibling.textContent)
    console.dir(target.nextSibling.textContent)
    console.dir(target.checked)
    newFinishedTask[targetIndex] = { checked: target.checked, task: target.nextSibling.textContent }
    setFinishedTask(newFinishedTask)
  }

  function moveInProgressToFinished() {
    const moveToFinished = inProgressTask.filter( item => item.checked === true)
    const stillInProgressTask = inProgressTask.filter( item => item.checked === false)
    setFinishedTask((finishedTask) => [...finishedTask, ...moveToFinished])
    setInProgressTask(stillInProgressTask);
  }

  function moveFinishedToInProgress() {
    const moveToInProgress = finishedTask.filter( item => item.checked === false)
    const stayFinishedTask = finishedTask.filter( item => item.checked === true )
    setInProgressTask((inProgressTask) => [...inProgressTask, ...moveToInProgress])
    setFinishedTask(stayFinishedTask);
  }

  const displayInProgressTask = inProgressTask.map( (item) => {
    return <li><input type="checkbox" checked={item.checked} onChange={(e) => onChangeInProgress(e.target)}/>{item.task}</li>
  })

  const displayFinishedTask = finishedTask.map( (item) => {
    return <li><input type="checkbox" checked={item.checked} id={_.uniqueId()} onChange={(e) => onChangeFinished(e.target)}/>{item.task}</li>
  })

  return(
    <div>
      <div className="todolist">

        <section>
          <div className="todolist__box">
            <ul>
              {displayInProgressTask}
            </ul>
          </div>
          <input type="text" onChange={ (e) => setInputValue(e.target.value) } value={inputValue} placeholder="add a to-do list"></input>
          <button onClick={addTodo}>Add</button>
        </section>
        
        <div className="todolist__transfer">
          <button onClick={ moveInProgressToFinished }> ► </button>
          <br />
          <br />
          <button onClick={ moveFinishedToInProgress }> ◄ </button>
        </div>

        <section>
          <div className="todolist__box">
            <ul>
              {displayFinishedTask}
            </ul>
          </div>
        </section>

      </div>
    </div>
  )
}

export default TodoList;
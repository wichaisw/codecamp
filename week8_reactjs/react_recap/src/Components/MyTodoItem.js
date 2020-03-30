import React from 'react'

class MytodoItem extends React.Component {
  render() {
    const id = this.props.id
    const task = this.props.task

    return (
      <li key={id}>
        id: {id} || {task}
        <button onClick={() => this.props.deleteTodoList(id)}>DELETE</button>
      </li>
    )
  }
}

export default MytodoItem;
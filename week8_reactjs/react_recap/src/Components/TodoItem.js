import React from 'react';

class TodoItem extends React.Component {
  render() {
    return(
      <li>{this.props.item}</li>
    )
  }
}

export default TodoItem;
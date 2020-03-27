import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Resume extends Component {
  render() {
    return (
      <div>
        <h1> this is resume page</h1>
        <Link to="./">Homepage</Link>
      </div>
    )
  }
}

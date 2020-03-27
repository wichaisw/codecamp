import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Homepage extends Component {
  render() {
    return (
      <div>
        <h1> This is homepage</h1>
        <Link to="./resume">Resume</Link><br/>
        <Link to="./app">App</Link><br/>
        <Link to="./facebook">Facebook</Link><br/>
      </div>
    )
  }
}

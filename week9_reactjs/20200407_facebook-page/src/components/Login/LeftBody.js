import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../style/Log-in-page/LeftBody.css'

export default class LeftBody extends Component {
  render() {
    return (
      <Col className="login__leftbody">
        <Row className="login__row-in-left">Recent logins</Row>
        <Row className="login__row-in-left">Click your picture or add an account.</Row>
        <Row className="login__row-in-left">
          <a href="#">
            <img src="https://scontent.fbkk5-3.fna.fbcdn.net/v/t1.0-1/90126695_2446533615596010_6924860502455615488_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_ohc=AxxBFNKl4GcAX9lubzC&_nc_ht=scontent.fbkk5-3.fna&oh=e071f9a94655957bd00f582ddd5b5cbf&oe=5EB1E41A" alt="profile-pic"/>
            <div>Wichai</div>
          </a>
        </Row>
      </Col>
    )
  }
}

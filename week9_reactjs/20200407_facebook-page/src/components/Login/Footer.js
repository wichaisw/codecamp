import React, { Component } from 'react';
import { Row, Col } from 'antd'
import '../../style/Log-in-page/Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <Col className="login__footer">
          <Row className="login__row-in-footer">
            <ul className="login__language-list">
            <li>English (UK)</li>
            <li>ภาษาไทย</li>
            <li>日本語</li>
            <li>中文(简体)</li>
            <li>Tiếng Việt</li>
            <li>Français (France)</li>
            <li>Deutsch</li>
            <li>Русский</li>
            <li>Español</li>
            <li>Português (Brasil)</li>
            <li>Italiano</li>
            <li><button>+</button></li>
            </ul>
        </Row>
        <Row className="login__row-in-footer">
          <ul className="login__services-list">
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Log In</a></li>
            <li><a href="#">Messenger</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Lite</a></li>
            <li><a href="#">Watch</a></li>
            <li><a href="#">People</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Page categories</a></li>
            <li><a href="#">Places</a></li>
            <li><a href="#">Games</a></li>
            <li><a href="#">Locations</a></li>
            <li><a href="#">Marketplace</a></li>
            <li><a href="#">Groups</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Local</a></li>
            <li><a href="#">Fundraisers</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Create ad</a></li>
            <li><a href="#">Create Page</a></li>
            <li><a href="#">Developers</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Cookies</a></li>
            <li><a href="#">AdChoices</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Help</a></li>
            <li><a href="#">Settings</a></li>
          </ul>
        </Row>
        <Row className="login__row-in-footer">Facebook © 2020</Row>
        </Col>
      </footer>
    )
  }
}

import React, { Component } from 'react';
import { Row, Col } from 'antd';
import '../../style/Log-in-page/Navbar.css';

export default class NavBar extends Component {
  render() {
    return (
      <Row className="login__navbar">
        <Col className="login__top">
          <div>
            <a href="https://www.facebook.com/">
            <i class="fb_logo img sp_Vgu5hh_52BR_1_5x sx_13437d"><u>Fakebook</u></i>
            </a>
          </div>

          <div>
            
            <table>
              <tr>
                <td>Email or phone</td>
                <td>Password</td>
              </tr>
              <tr>
                <td><input type="text" /></td>
                <td><input type="text" /></td>
                <td><button>Log In</button></td>
              </tr>
              <tr>
                <td></td>
                <td>Forgotten account?</td>
              </tr>
            </table>

          </div>
          
        </Col>
      </Row>
    )
  }
}

import React, { Component } from 'react';
import Navbar from './Navbar';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import Footer from './Footer';
import '../../style/Log-in-page/LogInPage.css';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-body__container">
          <div className="main-body__background">
            <div className="main-body">
              <LeftBody />
              <RightBody />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

import React from 'react';
import '../../style/Home-page/HomeNav.css';
import { Col, Row }  from 'antd';

export default function HomeNav() {
  return (
    <Row className="home-nav">
      <Col>
        <div className="home-nav__logo _19eb" data-gt='{"chrome_nav_item":"logo_chrome"}' href="https://www.facebook.com/?ref=logo">
          <span className=" _2md"></span>
        </div>
      </Col>
      <Col className="home-nav__search-box">
        <input type="text" className="home-nav__search-input" />
      </Col>
      <Col></Col>
    </Row>
  )
}

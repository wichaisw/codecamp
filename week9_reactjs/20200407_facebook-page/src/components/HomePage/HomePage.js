import React, { Component } from 'react';
import HomeNav from './HomeNav';
import HomeBodyCenter from './HomeBodyCenter';
import HomeBodyLeft from './HomeBodyLeft';
import HomeBodyRight from './HomeBodyRight';
import { Col, Row } from 'antd';

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Col>
          <Row><HomeNav /></Row>
          <Row>
            <Col><HomeBodyLeft /></Col>
            <Col><HomeBodyCenter /></Col>
            <Col><HomeBodyRight /></Col>
          </Row>
        </Col>
      </div>
    )
  }
}

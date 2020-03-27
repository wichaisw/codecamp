import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import './Homepage.css';
import { Button, Layout } from 'antd';
import { Row, Col, Divider } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

export default class Homepage extends Component {
  render() {
    return (
      <>
        <Layout>
            <Header><h1> This is homepage</h1></Header>
          <Layout>
              <Sider><Link to="./app">App</Link></Sider>
            <Content>
              <Link to="./resume">Resume</Link><br />
              <Button type="primary" className="button"> <Link to="./facebook">Facebook</Link><br /> </Button>
            </Content>
          </Layout> 
        </Layout>
      </>
    )
  }
}

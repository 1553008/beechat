import React, { Component } from "react";
import logo from "./logo.svg";
import { hot } from "react-hot-loader";
import "./App.css";
import SignupPage from "./components/SignupPage/SignupPage";
import { Layout, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import reduceReducers from "reduce-reducers";
const { Header, Footer, Content } = Layout;
class App extends Component {
  render() {
    return (
      //Layout
      <Router>
        <Layout>
          {/* Header */}
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["2"]}
              style={{ lineHeight: "64px" }}
            >
              <Menu.Item key="1">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/login">Login</Link>
              </Menu.Item>
            </Menu>
          </Header>
          {/* Content */}
          <Content style={{}}>
            <Route path="/login" component={SignupPage} />
          </Content>

          <Footer style={{ textAlign: "center" }}>
            Beechat ©2018 Created by Dung Lam
          </Footer>
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);

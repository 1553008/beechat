import React, { Component } from "react";
import logo from "./logo.svg";
import { hot } from "react-hot-loader";
import "./App.css";
import RegisterForm from "./components/RegisterForm";
class App extends Component {
  render() {
    return (
      <div className="App">
        <RegisterForm />
      </div>
    );
  }
}

export default hot(module)(App);

import React from "react";
import { Component } from "react";
import RegisterForm from "../RegisterForm/RegisterForm";
import background from "./background.jpeg";
export default class SignupPage extends Component {
  render() {
    return (
      <div
        style={{
          minHeight: "100vh",
          maxHeight: "100vh",
          position: "relative"
        }}
      >
        <img
          src={background}
          alt={`Background`}
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            filter: `brightness(0.6)`,
            position: "absolute",
            width: "100%",
            height: "100%"
          }}
        />
        <RegisterForm />
      </div>
    );
  }
}

import React, { Component } from "react";
import { Form, Input, Button, Divider } from "antd";
import styles from "./RegisterForm.module.css";
class RegisterForm extends Component {
  /**
   * Handle submission of Register Form. Make the call to Register API
   * @param {Event} e
   */
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log(`Received values of form ${values}`);
      }
    });
  };
  /**
   * Validator to compare the consistency between password1 and password2
   * @function compareToFirstPassword
   */
  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value !== form.getFieldValue("password1")) {
      callback("Two passwords are not consistent");
    }
    callback();
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: {
          span: 8
        },
        sm: {
          span: 8
        }
      },
      wrapperCol: {
        xs: {
          span: 16
        },
        sm: {
          span: 16
        }
      }
    };
    const customStyles = this.props.styleClass ? this.props.styleClass : "";
    console.log(customStyles);
    return (
      <div className={customStyles}>
        <Form className={styles.form} onSubmit={this.handleSubmit}>
          <h3> Register </h3> <Divider />
          <Form.Item {...formItemLayout} label="E-mail" required={true}>
            {" "}
            {getFieldDecorator("email", {
              rules: [
                {
                  type: "email",
                  message: "This is not an E-mail!"
                },
                {
                  required: true,
                  message: "Please Input your E-mail!"
                }
              ]
            })(<Input />)}{" "}
          </Form.Item>{" "}
          <Form.Item {...formItemLayout} label="Password" required>
            {" "}
            {getFieldDecorator("password1", {
              rules: [
                {
                  required: true,
                  message: "Please Input your password!"
                }
              ]
            })(<Input type="password" />)}{" "}
          </Form.Item>{" "}
          <Form.Item {...formItemLayout} label="Confirm password" required>
            {" "}
            {getFieldDecorator("password2", {
              rules: [
                {
                  required: true,
                  message: "Please Retype your password!"
                }
              ]
            })(<Input type="password" />)}{" "}
          </Form.Item>{" "}
          <Form.Item
            style={{
              textAlign: "center"
            }}
          >
            <Button type="primary" htmlType="submit" size="large">
              Register{" "}
            </Button>{" "}
          </Form.Item>{" "}
        </Form>{" "}
      </div>
    );
  }
}
export default Form.create()(RegisterForm);

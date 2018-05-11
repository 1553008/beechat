import React, { Component } from "react";
import { Form, Input } from "antd";
class RegisterForm extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 8 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 8 },
        sm: { span: 8 }
      }
    };
    return (
      <Form>
        <Form.Item label="E-mail" {...formItemLayout} />

        <Form.Item label="Password" {...formItemLayout}>
          <Input id="password" type="password" />
        </Form.Item>
      </Form>
    );
  }
}
export default Form.create()(RegisterForm);

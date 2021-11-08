import React from 'react';
import {
    Form,
    Input,
    Checkbox,
    Button
} from 'antd';

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

function RegisterForm(){

    const [form] = Form.useForm();

    const onFinish = (values) => {
    console.log('Received values of form: ', values);
    };

    return (
        <Form
            {...formItemLayout}
            form={form}
            name="register"
            onFinish={onFinish}
            
        scrollToFirstError
        >
        
        <Form.Item
            name="email"
            label="E-mail"
            rules={[
                {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                },
                {
                    required: true,
                    message: 'Please input your E-mail!',
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="password"
            label="Password"
            rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
            ]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>

        <Form.Item
            name="nickname"
            label="Nickname"
            tooltip="What do you want others to call you?"
            rules={[
                {
                    required: true,
                    message: 'Please input your nickname!',
                    whitespace: true,
                },
            ]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            name="bio"
            label="Bio"
            rules={[
                {
                    required: false,
                },
            ]}
        >
            <Input.TextArea showCount maxLength={100} />
        </Form.Item>

        <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
                {
                    validator: (_, value) =>
                        value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
                },
            ]}
            {...tailFormItemLayout}
        >
            <Checkbox>
                I have read the <a href="">agreement</a>
            </Checkbox>
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
            Register
            </Button>
        </Form.Item>
        </Form>
    );
}

export default RegisterForm;
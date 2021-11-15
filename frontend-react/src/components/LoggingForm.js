import { Form, Input, Button, Checkbox, Layout } from 'antd';
import { Link } from 'react-router-dom';

const { Content, Footer } = Layout;

function LoggingForm(props){

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function formHandler(values){
        
        const loginCredentials = {
            "email": values.email,
            "password": values.password
        }

        //To test obj in console:
        //console.log('Success', loginCredentials);

        props.onLogin(loginCredentials)

    }

    return (
        <>
            <Layout>
                <Content>
                    <Form
                        name="basic"
                        labelCol={{ span: 8 }}
                        wrapperCol={{ span: 16 }}
                        initialValues={{ remember: true }}
                        onFinish={formHandler}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[{ required: true, message: 'Sisesta oma email!' }]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Sisesta oma parool!' }]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button type="primary" htmlType="submit">
                            Login
                            </Button>
                        </Form.Item>
                    </Form>
                    <Link to="register">
                        <Button type="primary">Register</Button>
                    </Link>
                </Content>
                <Footer/>
            </Layout>
        </>
    )

}

export default LoggingForm
import RegisterForm from "../components/RegisterForm";
import { Button } from 'antd';


function Register(){

    return (
        <>
            <RegisterForm />
            <p>or <Button type="link">login</Button> instead</p>
        </>
        
    )
}

export default Register
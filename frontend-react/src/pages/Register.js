import RegisterForm from "../components/RegisterForm";
import { React } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';


function Register(){

    function registerUser (registerDetails) {
        
        const requestOptions = {
            firstName: registerDetails.firstName,
            lastName: registerDetails.lastName,
            email: registerDetails.email,
            password: registerDetails.password
        };

        fetch('http://localhost:8081/api/auth/signup', {
                method: 'POST',
                body: JSON.stringify(requestOptions),
                headers:{
                    'Content-type' : 'application/json'
                }
            }).then(res=>{return res.json()})
    }

    return (
        <>
            <RegisterForm onRegister={ registerUser }/>
            <p>or 
                <Link to="login">
                    <Button type="link">login</Button>
                </Link> instead</p>
        </>
        
    )
}

export default Register
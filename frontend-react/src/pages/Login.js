import LoggingForm from "../components/LoggingForm";
import { Context } from "../store";
import { useContext, useState, useRef, useEffect } from "react";
import { loginUser } from "../store/actions";


function Login(){
    const [state, dispatch] = useContext(Context);
    let userData

    function authenticateUser(loginCredentials){

        const requestOptions = {
            email: loginCredentials.email,
            password: loginCredentials.password
        };

        userData = requestOptions

        fetch('http://localhost:8081/api/auth/login', {
                method: 'POST',
                body: JSON.stringify(requestOptions),
                headers:{
                    'Content-type' : 'application/json'
                }
            }).then(res=>{return res.json()}).then(data=>console.log("Sisselogitud kasutaja: ", data.firstName, data.token))
    }; 

    dispatch(loginUser(userData))
    const user = state.auth.token
    console.log(user)

    

    return (
        <>
            <LoggingForm onLogin={ authenticateUser }/>
        </>
        
    )
}

export default Login
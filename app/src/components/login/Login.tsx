import { RegisterWrapper } from "../../components/login-wrapper/LoginWrapper.tsx";
import styles from './Login.module.scss';
import axios from 'axios';
import { Alert } from "@mui/material";
import { useState } from "react";
import { LoginWrapper } from "../login-wrapper/LoginWrapper.tsx";


export const Login : React.FC = () => {
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const Login = async (email : String, password : String) => {
        setIsLoading(true);
        const res : Object = await axios.post('https://mk-it-assignment-be.vercel.app/api/user/login', 
        {
            email,
            password
        })
        .catch((error) => {
            setError(error.response.data);
            setTimeout(() => {
                setError('');
            }, 5000);
            setIsLoading(false);
        })
        if(res.status == 200){
            localStorage.setItem('user', JSON.stringify(res.data));
            setIsLoading(false);
            window.location.href="/"
        }
        
    }
    return(
        <div>
            <div className={styles.wrapper}>
                <LoginWrapper isLoading={isLoading} onLogin={(email : String, password : String) => Login(email, password)}/>
            </div>
            {   
                error &&
                <div className={styles.error}>
                    <Alert severity="error">{error}</Alert>
                </div>
            }
        </div>
    )
}
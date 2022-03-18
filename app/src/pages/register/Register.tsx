import { RegisterWrapper } from "../../components/register-wrapper/RegisterWrapper.tsx";
import styles from './Register.module.scss';
import axios from 'axios';
import { Alert } from "@mui/material";
import { useState } from "react";


export const Register : React.FC = () => {
    const [error, setError] = useState('');

    const Register = async (username : String, email : String, password : String) => {
        const res : Object = await axios.post('https://mk-it-assignment-be.vercel.app/api/user/register', 
        {
            username,
            email,
            password
        })
        .catch((error) => {
<<<<<<< HEAD
            setError(error.response.data);
            setTimeout(() => {
                setError('');
            }, 5000);
=======
            console.log(error.response.data);
>>>>>>> master
        })
        if(res.status == 200){
            localStorage.setItem('user', JSON.stringify(res.data));
            window.location.href="/"
        }
        
    }
    return(
        <div>
            <div className={styles.wrapper}>
                <RegisterWrapper onRegister={(username : String, email : String, password : String) => Register(username, email, password)}/>
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
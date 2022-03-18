import { RegisterWrapper } from "../../components/register-wrapper/RegisterWrapper.tsx";
import styles from './Register.module.scss';
import axios from 'axios';


export const Register : React.FC = () => {

    const Register = async (username : String, email : String, password : String) => {
        const res : Object = await axios.post('https://mk-it-assignment-be.vercel.app/api/user/register', 
        {
            username,
            email,
            password
        })
        .catch((error) => {
            console.log(error.response.data);
        })
        if(res.status == 200){
            localStorage.setItem('user', JSON.stringify(res.data));
            window.location.href="/"
        }
        
    }
    return(
        <div className={styles.wrapper}>
            <RegisterWrapper onRegister={(username : String, email : String, password : String) => Register(username, email, password)}/>
        </div>
    )
}
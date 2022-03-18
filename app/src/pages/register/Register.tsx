import { RegisterWrapper } from "../../components/register-wrapper/RegisterWrapper.tsx";
import styles from './Register.module.scss';
import axios from 'axios';


export const Register : React.FC = () => {

    const Register = async (username : String, email : String, password : String) => {
        const res = await axios.post('https://mk-it-assignment-be.vercel.app/api/user/register', 
        {
            username,
            email,
            password
        })
        .catch((error) => {
            console.log(error);
        })
        console.log(res);
    }
    return(
        <div className={styles.wrapper}>
            <RegisterWrapper onRegister={(username : String, email : String, password : String) => Register(username, email, password)}/>
        </div>
    )
}
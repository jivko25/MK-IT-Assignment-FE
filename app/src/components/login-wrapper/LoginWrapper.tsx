import styles from './LoginWrapper.module.scss';
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import Button from '@mui/material/Button'
import { CircularProgress } from '@mui/material';

interface Props{
    onLogin : Function,
    isLoading : Boolean
}

export const LoginWrapper : React.FC<Props> = ({onLogin, isLoading}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <div className={styles.wrapper}>
            <Grid container spacing={3} direction="column">
              <Grid item>
                <TextField
                    label="Email"
                    value={email}
                    onChange={(e) => {setEmail(e.target.value)}}
                    />
              </Grid>
              <Grid item>
                <TextField
                    label="Password"
                    value={password}
                    onChange={(e) => {setPassword(e.target.value)}}
                    type="password"
                    />
              </Grid>
              <Grid item>
                  <Button variant="text" onClick={() => onLogin(email, password)} fullWidth>
                    {
                      isLoading ?
                      <CircularProgress />
                      :
                      "Login"
                    }
                  </Button>
              </Grid>
            </Grid>
        </div>
    )
}
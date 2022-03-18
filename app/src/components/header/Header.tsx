import {Grid, TextField, Typography, Button} from '@mui/material';
import { useState } from 'react';
import styles from './Header.module.scss';



interface Props{
    username : String,
    onSearch : Function,
    onLogin : Function,
    onRegister : Function,
    onLogout : Function
}

export const Header : React.FC<Props> = ({username, onSearch, onLogin, onRegister, onLogout}) => {
    const [searchValue, setSearchValue] = useState('');
    return(
        <div className={styles.wrapper}>
            <Grid container justifyContent={"space-between"}>
              <Grid item xs={3} className={styles.userWrapper}>
                {
                  username != null ?
                  <div className={styles.buttonWrapper}>
                    <Typography variant="h6" className={styles.username}>Welcome {username}</Typography>
                    <Button variant="outlined" onClick={() => onLogout()}>
                        Logout
                      </Button>
                  </div>
                  :
                  <div className={styles.buttonWrapper}>
                    <Button variant="outlined" onClick={() => onLogin()}>
                      Login
                    </Button>
                    <Button variant="outlined" onClick={() => onRegister()}>
                      Register
                    </Button>
                  </div>
                }
              </Grid>
              <Grid item xs={9}>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item xs={10}>
                    <TextField
                      label="Search movie in your list"
                      variant='standard'
                      value={searchValue}
                      onChange={(e) => {setSearchValue(e.target.value)}}
                      className={styles.search}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={2} className={styles.buttonWrapper}>
                      <Button variant="outlined" onClick={() => onSearch()}>
                        Search
                      </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
        </div>
    )
}
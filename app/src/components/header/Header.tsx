import {Grid, TextField, Typography, Button} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';



interface Props{
    username : String,
    onSearch : Function,
    onLogin : Function,
    onLogout : Function
}

export const Header : React.FC<Props> = ({username, onSearch, onLogin, onLogout}) => {
    const [searchValue, setSearchValue] = useState('');
    return(
        <div className={styles.wrapper}>
            <Grid container justifyContent={'flex-end'}>
              <Grid item xs={3} className={styles.userWrapper}>
                {
                  username != null ?
                  <div className={styles.buttonWrapper}>
                    <Typography variant="h6" className={styles.username}>Welcome {username}</Typography>
                  </div>
                  :
                  <div className={styles.buttonWrapper}>
                    <Button variant="outlined" onClick={() => onLogin()}>
                      Login
                    </Button>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                      <Button variant="outlined">
                        Register
                      </Button>
                    </Link>
                  </div>
                }
              </Grid>
              {
                username != null &&
              <Grid item xs={9}>
                <Grid container spacing={3} justifyContent="space-between">
                  <Grid item xs={8}>
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
                  <Grid item xs={2} className={styles.buttonWrapper}>
                  <Button variant="outlined" onClick={() => onLogout()}>
                        Logout
                      </Button>
                  </Grid>
                </Grid>
              </Grid>
              }
            </Grid>
        </div>
    )
}
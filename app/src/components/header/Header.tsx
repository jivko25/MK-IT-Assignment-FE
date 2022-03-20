import {Grid, TextField, Typography, Button} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';



interface Props{
    username : String,
    onLogout : Function
}

export const Header : React.FC<Props> = ({username, onLogout}) => {
    return(
        <div className={styles.wrapper}>
            <Grid container justifyContent={'flex-end'}>
              <Grid item xs={3} className={styles.userWrapper}>
                {
                  username != null ?
                  <Link to='/' style={{ textDecoration: 'none' }}>
                    <div className={styles.buttonWrapper}>
                      <Typography variant="h6" className={styles.username}>Welcome {username}</Typography>
                    </div>
                  </Link>
                  :
                  <div className={styles.buttonWrapper}>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                      <Button variant="outlined">
                        Login
                      </Button>
                    </Link>
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
                  </Grid>
                  <Grid item xs={2} className={styles.buttonWrapper}>
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
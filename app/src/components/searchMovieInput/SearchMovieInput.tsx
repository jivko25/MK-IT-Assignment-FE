import styles from './SearchMovieInput.module.scss';
import TextField from '@mui/material/TextField'
import { useState } from 'react';
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'

interface Props{
    search : string,
    onSearchChange : Function
}

export const SearchMovieInput : React.FC<Props> = ({search, onSearchChange}) => {
    return(
        <div className={styles.wrapper}>
            <Grid container spacing={3} justifyContent='center'>
              <Grid item xs>
                    <TextField
                    value={search}
                    onChange={(e) => onSearchChange(e.target.value)}
                    variant='outlined'
                    fullWidth
                    />
              </Grid>
              <Grid item>
                    <Button variant="text" color='primary' className={styles.searchBtn}>
                      Search
                    </Button>    
              </Grid>
            </Grid>
        </div>
    )
}
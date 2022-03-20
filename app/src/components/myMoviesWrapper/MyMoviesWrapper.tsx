import styles from './MyMoviesWrapper.module.scss';
import Grid from '@mui/material/Grid'
import { MyMovie } from '../myMovie/MyMovie.tsx';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../common/Context';



interface Props{
    movies : Array<Object>
}

export const MyMovieWrapper : React.FC<Props> = ({movies}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const {movie, setMovie} = useContext(UserContext);

    const onDetails = (movie : Object) => {
        movie.isMovieAdded = true;
        setMovie(movie)
    }
    return(
        <div className={styles.wrapper}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item>
                    <Typography variant="h2" color="secondary" className={styles.title}>My favorite movies</Typography>
                </Grid>
                <Grid item xs={12}>
            {
                user ? 
                movies.length > 0 ?
                <Grid container spacing={3} justifyContent="center">
              {
                  movies.map(movie => {
                      return(
                          <Grid item key={movie.title}>
                              <Link to={`/details/${movie._id}`} style={{ textDecoration: 'none' }} onClick={() => onDetails(movie)}>
                                <MyMovie movie={movie}/>
                              </Link>
                          </Grid>
                      )
                    })
              }
            </Grid>
            :
            <Typography variant="h4" color="secondary" className={styles.text}>No movies found</Typography>
            :
            <Grid container spacing={3} className={styles.buttonContainer}>
                <Grid item>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <Button variant="outlined" color="secondary">
                            Login
                        </Button>
                    </Link>
                </Grid>
                <Grid item>
                <Link to='/register' style={{ textDecoration: 'none' }}>
                    <Button variant="outlined" color="secondary">
                        Register
                    </Button>
                </Link>
                </Grid>
            </Grid>
            }
            </Grid>
            </Grid>
        </div>
    )
}
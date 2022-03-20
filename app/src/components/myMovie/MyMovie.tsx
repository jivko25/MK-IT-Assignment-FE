import styles from './MyMovie.module.scss';
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

interface Props{
    movie : Object
}

export const MyMovie : React.FC<Props> = ({movie}) => {
    return(
        <div className={styles.wrapper}>
            <Grid container spacing={1} justifyContent="center" direction="column">
              <Grid item className={styles.imageContainer}>
                  <img className={styles.image} src={movie?.image} />
              </Grid>
              <Grid item className={styles.titleWrapper}>
                  <Typography variant="h4" color="secondary" className={styles.title} noWrap>{movie?.title}</Typography>
              </Grid>
              <Grid item>
                  <Typography variant="body1" color="secondary" className={styles.text}>{movie?.genre.join(', ')} | {movie?.time} min</Typography>
              </Grid>
            </Grid>
        </div>
    )
}
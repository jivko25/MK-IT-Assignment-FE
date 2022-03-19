import styles from './Card.module.scss';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography'
import { Link, Button } from '@mui/material';
import { useEffect, useState } from 'react';




interface Props{
    item : Object,
    onPost : Function,
    onDelete : Function,
    isAdded : Boolean,
    id : string
}

export const Card : React.FC<Props> = ({item, onPost, onDelete, isAdded, id}) => {
    const [isMovieAdded, setIsMovieAdded] = useState(isAdded);
    const [movieId, setMovieId] = useState(id);
    const date = new Date(item?.premiered).getFullYear();
    // (image : string)
    const post = async () => {
      setIsMovieAdded(true);
      const movie = await onPost(item?.name, date, item?.genres, +item?.weight, item?.summary, item?.officialSite, item?.image.medium)
      console.log(movie.data);
      setMovieId(movie.data._id);
    }

    const deleteMovie = () => {
      onDelete(movieId);
      setIsMovieAdded(false);
    }
    



    return(
        <div className={styles.wrapper}>
            <Grid container spacing={5}>
              <Grid item xs={3}>
                {/* <div className={styles.imageDiv}> */}
                  <img src={item.image ? item?.image.medium : "https://assetscdn1.paytm.com/movies_new/_next/static/image/public/assets/images/no-shows-found.283bfcf105ffe3c46a5bbcd7558741a3.svg"}  className={styles.imageDiv}/>
                {/* </div> */}
              </Grid>
              <Grid item xs={9}>
                  <Grid container spacing={1} direction="column">
                    <Grid item>
                      <Typography variant="h4" color="secondary" className={styles.text}>{item?.name} ({date})</Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="p" color="secondary">{item?.genres.join(' ')} | {item?.weight} min</Typography>
                    </Grid>
                    <Grid item className={styles.summaryWrapper}>
                      
                      <div dangerouslySetInnerHTML={{__html: item?.summary}} className={styles.summary}/>
                    </Grid>
                    <Grid item>
                      {
                        item?.officialSite &&
                        <a href={item?.officialSite}>Visit official site</a>
                      }
                    </Grid>
                    <Grid item>
                      {
                        !isMovieAdded ?
                        <Button variant="outlined" color="success" onClick={() => post()}>
                          Add
                        </Button>
                        :
                        <Button variant="outlined" color="error" onClick={() => deleteMovie()}>
                          Remove
                        </Button>
                      }
                    </Grid>
                  </Grid>
              </Grid>
            </Grid>
        </div>
    )
}
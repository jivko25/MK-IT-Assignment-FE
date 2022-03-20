import { useContext, useEffect, useState } from "react"
import { UserContext } from "../../components/common/Context"
import styles from './Details.module.scss'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Button } from "@mui/material"
import axios from 'axios'



export const Details : React.FC = () => {
    const {movie} = useContext(UserContext);
    const [isMovieAdded, setIsMovieAdded] = useState(movie.isMovieAdded);
    const [id, setId] = useState(movie.id)
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        setId(movie.id)
        console.log(id);
        
    }, [])
    
    console.log(movie);
    
    
    const postMovie = async () => {
        const body = {
            title : movie.title,
            year : movie.year,
            genre : movie.genre,
            time : movie.time,
            description : movie.description,
            officialSite : movie.officialSite == null ? ' ' : movie.officialSite,
            image : movie.image
        }
        const savedMovie = await axios.post(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies`,
        body,
        {
            headers : {
                token : user.token
            }
        })
        setId(savedMovie.data._id)
        console.log(id);
    }
    
    const deleteMove = async () => {
        console.log(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies/${id}`);
        axios.delete(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies/${id}`,
        {
            headers : {
                token : user.token
            }
        })
    }

    const onPost = () => {
        postMovie();
        setIsMovieAdded(true);
    }

    const onDelete = () => {
        deleteMove()
        setIsMovieAdded(false)
    }
    return(
        <div className={styles.wrapper}>
            <Grid
              container
              spacing={5}
              direction='row'>
                <Grid item xs={12} lg={4} className={styles.imageWrapper}>
                    <img className={styles.image} src={movie.image ? movie.image : "https://assetscdn1.paytm.com/movies_new/_next/static/image/public/assets/images/no-shows-found.283bfcf105ffe3c46a5bbcd7558741a3.svg"}/>
                </Grid>
                <Grid item xs={12} lg={8}>
                    <Grid container spacing={3} direction='column'>
                      <Grid item>
                        <Typography variant="h2" color="secondary" className={styles.text}>{movie.title}</Typography>
                      </Grid>
                      <Grid item className={styles.text}>
                      <Typography variant="body1" color="secondary">{movie?.genre.join(', ')} | {movie?.time} min</Typography>
                        </Grid>
                        <Grid item className={styles.summaryWrapper}>
                            <div dangerouslySetInnerHTML={{__html: movie?.description}} className={styles.summary}/>
                        </Grid>
                    <Grid item>
                      {
                        movie?.officialSite &&
                        <a href={movie?.officialSite}>Visit official site</a>
                      }
                    </Grid>
                      <Grid item>
                        <Grid container spacing={3}> 
                            {
                                !isMovieAdded ?
                                <Grid item>
                                <Button variant="outlined" color="success" onClick={() => onPost()}>
                                Add
                                </Button>
                                </Grid>
                                :
                                <Grid item>
                                <Button variant="outlined" color="error" onClick={() => onDelete()}>
                                Remove
                                </Button>
                                </Grid>
                            }
                            <Grid item>
                            </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}
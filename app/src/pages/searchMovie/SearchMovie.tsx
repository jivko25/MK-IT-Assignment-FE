import styles from './SearchMovie.module.scss';
import { useEffect, useState } from 'react';
import { SearchMovieInput } from '../../components/searchMovieInput/SearchMovieInput.tsx';
import { Header } from '../../components/header/Header.tsx';
import { Card } from '../../components/card/Card.tsx';
import axios from 'axios';
import Typography from '@mui/material/Typography'

export const SearchMovie : React.FC = () => {
    const [search, setSearch] = useState('');
    const [user, setUser] = useState(null);
    const [movies, setMovies] = useState([]);
    const [userMovies, setUserMovies] = useState([]);
    

    

    const postMovie = async (title : string, year : string, genre : Array<string>, time : number, description : string, officialSite : string, image : string) => {
        const body = {
            title,
            year,
            genre,
            time,
            description,
            officialSite : officialSite == null ? ' ' : officialSite,
            image
        }
        const savedMovie = await axios.post(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies`,
        body,
        {
            headers : {
                token : user.token
            }
        })
        return savedMovie;
    }

    const deleteMovie = (id : string) => {
        axios.delete(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies/${id}`,
        {
            headers : {
                token : user.token
            }
        })
    }

    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        setUser(user);
        getUserMovies();
    }, [])
    
    async function getUserMovies(){
        const user = JSON.parse(localStorage.getItem('user'));
        const getMovies = await axios.get(`https://mk-it-assignment-be.vercel.app/api/user/${user.id}/movies`,
        {
            headers : {
                token : user.token
            }
        }
        )
        setUserMovies(getMovies.data);
    }
    useEffect(() => {
        const searchMovies = async (searchString : string) => {
            fetch(`https://api.tvmaze.com/search/shows?q=${searchString.replaceAll(' ', '%20')}`)
            .then(res => res.json())
            .then(data => setMovies(data));
        }
        searchMovies(search);
        console.log(movies);
        
    }, [search])
    

      const logout = () => {
        setUser(null);
        localStorage.clear();
      }


    return(
        <div className={styles.wrapper}>
            <Header username={user?.username}
            onSearch={() => {console.log('search')}} 
            onLogout={logout}
            />
            <SearchMovieInput search={search} onSearchChange={(value : string) => setSearch(value)}/>
            {
                movies.length > 0 ?
                movies.map(movie => {
                    return(
                        <Card item={movie.show} 
                        key={movie.show.id} 
                        onPost={(title : string, year : string, genre : Array<string>, time : number, description : string, officialSite : string, image : string) => postMovie(title, year, genre, time, description, officialSite, image)}
                        onDelete={(id : string) => deleteMovie(id)}
                        isAdded={userMovies?.filter(item => item.title == movie.show.name && item.time == movie.show.weight && item.description == movie.show.summary).length > 0}
                        id={userMovies?.filter(item => item.title == movie.show.name && item.time == movie.show.weight && item.description == movie.show.summary).length > 0 
                            && userMovies?.filter(item => item.title == movie.show.name && item.time == movie.show.weight && item.description == movie.show.summary)[0]._id}
                        />
                    )
                })
                :
                <Typography variant="h1" color="secondary" className={styles.notFound}>No movies found!</Typography>
            }
        </div>
    )
}
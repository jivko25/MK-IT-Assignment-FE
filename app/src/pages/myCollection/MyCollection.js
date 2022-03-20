import { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import styles from './MyCollection.module.scss';
import {images} from '../../data/movies.js';
import { Hero } from '../../components/hero/Hero.tsx';
import {MyMovie} from '../../components/myMovie/MyMovie.tsx'
import { MyMovieWrapper } from '../../components/myMoviesWrapper/MyMoviesWrapper.tsx';
import axios from 'axios'

function MyCollection() {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState('');
  const [userMovies, setUserMovies] = useState([]);

  const pickRandomMovie = () => {
    const movieArr = Object.keys(images);
    const randomNumber = Math.floor(Math.random() * movieArr.length);
    setMovie(images[movieArr[randomNumber]]);
    setTimeout(() => {
      pickRandomMovie()
    }, 10000);
  }

  const getUserMovies = async () => {
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
    pickRandomMovie();
    const user = JSON.parse(localStorage.getItem('user'));
    setUser(user?.username);
    getUserMovies();
  }, [])

  const logout = () => {
    setUser(null);
    localStorage.clear();
  }

  const test = [{
    "title": "Titanik",
    "year": 2001,
    "genre": [
        "Drama"
    ],
    "time": 90,
    "image": "https://titanic479.files.wordpress.com/2016/05/titanic1.jpg?w=676",
    "description": "Big Ship sink in the ocean",
    "officialSite": " ",
    "ownerId": "62312a12cefd3422cdb7ff5a",
    "_id": "6236502b79b1a545671cea98",
    "__v": 0
},
{
  "title": "Titanik",
  "year": 2001,
  "genre": [
      "Drama"
  ],
  "time": 90,
  "image": "https://titanic479.files.wordpress.com/2016/05/titanic1.jpg?w=676",
  "description": "Big Ship sink in the ocean",
  "officialSite": " ",
  "ownerId": "62312a12cefd3422cdb7ff5a",
  "_id": "6236502b79b1a545671cea98",
  "__v": 0
},
{
  "title": "Titanik",
  "year": 2001,
  "genre": [
      "Drama"
  ],
  "time": 90,
  "image": "https://titanic479.files.wordpress.com/2016/05/titanic1.jpg?w=676",
  "description": "Big Ship sink in the ocean",
  "officialSite": " ",
  "ownerId": "62312a12cefd3422cdb7ff5a",
  "_id": "6236502b79b1a545671cea98",
  "__v": 0
},
{
  "title": "Titanik",
  "year": 2001,
  "genre": [
      "Drama"
  ],
  "time": 90,
  "image": "https://titanic479.files.wordpress.com/2016/05/titanic1.jpg?w=676",
  "description": "Big Ship sink in the ocean",
  "officialSite": " ",
  "ownerId": "62312a12cefd3422cdb7ff5a",
  "_id": "6236502b79b1a545671cea98",
  "__v": 0
},
{
  "title": "Titanik",
  "year": 2001,
  "genre": [
      "Drama"
  ],
  "time": 90,
  "image": "https://titanic479.files.wordpress.com/2016/05/titanic1.jpg?w=676",
  "description": "Big Ship sink in the ocean",
  "officialSite": " ",
  "ownerId": "62312a12cefd3422cdb7ff5a",
  "_id": "6236502b79b1a545671cea98",
  "__v": 0
}]

  return (
    <div>
      <Header username={user} 
      onLogout={logout}/>
      <Hero image={movie}/>
      <MyMovieWrapper movies={userMovies}/>
    </div>
  );
}

export default MyCollection;

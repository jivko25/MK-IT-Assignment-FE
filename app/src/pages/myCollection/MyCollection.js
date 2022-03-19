import { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import styles from './MyCollection.module.scss';
import {images} from '../../data/movies.js';
import { Hero } from '../../components/hero/Hero.tsx';

function MyCollection() {
  const [user, setUser] = useState(null);
  const [movie, setMovie] = useState('');

  const pickRandomMovie = () => {
    const movieArr = Object.keys(images);
    const randomNumber = Math.floor(Math.random() * movieArr.length);
    setMovie(images[movieArr[randomNumber]]);
    setTimeout(() => {
      pickRandomMovie()
    }, 10000);
  }

  useEffect(() => {
    pickRandomMovie();
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setUser(user?.username);
  }, [])

  const logout = () => {
    setUser(null);
    localStorage.clear();
  }

  return (
    <div>
      <Header username={user} 
      onSearch={() => {console.log('search')}} 
      onLogin={() => {console.log('login')}} 
      onLogout={logout}/>
      <Hero image={movie}/>
    </div>
  );
}

export default MyCollection;

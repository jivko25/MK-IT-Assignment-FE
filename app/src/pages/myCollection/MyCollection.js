import { useEffect, useState } from 'react';
import { Header } from '../../components/header/Header.tsx';
import './MyCollection.css';

function MyCollection() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    setUser(user?.username);
  }, [])

  const logout = () => {
    setUser(null);
    localStorage.clear();
  }
  return (
    <div className="App">
      <Header username={user} 
      onSearch={() => {console.log('search')}} 
      onLogin={() => {console.log('login')}} 
      onRegister={() => {console.log('register')}} 
      onLogout={logout}/>
    </div>
  );
}

export default MyCollection;

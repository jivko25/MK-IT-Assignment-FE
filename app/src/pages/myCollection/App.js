import { Header } from '../../components/header/Header.tsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header username={null} 
      onSearch={() => {console.log('search')}} 
      onLogin={() => {console.log('login')}} 
      onRegister={() => {console.log('register')}} 
      onLogout={() => {console.log('logout')}}/>
    </div>
  );
}

export default App;

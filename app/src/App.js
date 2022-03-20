import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import UserProvider from './components/common/Context';
import { Login } from './components/login/Login.tsx';
import { Details } from './pages/details/Details.tsx';
import MyCollection from './pages/myCollection/MyCollection';
import { Register } from './pages/register/Register.tsx';
import { SearchMovie } from './pages/searchMovie/SearchMovie.tsx';

export default function App() {
    return(
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MyCollection />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/login" element={<Login />}/>
                    <Route path="/search" element={<SearchMovie />}/>
                    <Route path="/details/:id" element={<Details />}/>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    )
}
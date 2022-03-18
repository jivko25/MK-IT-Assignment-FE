import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom';
import MyCollection from './pages/myCollection/MyCollection';

export default function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MyCollection />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
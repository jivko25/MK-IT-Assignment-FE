import {createContext, useState} from "react";

export const UserContext = createContext();

export default function UserProvider({children}) {
    const [movie, setMovie] = useState([]);

    return(
        <UserContext.Provider value={{movie, setMovie}}>
            {children}
        </UserContext.Provider>
    )
    
}
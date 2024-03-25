import { createContext, useState } from "react";
const userContext = createContext();

const UserContextProvider = ({ children }) => {

    const [data, setData] = useState([]);
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    return <userContext.Provider value={{data,setData,isLoggedIn,setIsLoggedIn}}>
        {children}
    </userContext.Provider>
}


export { userContext, UserContextProvider }
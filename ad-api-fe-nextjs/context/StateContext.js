import React, {createContext, useContext, useState, usesEffect} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [userData, setUserData] = useState({});
    const [publicData, setPublicData] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // auctions, spaces, advertisements
    const [selector, setSelector] = useState('auctions');

    return(
        <Context.Provider value={{
            userData,
            setUserData,
            publicData,
            setPublicData,
            isAuthenticated,
            setIsAuthenticated,
            selector,
            setSelector
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
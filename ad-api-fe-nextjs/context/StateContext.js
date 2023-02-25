import React, {createContext, useContext, useState, usesEffect} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {
    const [userData, setUserData] = useState({});
    const [publicData, setPublicData] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Data to forward to user dash forms
    const [userDataOfFocus, setUserDataOfFocus] = useState({});

    // auctions, spaces, advertisements, create_auction, 
    // create_space, create_ad_media, remove
    const [selector, setSelector] = useState('auctions');

    const [userToken, setUserToken] = useState('');

    return(
        <Context.Provider value={{
            userData,
            setUserData,
            publicData,
            setPublicData,
            isAuthenticated,
            setIsAuthenticated,
            userDataOfFocus,
            setUserDataOfFocus,
            selector,
            setSelector,
            userToken,
            setUserToken
        }}>
            {children}
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
import React, {createContext, useContext, useState, usesEffect} from 'react';

const Context = createContext();

export const StateContext = ({children}) => {

    return(
        <Context.Provider value={{}}>
        </Context.Provider>
    )
}

export const useStateContext = () => useContext(Context);
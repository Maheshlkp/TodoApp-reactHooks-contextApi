import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';

//initialstate
const initialState = {
    users:[
        {id:1, name: "user one"},
        {id:2, name: "user Two"},
        {id:3, name: "user Three"}
    ]
};

//create Context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children}) =>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //Actions
    const removeUser = (id)=>{
        dispatch({
            type: 'REMOVE_USER',
            payload: IDBRequest
        })
    }

    return(
        <GlobalContext.Provider value={{users: state.users,
        removeUser}}>
            {children}
        </GlobalContext.Provider>
    )
}
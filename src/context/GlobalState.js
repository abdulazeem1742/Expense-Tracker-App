import React, { createContext, useReducer } from 'react';

// import the Reducer
import AppReducer from './AppReducer';

// Create the initial State
const initialState ={
    transactions: []
}

// create the global context
export const GlobalContext = createContext(initialState);

// create a Provider for the global context

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] =useReducer(AppReducer, initialState);

    // Actions for transaction

    //Delete existing transaction action
    function delTransaction(id) {
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

// Add new transaction
function addTransaction(transaction){
    dispatch({
        type:'ADD_TRANSACTION',
        payload: transaction
    });
}

    return(
        <GlobalContext.Provider value={
            {
                transactions: state.transactions,
                delTransaction,
                addTransaction
            }
        }>
            {children}
        </ GlobalContext.Provider>
    );
}
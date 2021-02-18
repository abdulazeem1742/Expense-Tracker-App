import React, { useState, useContext } from "react";

// import the global state
import {GlobalContext} from '../context/GlobalState';

export const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);
    
    const {addTransaction} = useContext(GlobalContext);
    
    const onSubmit =(e) => {
        e.preventDefault();

        const newTransaction = {
            id: new Date().getTime(),
            description,
            transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction);
    }
    return(
        <div>
            <h3>Add New Transaction</h3>
            <form className="transaction-form" onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="description">
                        Description
                    </label>
                    <input type="text"
                    id="description"
                    value ={description}
                    onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Details of Transaction" />
                </div>
                <div className="form-control">
                    <label htmlFor="transaction">
                        Transactionamount
                    </label>
                    <input type="number"
                    id="transactionamount"
                    value ={transactionAmount}
                    onChange ={(e) => setTransactionAmount(e.target.value)}
                    placeholder="Dollar Value of Transaction" />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}
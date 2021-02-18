import React, { useContext } from "react";

// import transaction component

import { Transaction } from './Transaction';

// import the global state
import {GlobalContext } from '../context/GlobalState';

export const TransactionHistory = () => {
    const { transactions } = useContext(GlobalContext);

    // console.log(transactions);
    return(
        <div>
            <h3>
                TransactionHistory
            </h3>
            <ul className="transaction-list">
                {transactions.map(transaction => (
                    <Transaction key={transaction.id} transaction ={transaction} />
                ))}
            </ul>
        </div>
    )
}
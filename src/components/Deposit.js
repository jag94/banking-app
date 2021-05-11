import React from "react";


const initialBalance = {
    // hardcoded value, change later
    balance: 100
};

const deposit = (state = initialBalance, action) => {
    const newBalance = {...state};

    // action is now undefined becuase of latest changes. event onClick
    if (action.type === 'Deposit') {
        // hardcoded value, change later
        newBalance.balance += 100
    }
    return newBalance
}

export default deposit;
import React from "react";


const initialBalance = {
    // hardcoded value, change later
    balance: 100
};

const withdraw = (state = initialBalance, action) => {
    const newBalance = {...state};

    // action is now undefined becuase of latest changes. event onClick
    if (action.type === 'Withdraw') {
        // hardcoded value, change later
        newBalance.balance -= 100
    }
    return newBalance
}

export default withdraw;
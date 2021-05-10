export const transError = errorMessage => {
    return {
        type: 'TRANS_ERROR'
    }
};

export const setAccounts = accounts => {
    return {
        type: 'SET_ACCOUNTS',
        payload: {
            accounts
        }
    }
};

export const setTransactions = transactions => {
    return {
        type: 'SET_TRANSACTIONS',
        payload: {
            transactions
        }
    }
}

export const deleteAcct = (acctID) => {
    return {
        type: 'DELETE_ACCOUNT',
        payload: acctID
    }
};
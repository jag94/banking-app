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

export const depositAcct = (acctID, amount) => {
    return {
        type: 'ADD_FUNDS',
        payload: {
            acctID,
            amount
        }
    };
}

export const newTrans = (type, accountId, amount, name) => {
    return {
        type: 'CHANGE_FUNDS',
        payload: {
            type,
            accountId,
            amount,
            name
        }
    };
}

export const withdrawAcct = (acctID, amount) => {
    return {
        type: 'BROKE_NOW',
        payload: {
            acctID,
            amount
        }
    };
}

/*export const withdrawTrans = (acctID, amount, reason) => {
    return {
        type: 'WITHDRAW_FUNDS',
        payload: {
            type: "withdraw",
            acctID,
            amount,
            reason
        }
    };
} */
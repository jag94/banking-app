const DEFAULT_STATE = {
    transactions: []
}

const sortTrans = (state) => {
    let newState = {
        transactions: [ ...state.transactions ]
    }
    newState.transactions.forEach(transaction => {

        });
    return newState;
}

const transReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_TRANSACTIONS':
            return action.payload;
        case 'CHANGE_FUNDS':
            let newTrans = {
                '_id': state.transactions.length,
                'accountId': action.payload['accountId'],
                'type': action.payload['type'],
                'amount': action.payload['amount'],
                'name': action.payload['name']
            }
            state.transactions.push(newTrans);
            return state;
        default:
            return state;
    }
}

export default transReducer;
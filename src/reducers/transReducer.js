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
        default:
            return state;
    }
}

export default transReducer;
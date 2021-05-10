const DEFAULT_STATE = {
    accounts: []
}

const sortAccounts = (state) => {
    let newState = {
        accounts: [ ...state.accounts ]
    };
    newState.accounts.forEach(account => {
    });
    return newState;
};

const accountReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case 'SET_ACCOUNTS':
            return action.payload;
        case 'ADD_TRANSACTION':
            return [
                ...state,
                { title: action.payload, id: state.length + 1 }
            ];
        case 'DELETE_ACCOUNT':
            const idx = state.accounts.findIndex(t => t._id === action.payload);
            state.accounts.splice(idx, 1);
            return sortAccounts(state);

        default:
            return state;
    }
};

export default accountReducer;
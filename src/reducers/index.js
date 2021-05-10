import { combineReducers } from 'redux';
import accountReducer from "./accountReducer";
import transReducer from "./transReducer";


export default combineReducers({
    accounts: accountReducer,
    transactions: transReducer
});
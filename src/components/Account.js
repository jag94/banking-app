import React from "react";
import withdraw from "./Withdraw"
import deposit from "./Deposit";

import { connect } from "react-redux";

class Account extends React.Component {
    state = {
        currentPage: '/'
    } //might not deal with this


    render() {
        //const accList = this.accountsSeg();

        return (

            <div className="container">
                <h1> MONEYBANKS </h1>
                <h2> Account </h2>
                <div className="form">
                    <h3> Account Info </h3>
                    <p> Current Balance: </p>
                    <input type="text" />
                    <button onClick={ withdraw }> Withdraw </button>
                    <button onClick={ deposit }> Deposit </button>
                </div>
                <div className="accList">

                </div>
            </div>
        );
    }
}

export default Account;
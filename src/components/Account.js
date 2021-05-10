import React from "react";

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
                <div className="accList">

                </div>
            </div>
        );
    }
}

export default Account;
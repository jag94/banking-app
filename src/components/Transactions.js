import React from "react";

import { connect } from "react-redux";

class Transactions extends React.Component {
    state = {
        currentPage: '/'
    } //might not deal with this

    transSeg () {
        let transList = this.props.transactions;

        return transList.map(trans => {
            return (
                <div className="card" key={trans.id}>
                    <tr className="transMain">
                        <td className="cardID">Account # { trans._id }</td>
                        <td className="cardName">Name: { trans.accountId }</td>
                        <td className="cardBalance">Balance: ${ trans.amount } </td>
                         <td className="btnHolster">
                            <button type="button" >  View Account </button>
                            <button type="button"  className="accDelete"> Delete Account </button>
                        </td>
                    </tr>
                </div>
            );
        });
    }

    render() {
        const transList = this.transSeg();

        return (
            <div className="container">
                <h1> MONEYBANKS </h1>
                <h2> Transactions </h2>
                <div className="transList">
                    <table>
                        <tr>
                            <th> </th>
                        </tr>
                        { transList }
                    </table>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        transactions: state.transactions.transactions
    };
}
export default connect(mapStateToProps)(Transactions);
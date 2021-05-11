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
                    <tr className="transMain">
                        <td className="tbleID"> { trans._id }</td>
                        <td className="tbleAccID"> { trans.accountId }</td>
                        <td className="tbleType"> { trans.type } </td>
                        <td className="tbleBalance"> ${ trans.amount } </td>
                        <td className="tbleName"> { trans.name } </td>
                    </tr>
            );
        });
    }

    render() {
        const transList = this.transSeg();

        return (
            <div className="tble-con">
                <h1> MONEYBANKS </h1>
                <h2> Transactions </h2>
                <table className="transList">
                        <tr>
                            <th className="tbleID"> ID</th>
                            <th className="tbleAccID"> Account ID</th>
                            <th className="tbleType"> Type</th>
                            <th className="tbleBalance"> Amount</th>
                            <th className="tbleName"> Note</th>
                        </tr>
                        { transList }
                </table>
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
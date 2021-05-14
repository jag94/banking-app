import React from "react";
import { connect } from "react-redux";
import { deleteAcct, newTrans, depositAcct, withdrawAcct } from "../actions";
import { useParams, Link } from "react-router-dom";

class Account extends React.Component {

    thisAcct = parseInt(this.props.match.params.id);

    isActivePage(pageName) {
        return (pageName === this.props.currentView ? 'nav-link active' : 'nav-link')
    }

    onNavClick(event, pageName) {
        this.setState({ currentView: pageName})
        this.props.deleteAcct(this.thisAcct);
    }

    onAddDeposit = (event) => {
        let type = 'deposit';
        event.preventDefault();
        this.props.depositAcct(this.thisAcct, this.state.amount);
        this.props.newTrans(type, this.thisAcct, this.state.amount, this.state.name);
        this.setState({amount: '', name: ''});
    }

    onWithdraw = (event) => {
        let type = 'withdraw';
        event.preventDefault();
        this.props.withdrawAcct(this.thisAcct, this.state.amount);
        this.props.newTrans(type, this.thisAcct, this.state.amount, this.state.name);
        this.setState({amount: '', name: ''});
    }

    transSeg () {
        let transList = this.props.transactions;
        let tActions = [];
        transList.forEach(transaction => {
            if (transaction.accountId === this.thisAcct) {
                tActions.push(transaction)
            }
        });

        return tActions.map(trans => {
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

        let selected = [];
        let acct = this.props.accounts;

        acct.forEach(act => {
            if (act._id === this.thisAcct) { selected.push(act); }})

        return (

            <div className="container">
                <h1> MONEYBANKS </h1>
                <h2> { selected[0].name } Account </h2>
                <div className="form">
                    <h3> Account Info </h3>
                    <p> Current Balance: ${ selected[0].balance }</p>
                    <div>
                        <button > Edit Account </button>
                        <Link className={this.isActivePage("/banking-app/")} to={"/banking-app/"} onClick={(e) => this.onNavClick(e, "/banking-app/")} id="delA"> Delete Account </Link>
                    </div>
                </div>
                <div className="transTble">
                    <h3> Transactions </h3>
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
                <div className="new-trans">
                    <h3 class='money'> New Transaction </h3>
                    <div className="Form-edit">
                        <h4 className="id-name"> Enter Amount</h4>
                        <form>
                            <input placeholder="Enter Amount" id="amount"
                                   onChange={(e) => this.setState({amount: e.target.value})}/>
                            <input placeholder="Enter Description" id="reason"
                                   onChange={(e) => this.setState({name: e.target.value})}/>

                            <button type="button" onClick={this.onAddDeposit} className="depF"> Deposit Amount </button>
                            <button type="button" onClick={this.onWithdraw} className="WitF"> Withdraw Amount </button>

                        </form>
                    </div>
                </div>
            </div>
        );
    }
};

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts,
        transactions: state.transactions.transactions
    };
};

export default connect(mapStateToProps, { deleteAcct, newTrans, depositAcct, withdrawAcct }) (Account);
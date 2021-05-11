import React from "react";
import { connect } from "react-redux";
import { deleteAcct} from "../actions";

class Home extends React.Component {
    state = {
        currentPage: '/'
    } //might not deal with this

    isActivePage(pageName) {
        return (pageName === this.props.currentView ? 'nav-link active' : 'nav-link')
    }

    onNavClick(event, pageName) {
        event.preventDefault();
        this.props.onViewChange(pageName);
    }

    accountsSeg () {
        let accountList = this.props.accounts;

        return accountList.map(acct => {
            return (
                <div className="card" key={acct.id}>
                    <div className="cardMain">
                        <h3 className="cardID">Account ID: { acct._id }</h3>
                        <h4 className="cardName">Holder: { acct.name }</h4>
                        <h5 className="cardBalance">Balance: ${ acct.balance } </h5>
                        <div className="btnHolster">
                            <button type="button" className={this.isActivePage('Account')} onClick={(e) => this.onNavClick(e, 'Account')}>  View Account </button>
                            <button type="button" onClick={() => {this.props.deleteAcct(acct._id)}} className="accDelete"> Delete Account </button>
                        </div>
                    </div>
                </div>
            );
        });
    }

    render() {
        const accList = this.accountsSeg();
        return (
            <div className="container">
                <h1> MONEYBANKS </h1>
                <h2> Accounts </h2>
                <div className="accList">
                        { accList }
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        accounts: state.accounts.accounts
    };
};

export default connect(mapStateToProps, {deleteAcct}) (Home);
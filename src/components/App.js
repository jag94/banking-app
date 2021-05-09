import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


import Pages from './Pages';
import { transError } from "../actions/actions";


class App extends React.Component {
  state = {
      view: 'Home',
      errorText: ''
  };

  componentDidMount() {
    this.getData();
  }
  getData() {
    axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/accounts')
        .then(response => {
          this.props.setAccounts(response.data);
        }).catch(error => {
            this.props.transError();
    });
    /*axios.get('https://my-json-server.typicode.com/bnissen24/project2DB/transactions')
        .then(response => {
          this.props.setTransactions(response.data);
        }).catch(error => {
    }); */

  }

  onViewChange(view) {
    this.setState({ view });
  }

  wrapPage(jsx) {
    const { view } = this.state;
    return (
        <div className="container">
          <Pages currentView={view} onViewChange={this.onViewChange.bind(this)}/>
          {jsx}
        </div>
    );
  }

  render() {
    const { view } = this.state;

    switch (view) {

        case 'Home':
            return (this.wrapPage());

        case 'Transactions':
            return (this.wrapPage());
        default:
            return (this.wrapPage());
    }
  }

}
const mapStateToProps = (state) => {
  return {
    errorMessage: state.errors.getAccounts
  };
};

export default connect(mapStateToProps, { setAccounts, transError })(App);
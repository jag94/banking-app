import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Pages extends React.Component {
    state = {
        currentView: '/'
    }

    isActivePage(pageName) {
        return (pageName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onNavClick(event, pageName) {
        this.setState(
            {
                currentView: pageName
            }
        )
    }

    render () {
        return (
            <div className='nav pages'>
                <div className='nav-item'>
                    <Link className={this.isActivePage('/')} to="/" onClick={(e) => this.onNavClick(e, '/')}>
                        Home
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link className={this.isActivePage('/Transactions')} to="/Transactions" onClick={(e) => this.onNavClick(e, '/Transactions')}>
                        Transactions
                    </Link>
                </div>
            </div>
        )
    }
};

export default Pages;
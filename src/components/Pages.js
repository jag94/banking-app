import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";

class Pages extends React.Component {
    state = {
        currentView: '/banking-app/'
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
                    <Link className={this.isActivePage('/banking-app/')} to="/banking-app/" onClick={(e) => this.onNavClick(e, '/banking-app/')}>
                        Home
                    </Link>
                </div>
                <div className='nav-item'>
                    <Link className={this.isActivePage('/banking-app/Transactions/')} to="/banking-app/Transactions/" onClick={(e) => this.onNavClick(e, '/banking-app/Transactions/')}>
                        Transactions
                    </Link>
                </div>
            </div>
        )
    }
};

export default Pages;
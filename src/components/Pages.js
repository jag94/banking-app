import React from 'react';
import '../App.css';

class Pages extends React.Component {

    isActivePage(pageName) {
        return (pageName === this.props.currentView ? 'nav-link active' : 'nav-link')
    }

    onNavClick(event, pageName) {
        event.preventDefault();
        this.props.onViewChange(pageName);
    }

    render () {
        return (
            <div className='nav pages'>
                <div className='nav-item'>
                    <a className={this.isActivePage('Home')} onClick={(e) => this.onNavClick(e, 'Home')}>
                        Home
                    </a>
                </div>
                <div className='nav-item'>
                    <a className={this.isActivePage('Transactions')} onClick={(e) => this.onNavClick(e, 'Transactions')}>
                        Transactions
                    </a>
                </div>
            </div>
        )
    }
};

export default Pages;
import React from 'react';
import { NavLink } from 'react-router-dom';

class Header extends React.Component {
    constructor(props){
        super(props);
        this.Header = this.Header.bind(this);
    }
}

Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
    </header>
);

export default Header;
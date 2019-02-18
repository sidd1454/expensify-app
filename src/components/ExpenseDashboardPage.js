import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

class ExpenseDashboardPage extends React.Component {
    constructor(props){
        super(props);
        this.ExpenseDashboardPage = this.ExpenseDashboardPage.bind(this);
    }
}

ExpenseDashboardPage = () => (
    <div>
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default ExpenseDashboardPage;
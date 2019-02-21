import React from 'react';
import { shallow } from 'enzyme';
import { ExpensesSummary } from '../../components/ExpensesSummary';

test('should correctly render expenses summary with expense ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={125}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should correctly render multiple expenses summary with expense ', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={23} expensesTotal={125511548}/>);
    expect(wrapper).toMatchSnapshot();
});
import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should handle ExpenseDashboard correctly', () => {
    const wrapper = shallow(<ExpenseDashboardPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
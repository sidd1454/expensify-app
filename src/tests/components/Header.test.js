import React from 'react';
import Header from '../../components/Header';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should handle Header correctly', () => {
    const wrapper = shallow(<Header />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
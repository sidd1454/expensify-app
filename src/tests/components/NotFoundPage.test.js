import React from 'react';
import NotFoundPage from '../../components/NotFoundPage';
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';

test('should handle NotFound correctly', () => {
    const wrapper = shallow(<NotFoundPage />);
    expect(toJSON(wrapper)).toMatchSnapshot();
});
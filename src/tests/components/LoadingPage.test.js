import React from 'react';
import LoadingPage from '../../components/LoadingPage';
import { shallow } from 'enzyme';

test('should render of Loading Page', () => {
    const wrapper = shallow(<LoadingPage  />);
    expect(wrapper).toMatchSnapshot();
});
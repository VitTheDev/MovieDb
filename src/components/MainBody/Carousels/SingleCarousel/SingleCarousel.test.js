import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { SingleCarousel } from './SingleCarousel';
import Spinner from '../../../UI/Spinner';
import { Link } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('render the bitch', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SingleCarousel />);
  });
  it('should find 4 div elements', () => {
    wrapper.setProps({ dataToDisplay: [{ one: 1, two: 2, three: 3 }] });
    expect(wrapper.find('div')).toHaveLength(4);
  });
  it('should find a spinner component if loading piece of state is true', () => {
    wrapper.setState({ loading: true });
    expect(wrapper.find(Spinner)).toHaveLength(1);
  });
  it('should not find a spinner component if loading is set to false', () => {
    wrapper.setProps({ dataToDisplay: [{ one: 1, two: 2, three: 3 }] });
    wrapper.setState({ loading: false });
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });
});

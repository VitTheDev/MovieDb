import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Navigation from './Navigation';
import { NavLink } from 'react-router-dom';

configure({ adapter: new Adapter() });

describe('Navigation component render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />);
  });

  it('should render three <NavLink /> elements', () => {
    expect(wrapper.find(NavLink)).toHaveLength(3);
  });
});

import React from 'react';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Carousels } from './Carousels';

configure({ adapter: new Adapter() });

describe('Carousels component renders', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Carousels />);
  });
  it('Should render 2 SingleCarousel components', () => {
    const singleCarousel = wrapper.find("[data-test='singleCarousel']");
    expect(singleCarousel.length).toBe(2);
  });
});

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { App } from './App';
import Navigation from './Navigation/Navigation';
import Carousels from './MainBody/Carousels/Carousels';
import SearchPage from './MainBody/SearchPage/SearchPage';
import MovieDetailPage from './MainBody/MovieDetailPage/MovieDetailPage';
import Categories from './MainBody/Categories/Categories';
import VideoPlayer from './VideoPlayer/VideoPlayer';

configure({ adapter: new Adapter() });

describe('App component render', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('should render Navigation Component', () => {
    expect(wrapper.contains(<Navigation></Navigation>)).toEqual(true);
  });
  it('should render Switch Component', () => {
    expect(wrapper.find(Switch)).toHaveLength(1);
  });
  it('should render 5 Route Components', () => {
    expect(wrapper.find(Route)).toHaveLength(6);
  });
});

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { withResizeDetector } from 'react-resize-detector';
import { moviesPerPage } from './actions';
import { connect } from 'react-redux';

import Navigation from './Navigation/Navigation';
import Carousels from './MainBody/Carousels/Carousels';
import SearchPage from './MainBody/SearchPage/SearchPage';
import MovieDetailPage from './MainBody/MovieDetailPage/MovieDetailPage';
import Categories from './MainBody/Categories/Categories';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import './App.css';

export class App extends Component {
  componentDidUpdate(prevProps) {
    const { width } = this.props;

    if (width !== prevProps.width && width < 600) {
      this.props.moviesPerPage(1);
    } else if (width !== prevProps.width && width < 900) {
      this.props.moviesPerPage(3);
    } else if (width !== prevProps.width) {
      this.props.moviesPerPage(6);
    }
  }

  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route exact path="/" render={(props) => <Carousels {...props} />} />
          <Route
            exact
            path="/search"
            render={(props) => <SearchPage {...props} />}
          />
          <Route
            exact
            path="/watch/:id"
            render={(props) => <VideoPlayer {...props} />}
          />
          <Route
            exact
            path="/:type/:id"
            render={(props) => <MovieDetailPage {...props} />}
          />
          <Route
            exact
            path="/categories"
            render={(props) => <Categories {...props} />}
          />
          <Route
            render={() => (
              <h1>
                Oops, it seems the url you are trying to access doesn't exist
              </h1>
            )}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    moviesPerPage: state.moviesPerPage,
  };
};

const AdaptiveApp = withResizeDetector(App);

export default connect(mapStateToProps, { moviesPerPage })(AdaptiveApp);

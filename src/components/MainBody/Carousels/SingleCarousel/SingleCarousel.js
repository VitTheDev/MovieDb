import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies, searchForMovie, searchForTvShow } from '../../../actions';
import { Link } from 'react-router-dom';

import Spinner from '../../../UI/Spinner';

import classes from './SingleCarousel.module.css';

export class SingleCarousel extends Component {
  state = {
    currentPage: 0,
    loading: false,
  };
  componentDidMount() {
    console.log('rerendering');
    this.setState({ loading: true });
    try {
      if (this.props.actionType === 'SEARCH_MOVIE') {
        this.props.searchForMovie(this.props.query);
      } else if (this.props.actionType === 'SEARCH_TV') {
        this.props.searchForTvShow(this.props.query);
      } else {
        this.props.fetchMovies(
          this.props.apiEndpoint,
          this.props.actionType,
          this.props.genre
        );
      }
    } catch {
      this.setState({ loading: false });
      this.handleNetworkError();
    }
  }

  handleNetworkError = () => {
    return (
      <div>Couldn't load resource. Please check your internet connection</div>
    );
  };

  componentDidUpdate(prevProps) {
    if (prevProps.dataToDisplay !== this.props.dataToDisplay) {
      this.setState({ loading: false });
    }
    if (prevProps.genre !== this.props.genre) {
      this.props.fetchMovies(
        this.props.apiEndpoint,
        this.props.actionType,
        this.props.genre
      );
      this.setState({ currentPage: 0 });
    }
    if (prevProps.query !== this.props.query) {
      try {
        if (this.props.actionType === 'SEARCH_MOVIE') {
          this.props.searchForMovie(this.props.query);
        } else if (this.props.actionType === 'SEARCH_TV') {
          this.props.searchForTvShow(this.props.query);
        } else {
          this.props.fetchMovies(
            this.props.apiEndpoint,
            this.props.actionType,
            this.props.genre
          );
        }
      } catch {
        this.handleNetworkError();
      }
    }
    return false;
  }

  renderFetchedList = () => {
    if (this.props.dataToDisplay) {
      const slicedMovies = this.props.dataToDisplay
        .slice(
          this.props.moviesPerPage * this.state.currentPage,
          (this.state.currentPage + 1) * this.props.moviesPerPage
        )
        .map((movie) => (
          <Link to={`/${this.props.type}/${movie.id}`} key={movie.id}>
            <div>
              {movie.poster_path ? (
                <img
                  src={`http://image.tmdb.org/t/p/w185/${movie.poster_path}`}
                  alt={movie.title ? movie.title : movie.name}
                />
              ) : (
                <h3>
                  {movie.title}
                  <span> Image Not Avaliable</span>
                </h3>
              )}
            </div>
          </Link>
        ));
      return slicedMovies;
    } else {
      return <div>{this.handleNetworkError()}</div>;
    }
  };

  hideSpinner = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 200);
  };

  renderNexPage = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
      loading: true,
    });
    this.hideSpinner();
  };

  renderPrevPage = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
      loading: true,
    });
    this.hideSpinner();
  };

  render() {
    if (!this.props.dataToDisplay) {
      return <Spinner />;
    } else {
      return (
        <div className={classes.CarouselWrapper}>
          <h4>{this.props.header}</h4>
          <div className={classes.SingleCarousel}>
            <div className={classes.Image}>
              <button
                className="btn"
                disabled={this.state.currentPage <= 0}
                onClick={this.renderPrevPage}
              >
                <i className="fas fa-arrow-circle-left fa-4x"></i>
              </button>
            </div>
            {this.renderFetchedList()}
            <div className={classes.Image}>
              <button
                className="btn"
                disabled={
                  this.state.currentPage >=
                  Math.floor(
                    this.props.dataToDisplay.length / this.props.moviesPerPage
                  )
                }
                onClick={this.renderNexPage}
              >
                <i className="fas fa-arrow-circle-right fa-4x"></i>
              </button>
            </div>
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state, ownProps) => {
  switch (ownProps.apiEndpoint) {
    case '/tv/popular':
      return {
        dataToDisplay: Object.values(state.popularTv),
        moviesPerPage: state.moviesPerPage,
      };
    case '/movie/popular':
      return {
        dataToDisplay: Object.values(state.popularMovies),
        moviesPerPage: state.moviesPerPage,
      };
    case '/discover/movie':
      return {
        dataToDisplay: Object.values(state.selectedGenre),
        moviesPerPage: state.moviesPerPage,
      };
    case '/search/movie':
      return {
        dataToDisplay: Object.values(state.movieSearch),
        moviesPerPage: state.moviesPerPage,
      };
    case '/search/tv':
      return {
        dataToDisplay: Object.values(state.tvSearch),
        moviesPerPage: state.moviesPerPage,
        form: state.form,
      };

    default:
      return state;
  }
};

export default connect(mapStateToProps, {
  fetchMovies,
  searchForMovie,
  searchForTvShow,
})(SingleCarousel);

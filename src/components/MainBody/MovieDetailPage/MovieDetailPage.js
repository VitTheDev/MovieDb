import React, { Component } from 'react';
import { fetchMovieDetail } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Spinner from '../../UI/Spinner';

import classes from './MovieDetailPage.module.css';

export class MovieDetailPage extends Component {
  state = {
    loading: true,
  };
  componentDidMount() {
    this.setState({ loading: true });
    const id = this.props.match.params.id;
    this.props.fetchMovieDetail(id, this.props.match.params.type);
  }

  componentDidUpdate = (prevProps) => {
    if (prevProps.movie !== this.props.movie) {
      console.log(this.props.movie);
      this.setState({ loading: false });
    }
  };

  render() {
    const { movie } = this.props;
    if (this.state.loading) {
      return <Spinner />;
    } else {
      return (
        <div className={classes.MovieDetail}>
          <div className={classes.Content}>
            <h2>{movie.name ? movie.name : movie.title}</h2>
            <h4>Description</h4>
            <p>{movie.overview}</p>
            <h4>Stats:</h4>
            <ul>
              <li>Release date: {movie.release_date}</li>
              <li>Popularity: {movie.vote_average}</li>
            </ul>
            <Link
              to={movie.videos ? `/watch/${movie.videos.results[0].key}` : '/'}
              className="btn btn-primary"
            >
              Watch Trailer
            </Link>
          </div>
          <div>
            <img
              src={`http://image.tmdb.org/t/p/w1280${movie.backdrop_path}`}
              alt={movie.title}
            />
          </div>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    movie: state.movieDetail.movie,
  };
};

export default connect(mapStateToProps, { fetchMovieDetail })(MovieDetailPage);

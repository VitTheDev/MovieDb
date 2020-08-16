import { combineReducers } from 'redux';
import {
  popularMovieReducer,
  popularTvReducer,
  movieDetailReducer,
  movieGenreReducer,
  selectedGenreReducer,
  searchMovieReducer,
  searchTvReducer,
} from './asyncReducers';

// UI reducers
const moviesPerPageReducer = (state = 6, action) => {
  if (action.type === 'MOVIES_PER_PAGE') {
    return action.payload;
  }
  return state;
};

export default combineReducers({
  popularMovies: popularMovieReducer,
  popularTv: popularTvReducer,
  moviesPerPage: moviesPerPageReducer,
  movieDetail: movieDetailReducer,
  genres: movieGenreReducer,
  selectedGenre: selectedGenreReducer,
  movieSearch: searchMovieReducer,
  tvSearch: searchTvReducer,
});

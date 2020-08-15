export const popularMovieReducer = (state = {}, action) => {
  if (action.type === 'FETCH_POPULAR_MOVIES') {
    return { ...state, ...action.payload };
  }
  return state;
};

export const popularTvReducer = (state = {}, action) => {
  if (action.type === 'FETCH_POPULAR_TV') {
    return { ...state, ...action.payload };
  }
  return state;
};

export const movieDetailReducer = (state = {}, action) => {
  if (action.type === 'FETCH_MOVIE_DETAIL') {
    return { ...state, ...action.payload };
  }
  return state;
};

export const movieGenreReducer = (state = {}, action) => {
  if (action.type === 'FETCH_GENRES') {
    return { ...state, ...action.payload };
  }
  return state;
};
// fetch array of movies for selected genre
export const selectedGenreReducer = (state = {}, action) => {
  if (action.type === 'FETCH_CATEGORIES') {
    return { ...state, ...action.payload };
  }
  return state;
};

export const searchMovieReducer = (state = {}, action) => {
  if (action.type === 'SEARCH_MOVIE') {
    return { ...state, ...action.payload };
  }
  return state;
};

export const searchTvReducer = (state = {}, action) => {
  if (action.type === 'SEARCH_TV') {
    return { ...state, ...action.payload };
  }
  return state;
};

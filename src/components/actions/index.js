import movieDb from '../../apis/movieDb';

const apiKey = '24b2e8313779a1bdf5649b4a6fc08321';

// UI actions section
export const moviesPerPage = (num) => {
  return { type: 'MOVIES_PER_PAGE', payload: num };
};

// async actios section

// combined action call for all the lists
export const fetchMovies = (apiEndpoint, actionType, genres = null) => async (
  dispatch
) => {
  const response = await movieDb.get(`${apiEndpoint}`, {
    params: {
      api_key: apiKey,
      with_genres: genres,
    },
  });
  dispatch({ type: actionType, payload: response.data.results });
};

// get the movie detail object from tmdb api
export const fetchMovieDetail = (id, isType, genre = null) => async (
  dispatch
) => {
  console.log(isType);
  const response = await movieDb.get(
    `/${isType}/${id}?api_key=${apiKey}&language=en-US&append_to_response=videos`
  );
  dispatch({ type: 'FETCH_MOVIE_DETAIL', payload: response.data });
};

// get list of genres
export const fetchCategories = () => async (dispatch) => {
  const response = await movieDb.get(`/genre/movie/list`, {
    params: {
      api_key: apiKey,
    },
  });

  dispatch({ type: 'FETCH_GENRES', payload: response.data });
};

// send search requests based on searchForm input
export const searchForMovie = (formValues) => async (dispatch) => {
  const response = await movieDb.get('/search/movie', {
    params: {
      api_key: apiKey,
      query: formValues,
    },
  });

  dispatch({ type: 'SEARCH_MOVIE', payload: response.data.results });
};
export const searchForTvShow = (formValues) => async (dispatch) => {
  const response = await movieDb.get('/search/tv', {
    params: {
      api_key: apiKey,
      query: formValues,
    },
  });
  dispatch({ type: 'SEARCH_TV', payload: response.data.results });
};

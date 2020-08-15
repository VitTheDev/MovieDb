import React from 'react';

import SingleCarousel from './SingleCarousel/SingleCarousel';
import classes from './Carousels.module.css';

const Carousels = (props) => {
  return (
    <div className={classes.Carousels}>
      <SingleCarousel
        header="Popular Movies"
        apiEndpoint="/movie/popular"
        actionType="FETCH_POPULAR_MOVIES"
        type="movie"
      />
      <SingleCarousel
        header="Popular Tv Series"
        apiEndpoint="/tv/popular"
        actionType="FETCH_POPULAR_TV"
        type="tv"
      />
    </div>
  );
};

export default Carousels;

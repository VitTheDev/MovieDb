import React from 'react';

import SingleCarousel from './SingleCarousel/SingleCarousel';
import classes from './Carousels.module.css';

export const Carousels = (props) => {
  return (
    <div className={classes.Carousels}>
      <SingleCarousel
        data-test="singleCarousel"
        header="Popular Movies"
        apiEndpoint="/movie/popular"
        actionType="FETCH_POPULAR_MOVIES"
        type="movie"
      />
      <SingleCarousel
        data-test="singleCarousel"
        header="Popular Tv Series"
        apiEndpoint="/tv/popular"
        actionType="FETCH_POPULAR_TV"
        type="tv"
      />
    </div>
  );
};

export default Carousels;

import React, { Component } from 'react';

import SearchForm from './SearchForm/SearchForm';
import SingleCarousel from '../Carousels/SingleCarousel/SingleCarousel';

import classes from './SearchPage.module.css';

export class SearchPage extends Component {
  state = {
    searchInputValue: '',
    query: '',
  };

  handleSearchInputChange = (e) => {
    e.preventDefault();
    this.setState({ searchInputValue: e.target.value });
  };

  handleSearchButtonClick = (e) => {
    this.setState({ query: this.state.searchInputValue, searchInputValue: '' });
  };

  renderCarousels = (query) => {
    return (
      <div>
        <SingleCarousel
          header={`Showing movie results for ${query}`}
          query={query}
          actionType="SEARCH_MOVIE"
          apiEndpoint="/search/movie"
          type="movie"
        />
        <SingleCarousel
          header={`Showing Tv results for ${query}`}
          query={query}
          actionType="SEARCH_TV"
          apiEndpoint="/search/tv"
          type="tv"
        />
      </div>
    );
  };

  render() {
    return (
      <div className={classes.SearchPage}>
        <SearchForm
          handleClick={this.handleSearchButtonClick}
          value={this.state.searchInputValue}
          handleChange={this.handleSearchInputChange}
        />
        {this.state.query ? (
          this.renderCarousels(this.state.query)
        ) : (
          <div>
            <h5>Please enter a query</h5>
          </div>
        )}
      </div>
    );
  }
}

export default SearchPage;

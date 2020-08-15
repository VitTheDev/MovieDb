import React, { Component } from 'react';

import classes from './SearchForm.module.css';

export class SearchForm extends Component {
  render() {
    return (
      <div className={classes.SearchForm}>
        <form className="form-inline">
          <input
            value={this.props.value}
            onChange={this.props.handleChange}
            className="form-control inline"
            type="text"
          />
        </form>
        <button
          onClick={(e) => this.props.handleClick(e)}
          className="btn btn-primary"
        >
          Search
        </button>
      </div>
    );
  }
}

export default SearchForm;

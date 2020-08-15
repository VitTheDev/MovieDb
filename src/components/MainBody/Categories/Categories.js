import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../../actions';
import classes from './Categories.module.css';
import SingleCarousel from '../Carousels/SingleCarousel/SingleCarousel';
import Spinner from '../../UI/Spinner';

export class Categories extends Component {
  state = {
    id: null,
    name: null,
  };
  componentDidMount() {
    this.props.fetchCategories();
  }

  selectGenre = (id, name) => {
    this.setState({ id: id.toString(), name: name });
  };

  renderGenresList = () => {
    return this.props.categories[0].map((item) => (
      <li key={item.id}>
        <button
          onClick={() => this.selectGenre(item.id, item.name)}
          className="btn btn-success"
        >
          {item.name}
        </button>
      </li>
    ));
  };

  renderCarousel = () => {
    return (
      <SingleCarousel
        header={this.state.name}
        apiEndpoint="/discover/movie"
        actionType="FETCH_CATEGORIES"
        type="movie"
        genre={this.state.id}
      />
    );
  };

  render() {
    if (this.props.categories.length) {
      return (
        <div className={classes.Categories}>
          <ul className={classes.GenreList}>{this.renderGenresList()}</ul>
          {this.state.id ? (
            this.renderCarousel()
          ) : (
            <div>
              <h4>Please select a genre</h4>
            </div>
          )}
        </div>
      );
    }

    return <Spinner />;
  }
}

const mapStateToProps = (state) => {
  return {
    categories: Object.values(state.genres),
  };
};

export default connect(mapStateToProps, { fetchCategories })(Categories);

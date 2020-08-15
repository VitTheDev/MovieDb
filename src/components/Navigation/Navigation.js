import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = (props) => {
  return (
    <div className={classes.Navigation}>
      <nav className="nav">
        <NavLink exact to="/" className="nav-link">
          Home
        </NavLink>
        <NavLink exact to="/categories" className="nav-link">
          Categories
        </NavLink>
        <NavLink exact to="/search" className="nav-link">
          Search
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;

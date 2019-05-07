/* eslint-disable consistent-return */
import PropTypes from 'prop-types';
import React from 'react';
import { Search } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';

const resultRenderer = ({ name, image, _id }) => {
  if (name) {
    return (
        <Search.Result
            as={NavLink} activeClassName="" exact to={`/restaurantpage/${_id}`}
            title={name}
            image={image}
        />
    );
  }
};

resultRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  _id: PropTypes.string,
};

const SearchBarCustom = () => (
    <SearchBar resultRenderer={resultRenderer}/>
);

export default SearchBarCustom;

import PropTypes from 'prop-types';
import React from 'react';
import { Search } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';


const resultRenderer = ({ name, description, image }) => <Search.Result
        as={NavLink} activeClassName="" exact to={'/list'}
        title={name}
        image={image}
        description={description}
    >
    </Search.Result>;


resultRenderer.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string
};

const SearchBarCustom = () => (
    <SearchBar resultRenderer={resultRenderer} />
);

export default SearchBarCustom;

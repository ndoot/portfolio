import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
const Selector = ({screen}) => {
  return (
    <div className = "selector">
      <h1> About </h1>
    </div>
  )
};

Selector.propTypes = {
  screen: PropTypes.string,
}

export default Selector;

import React from 'react';
import PropTypes from 'prop-types';

function Tech({ tech }) {
  return(
    <div className = "project-tech">{tech}</div>
  );
}
Tech.propTypes = {
  tech: PropTypes.string
}

export default Tech;

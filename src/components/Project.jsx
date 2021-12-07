import React from 'react';
import PropTypes from 'prop-types';

function Project({ imgSrc, title, desc }) {
  return(
    <div className = "project">
      <img src = {imgSrc} className = "project-img"></img>
      <h4 className = "project-title">{title}</h4>
      <p>Technologies</p>
      <p className = "project-desc">{desc}</p>
      <button>Yep</button>
    </div>
  );
}
Project.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
}

export default Project;

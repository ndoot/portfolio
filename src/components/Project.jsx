import React from 'react';
import PropTypes from 'prop-types';

function Project({ imgSrc, title, desc, technologies, status }) {
  return(
    <div className = "project">
      <img src = {imgSrc} className = "project-img" alt = "Project"></img>
      <h4 className = "project-title">{title}</h4>
      <div>
        <div className={"project-"+ status.toLowerCase() + " project-tech"}><b>{status}</b></div>
        {technologies.map((e, idx) => {
          return <div key = {idx} className = "project-tech project-tech-h"><b>{e}</b></div>
        })}
      </div>
      <p className = "project-desc">{desc}</p>
    </div>
  );
}
Project.propTypes = {
  imgSrc: PropTypes.string,
  title: PropTypes.string,
  desc: PropTypes.string,
  status: PropTypes.string,
  technologies: PropTypes.array,
}

export default Project;

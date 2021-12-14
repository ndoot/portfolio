import React from 'react';
import PropTypes from 'prop-types';

function Project({ imgSrc, title, desc, demo, technologies, status }) {
  function ifDemo (demo) {
    console.log(demo);
    if (demo !== undefined) {
      return (<span>| <a href = {demo} target='_blank' rel = 'noreferrer'>Demo</a></span>) 
    }
  }
  return(
    <div className = "project">
      <img src = {imgSrc} className = "project-img" alt = "Project"></img>
      <h4 className = "project-title">{title} {ifDemo(demo)}</h4>
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
  demo: PropTypes.string,
  status: PropTypes.string,
  technologies: PropTypes.array,
}

export default Project;

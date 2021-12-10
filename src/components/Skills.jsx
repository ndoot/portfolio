import React from 'react';
import PropTypes from 'prop-types';

function Skills({ heading, skills, type }) {
  return(
    <div className = "skills">
      <h3 className='skills-subheading'>{heading} <br></br></h3>
      {skills.map((e, idx) => {
        return <div key = {idx} className = {"skills-icon " + "skills-" + type }><b>{e}</b></div>
      })}
    </div>
  );
}
Skills.propTypes = {
  heading: PropTypes.string,
  type: PropTypes.string,
  skills: PropTypes.array,
}

export default Skills;

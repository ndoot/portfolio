import React from 'react';
import './App.css';
import Info from './components/Info';
import Selector from './components/Selector';
import penguin from './penguin.jpg'
function App() {
  return (
    <div className = "layout">
      <Info
        name = "Neel Dutta"
        image = {penguin}
        byline = "CS/Finance student @UNSW"
        email = "realneeldutta@gmail.com"
        description = "Aspiring software engineer interested in financial technology, currently looking for an internship. Shoot me an email!"
        github = "https://github.com/ndoot"
        linkedin = "https://www.linkedin.com/in/neel-dutta-profile/"
      ></Info>
      <div className = "main">
        <div className = "container">
          <Selector></Selector>
          <div className = "stopgap"></div>More Content
        </div>
      </div>
    </div>
  );
}

export default App;

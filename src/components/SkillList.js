import React, { Component } from 'react';
import Skills from './Skills';


class SkillList extends Component {
  render() {
    const { skills } = this.props.resumeObj;
  
    return (
      <div className="Modal-Container bg-gray" style={{display: 'flex'}}>
        <div className="Modal-content">
          <h1 className="Header-name-modal">Skill Set:</h1>
          <ul className="Skills-list">
            {
              skills.keywords
                .map((key, index) => <Skills key={key} details={skills.keywords[index]}/>)
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default SkillList;

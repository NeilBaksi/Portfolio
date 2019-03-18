import React, { Component } from 'react';
import Jobs from './Jobs';

class Projects extends Component {
  render() {
    const { projects } = this.props.resumeObj;
    const bgColors = ['#4A4A4A', '#DB7093', '#009EE2', '#FFAB91'];   
    return (
      <div className="Card-Container">
      <h2 className="down-here animated bounce infinite">⬇ Down Here ⬇</h2>
        <div className="Card-content">
         {
            projects
              .map((key, index) => {
                return (
                  <Jobs 
                  key={index} 
                  details={projects[index]}
                  colors={bgColors[index]}
                  />
                )
              })
          }
        </div>
      </div>
    );
  }
}

export default Projects;

import React from 'react';

  const School = (props) => {
  const { area, endDate, institution, studyType } = props.education;
  return (
      <div className="Modal-Container bg-gray" style={{display: 'flex'}}>
        <div className="Modal-content">
          <div style={{color: '#4a4a4a',display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          	<h1 className="Header-name">{institution}</h1>
            <h2>{studyType} in {area}</h2>
            <h4>Expected Graduation End {endDate}</h4>
            <br></br>
            <h4 style={{fontStyle: 'italic'}}>Distinction Average in Web Development and Data Analytics Courses </h4>
            <br></br>
            <br></br>
            <br></br>
            <h2>High School : Delhi Public School, Gurgaon, India</h2>
            <h3>Central Board of Secondary Education (CBSE) - 96.5%</h3>
            <br></br>
            <h4 style={{fontStyle: 'italic'}}>All Rounder Achievment Award for year 12 (90%+ result for all subjects)</h4>
          </div>
        </div>
      </div>
    )
}
    
export default School;

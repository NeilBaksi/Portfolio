import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Projects from './components/Projects';
import SkillList from './components/SkillList';
import Card from './components/Card';
import School from './components/School';
import Contact from './components/Contact';

class App extends Component {
  render() {
    const resume = this.props.resumeJson;
    return (
      <Router>  
        <div className="App">
          {/*Nav Menu*/}
          <ul className="App__pages">
            <NavLink exact to={'/'} activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}} className="chips blue">
              Work
            </NavLink>
            <NavLink exact to={'/📖'} activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}} className="chips blue">
              Projects
            </NavLink>
            <NavLink exact to={'/💻'} activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}} className="chips blue">
              Skills
            </NavLink>
            <NavLink exact to={'/🎒'} activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}} className="chips blue">
              Education
            </NavLink>
            <NavLink exact to={'/📧'} activeStyle={{fontWeight: 'bold', boxShadow: '1px 0px 0px rgba(0, 0, 0, 0.4)'}} className="chips blue">
              Contact
            </NavLink>
          </ul>
          <Header resumeObj={resume} className="Left"/>
          
          <Route exact path={'/'} render={({ match }) => <Card resumeObj={resume} />}/>
          <Route exact path={'/📖'} render={({ match }) => <Projects resumeObj={resume} />}/>
          <Route exact path={'/💻'} render={({ match }) => <SkillList resumeObj={resume} />}/>
          <Route exact path={'/🎒'} render={({ match }) => <School education={resume.education[0]} />}/>
          <Route exact path={'/📧'} render={({ match }) => <Contact info={resume.basics} />}/>
         
        
           
        </div>
      </Router>
    );
  }
}

export default App;

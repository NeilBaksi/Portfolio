import React, { Component } from 'react';
import logo from '../logo.svg';

class Header extends Component {
  render() {
    const { basics } = this.props.resumeObj;
  
    return (
      <div className="Header-Container">
        <div className="Header-content">
          <h1 className="Header-name">{basics.name}</h1>
          <h4 className="Header-label">Currently in {basics.location.city} 🐨</h4>
          <br></br>
        <p className="Header-desc">{basics.summary}</p> 
        <p>{basics.interests}</p>       
        <p>Hobbies – {basics.extraInterests}</p>        
         <div className="made-with-react">
          <a href="https://github.com/NeilBaksi/Portfolio" target="_blank">
            made with 
            <img src={logo} className="App-logo" alt="Made With React Logo"/>
            </a>
          </div>
          <a href="https://goo.gl/aNfKUK" target="_blank"><button className="chips blue" style={{ fontSize:'16px'}}>View Resume</button></a>
        </div>
      </div>
    );
  }
}

export default Header;

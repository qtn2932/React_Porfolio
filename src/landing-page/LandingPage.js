import React, { Component } from 'react'
import './LandingPage.css'
class LandingPage extends Component {
  render () {
    return (
      <div className='landing-page-container'>
        <div className='top-portion'>
          <div className='navigation-container'>
            <nav className='nav-bar'>
              <a>HOME</a>
              <a>ABOUT</a>
              <a>RESUME</a>
              <a>WORK</a>
              <a>CONTACT</a>
            </nav>
          </div>
          <div className='content-container'>
            <h1>I'm Quan Nguyen</h1>
            <h3>I'm a full stack developer with a passion for lifelong learning</h3>
            <p>Icons goes here</p>
          </div>
        </div>
        <div className='bottom-portion'>
            somemore text here

        </div>
      </div>
    )
  }
}
export default LandingPage

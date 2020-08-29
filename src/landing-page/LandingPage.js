import React, { Component } from 'react'
import Typical from 'react-typical'
import { SocialIcon } from 'react-social-icons'
import { FaAngleDown } from 'react-icons/fa'
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
            <h1>Hi, I'm Quan Nguyen</h1>
            <p>I'm a </p>
            <Typical
              loop={Infinity}
              steps={[
                'Full-Stack Developer 💻',
                1000,
                'Lifelong Learner 📚',
                1000,
                'Open Sourcer ✔',
                1000
              ]}
            />
            <div className='icons-container'>
              <SocialIcon url='https://github.com/qtn2932' />
              <SocialIcon url='https://www.linkedin.com/in/quan-nguyen-60623b141/' />
              <SocialIcon url='mailto:quan.nguyen199712@gmail.com' network='email' />
            </div>
          </div>
          <div className='scroll-icon-container'>
            <FaAngleDown className='scroll-icon' />
          </div>
        </div>
      </div>
    )
  }
}
export default LandingPage

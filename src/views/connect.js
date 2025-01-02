import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './connect.css'

const Connect = (props) => {
  return (
    <div className="connect-container">
      <Helmet>
        <title>Connect with us | FreeLearn</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Connect with us | FreeLearn" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="connect-hero">
        <header className="connect-heading">
          <div id="notifcation" className="connect-notification">
            <Announcement
              rootClassName="announcement-root-class-name9"
              className="connect-component"
            ></Announcement>
          </div>
          <Navbar></Navbar>
        </header>
      
      </div>
      
      <div className="connect-video">
      <div className="about-content">
          <h2 className="about-text">
            <span>Connect With Us</span>
          </h2>
          <div className="about-highlight">
            <span className="about-text04">
              <span className="about-text05">
                You can mail us at <a href="mailto:FreeLearn@gmail.com">
          <b>FreeLearn@gmail.com</b>
        </a>
              </span>
              <br></br>
              <br></br>
              We are also active on <a href="https://www.instagram.com/FreeLearn">
          <b>Instagram</b>
        </a>
              <br></br>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>

      </div>
      <div className="connect-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default Connect

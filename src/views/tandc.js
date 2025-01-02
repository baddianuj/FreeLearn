import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './tandc.css'

const Tandc = (props) => {
  return (
    <div className="about-container">
      <Helmet>
        <title>About Us | FreeLearn</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="About Us | FreeLearn" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="about-hero">
        <header className="about-heading">
          {/* <div id="notifcation" className="about-notification">
            <Announcement
              rootClassName="announcement-root-class-name6"
              className="about-component"
            ></Announcement>
          </div> */}
          <Navbar></Navbar>
        </header>
      <div className="tandc-content">
          <h2 className="about-text">
            <span>Terms & Conditions</span>
          </h2>
          <div className="tandc-highlight">
            <span className="about-text04">
              <span className="about-text05">
              <b>Important Note -</b> Dear User, please note that all the features provided by FreeLearn, there sole purpose is for visualisation. The visualiser&apos;s
                only helps in understanding how the algorithms works.
              </span>
              <br></br>
              <br></br>
              <span>
              • The only way FreeLearn supports itself is by running ads on the website
              </span>
              <br></br>
              <br></br>
              <span>
              • We Hereby confirm that no other website is owned by us, other than this website or www.FreeLearn.com.
              </span>
              <br></br>
              <br></br>
              <span>
              • The sole purpose of FreeLearn is to provide algorithm
                visualizations be it sorting algorithm visualization or path finding algorithm visualization
              </span>
              <br></br> 
              <br></br>
              <span>
              • All the features provided by FreeLearn are free of cost, hence no money is charged to the user in any form.
              </span>
              <br></br>
              <br></br>
            </span>
          </div>
        </div>
      </div>
      <div className="about-video"></div>
      <div className="about-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default Tandc
 
import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './why-us.css'

const WhyUs = (props) => {
  return (
    <div className="why-us-container">
      <Helmet>
        <title>Why Us? | LearnWhileLearning</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Why Us? | LearnWhileLearning" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="why-us-hero">
        <header className="why-us-heading">
          {/* <div id="notifcation" className="why-us-notification">
            <Announcement
              rootClassName="announcement-root-class-name8"
              className="why-us-component"
            ></Announcement>
          </div> */}
          <Navbar></Navbar>
        </header>
      </div>
      <div className="why-us-video"></div>
      <div className="why-us-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default WhyUs

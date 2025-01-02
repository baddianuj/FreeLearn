import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './privacy.css'

const Privacy = (props) => {
  return (
    <div className="privacy-container">
      <Helmet>
        <title>Privacy Policy | FreeLearn</title>
        <meta name="description" content="Description of the website" />
        <meta property="og:title" content="Future Scope | FreeLearn" />
        <meta property="og:description" content="Description of the website" />
      </Helmet>
      <div className="privacy-hero">
        <header className="privacy-heading">
          {/* <div id="notifcation" className="privacy-notification">
            <Announcement
              rootClassName="announcement-root-class-name5"
              className="privacy-component"
            ></Announcement>
          </div> */}
          <Navbar></Navbar>
        </header>
      </div>
      <div className='privacy-content'>
      <h2 className="about-text">
            <span>Privacy Policy</span>
          </h2>
          <div className="about-highlight">
            <span className="about-text04">
              <span className="about-text000">
              <br></br>
              <b className='version-text'>Learn While Learning ("we", "our", "us") operates the website FreeLearn.in (the "Site"). This page informs you of our policies regarding the collection, use, and disclosure of Personal Information we receive from users of the Site.</b>
              <br></br>
              <br></br>
              <b>1. Information Collection and Use: </b>
              <br/>While using our Site, we may request access to your location information to enhance your experience with our path finding visualizer feature. You have the option to deny this request. If you choose to deny access, you can manually select any location from the map to use the feature. We do not collect any other personally identifiable information from our users.
              <br></br>
              <br></br>
              <b>2. Changes to This Privacy Policy:</b>
              <br/>This Privacy Policy is effective as of 01-June, 2024 and will remain in effect except with respect to any changes in its provisions in the future, which will be in effect immediately after being posted on this page. We reserve the right to update or change our Privacy Policy at any time, and you should check this Privacy Policy periodically. Your continued use of the Service after we post any modifications to the Privacy Policy on this page will constitute your acknowledgment of the modifications and your consent to abide and be bound by the modified Privacy Policy.
              <br></br>
              <br></br>
              <b>3. Contact Us</b>
              <br/>If you have any questions about this Privacy Policy, please contact us at learnwhileyouarelearning@gmail.com.
              <br></br>
              <br></br>
            
            </span>
            </span>
          </div>
          </div>
      <div className="privacy-banner-container"></div>
      <Footer1></Footer1>
    </div>
  )
}

export default Privacy

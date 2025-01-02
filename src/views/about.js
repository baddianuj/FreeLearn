import React from 'react'

import { Helmet } from 'react-helmet'

import Announcement from '../components/announcement'
import Footer1 from '../components/footer1'
import Navbar from '../components/navbar'
import './about.css'

const About = (props) => {
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
      <div className="about-content">
          <h2 className="about-text">
            <span className="about-text01">
              What is
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span>FreeLearn</span>
            <span className="about-text03"> About?</span>
          </h2>
          <div className="about-highlight">
            <span className="about-text04">
              <span className="about-text05">
                FreeLearn is an algorithm visualising platform where
                users are able to visualise various algorithm be it sorting
                algorithm visualisation or path finding algorithm visualisation,
                visualisation helps the users to understand how the algorithm
                works.
              </span>
              <br></br>
              <br></br>
              <span>
                FreeLearn is also world&apos;s first such platform that
                provides visualisation for listing methods of DSA.The
                differentiating factor that make FreeLearn unique from
                others is that, no other platform provides all the visualisers
                in one particular website and also with such visually appealing
                graphics that FreeLearn provides.
              </span>
              <br></br>
              <br></br>
              <span>
                FreeLearn charges no money for the feature and is
                completely free of cost without any additional costs in any
                kind. If you want to support us, you can watch the ads, if you
                see one as that&apos;s the only way we support the website.
              </span>
              <br></br>
              <br></br>
              <span>
                We hate the ads just as much as you do. The motive was never
                earning through this website but to teach DSA to everyone. The
                ads are just to support the expenses of the website.
              </span>
              <br></br>
              <br></br>
              <span>
                We also take up selected promotions which are displayed as
                banners on our website. Only one promotion is taken up at a time
                to maximise the reach of the promotion. 
              </span>
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

export default About

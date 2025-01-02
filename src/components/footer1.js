import React from 'react'

import PropTypes from 'prop-types'

import Footer from './footer'
import './footer1.css'

const Footer1 = (props) => {
  return (
    <div className={`footer1-container ${props.rootClassName} `}>
      <div className="footer1-get-started">
        <div className="footer1-content">
          <div className="footer1-heading">
            <h2 className="footer1-text">
              <span className="">
                Connect with
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="footer1-text2">FreeLearn</span> <br></br>
              <span className=""> now!</span>
            </h2>
            <span className="footer1-text4">
              <span className="">
                Here is our mail, through which you can
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="footer1-text6">reach us</span>
              <span className="footer1-text7">!</span>
              <br/>
              (for promotional purpose only)
            </span>
          </div>
          <div className="footer1-hero-buttons">
            <a href='mailto:freelearn@gmail.com'>
            <div className="footer1-android-btn">
              <img
                alt={props.androidAlt}
                src={props.androidSrc}
                className="footer1-android"
              />
              <span className="footer1-caption">{props.caption}</span>
            </div>
            
            </a>
          </div>
        </div>
      </div>
      <Footer className=""></Footer>
    </div>
  )
}

Footer1.defaultProps = {
  androidAlt: 'pastedImage',
  androidSrc: '/screenshot/gmail-icon-1024x1024-09wrt8am-200h.png',
  caption: 'Reach us out',

  rootClassName: '',
}

Footer1.propTypes = {
  androidAlt: PropTypes.string,
  androidSrc: PropTypes.string,
  caption: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default Footer1

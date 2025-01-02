import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import './navbar.css'

const Navbar = (props) => {
  return (
    <header className="navbar-navbar">
      <div className="navbar-desktop">
        <div className="navbar-main">
          <div className="navbar-branding">
            <Link to="/" className="navbar-navlink">
              <img
                alt={props.brandingAlt}
                src="/screenshot/logo white bg-200h-400w.png"
                className="navbar-finbest"
              />
            </Link>
          </div>
        </div>
        <div className="navbar-quick-actions">
          <div className="navbar-sign-up-btn">
            <Link to="/sorting" className="navbar-navlink1">
              <span className="navbar-sign-up">
                <span className="navbar-text">Sort Visualizer</span>
                <br />
              </span>
            </Link>
          </div>
          {/* New Button for Code Editor */}
          <div className="navbar-code-editor-btn">
            <Link to="/code-editor" className="navbar-navlink2">
              <span className="navbar-code-editor">
                <span className="navbar-text">Code Editor</span>
                <br />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div id="mobile-menu" className="navbar-mobile">
        <div className="navbar-top">
          <img
            alt={props.imageAlt}
            src={props.imageSrc}
            className="navbar-image"
          />
          <svg
            id="close-mobile-menu"
            viewBox="0 0 1024 1024"
            className="navbar-icon"
          >
            <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
          </svg>
        </div>
        <div className="navbar-links">
          <Link to="/" className="navbar-navlink3">
            {props.text1}
          </Link>
          <Link to="/" className="navbar-navlink4">
            {props.text11}
          </Link>
          <Link to="/" className="navbar-navlink5">
            {props.text12}
          </Link>
          <Link to="/" className="navbar-navlink6">
            {props.text13}
          </Link>
          <div className="navbar-buttons">
            <Link to="/" className="navbar-navlink7">
              <div className="navbar-btn">
                <span className="navbar-text2">{props.text131}</span>
              </div>
            </Link>
            <Link to="/" className="navbar-navlink8">
              <div className="navbar-btn1">
                <span className="navbar-text3">{props.text1311}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <div className="navbar-container1"></div>
      </div>
    </header>
  )
}

Navbar.defaultProps = {
  link3: 'Prices\n',
  text1: 'Features',
  text12: 'Prices',
  link4: 'Contact\n',
  brandingSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/afed3d97-066a-440a-a27e-491fdc7ac2b5?org_if_sml=15413',
  link1: 'Features',
  text131: 'Log in',
  imageAlt: 'image',
  pastedImageSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/4a46e3f6-a2fb-4002-a0ce-bb246bd8698d/191f70d5-9a02-4b3a-a398-d21659aa57d0?org_if_sml=1195',
  text1311: 'Sign up',
  text13: 'Contact',
  link2: 'How it works',
  pastedImageAlt: 'pastedImage',
  imageSrc: '/pastedimage-cx4wqj.svg',
  brandingAlt: 'pastedImage',
  text11: 'How it works',
}

Navbar.propTypes = {
  link3: PropTypes.string,
  text1: PropTypes.string,
  text12: PropTypes.string,
  link4: PropTypes.string,
  brandingSrc: PropTypes.string,
  link1: PropTypes.string,
  text131: PropTypes.string,
  imageAlt: PropTypes.string,
  pastedImageSrc: PropTypes.string,
  text1311: PropTypes.string,
  text13: PropTypes.string,
  link2: PropTypes.string,
  pastedImageAlt: PropTypes.string,
  imageSrc: PropTypes.string,
  brandingAlt: PropTypes.string,
  text11: PropTypes.string,
}

export default Navbar
